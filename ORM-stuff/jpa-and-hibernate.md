# JPA

The [Java Persistence API](https://en.wikipedia.org/wiki/Java_Persistence_API)(JPA) is a standard API for accessing, persisting and managing data between Java objects/classes and a relational database. 

It is defined in the **javax.persistence** package. It uses **Java Persistence Query Language** (JPQL), which is an object-oriented query language to perform database operations. It uses the **EntityManager** interface to create, read, and delete operations for instances of mapped entity classes.


# Hibernate

[Hibernate](https://en.wikipedia.org/wiki/Hibernate_(framework)) is an object-relational mapping tool for Java programming language. It is an open-source persistent framework introduced by **Gavin King** in 2001.  It is a flexible and powerful ORM solution to map Java classes to database tables. Hibernate is an **implementation of JPA**, so it follows the common standards provided by the JPA. Historically Hibernate provided its own extensions to JPA interfaces and syntax, but has started to return to a more JPA-friendly syntax. Because of this, you will find significant differences between older versions of Hibernate and newer versions, starting around Hibernate 5.2.

It is defined in the **org.hibernate** package. It uses **Hibernate Query Language** (HQL), which is very similar to JPQL. Hibernate's **Session** interface is an extension to JPA's **EntityManager** interface, and so can create, read, and delete operations for instances of mapped entity classes. 


Since we have used **JDBC** (Java Database Connectivity) for a long time, we know that JDBC provides a Java API for accessing relational databases from Java programs, to execute SQL statements. 

**Drawbacks  in the JDBC approach:**
* If we use JDBC in large applications, it results in significant complexity.
* If we need to change our database (for example, MySQL to Oracle, we might have to rewrite many SQL queries to satisfy differences in SQL syntax between the two databases 
* We need to convert database ResultSet objects to Java Objects manually, and vice-versa. If the schema changes, we need to change the DDL, the POJO classes, *and* the conversions between the two
* The developer requires database-specific knowledge to write queries.
* The states of Java Objects are fetched and managed by developers. In other words, changes to data by the application need to be saved to the database manually

Hibernate is used to overcome these drawbacks of JDBC.

Some of the **advantages** of Hibernate are:

* Hibernate’s **transparent persistence** ensures the automatic connection between the application’s objects with the database tables. It reduces the lines of connection code. 

* Hibernate is **database independent**. It can be used to connect with any database like Oracle, MySQL, Sybase, etc. Changing the SQL sent to a database is as simple as changing the *database dialect* in the configuration file.

* Hibernate framework provides an **abstraction** -  Many common tasks are implemented for us internally, like establishing a connection with the database, writing a query to perform CRUD operations, etc. 

* Hibernate supports **dual-level Caching** mechanism. Through the caching concept, Hibernate retains the objects in the cache to reduce repeated hits to the database. This feature makes Hibernate highly scalable and optimizes the application’s performance.



## JPA vs. Hibernate (Specification vs. Implementation)

- Today, Hibernate ORM is one of the most mature JPA implementations, and still a popular option for ORM in Java.

- Java Persistence API is a collection of classes and methods to persistently store the vast amounts of data into a database which is provided by the Oracle Corporation.

- By itself, JPA is not a tool or framework; rather, it defines a set of concepts that can be implemented by any tool or framework.