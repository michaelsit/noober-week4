window.addEventListener('DOMContentLoaded', async function() {
  let response = await fetch('https://kiei451.com/api/rides.json')
  let json = await response.json()

  // writes the returned JSON to the console
  console.dir(json)
  
  // 🔥 start here: write the recipe (algorithm), then write the code
  
  // loop through the rides data
  for (let i = 0; i < json.length; i++) {
    // create variable to store each ride in memory
    // define ride types for pupleRequested (purple or X) and numberOfPassengers > 3 for XL
    let purpleReq = json[i].purpleRequested
    let numberOfPass = json[i].numberOfPassengers
    let rideType
    // Create ride type conditional based on # of passengers, purple, ect. and store it in memory
      if (purpleReq == true) {
        rideType = `Noober Purple` 
      } else if (numberOfPass > 3) {
        rideType = `Noober XL`
      } else {
        rideType = `Noober X`
      }
    // passenger detail objects (First, Last, Phone #)
    let pass = json[i].passengerDetails
      let passName = `${pass.first} ${pass.last}`
    // define pickup & dropoff objects (Address, City, State Zip)
    let pickup = json[i].pickupLocation
      let pickupAdd = `${pickup.address}`
      let pickupCity = `${pickup.city}, ${pickup.state} ${pickup.zip}`
    let dropoff = json[i].dropoffLocation
      let dropoffAdd = `${dropoff.address}`
      let dropoffCity = `${dropoff.city}, ${dropoff.state} ${dropoff.zip}`
    

    // Create variable for HTML element to add
    let rides = document.querySelector(`.rides`)



  }


  // sample data string from json
  // {"passengerDetails":{"first":"Rosendo","last":"Howe","phoneNumber":"(515) 732-2315"},"pickupLocation":{"address":"5926 S Union Ave","city":"Chicago","state":"IL","zip":"60615"},"dropoffLocation":{"address":"7009 S Paulina St","city":"Chicago","state":"IL","zip":"60609"},"numberOfPassengers":6,"purpleRequested":true}