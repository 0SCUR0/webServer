var http = require("http");
var fs = require("fs");
var url = require('url');
// var xml = require('xml');

var fileRoute = "./assets/html/hello.html";

 
    var test = "";
    fs.readFile(fileRoute, function(err, data){
            test = data;
       }
    );


    http.createServer(function(request, response) {  

        var requestURL = url.parse(request.url, true);
        var action  = requestURL.pathname;
        var method  = request.method;
        var headers = request.headers;
        var userAgent = headers['user-agent'];
     


        if(action == "/iki_creative/dev"){
            var html = fs.readFileSync('assets/html/iki_creative.html');
            response.writeHead(200, {'Content-Type': 'text/html' });
            // response.write("<svg version='1.1' baseProfile='full' width='300' height='200' xmlns='http://www.w3.org/2000/svg'> <circle cx='150' cy='100' r='80' fill='green' /> </svg>");
            response.write(html);            
            // response.end(img, 'binary');
            response.end();  

        }

        if(action == "/logo-iki-01.svg" || action == "/iki_creative/logo-iki-01.svg"){
            var svg = fs.readFileSync('assets/svg/logo iki white.svg');
            response.writeHead(200, {'Content-Type': 'image/svg+xml' });
            // response.write("<svg version='1.1' baseProfile='full' width='300' height='200' xmlns='http://www.w3.org/2000/svg'> <circle cx='150' cy='100' r='80' fill='green' /> </svg>");
            response.write(svg);
            
            response.end();  

        }

        if(action == "/roja.jpg"){
            var jpg_img = fs.readFileSync('assets/img/IKI/roja.jpg');
            response.writeHead(200, {'Content-Type': 'image/jpg' });
            response.end(jpg_img, 'binary');
        }
        
        if(action == "/img_00.png"){
            var img = fs.readFileSync('./assets/img/img_06.png');
            response.writeHead(200, {'Content-Type': 'image/gif' });
            response.end(img, 'binary');
        }
        
        if(action == "/img_jpg.jpg"){
            var img = fs.readFileSync('./assets/img/img_jpg.jpg');
            response.writeHead(200, {'Content-Type': 'image/gif' });
            response.end(img, 'binary');
        }
        
        if(action == "/img_gif.gif"){
            var img = fs.readFileSync('./assets/img/img_gif.gif');
            response.writeHead(200, {'Content-Type': 'image/gif' });
            response.end(img, 'binary');
        }

        if(action == "/hello_world.txt"){
            var js_script = fs.readFileSync('./assets/txt/hello_world.txt');
            response.writeHeader(200, {"Content-Type": "text/plain"});
            response.write(js_script);
            response.end(); 
        }

        if(action == "/hello_world.js"){
            var js_script = fs.readFileSync('./assets/js/hello_world.js');
            response.writeHeader(200, {"Content-Type": "text/javascript"});
            response.write(js_script);
            response.end(); 

        }

        if(action == "/iki_creative"){
            var html = fs.readFileSync('./assets/html/iki_creative_temp.html');
            response.writeHead(200, {'Content-Type': 'text/html' });
            response.write(html);
            response.end();  

        }
              

        var result = "";
                   
        
        if(method == "PUT" || method == "POST"){
            
            // var result = '';
            request.on('data', function(chunk) {
                result += chunk;
                // body.push(chunk);
            });
            request.on('end', function() {
                // body = Buffer.concat(body).toString();
                response.writeHeader(200, {"Content-Type": "text/html"});

                response.end(result);
                // at this point, `body` has the entire request body stored in it as a string
            });
        }
 
        if (action == "/get"){
            response.write("GET page");
            response.write("<br/>");
            response.end();  
        }
 
        // if (action == "/post"){
        //     response.end("POST page " + result);
        // }




        if (action == "/"){
            response.writeHeader(200, {"Content-Type": "text/html"});
            response.write("<div><p>");
            response.write("url: " + action + "");
            response.write("<br/>");
            response.write("method: " + method + "");
            response.write("<br/>"); 
            response.write("headers: " + headers + "");
            response.write("<br/>"); 
            response.write("user agent: " + userAgent + "");
            response.write("<br/>"); 
            response.write("request body: "  + result + "");
            response.write("<br/>");
            response.write("</div></p>");

            response.write(test);

            // fs.readFile("./assets/html/sandbox.html", function(err, dataa){
            //         response.write(dataa);
            //     }
            // );

            response.end();  
        }

        request.on('error', function(error){
            response.end("error: " + error);
            console.log("error");
        });
    }).listen(80);

// http.createServer(function(request, response) {
// 	response.writeHead(200, {"Content-Type":"Text/Plain"});
// 	response.end("Naima is online. Bloop. request: " + request.url + ", response: " + response.statusCode);
// }).listen(80);

console.log("Server started");

