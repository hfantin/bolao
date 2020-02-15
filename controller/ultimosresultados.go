package controller

import (
	"fmt"
	"net/http"
	"strconv"

	"github.com/gorilla/mux"
	"github.com/hfantin/bolao/db"
	"github.com/hfantin/bolao/utils"
)

type Resultado struct {
	Id   int    `json:"id"`
	Data string `json:"data"`
	D1   int    `json:"d1"`
	D2   int    `json:"d2"`
	D3   int    `json:"d3"`
	D4   int    `json:"d4"`
	D5   int    `json:"d5"`
	D6   int    `json:"d6"`
}

func GetUltimosResultados(w http.ResponseWriter, r *http.Request) {
	params := mux.Vars(r)
	limite, err := strconv.Atoi(params["limite"])
	if err != nil {
		limite = 1
	}
	lista, err := getResults(limite)
	if err != nil {
		fmt.Println("erro: ", err)
		utils.ReturnResponseWithError(w, err.Error())
		return
	}
	utils.ReturnResponseWithJson(w, http.StatusOK, lista)
}

func getResults(limite int) ([]Resultado, error) {
	statement := fmt.Sprintf("SELECT id, TO_CHAR(\"data\", 'DD/MM/YYYY'), dezena_1, dezena_2, dezena_3, dezena_4, dezena_5, dezena_6 FROM resultados order by id desc limit %d", limite)
	rows, err := db.DB.Query(statement)
	if err != nil {
		return nil, err
	}
	defer rows.Close()
	resultados := make([]Resultado, 0)
	for rows.Next() {
		r := Resultado{}
		if err := rows.Scan(&r.Id, &r.Data, &r.D1, &r.D2, &r.D3, &r.D4, &r.D5, &r.D6); err != nil {
			return nil, err
		}
		resultados = append(resultados, r)
	}
	return resultados, nil
}
