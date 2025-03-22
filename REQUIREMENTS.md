# API Requirements
The company stakeholders want to create an online storefront to showcase their great product ideas. Users need to be able to browse an index of all products, see the specifics of a single product, and add products to an order that they can view in a cart page. You have been tasked with building the API that will support this application, and your coworker is building the frontend.

These are the notes from a meeting with the frontend developer that describe what endpoints the API needs to supply, as well as data shapes the frontend and backend have agreed meet the requirements of the application. 

## API Endpoints
#### Products
- Index 
HTTP verp: GET
Route: http://localhost:3000/indexProducts

- Show
HTTP verp: GET
Route: http://localhost:3000/showProduct

- Create [token required]
HTTP verp: POST
Route: http://localhost:3000/createProduct


#### Users
- Index [token required]
HTTP verp: GET
Route: http://localhost:3000/indexUsers

- Show [token required]
HTTP verp: GET
Route: http://localhost:3000/showUser

- Authenticate
HTTP verp: POST
Route: http://localhost:3000/authenticateUser

- Create N[token required]
HTTP verp: POST
Route: http://localhost:3000/createUser


#### Orders
- Create Order [token required]
HTTP verp: POST
Route: http://localhost:3000/createOrder

- Current Order by user (args: user id)[token required]
HTTP verp: GET
Route: http://localhost:3000/getCurrentOrder


## Data Shapes
#### Table products
-  id       integer PK
- name      character varying(255) 
- price     integer


#### Table users
- id        integer PK
- firstName character varying(20)
- lastName  character varying(20)
- username  character varying(40)   UNIQUE
- password  character varying(255)

#### Table orders
- id            integer PK
- product_id    integer FK
- quantity      integer
- user_id       integer FK
- order_status  character varying(10)


#### Table order_products 
- id            integer PK
- product_id    integer FK
- order_id      integer FK
- quantity      integer