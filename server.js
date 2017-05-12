/**
 * Created by xinzheng on 1/24/17.
 */

const path = require('path');
const express = require('express');




// const app = express();
// const port = process.env.PORT || 3000;
// const public_path = express.static(__dirname + '/public');
// const index_path = __dirname + '/public/index.html';
//
// app.use(public_path);
//
// app.get('*', function (request, response) {
//   response.sendFile(index_path, function (error) {
//     if (error) {
//       console.log(error);
//     }
//   });
// });



const app = express();
const port = process.env.PORT || 3000;
// const public_path = express.static(__dirname + '/public/LandingNOLA');
const public_path = express.static(__dirname + '/public');
// const publicLandingNOLA_path = express.static(__dirname + '/LandingNOLA');


const mainNOLA_path = __dirname + '/public/index.html';
const mainSF_path = __dirname + '/public/indexSF.html';

const landingNOLA_path = __dirname + '/public/indexLandingNOLA.html';
const landingSF_path = __dirname + '/public/indexLandingSF.html';


const landingIMG_path = __dirname + '/public/indexLandingNOLA.html';



app.use(public_path);


app.get('/main/nola/*', function (request, response) {

  response.sendFile(mainNOLA_path, function (error) {
    if (error) {
      console.log(error);
    }
  });
});

app.get('/main/sf/*', function (request, response) {

  response.sendFile(mainSF_path, function (error) {
    if (error) {
      console.log(error);
    }
  });
});



app.get('/landingNOLA', function (request, response) {
  response.sendFile(landingNOLA_path, function (error) {
    if (error) {
      console.log(error);
    }
  });
});



app.get('/landingSF', function (request, response) {
  response.sendFile(landingSF_path, function (error) {
    if (error) {
      console.log(error);
    }
  });
});




app.listen(port, function() {
  console.log("App is running on port " + port);
});

