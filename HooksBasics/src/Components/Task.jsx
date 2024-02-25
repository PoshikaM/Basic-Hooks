import { useState } from "react";

function Task(){
  const [like, setLike] = useState(0)
  const [isVisible, setIsVisible] = useState(false);

  const handlelike = () => {
    setLike(like+1)
  }

  const handleToggle = () => {
    setIsVisible(!isVisible);
  }

  return(
    <div>
      {isVisible && (
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae iste fuga hic consequatur architecto, nobis autem velit ipsam, cumque laborum nemo nihil necessitatibus beatae, fugiat consectetur assumenda pariatur tempore harum.</p>
      )}
      <button onClick={handleToggle}>Context</button>
      <p>{like}</p>
      <button onClick={handlelike}>Like</button>
    </div>
  )
}

export default Task;