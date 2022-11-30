#!/bin/bash
set -e

psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" --dbname "$POSTGRES_DB" <<-EOSQL
	CREATE USER sandbox WITH LOGIN PASSWORD '${SANDBOX_DB_PASSWORD}';
	CREATE DATABASE sandbox WITH OWNER sandbox;
EOSQL
