#!/bin/bash
source /home/web/.nvm/nvm.sh
export HOST=0.0.0.0
export PORT=4321
exec node /home/web/dev102/dist/server/entry.mjs
