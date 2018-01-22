import axios from 'axios'

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
        axios.get('http://localhost:4040/api/ussd/dispatch/?gin=' + menu.val).then((response) => {
          menu.con(`${response.data.bags} bags (${response.data.kg} kg) of ${response.data.itemType} was dispatched to your FDP on ${response.data.date} with truck plate # ${response.data.truckPlateNumber}. Please type quantity quantity you have received in Quintal.`)
        }).catch(err => {
          menu.end('You have errors in your input. Good bye!')
        })
      },

      defaultNext: 'deliveryInformationSubmitted'
    })
    .state('deliveryInformationSubmitted', {
      run: () => {
        let val = menu.val
        axios.post('http://localhost:4040/api/ussd/received/', {val}).then(response => {
          //TODO: call Jasmin here
          menu.end('Thank you for submitting your delivery information. You will receive a confirmation SMS containing your delivery record')
        })
      }
    })
    .state('error', {
      run: () => {
        menu.end('You have errors in your input. Good bye!')
      }
    })
}
