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
        rideType = `Purple` 
      } else if (numberOfPass > 3) {
        rideType = `XL`
      } else {
        rideType = `X`
      }
    // passenger detail objects (First, Last, Phone #)
    let pass = json[i].passengerDetails
      let passName = `${pass.first} ${pass.last}`
      let passNumber = `${pass.phoneNumber}`
    // define pickup & dropoff objects (Address, City, State Zip)
    let pickup = json[i].pickupLocation
      let pickupAdd = `${pickup.address}`
      let pickupCity = `${pickup.city}, ${pickup.state} ${pickup.zip}`
    let dropoff = json[i].dropoffLocation
      let dropoffAdd = `${dropoff.address}`
      let dropoffCity = `${dropoff.city}, ${dropoff.state} ${dropoff.zip}`
    }
  

  //Create variable for HTML element to add
  let rides = document.querySelector(`.rides`)

  // insert HTML into page w JS
  rides.insertAdjacentHTML(`beforeend`,`
  <h1 class="inline-block mt-8 px-4 py-2 rounded-xl text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
    <i class="fas fa-car-side"></i>
    <span>Noober ${rideType}</span>
  </h1>
  <div class="border-4 border-gray-900 p-4 my-4 text-left">
    <div class="flex">
      <div class="w-1/2">
        <h2 class="text-2xl py-1">${passName}</h2>
        <p class="font-bold text-gray-600">${passNumber}</p>
      </div>
      <div class="w-1/2 text-right">
        <span class="rounded-xl bg-gray-600 text-white p-2">
          ${numberOfPass} passengers
        </span>
      </div>
    </div>
    <div class="mt-4 flex">
      <div class="w-1/2">
        <div class="text-sm font-bold text-gray-600">PICKUP</div>
        <p>${pickupAdd}</p>
        <p>${pickupCity}</p>
      </div>
      <div class="w-1/2">
        <div class="text-sm font-bold text-gray-600">DROPOFF</div>
        <p>${dropoffAdd}</p>
        <p>${dropoffCity}</p>
      </div>
    </div>
  </div>
`)




})
