import axios from 'axios'
import ussdService from '../../dispatch-service'
import dispatchService from '../../dispatch-service';

export const register = (menu) => {
  menu.state('delivery', {
    run: () => {
      menu.con('Please type hub Dispatch Note (GIN) number')
    },

    defaultNext: 'getDispatchInfo',
  })
    .state('getDispatchInfo', {
      run: () => {
        // assuming response has keys bags, kg, itemType, date, truckPlateNumber
        ussdService.getDispatchInfoViaProxy(menu.val).then(dispatch => {
          menu.con(`${dispatch.bags} bags (${dispatch.kg} kg) of ${dispatch.itemType} was dispatched to your FDP on ${dispatch.date} with truck plate # ${dispatch.truckPlateNumber}. Please type quantity quantity you have received in Quintal.`);
        }).catch(err => {
          menu.end('You have errors in your input. Good bye!')
        });
      },

      defaultNext: 'deliveryInformationSubmitted'
    })
    .state('deliveryInformationSubmitted', {
      run: () => {
        let val = menu.val
        dispatchService.receive(val).then(data => {
          // TODO: call Jasmin here
          menu.end('Thank you for submitting your delivery information. You will receive a confirmation SMS containing your delivery record');
        });
      }
    })
    .state('error', {
      run: () => {
        menu.end('You have errors in your input. Good bye!');
      }
    })
}
