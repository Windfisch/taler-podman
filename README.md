# GNU Taler test setup

This is a readily `docker`-ified Taler test setup. Note that some shortcuts were taken to keep this
simple, especially in terms of security. (Works work `podman-compose`, too.)

[Exchange and Bank Setup](README.exchange.md) if you want to host the payment infrastructure for an event.

[Merchant Setup](README.merchant.md) if you are want to receive payments, e.g. to sell bottled caffeine or pixels in your LED strip.

## Quick start

Setup exchange and bank. Create and fill the `cashier` account and log into it using
`https://bank.taler.example.org/webui`. Withdraw some money on the website, which should
create a QR code. (If it doesn't, try again, or try opening the developer's console...)

Scan the code with your android wallet or copy the link into your Firefox wallet. (The chrome
wallet seems broken.)

## Limitations

Currently, although we use Debian *bookworm* in the Dockerfiles, we use the Debian *stable* taler
packages because there's no "bookworm" symlink. Expect this to break once bookworm becomes oldstable.
