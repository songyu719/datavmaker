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
    const code = template(__dirname+"/mutations.art",{
        mutations
    })
    const writeFile = path.join(__dirname,"../src/store/commits.ts");
    fs.writeFileSync(writeFile,code)
    console.log("生成成功")
}

read();