export function findParentNode(target:HTMLLIElement,className:string): HTMLLIElement{
    while(target=target.parentNode as HTMLLIElement){
        if(target.className===className){
            return target
        }
    }
}