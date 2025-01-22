## API Endpoints

La API tiene los siguientes endpoints:

### `GET /cars`
Obtiene la lista de todos los carros.

### `POST /cars`
Agrega un nuevo carro. Requiere un body con los datos del carro a crear.

### `PUT /cars/:id`
Actualiza la información de un carro existente. Requiere el `id` y los nuevos datos en la solicitud.

### `DELETE /cars/:id`
Elimina un carro por su `id`

## Instrucciones para Correr el Proyecto

### Ejecutar el Frontend

1. cd frontend
2. yarn install
3. yarn run dev

### Ejecutar el Backend
1. docker-compose up --build
