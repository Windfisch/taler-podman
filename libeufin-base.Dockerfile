FROM debian:bullseye
RUN apt-get -y update && apt-get -y install --no-install-recommends gnupg2 curl ca-certificates
RUN curl https://taler.net/taler-systems.gpg.key | apt-key add -
RUN echo 'deb https://deb.taler.net/apt/debian bullseye main' >> /etc/apt/sources.list.d/taler.list
RUN apt-get -y update && apt-get -y install --no-install-recommends openjdk-11-jre-headless git make gradle python3 python3-setuptools python3-click python3-requests
RUN cd /tmp && git clone https://github.com/Windfisch/libeufin; cd libeufin; git checkout 893d603ff7e2f9f844dd43d0e9ec5eee8f5d4c51
RUN cd /tmp/libeufin && ./bootstrap && ./configure --prefix=/usr/local && make install
RUN apt-get -y purge --autoremove git make gradle python3-setuptools
RUN rm -rf /tmp/libeufin
