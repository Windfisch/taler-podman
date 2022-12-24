#!/usr/bin/python3
import json
import sys
from decimal import Decimal

data = json.load(sys.stdin)

total = 0

for payment in data['payments']:
    cdi = payment['creditDebitIndicator']
    amount = Decimal(payment['amount'])
    if cdi == 'debit':
        total -= amount
    elif cdi == 'credit':
        total += amount
    else:
        print("Unknown credit debit indicator: %s" % cdi)

print(total)
