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
    salary decimal(20, 2),
    department_id int,
    primary key(id),
    foreign key(department_id)
)

CREATE TABLE department(
    id int not null auto_increment,
    department varchar(30),
    primary key(id)
);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUE (Alisson, Becker, 1, 1);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUE (Mohamed, Salah, 6, 1);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUE (Jurgen, Klopp, 8, null);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUE (Jordan, Henderson, 5, 1);

INSERT INTO role (title, salary, department_id)
VALUE (Keeper, 1500000, 1);

INSERT INTO role (title, salary, department_id)
VALUE (Winger, 3000000, 3);

INSERT INTO role (title, salary, department_id)
VALUE (Coach, 5000000, 4);

INSERT INTO role (title, salary, department_id)
VALUE (Centre Midfielder, 2500000, 2);

INSERT INTO department (department)
VALUE (Defending);

INSERT INTO department (department)
VALUE (Attacking);

INSERT INTO department (department)
VALUE (Management);

INSERT INTO department (department)
VALUE (Midfield);