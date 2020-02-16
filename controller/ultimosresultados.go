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
	Id      int    `json:"jogo"`
	Data    string `json:"data"`
	Dezenas []int  `json:"dezenas"`
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
		var d1 int
		var d2 int
		var d3 int
		var d4 int
		var d5 int
		var d6 int

		if err := rows.Scan(&r.Id, &r.Data, &d1, &d2, &d3, &d4, &d5, &d6); err != nil {
			return nil, err
		}
		r.Dezenas = []int{d1, d2, d3, d4, d5, d6}
		resultados = append(resultados, r)
	}
	return resultados, nil
}
