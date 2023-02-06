# syntax=docker/dockerfile:1

## Build
FROM golang:1.20-alpine AS build

WORKDIR /app/vets

RUN apk add --no-cache make

COPY go.mod ./
COPY go.sum ./
COPY tools.go ./
COPY gqlgen.yml ./
COPY Makefile ./
COPY *.go ./
COPY graph ./graph

RUN make install-tools
RUN make generate
RUN make build

EXPOSE 8080

## Deploy
FROM golang:1.20-alpine

WORKDIR /app/vets

COPY --from=build /app/vets/vets-server /app/vets/vets-server

EXPOSE 8080

ENTRYPOINT ["/app/vets/vets-server"]