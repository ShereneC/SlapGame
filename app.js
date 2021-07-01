let health = 100
let name = ''
let hits = 0


function drawHealth(newhealth, newhits) {
  document.getElementById("displayhealth").innerText = health.toString()
  document.getElementById("displayname").innerText = name
  document.getElementById("displayhits").innerText = newhits.toString()

}

function noWater() {
  health -= 1
  hits += 1
  drawHealth(health, hits)
}
function noLight() {
  health -= 5
  hits += 1
  drawHealth(health, hits)
}
function noFood() {
  health -= 10
  hits += 1
  drawHealth(health, hits)
}

drawHealth(health, hits)