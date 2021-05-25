const colors = require("colors")
const input = require("console-read-write").ask
const fs = require("fs")

console.clear()

write()
async function write() { 
  fs.writeFileSync(__dirname + "/.STATS", "")
}

console.log("____________\n")

i = 1
a = 0
b = 0
c = 0
process.stdout.write("| ")
while(i <= 3) {
  d = (Math.random() * (3 - 1) + 1)
  d = String(d).split(".")[0]
  if(d == 1) { process.stdout.write("🍊 ") }
  if(d == 2) { process.stdout.write("🍓 ") }
  if(d == 3) { process.stdout.write("🍎 ") }
  if(i == 1) { a = d }
  if(i == 2) { b = d }
  if(i == 3) { c = d  }
  i++
}
process.stdout.write("| ")
console.log("\n____________\n")
if(a == b && b == c && c == a)
{
  console.log("You WIN!\n\n\n".green)
  read()
  async function read() { 
    const data = fs.readFileSync(__dirname + "/.STATS", 'utf8')
    fs.writeFileSync(__dirname + "/.STATS", data + "WIN\n")
  }
  process.exit(0)
}
else {
  read()
  async function read() { 
    const data = fs.readFileSync(__dirname + "/.STATS", 'utf8')
    fs.writeFileSync(__dirname + "/.STATS", data + "LOSE\n")
  }
  console.log("You LOSE!\n\n\n".red)
  process.exit(0)
}
console.log("\n")