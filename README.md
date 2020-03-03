# Bolao - gerador de numeros aleatorios para jogos da megasena
![Heroku](https://heroku-badge.herokuapp.com/?app=bollao&style=flat)

### bibliotecas: 
- go get -d github.com/gorilla/mux
- go get -u github.com/lib/pq
- go get -u github.com/joho/godotenv

### modulos: 
- go mod init github.com/hfantin/bolao

#### links

[heroku-ci badge](https://elements.heroku.com/buttons/gregsadetsky/heroku-ci-badge)   
[auth](https://devcenter.heroku.com/articles/oauth2-heroku-go)   
[gorilla/mux](https://github.com/gorilla/mux)   
[rest example](https://thenewstack.io/make-a-restful-json-api-go)   
[rest example 2](https://medium.com/@hugo.bjarred/rest-api-with-golang-mux-mysql-c5915347fa5b)   



https://stackoverflow.com/questions/39721812/react-router-without-changing-url
https://www.npmjs.com/package/react-infinite-scroll-component

scroll infinito
```

SELECT *
      FROM resultados
      ORDER BY id desc
      offset 30 ROWS
      FETCH NEXT 10 ROWS ONLY

```