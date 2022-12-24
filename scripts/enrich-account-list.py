#!/usr/bin/python3

import json
import sys
import os
from decimal import Decimal

data = json.load(sys.stdin)

total = Decimal(0)

for account in data:
    balance = Decimal(os.popen('./account-balance %s' % account['label']).read())
    account["balance"] = str(balance)
    total += balance

print(json.dumps({"accounts": data, "total": str(total)}, indent=4))
    
