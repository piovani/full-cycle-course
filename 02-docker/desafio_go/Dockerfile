FROM golang:alpine3.15 as builder

WORKDIR /usr/src/app

COPY go.mod .
COPY main.go .

RUN go build -o service

FROM hello-world

WORKDIR /usr/src/app

COPY --from=builder /usr/src/app/service .

CMD [ "./service" ]
