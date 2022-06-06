# PlanBreeze API Source

### Stack: Java, Spring Boot and Web, Gradle
```
src
  main
    /java/com.planbreeze.api
        /controllers - main web controllers
          EventsController - handles methods for dealing with events
        /models - pojos, entity beans
        /services - business logic
          EventService - handles logic and persistence of events
 /test
    /java/com/planbreeze.api
        ApiApplicationTests - initial set of automated tests
```
### Commands:
- Run:   `./gradlew bootRun`
- Build:  `./gradlew build`
- Build via java:   `java -jar build/libs/api-0.0.1-SNAPSHOT.war`


