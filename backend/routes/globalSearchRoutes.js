const express = require('express');
const router = express.Router();
const User = require('../models/userModel'); // Adjust the paths to your actual models
const Social = require('../models/socialModel');
const Banner = require('../models/bannerModel');
const Address = require('../models/addressModel');
const Header = require('../models/headerModel');
const Whoweare = require('../models/whoweareModel');
const Whoweoffermain = require('../models/whoweoffermainModel');
const Homeservices = require('../models/homeserviceModel');
const Homeservicesimage = require('../models/homeserviceimageModel');
const Team = require('../models/teamModel');
const Jointeams = require('../models/jointeamsModel');
const Improvement = require('../models/improvmentModel');
// const Keyproject = require('../models/keyprojectModel');
const Mission = require('../models/missionModel');
const Sector = require('../models/sectorModel');
const Values = require('../models/valuesModel');
const Infra = require('../models/InfraModel');
const About =require('../models/aboutModel');
const Keyheading =require('../models/keyheadingModel');
const Blogsute =require('../models/blogsModel');
const policies =require('../models/policiesModel');
const video =require('../models/videoModel');
const projectservices =require('../models/projectserviceModel');
const iconservices=require('../models/iconModel');
const ServiceDetail =require('../models/serviceDetailsModel');
const assuranceoverview =require('../models/assuranceoverviewModel');
const customers =require('../models/customersModel');
const download =require('../models/downloadModel');
const whychooseUs =require('../models/whychooseUsModel');
// const application = require('../models/applicationModel');
const carrerhome = require('../models/carrerhomeModel');

// Search endpoint
router.get('/search', async (req, res) => {
  const { query } = req.query;
  try {
    const results = await Promise.all([
      User.find({ $or: [{ title: { $regex: query, $options: 'i' } }, { description: { $regex: query, $options: 'i' } }] }),
      Social.find({ $or: [{ title: { $regex: query, $options: 'i' } }, { description: { $regex: query, $options: 'i' } }] }),
      Banner.find({ $or: [{ title: { $regex: query, $options: 'i' } }, { description: { $regex: query, $options: 'i' } }] }),
      Address.find({ $or: [{ title: { $regex: query, $options: 'i' } }, { description: { $regex: query, $options: 'i' } }] }),
      Header.find({ $or: [{ title: { $regex: query, $options: 'i' } }, { description: { $regex: query, $options: 'i' } }] }),
      Whoweare.find({ $or: [{ title: { $regex: query, $options: 'i' } }, { description: { $regex: query, $options: 'i' } }] }),
      Whoweoffermain.find({ $or: [{ title: { $regex: query, $options: 'i' } }, { description: { $regex: query, $options: 'i' } }] }),
      Homeservices.find({ $or: [{ title: { $regex: query, $options: 'i' } }, { description: { $regex: query, $options: 'i' } }] }),
      Homeservicesimage.find({ $or: [{ title: { $regex: query, $options: 'i' } }, { description: { $regex: query, $options: 'i' } }] }),
      Team.find({ $or: [{ title: { $regex: query, $options: 'i' } }, { description: { $regex: query, $options: 'i' } }] }),
      Jointeams.find({ $or: [{ title: { $regex: query, $options: 'i' } }, { description: { $regex: query, $options: 'i' } }] }),
      Improvement.find({ $or: [{ title: { $regex: query, $options: 'i' } }, { description: { $regex: query, $options: 'i' } }] }),
      // Keyproject.find({ $or: [{ title: { $regex: query, $options: 'i' } }, { description: { $regex: query, $options: 'i' } }] }),
      Mission.find({ $or: [{ title: { $regex: query, $options: 'i' } }, { description: { $regex: query, $options: 'i' } }] }),
      Sector.find({ $or: [{ title: { $regex: query, $options: 'i' } }, { description: { $regex: query, $options: 'i' } }] }),
      Values.find({ $or: [{ title: { $regex: query, $options: 'i' } }, { description: { $regex: query, $options: 'i' } }] }),
      Infra.find({ $or: [{ title: { $regex: query, $options: 'i' } }, { description: { $regex: query, $options: 'i' } }] }),
      About.find({ $or: [{ title: { $regex: query, $options: 'i' } }, { description: { $regex: query, $options: 'i' } }] }),
      Keyheading.find({ $or: [{ title: { $regex: query, $options: 'i' } }, { description: { $regex: query, $options: 'i' } }] }),
      policies.find({ $or: [{ title: { $regex: query, $options: 'i' } }, { description: { $regex: query, $options: 'i' } }] }),
      projectservices.find({ $or: [{ title: { $regex: query, $options: 'i' } }, { description: { $regex: query, $options: 'i' } }] }),
      iconservices.find({ $or: [{ title: { $regex: query, $options: 'i' } }] }),
      ServiceDetail.find({ $or: [{ title: { $regex: query, $options: 'i' } },{titlename: { $regex: query, $options: 'i' } }, { description: { $regex: query, $options: 'i' } }] }),
      assuranceoverview.find({ $or: [{ text: { $regex: query, $options: 'i' } }, { description: { $regex: query, $options: 'i' } }] }),
      customers.find({ $or: [{ name: { $regex: query, $options: 'i' } }] }),
      download.find({ $or: [{ title: { $regex: query, $options: 'i' } }] }),
      whychooseUs.find({ $or: [{ titlename: { $regex: query, $options: 'i' } }, { description: { $regex: query, $options: 'i' } }] }),
      // application.find({ $or: [{ title: { $regex: query, $options: 'i' } }, { description: { $regex: query, $options: 'i' } }] }),
      carrerhome.find({ $or: [{ title: { $regex: query, $options: 'i' } }, { description: { $regex: query, $options: 'i' } }] }),
    ]);

    res.json({
      users: results[0],
      socials: results[1],
      banners: results[2],
      addresses: results[3],
      headers: results[4],
      whoweares: results[5],
      whoweoffermains: results[6],
      homeservices: results[7],
      homeservicesimages: results[8],
      teams: results[9],
      jointeams: results[10],
      improvements: results[11],
      // keyprojects: results[12],
      missions: results[12],
      sectors: results[13],
      values: results[14],
      infras: results[15],
      about: results[16],
      keyheading: results[17],
      policies: results[18],
      projectservices: results[19],
      iconservices: results[20],
      serivedetail: results[21],
      assuranceoverview: results[22],
      custmor: results[23],
      downloads: results[24],
      whychoose: results[25],
      // appliction: results[27],
      carrer: results[26],
    });
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;
