import { version } from '../../package.json';
import { Router } from 'express';
import facets from './facets';
import { menu } from './ussd-menu'
const axios = require('axios')
const moment = require('moment')

export default ({ config, db }) => {
	let api = Router();

	// mount the facets resource
	api.use('/facets', facets({ config, db }));

	// perhaps expose some API metadata at the root
	api.get('/', (req, res) => {
		res.json({ version });
	});

	api.post('/ussd', (req, res) => {
		menu.run(req.body, ussdResult => {
			res.send(ussdResult)
		})
	})

	// I am just testing if asynchronous calls can be nested here
	api.get('/dispatch-proxy', (req, res) => {
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
	})

	api.get('/dispatch', (req, res) => {
		axios.get('http://localhost:8080/api/dispatch-proxy?gin=' + req.query.gin).then((axiosResponse) => {
			res.json(axiosResponse.data)
		})
	})

	api.post('/received', (req, res) => {
		//TODO: store the received amount to the database
		res.send({})
	})

	return api;
}
