const colors = require("colors")
const input = require("console-read-write").ask
const filesystem = require("fs")

i = 1
a = 0
b = 0
c = 0
while(i <= 3) {
  d = (Math.random() * (3 - 1) + 1)
  d = String(d).split(".")[0]
  if(d == 1) { process.stdout.write("🍊") }
  if(d == 2) { process.stdout.write("🍓") }
  if(d == 3) { process.stdout.write("🍎") }
  if(i == 1) { a = d }
  if(i == 2) { b = d }
  if(i == 3) { c = d  }
  i++
}
console.log("\n")
if(a == b && b == c && c == a)
{
  console.log("You WIN!".green)
  
  process.exit(0)
}
else {
  console.log("You LOSE!".red)
  process.exit(0)
}
console.log("\n")
