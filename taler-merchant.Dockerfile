FROM debian:bullseye

RUN apt-get -y update && apt-get -y install --no-install-recommends gnupg2 curl ca-certificates
RUN curl https://taler.net/taler-systems.gpg.key | apt-key add -
RUN echo 'deb https://deb.taler.net/apt/debian bullseye main' >> /etc/apt/sources.list.d/taler.list
RUN apt-get -y update && DEBIAN_FRONTEND=noninteractive apt-get -y --no-install-recommends install postgresql taler-merchant jq
RUN useradd merchant && mkdir /run/taler && chown merchant:merchant /run/taler

COPY taler-merchant/entrypoint.sh /entrypoint.sh

ENTRYPOINT /entrypoint.sh
