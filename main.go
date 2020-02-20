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
	router.HandleFunc("/resultados", controller.GetAll).Methods("GET")
	router.HandleFunc("/resultados/ultimo", controller.GetLast).Methods("GET")
	router.HandleFunc("/resultados/{jogo}", controller.FindById).Methods("GET")
	router.HandleFunc("/resultados", controller.Insert).Methods("POST")
	router.HandleFunc("/resultados/{jogo}", controller.Update).Methods("PUT")
	router.HandleFunc("/resultados/{jogo}", controller.Delete).Methods("DELETE")

	router.PathPrefix("/").Handler(http.FileServer(http.Dir("./.static/")))
	log.Println("Rodando servidor na porta ", config.Env.ServerPort)
	log.Fatal(http.ListenAndServe(":"+config.Env.ServerPort, router))
}
