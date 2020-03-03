package controller

//TODO  remover codigo duplicado
import (
	"encoding/json"
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
		utils.ReturnResponseWithError(w, "Falha o decodificar corpo da requisição: "+err.Error())
		return
	}
	defer r.Body.Close()
	if err := json.Unmarshal(body, &resultado); err != nil {
		utils.ReturnResponseWithError(w, "Falha o converter json: "+err.Error())
		return
	}
	_, err = dao.InsertResultado(resultado)
	if err != nil {
		utils.ReturnResponseWithError(w, err.Error())
		return
	}
	utils.ReturnResponseWithJson(w, http.StatusCreated, nil)
	return
}

func Update(w http.ResponseWriter, r *http.Request) {
	params := mux.Vars(r)
	jogo, err := strconv.Atoi(params["jogo"])
	if err != nil {
		utils.ReturnResponseWithError(w, "Número do jogo inválido")
		return
	}
	var resultado model.Resultado
	body, err := ioutil.ReadAll(io.LimitReader(r.Body, 1048576))
	if err != nil {
		utils.ReturnResponseWithError(w, "Falha o decodificar corpo da requisição: "+err.Error())
		return
	}
	defer r.Body.Close()
	if err := json.Unmarshal(body, &resultado); err != nil {
		utils.ReturnResponseWithError(w, "Falha o converter json: "+err.Error())
		return
	}
	err = dao.AtualizarResultado(jogo, resultado)
	if err != nil {
		utils.ReturnResponseWithError(w, err.Error())
		return
	}
	utils.ReturnResponseWithJson(w, http.StatusNoContent, nil)
	return
}

func Delete(w http.ResponseWriter, r *http.Request) {
	params := mux.Vars(r)
	jogo, err := strconv.Atoi(params["jogo"])
	if err != nil {
		utils.ReturnResponseWithError(w, "jogo inválido")
		return
	}
	err = dao.ApagarResultado(jogo)
	if err != nil {
		utils.ReturnResponseWithError(w, err.Error())
		return
	}
	utils.ReturnResponseWithJson(w, http.StatusNoContent, nil)
	return
}
