import  {v4} from 'uuid'

export function guid() {
    const uuid = v4();
    console.log("id",uuid)
    return uuid
}

export function toJs(target:any):any {
    return JSON.parse( JSON.stringify(target));
}

