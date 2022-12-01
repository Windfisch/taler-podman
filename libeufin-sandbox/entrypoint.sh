export LIBEUFIN_SANDBOX_PORT=5016
libeufin-sandbox config --currency MANA default
./one_time_setup.sh &
libeufin-sandbox serve --port $LIBEUFIN_SANDBOX_PORT --no-localhost-only
