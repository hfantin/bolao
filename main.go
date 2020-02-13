package main

import (
	"encoding/json"
	"log"
	"net/http"
	"os"
	"strconv"

	"github.com/gorilla/mux"
	"github.com/hfantin/bolao/service"
)

func main() {
	router := mux.NewRouter()
	router.HandleFunc("/numeros", GetNumeros).Methods("GET")
	router.HandleFunc("/numeros/{qtd}", GetNumeros).Methods("GET")
	router.HandleFunc("/numeros/{qtd}/jogos/{jogos}", GetNumeros).Methods("GET")
	port := os.Getenv("PORT")
	if port == "" {
		port = "8080"
	}
	log.Println("Rodando servidor na porta ", port)
	log.Fatal(http.ListenAndServe(":"+port, router))
}

func GetNumeros(w http.ResponseWriter, r *http.Request) {
	params := mux.Vars(r)
	qtd, err := strconv.Atoi(params["qtd"])
	if err != nil {
		qtd = 6
	}
	jogos, err := strconv.Atoi(params["jogos"])
	if err != nil {
		jogos = 1
	}
	lista := service.Generate(jogos, qtd)
	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(lista)
}
