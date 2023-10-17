# SQL Overview

What is a database?

-   A collection of structured data, typically grouped into tables
-   Each table has rows and columns
    -   The row will hold the information about the particular entry
    -   The columns are are attributes of the items in the table

Every table will have a primary key:

-   A unique identifier for each entry in the database
-   Each row will have only one primary key, but a primary key can consist of multiple columns (composite key)

## DBMS and RDBMS

DBMS: Database Management System

-   These are what we use to store and manage the data in our databases

RDBMS: Relational Database Management System

-   This is what we will be using during training
-   Relational Databases are used to store information in tables that have relations with one another
-   RDBMS's are structured so that it maintains the security, accuracy, integrity, and consistency of data
-   The ultimate goals of a Database is to persist information

## SQL

SQL: Structured Query Language

-   This is not a programming language
-   It is the underlying language used to query relational databases
-   English like syntax for developers to manipulate data

# Database Vendors

There are many different RDBMS vendors / flavors of SQL, these include:
- Oracle
- PostregreSQL
- MySQL
- Microsoft SQLServer
- Microsoft Access

We will be focusing on PostgreSQL during training

# Data Types

Tables in our databases have attributes that describe the data stored in the row, these attributes can be of many different data types. Here is a list of common data types, and a link to the official documentation with all of the data types:

-   boolean (bool): evaluates to true or false
-   character (`char[n]`) : a fixed length character string
-   character varying (`varchar[n]`) : a varying length string of characters
-   date : a calendar date
-   integer (int): a whole number
-   numeric/decimal: a decimal number

PostgreSQL documentation on data types:

https://www.postgresql.org/docs/9.5/datatype.html

# Schema

A database schema refers to the formal structure of data defined by a relational database, this includes:
- the various tables in the database and their columns and data types
- the relationships between tables in the database

Schemas enforce constraints when defining tables, so we can visualize them through Entity Relationship Diagrams

An Entity Relationship Diagram illustrates how different tables in a database relate to one another

<img src = "https://landing.moqups.com/img/content/diagrams/erd/database-diagram/database-diagram-1600.png" width = "600">

They contain three main components:

The entity:
- What the table is representing

Attributes:
- These are the columns of the table

Relationships
- These are the connections between the tables

# Multiplicity in Databases

Multiplicity is the relationship between entries in different tables

These relationships are defined with foreign key constraints

Foreign Keys:

-   Make relations between tables
-   Do not need to be unique, but can be
-   Can be made up of one or more columns

There are four types of multiplicity in relational databases

1. One-to-many: one entry in the first table can be mapped to many entries in the second table
    - The foreign key in the first is allowed to map to multiple entries in the second table
2. Many-to-one: this is the opposite of the above
3. Many-to-many: Many entries of the first table can be mapped to many entries in the second table
    - These are implemented with what are called junction tables
4. One-to-one: a single entry in the first table is mapped to a single entry in the second table
    - The foreign key of both tables must be unique

## Referential Intregrity

-   A foreign key is the reference to the relationship in multiplicity, and the rule ensures that a referenced record always exists
-   You are not allowed to delete an entry if an entry of another table depends on it
-   You can use cascade on delete, which will delete children and parent entries

# SQL Sublanguages

There are 4 or 5 sublangauges in SQL depending on who you ask

-   In this training we say their are 5 regardless of the debate

## Data Definition Language (DDL):

-   Used to define the database itself
-   Deals with creation, alteration, or deletion or tables, schemas, or databases themselves
-   Syntax/Keywords for the DDL:
    -   `CREATE`: used to create a new table, schema, or database
    -   `ALTER`: used to make changes to a table, schema, or database
    -   `DROP`: used to completely remove/delete a table
    -   `TRUNCATE`: used to remove all the data from a table, but leave it's structure behind

## Data Manipulation Language (DML):

-   Used to change data inside of the database
-   Often referred to as the CRUD operations (Create, Read, Update, Delete)
    -   This is the theoretical construct of what you should be able to do with data in a table
