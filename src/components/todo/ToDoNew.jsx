
const ToDoNew = (props) => { //do truyền function từ cha -> con nên phải có props để lấy func
  console.log("Check props ", props)
  const { addNewTodo } = props;
  //addNewTodo("clean the house");

  const handleClick = () => {
    alert("clicked")
  }

  const handleOnChange = (value) => {
    console.log("handleOnChange", value)
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
    </div>
  )
}

export default ToDoNew;