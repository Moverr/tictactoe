# tic-tac-toe

Tic tac toe is a gaming applicaton .
This particular application is between two players x, o [ the serveer plays as o ]
 
To acces this API online visit [API Link ](https://nameless-harbor-22465.herokuapp.com/?board=++ox+x+o+)

### Requirements Building blocks.
- ```nodejs``` - NODE JS is a server  supporting Javascript programming.

- ```Express JS``` - Express is a javascript framework for back-end development

- ```Heroku``` - Heroku is a hosting environment 

### How to run the application locally


First clone this repository
```
 git clone @https://github.com/Moverr/tictactoe/
 cd tictactoe
 ```

NPM install  

 
 
Then run the application
 ```
 npm start
 ```
 Testing  the application
 ```
 npm test
 ```


 ### How to play with the endpoint 
 ## Example
 If I run
    ```
    curl YOUR_URL?board=+xxo++o++
    ```
I should get the exact string oxxo  o   (that’s o-x-x-o-space-space-o-space-space) as the entire contents of the HTTP response body. If your api returns anything else, our unit tests will fail when run on your code.
