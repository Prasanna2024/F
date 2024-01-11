import React, { useEffect, useState } from 'react'
type InnerFunction = {
    input:Number
}
function List({input}:InnerFunction) {
    const [items, setItems] = useState([])
    useEffect(() => {
    console.log("at list!!",input)
    }, [input])
    
  return (
    <div>

    </div>
  )
}

export default List