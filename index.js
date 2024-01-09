
var http = require("http")
var formidable = require('formidable')
var fs = require('fs')

//upload file
/*http.createServer(function(req,res){
    res.writeHead(200,{'content-Type':'text/html'})
    res.write('<form action="fileupload" method="post" enctyep="multipart/form-data">')
    res.write('<input type="file" name="filetoupload"><br>')
    res.write('<inpute type="submit">')
    res.write('</form>')
    return res.end()
}).listen(8080);*/

//parse the upload file
/*http.createServer(function (req,res){
    if(req.url == '/fileupload'){
        var form = new formidable.IncomingForm();
        form.parse(req, function(err,fields,files){
           res.write("File uploaded")
            res.end() 
        })
    }else{
            res.writeHead(200,{"content-Type":'text/html'});
            res.write('<form action="fileupload" method="post" enctype="multipart/form-data">')
            res.write('<input type="file" name ="filetoupload"><br>')
            res.write('<input type="submit">')
            res.write('</form>')
            return res.end()
    }
}).listen(8080)*/

//save file
/* The code snippet is creating a server using the `http` module in Node.js. When a request is made to
the server, it checks if the URL is '/fileupload'. If it is, it creates a new instance of the
`formidable.IncomingForm` class to parse the request and extract the uploaded file. */
http.createServer(function (req,res){
    if(req.url == '/fileupload'){
        var form = new formidable.IncomingForm();
        form.parse(req, function(err,fields,files){
            console.log(files)
            let data = files.filetoupload[0]
            console.log(data.filepath)
           var oldpath = files.filetoupload[0].filepath;
           var newpath = 'C:/User/Your name/'+ files.filetoupload[0].originalFilename;
           fs.rename(oldpath,newpath, function(err){
            if (err) throw err;
            res.write("File upload and moved")
            res.end()
           }) 
        })
    }else{
            res.writeHead(200,{"content-Type":'text/html'});
            res.write('<form action="fileupload" method="post" enctype="multipart/form-data">')
            res.write('<input type="file" name ="filetoupload"><br>')
            res.write('<input type="submit">')
            res.write('</form>')
            return res.end()
    }
}).listen(8080)


