
const ToDoNew = (props) => { //do truyền function từ cha -> con nên phải có props để lấy func
  console.log("Check props ", props)
  const { addNewTodo } = props;
  addNewTodo("clean the house");

  return (
    <div className='todo-new'>
      <input type="text" placeholder="Enter your task"></input>
      <button>Add</button>
    </div>
  )
}

export default ToDoNew;