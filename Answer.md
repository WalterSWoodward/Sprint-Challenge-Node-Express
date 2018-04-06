# Sprint Challenge - Node Express: 

## Self Study Questions:

1. What is Node.js?
    * It is software that allows developers use run JavaScript outside of the browser environment.
2. What is express?
    * Express is a Node web framework and library which makes setting up a web server much easier.

3.  Mention two parts of Express that you learned about this week.
    * Among other things, express allows you to write handlers for requests with different HTTP verbs (POST, GET, PUT, DELETE).  You can also integrate middleware for additional request processing along the handling pipeline.

4.  What is Middleware?
    * Middleware is any software/function that is set to be invoked by express before the final request handler.  Middleware can be used to execute code, make changes to the request and the response object, or call another middleware function.

5.  What is a Resource?
    * Resources are data (typically JSON or XML) which are represented by URL paths.  The HTTP handlers/methods mentioned above (POST, GET, PUT, DELETE) are all requests which manipulate this data in some way. 

6.  What can the API return to help the clients know if a request was successful?
    * By way of example, 'res.status(200)' is code that returns a typical response status code 200 (OK), meaning the request was successful.  There are status codes for all possible outcomes once a request is made, each with a specific number association between 200 and 599. 
7.  How can we partition our application into sub-applications?
    * By assigning unqiue 'HOME' URL's to each Resource.

8.  What is CORS and why do we need it?
    * CORS stands for Cross-Origin Resource Sharing.  Beyond this, I still do not really grasp what it is or what it does.
