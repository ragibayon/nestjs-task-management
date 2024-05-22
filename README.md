# Task Management
This is a monorepo that provides the code of backed services for a task management application. 

The backend services are subdivided into four separate microservices: the ```authentication``` , ```task-manager```, ```notification``` and ```analytics``` microservice. All the microservices are connected via the  ```RabbitMQ``` message-broker and share the same ```Mongodb``` NoSQL  database.

## Running the application
To run the application we need ```docker``` and ```docker compose```

1. To run the application
   ```bash
   docker compose up
   ```
2. To stop the application
   ```bash
   docker compose down
   ``` 
