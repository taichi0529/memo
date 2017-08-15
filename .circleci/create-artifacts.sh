#!/usr/bin/env bash

FILENAME="build_"`date -u +"%Y%m%d%H%M%S"`".tar.gz";
cd ~/repo/
mkdir artifacts
tar zcf  ${FILENAME} build/
mv ${FILENAME} artifacts/

