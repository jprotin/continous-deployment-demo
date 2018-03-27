#!/bin/sh -e

echo "#######################################"
echo "##        Rancher ps                 ##"
echo "#######################################"

rancher ps

echo "#######################################"
echo "##        Rancher stacks ls          ##"
echo "#######################################"

rancher stacks ls

echo "#######################################"
echo "## Init check_stack && check_service ##"
echo "#######################################"

check_stack="$(rancher stacks ls | grep $RANCHER_STACK-$RANCHER_SERVICE-$CI_BUILD_REF_NAME)"

echo "#######################################"
echo "##        Start Check Stack          ##"
echo "#######################################"

if [ -z "$check_stack" ]; then
    printf "Create new stack $RANCHER_STACK-$RANCHER_SERVICE-$CI_BUILD_REF_NAME";
    rancher --debug up -d --stack "$RANCHER_STACK-$RANCHER_SERVICE-$CI_BUILD_REF_NAME"
fi
rancher --debug up -d --force-upgrade --pull --stack "$RANCHER_STACK-$RANCHER_SERVICE-$CI_BUILD_REF_NAME" --confirm-upgrade hostedfields php react
echo "#######################################"
echo "##        Rancher End                ##"
echo "#######################################"