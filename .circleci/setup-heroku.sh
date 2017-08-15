#!/bin/bash

# TODO config.ymlの方の環境変数で設定出来るようにする。
git remote add heroku git@heroku.com:${HEROKU_APP_NAME}.git

cat >> ~/.ssh/config << EOF
Host heroku.com
    HostName heroku.com
    User git
    IdentityFile ~/.ssh/heroku
EOF

chmod 600 ~/.ssh/config


# Add heroku.com to the list of known hosts
ssh-keyscan -H heroku.com >> ~/.ssh/known_hosts