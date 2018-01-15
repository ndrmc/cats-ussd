import moment from 'moment'

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
            let val = menu.val
            menubar.con('Please type the total number of beneficiaries which were provided assistance in 2009/2017 2nd round?')
        },
    
        defaultNext: 'deliveryInformationSubmitted'
    })
}