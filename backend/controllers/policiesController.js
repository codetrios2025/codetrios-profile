const ErrorHander = require("../utils/errorhandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const Policies = require("../models/policiesModel");

// @desc    Get all policies
exports.getAllPolicies = catchAsyncErrors(async (req, res, next) => {
    const policies = await Policies.find();
    res.status(200).json({
        success: true,
        policies,
    });
});

// @desc    Create a policy
exports.createPolicy = catchAsyncErrors(async (req, res, next) => {
    try {
        const { title, order, description, link, policydate } = req.body;
        const fields = [];

        // Extract PDF file paths and languages
    const pdfs = req.body.pdfs || [];
    pdfs.forEach((pdfData, index) => {
      if (pdfData.language) {
        const file = req.files[`pdfs[${index}][pdf]`];
        const pdfFilePath = file ? file[0].filename : '';

        fields.push({
          language: pdfData.language,
          pdf: pdfFilePath
        });
      }
    });
        const newPolicy = new Policies({
            title,
            order,
            description,
            link,
            policydate,
            fields
        });

        const savedPolicy = await newPolicy.save();
        res.status(201).json({
            success: true,
            policy: savedPolicy
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// @desc    Get a single policy by ID
exports.getPolicyById = catchAsyncErrors(async (req, res, next) => {
    const policy = await Policies.findById(req.params.id);
    if (!policy) {
        return next(new ErrorHander(`Policy not found`));
    }
    res.status(200).json({
        success: true,
        policy,
    });
});

// // @desc    Update a policy
// exports.updatePolicy = catchAsyncErrors(async (req, res, next) => {
//   const { title, order, description, link, policydate } = req.body;
//   const fields = [];
//    // Extract PDF file paths and languages
//   const pdfs = req.body.pdfs || [];
//   pdfs.forEach((pdfData, index) => {
//     if (pdfData.language) {
//       const file = req.files[`pdfs[${index}][pdf]`];
//       const pdfFilePath = file ? file[0].filename : '';

//       fields.push({
//         language: pdfData.language,
//         pdf: pdfFilePath
//       });
//     }
//   });
//   try {
//     const policy = await Policies.findById(req.params.id);
//     if (!policy) {
//       return next(new ErrorHander(`Policy not found`));
//     }

//     policy.title = title || policy.title;
//     policy.order = order || policy.order;
//     policy.description = description || policy.description;
//     policy.link = link || policy.link;
//     policy.policydate = policydate || policy.policydate;
//     policy.fields = fields.length ? fields : policy.fields;

//     const updatedPolicy = await policy.save();
//     res.json(updatedPolicy);
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// });
// @desc    Update a policy
exports.updatePolicy = catchAsyncErrors(async (req, res, next) => {
  const { title, order, description, link, policydate } = req.body;

  try {
    const policy = await Policies.findById(req.params.id);
    if (!policy) {
      return next(new ErrorHander(`Policy not found`));
    }

    const pdfs = req.body.pdfs || [];
    const fields = [];

    // Loop through submitted language data
    pdfs.forEach((pdfData, index) => {
      if (pdfData.language) {
        const file = req.files?.[`pdfs[${index}][pdf]`];
        const newPdfFile = file && file[0]?.filename;

        // Find existing entry in current policy fields
        const existingField = policy.fields.find(
          (f) => f.language === pdfData.language
        );

        fields.push({
          language: pdfData.language,
          pdf: newPdfFile || existingField?.pdf || "", // use new, fallback to existing
        });
      }
    });

    // Update base fields
    policy.title = title || policy.title;
    policy.order = order || policy.order;
    policy.description = description || policy.description;
    policy.link = link || policy.link;
    policy.policydate = policydate || policy.policydate;

    // Only update fields if valid
    if (fields.length > 0) {
      policy.fields = fields;
    }

    const updatedPolicy = await policy.save();
    res.status(200).json(updatedPolicy);
  } catch (error) {
    console.error("Update failed:", error);
    res.status(400).json({ message: error.message });
  }
});

// @desc    Delete a policy
exports.deletePolicy = catchAsyncErrors(async (req, res, next) => {
    try {
        const policy = await Policies.findById(req.params.id);
        if (!policy) {
            return next(new ErrorHander(`Policy not found`));
        }

        await policy.deleteOne();
        res.status(200).json({ message: 'Policy removed' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});
