package main

import (
	"encoding/json"
	"log"
	"net/http"

	"github.com/gorilla/mux"
	"github.com/hfantin/bolao/service"
)

func main() {
	router := mux.NewRouter()
	router.HandleFunc("/numeros", GetNumeros).Methods("GET")
	log.Println("Numero da megasena")
	log.Fatal(http.ListenAndServe(":8000", router))
}

func GetNumeros(w http.ResponseWriter, r *http.Request) {
	lista := service.Generate(2, 6)
	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(lista)
}
