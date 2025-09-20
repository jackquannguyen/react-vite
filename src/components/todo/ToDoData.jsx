// 1) props là 1 Object {}, do đó có thể lấy props bằng khai báo: 
// const {name, age, data} = props, ý là const name = props.name, const age = props.age, const data = props.data
// 2) phải truyền props vào Funktionskopf thì mới gọi đc trong hàm
// 3) còn nhiều cách truyền khác như {props.name} (ko cần k.báo const {name, age, data} = props) hay const ToDoData = ({name}) => {...}, tuy nhiên
// beginner chưa nên học 

//props là 1 Object {} có
// {
//   name: "Quan Nguyen",
//   age: 22,
//   data: {...}
// }

const ToDoData = (props) => {
  const { name, age, data } = props; //cú pháp JS -> mục đích để ko cần phải gọi props.name... mới in ra đc mà chỉ cần gọi name. Nhưng nếu ko có cũng ko sao 
  console.log("Check props: ", props);

  return (
    <div className='todo-data'>
      <div>Hello {name}</div>
      <div>Learning React </div>
      <div>Watch youtube</div>
      <div>
        {JSON.stringify(props.todoList)}
      </div>
      {/* Lưu ý: JS ko in ra đc {array}, tức ko thể truyền <div>{todoList}</div> vì sẽ bug 
      Phải truyền {JSON.stringify(array)} thì mới in đc*/}
    </div>
  )
}

export default ToDoData; 