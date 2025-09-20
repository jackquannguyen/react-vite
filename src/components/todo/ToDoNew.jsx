import { useState } from "react"


const ToDoNew = (props) => { //do truyền function từ cha -> con nên phải có props để lấy func
  console.log("Check props ", props)
  const { addNewTodo } = props;
  //addNewTodo("clean the house");

  //useState hook (const [biến, hàm] = useState(type_biến))
  const [valueInput, setValueInput] = useState("");

  const handleClick = () => {
    console.log("Check valueInput", valueInput)
    addNewTodo(valueInput) //khi click "Add" thì gọi addNewTodo 
  }

  const handleOnChange = (name) => {
    setValueInput(name)
  }

  return (
    <div className='todo-new'>
      <input type="text" placeholder="Enter your task"
        onChange={(event) => handleOnChange(event.target.value)} //Khi ô input thay đổi (onChange), hãy nhận đối tượng sự kiện event, lấy event.target.value (tức giá trị đang gõ trong ô input) và gọi hàm handleOnChange với tham số là giá trị đó.
      ></input>
      <button
        style={{ cursor: "pointer" }}
        onClick={handleClick} //lưu ý: ko phải handleClick() vì như thế khi load trang nó đã alert, do dấu () nghĩa là thực thi ngay
      >Add</button>
      <div>
        My name is {valueInput}
      </div>
    </div>
  )
}

export default ToDoNew;