const  fs = require("fs")
const  path = require("path")
const template = require("art-template")




async function  read() {
   const content =   fs.readFileSync(path.join(__dirname,"../src/store/mutations.ts"),'utf8' )
   const re = /^\s{0,}\/\/(.*)\s{0,}(\w*)\(state:\s{0,}State,\s{0,}payload:\s+(.*)\)|(\w*)\(state:\s{0,}State,\s{0,}payload:\s{0,}(.*)\)/gm
   let r =""
    let mutations = []
    while ( r = re.exec(content)){
        if(r[1]){
            mutations.push({
                doc:r[1],
                name:r[2],
                interface:r[3],
            })
        }else{
            mutations.push(
                {
                    doc:"暂无说明",
                    name:r[4],
                    interface:r[5],
                }
            )
        }
    }
    const code = template(__dirname+"/mutations.art",{
        mutations
    })
    const writeFile = path.join(__dirname,"../src/hooks/useCommits.ts");
    fs.writeFileSync(writeFile,code)

}

read();