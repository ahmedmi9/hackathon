// server.js
const jsonServer = require('json-server')
const server = jsonServer.create()
const path = require("path");
const router = jsonServer.router(path.join(__dirname,"db.json"));

//can pass a limited number of options ot this to override (some) defaults.
const middlewares = jsonServer.defaults()

server.use(middlewares)

server.use(jsonServer.bodyParser)

server.use(function(req,res,next){
    setTimeout(next,2000);
})

server.use((req, res, next) => {
    if(req.method == "POST"){
        req.body.createAt = Date.now();
    }
    //Continue to json server router
    next();
});

server.post("/courses/", function(req,rest,next){
    const error = validateCourse(req.body);
    if(error){
        rest.status(400).send(error);
    }else{
        req.body.slug = createSlug(req.body.title);//create a slug for new resourse
        next();
    }
});

// User default router
server.use(router);

//Start Server
const port = 3001;
server.listen(port,() => {
    console.log(`JSON Server is running on port ${port}`);
});

// Centralize logic

//Return a URL frindly slug
function createSlug(value){
    return value
    .replace(/[^a-z0-9_]+/gi, "-")
    .replace(/^-|-$/g, "")
    .toLowerCase();
}

function validateCourse(course){
    if(!course.title) return "Title is required";
    if(!course.authorId) return "Author is required";
    if(!course.category) return "Category is required";
    return "";
}