# First-time setup

Build the containers:

```
podman build --tag libeufin-base:latest -f libeufin-base.Dockerfile
podman build --tag libeufin-sandbox:latest -f libeufin-sandbox.Dockerfile
podman build --tag libeufin-nexus:latest -f libeufin-nexus.Dockerfile
```

Make sure that you start with a fresh and clean database. Having old databases around
will not re-run the database setup, which can result in wrong passwords being set and
general confusion.

```
sudo rm -rf data
```

Create a `.env` file with the appropriate passwords set

```
./make_env.sh > .env
```

# Starting the container

Source the `.env` file

```
source .env
```

Launch the containers

```
podman-compose up
```
