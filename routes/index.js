var express = require('express');
var router = express.Router();
var json = require('../public/company.json')

const phonePre = [
  '139', '138', '137', '136', '135', '134', '159', '158', '157', '150',
  '151', '152', '188', '187', '182', '183', '184', '178', '130', '131',
  '132', '156', '155', '186', '185', '176', '133', '153', '189', '180',
  '181', '177']

const genRandomInt = (min, max) => {
  return Math.floor(Math.random()*max) + min
}

const getRandom = (min, max) => {
  return Math.random() * (max - min) + min
}

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/api', function(req, res, next) {
  const poi = req.query.poi
  const points = poi.split('|').map(item => item.split(','))
  console.log(poi, points)
  const result = []
  points.forEach((item,index) => {
    const start = [+item[0], +item[1]]
    const end = [+item[2], +item[3]]
    const num = +item[4]
    const color = item[5] ? `#${item[5]}` : '#00b0f0'
    console.log(start, end, num)
    for(let i = 0; i < num; i++){
      result.push({
        id: `${index}${i}`,
        name: `${phonePre[genRandomInt(0, phonePre.length)]}${genRandomInt(1, 10e7)}`,
        x: getRandom(start[0], end[0]),
        y: getRandom(start[1], end[1]),
        color: color,
        province: '江苏',
        type_id: 1
      })
    }
    json['1'].push(...result)
  })
  
  res.json(json);
})

module.exports = router;
