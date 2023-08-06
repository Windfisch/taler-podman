FROM debian:bookworm

RUN apt-get -y update && apt-get -y install --no-install-recommends gnupg2 curl ca-certificates
RUN curl https://taler.net/taler-systems.gpg.key | apt-key add -
RUN echo 'deb https://deb.taler.net/apt/debian stable main' >> /etc/apt/sources.list.d/taler.list
RUN apt-get -y update && apt-get -y --no-install-recommends install taler-exchange taler-exchange-offline

COPY taler-exchange-insecure/entrypoint.sh /entrypoint.sh

ENTRYPOINT /entrypoint.sh
