const net = require("net")
const readline = require("readline")


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})


const askPollingQuestion = (socket)=> {

  rl.question('which is team is better "chelsea" or "arsenal" type your answer :', (ans) => {
    const answer = ans.toString()
    if (answer === 'chelsea' || answer === 'arsenal' || answer === 'exit') {
      return client.write(ans.toString())
    } else {

    askPollingQuestion()
    }
  })
}

const client = net.createConnection({port: 8080}, ()=> {
  console.log('connected to port 8080')
  console.log("welcome to the polling app (type 'exit' to exit)");

  askPollingQuestion()
})

client.on('data', (data) => {
  console.log(data.toString())
})

client.on('end', () => {
  console.log('Thank you. That would be all for now')
})
