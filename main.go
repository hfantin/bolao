package main

import (
	"log"
	"net/http"

	"github.com/gorilla/mux"
	"github.com/hfantin/bolao/config"
	"github.com/hfantin/bolao/controller"
)

func main() {
	router := mux.NewRouter()
	router.HandleFunc("/numeros", controller.GetNumerosAleatorios).Methods("GET")
	router.HandleFunc("/numeros/{qtd}", controller.GetNumerosAleatorios).Methods("GET")
	router.HandleFunc("/numeros/{qtd}/jogos/{jogos}", controller.GetNumerosAleatorios).Methods("GET")
	router.HandleFunc("/resultados/{limite}", controller.GetUltimosResultados).Methods("GET")
	router.PathPrefix("/").Handler(http.FileServer(http.Dir("./.static/")))
	log.Println("Rodando servidor na porta ", config.Env.ServerPort)
	log.Fatal(http.ListenAndServe(":"+config.Env.ServerPort, router))
}
