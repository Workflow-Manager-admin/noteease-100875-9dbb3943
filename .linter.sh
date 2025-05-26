#!/bin/bash
cd /home/kavia/workspace/code-generation/noteease-100875-9dbb3943/note_app
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

