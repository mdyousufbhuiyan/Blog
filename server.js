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


const app = express();



const router = require('./Api/Routes/blog')
const addPostRouter = require('./Api/Routes/addpost')
const categoryRouter = require('./Api/Routes/category')
const ShowSinglePost = require('./Api/Routes/ShowSinglePage')
const CommentRouter = require('./Api/Routes/comment')
const RegistrationRouter = require('./Api/Routes/registration')
const LoginRouter = require('./Api/Routes/Login')


const port = 3000;


const upload = multer({
    dest: './public/images/upload'
})


app.use('/public', express.static(path.join(__dirname, 'public')))
// Set the default views directory to html folder
app.set('views', path.join(__dirname, './views'))

// // set the view engine to ejs
app.set('view engine', 'ejs');

app.use(express.static('public'))
app.use(cookieParser())
app.use(expressValidation())



app.use(session({
    key: 'user_sid',
    secret: 'secret',
    resave: false,
    saveUninitialized: false,
    cookie: {
        // secure: true,
        expires: 20000
    }
}))


app.use((req, res, next) => {
    if (req.cookies.user_sid && !req.session.user) {
      //  res.clearCookie('user_sid')
    }
    next()
})


// app.use(session({
//     secret: 'secret',
//     resave: false,
//     saveUninitialized: true,
//     cookie: {
//         secure: true
//     }
// }))



app.use(morgan('dev'))
app.use(bodyParser.urlencoded({
    extended: true
}))

app.use(bodyParser.json())
app.use('/ourblog/home', router)
app.use('/ourblog/addpost', addPostRouter)
app.use('/ourblog/addpost', addPostRouter)
app.use('/ourblog/category', categoryRouter)
app.use('/ourblog/showsinglepost', ShowSinglePost)
app.use('/ourblog/comment', CommentRouter);
app.use('/ourblog/registration', RegistrationRouter)
app.use('/ourblog/login', LoginRouter)

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);

})