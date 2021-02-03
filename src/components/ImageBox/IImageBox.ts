

interface Event {
    name:string,
    command:()=>void
}


export default  interface IimageBox {
    src:string,
    alt:string,
    events?: {
        load?:Event[],
        mounted?:Event[],
    },

}