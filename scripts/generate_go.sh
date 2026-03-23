#!/bin/bash
set -e

echo "Generating Go protobufs (media...)"

protoc -I ./proto \
  --go_out=./src/generated/go \
  --go-grpc_out=./src/generated/go \
  --go_opt=module=github.com/vendee-cinema/contracts \
  --go-grpc_opt=module=github.com/vendee-cinema/contracts \
  ./proto/media.proto

echo "Go protobufs generation completed"