-   Syntax/Keywords for the DML:
    -   `INSERT` : used to add new data into a table
    -   `SELECT`: used to retrieve data from a table
    -   `UPDATE` : used to make a change to existing data in a table
    -   `DELETE` : used to remove a record from a table

## Data Query Language (DQL):

-   This one is often debated, however it exists in Postgres so we teach it
-   The debate itself is whether it should be its own sublanguage, or a sublanguage of DML
-   Syntax/Keywords for DQL:
    -   `SELECT`: used to retrieve data from a table
-   Typically DQL is referring to when we use constraints aka the `WHERE` clause

### Query clauses

`SELECT` [columns]

`FROM` [table]

`WHERE` [condition] -- filters pre aggregation if aggregation is occurring

`GROUP BY` [column] -- defines how our data is going to be aggregated

`HAVING` [condition] -- filters after aggregation

`ORDER BY` [column][asc/desc]


## Data Control Language (DCL)

-   This sublanguage is used to manage the security and control of our database
-   Syntax/Keywords for DCL:
    -   `GRANT`: to grant any permissions to a user
    -   `REVOKE`: to remove ant permissions from a user

## Transaction Control Language (TCL)

-   Used to manage transactions within the database (more on this later)
-   Syntax/Keywords for TCL:
    -   `COMMIT`: this will permanently save any DML operations that occurred
    -   `ROLLBACK`: this will completely erase any DML operations that occurred between two commits. Keep in mind, once you commit changes you cannot rollback
    -   `SAVEPOINT`: creates a spot to rollback to

# Constraints

Constraints are restrictions that we can put on the columns of our tables in SQL

Some constraints in SQL include:

-   Composite keys: a key that uses more than one column
-   Not null: the column must have data
-   Unique: no two records entered into this column can be the same
-   Primary key: denotes that this column is a primary key
-   Foreign key: denotes that this column is pointing to an attribute on another table
-   Default: creates a default value if none is given
# TCL

-   Used to manage transactions within the database (more on this later)
-   Syntax/Keywords for TCL:
    -   `COMMIT`: this will permanently save any DML operations that occurred
    -   `ROLLBACK`: this will completely erase any DML operations that occurred between two commits. Keep in mind, once you commit changes you cannot rollback
    -   `SAVEPOINT`: creates a spot to rollback to


# Acid Properties

In SQL every transaction must have a specific four properties, these are know as the ACID properties

**Atomic:** All or nothing, the transaction is fully completed, or it doesn't happen at all

**Consistency:** The tables schema will remain intact after the transaction

**Isolation:** Each transaction cannot affect the results of another transaction

**Durability:** Data will persist through system crashes and other issues

# Aggregate and Scalar Functions

Aggregate functions take multiple rows, and combine the values into one single column

Some popular aggregates functions are as follows:

-   MAX(Column): returns the max value of that column
-   MIN(Column): returns the min value of that column
-   AVG(Column): returns the average value of that column
-   SUM(Column): adds and returns the sum of the values in the column
-   COUNT(column): returns the number of elements in that column

These function are used in the SELECT clause, and cannot be used with the WHERE clause

If more than one column is being selected in the SELECT column section of the query, a GROUP By is required

You can use the HAVING clause with an aggregate function instead of WHERE

Scalar functions operate on a single row, these can be used with SELECT and WHERE

Some popular scalar functions are as follows:

-   LENGTH(string): returns the length of a string in the given row
-   UPPER(string): returns the string in upper case
-   LOWER(string): returns the string in lower case
-   ABS(num): returns the absolute value of the row
-   CEILING(num): returns the rounded up number
-   FLOOR(num): returns the rounded down number

# Joins

<img src = "https://www.dofactory.com/img/sql/sql-joins.png">

- allows us to create a single query which spans across multiple tables in our db
- there are various different types of joins, based on what information you would like from each table, and how you define the tables to be joined together
- the typical join syntax is a follows:
- inner, left (outer), right (outer), full (outer)

