import UssdMenu from 'ussd-menu-builder';
import * as registerDeliveryStates from './states/delivery';
import * as registerDistributionStates from './states/distribution';

const menu = new UssdMenu()

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

registerDeliveryStates.register(menu)
registerDistributionStates.register(menu)

export default menu;
