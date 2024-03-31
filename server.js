const express = require('express');
const exphbs = require('express-handlebars');
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const sequelize = require('./config/connection'); // Adjust the path as necessary

const app = express();
const PORT = process.env.PORT || 3000;

// Session middleware
app.use(session({
  secret: 'super secret',
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
}));

// Handlebars middleware
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Static directory
app.use(express.static('public'));

// Routes
require('./routes')(app); // Adjust the path to your routes file

// Start the server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));
});
