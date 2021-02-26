const path = require('path')
const  MonacoWebpackPlugin  = require('monaco-editor-webpack-plugin')
// const  CopyPlugin  = require('copy-webpack-plugin')
module.exports = {
    chainWebpack: config => {
        const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
        types.forEach(type => addStyleResource(config.module.rule('less').oneOf(type)))
    },
    configureWebpack: config => {

        config.plugins.push(
            new MonacoWebpackPlugin()
        )

        // let  interfaceFiles = [
        //
        // ]
        //      interfaceFiles.push({
        //          from:__dirname+"/src/components/interface/IImageBox.ts", to:__dirname+"/dist/interface"
        //      })
        //
        //
        // config.plugins.push( new CopyPlugin({
        //     patterns:interfaceFiles,
        //     options: {
        //         concurrency: 100,
        //     },
        // }))


    },
    css: {
        loaderOptions: {
            less: {
                javascriptEnabled: true
            }
        }
    },
    devServer:{
        contentBase: ['public','src/components/']
    }
}

function addStyleResource(rule) {
    rule.use('style-resource')
        .loader('style-resources-loader')
        .options({
            patterns: [
                // 需要全局导入的less路径，自己修改，我这里引入了两个less文件
                path.resolve(__dirname, './src/assets/global.less'),
            ],
        })
}