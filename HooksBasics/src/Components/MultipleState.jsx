import { useState } from "react";

function MultipleState(){

    const [Age, setAge] = useState(19)
    const [Siblings, setSiblings] = useState(1)

    const handleAge = () => {
        setAge(Age+1)
    }

    const handleSiblings = () => {
        setSiblings(Siblings+1)
    }

    return(
        <div>
            <h3>My current agr is {Age}</h3>
            <p>My siblings {Siblings}</p>

            <button onClick={handleAge}>Get Older</button>
            <button onClick={handleSiblings}>Get more Sib</button>
        </div>
    )
}

export default MultipleState;