```sql
select [columns]
from [left table]
left/right/full join [right table]
on [join predicate];
```

There are various different types of joins, based on what information you would like from each table, and how you define a join predicate. A *theta* join is just a join which joins two tables based on some condition (defined above as the join predicate). An *equi* join, is a theta join, where that condition uses equality. 

```sql 
select employee.name, department.name
from employee
left join department
on department.id = employee.department;
```

We also have such joins as *natural* joins. These joins are implicit and do not need a join predicate. Instead, the join is performed based on columns with the same names. In the employee/department example above, if the department table had an id column with the name 'dept_id' and the employee table had a column with the name 'dept_id' which referred to the department table, a natural join could be performed.

```sql 
select employee.name, department.name
from employee
natural join department
```

# Set Operations

<img src= "https://www.essentialsql.com/wp-content/uploads/2017/03/SetOperators.png">

Set operators are different from joins. Instead of combining columns of two tables, set operators combine the rows of different result sets. Essentially, set operators perform some kind of (set) operation on two different queries.

Some set operators are:

* UNION [ALL]
  * UNION does not keep duplicates, but UNION ALL will
* INTERSECT
  * Only returns records in common between the queries
* EXCEPT
  * Removes from the first result set any rows that appear in the second result set and returns what remains


# Index 

An index is a common way to enhance database performance, enabling faster retrieval. When creating an index, the database stores an in memory ordering of a particular column. Without an index, if we were searching on a particular column, we would need to check every single value in that column to return the result. Indexes allow those operations to be more efficient. Columns which are searched on frequently, and that have a high percent of unique values and a low percent of null values are generally good candidates for an index. While indexes can make searching operations more efficient, we need to be careful not to use indexes too liberally. Because we are storing an additional ordering in memory, they need to be maintained every time we perform operations like insertions and deletions, so they may not always be the best choice.

# Views

There are two types of views in Postgres which allow us to view a dataset from a query. A traditional *view* will store a query in memory. Each time we make a request to that view, the query is executed and the result set is retrieved from the database.  There is also such thing as a *materialized view.* This type of view stores the actual dataset in memory. Each time we make a request to a materialized view, it does not execute the query again, but rather returns the saved dataset. To update the dataset, the materialized view must be refreshed.

```sql
create [materialized] view as [query]
```

# Normalization

Normalization refers to an optimization process of structuring a relational database in a way that *reduces redundancy* of data and improves data integrity and consistency. There are many different normal forms, which relate to the degree to which a database has been normalized. We will look at the first three normal forms, each of which build upon the previous:

* 1NF - must have a primary key, no repeating groups, and atomic columns
* 2NF - must already be in 1NF, plus have no partial dependencies
* 3NF - must already be in 2NF, plus have no transitive dependencies

The first normal form enforces that a table **must**:
* Have a primary key
* Each column should be as granular as possible (e.g. "Name" column should be broken up into: "First Name", "Last Name", "Middle Name", etc..)

To be in second normal form, a table must **also**:
* Cannot have columns that are dependent on only one part of the key
* If there are no composite primary keys, you are automatically in 2NF

Finally, to get to third normal form, a table must **also**:
* Not have transitive dependencies
* This means that if column C relates to column B which relates to column A which is the primary key, this is not in 3NF because C is related to the primary key but indirectly (it is a transitive dependency)

To advance into higher normal forms, we typically "break up" tables into multiple tables and relate them to each other via foreign keys.

**invoice**

| invoice_id | customer_name | date        | item       | price | quantity | line price | total |
| ---------- | ------------- | ----------- | ---------- | ----- | -------- | ---------- | ----- |
| 201        | Peter         | 2 June 2020 | Coffee     | 5.00  | 2        | 10.00      | 25.00 |
| 201        | Peter         | 2 June 2020 | Milk       | 3.00  | 1        | 3.00       | 25.00 |
| 201        | Peter         | 2 June 2020 | Bread      | 4.00  | 3        | 12.00      | 25.00 |
| 204        | Patrick       | 3 June 2020 | Cereal     | 3.50  | 3        | 10.50      | 29.25 |
| 204        | Patrick       | 3 June 2020 | Wine       | 7.00  | 2        | 14.00      | 29.25 |
| 204        | Patrick       | 3 June 2020 | Watermelon | 4.75  | 1        | 4.75       | 29.25 |

