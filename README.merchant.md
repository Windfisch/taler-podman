# Merchant setup

This section is for you if you want to sell anything and accept Talers as a payment
method. For example, this could be the event organizer selling beer, or an event guest
who offers a cool interactive light installation in exchange for some tokens. (That they
can later use to buy beer, obviously.)

## Starting the container

Build the container:

```bash
docker build --tag taler-merchant:latest -f taler-merchant.Dockerfile .
```

Start the merchant container. Note the slash at the end of the `EXCHANGE_URL`.

```
docker run -e TOKEN=supersecret -e EXCHANGE_URL=https://taler.example.org/ -it -p 8888:8888 taler-merchant
```

## Configuring the merchant backend.

We assume you have already created a bank account. If not, head to `https://bank.taler.example.org/webui`
and register a new one.

Connect to your merchant backend's main page via your HTTPS reverse proxy and login using your
`supersecret` token.

Then you need to fill out the merchant's details, and watch out for the following quirks:

- You need to click the red "Set access token" button and set the same `supersecret` token
  again.
- Don't forget to configure a bank account with the correct IBAN.

Otherwise, the gray "Submit" button won't turn green.

## Tips and Tricks

When creating an order, it might be useful to `Clear` the refund deadline. This ensures
that your money can instantly be wired to your account.

When transaction fees are zero, it might be advantageous to set the wire transfer deadline
to something very low. The merchant backend will wait this long until it redeems your talers
into your bank account.

You need to do this on every transaction, not as a global setting.

## Caution

The merchant's database lives *inside the docker container*. Don't delete the container
or you will lose your database.

The container does "trust on first use" on the exchange. Make sure your connection is not
compromised when launching the container.

## Further reading

https://docs.taler.net/taler-merchant-api-tutorial.html
