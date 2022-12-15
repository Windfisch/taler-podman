#!/bin/bash

./one_time_setup.sh &
libeufin-nexus serve --log-level INFO --port 5017 --no-localhost-only
