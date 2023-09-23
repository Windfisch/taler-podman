#!/bin/bash

echo Creating .env

rm -f .env

cat <<-FNORD >> .env
export POSTGRES_PASSWORD='`pwgen -s 20`'
export SANDBOX_ADMIN_PASSWORD='`pwgen -s 20`'
export SANDBOX_DB_PASSWORD='`pwgen -s 20`'
export NEXUS_DB_PASSWORD='`pwgen -s 20`'
export NEXUS_ADMIN_PASSWORD='`pwgen -s 20`'
export NEXUS_TALER_PASSWORD='`pwgen -s 20`'
export EXCHANGE_DB_PASSWORD='`pwgen -s 20`'
export MYCURRENCY=MANA
export MYIBAN=DE827320
export EXCHANGE_BASE_URL=https://exchange.taler.example.org
FNORD

. .env

rm -rf exchange-config
cp -r exchange-config.skel exchange-config
find exchange-config -type f | xargs sed -i "s/MYCURRENCY/$MYCURRENCY/g"
find exchange-config -type f | xargs sed -i "s/MYIBAN/$MYIBAN/g"
find exchange-config -type f | xargs sed -i "s/NEXUS_TALER_PASSWORD/$NEXUS_TALER_PASSWORD/g"
find exchange-config -type f | xargs sed -i "s/EXCHANGE_DB_PASSWORD/$EXCHANGE_DB_PASSWORD/g"
