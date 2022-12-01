FROM libeufin-base
COPY libeufin-nexus/entrypoint.sh /entrypoint.sh
COPY libeufin-nexus/one_time_setup.sh /one_time_setup.sh
ENTRYPOINT /entrypoint.sh
