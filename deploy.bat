#!/bin/bash
git add .
git commit -m "📚 Daily update - $(date '+%Y-%m-%d')"
git push -u origin main --force

