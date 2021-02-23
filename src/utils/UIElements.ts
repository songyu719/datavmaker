
export interface UIElement {
    title:string,
    componentPack?:any,
    icon?:string,
    active:false,
    id?:string,
}

const tools:UIElement[] = [

        {
            title: '单行文本',
            active:false,

          //  componentPack: componentPackObject
        },
        {
            title: '多行文本',
            active:false,

          //  componentPack: componentPackArray
        },
        {
            title: '单选',
            active:false,

            //  componentPack: componentPackArray
        },
        {
            title: '多选',
            active:false,

            //  componentPack: componentPackArray
        },
        {
            title: '下拉选择',
            active:false,

            //  componentPack: componentPackArray
        },
        {
            title: '日期',
            active:false,

            //  componentPack: componentPackArray
        },
        {
            title: '图片上传',
            active:false,

            //  componentPack: componentPackArray
        },
        {
            title: '文件上传',
            active:false,

            //  componentPack: componentPackArray
        }


];

export default tools;
