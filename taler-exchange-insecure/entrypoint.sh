#!/bin/bash -e

MASTER_KEY=`taler-exchange-offline setup`

# ensure it ends with a slash
BASE_URL="${BASE_URL%/}/"

cat <<-FNORD > /etc/taler/overrides.conf
[exchange]
MASTER_PUBLIC_KEY = $MASTER_KEY
BASE_URL = $BASE_URL
FNORD

sleep 10 # FIXME
echo "EXCHANGE STARTING"

taler-exchange-dbinit; echo dbinit returned $?
sleep 2

taler-exchange-dbinit; echo dbinit 2 returned $?


taler-exchange-aggregator -L INFO -l /dev/stdout | tee /var/log/taler-exchange-aggregator.log &
taler-exchange-closer -L INFO -l /dev/stdout | tee /var/log/taler-exchange-closer.log &
taler-exchange-secmod-cs -L INFO -l /dev/stdout | tee /var/log/taler-exchange-secmod-cs.log &
taler-exchange-secmod-rsa -L INFO -l /dev/stdout | tee /var/log/taler-exchange-secmod-rsa.log &
taler-exchange-secmod-eddsa -L INFO -l /dev/stdout | tee /var/log/taler-exchange-secmod-eddsa.log &
taler-exchange-transfer -L INFO -l /dev/stdout | tee /var/log/taler-exchange-transfer.log &
# as of v0.9.2, long-polling in the nexus is broken and always waits the full timeout. So we set it to 1s here.
taler-exchange-wirewatch --longpoll-timeout=1s -L INFO -l /var/log/taler-exchange-wirewatch.log &

taler-exchange-httpd -L DEBUG -l /dev/stdout | tee /var/log/taler-exchange-httpd.log &

{
	set -e
	sleep 3
	echo "Doing taler-offline setup, $MYCURRENCY, $MYIBAN"
	taler-exchange-offline enable-account $(taler-config -s exchange-account-1 -o payto_uri) | taler-exchange-offline upload
	for i in 2022 2023; do
		taler-exchange-offline wire-fee $i iban $MYCURRENCY:0 $MYCURRENCY:0 | taler-exchange-offline upload
		taler-exchange-offline global-fee $i $MYCURRENCY:0 $MYCURRENCY:0 $MYCURRENCY:0 2h 1year 100 | taler-exchange-offline upload
	done
	taler-exchange-offline download | taler-exchange-offline sign | taler-exchange-offline upload
	echo "taler-offline setup complete :)"
	while true; do sleep 100; done
} &

wait -n

echo Killing children
kill $(jobs -p)
