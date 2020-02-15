package config

import (
	"fmt"
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
}

var Env Environment

func init() {
	fmt.Println("Inicializando variaveis de ambiente...")

	// Load dotenv
	err := godotenv.Load()
	if err != nil {
		log.Println(".env not found")
	}
	dbPort, err := strconv.Atoi(os.Getenv("DB_PORT"))
	if err != nil {
		dbPort = 5432
	}
	Env = Environment{os.Getenv("PORT"), os.Getenv("DB_HOST"), dbPort, os.Getenv("DB_USER"), os.Getenv("DB_PASS"), os.Getenv("DB_NAME")}
}
