# Exchange and bank setup

This section is for you if you want to operate a GNU Taler Exchange and a Bank, e.g.
because you are deploying it as a local payment system for an event.

## Configure your web server

Adjust and add the two files in `nginx-sites` to your `/etc/nginx/sites-enabled`. Make sure you
get the HTTPS certificates right. The Android app won't talk to you over insecure HTTP.

You won't need the `merchant` location, feel free to remove it.

- Replace `example.org` by your domain in `nginx-sites/taler`.
- Replace `example.org` by your domain in `webui/*`.
- Ensure `/home/taler/webui` exists (copy from `webui/`).

## First-time setup

Build the containers:

```bash
./rebuild_containers.sh
```

Adjust the exchange configuration in `exchange-config.skel` as needed. Adjust `BASE_URL`
in the [docker-compose.yaml](docker-compose-yaml) file to match your publicly visible
URL (i.e. where your nginx reverse proxy is serving; it should contain `https` and not
contain `localhost`).

Make sure that you start with a fresh and clean database. Having old databases around
will not re-run the database setup, which can result in wrong passwords being set and
general confusion. Then create a `.env` file with the appropriate passwords:

```bash
sudo rm -rf data  # clear database
./make_env.sh     # prepare environment etc.
```

## Starting the system

Source the `.env` file and launch the containers

```bash
source .env
docker-compose up
```

## Operating a cashdesk

Navigate to `https://bank.taler.example.org/webui` and register a `cashier` account. In
the `scripts/` directory, run:

```
./restock-cashier 1337
```

load 1337 currency units into the cashier account. (Feels good to be the central bank, doesn't it?)

## Checking account status

In the `scripts/` directory, run:

```
./rich-account-list
```

in order to get a list of all accounts with their associated balances. The `total` sum should be
zero.

Usually, the `bank` account has a negative balance. If you were operating a country, this would mean
that the central bank had "created" money out of nothing.

If you operate an event, then the sum of `bank` and `cashier` should hopefully be equal to the negative
amount of cash in your cashdesk.

## Stopping the system

```bash
podman-compose down --timeout 1
```

## Withdrawing money, the old way

After initiating the withdrawal in your wallet, you are asked to make a wire transfer to
the bank's account using a provided subject.

First, wire the transaction into the bank's account on the sandbox:

```bash
user@host-system:taler-compose$ podman exec -it taler-compose_libeufin_sandbox_1 /bin/bash
root@b23bfa4a27ab:/# LIBEUFIN_SANDBOX_USERNAME=admin LIBEUFIN_SANDBOX_PASSWORD=$LIBEUFIN_SANDBOX_ADMIN_PASSWORD LIBEUFIN_SANDBOX_URL=http://localhost:5016 libeufin-cli sandbox bankaccount simulate-incoming-transaction jrluser --debtor-iban DE123456 --debtor-bic SANDBOXX --debtor-name Fnord --amount MANA:5 --subject 'Taler Withdrawal PKAWS7YEG367744F9B8B7CKTC5KFPS7YH6RMD0NY52TV9TVCED6G'
```

Then, fetch the transactions on the nexus:

```bash
podman exec -it taler-compose_libeufin_nexus_1 /bin/bash
root@ef194aa7d8bd:/# LIBEUFIN_NEXUS_URL=http://localhost:5017 LIBEUFIN_NEXUS_USERNAME=admin LIBEUFIN_NEXUS_PASSWORD=$ADMIN_PASSWORD  libeufin-cli accounts fetch-transactions nickname
```

## Troubleshooting

Exchange logs can be examined using

```bash
user@host-system:taler-compose$ podman exec -it taler-compose_exchange_1 /bin/bash
root@53e68ae5b360:/# cat /var/log/taler-exchange-*.log
```

# Security considerations and other limitations

This setup defeats some security features Taler offers, in order to simplify the setup

- No separation between `taler-exchange` and `taler-exchange-offline` is made. This would enable an
  attacker who exploits the online exchange system to exfiltrate the exchange's master key, allowing
  them to impersonate the exchange *forever*.
- The exchange processes are all run as `root` user. This allows an attacker to exfiltrate short-term
  keys rather than only providing them with a signing/decryption oracle.

Additionally, this setup never renews coins. Coins expire in 2024.

Setup is racy and races are mitigated using sleep. This is as reliable as it sounds.



# Merchant backend

Start the container using

``` 
docker run -e TOKEN=YOUR_TOKEN_HERE -e EXCHANGE_URL=https://your-exchange.org/ --rm -it -p 8888:8888 taler-merchant
```

