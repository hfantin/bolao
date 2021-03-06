package service

import (
	"math/rand"
	"sort"
	"time"

	"github.com/hfantin/bolao/model"
)

func Generate(jogos, qtd int) []model.Dezenas {
	max := 60

	if qtd < 6 || qtd > 20 {
		qtd = 6
	}

	if jogos < 1 {
		jogos = 1
	}

	jogosGerados := make([]model.Dezenas, 0, 0)
	for i := 1; i <= jogos; i++ {
		numeros := gerarNumeros(max, qtd)
		jogosGerados = append(jogosGerados, model.Dezenas{i, numeros})
	}

	return jogosGerados
}

func gerarNumeros(max, qtd int) []int {
	rand.Seed(time.Now().UnixNano())
	mapa := make(map[int]struct{})
	for i := 0; i < qtd && len(mapa) < max; i++ {
		var numero int
		exists := true
		for exists {
			numero = rand.Intn(max) + 1
			_, exists = mapa[numero]
		}
		mapa[numero] = struct{}{}
	}
	slice := extrairNumeros(mapa)
	sort.Ints(slice)
	return slice
}

func extrairNumeros(mapa map[int]struct{}) []int {
	slice := []int{}
	for k := range mapa {
		slice = append(slice, k)
	}
	return slice
}
