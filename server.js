var express = require('express')
var app = express()
var port = process.env.PORT || 8080
var articles = {}

app.set('view engine', 'ejs')

app.use(express.static('public'))

app.get('/', function (request, response) {
  response.render('pages/index', {
    articles: articles
  })
})

app.get('/perfectgrade', function (request, response) {
  response.render('pages/perfectgrade', {
    articles: articles
  })
})

app.get('/mastergrade', function (request, response) {
  response.render('pages/mastergrade', {
    articles: articles
  })
})

app.get('/expensive', function (request, response) {
  response.render('pages/expensive', {
    articles: articles
  })
})

function createArticlePG (article) {
  var id = Object.keys(articles).length
  article.createdAt = new Date()
  articles[id] = article
}

createArticlePG({
  title: 'Strike Freedom',
  content: 'Yesterday evening a, the criminal squirrel Rabid Rabindra got out of his cage.'
})

app.listen(port)
