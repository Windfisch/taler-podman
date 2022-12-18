#!/bin/bash -x

export LIBEUFIN_NEXUS_URL=http://localhost:5017
export LIBEUFIN_NEXUS_USERNAME="$ADMIN_USER"
export LIBEUFIN_NEXUS_PASSWORD="$ADMIN_PASSWORD"

while ! curl --max-time 3 --fail $LIBEUFIN_NEXUS_URL &>/dev/null; do
	echo "Waiting for nexus to come up"
	sleep 1
done

# Obtaining the user list only works if the ADMIN_USER has already been created.
# If it fails, perform the setup sequence.
if libeufin-cli users list &> /dev/null; then
	echo "Nexus setup has already been performed, doing nothing..."
else
	echo "Performing nexus setup..."
	libeufin-nexus superuser $LIBEUFIN_NEXUS_USERNAME --password "$LIBEUFIN_NEXUS_PASSWORD" && echo SET SUPERUSER &&
	while ! libeufin-cli connections new-ebics-connection --ebics-url $EBICS_URL --host-id $EBICS_HOST --partner-id $EBICS_PARTNER --ebics-user-id $EBICS_USER $CONNECTION_NAME; do sleep 2; done &&
	while ! libeufin-cli connections connect $CONNECTION_NAME; do sleep 2; done &&
	libeufin-cli connections download-bank-accounts $CONNECTION_NAME &&
	libeufin-cli connections import-bank-account --offered-account-id $ACCOUNT_NAME --nexus-bank-account-id $ACCOUNT_NICKNAME $CONNECTION_NAME  &&
	libeufin-cli accounts task-schedule $ACCOUNT_NICKNAME --task-type submit --task-name submit-payments-each-second --task-cronspec "* * *"  &&
	libeufin-cli accounts task-schedule $ACCOUNT_NICKNAME --task-type fetch --task-name fetch-reports-each-second --task-cronspec "* * *" --task-param-level report --task-param-range-type latest  &&
	libeufin-cli facades new-taler-wire-gateway-facade --currency MANA --facade-name $TALER_FACADE_NAME $CONNECTION_NAME $ACCOUNT_NICKNAME  &&
	#libeufin-cli facades new-anastasis-facade --currency MANA --facade-name ana-facade $CONNECTION_NAME $ACCOUNT_NICKNAME  &&
	libeufin-cli users create $TALER_USER --password $TALER_PASSWORD  &&
	libeufin-cli permissions grant user $TALER_USER facade $TALER_FACADE_NAME facade.talerWireGateway.history  &&
	libeufin-cli permissions grant user $TALER_USER facade $TALER_FACADE_NAME facade.talerWireGateway.transfer  &&
	#libeufin-cli permissions grant user myuser facade ana-facade facade.anastasis.history  &&
	echo "Nexus has been set up successfully" || echo "FAILED TO SET UP NEXUS"
fi
