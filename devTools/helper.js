const  fs = require("fs")
const  path = require("path")
const template = require("art-template")




async function  read() {
   const content =   fs.readFileSync(path.join(__dirname,"../src/store/mutations.ts"),'utf8' )
   const re = /(\w*)\(state:State,payload:(.*)\)/g
   let r =""

    let mutations = []

    while ( r = re.exec(content)){

        mutations.push({
            name:r[1],
            interface:r[2],
        })
    }
    console.log(mutations)

}

read();