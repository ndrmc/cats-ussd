import menu from './ussd-menu'
import axios from 'axios'
import moment from 'moment'

function start(req, res, next) {
  menu.run(req.body, ussdResult => {
    res.send(ussdResult)
  })
}

function getDispatchProxy(req, res, next) {
  let gin = parseInt(req.query.gin)
  let itemType = ['Wheat', 'Duket', 'Furno', 'Fafa', 'Endomi', 'Wetet'][gin]
  itemType = itemType ? itemType : 'Wheat'
  res.json({
    bags: gin + 1,
    kg: gin * 100,
    itemType,
    date: moment().subtract(gin, 'days').calendar(),
    truckPlateNumber: gin + '-38765',
  })
}

function getDispatch(req, res, next) {
  axios.get('http://localhost:4040/api/ussd/dispatch-proxy?gin=' + req.query.gin).then((axiosResponse) => {
    res.json(axiosResponse.data)
  })
}

function received(req, res, next) {
  //TODO: store the received amount to the database
  res.send({})
}

export default {start, getDispatch, getDispatchProxy, received}
