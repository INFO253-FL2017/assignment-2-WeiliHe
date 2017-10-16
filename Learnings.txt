1.
i.HTML builds the structure of the web pages in this assignment, using the elements like <head>, <h1>, <p>.
element tags help the browser to interpret the content of the page.
ii. CSS is a language that describes the style of my HTML document. It describes how HTML elements should be displayed.
For example, the background color is set to be light purple in CSS file. The position of the blog links are set to be
centering in the page. The HTMLs in my assignment include the external CSS file to make this happen.
iii. JavaScript is a language used to program the behaviour of the web pages. It is a dynamic, interpreted programming
language that used to help realize some functions in web pages. Say, in my assignment, JavaScript powers the function of 
making comments and displaying them on the blogs. Also, it helps to send request to get weather data from a server and 
return them to the webpage. It is also used to modified the HTML content like using document.getElementById("demo").InnerHTML="Hello".
iv. Python here is to build a webserver that powers the pages and allows other clients access to my Homepage and blogs.
Also it links the HTML in templates and js, CSS files in statics to display the whole webpages. Here it also gets the information
typed in HTML and post them to the server to send an email to me.
v. Flask is a back-end framework that used to send requests and recieve responses from the server. Here we imported this Flask class,
and created new flask application. When we type the url"http:localhost:5000/index", the Flask will recieve request and send responses to the client.
vi. HTTP is a hypertext transmission protocol. It is a standard how clients send request and how servers responses. In this assignment,
when I tpye the url"http:localhost:5000/index",then the browser will get the response from the server through HTTP protocol and interpret
it to a web page.
vii. Get: Requests data from a specified resource. The data sent is part of the url and is visible.  Post: Submits data to be processed to
a specified resource. The data is wrapped as package and sent together with the HTTP request. It is not visible.
In this assigment, I used GET to send request to the server to open the web pages like Homepage and Contact_us. But when sending an email,
I used the method "POST" to send data to the server and this method is more secure and nonvisible.

2. HTML describles the structure of the web page. CSS specifies the layout of the web page. JavaScript programs the behaviour of the web page.
In this assigment, the CSS and JavaScript files are embedded into HTML using <link rel="stylesheet" href="..\static\css\header and footer.css" />
and <script src="..\static\js\js_contact.js"></script>

3. FLASK is a imported class to the server you built with python. The Flask is a tool that is already built, like a already existed function.  
I can just import it and use it to get request and send response to the client.


4. All posible response numbers:
200's :success.
OK 200: The request was fulfilled.
CREATED 201: It indicates success following a POST command.
Accepted 202: The request has been accepted for processing, but the processing has not been completed.
Partial Information 203: When using a GET method, the returned metainformation is not a definitive set of 
the object from a server with a copy of the object.
No Response 204: Server has received the request but there is no information to send back.

300's: Redirect.
Moved 301: The data requested has been assigned a new URI, the change is permanent.
Found 302: The data requested actually resides under a different URL, however, the redirection may be altered on occasion.
Method 303: like Found 302, it suggests that the client go try another network address. In this case, a different method 
may be used too, rather than GET.
Not Modified 304: If the client has done a conditional GET and access is allowed, but the document has not been modified since 
the date and time specified in If-Modified-Since field.

400's: Client error.
Bad request 400: The request had bad syntax or was inherently impossible to be satisfied.
Unauthorized 401: The client should retry the request with a suitable Authorization header.
Forbidden 403: The request is for something forbidden. Authorization will not help.
Not found 404: The server cannot match the given URI. Web page cannot be found.

500's: Server error.
Internal Error 500: The server encountered an unexpected condition which prevented it from fulfilling the request.
Not implemented 501: The server does not support the facility required.












 