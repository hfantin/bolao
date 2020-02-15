package controller

import (
	"net/http"
	"strconv"

	"github.com/gorilla/mux"
	"github.com/hfantin/bolao/service"
	"github.com/hfantin/bolao/utils"
)

func GetNumerosAleatorios(w http.ResponseWriter, r *http.Request) {
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
	utils.ReturnResponseWithJson(w, http.StatusOK, lista)
}
