#!/bin/bash
git remote add heroku https://git.heroku.com/memoo.git
# Add heroku.com to the list of known hosts
ssh-keyscan -H heroku.com >> ~/.ssh/known_hosts