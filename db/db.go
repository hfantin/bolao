package db

import (
	"database/sql"
	"fmt"
	"log"

	"github.com/hfantin/bolao/config"
	_ "github.com/lib/pq"
)

var DB *sql.DB

func init() {
	env := config.Env
	log.Println("abrindo conexao com o Banco de Dados...")
	DB = connect(env.DBHost, env.DBPort, env.DBUser, env.DBPass, env.DBName)

}

func connect(host string, port int, user, password, dbname string) *sql.DB {
	// dbUri := fmt.Sprintf("%s:%s@tcp(%s)/%s", user, password, host, dbname)
	psqlInfo := fmt.Sprintf("host=%s port=%d user=%s password=%s dbname=%s",
		host, port, user, password, dbname)

	db, err := sql.Open("postgres", psqlInfo)
	if err != nil {
		log.Fatal(err)
	}
	db.SetMaxOpenConns(10)
	db.SetMaxIdleConns(5)
	// db.SetConnMaxLifetime(1000)
	return db
}
