const express = require('express');
const morgan = require('morgan');
const path = require('path');
const favicon = require('serve-favicon')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const session = require('express-session')
const expressValidation = require('express-validator')
var multer = require('multer')
var flash = require('connect-flash');
var flash = require('connect-flash');

const app = express();
const router = require('./Api/Routes/blog')
const addPostRouter = require('./Api/Routes/addpost')
const categoryRouter = require('./Api/Routes/category')

const port = 3000;


const upload = multer({
    dest: './public/images/upload'
})


app.use('/public', express.static(path.join(__dirname, 'public')))
// Set the default views directory to html folder
app.set('views', path.join(__dirname, './views'))

// // set the view engine to ejs
app.set('view engine', 'ejs');


app.use(cookieParser())
app.use(expressValidation())

app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: true,
    cookie: {
        secure: true
    }
}))


app.use(morgan('dev'))
app.use(bodyParser.urlencoded({
    extended: true
}))

app.use(bodyParser.json())
app.use('/ourblog/home', router)
app.use('/ourblog/addpost', addPostRouter)
app.use('/ourblog/addpost', addPostRouter)
app.use('/ourblog/category', categoryRouter)

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);

})