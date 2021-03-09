CREATE DATABASE employees_db;

CREATE TABLE employee (
    id int not null auto_increment,
    first_name varchar(30),
    last_name varchar(30),
    role_id int,
    manager_id int,
    primary key(id),
    foreign key(role_id),
    foreign key(manager_id)
);

CREATE TABLE role(
    id int not null auto_increment,
    title varchar(30),
    salary decimal(10, 2),
    department_id int,
    primary key(id),
    foreign key(department_id)
)

CREATE TABLE department(
    id int not null auto_increment,
    department varchar(30),
    primary key(id)
);

