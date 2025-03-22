/* Replace with your SQL commands */
CREATE TABLE orders (
    id SERIAL PRIMARY  KEY,
    product_id integer REFERENCES product(id),
    user_id integer REFERENCES users(id),
    quantity integer,
    order_status VARCHAR(10)
);