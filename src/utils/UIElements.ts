export interface UIElement {
    title: string,
    componentPack?: any,
    icon?: string,
    active: boolean,
    id?: string,
    monitor?: string,
    options?:any,
    rules?: any,
    data?: any
}

const tools: UIElement[] = [

    {
        title: '单行文本',
        active: false,
        monitor:"TextMonitor",
        componentPack:"el-input",
        options:{
            name:"测试",
            required: true,
            format:""
        },
        rules: [],
        data: {}

        //  componentPack: componentPackObject
    },
    {
        title: '多行文本',
        active: false,
        monitor:"TextAreaMonitor",
        componentPack:"el-input",
        options:{
            name:"测试多行",
            required: true,
            format:""
        },

        //  componentPack: componentPackArray
    },
    {
        title: '单选',
        active: false,

        //  componentPack: componentPackArray
    },
    {
        title: '多选',
        active: false,

        //  componentPack: componentPackArray
    },
    {
        title: '下拉选择',
        active: false,

        //  componentPack: componentPackArray
    },
    {
        title: '日期',
        active: false,

        //  componentPack: componentPackArray
    },
    {
        title: '图片上传',
        active: false,

        //  componentPack: componentPackArray
    },
    {
        title: '文件上传',
        active: false,

        //  componentPack: componentPackArray
    }


];

export default tools;
