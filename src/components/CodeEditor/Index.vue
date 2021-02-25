<template>
    <el-dialog
            @closed="closed"
            @opened="open"
            append-to-body
            destroy-on-close
            title="代码编辑器"
            v-model="show"
    >

        <div style="height: 500px">
            <el-input v-model="funcname"  />


            <div class="editor" id="editor">

            </div>
        </div>

        <template #footer>
            <div class="dialog-footer">
                <el-button @click="bianyi" type="primary">保存</el-button>
            </div>
        </template>
    </el-dialog>
</template>

<script lang="ts">
    import {defineComponent, nextTick, onMounted,computed,ref} from 'vue'
    import * as monaco from 'monaco-editor';
    import axios from "axios";


    export default defineComponent({
        name: "Index.vue",
        props: {
            modelValue: Boolean
        },
        setup(props, ctx) {
            let monacoEditor: monaco.editor.IStandaloneCodeEditor;
            onMounted(() => {


            })
            const funcname = ref("")
            async function bianyi() {
                console.log("TS代码", monacoEditor.getValue())
                const worker = await monaco.languages.typescript.getTypeScriptWorker()
                const client = await worker(monacoEditor.getModel()!.uri)
                const res = await client.getEmitOutput(monacoEditor.getModel()!.uri.toString())

                console.log("JS代码",  eval(res.outputFiles[0].text))
                ctx.emit('save',
                    {
                        name:funcname.value,
                        command:eval(res.outputFiles[0].text)
                    }

                )
                ctx.emit('update:modelValue', false)

            }

            const show =computed({get:()=>{
                    return props.modelValue
                },set:(v)=>{
                    ctx.emit('update:modelValue', v)
                }})



            const open = async () => {
                console.log("打开")
                monaco.languages.typescript.javascriptDefaults.setDiagnosticsOptions({
                    noSemanticValidation: true,
                    noSyntaxValidation: false
                })
                monaco.languages.typescript.javascriptDefaults.setCompilerOptions({
                    target: monaco.languages.typescript.ScriptTarget.ES2015,
                    allowNonTsExtensions: true
                });

                // const libSource = [
                //     'declare interface Facts {',
                //     '    /**',
                //     '     * Returns the next fact',
                //     '     */',
                //     '    static next():string',
                //     '}',
                // ].join('\n');
                    const  commnits = await  axios.get("/interface/commits.d.ts")
                    const  IImageBox = await  axios.get('/interface/IImageBox.ts')
                    const regex = /export[\w\W]*/g
                    const image = IImageBox.data.replace(regex,"");
                    console.log(image)
                    monaco.languages.typescript.typescriptDefaults.addExtraLib(commnits.data.replace(regex,""))
                    monaco.languages.typescript.typescriptDefaults.addExtraLib(IImageBox.data.replace(regex,""))
                    monacoEditor = monaco.editor.create(document.getElementById("editor")!, {
                        value:
                            `//只能是一个匿名函数
(function(commits:Commits,target:IimageBox){
    const { updateProps } = commits;
})
 `,
                        language: 'typescript',
                        theme: "vs-dark"
                    })



            }
            const closed = () => {
                monacoEditor!.dispose();
                const  ele = document.getElementsByClassName("monaco-aria-container");
                if(ele.length>0){
                    ele[0].remove();
                }

            }
            return {bianyi, closed,open,show,funcname}
        }
    })
</script>

<style lang="less" scoped>
    .editor {
        width: 100%;
        height: 100%;
    }
  .el-dialog__body{
        padding: 10px;
    }
</style>