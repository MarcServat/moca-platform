#!/usr/bin/env bash

npm run build

aws s3 cp dist/ s3://moca-platform/ --acl public-read-write --recursive

