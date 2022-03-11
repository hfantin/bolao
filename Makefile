APP_NAME:=bolao

all: clean update build front-install front-build

clean: 
	rm -rf bin

update: 
	go get -u
	go mod tidy

build:
	GOOS=linux GOARCH=amd64 CGO_ENABLED=0 go build -o bin/$(APP_NAME)

front-install: 
	yarn --cwd ./.static install

front-build: 
	yarn --cwd ./.static build

docker: 
	docker build -t $(APP_NAME) .