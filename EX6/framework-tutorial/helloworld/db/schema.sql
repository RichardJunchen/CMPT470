--USERS
-------
CREATE TABLE users 
(
    user_id serial NOT NULL,
    username varchar(50) NOT NULL,
    email varchar(320) NOT NULL,
    role varchar(50) NOT NULL,
    CONSTRAINT permissions CHECK (role IN ('junchenl', 'administrator')),
    PRIMARY KEY (user_id)
);