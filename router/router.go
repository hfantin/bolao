package router

import (
	"log"
	"net/http"

	"github.com/gorilla/mux"
	"github.com/hfantin/bolao/controller"
)

type Route struct {
	Name        string
	Method      string
	Pattern     string
	HandlerFunc http.HandlerFunc
}

type Routes []Route

var routes = Routes{
	Route{
		"obter numeros - default",
		"GET",
		"/numeros",
		controller.GetNumerosAleatorios,
	},
	Route{
		"obter numeros - com quantidade",
		"GET",
		"/numeros/{qtd}",
		controller.GetNumerosAleatorios,
	},
	Route{
		"obter numeros - com quantidade e jogos",
		"GET",
		"/numeros/{qtd}/jogos/{jogos}",
		controller.GetNumerosAleatorios,
	},
	Route{
		"obter todos os resultados",
		"GET",
		"/resultados",
		controller.GetAll,
	},
	Route{
		"obter ultimo resultado",
		"GET",
		"/resultados/ultimo",
		controller.GetLast,
	},
	Route{
		"obter resultado",
		"GET",
		"/resultados/{jogo}",
		controller.FindById,
	},
	Route{
		"incluir resultado",
		"POST",
		"/resultados",
		controller.Insert,
	},
	Route{
		"atualizar resultado",
		"PUT",
		"/resultados/{jogo}",
		controller.Update,
	},
	Route{
		"apagar resultado",
		"DELETE",
		"/resultados/{jogo}",
		controller.Delete,
	},
}

func NewRouter() *mux.Router {
	router := mux.NewRouter().StrictSlash(true)
	log.Printf("Inicializando %d rotas\n", len(routes))
	for _, route := range routes {
		router.
			Methods(route.Method).
			Path(route.Pattern).
			Name(route.Name).
			Handler(route.HandlerFunc)
	}
	router.PathPrefix("/").Handler(http.FileServer(http.Dir("./.static/build/")))

	return router
}
