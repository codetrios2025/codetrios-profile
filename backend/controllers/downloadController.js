const ErrorHander = require("../utils/errorhandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const Downloads = require("../models/downloadModel");

// @desc    Get all Downloads
exports.getAllDownload = catchAsyncErrors(async (req, res, next) => {
    const downloads= await Downloads.find();
    res.status(200).json({
        success: true,
        downloads,
    });
});
// @desc    Get all Downloads
exports.getAllDownloadbyTitle = catchAsyncErrors(async (req, res, next) => {
 
  const downloads= await Downloads.find(req.query);
  res.status(200).json({
      success: true,
      downloads,
  });
});
// @desc    Create a download
exports.createDownload = catchAsyncErrors(async (req, res, next) => {
  
    try {
        const { downloadtype,title, order, pageType, link, policydate } = req.body;
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
        const newdownload = new Downloads({
          downloadtype,
            title,
            order,
            pageType,
            link,
            policydate,
            fields
        });

        const saveddownload = await newdownload.save();
        res.status(201).json({
            success: true,
            download: saveddownload
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// @desc    Get a single download by ID
exports.getDownloadById = catchAsyncErrors(async (req, res, next) => {
    const download = await Downloads.findById(req.params.id);
    if (!download) {
        return next(new ErrorHander(`download not found`));
    }
    res.status(200).json({
        success: true,
        download,
    });
});

// @desc    Update a download
// @desc    Update a download
exports.updateDownload = catchAsyncErrors(async (req, res, next) => {
  const { downloadtype, title, order, pageType, link, policydate } = req.body;
  const fields = [];

  try {
    // Fetch the existing download record
    const download = await Downloads.findById(req.params.id);
    if (!download) {
      return next(new ErrorHander(`Download not found`));
    }

    // Extract PDF file paths and languages
    const pdfs = req.body.pdfs || [];
    pdfs.forEach((pdfData, index) => {
      if (pdfData.language) {
        const file = req.files && req.files[`pdfs[${index}][pdf]`];
        const pdfFilePath = file ? file[0].filename : download.fields[index]?.pdf || ''; // Retain existing path if no new file
        fields.push({
          language: pdfData.language,
          pdf: pdfFilePath,
        });
      }
    });

    // Update the download fields
    download.title = title || download.title;
    download.downloadtype = downloadtype || download.downloadtype;
    download.order = order || download.order;
    download.pageType = pageType || download.pageType;
    download.link = link || download.link;
    download.policydate = policydate || download.policydate;
    download.fields = fields.length ? fields : download.fields;

    // Save the updated download
    const updatedDownload = await download.save();
    res.json(updatedDownload);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// @desc    Delete a download
exports.deleteDownload = catchAsyncErrors(async (req, res, next) => {
    try {
        const download = await Downloads.findById(req.params.id);
        if (!download) {
            return next(new ErrorHander(`download not found`));
        }

        await download.deleteOne();
        res.status(200).json({ message: 'download removed' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});
