React Notes

How can we make a call to the backend and render that information on the page?

What is an API?
Application Programming Interface: allows two applications to talk to each other. Sending a request to a server. Once your browser receives the response, it interprets the code and displays it on the page.

Lifecyle Methods:

Methods on the class function/component. Depending on which method is being called, these methods get called at different stages of when the component gets rendered

componentDidMount:
What is mounting? Mounting is when react puts/renders content on the page

what is componentDidMount? when the component mounts on the page, it calls whatever block of code we write inside the method

fetch() -> allows to make a call to the API and request for data

Promise -> fetch() method returns us a promise with a response. We will not know what this reponse looks like so we would console.log()

.then() -> in order to return a promise, we want to use the .then() method

.json() -> turns data in to json object format

3rd party APIs are typically URLs
