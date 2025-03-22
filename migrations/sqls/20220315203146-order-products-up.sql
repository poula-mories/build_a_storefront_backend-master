/* Replace with your SQL commands */
create table order_products
(
    id  serial primary key, 
    product_id integer REFERENCES products(id),
    order_id integer REFERENCES orders(id),
    quantity integer
)