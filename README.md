Author: Josue Jimenez

Biblioduddy is a project with the architecture client-server.

Frontend:
Where We use react with vite to create the all frotend environment.

Backend: 
Where We use node with express to create the API

Database

Where We use MySQL to save the all data that income and outcome from our system.

How to start the project?

There are two ways to start it:

1: Go to the principal path "bibliobuddy" and write the next comands:

1 Create a .env with the credentials user root and pasword root the other
credential are in the .env_example

1.2 docker-compose build

When the process is finished write the next comand:

1.3: docker-compose up

To access the app you have to go to your brower and enter the url "localhost:5173"



2: Go to database and import in your DBMS the all data.

2.1 Create a .env with your credentials

2.2 Go to the backend file path and run the command "node app.js"

2.3 Go to the frontend file path and run the comand npm run dev

To access the app you have to go to your brower and enter the url "localhost:5173"
