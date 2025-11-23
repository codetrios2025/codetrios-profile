const ErrorHander = require("../utils/errorhandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const Blog = require("../models/blogsModel")

// // // @desc    Get all Homeservice Links

// exports.getAllblog = catchAsyncErrors(async (req, res, next) => {
//     const blog = await Blog.find();
 
//     res.status(200).json({
//       success: true,
//       blog,
//     });
// });
// Get data by link
exports.getAllblog = catchAsyncErrors(async (req, res, next) => {
  const { link } = req.query;
  
  let query = {};
  if (link) {
    query.link = link;
  }
  
  const blog = await Blog.find(query);
  
  res.status(200).json({
    success: true,
    blog,
  });
});
// @desc    Create a blog
exports.createblog= catchAsyncErrors(async (req,res,next) =>{
  const { title,link,order,description,description1,author,authorpost,blogdate} = req.body;
  const image = req.file ? req.file.filename : null;
 
  
  if (!image) {
    return next(
        new ErrorHander(` image is required with Id: ${req.params.id}`)
      );
}
  const newblog = new Blog({
    title,link,order,image,description,description1,author,authorpost,blogdate
  });
  const blog = await newblog.save();
  res.status(201).json(blog);
});
// @desc    Get a single Blog by Id
exports.getblogById = catchAsyncErrors(async (req,res,next)=>{
  const blog = await Blog.findById(req.params.id);
  if (!blog) {
      return next(
          new ErrorHander(`blog main not found`)
        );
  }
  res.json(blog);
})
// @desc    Update a Blog
exports.updateblog = async (req, res) => {
   const { title,order,description,description1,author,authorpost,blogdate} = req.body;
  const image = req.file ? req.file.filename : null;
  
  
    
  try {
      const blog = await Blog.findById(req.params.id);
      if (!blog) {
          return next(
              new ErrorHander(`blog main not found`)
            );
      }

      blog.title = title || blog.title;
      blog.image = image || blog.image;
     blog.description = description || blog.description;
      blog.description1 = description1 || blog.description1;
      blog.order =order || blog.order;
      blog.author =author || blog.author;
      blog.authorpost =authorpost || blog.authorpost;
      blog.blogdate =blogdate || blog.blogdate;

      const updatedblog = await blog.save();
      res.json(updatedblog);
  } catch (err) {
      res.status(400).json({ message: err.message });
  }
};

// @desc    Delete a blog
exports.deleteblog = catchAsyncErrors(async (req, res) => {
 
   try {
      const blog = await Blog.findById(req.params.id);
      if (!blog) {
          return next(
              new ErrorHander(`Blog not found`)
            );
      }
      await blog.deleteOne({ _id: req.params.id });
      res.status(200).json({ message: 'Blog removed' });
     
  } catch (err) {
      res.status(500).json({ message:err.message });
  }
});


