import {dataElement} from "@/store/index";

export function changeScale(scale:number) {
    store.commit("changeScale",scale)
}

export  function sortList(elements:dataElement[]) {
    store.commit("sortList",elements)
}
export  function updatePos(payload:{pos:{x:number,y:number},id:string }) {
    store.commit("updatePos",payload)
}

export function updateSize(payload:{pos:{x:number,y:number,w:number,h:number},id:string }) {
    store.commit("updateSize",payload)
}

export function updateName(name:string) {
    store.commit("updateName",name)
}

export function AddElements(dataElement:dataElement) {
    store.commit("AddElements",dataElement)
}

export function toggleActive(payload:{id:string,isActive:boolean}) {
    store.commit("toggleActive",payload)
}

export function toggleLock(payload:{id:string}) {
    store.commit("toggleLock",toggleLock)
}

export function toggleVisible(payload:{id:string}) {
    store.commit("toggleVisible",payload)
}