FROM libeufin-base
RUN apt-get -y update && apt-get -y install --no-install-recommends pwgen
COPY libeufin-sandbox/entrypoint.sh /entrypoint.sh
COPY libeufin-sandbox/one_time_setup.sh /one_time_setup.sh
ENTRYPOINT /entrypoint.sh
