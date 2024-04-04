# Use a lightweight Node.js image
FROM node:14-alpine

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy the HTML and JavaScript files to the working directory
COPY index.html index.css index.js ./

# Expose port 3000
EXPOSE 3000

# Command to run the application
CMD ["node", "-e", "const http = require('http'), fs = require('fs'); const server = http.createServer((req, res) => { if (req.url === '/') { res.writeHead(200, {'Content-Type': 'text/html'}); fs.createReadStream('index.html').pipe(res); } else if (req.url === '/index.js') { res.writeHead(200, {'Content-Type': 'text/javascript'}); fs.createReadStream('index.js').pipe(res); } else { res.writeHead(404); res.end(); } }); server.listen(3000); console.log('Server running on port 3000');"]

