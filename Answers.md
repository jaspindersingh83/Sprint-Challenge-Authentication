<!-- Answers to the Short Answer Essay Questions go here -->
1. Describe Middleware, Sessions (as we know them in express), bcrypt and JWT.
 * Middleware: A function that is invoked before the final request handler is called a Middleware
 * Sessions: A session is a place to store user data, the data that you can access across request. Each user has unique session. The user data is stored in session object in js 
 * bcrypt: A package that is used to encrypt passwords. It basically hashes the passwords
 * JWT : Jason Web Token is a json object that can be stored on client side after authentication which can enable a client to access authenticated serverside end points/views.
1. What does bcrypt do in order to prevent attacks?
* Hashes the password with a random generated string.
* Slows the encryption process via bcrypt cost to slow down the creation of rainbow tables that can be used by hackers.
1. What are the three parts of the JSON Web Token?
Header,Payload and Signature