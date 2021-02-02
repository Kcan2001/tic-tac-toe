# Tic-Tac-Toe Board

To get the Tic Tac Toe board working, follow these instructions:

1. Clone the repo with:
```
git clone git@github.com:Kcan2001/tic-tac-toe.git
```

2. Install npm package, then run both back-end and front-end servers:

```
cd node-server/
run "yarn install" then "yarn start"

then open a seperate command line and run the front end react app: 

cd front-end/
run "yarn install" then "yarn start"
```

## Front end Structure

within the src folder you'll find these folders:  
components - Smaller view components  
constants - Winning game logic  
operations - Infomation and logic related to getting data from the backend node server  
pages - Signup form and tictactoe pages  
utils - main game logic  

## Node-server Structure

index - main file to manage the /auth and /engine routes for the application  


## Technical decisions 

Due to CORS considerations, the API logic was contained in a seperate node-server (the back end).  
In the future, a local docker setup that runs both at the same time would be benificial. As well as potential caching and front-end logic to address game decision performance.  




