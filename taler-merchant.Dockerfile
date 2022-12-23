FROM debian:bullseye

RUN apt-get -y update && apt-get -y install --no-install-recommends gnupg2 curl ca-certificates
RUN curl https://taler.net/taler-systems.gpg.key | apt-key add -
RUN echo 'deb https://deb.taler.net/apt/debian bullseye main' >> /etc/apt/sources.list.d/taler.list
RUN apt-get -y update && DEBIAN_FRONTEND=noninteractive apt-get -y --no-install-recommends install postgresql taler-merchant jq
RUN pg_ctlcluster 13 main start && useradd merchant && sudo -u postgres createuser -d merchant && sudo -u merchant createdb merchant && taler-config -s MERCHANTDB-postgres -o CONFIG -V postgres:///merchant && sudo -u merchant taler-merchant-dbinit
RUN taler-config -s MERCHANT-EXCHANGE-demo -o EXCHANGE_BASE_URL -V https://taler.windfis.ch/
RUN taler-config -s MERCHANT-EXCHANGE-demo -o MASTER_KEY -V $(curl `taler-config -s MERCHANT-EXCHANGE-demo -o EXCHANGE_BASE_URL`/keys | jq -r .master_public_key)
RUN taler-config -s MERCHANT-EXCHANGE-demo -o CURRENCY -V $(curl `taler-config -s MERCHANT-EXCHANGE-demo -o EXCHANGE_BASE_URL`/keys | jq -r .currency)
RUN taler-config -s taler -o CURRENCY -V $(curl `taler-config -s MERCHANT-EXCHANGE-demo -o EXCHANGE_BASE_URL`/keys | jq -r .currency)
RUN taler-config -s MERCHANT -o SERVE -V tcp
RUN taler-config -s MERCHANT -o PORT -V 8888
RUN mkdir /run/taler && chown merchant:merchant /run/taler

#COPY taler-exchange-insecure/entrypoint.sh /entrypoint.sh

#ENTRYPOINT /entrypoint.sh
