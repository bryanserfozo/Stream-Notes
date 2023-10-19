# HQL

**H**ibernate **Q**uery **L**anguage is the object-oriented query language of the Hibernate Framework. HQL is very similar to SQL except that we query against **persistent objects** instead of tables and columns. 

Hibernate then **translates** the HQL queries to SQL queries and performs the action on the database. In hibernate, we can directly write SQL statements using Native SQL, but using HQL or JPQL is recommended. From the developer's perspective, this separates the application layer from the persistence layer and abstracts away the actual database interaction, promoting flexibility and reusability.

HQL is **case-sensitive for properties** like table and column names and not for keywords like SELECT, FROM, and was, etc.

**Advantages of HQL:** 
- It supports OOP concepts like polymorphism, inheritance, and abstraction.
- It is database-independent and easy to learn.

### HQL Examples

* HQL **Select** Query example to retrieve a student details whose id is 101.

```java
TypedQuery<Student> query = session.createQuery("FROM Student WHERE id = '101' ", Student.class);
List<Student> students = query.getResultList();
```

* HQL **Update** Query example to update the name to "John" whose id is 105.

```java
Query query = session.createQuery("UPDATE Student SET name = :stud_name WHERE id = :stud_id");
query.setParameter("stud_name", "John");
query.setParameter("stud_id", "105");
int result = query.executeUpdate();
```

Please note that HQL should only be used to batch-update records. If you are updating a single record, it's preferable to update the actual Java object's properties, and then persist that object and its changes back to the database with session.update(object) or session.flush()

* HQL **Delete** Query example to delete a student whose id is 108.

```java
Query query = session.createQuery("DELETE Student WHERE id = :stud_id");
query.setParameter("stud_id", "108");
int result = query.executeUpdate();
```

Similarly to updates, HQL should only be used to batch-delete records. If you are deleting a single record, it's preferable to use session.delete(object).

* HQL **Insert** statement cannot insert values directly in to a table. It is only  used to insert rows from another table. It supports only INSERT INTO … SELECT … . 

```java
Query query = session.createQuery("INSERT INTO Student(id, name) SELECT s_id, s_name FROM NewStudent");
int result = query.executeUpdate();
```
