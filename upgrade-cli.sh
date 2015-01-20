#!/bin/sh

set -e
set -x

version=$1

npm uninstall -g ember-cli
npm cache clean
bower cache clean
npm install -g ember-cli@$version
rm -rf node_modules bower_components dist tmp
ember install:npm ember-cli@$version
ember install
ember init
