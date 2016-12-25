##Problems with Javascript Frameworks##
* They tend to follow the law of entropy. As frameworks mature, they become more complex and the learning curve grows. (Angular 2 is a great example of this).
* There is an endless supply of templating engines - each has troublesome ideosyncrasies and none seem to provide a solution for all of the following problems at once:
    - two-way data binding (React, Backbone and jQuery fail here)
    - custom HTML tags and attributes (Handlebars, ember, and jQuery fail here)
    - elegant separation of concerns between markup and view logic (React fails here)
* Development workflows and toolchaining for javascript are a mess
    - Where most languages combine builds and dependency management (ala Maven or Gradle), javascript keep them separate (Grunt and Bower) - often with more than one dependency manager being used in a single project.
    - Pre-compiling, building, linting, copying files, launching local servers, testing, and other tasks are each handled by separate tools, must be manually configured for each project, and often require knowledge of at least one special scripting tool with an obscure API (currently the most popular combination is Webpack, Babel and Gulp).
    - Typescript is especially insidious because it requires a separate type definition for every method parameter and variable, including imported items from third-party libraries. This means that type definitions have to be manually install, one-by-one, with an *additional, Typescript-specific* dependency manager. If, as is often the case, type definitions for a particular third-party library are either unavailable or full of bugs, then the developer must choose between writing his or her own type definitions by hand, or violating a "best practice" forbidding the use of Typescript's magical "any" datatype.
    - In a full-stack webapp, dependencies and builds for the front and back end must be managed separately, which tends to double the amount of work and number of tools required to build the entire application.
    - Often, a web dev's machine is littered with hundreds of inter-related tools and libraries, making his or her build environment look like it is held together with glue and duct tape.
    - As with templating engines, new build and dependency-management tools appear continuously, always without addressing any of the above issues
* Javascript is one of the worst programming languages ever conceived
* Often, full-stack web applications use a host of different technologies, each of which has a significant learning curve and solves a different set of problems in the stack:
    - Spring Boot and Spring MVC for serving client-side content
    - HTML5 plus an army of Javascript and CSS frameworks for the client-side content itself
    - Spring Data Rest for Webservices and database access logic
    - Kafka or RabbitMQ (or an expensive proprietary ESB) for enterprise-wide messaging and business intelligence
    - Elastic Search, Hadoop, and/OR SQL Server for data storage
    - Some organizations are making forrays into replacing some or all of these with Node, but most still believe that Node is just a toy

##Enter MeteorJS##
* The biggest benefit of Meteor is its build and dependency-management system, which is nearly invisible.
    - NPM and "atmosphere" dependencies can be made available to client and server with a single, simultaneous command. (enter `meter add jquery` or `meteor npm install --save lodash`)
    - there is an exhaustive catalog of atmosphere packages; anything that is missing can be found in NPM
    - builds, linting, testing, and all other development-related tasks are handled silently. Simply start your app using `meteor run` 
    - additional languages such as Typescript and coffee are available as Atmosphere packages; simply install a language with `meteor add meteor-typescript`, and meteor silently handles the rest
    - this is a "killer feature"
* **D**irect **D**ata **P**rotocol, an original websockets eco-system, enables three-way data-binding, which syncronizes data in real-time between all client UI's and the database
    - a few Node websockets libraries have appeared since the advent of Meteor, so this is no longer a killer feature
* Although it is an opinionated framework, every component - from the Blaze templating engine on the front end to the database - can be swapped out for something else
* Meteor can be used to build static front-end web clients, back-end services, or seamless full stack apps that allow the developer to all but ignore the divide between client and server
* Web apps, native iOS and native Android apps can all be built from exactly the same codebase, each using a single command. Not to mention, Meteor comes bundled with Android and iOS emulators.
    - this is another "killer feature" - no other language or platform has a one-touch "build APK" or "build for iOS" function - let alone both
* Meteor is 100% Javascript - even the console application for Mongo, its pre-bundled JSON database, is a javascript interpreter.
    - another killer feature - often multiple programmers are required to work on a single application because they specialize in different programming languages. With Meteor, we could have 11-year-olds going from zero to senior programmer analyst in a matter of months.

##Nothing is Perfect##
* Blaze, the default templating engine I mentioned earlier, lacks two-way data binding
* MongoDB is often neither suitable nor desirable for data storage
* Websockets are data-intensive, and thus not ideal for mobile web apps
* The Meteor team is beginning to favor React and Angular over "reinventing the wheel" for front-end development, but each of these frameworks has its share of issues as mentioned earlier.
* MeteorJS shares a target audience with PHP and Ruby. While its philosophy of blurring the line between client and server is ideal for blogs and personal websites, many enterprises want a robust, service-oriented architecture, often with services living behind a demilitarized proxy.

##meteor-rivets##
meteor-rivets solves the front-end frameworks issue. Remember that we are looking for:
* two-way data binding
* custom HTML tags and attributes
* elegant separation of concerns between markup and view logic

Blaze doesn't have any kind of support for two-way data-binding or custom tags; Rivets has both. Blaze is very good at fetching HTML templates by name and returning their contents as an HTML string; Rivets relies on string literals.

Unlike other front-end frameworks, Rivets isn't an opinionated, heavyweight, swiss-army knife; instead, it's extremely flexible, portable, and light-weight. This makes it ideal for combination with Blaze in a "best of both worlds" solution.

##Quick Start##
1. Download and install MeteorJS.<br/>
    Follow the instructions at: https://www.meteor.com/install (1 minute)

2. Clone my git repository (requires Git *):
    ```
    $ git clone https://github.com/serafino/meteor-rivets.git
    ```

3. Setup Meteor app 
    ```
    $ cd meteor-rivets
    $ meteor create .
    $ meteor add iron:router
    $ meteor npm install --save rivets
    $ meteor npm install
    ```
 
4. Start the app
  ```
  $ meteor
  ```

5. Visit http://localhost:8080 and play with the "counter" component

* https://git-scm.com/downloads

##See also##
For additonal information about MeteorJS, go to http://www.meteor.com.
For additional information about rivets, go to http://rivetsjs.com.
