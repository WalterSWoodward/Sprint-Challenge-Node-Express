# Sprint Challenge - Node Express: 

## Self Study Questions:

1. What is Node.js?
    * It is software that allows developers use run JavaScript outside of the browser environment.
2. What is express?
    * Express is a Node web framework and library which makes setting up a web server much easier.

3.  Mention two parts of Express that you learned about this week.
    * Among other things, express allows you to write handlers for requests with different HTTP verbs (POST, GET, PUT, DELETE).  You can also integrate middleware for additional request processing along the handling pipeline.
      * From Luis Q&A: Routing, Routers, route handlers, middleware, custum middleware

4.  What is Middleware?
    * Middleware is any software/function that is set to be invoked by express before the final request handler.  Middleware can be used to execute code, make changes to the request and the response object, or call another middleware function.
      * From Luis Q&A: A way for a developer to add extra functionality to our express web applications.  For example helmet - adds security, morgan - adds log in terminal for requests, and custum middleware.

5.  What is a Resource?
    * Resources are data (typically JSON or XML) which are represented by URL paths.  The HTTP handlers/methods mentioned above (POST, GET, PUT, DELETE) are all requests which manipulate this data in some way.
      * From Luis Q&A: We are building RESTful applications.  Anything that our application is concerned with, such as accounts, transactions, checks, and payments in an accounting application: these are all Resources.  

6.  What can the API return to help the clients know if a request was successful?
    * By way of example, 'res.status(200)' is code that returns a typical response status code 200 (OK), meaning the request was successful.  There are status codes for all possible outcomes once a request is made, each with a specific number association between 200 and 599.
      * From Luis Q&A: In HTTP we have status codes - an industry defined standard. https://www.addedbytes.com/blog/http-status-codes
7.  How can we partition our application into sub-applications?
    * By assigning unqiue 'HOME' URL's to each Resource.
      * From Luis Q&A:  We use express routers for this.  A mini-middleware --MISSED

8.  What is CORS and why do we need it?
    * CORS stands for Cross-Origin Resource Sharing.  Beyond this, I still do not really grasp what it is or what it does.
      * From Luis Q&A: A security measure or API that is only going to allow requests from additional places...???
