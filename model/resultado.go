package model

type Resultado struct {
	Id      int    `json:"jogo"`
	Data    string `json:"data"`
	Dezenas []int  `json:"dezenas"`
}
