const ErrorHander = require("../utils/errorhandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const Header = require("../models/headerModel")

// // @desc    Get all Header Links
exports.getAllHeader = catchAsyncErrors(async (req, res, next) => {
   
     const headers = await Header.find();
const headerMap = {};
headers.forEach(header => {
    headerMap[header._id] = { ...header._doc, children: [] };
});

// Initialize an array to store the top-level headers
const topLevelHeaders = [];

// Organize headers into a nested structure
headers.forEach(header => {
    if (header.parentTab) {
        // Find the parent header based on the parentTab's _id
        const parentHeader = headers.find(h => h.linkText === header.parentTab);
        if (parentHeader && headerMap[parentHeader._id]) {
            headerMap[parentHeader._id].children.push(headerMap[header._id]);
        }
    } else {
        // If the header doesn't have a parentTab, add it to the top-level array
        topLevelHeaders.push(headerMap[header._id]);
    }
});

    res.status(200).json({
        success: true,
        headers: topLevelHeaders,
    });
});
exports.getHeader = catchAsyncErrors(async (req, res, next) => {
    const headers = await Header.find();
    res.status(200).json({
      success: true,
      headers,
    });
});
exports.getAllHeaderByTitle = catchAsyncErrors(async (req, res, next) => {
    // Extract and decode the linkText from query parameters
    const { parentTab } = req.query;
    const decodedLinkText = parentTab ? decodeURIComponent(parentTab) : '';

    const headers = parentTab
    ? await Header.find({ parentTab: new RegExp(parentTab, 'i') }) // Case-insensitive search
    : await Header.find();
console.log(headers)
// Create a map to organize headers by their _id
const headerMap = {};
headers.forEach(header => {
    headerMap[header._id] = { ...header._doc, children: [] };
});

// Initialize an array to store the top-level headers
const topLevelHeaders = [];

// Organize headers into a nested structure
headers.forEach(header => {
    if (header.parentTab) {
        // Find the parent header based on the parentTab's linkText
        const parentHeader = headers.find(h => h.linkText === header.parentTab);
        if (parentHeader && headerMap[parentHeader._id]) {
            headerMap[parentHeader._id].children.push(headerMap[header._id]);
        }
    } else {
        // Top-level headers
        topLevelHeaders.push(headerMap[header._id]);
    }
});

res.status(200).json({
    success: true,
    headers: headers,
});
});


       

// @desc    Create a Header
exports.createHeader= catchAsyncErrors(async (req,res,next) =>{
    const {shorttitle,description,linkText,linkUrl,orderNumber,parentTab,megaMenu} = req.body;
    const image = req.file ? req.file.filename : null;
  
    const newHeader = new Header({
        description,linkText,linkUrl,orderNumber,parentTab,image,megaMenu,shorttitle
    });
    const header = await newHeader.save();
    res.status(201).json(header);
});
// @desc    Get a single Header by ID
exports.getHeaderById = catchAsyncErrors(async (req,res,next)=>{
    const header = await Header.findById(req.params.id);
    if (!header) {
        return next(
            new ErrorHander(`Header not found`)
          );
    }
    res.json(header);
})

// @desc    Update a Header
exports.updateHeader = async (req, res) => {
    const { description,linkText,linkUrl,orderNumber,parentTab,megaMenu,shorttitle} = req.body;
    const image = req.file ? req.file.filename : null;
    try {
        const header = await Header.findById(req.params.id);
        if (!header) {
            return next(
                new ErrorHander(`Banner not found`)
              );
        }

        header.linkText = linkText || header.linkText;
        header.linkUrl = linkUrl || header.linkUrl;
        header.orderNumber = orderNumber !== undefined ? orderNumber : header.orderNumber;
        header.description = description || header.description;
        header.image = image || header.image;
        header.parentTab = parentTab || header.parentTab;
        header.megaMenu = megaMenu || header.megaMenu;
        header.shorttitle = shorttitle || header.shorttitle;

        const updatedHeader = await header.save();
        res.json(updatedHeader);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// @desc    Delete a Header
exports.deleteHeader = catchAsyncErrors(async (req, res) => {
     try {
        const header = await Header.findById(req.params.id);
        if (!header) {
            return next(
                new ErrorHander(`Header Link not found`)
              );
        }
        await Header.deleteOne({ _id: req.params.id });
        res.status(200).json({ message: 'Header removed' });
       
    } catch (err) {
        res.status(500).json({ message:err.message });
    }
});

