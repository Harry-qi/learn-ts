import { ITodoItem } from "./types";

class Template{
    protected genderTemp({ id,content, completed }:ITodoItem){
        return `<input type="checkbox" ${completed ? 'checked' :''} value=${id}>
        <span style=${completed ? 'text-decoration:line-through' : ''  }>${content}</span>  
        <button data-id=${id}>删除</button>  
        `
    }
}
export default Template