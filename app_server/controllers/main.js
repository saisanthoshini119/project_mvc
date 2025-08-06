// app_server/controllers/main.js

/* GET homepage */
const index = (req, res) => {
  res.render('index', { title: 'Express' });
};

module.exports = {
  index
};
