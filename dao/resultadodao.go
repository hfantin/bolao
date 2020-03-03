package dao

import (
	"errors"
	"fmt"
	"log"
	"time"

	"github.com/hfantin/bolao/db"
	"github.com/hfantin/bolao/model"
)

func FindAll() ([]model.Resultado, error) {
	statement := fmt.Sprintf("SELECT id, TO_CHAR(\"data\", 'DD/MM/YYYY'), dezena_1, dezena_2, dezena_3, dezena_4, dezena_5, dezena_6, ganhadores FROM resultados order by id desc")
	rows, err := db.DB.Query(statement)
	if err != nil {
		return nil, err
	}
	defer rows.Close()
	resultados := make([]model.Resultado, 0)
	for rows.Next() {
		r := model.Resultado{}
		dezenas := make([]int, 6)

		if err := rows.Scan(&r.Id, &r.Data, &dezenas[0], &dezenas[1], &dezenas[2], &dezenas[3], &dezenas[4], &dezenas[5], &r.Ganhadores); err != nil {
			return nil, err
		}
		r.Dezenas = dezenas
		resultados = append(resultados, r)
	}
	return resultados, nil
}

func FindLast() (model.Resultado, error) {
	statement := fmt.Sprintf("SELECT id, TO_CHAR(\"data\", 'DD/MM/YYYY'), dezena_1, dezena_2, dezena_3, dezena_4, dezena_5, dezena_6, ganhadores FROM resultados order by id desc limit 1")
	rows, err := db.DB.Query(statement)
	var resultado model.Resultado
	if err != nil {
		return resultado, err
	}
	defer rows.Close()
	if rows.Next() {
		dezenas := make([]int, 6, 6)
		if err := rows.Scan(&resultado.Id, &resultado.Data, &dezenas[0], &dezenas[1], &dezenas[2], &dezenas[3], &dezenas[4], &dezenas[5], &resultado.Ganhadores); err != nil {
			return resultado, err
		}
		resultado.Dezenas = dezenas
	}
	return resultado, nil
}

func FindById(jogo int) (model.Resultado, error) {
	statement := fmt.Sprintf("SELECT id, TO_CHAR(\"data\", 'DD/MM/YYYY'), dezena_1, dezena_2, dezena_3, dezena_4, dezena_5, dezena_6, ganhadores FROM resultados WHERE id=%d", jogo)
	rows, err := db.DB.Query(statement)
	var resultado model.Resultado
	if err != nil {
		return resultado, err
	}
	defer rows.Close()
	if rows.Next() {
		dezenas := make([]int, 6)
		if err := rows.Scan(&resultado.Id, &resultado.Data, &dezenas[0], &dezenas[1], &dezenas[2], &dezenas[3], &dezenas[4], &dezenas[5], &resultado.Ganhadores); err != nil {
			return resultado, err
		}
		resultado.Dezenas = dezenas
	} else {
		return resultado, errors.New(fmt.Sprintf("Não existe o jogo %d", jogo))
	}

	return resultado, nil
}

func InsertResultado(r model.Resultado) (int, error) {
	if len(r.Dezenas) != 6 {
		return 0, errors.New("Informe 6 dezenas")
	}
	data, err := time.Parse("02/01/2006", r.Data)
	if err != nil {
		return 0, errors.New("Data Invalida: " + r.Data)
	}
	sql := "INSERT INTO resultados(id, \"data\", ganhadores, dezena_1, dezena_2, dezena_3, dezena_4, dezena_5, dezena_6) VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9) RETURNING id"
	err = db.DB.QueryRow(sql, r.Id, data, r.Ganhadores, r.Dezenas[0], r.Dezenas[1], r.Dezenas[2], r.Dezenas[3], r.Dezenas[4], r.Dezenas[5]).Scan(&r.Id)
	if err != nil {
		return 0, err
	}
	return r.Id, nil
}

func AtualizarResultado(id int, r model.Resultado) error {
	if len(r.Dezenas) != 6 {
		return errors.New("Informe 6 dezenas")
	}
	data, err := time.Parse("02/01/2006", r.Data)
	if err != nil {
		return errors.New("Data Invalida: " + r.Data)
	}
	// var resultado model.Resultado
	sql := "UPDATE resultados SET \"data\"=$1, ganhadores=$2, dezena_1=$3, dezena_2=$4, dezena_3=$5, dezena_4=$6, dezena_5=$7, dezena_6=$8 where id=$9"
	res, err := db.DB.Exec(sql, data, r.Ganhadores, r.Dezenas[0], r.Dezenas[1], r.Dezenas[2], r.Dezenas[3], r.Dezenas[4], r.Dezenas[5], id)
	if err != nil {
		return err
	}
	count, err := res.RowsAffected()
	if err != nil {
		return err
	}
	if count == 0 {
		return errors.New(fmt.Sprintf("Nenhum registro encontrado para o jogo número %d", id))
	}
	log.Println("atualizado com sucesso: ", count)
	return nil
}

func ApagarResultado(id int) error {
	sql := "DELETE FROM resultados where id=$1"
	res, err := db.DB.Exec(sql, id)
	if err != nil {
		return err
	}
	count, err := res.RowsAffected()
	if err != nil {
		return err
	}
	if count == 0 {
		return errors.New(fmt.Sprintf("Nenhum registro encontrado para o jogo número %d", id))
	}
	log.Println("excluido com sucesso: ", count)
	return nil
}
