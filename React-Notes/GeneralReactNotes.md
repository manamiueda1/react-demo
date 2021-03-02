# React Notes

What is React, Why React and What is the problem with the DOM??

React was introduced in 2013 by a Facebook Developer. It is the most popular front-end JavaScript library. it is a SPA (single page application)

Libraries vs Framework
Library -> a library is a collection of non-volatile resources used by computer programs, often for software development. These may include configuration data, documentation, help data, message templates, pre-written code and subroutines, classes, values or type specifications.

Framework -> In computer programming, a software framework is an abstraction in which software providing generic functionality can be selectively changed by additional user-written code, thus providing application-specific software

Before React, we had HTML, CSS and JS.
HTML displayed text on the page, CSS gave it styles and JS gave it interactivity in a website.

Client vs Server

Client -> A client is a program, or machine, that sends requests to servers
Server -> A server is a program, or machine, that waits for incoming requests

Every time a 'client' requested a new page (ex: form, click on something with new content on the webpage) on the website, we request that page from the server and send it back to the client.

SPA -> single page application: only load application code once. Instead of making new requests to the server/returning new documents everytime, we stay on the same page every time and JS file updates the DOM per page instead of speaking to the server everytime

The DOM is manipulated manually by using DOM methods and properties like .getElementById(), .appendChild() etc. This is called 'imperative paradigm' - you directly change individual parts of your app in response to user events. As applications become larger, this way of programming causes performance bottleneck. It takes a long time for DOM changes to happen.

React takes a declaritive approach. Tell React what the page should look like and give it the data it needs and it will take care of it. With React, developers do not need to touch the DOM.
Based on the data given, React will update the application. React takes the 'Don't touch the DOM - I'll do it.' approach.

state -> where the data is stored

Components -> are JavaScript functions that receives input/attributes/props, in return displays that data on the screen

Reusable components -> build small components that form bigger components. These components contain other components. You can reuse and copy over components.

JSX -> HTML like syntax inside the JS file

VirtualDOM -> JavaScript Version of the DOM. It gives React a blueprint of how it should update the actual DOM

VirtualDOM vs DOM -> react takes the VirtualDOM and compares it to the actual DOM and modify only what needs to be modified.
