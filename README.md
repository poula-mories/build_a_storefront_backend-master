# Storefront Backend Project


## Project setup instructions


### 1.Requirements to install:
   npm i nodemon --save-dev  -g
   npm i typescript --save-dev -g
   npm i body-parser --save-dev  -g
   npm i bcrypt --save-dev  -g
   npm i db-migrate --save-dev  -g
   npm i db-migrate-pg --save-dev  -g
   npm i dotenv --save-dev  -g
   npm i express --save-dev  -g
   npm i @types/express --save-dev -g
   npm i pg --save-dev  -g
   npm i bcrypt --save-dev  -g



### 2.Start the Server
npm start   or  yarn start


### 3.Application should run on this url:
http://localhost:3000


### 4.Database Setup 
create user postgres with password 'postgres';

create database store_db;
create database store_db_test;

grant all privileges on database store_db to postgres;
grant all privileges on database store_db_test to postgres;

### 5.ports the backend and database are running on
backend port: 3000 
database port: 5432 