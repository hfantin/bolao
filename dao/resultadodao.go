package dao

import (
	"errors"
	"fmt"

	"github.com/hfantin/bolao/db"
	"github.com/hfantin/bolao/model"
)

func FindAll() ([]model.Resultado, error) {
	statement := fmt.Sprintf("SELECT id, TO_CHAR(\"data\", 'DD/MM/YYYY'), dezena_1, dezena_2, dezena_3, dezena_4, dezena_5, dezena_6 FROM resultados order by id desc")
	rows, err := db.DB.Query(statement)
	if err != nil {
		return nil, err
	}
	defer rows.Close()
	resultados := make([]model.Resultado, 0)
	for rows.Next() {
		r := model.Resultado{}
		dezenas := make([]int, 6, 6)

		if err := rows.Scan(&r.Id, &r.Data, &dezenas[0], &dezenas[1], &dezenas[2], &dezenas[3], &dezenas[4], &dezenas[5]); err != nil {
			return nil, err
		}
		r.Dezenas = dezenas
		resultados = append(resultados, r)
	}
	return resultados, nil
}

func FindLast() (model.Resultado, error) {
	statement := fmt.Sprintf("SELECT id, TO_CHAR(\"data\", 'DD/MM/YYYY'), dezena_1, dezena_2, dezena_3, dezena_4, dezena_5, dezena_6 FROM resultados order by id desc limit 1")
	rows, err := db.DB.Query(statement)
	var resultado model.Resultado
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

func FindById(jogo int) (model.Resultado, error) {
	statement := fmt.Sprintf("SELECT id, TO_CHAR(\"data\", 'DD/MM/YYYY'), dezena_1, dezena_2, dezena_3, dezena_4, dezena_5, dezena_6 FROM resultados WHERE id=%d", jogo)
	rows, err := db.DB.Query(statement)
	var resultado model.Resultado
	if err != nil {
		return resultado, err
	}
	defer rows.Close()
	if rows.Next() {
		dezenas := make([]int, 6)
		if err := rows.Scan(&resultado.Id, &resultado.Data, &dezenas[0], &dezenas[1], &dezenas[2], &dezenas[3], &dezenas[4], &dezenas[5]); err != nil {
			return resultado, err
		}
		resultado.Dezenas = dezenas
	} else {
		return resultado, errors.New(fmt.Sprintf("Não existe o jogo %d", jogo))
	}

	return resultado, nil
}
