const express = require("express");
const session = require("express-session");
const exphbs = require('express-handlebars');
const path = require('path');
const routes = require('./controllers');
const sequelize = require("./config/connection");
const SequelizeStore = require("connect-session-sequelize")(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;

app.engine('handlebars',exphbs());
app.set('view engine', 'handlebars')

const sess = {
  secret: 'Super secret secret',
  cookie: {
    maxAge: 3000000000,
    httpOnly: true,
    secure: false,
    sameSite: 'strict',
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};
app.use(session(sess));

console.log(__dirname)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname,'public')));
app.get("/update/css/style.css", (req, res) => {
  res.setHeader("Content-Type", "text/css");
  res.sendFile(__dirname + "/public/css/style.css");
});
// app.use(express.static('public', { 
//   setHeaders: (res, path, stat) => {
//     if (path.endsWith('.css')) {
//       res.setHeader('Content-Type', 'text/css');
//     }
//   }
// }));


app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Now listening on ${PORT}`));
});