---

**invoice**

| _invoice_id_ | customer_name | date        | _line_number_ | item       | price | quantity | line price | total |
| ------------ | ------------- | ----------- | ------------- | ---------- | ----- | -------- | ---------- | ----- |
| 201          | Peter         | 2 June 2020 | 1             | Coffee     | 5.00  | 2        | 10.00      | 25.00 |
| 201          | Peter         | 2 June 2020 | 2             | Milk       | 3.00  | 1        | 3.00       | 25.00 |
| 201          | Peter         | 2 June 2020 | 3             | Bread      | 4.00  | 3        | 12.00      | 25.00 |
| 204          | Patrick       | 3 June 2020 | 1             | Cereal     | 3.50  | 3        | 10.50      | 29.25 |
| 204          | Patrick       | 3 June 2020 | 2             | Wine       | 7.00  | 2        | 14.00      | 29.25 |
| 204          | Patrick       | 3 June 2020 | 3             | Watermelon | 4.75  | 1        | 4.75       | 29.25 |

---

invoice_line

| invoice_id | line_number | item       | price | quantity | line price |
| ---------- | ----------- | ---------- | ----- | -------- | ---------- |
| 201        | 1           | Coffee     | 5.00  | 2        | 10.00      |
| 201        | 2           | Milk       | 3.00  | 1        | 3.00       |
| 201        | 3           | Bread      | 4.00  | 3        | 12.00      |
| 204        | 1           | Cereal     | 3.50  | 3        | 10.50      |
| 204        | 2           | Wine       | 7.00  | 2        | 14.00      |
| 204        | 3           | Watermelon | 4.75  | 1        | 4.75       |

invoice

| invoice_id | customer_name | date        | total |
| ---------- | ------------- | ----------- | ----- |
| 201        | Peter         | 2 June 2020 | 25.00 |
| 204        | Patrick       | 3 June 2020 | 29.25 |

---

invoice_line

| invoice_id | line_number | item_no | quantity |
| ---------- | ----------- | ------- | -------- |
| 201        | 1           | 73627   | 2        |
| 201        | 2           | 76283   | 1        |
| 201        | 3           | 72463   | 3        |
| 204        | 1           | 84726   | 3        |
| 204        | 2           | 83725   | 2        |
| 204        | 3           | 82617   | 1        |

invoice

| invoice_id | customer_name | date        |
| ---------- | ------------- | ----------- |
| 201        | Peter         | 2 June 2020 |
| 204        | Patrick       | 3 June 2020 |

item

| item_no | name       | price |
| ------- | ---------- | ----- |
| 73627   | Coffee     | 5.00  |
| 76283   | Milk       | 3.00  |
| 72463   | Bread      | 4.00  |
| 84726   | Cereal     | 3.50  |
| 83725   | Wine       | 7.00  |
| 82617   | Watermelon | 4.75  | 



# Additional Resources

- [Using DCL](https://beginner-sql-tutorial.com/sql-grant-revoke-privileges-roles.htm)

- [4th and 5th Normal Forms](https://www.geeksforgeeks.org/introduction-of-4th-and-5th-normal-form-in-dbms/)

- [Indexes in PostgreSQL](https://www.tutorialspoint.com/postgresql/postgresql_indexes.htm#:~:text=Indexes%20are%20special%20lookup%20tables,the%20back%20of%20a%20book.)

- [Views in PostgreSQL](https://www.postgresqltutorial.com/postgresql-views/managing-postgresql-views/#:~:text=A%20view%20is%20a%20database,tables%20through%20a%20SELECT%20statement.)


