#!/bin/bash

cat <<-FNORD
export POSTGRES_PASSWORD='`pwgen -s 20`'
export SANDBOX_ADMIN_PASSWORD='`pwgen -s 20`'
export SANDBOX_DB_PASSWORD='`pwgen -s 20`'
FNORD
