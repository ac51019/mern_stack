run this project -- node server.js


 ******   Key Points of the Server  ********


1) Uses Node.js built-in http module to create the server.
2) Server runs on port 3000.
3) Uses fs.promises for asynchronous file handling.
4) Uses path module for safe file paths.
5) Implements routing using req.url.


 ****** Routes Implemented *****
/home → serves home.html
/about → serves about.html
/contact → serves contact.html
/styles.css → serves CSS file
Invalid routes → serves custom 404.html
    
    
    *****  Features  ******

Modular code using reusable serveFile() function.

Proper HTTP status codes:

    200 → Success
    404 → Page Not Found
    500 → Internal Server Error

Custom 404 error page included.
Error handling using try...catch.
Content types handled correctly:
text/html
text/css

    
    Modules Used
    
http → create web server
fs → read files
path → handle file paths


