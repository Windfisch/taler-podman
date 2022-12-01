#!/bin/bash -e

export LIBEUFIN_SANDBOX_URL=http://localhost:5016

while ! curl --max-time 3 --fail $LIBEUFIN_SANDBOX_URL &>/dev/null; do
	echo "Waiting for sandbox to come up"
	sleep 1
done

if \
	LIBEUFIN_SANDBOX_USERNAME=admin LIBEUFIN_SANDBOX_PASSWORD="$LIBEUFIN_SANDBOX_ADMIN_PASSWORD"\
		libeufin-cli sandbox ebicshost list | grep -q testhost;
then
	echo "Setup has already been done earlier"
else
	echo "Setting up..."
	LIBEUFIN_SANDBOX_USERNAME=admin LIBEUFIN_SANDBOX_PASSWORD="$LIBEUFIN_SANDBOX_ADMIN_PASSWORD"\
		libeufin-cli sandbox ebicshost create --host-id testhost

	LIBEUFIN_SANDBOX_USERNAME=jrluser LIBEUFIN_SANDBOX_PASSWORD=jrlpass\
		libeufin-cli sandbox --sandbox-url $LIBEUFIN_SANDBOX_URL/demobanks/default demobank register

	LIBEUFIN_SANDBOX_USERNAME=admin LIBEUFIN_SANDBOX_PASSWORD="$LIBEUFIN_SANDBOX_ADMIN_PASSWORD"\
		libeufin-cli sandbox --sandbox-url $LIBEUFIN_SANDBOX_URL/demobanks/default demobank new-ebicssubscriber --host-id testhost --partner-id partner01 --user-id user02 --bank-account jrluser
fi
