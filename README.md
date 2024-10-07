# CompassCar

## Como executar o sistema

1. Inicie o MySQL:
   - Certifique-se de que o MySQL está instalado e configurado corretamente.

2. Conecte ao banco de dados:
   - Use um cliente MySQL (como o MySQL Workbench) ou o terminal para conectar ao banco de dados.
   - Execute o comando para conectar:
  
     ```sh
     mysql -u seu_usuario -p
     ```

3. Inicie o sistema:
   - Navegue até o diretório do projeto no terminal.
   - Execute o comando para iniciar o sistema:

     ```sh
     npm start
     ```


## Rotas da API

### `/api/v1/cars`

- **POST**: Cria um novo carro.
  - Corpo da requisição: `{ brand, model, year, items }`
  - Respostas possíveis:
    - `201 Created`: `{ id: car.id }`
    - `400 Bad Request`: `{ error: "message" }`
    - `409 Conflict`: `{ error: "there is already a car with this data" }`
    - `500 Internal Server Error`: `{ error: "internal server error" }`

- **GET**: Retorna uma lista de carros com paginação.
  - Parâmetros de consulta: `page`, `limit`, `brand`, `model`, `year`
  - Respostas possíveis:
    - `200 OK`: `{ count, pages, data }`
    - `204 No Content`
    - `500 Internal Server Error`: `{ error: "internal server error" }`

### `/api/v1/cars/:id`

- **GET**: Retorna os detalhes de um carro específico.
  - Respostas possíveis:
    - `200 OK`: `{ car }`
    - `404 Not Found`: `{ error: "car not found" }`
    - `500 Internal Server Error`: `{ error: "internal server error" }`

- **PATCH**: Atualiza os detalhes de um carro específico.
  - Corpo da requisição: `{ brand, model, year, items }`
  - Respostas possíveis:
    - `204 No Content`
    - `400 Bad Request`: `{ error: "message" }`
    - `404 Not Found`: `{ error: "car not found" }`
    - `409 Conflict`: `{ error: "there is already a car with this data" }`
    - `500 Internal Server Error`: `{ error: "internal server error" }`

- **DELETE**: Remove um carro específico.
  - Respostas possíveis:
    - `204 No Content`
    - `404 Not Found`: `{ error: "car not found" }`
    - `500 Internal Server Error`: `{ error: "internal server error" }`