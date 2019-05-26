var Blog = require('../model/mysql_connection')
var blogPost = require('../Controller/blog')


var multer = require("multer");
var upload = multer({
  dest: "/public/images/upload/"
});

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/images/upload");
  },
  filename: function (req, file, cb) {
    //cb(null, file.fieldname + "-" + Date.now() + ".jpg");
    cb(null, Date.now() + "-" + file.originalname);
  }
});

var upload = multer({
  storage: storage
}).single("image");

let showAddPostPage = (req, res, next) => {
  // console.log('Session Name From Addpost  : ' + req.session.ourid);

  res.render("addpost");
};

let addPost = (req, res, next) => {
  upload(req, res, function (err) {
    if (err instanceof multer.MulterError) {
      // A Multer error occurred when uploading.
    } else if (err) {
      // An unknown error occurred when uploading.
    }

    // ...........to get all information about pic..................
    var all_image_info = req.file;
    //console.log(all_image_info);

    var title = req.body.title;
    var category = req.body.category;
    var body = req.body.body;
    var image = req.file.filename;
    var author = req.body.author;

    var blog = {
      title,
      category,
      body,
      image,
      author,
      date: Date.now()
    };
    var sql = "INSERT INTO add_blog SET ?";

    Blog.query(sql, blog, function (err, result) {
      if (err) throw err;
      console.log("Number of records inserted: ");
      // res.json({
      //     message: "Saved",
      //     Result: result.affectedRows
      // });



      blogPost.getAllPost(req, res, next);

    });


    // res.json({
    //   obj
    // });
    // Everything went fine.
  });
};
module.exports = {
  addPost,
  showAddPostPage
};