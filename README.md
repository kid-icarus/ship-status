##Ship Status
A tiny server that can tell others the status of your relationship in an
efficient manner.

##Usage
 - `npm install -g nodemon`
 - `npm install ship-status`
 - `cp local.json-dist local.json`
 - modify config as necessary.
 - `npm start`

##Consuming another's ship-status server:
Given the server `example.org`:
`curl -Is example.org |head -1|sed 's/HTTP\/1.1\ //'`

##What codes should I use
That's up to you, padawan, but here's a convenient listing of them
https://en.wikipedia.org/wiki/List_of_HTTP_status_codes
