var express = require('express');
var router = express.Router();
var routeuser = require('../controller/profile');
/* GET users index page */
router.get('/', routeuser.index);

/* Get profile page show the profile*/
router.get('/profile', routeuser.getprofile);

/* Get edit profile page */
router.get('/editprofile',routeuser.editprofile);

/* Store the edited profile information */
router.post('/profile',routeuser.storeprofile);

module.exports = router;
