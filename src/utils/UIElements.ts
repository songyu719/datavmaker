import {UIElementGroup} from "@/store";


const tools:UIElementGroup[] = [
    {
        groupName: '布局组件',
        componentList: [{
            title: 'Object',
            btnClass: 'w100',
          //  componentPack: componentPackObject
        }, {
            title: 'Array',
            btnClass: 'w100',
          //  componentPack: componentPackArray
        }]
    },
    {
        groupName: '基础组件',
        componentList: [{
            title: '输入框',
          //  componentPack: componentPackInput
        }, {
            title: '数字(slider)', // 这里顺便必须在 componentPackInputNumber 前，导入匹配的时候优先匹配
          //  componentPack: componentPackSlider
        }, {
            title: '数字输入框',
          //  componentPack: componentPackInputNumber
        }, {
            title: '颜色选择',
          //  componentPack: componentPackColor
        }]
    },
    {
        groupName: '是否Bool',
        componentList: [{
            title: '是否(Switch)',
          //  componentPack: componentPackBooleanSwitch
        }, {
            title: '是否(Checkbox)',
          //  componentPack: componentPackBooleanCheckbox
        }, {
            title: '是否(Select)',
          //  componentPack: componentPackBooleanSelect
        }, {
            title: '是否(Radio)',
          //  componentPack: componentPackBooleanRadio
        }]
    },
    {
        groupName: '单选/多选',
        componentList: [{
            title: '单选(Radio)',
          //  componentPack: componentPackRadio
        }, {
            title: '单选(Select)',
          //  componentPack: componentPackRadioSelect
        }, {
            title: '多选(Select)',
          //  componentPack: componentPackMultiSelect
        }, {
            title: '多选(Checkbox)',
          //  componentPack: componentPackMultiCheckbox
        }]
    },
    {
        groupName: '文件上传',
        componentList: [{
            title: '单文件',
          //  componentPack: componentPackUpload
        }, {
            title: '多个文件',
          //  componentPack: componentPackMultiUpload
        }]
    },
    {
        groupName: '时间日期',
        componentList: [{
            title: 'Date(时间戳)',
          //  componentPack: componentPackDate
        }, {
            title: 'Date(字符串)',
          //  componentPack: componentPackDateString
        }, {
            title: 'DateTime(时间戳)',
          //  componentPack: componentPackDateTime
        }, {
            title: 'DateTime(字符串)',
          //  componentPack: componentPackDateTimeString
        }, {
            title: 'Date范围(时间戳)',
          //  componentPack: componentPackDateRange
        }, {
            title: 'Date范围(字符串)',
          //  componentPack: componentPackDateRangeString
        }, {
            title: 'DateTime范围(时间戳)',
          //  componentPack: componentPackDateTimeRange
        }, {
            title: 'DateTime范围(字符串)',
          //  componentPack: componentPackDateTimeRangeString
        }, {
            title: 'Time(字符串)',
          //  componentPack: componentPackTime
        }]
    }
];

export default tools;
