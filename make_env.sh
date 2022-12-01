#!/bin/bash

cat <<-FNORD
export POSTGRES_PASSWORD='`pwgen -s 20`'
export SANDBOX_ADMIN_PASSWORD='`pwgen -s 20`'
export SANDBOX_DB_PASSWORD='`pwgen -s 20`'
export NEXUS_DB_PASSWORD='`pwgen -s 20`'
export NEXUS_ADMIN_PASSWORD='`pwgen -s 20`'
export NEXUS_TALER_PASSWORD='`pwgen -s 20`'
FNORD
