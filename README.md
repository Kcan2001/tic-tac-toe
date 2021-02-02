# tic-tac-toe
Tic Tac Toe Board 

To get it working first start the back end server:

node-server/
```
run " yarn start"

then run the front end react app: 

front-end/
```
run "yarn start"


## front end structure

within the src folder you'll find these folders:  
components - Smaller view components  
constants - Winning game logic  
operations - Infomation and logic related to getting data from the backend node server  
pages - Signup form and tictactoe pages  
utils - main game logic  

## node-server structure

index - main file to manage the /auth and /engine routes for the application  


## Technical decisions 

Due to CORS considerations, the API logic was contained in a seperate node-server (the back end).  
In the future, a local docker setup that runs both at the same time would be benificial. As well as potential caching and front-end logic to address game decision performance.  




