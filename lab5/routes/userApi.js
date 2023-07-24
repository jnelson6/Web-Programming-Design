const express = require('express');
const router = express.Router();
const data = require('../data');
const userApiData = data.userApi;
 


router
    .route('/people')
    .get(async (req, res) => {
        try {
            const people = await userApiData.getPeople();
            res.json(people);
        } catch (e) {
            res.status(404).json(e);
        }
  });

router
    .route('/work')
    .get(async (req, res) => {
      try {
          const work = await userApiData.getWork();
          res.json(work);
      } catch (e) {
          res.status(404).json(e);
      }
});



router
    .route('/people/:id')
    .get(async (req, res) => {
        try {
            req.params.id = checkId(req.params.id);
            const person = await userApiData.getPeopleID(req.params.id);
            res.json(person);
        } catch (e) {
            res.status(404).json(e);
        }
    });
    // .post(async (req, res) => {
    //   res.send(`http://localhost:3000/people/479`);
    // })
    // .delete(async (req, res) => {
    //   res.send(`http://localhost:3000/people/479`);
    // });

router
    .route('/work/:id')
    .get(async (req, res) => {
        try {
          const workID = await userApiData.getWorkID();
          res.json(workID);
        } catch (e) {
            res.status(404).json(e);
        }
    });
    // .post(async (req, res) => {
    //   res.send(`http://localhost:3000/work/729`);
    // })
    // .delete(async (req, res) => {
    //   res.send(`http://localhost:3000/work/729`);
    // });

// router.get('/:id', async (req, res) => {
//   res.json({ route: `/people/${req.params.id}`, method: req.method });
// });

module.exports = router;