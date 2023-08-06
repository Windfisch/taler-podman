#!/bin/bash -e

export LIBEUFIN_SANDBOX_URL=http://localhost:5016

while ! curl --max-time 3 --fail $LIBEUFIN_SANDBOX_URL &>/dev/null; do
	echo "Waiting for sandbox to come up"
	sleep 1
done

if \
	LIBEUFIN_SANDBOX_USERNAME=admin LIBEUFIN_SANDBOX_PASSWORD="$LIBEUFIN_SANDBOX_ADMIN_PASSWORD"\
		libeufin-cli sandbox ebicshost list | grep -q $EBICS_HOST;
then
	echo "Setup has already been done earlier"
else
	echo "Setting up..."
	LIBEUFIN_SANDBOX_USERNAME=admin LIBEUFIN_SANDBOX_PASSWORD="$LIBEUFIN_SANDBOX_ADMIN_PASSWORD"\
		libeufin-cli sandbox ebicshost create --host-id $EBICS_HOST

	LIBEUFIN_SANDBOX_USERNAME=$ACCOUNT_NAME LIBEUFIN_SANDBOX_PASSWORD=`pwgen -s 20`\
		libeufin-cli sandbox demobank register --iban $ACCOUNT_IBAN

	LIBEUFIN_SANDBOX_USERNAME=admin LIBEUFIN_SANDBOX_PASSWORD="$LIBEUFIN_SANDBOX_ADMIN_PASSWORD"\
		libeufin-cli sandbox demobank new-ebicssubscriber --host-id $EBICS_HOST --partner-id $EBICS_PARTNER --user-id $EBICS_USER --bank-account $ACCOUNT_NAME
fi
