# Spring

Spring an umbrella term for a family of frameworks which can be utilized to rapidly create loosely coupled Java applications. These spring frameworks provide a comprehensive and configurable model for modern enterprise Java applications, which can be easily migrated to any kind of deployment platform. This ease is due to the core feature of the Spring frameworks, which focuses on dependency injection resulting from the framework acting as an inversion of control container.


## Frameworks - Overview
The Spring family of frameworks consist of close to 20 modules, each focusing on a particular task or service. These are grouped into the following layers: Core Container, Data Access/Integration, Messaging, Web, AOP, Aspects, Instrumentation and Test.

![Spring Modules](https://docs.spring.io/spring-framework/docs/4.0.x/spring-framework-reference/html/images/spring-overview.png)


# Spring Projects

<img src = "https://1.bp.blogspot.com/-4vTgRx2HlTE/YN9IoM8gMzI/AAAAAAAAuTk/Qk-GDPUDTEENOmwhl04bZLq65PrZUwBTACLcBGAsYHQ/s2048/Spring%2BEcosystem.png" width = 1000>

Back in June 2003, Rod Johnson created the Core Spring Framework

Spring Framework originally intended to make development of JavaEE applications simpler by reducing boilerplate code. This is the foundation on which everything is built

This eventually lead to the creation of the spring projects which build on top of the core MODULES but tailored to specific business needs.

For example, the Spring Security project was built to simplify the complexity of securing a java application…..and other projects like spring data was created to simplify data access in java applications.

This eventually lead to the creation of a particularly impactful project called spring boot.  Spring boot was a real game changer.  It provided a new and drastically faster way of building spring applications.

Up until Spring Boot, building a Spring application involved tough configuration choices and a cumbersome deployment model.  Spring Boot removed all of that by taking an opinionated view of building spring based application by creating sensible defaults for library choices and adding the ability to auto detect and auto configure other necessary components. Additionally,  It made running a Spring application as simple as running a single command.

Then came along Spring Cloud. Spring Cloud was built ontop of Spring Boot and made it easy to build applications that made use of distributed architectures (Like microservices).

# Spring Core

# Dependency Injection

As the name suggests, Dependency Injection is a design patters that removes dependencies of a program by providing the configuration in an external source, such as an ML file. This loosely coupled design then makes code easier to test, and implement in a wider variety of environments.

Dependency Injection can occur through the following methods:
* Constructor Injection: Dependency Injection accomplished when the container invokes a constructor with arguments to instantiate a bean in which each argument of said constructor represents a dependency.
* Setter Injection: Dependency Injection accomplished when the container calls setter methods on a bean after invoking a no-argument constructor to instatiate a bean.

## Constructor vs Setter Injection
* Constructor Injection is more secure, since dependencies are required to create an object, you are guaranteed to have each dependency populated
* Consturctor Injection enables the implementation of immutable objects
* Setter Injection allows for partial dependencies since Constructor injection requires all properties to be established upon bean instantiation.
* Setter Injection occurs after constructor injection, essentially putting giving setter injection precedence over constructor injection
* Setter Injection can easily change values, and does not create new bean instances, making it more flexible than constructor injection.
* Setter Injection can resolve circular references (i.e. if Object A and Object B are dependent on each other, setter injection can be used to resolve this, whereas Constructor injection would throw a BeanCurrentlyInCreationException).

# XML Based Consiguration

# Inversion of Control
---
Inversion of Control is a principle in software engineering by which the control of objects or portions of a program is transferred to a container or framework. IoC enables the framework to take control of the flow of a program and make calls to our custom code. The advantages of this architecture are:

- decoupling the execution of a task from its implementation
- making it easier to switch between different implementations
- greater modularity of a program
- greater ease in testing a program by isolating components

# Spring IOC Container aka Spring Context
---
In the Spring framework, the IoC container is represented by the interface `ApplicationContext`. The Spring container is responsible for instantiating, configuring and assembling objects known as beans, as well as managing their lifecycle. There are 24 implementations of the `ApplicationContext` interface, important ones to be familiar with include:

- `ClassPathXmlApplicationContext`
- `AnnotationConfigApplicationContext`
- `WebApplicationContext`

An ApplicationContext provides:

- Bean factory methods, inherited from `ListableBeanFactory`. 
  - This avoids the need for applications to use singletons.


- The ability to resolve messages, supporting internationalization. Inherited from the `MessageSource` interface.


- The ability to load file resources in a generic fashion. Inherited from the ResourceLoader interface.


- The ability to publish events. Implementations must provide a means of registering event listeners.

- Inheritance from a parent context. Definitions in a descendant context will always take priority. 
  - This means, for example, that a single parent context can be used by an entire web application, while each servlet has its own child context that is independent of that of any other servlet.

# What is a bean factory?
---
A bean factory is just that, a implementation of the factory design pattern which is used to create Spring beans. The `BeanFactory` interface is implemented by objects that hold a number of bean definitions, each uniquely identified by a String name. Depending on the bean definition, the factory will return either an independent instance of a the object, or a single shared instance (a singleton scoped to the factory instance). The point of this approach is that the BeanFactory is a central registry of application components, and centralizes configuration of application components.

# `ApplicationContext` vs `BeanFactory`
---
As the `ApplicationContext` includes all functionality of the `BeanFactory`, it is generally recommended that it be used in preference to the `BeanFactory`, except in applications where memory consumption might be critical and a few extra kilobytes might make a difference. However, for most 'typical' enterprise applications and systems, the `ApplicationContext` is what you will want to use.

**`BeanFactory` features:**
- bean instantiation/wiring

**`ApplicationContext` features:**
- bean instantiation/wiring
- `ApplicationEvent` publication
- Convenient `MessageSource` access (for internationalization)
    - internationalization is the process of designing a software application so that it can potentially be adapted to various languages and regions without engineering changes.

# Annotation Based Configuration

# Component Scanning / Autowiring

# Bean Scopes

When the `ApplicationContext` starts, it uses either an XML configuration file or component scanning to discover what Java classes (beans) it needs to manage for us. Once it discovers these beans, it will create bean defintions, which are just instructions for creating the bean. These definitions are stored in the bean container. The method in which Spring creates these beans is dependent upon the declared scope of the bean (using `scope` attribute on the `<bean>` tag in XML configuration, or using the `@Scope` annotation). If no specific scope is declared, then the default scope is singleton. The scopes which beans can be declared in are:

- **singleton** _(default)_
  - The Spring Container creates only one instance of the bean
  - This bean is cached into memory
  - All requests for the bean will return a shared reference to the same bean

- **prototype**
  - Creates a new bean instance for each container request

- **request**
  - Bean is scoped to an HTTP web request
  - Only used in web applications

- **session**
  - Bean is scoped to an HTTP web session
  - Only used in web applications

- **application**
  - Scopes a single bean definition to the lifecycle of a `ServletContext`
  - Only used in web applications

- **websocket**
  - Scopes a single bean definition to the lifecycle of a `WebSocket`
  - Only used in web applications

# Bean Lifecycle

The management of Beans, conducted by the BeanFactory or Application Context, includes instantiation, configuration and the eventual removal (or destruction) of beans. As a high-level overview:

1. Beans are first instantiated.
1. Their properties are set.
1. Any associated interfaces or objects are made aware of their existence.
1. The bean is made aware of any associated interfaces as well.
1. Any other methods, particularly custom created methods, are invoked.
1. Then the bean is ready for use.
1. Once the bean is no longer used, it is marked for removal and a destroy method is invoked for the bean
1. Custom destroy methods are invoked, if any.
1. Bean is the destroyed.


# Stereotype Annotations

## Overview
Stereotypes are a number of built in annotations which are used as markers to declare obects as a bean, define their name and clarify to a developer what the bean will be used for.

### `@Component`
The `@Component` annotation is a generic stereotype used to declare an objects as a bean, which will be injected into other classes/beans at some point in time. Spring also provides more specific use cases for `@Component` beans when the class serves a specific purpose, such as the persistance of data, a service or presentation. These annotations are `@Repository`, `@Service` and `@Controller` respectively.

```
@Component("account");
public class Account {
    private int id;

    @Override
    public class toString() {
        return "Account [id=" + id +"]";
    }

    public Account() {
        super();
    }

    public Account (int id) {
        super();
        this.id = id;
    }

    public int getId() {
        return this.id;
    }

    public void setId(int id) {
        this.id = id;
    }
}
```


### `@Repository`
The `@Repository` annotation marks a class to be used as a for use with storing data within a repository or database. Specifically, the `@Repository` annotation provides benefits for objects that would otherwise be utilized as a Data Access Object (DAO).

```
@Repository("accountRepository")
public class AccountRepositoryImpl implments AccountRepository {
    Connection connection = null;
    PreparedStatement stmt = null;

    @Override
    public List<Account> getAllAccounts() {

        List<Account> accounts = new ArrayList<Account>();
        try {
            connection = DAOUtilities.getConnection();
            String sql = "SELECT * FROM accounts";
            stmt = connection.prepareStatement(sql);

            ResultSet rs = stmt.executeQuery();

            while (rs.next()) {
                Account account = new account(rs.getInt("id"));
                accounts.add(account);
            }
            rs.close();
        } catch (SQLException e) {
            e.printStackTrace();
        } finally {
            closeResources();
        }
    
        return accounts;
    }
}
```

### `@Service`
The `@Service` annotation marks a class as a Service for an application

```
@Service("accountService");
public class AccountServiceImpl implements AccountService {

    @Autowired
    private AccountRepository accountRepository;

    public List<Account> findAll() {
        return accountRepository.getAllAcounts();
    }
}


```

### `@Controller`
The `@Controller` annotation marks a class as a Spring MVC Controller which allow the use of handler mapping annotations. Classes annotated with `@Controller` are autodetected through classpath scanning, and when used in comination with `@RequestMapping`, allows for quick configurations of a web application controller.

```
@Controller("accountController")
public class accountControllerImpl {

    @Autowired
    private AccountService accountService;

    @RequestMapping(value="/accounts/all")
    public @ResponseBody List<Account> getAllAccounts() {
        Return accountService.findAll();
    }
}

```

In addition to readability, use of these stereotypes makes classes more suited for other processing tools, such as aspects or marking targets for pointcuts.

# Rest

REST, or REpresentational State Transfer, is an architectural style for providing standards between computer systems on the web, making it easier for systems to communicate with each other. REST-compliant systems, often called RESTful systems, are characterized by how they are stateless and separate the concerns of client and server. 

The key abstraction of information in REST is a resource. 

Any information that can be named can be a resource: a document or image, a temporal service, a collection of other resources, a non-virtual object (e.g. a person), and so on. 

REST uses a resource identifier to identify the particular resource involved in an interaction between components.

<img src = "https://3.bp.blogspot.com/-hePTSHDMocA/Wy0LgvaeOmI/AAAAAAAACh8/4dLaq8Bw1jw4iLNTX_k3fhliYsGdA49GQCLcBGAs/s1600/REST%2BArchitectural%2BConstraints.png">

## Client- Server

The client-server design pattern enforces the separation of concerns, which helps the client and the server components evolve independently.

By separating the user interface concerns (client) from the data storage concerns (server), we improve the portability of the user interface across multiple platforms and improve scalability by simplifying the server components.

While the client and the server evolve, we have to make sure that the interface/contract between the client and the server does not break.

## Stateless

Statelessness mandates that each request from the client to the server must contain all of the information necessary to understand and complete the request.

The server cannot take advantage of any previously stored context information on the server.

For this reason, the client application must entirely keep the session state.

## Cacheable

The cacheable constraint requires that a response should implicitly or explicitly label itself as cacheable or non-cacheable.

If the response is cacheable, the client application gets the right to reuse the response data later for equivalent requests and a specified period.

## Uniform Interface

By applying the principle of generality to the components interface, we can simplify the overall system architecture and improve the visibility of interactions.

Multiple architectural constraints help in obtaining a uniform interface and guiding the behavior of components.

The following four constraints can achieve a uniform REST interface:

- Identification of resources
- Manipulation of resources through representations
- Self-descriptive messages
- Hypermedia as the engine of application state

### RESTful services should have uniform resource indentifiers, so here are some rules you can follow to conform to this

-   use nouns to name resources
-   begin your uri the plural collection of a particular resource
-   use path parameters to identify a single resource in a specific document/record
-   capitalize on path structure to represent heirarchy
-   Identify stores of resources that are managed by the client (sub-collections)
-   use query parameters to filter resources of a particular type
-   be consistant accross the board

### Hypermedia

Hypertext (or hypermedia) means the simultaneous presentation of information and controls such that the information becomes the affordance through which the user (or automaton) obtains choices and selects actions.

## Layered System

The layered system style allows an architecture to be composed of hierarchical layers by constraining component behavior.

For example, in a layered system, each component cannot see beyond the immediate layer they are interacting with.

## Code On Demand(Optional)

REST also allows client functionality to extend by downloading and executing code in the form of applets or scripts.

The downloaded code simplifies clients by reducing the number of features required to be pre-implemented. Servers can provide part of features delivered to the client in the form of code, and the client only needs to execute the code.

### More Information Here 

- [What is Rest](https://medium.com/extend/what-is-rest-a-simple-explanation-for-beginners-part-1-introduction-b4a072f8740f)
- [Rest Constraints](https://medium.com/extend/what-is-rest-a-simple-explanation-for-beginners-part-2-rest-constraints-129a4b69a582)
- [HATEOAS (Hypermedia as the Engine of Application State)](https://en.wikipedia.org/wiki/HATEOAS#:~:text=Hypermedia%20as%20the%20Engine%20of,provide%20information%20dynamically%20through%20hypermedia.)

# Rest API

## What is an API?

API is the acronym for Application Programming Interface, which is a software intermediary that allows two applications to talk to each other.

An API is a messenger that abides by a contract.  The contract states:

“Give me this information formatted in a particular way, and I will give you a response.”

An API is like a “waiter” between client (guest) and server (kitchen)

## What is a REST API?

- Architectural style for designing networked applications

- Relies on stateless, client/server protocol -- almost always HTTP

- Treats Server objects as resources that can be created or destroyed

    - Think CRUD!

    - HTTP Verbs

A RESTful API is an interface that allows two applications to communicate with each other over the internet and through various devices. Every time you access an app like Facebook or check the weather on your smartphone, an API is used.

### Review - HTTP Methods

- GET
    - Retrieve data from a specified resource
    - https://site.com/api/users OR https://site.com/api/users/1

- POST
    -  Submit data to be processed to a specified resource
    -  https://site.com/api/users (add)

- PUT
    - Update a specified resource
    - https://site.com/api/users/1

- DELETE
    - Delete a specified resource
    - https://site.com/api/users/1

#### Endpoints
The URL/URI where the api/service can be accessed by a client application

## Richardson Maturity Model
Leonard Richardson analyzed a hundred different web service designs and divided these designs into four categories. These categories are based on how much the web services are REST compliant.

<img src = "https://martinfowler.com/articles/images/richardsonMaturityModel/overview.png">

More Information [Here](https://martinfowler.com/articles/richardsonMaturityModel.html)


# Spring MVC

Spring MVC is a request driven structure centered around a central Servlet using the front controller design pattern

Servlets are the underlying technology that allows Java to interface between clients through the internet

## Front Controller Design Pattern

<img src = "https://www.tutorialspoint.com/spring/images/spring_dispatcherservlet.png">

The front controller design pattern provides a single handler for all incoming requests for a resource in an application, then dispatches the requests to the appropriate secondary handler for that type of request.

It uses a helper api to achieve the dispatching mechanism, it is broken up into four differen components

Front controller is the single point of entry for requests, it directs requests to the dispatcher

Dispatcher is reposponsible for managing the actions and the views, including locating and routing to specific actions that will service a request, and finding the correct view

Helper classes are used to break up the logic of specific features, and makes the program easier to build and maintaine

Views represent and display information that we want to display to the client

The Spring DispatchServlet is completely integrated with the Spring IOC container

The Dispatch Servlet routes requests to handlers, view resolvers, and also provides support for uploading files

Since DispatchServlet is a servlet itself it must mapped it in the web.xml

View Resolvers will retrieve the correct view from controller

# InternalViewResourceResolver

The InternalResourceView is a Wrapper class for JSP or other resources within the same web application. It can be used to expose model objects as request attributes and forward requests to a specified resource URL using the RequestDispatcher. In particular the InteralResourceViewResolver supports definitions for InternalResourceViews for a simple and straightforward resolution of @Controller class methods.

# Spring MVC Annotations

## @Controller:

Will mark the class as a controller, which is a special kind of spring bean that handles requests, the dispatcher will scan for these classes, and send requests to the correct controller

## @RequestMapping:

Used to map a uri to a specific class, or to a specific method inside of a controller, you can also include the http method if it is over a method

## @RequestBody:

Use this annotation to gain access to the object sent with the request

## @ResponseBody:

This annotation will automatically convert the return of the method to the correct json object to send in the response back to the client

## @RestController:

A class level annotation that combines @RequestMapping and @ResponseBody, allows you to return from the controller methods normally, without a ResponseBody annotation

## Path Paremeters and Query Parameters

Path Parameters and Query Parameters are ways to send information to the server without using a POST request, these should only be used to send information that is none confidential. To set these up you use the @RequestParam and @PathVariable in the method parameters

Path Variable allows you to add a value after the last slash of the request uri, ex `http://url/get/variable`

Query Parameters use a ? in the uri then you define the parameters you are sending over, ex `http:url/get?var=name`


<img src = "https://howtodoinjava.com/wp-content/uploads/Spring-bean-life-cycle.png">