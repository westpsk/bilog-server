var express = require('express');
var router = express.Router();

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
  const json = {
    "1": [
        {
            "id": "YZSH",
            "name": "13652254125",
            "type_id": 3,
            "color": "#00b0f0",
            "x": "118.7791760000",
            "y": "32.2430920000",
            "province": "江苏"
        },
        {
            "id": "JSSY",
            "name": "15632569856",
            "type_id": 3,
            "color": "#70ad47",
            "x": "118.7578360000",
            "y": "32.0917520000",
            "province": "江苏"
        },
        {
            "id": "JSYT",
            "name": "15632569854",
            "type_id": 5,
            "color": "#70ad47",
            "x": "118.8774350000",
            "y": "32.1252440000",
            "province": "江苏"
        },
        {
            "id": "YZHX",
            "name": "14526369854",
            "type_id": 3,
            "color": "#70ad47",
            "x": "118.8252480000",
            "y": "32.0746070000",
            "province": "江苏"
        },
        {
            "id": "NHGS",
            "name": "15423658954",
            "type_id": 3,
            "color": "#70ad47",
            "x": "118.7755290000",
            "y": "32.2279180000",
            "province": "江苏"
        },
        {
            "id": "HDSJ",
            "name": "13658745214",
            "type_id": 4,
            "color": "#70ad47",
            "x": "118.7330860000",
            "y": "32.0062140000",
            "province": "江苏"
        },
        {
            "id": "HXJS",
            "name": "13698563254",
            "type_id": 4,
            "color": "#70ad47",
            "x": "118.8066620000",
            "y": "32.0465750000",
            "province": "江苏"
        },
        {
            "id": "OS",
            "name": "13652365896",
            "type_id": 2,
            "color": "#70ad47",
            "x": "118.7804760000",
            "y": "32.2450960000",
            "province": "江苏"
        },
        {
            "id": "SWTY",
            "name": "14523658745",
            "type_id": 2,
            "color": "#70ad47",
            "x": "118.8501210000",
            "y": "32.0444760000",
            "province": "江苏"
        },
        {
            "id": "SNEI",
            "name": "12365412587",
            "type_id": 1,
            "color": "#70ad47",
            "x": "118.8807880000",
            "y": "31.9396610000",
            "province": "江苏"
        },
        {
            "id": "JLSH",
            "name": "15632441255",
            "type_id": 3,
            "color": "#70ad47",
            "x": "118.9320750000",
            "y": "32.1564600000",
            "province": "江苏"
        }
    ]
  }
  const poi = req.query.poi
  const points = poi.split('|').map(item => item.split(','))
  const result = []
  points.forEach((item,index) => {
    const result = []
    const start = [+item[0], +item[1]]
    const end = [+item[2], +item[3]]
    const num = +item[4]
    const color = item[5] ? `#${item[5]}` : '#00b0f0'
    for(let i = 0; i < num; i++){
      const area = index > 9 ? index.toString() : `0${index}`
      const zeroLength = 6 - area.length - i.toString().length
      let zeroStr = Array.from({length: zeroLength}).fill(0)
      result.push({
        id: `JS${area}${zeroStr.join('')}${i}`,
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
