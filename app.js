// let health = 100
// let name = ''
// let hits = 0

let plants = {
  plant1: {
    name: 'Plant1',
    health: 100,
    hits: 0
  }
}

let neglect = {
  noWater: {
    name: 'noWater',
    damage: 1,
    description: 'I\'m thirsty!'
  },
  noLight: {
    name: 'noLight',
    damage: 5,
    description: 'It\'s dark!'
  },
  noFood: {
    name: 'noFood',
    damage: 10,
    description: 'I\'m hungry!'
  }
}


// function drawHealth(newhealth, newhits) {
//   // console.log(newhealth)
//   document.getElementById("displayhealth").innerText = newhealth.toString()
//   document.getElementById("displayname").innerText = name
//   document.getElementById("displayhits").innerText = newhits.toString()

// }


function drawHealth() {
  // console.log(newhealth)
  document.getElementById("displayhealth").innerText = plants.plant1.health.toString()
  document.getElementById("displayname").innerText = plants.plant1.name.toString()
  document.getElementById("displayhits").innerText = plants.plant1.hits.toString()

}

function noWater() {
  plants.plant1.health -= 1
  plants.plant1.hits += 1
  // fetch the damage value from the neglect object & substract from health
  // drawHealth(plants.plant1.health, plants.plant1.hits)
  drawHealth()
}
function noLight() {
  plants.plant1.health -= 5
  plants.plant1.hits += 1
  // hits += 1
  drawHealth(plants.plant1.health, plants.plant1.hits)
}
function noFood() {
  plants.plant1.health -= 10
  plants.plant1.hits += 1
  // hits += 1
  drawHealth(plants.plant1.health, plants.plant1.hits)
}

drawHealth()