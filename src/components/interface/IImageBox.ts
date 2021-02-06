


declare  interface Event {
    name:string,
    command:(...arg:any)=>void
}

declare  interface IimageBox {

    src:string,
    alt:string,
    events?: {
        load?:Event[],
        mounted?:Event[],
    },

}

 export  {IimageBox,Event}