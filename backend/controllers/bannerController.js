const ErrorHander = require("../utils/errorhandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const Banner = require("../models/bannerModel")

// @desc    Get all banners
exports.getAllBanners = catchAsyncErrors(async (req, res, next) => {
    const banners = await Banner.find();
    res.status(200).json({
      success: true,
      banners,
    });
});

// @desc    Create a banner
exports.createBanner = catchAsyncErrors(async (req,res,next) =>{
    const { title, link, bannerText, bannerOrder, bannerStatus } = req.body;
    const bannerImage = req.file ? req.file.filename : null;
    if (!bannerImage) {
        return next(
            new ErrorHander(`Banner image is required with Id: ${req.params.id}`)
          );
    }
    const newBanner = new Banner({
        title,
        link,
        bannerText,
        bannerImage,
        bannerOrder,
        bannerStatus,
    });
    const banner = await newBanner.save();
    res.status(201).json(banner);
});

// @desc    Get a single banner by ID
exports.getBannerById = catchAsyncErrors(async (req,res,next)=>{
    const banner = await Banner.findById(req.params.id);
    if (!banner) {
        return next(
            new ErrorHander(`Banner not found`)
          );
    }
    res.json(banner);
})

// @desc    Update a banner
exports.updateBanner = async (req, res) => {
    const { title, link, bannerText, bannerOrder, bannerStatus } = req.body;
    const bannerImage = req.file ? req.file.filename : null;

    try {
        const banner = await Banner.findById(req.params.id);
        if (!banner) {
            return next(
                new ErrorHander(`Banner not found`)
              );
        }

        banner.title = title || banner.title;
        banner.link = link || banner.link;
        banner.bannerText = bannerText || banner.bannerText;
        banner.bannerOrder = bannerOrder !== undefined ? bannerOrder : banner.bannerOrder;
        banner.bannerStatus = bannerStatus !== undefined ? bannerStatus : banner.bannerStatus;
        banner.bannerImage = bannerImage || banner.bannerImage;

        const updatedBanner = await banner.save();
        res.json(updatedBanner);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// @desc    Delete a banner
exports.deleteBanner = catchAsyncErrors(async (req, res) => {
    try {
        const banner = await Banner.findById(req.params.id);
        if (!banner) {
            return next(
                new ErrorHander(`Banner not found`)
              );
        }
        await banner.deleteOne({ _id: req.params.id });
        res.json({ message: 'Banner removed' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});
