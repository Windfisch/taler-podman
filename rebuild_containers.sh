#!/bin/bash
for i in libeufin-{base,sandbox,nexus} taler-exchange-insecure taler-merchant; do
	docker build --tag "$i"':'latest -f $i.Dockerfile . || exit 1
done
