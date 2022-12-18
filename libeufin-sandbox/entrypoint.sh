export LIBEUFIN_SANDBOX_PORT=5016
libeufin-sandbox config --currency MANA default --users-debt-limit 0
libeufin-sandbox default-exchange $EXCHANGE_URL $PAYTO_URL
./one_time_setup.sh &
libeufin-sandbox serve --port $LIBEUFIN_SANDBOX_PORT --no-localhost-only
