import { useState } from "react";

function StateFromFunc(){

    const [Age, setAge] = useState(19)
    const [Siblings, setSiblings] = useState(3)

    return(
        <div>
            <h3>My current age is {Age}</h3>
            <p>My siblings {Siblings}</p>

            <button onClick={() => setAge(Age => Age+1)}>Get Older</button>
            <button onClick={() => setSiblings(Siblings => Siblings+1)}>My siblings</button>       
        </div>
    )
}

export default StateFromFunc;