import { useState } from "react"

function UseState(){

    const [Age, setAge] = useState(19)

    const handleAge = () => {
        setAge(Age+1)
    }

    return(
        <div>
            <h3>My current age is {Age}</h3>
            <button onClick={handleAge}>Get Older</button>
        </div>
    )
}

export default UseState