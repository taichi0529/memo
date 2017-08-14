#!/bin/bash

# TODO config.ymlの方の環境変数で設定出来るようにする。
git remote add heroku https://git.heroku.com/memoo.git
# Add heroku.com to the list of known hosts
ssh-keyscan -H heroku.com >> ~/.ssh/known_hosts