import TodoDom from "./todoDom";
import { ITodoItem } from "./types"
class TodoEvent extends TodoDom{
    private todoData:ITodoItem[]
    constructor(todoData:ITodoItem[],wrapper:HTMLLIElement){
        super(wrapper)
        this.todoData = todoData
        this.init(this.todoData)
    }
    public addData(todo:ITodoItem):undefined | number{
        let _todo = this.todoData.find(item=> {
            return item.content === todo.content
        }) // 判断是否添加过相同的内容
        if(!_todo){
            this.todoData.push(todo)
            this.addItem(todo)
            return
        }
        return 1001
    }
    public removeData(id:number,target:HTMLLIElement):void{
        this.todoData = this.todoData.filter(item=> item.id!==id)
        this.removeItem(target)
    }
    public changeCompleted(id:number,e:HTMLLIElement):void{
        this.todoData = this.todoData.map(item=>{
            if(item.id === id){
                item.completed = !item.completed
                this.changeItem(e,item.completed)
            }
            return item
        })
    }
}
export default TodoEvent