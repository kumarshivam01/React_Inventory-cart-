import React, { useState } from "react";
import './Todo.css'
function Todo(props){
    // const abc = <>{props.price}</>
    // console.log(abc)
    const [num, setNum]=useState(1)
    const [total,setTotal] = useState(10)

    var sum = 0
    sum += props.price*num
    console.log(sum)
    const Inc=()=>{
        setNum(num+1)
        // console.log("add")
    }
    const Dec=()=>{
        if(num>1){
            setNum(num-1)
        }   
    }
    const totalPrice = ()=>{
        setTotal(total*5)
    }
    
    return(
        <>
            <div className="cart_div">
                <div className="product_details">
                    <div>
                    <img src={props.img} alt="image..."/>
                    </div>
                    <div>
                        <h4>{props.name}</h4>
                        <h3>Price:- {props.price}</h3>
                    </div>
                </div>
                <div className="quantity">
                    <button className="inc" onClick={Inc}>+</button>
                    <h3 className="piece">{num}</h3>
                    <button className="dec" onClick={Dec}>-</button>
                </div>
                <div className="total">
                    <h2>Rs {num*props.price}</h2>
                </div>
        </div>
        <div>
            {/* <h2>{num*props.price}</h2> */}
        </div>
        </>
        
        
    )
}
export default Todo