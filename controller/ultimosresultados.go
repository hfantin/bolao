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

func GetAll(w http.ResponseWriter, r *http.Request) {
	lista, err := getAllResults()
	if err != nil {
		fmt.Println("erro: ", err)
		utils.ReturnResponseWithError(w, err.Error())
		return
	}
	utils.ReturnResponseWithJson(w, http.StatusOK, lista)
}

func GetLast(w http.ResponseWriter, r *http.Request) {
	result, err := getLast()
	if err != nil {
		fmt.Println("erro: ", err)
		utils.ReturnResponseWithError(w, err.Error())
		return
	}
	utils.ReturnResponseWithJson(w, http.StatusOK, result)
}

func FindById(w http.ResponseWriter, r *http.Request) {
	params := mux.Vars(r)
	jogo, err := strconv.Atoi(params["jogo"])
	if err != nil {
		utils.ReturnResponseWithError(w, "jogo inválido")
		return
	}
	resultado, err := findById(jogo)
	if err != nil {
		fmt.Println("erro: ", err)
		utils.ReturnResponseWithError(w, err.Error())
		return
	}
	utils.ReturnResponseWithJson(w, http.StatusOK, resultado)
}

// TODO mover para outro arquivo

func getAllResults() ([]Resultado, error) {
	statement := fmt.Sprintf("SELECT id, TO_CHAR(\"data\", 'DD/MM/YYYY'), dezena_1, dezena_2, dezena_3, dezena_4, dezena_5, dezena_6 FROM resultados order by id desc")
	rows, err := db.DB.Query(statement)
	if err != nil {
		return nil, err
	}
	defer rows.Close()
	resultados := make([]Resultado, 0)
	for rows.Next() {
		r := Resultado{}
		dezenas := make([]int, 6, 6)

		if err := rows.Scan(&r.Id, &r.Data, &dezenas[0], &dezenas[1], &dezenas[2], &dezenas[3], &dezenas[4], &dezenas[5]); err != nil {
			return nil, err
		}
		r.Dezenas = dezenas
		resultados = append(resultados, r)
	}
	return resultados, nil
}

func getLast() (Resultado, error) {
	statement := fmt.Sprintf("SELECT id, TO_CHAR(\"data\", 'DD/MM/YYYY'), dezena_1, dezena_2, dezena_3, dezena_4, dezena_5, dezena_6 FROM resultados order by id desc limit 1")
	rows, err := db.DB.Query(statement)
	var resultado Resultado
	if err != nil {
		return resultado, err
	}
	defer rows.Close()
	if rows.Next() {
		dezenas := make([]int, 6, 6)
		if err := rows.Scan(&resultado.Id, &resultado.Data, &dezenas[0], &dezenas[1], &dezenas[2], &dezenas[3], &dezenas[4], &dezenas[5]); err != nil {
			return resultado, err
		}
		resultado.Dezenas = dezenas
	}
	return resultado, nil
}

func findById(jogo int) (Resultado, error) {
	statement := fmt.Sprintf("SELECT id, TO_CHAR(\"data\", 'DD/MM/YYYY'), dezena_1, dezena_2, dezena_3, dezena_4, dezena_5, dezena_6 FROM resultados WHERE id=%d", jogo)
	rows, err := db.DB.Query(statement)
	var resultado Resultado
	if err != nil {
		return resultado, err
	}
	defer rows.Close()
	if rows.Next() {
		dezenas := make([]int, 6, 6)
		if err := rows.Scan(&resultado.Id, &resultado.Data, &dezenas[0], &dezenas[1], &dezenas[2], &dezenas[3], &dezenas[4], &dezenas[5]); err != nil {
			return resultado, err
		}
		resultado.Dezenas = dezenas
	}
	return resultado, nil
}
