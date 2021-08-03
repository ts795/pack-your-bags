# Pack Your Bags

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
After doing that, create a .env file in the same directory as server.js with the following content
```
DB_NAME=pyb_db
DB_USER=root
DB_PASSWORD=<your mysql password>
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
