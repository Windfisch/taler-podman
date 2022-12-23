# GNU Taler test setup

This is a readily `podman`-ified Taler test setup. Note that some shortcuts were taken to keep this
simple, especially in terms of security (see below).

## First-time setup

Build the containers:

```bash
for i in libeufin-{base,sandbox,nexus} taler-exchange-insecure; do
	podman build --tag "$i"':'"latest" -f $i.Dockerfile
done
```

Make sure that you start with a fresh and clean database. Having old databases around
will not re-run the database setup, which can result in wrong passwords being set and
general confusion. Then create a `.env` file with the appropriate passwords set

```bash
sudo rm -rf data
./make_env.sh
```

## Starting the system

Source the `.env` file and launch the containers

```bash
source .env
podman-compose up
```

## Withdrawing money

Point your wallet to `http://yourhostname:8081`.
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

## Stopping the system

```bash
podman-compose down --timeout 1
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
