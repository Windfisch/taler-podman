#!/bin/bash

./one_time_setup.sh &
libeufin-nexus serve --port 5017 --no-localhost-only
