const ErrorHander = require("../utils/errorhandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const Customers = require("../models/customersModel")

exports.getAllCustomers = catchAsyncErrors(async (req, res, next) => {
    const { pageType } = req.query; // Get the positionType from the query parameters

    let filter = {};
    if (pageType) {
        filter.pageType = pageType; // Add filtering by positionType if provided
    }

    const customers = await Customers.find(filter);
   
    res.status(200).json({
      success: true,
      customers,
    });
});

// @desc    Create a Customers
exports.createCustomers = catchAsyncErrors(async (req,res,next) =>{
//    console.log(req);
    const {name,link,pageType,description,order} = req.body;
    const image = req.file ? req.file.filename : null;
     if (!image) {
        return next(
            new ErrorHander(`Customers image is required with Id: ${req.params.id}`)
          );
    }
    const newCustomers = new Customers({
        name,link,pageType,description,order,image
    });
    const customers = await newCustomers.save();
    res.status(201).json(customers);
});
// @desc    Get a single Customers by ID
exports.getCustomersById = catchAsyncErrors(async (req,res,next)=>{
    const customers = await Customers.findById(req.params.id);
    if (!customers) {
        return next(
            new ErrorHander(`Customers not found`)
          );
    }
    res.json(customers);
})

// @desc    Update a Customers
exports.updateCustomers = async (req, res) => {
    
    const {name,link,pageType,description,order} = req.body;
    const image = req.file ? req.file.filename : null;
 
    try {
        const customers = await Customers.findById(req.params.id);
        if (!customers) {
            return next(
                new ErrorHander(`Image not found`)
              );
        }

        customers.name = name || customers.name;
        customers.link = link || customers.link;
        customers.pageType = pageType || customers.pageType;
        customers.description = description || customers.description;
        customers.order = order !== undefined ? order : customers.order;
        customers.image = image || customers.image;

        const updatedcustomers = await customers.save();
        res.json(updatedcustomers);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// @desc    Delete a Customers
exports.deleteCustomers = catchAsyncErrors(async (req, res) => {
    try {
        const customers = await Customers.findById(req.params.id);
        if (!customers) {
            return next(
                new ErrorHander(`customers Link not found`)
              );
        }
        await Customers.deleteOne({ _id: req.params.id });
        res.status(200).json({ message: 'customers removed' });
       
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

