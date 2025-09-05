//() => { }
//const MyComponent = () => { } thì chữ đầu phải viết hoa mới biên dịch đc Component
//Component = html + css + js
//JSX -> để return nhiều html thì phải đóng fragment (<> </>), cách này hay hơn đóng <div></div> vì nó ko ảnh hưởng layout khi cần css

import './style.css'

const MyComponent = () => {
    // const quan = "hong quan";
    // const quan = 22;
    // const quan = true; //ko ra
    // const quan = undefined;
    // const quan = null; 
    // const quan = [1,2,3]; //out: 123, JSON.stringify(quan) = [1,2,3]
    const quan = {
        name: "hong quan",
        age: 22
    }

    return (
        <>
            <div>nguyen ha {JSON.stringify(quan)} </div>
            <div> {console.log("QUAN")} </div>
            <div className="child"
                style={{ borderRadius: "10px" }}
            >child</div>
        </>

    )
}

export default MyComponent;
//export default thì chỉ export đc 1 component, code mặc định cá file này chỉ export MyComponent thôi