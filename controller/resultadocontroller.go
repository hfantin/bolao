package controller

//TODO  remover codigo duplicado
import (
	"encoding/json"
	"fmt"
	"io"
	"io/ioutil"
	"net/http"
	"strconv"

	"github.com/gorilla/mux"
	"github.com/hfantin/bolao/dao"
	"github.com/hfantin/bolao/model"
	"github.com/hfantin/bolao/utils"
)

func GetAll(w http.ResponseWriter, r *http.Request) {
	lista, err := dao.FindAll()
	if err != nil {
		utils.ReturnResponseWithError(w, err.Error())
		return
	}
	utils.ReturnResponseWithJson(w, http.StatusOK, lista)
}

func GetLast(w http.ResponseWriter, r *http.Request) {
	result, err := dao.FindLast()
	if err != nil {
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
	resultado, err := dao.FindById(jogo)
	if err != nil {
		utils.ReturnResponseWithError(w, err.Error())
		return
	}
	utils.ReturnResponseWithJson(w, http.StatusOK, resultado)
}

func Insert(w http.ResponseWriter, r *http.Request) {
	var resultado model.Resultado
	body, err := ioutil.ReadAll(io.LimitReader(r.Body, 1048576))
	if err != nil {
		utils.ReturnResponseWithError(w, "Erro Insert 1: "+err.Error())
		return
	}
	if err := r.Body.Close(); err != nil {
		utils.ReturnResponseWithError(w, "Erro Insert 2: "+err.Error())
		return
	}
	if err := json.Unmarshal(body, &resultado); err != nil {
		utils.ReturnResponseWithError(w, "Erro Insert 3: "+err.Error())
		return
	}
	fmt.Println("resultado: ", resultado)

	utils.ReturnResponseWithError(w, "Erro Insert gererico")
	return
}

func Update(w http.ResponseWriter, r *http.Request) {
	params := mux.Vars(r)
	jogo, err := strconv.Atoi(params["jogo"])
	if err != nil {
		utils.ReturnResponseWithError(w, "jogo inválido")
		return
	}
	var resultado model.Resultado
	body, err := ioutil.ReadAll(io.LimitReader(r.Body, 1048576))
	if err != nil {
		utils.ReturnResponseWithError(w, "Erro Update 2: "+err.Error())
		return
	}
	if err := r.Body.Close(); err != nil {
		utils.ReturnResponseWithError(w, "Erro Update 2: "+err.Error())
		return
	}
	if err := json.Unmarshal(body, &resultado); err != nil {
		utils.ReturnResponseWithError(w, "Erro Update 3: "+err.Error())
		return
	}
	fmt.Println("resultado: ", jogo, resultado)

	utils.ReturnResponseWithError(w, "Erro Update gererico")
	return
}

func Delete(w http.ResponseWriter, r *http.Request) {
	params := mux.Vars(r)
	jogo, err := strconv.Atoi(params["jogo"])
	if err != nil {
		utils.ReturnResponseWithError(w, "jogo inválido")
		return
	}
	fmt.Println("Delete jogo ", jogo)

	utils.ReturnResponseWithError(w, "Erro Delete")
	return
}
