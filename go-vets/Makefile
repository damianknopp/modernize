run-server:
	@echo run dev server
	@go run server.go

docker-image:
	@echo build docker image
	@docker build . -t vets-server

build:
	@echo building
	@go build -o vets-server

clean:
	@echo cleaning
	@rm -rf vets-server

tidy:
	@echo tidy
	@go mod tidy
	
download:
	@echo download go.mod dependencies
	@go mod download

install-tools: download
	@echo installing tools from tools.go
	@cat tools.go | grep _ | awk -F'"' '{print $$2}' | xargs -tI % go install %

generate:
	@echo generate code from graphql schema
	@go run github.com/99designs/gqlgen generate 

