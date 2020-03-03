package config

import (
	"log"
	"os"
	"strconv"

	"github.com/joho/godotenv"
)

type Environment struct {
	ServerPort string
	DBHost     string
	DBPort     int
	DBUser     string
	DBPass     string
	DBName     string
	SslMode    string
}

var Env Environment

func init() {
	log.Println("Inicializando variaveis de ambiente...")
	err := godotenv.Load()
	if err != nil {
		log.Println("Arquivo .env não encontrado, usando configurações padrão")
	}
	// valores default
	port := getOsEnv("PORT", "5000")
	dbHost := getOsEnv("DB_HOST", "localhost")
	dbPort, err := strconv.Atoi(getOsEnv("DB_PORT", "5432"))
	if err != nil {
		dbPort = 5432
	}
	dbUser := getOsEnv("DB_USER", "admin")
	dbPass := getOsEnv("DB_PASS", "admin")
	dbName := getOsEnv("DB_NAME", "loteria")
	sslMode := getOsEnv("SSL_MODE", "disable")

	Env = Environment{port, dbHost, dbPort, dbUser, dbPass, dbName, sslMode}
}

func getOsEnv(chave, valor string) string {
	if os.Getenv(chave) == "" {
		return valor
	}
	return os.Getenv(chave)
}
