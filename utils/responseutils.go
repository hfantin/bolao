package utils

import (
	"encoding/json"
	"net/http"
)

func ReturnResponseWithError(w http.ResponseWriter, message string) {
	ReturnResponseWithJson(w, http.StatusInternalServerError, map[string]string{"error": message})
}

func ReturnResponseWithJson(w http.ResponseWriter, code int, payload interface{}) {
	response, _ := json.Marshal(payload)
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(code)
	w.Write(response)
}
