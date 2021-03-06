/* eslint "no-underscore-dangle": 0 */
const path = require('path')
const express = require('express')
const favicon = require('serve-favicon')

const { SERVER } = require('../../config')

const app = express()

/* data */
const airPollution = require('./data/airPollution')
const obamaBudget = require('./data/obamaBudget')
const worldFlightData = require('./data/worldFlight')
const priceAndEarnings = require('./data/priceAndEarnings')

// dist
app.use('/dist', express.static('dist'))

// favicon
app.use(favicon(path.resolve(__dirname, '../../public', './favicon.ico')))

// static file
app.use(express.static('public'))

app.set('views', path.resolve(__dirname, '../../', './src/client/template'))
app.set('view engine', 'jade')

app.get('/', (req, res) => {
  res.render('index', {})
})

app.get('/what', (req, res) => {
  res.render('what', {})
})

app.get('/why', (req, res) => {
  res.render('why', {})
})

app.get('/how', (req, res) => {
  res.render('how', {})
})

app.get('/demos', (req, res) => {
  res.render('demos', {})
})

// demo links routes

app.get('/demo/air-pollution', (req, res) => {
  res.render('air-pollution', {})
})
app.get('/demo/air-pollution/data', (req, res) => {
  // console.log(JSON.stringify(airPollution.getJSON()))
  res.json(airPollution.getJSON())
})

app.get('/demo/price-and-earnings', (req, res) => {
  res.render('price-and-earnings', {})
})
app.get('/demo/price-and-earnings/data', (req, res) => {
  res.json(priceAndEarnings.get())
})

app.get('/demo/world-flight', (req, res) => {
  res.render('world-flight', {})
})
app.get('/demo/world-flight/data', (req, res) => {
  res.json(worldFlightData)
})

app.get('/demo/budget-proposal', (req, res) => {
  res.render('budget-proposal', {})
})

app.get('/demo/budget-proposal/data', (req, res) => {
  res.json(obamaBudget)
})

app.get('/demo/heat-map', (req, res) => {
  res.render('heat-map', {})
})

app.listen(SERVER.PORT, () => {
  console.log('server start')
})

process.on('uncaughtException', (err) => {
  console.log('err', err)
})
