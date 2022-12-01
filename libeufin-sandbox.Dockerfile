FROM libeufin-base
COPY libeufin-sandbox/entrypoint.sh /entrypoint.sh
COPY libeufin-sandbox/one_time_setup.sh /one_time_setup.sh
ENTRYPOINT /entrypoint.sh
