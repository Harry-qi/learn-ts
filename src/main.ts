import './style/style.scss'
import TodoEvent from './js/todoEvent';
import { ITodoItem } from './js/types';
(():void=>{
  // 获取DOM
  let btn:HTMLButtonElement = document.querySelector("#confirmBtn")!
  let input:HTMLInputElement =document.querySelector("#input")!
  let listDom:HTMLLIElement= document.querySelector("#todo-list")!

  function init():void{
    btn.addEventListener("click", handleConfirm, false)
    listDom.addEventListener("click",handleCompleted,false)
  }
  const todoData:ITodoItem[] = [
    {
      id:1,
      content:"测试",
      completed:false
    }
  ]
  let todoEvent:TodoEvent = new TodoEvent(todoData,listDom)
  function handleConfirm():void{
    let val = input.value
    let res = todoEvent.addData({
      id: todoData.length,
      content: val,
      completed:false
    })
    if(res){
      alert("已存在")
    }
    input.value = ''
  }
  function handleCompleted(e:MouseEvent):void{
    let target = e.target as HTMLLIElement
    if(target.tagName==='INPUT'){
      let target = e.target as HTMLLIElement
      let val = Number(target.value)
      todoEvent.changeCompleted(val,target)
    }
    if(target.tagName==='BUTTON'){
      let id = Number(target.dataset.id) 
      todoEvent.removeData(id,target)
    }
  }

  init()
})()
