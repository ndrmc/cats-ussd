import UssdMenu from 'ussd-menu-builder'
const menu = new UssdMenu()
import axios from 'axios'
import * as registerDeliveryStates from './states/delivery'
import * as registerDistributionStates from './states/distribution'

let sessions = {}

menu.startState({
  run: () => {
    menu.con(`
            Welcome to CATS Reporting Please select activity to report
            1. Delivery
            2. Distribution`
    )
  },
  // next object links to next state based on user input
  next: {
    '1': 'delivery',
    '2': 'distribution'
  }
})

menu.sessionConfig({
  start: (sessionId, callback) => {
    // initialize current session if it doesn't exist
    // this is called by menu.run()
    if(!(sessionId in sessions)) sessions[sessionId] = {};
    callback();
  },

  end: (sessionId, callback) => {
    // clear current session
    // this is called by menu.end()
    delete sessions[sessionId];
    callback();
  },

  set: (sessionId, key, value, callback) => {
    // store key-value pair in current session
    sessions[sessionId][key] = value;
    callback();
  },

  get: (sessionId, key, callback) => {
    // retrieve value by key in current session
    let value = sessions[sessionId][key];
    callback(null, value);
  }
})

registerDeliveryStates.register(menu)
registerDistributionStates.register(menu)

export default menu
