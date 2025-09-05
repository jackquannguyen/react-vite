//() => { }
//const MyComponent = () => { } thì chữ đầu phải viết hoa mới biên dịch đc Component
//Component = html + css + js
//JSX -> để return nhiều html thì phải đóng fragment (<> </>), cách này hay hơn đóng <div></div> vì nó ko ảnh hưởng layout khi cần css

import './style.css'

const MyComponent = () => {
    return (
        <>
            <div>nguyen ha hong quan</div>
            <div className="child"
                style={{ borderRadius: "10px" }}
            >child</div>
        </>

    )
}

export default MyComponent;
//export default thì chỉ export đc 1 component, code mặc định cá file này chỉ export MyComponent thôi