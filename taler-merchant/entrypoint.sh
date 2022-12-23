#!/bin/bash -e

pg_ctlcluster 13 main start

if ! [ -e /config-done ]; then
	echo "Performing one-time container setup"
	taler-config -s MERCHANTDB-postgres -o CONFIG -V postgres:///merchant
	taler-config -s MERCHANT-EXCHANGE-demo -o EXCHANGE_BASE_URL -V "$EXCHANGE_URL"
	taler-config -s MERCHANT-EXCHANGE-demo -o MASTER_KEY -V $(curl $EXCHANGE_URL/keys | jq -r .master_public_key)
	taler-config -s MERCHANT-EXCHANGE-demo -o CURRENCY   -V $(curl $EXCHANGE_URL/keys | jq -r .currency)
	taler-config -s taler -o CURRENCY -V $(curl $EXCHANGE_URL/keys | jq -r .currency)
	taler-config -s MERCHANT -o SERVE -V tcp
	taler-config -s MERCHANT -o PORT -V 8888
	touch /config-done
fi

if ! sudo -u merchant psql -c ''; then
	echo "Performing one-time database setup"
	sudo -u postgres createuser -d merchant
	sudo -u merchant createdb merchant
	sudo -u merchant taler-merchant-dbinit
fi

TALER_MERCHANT_TOKEN="$TOKEN" sudo -E -u merchant taler-merchant-httpd
