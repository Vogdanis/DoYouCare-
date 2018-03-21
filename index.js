const express = require('express')
const app = express()
var path = require('path');


//app.use(express.static(path.join(__dirname, 'NewArJs')));
//app.use(express.static(path.join(__dirname, 'InstaScanQRcode')));
//app.use(express.static(path.join(__dirname, '/templates/ChickenPageWebGL')));
app.use(express.static(path.join(__dirname, '/templates/commonAssets')));
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/InstaScanQRcode/index.html'));
    //res.sendFile(path.join(__dirname + '/TestMarkers/index.html'));
    //res.sendFile(path.join(__dirname + '/NewArJs/index.html'));
    //res.sendFile(path.join(__dirname + '/templates/ChickenPageWebGL/chickenPageGL.html'));
    //res.sendFile(path.join(__dirname + '/templates/ChickenPageWebGL/chickenPageGL.html'));

});
app.get('/chicken', function(req, res) {
    
    res.sendFile(path.join(__dirname + '/templates/ChickenPageWebGLNewThreeJS/chickenPageGL.html'));

});
app.get('/pig', function(req, res) {
    res.sendFile(path.join(__dirname + '/templates/PigPage/pigPage.html'));

});
app.get('/lamb', function(req, res) {
    res.sendFile(path.join(__dirname + '/templates/Lambpage/lambPage.html'));

});
app.get('/cheese', function(req, res) {
    res.sendFile(path.join(__dirname + '/templates/CheesePage/cheesePage.html'));

});
app.listen(3000, () => console.log('Example app listening on port 3000!'))