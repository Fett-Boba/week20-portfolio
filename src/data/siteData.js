import imgBudget from "../img/budgetThumbnail.png";
import imgWorkout from "../img/workoutThumbnail.png";
import imgArt from "../img/artThumbnail.png";
import imgTech from "../img/techThumbnail.png";
import imgCook from "../img/cooknbrewThumbnail.png";
import imgWeather from "../img/weatherThumbnail.png";

const siteData = [
     {
          id: 1,
          myTitle: "Budget Tracker",
          myUrl: "https://salty-beach-80384.herokuapp.com/",
          myGit: "https://github.com/Fett-Boba/Week19-BudgetTracker",
          myText: "An online or offline budget tracker that logs your deposits and withdrawals, with or without an internet connection via Mongo DB. It can also be installed to the desktop as a Progressive Web App.  When logging transactions offline, they are stored locally and will become available once you come back within range of an internet connection.",
          myImg: imgBudget,
     },
     {
          id: 2,
          myTitle: "Workout Tracker",
          myUrl: "https://frozen-meadow-30451.herokuapp.com/",
          myGit: "https://github.com/Fett-Boba/Week18-WorkoutTracker",
          myText: "This is a workout tracker that helps the user reach their fitness goals more quickly. The Mongo database keeps track of multiple exercises in a workout on a given day, weight amounts, sets, reps and duration, and distance travelled for cardio.",
          myImg: imgWorkout,
     },
     {
          id: 3,
          myTitle: "The Happy Little Art Gallery",
          myUrl: "https://happylittleartgallery072021.herokuapp.com/",
          myGit: "https://github.com/twashke/Art-Gallery",
          myText: "The Happy Little Art Gallery is a Bob Ross inspired group project which allows budding artists to showcase their art, give and receive critiques, and purchase artwork via a secure paypal hook. The site uses Sequelize, express-session, Handlebars, MySql, BCrypt, Multer, Cloudinary, and the PayPal restful SDK. It is deployed to Heroku.",
          myImg: imgArt,
     }, {
          id: 4,
          myTitle: "Tech Blog",
          myUrl: "https://fathomless-sea-78946.herokuapp.com/",
          myGit: "https://github.com/Fett-Boba/Week14-MVC-Tech-Blog",
          myText: "The Tech Blog is a CMS style site where developers can publish their blog posts and comment on other developers' posts as well. The site was built using MVC structure, with Handlebars as the templating language, Sequelize as the ORM, MySql for the database, and express-session for authentication. The site is deployed to Heroku.",
          myImg: imgTech,
     }, {
          id: 5,
          myTitle: "Cook-N-Brew",
          myUrl: "https://cmartin1336.github.io/Cook-N-Brew/",
          myGit: "https://github.com/CMartin1336/Cook-N-Brew",
          myText: "Cook-N-Brew is a group project where our team of four developers created an application that uses two API's to find recipes from food categories, and select a brewery in the city of your choice.",
          myImg: imgCook,
     }, {
          id: 6,
          myTitle: "Weather Dashboard",
          myUrl: "https://fett-boba.github.io/Week06-Weather-Dashboard/",
          myGit: "https://github.com/Fett-Boba/Week06-Weather-Dashboard",
          myText: "The Weather Dashboard is a utility that uses the Open Weather API that allows you to enter the city of your choice and find the current weather, windspeed, humidity,and UV index, as well as the five day forecast. Just enter any city worldwide to see the weather.",
          myImg: imgWeather,
     },
];

export default siteData;