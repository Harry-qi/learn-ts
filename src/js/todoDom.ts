import Template from "./template";
import { ITodoItem } from "./types";
import { findParentNode } from "./utils"
class TodoDom extends Template {
    private wrapper:HTMLLIElement;
    constructor(wrapper:HTMLLIElement){
        super()
        this.wrapper = wrapper
    }
    protected init(todoData:ITodoItem[]){
        let frag = document.createDocumentFragment()
        todoData.map(item=>{
            let divDom = document.createElement("div")
            divDom.className = 'todo-item'
            divDom.innerHTML = this.genderTemp(item)
            frag.appendChild(divDom)
        })
        this.wrapper.appendChild(frag)
    }
    public addItem(todoData:ITodoItem):void{
        let divDom = document.createElement("div")
        divDom.className = 'todo-item'
        divDom.innerHTML = this.genderTemp(todoData)
        this.wrapper.appendChild(divDom)
    }
    public removeItem(e:HTMLLIElement):void{
        let parentNode:HTMLLIElement= findParentNode(e,"todo-item")
        this.wrapper.removeChild(parentNode)
    }
    public changeItem(e:HTMLLIElement,changeVal: boolean):void{
        let parentNode:HTMLLIElement= findParentNode(e,"todo-item")
        let span:HTMLSpanElement= parentNode.getElementsByTagName("span")[0]
        span.className = changeVal ? 'complete' : ''
    }
}
export default TodoDom