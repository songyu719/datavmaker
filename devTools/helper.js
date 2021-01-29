const  fs = require("fs")
const  path = require("path")
const template = require("art-template")




async function  read() {
   const content =   fs.readFileSync(path.join(__dirname,"../src/store/mutations.ts"),'utf8' )
   const re = /^\s+\/\/(.*)[\r\n]\s+(\w*)\(state:State,payload:(.*)\)|(\w*)\(state:State,payload:(.*)\)/gm
   let r =""
    let mutations = []
    while ( r = re.exec(content)){
       console.log(1,r[3])
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
    console.log("生成成功")
}

read();