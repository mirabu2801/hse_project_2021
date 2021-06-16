#!/bin/bash

BASE_DIR=$(pwd)

ng build --output-path $BASE_DIR/../backend/static --watch --output-hashing none
