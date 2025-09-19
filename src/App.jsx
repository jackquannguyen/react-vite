import './components/todo/todo.css';
import ToDoNew from './components/todo/ToDoNew';
import ToDoData from './components/todo/ToDoData';
import reactLogo from './assets/react.svg';

// 1) Data có thể được truyền từ Comp cha sang Comp con, và được lấy thông qua biến props (như App là comp cha, ToDoData là component con, props gồm 
// {name, age, data} đc truyền từ App sang ToDoData)
const App = () => {

  //B1: định nghĩa data tại cha
  const ten = "Quan Nguyen";
  const age = 22;
  const data = { country: "vietnam", city: "HCM" };

  const addNewTodo = (name) => {
    alert(`call me ${name}`) //lưu ý dùng dấu `` để truyền biến JS (${...}) vào, ko dùng "" đc
  }

  //{key:value}
  return (
    <>
      <div className="todo-container">
        <div className="todo-title">Todo List</div>
        <ToDoNew
          addNewTodo={addNewTodo} //Lưu ý truyền đúng tên thôi (kể cả hàm), ko truyền thêm dấu () -> vì nó nghĩa là thực thi
        />
        <ToDoData
          //B2: truyền data sang con
          name={ten}
          age={age}
          data={data}
        // phải khai báo key để lưu value truyền từ App, nếu ko sẽ ko gọi đc trong ToDoData.jsx
        />
        <div className='todo-image'><img src={reactLogo} className='logo' /></div>
      </div>

    </>
  )
}

export default App
