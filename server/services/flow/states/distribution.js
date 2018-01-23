export const register = (menu) => {
  menu.state('distribution', {
    run: () => {
      let fdp = 'Ade', zone = 'East Hararghie', woreda = 'Gola Oda';
      menu.con(`You are reporting to ${fdp} FDP which is in ${zone} Zone, ${woreda} Woreda. Which round are you reporting for?`)
    },

    defaultNext: 'getReportRound',
  })

    .state('getReportRound', {
      run: () => {
        let val = menu.val
        menu.con('Please type the total number of beneficiaries which were provided assistance in 2009/2017 2nd round?')
      },

      defaultNext: 'deliveryInformationSubmitted'
    })

    .state('deliveryInformationSubmitted', {
      run: () => {
        menu.con('Total amount of [commodity] in quintal distributed?')
      },

      defaultNext: 'totalAmountOfCommoditySubmitted'
    })

    .state('totalAmountOfCommoditySubmitted', {
      run: () => {
        menu.end('Thank you for submitting distribution information. You will recieve a confirmation SMS containing your distribution record.')
      }
    })
}
