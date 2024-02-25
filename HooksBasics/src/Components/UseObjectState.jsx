import { useState } from "react";

function UseObject(){
    
    const [count, setCount] = useState({
        age : 19,
        siblings : 3
    })

    const handleCount = (value) => {
        setCount({
            ...count, [value] : count[value]+1
        })
    }

    const {age, siblings} = count

    return(
        <div>
            <h3>My current age is {age}</h3>
            <p>My siblings {siblings}</p>

            <button onClick={() => {handleCount("age")}}>Get Older</button>
            <button onClick={() => {handleCount("siblings")}}>Get more Sib</button>
        </div>
    )
}

export default UseObject;