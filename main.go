package main

import (
	"log"
	"net/http"

	"github.com/hfantin/bolao/config"
	"github.com/hfantin/bolao/router"
)

func main() {
	router := router.NewRouter()
	log.Println("Rodando servidor na porta ", config.Env.ServerPort)
	log.Fatal(http.ListenAndServe(":"+config.Env.ServerPort, router))
}
