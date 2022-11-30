FROM libeufin-base
RUN printf '#!/bin/bash\n\
export LIBEUFIN_SANDBOX_PORT=5016\n\
libeufin-sandbox config --currency MANA default\n\
libeufin-sandbox serve --port $LIBEUFIN_SANDBOX_PORT --no-localhost-only\n' > /entrypoint.sh
RUN chmod a+x /entrypoint.sh
ENTRYPOINT /entrypoint.sh
