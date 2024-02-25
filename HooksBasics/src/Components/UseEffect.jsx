import { useEffect, useState } from "react";

function UseEffet(){

    const [Age, setAge] = useState(19)
    const [Siblings, setSiblings] = useState(3)

    useEffect(() => {
        alert(`Something changed ${Age}`)
    },[Age])

    return(
        <div>
            <h3>My current age is {Age}</h3>
            <p>My Siblings {Siblings}</p>

            <button onClick={() => setAge(Age => Age+1)}>Get Older</button>
            <button onClick={() => setSiblings(Siblings => Siblings+1)}>Get more Sib</button>
        </div>
    )
}

export default UseEffet;