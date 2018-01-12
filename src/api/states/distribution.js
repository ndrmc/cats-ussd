import axios from 'axios'

export const register = (menu) => {
    menu.state('distribution', {
        run: () => {
            menu.con('You are reporting to {fdp} FDP which is in {zone} Zone, {woreda} Woreda. Which round are you reporting for?', {
                fdp: 'Ade',
                zone: 'East Hararghie',
                woreda: 'Gola Oda',
            })
        },
    
        defaultNext: 'getReportRound',
    })
    .state('getReportRound', {
        run: () => {
            // assuming response has keys bags, kg, itemType, date, truckPlateNumber
            axios.get('http://localhost:8080/api/dispatch/?gin=' + menu.val).then((response) => {
                menu.con(format('{bags} bags ({kg} kg) of {itemType} was dispatched to your FDP on {date} with truck plate # {truckPlateNumber}. Please type quantity quantity you have received in Quintal.', response.data))
            }).catch(err => {
                menu.end('You have errors in your input. Good bye!')
            })
        },
    
        defaultNext: 'deliveryInformationSubmitted'
    })
    .state('deliveryInformationSubmitted', {
        run: () => {
            let val = menu.val
            axios.post('http://localhost:8080/api/received', {val}).then(response => {
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