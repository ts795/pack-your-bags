# Pack Your Bags
![mit](https://img.shields.io/badge/license-MIT-blue)

## Deployed Link: [**Pack Your Bags**](https://glacial-eyrie-53773.herokuapp.com/)


> **Pack Your Bags** 
> - This webApp allows users to create accounts for planning trips.
> - The users can add and remove trips. 
> - Travellers add and remove checklist and to-do items.

***
> **Pack Your Bags** 
***
![Screenshot of Pack Your Bags)](https://i.imgur.com/KzikgBL.png)
![Screenshot of Pack Your Bags)](https://i.imgur.com/aTlmgBr.png)

***
> **Pack Your Bags Demo:**
***
> [**Login Demo**](https://streamable.com/21wojo)
***
> [**Add a trip and item Demo**](https://streamable.com/v6d1ew)
***
> [**Deleting a trip Demo**](https://streamable.com/bj1s6a)
***
> [**Adding and Deleting checklist item Demo**](https://streamable.com/suuurs)
***


## Getting Started

To view and edit the files you can clone the repo from github using the following command:

```
git clone git@github.com:ts795/tech-blog.git
```

After cloning the repo, mySQL, node and npm must be installed. Type
```
npm install
```
to install dependencies.
Go to Unsplash.com to get the Unsplash Api key [https://unsplash.com/developers]
After doing that, create a .env file in the same directory as server.js with the following content
```
DB_NAME=pyb_db
DB_USER=root
DB_PASSWORD=<your mysql password>
UNSPLASH_KEY=<your unsplash api key>
SESSION_SECRET=<your session secret>
```
Then source db/schema.sql in the mysql shell.
After that type:
```
npm run seed
npm run start
```


## Usage

Type 
```
npm run start
```
Open the browser at http://localhost:3001/

***


> #### Coding Languages used on this project:
> - [x] JavaScript
> - [x] Bcrypt
> - [x] Node JS
> - [x] MySQL
> - [x] dotenv
> - [x] Express
> - [x] Express-sessions
> - [x] mocha
> - [x] geckodriver
> - [x] nodemon
> - [x] selenium-webdriver
> - [x] sinon

***
> **Pack Your Bags Team**

> - Sam Lingampalli: sam.l.full.stack@gmail.com
> - Maria Pusparani: hellomariap@gmail.com
> - Trevor Coons: trevcoons@gmail.com
> - Matthew To: matthewto722@gmail.com




