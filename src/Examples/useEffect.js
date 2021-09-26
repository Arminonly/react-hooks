import React, { useState, useEffect } from "react";

export default function UseEffectExample() {
  const [type, setType] = useState("users");
  const [data, setData] = useState([]);
    const [position, setPosition] = useState({
      x: 0,
      y: 0,
    });

  //   console.log('Component render');

  //   useEffect(()=>{
  //       console.log('effect render');

  //   })

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then((response) => response.json())
      .then((json) => setData(json));
  }, [type]);

    useEffect(() => {
      window.addEventListener("mousemove", (event) => {
        setPosition({
          x: event.clientX,
          y: event.clientY,
        });
      });
    }, []);


  const styles = {
    hr: {
      width: "500px",
    },
  };

  return (
    <div>
      <h3>Ресурс: {type} </h3>

      <button onClick={() => setType("users")}>Users</button>
      <button onClick={() => setType("todos")}>TODOS</button>
      <button onClick={() => setType("posts")}>Posts</button>
      <button onClick={() => setType("albums")}>Albums</button>
      <button onClick={() => setType("photos")}>Photos</button>
      <button onClick={() => setType("comments")}>Comments</button>
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
      <pre>{JSON.stringify(position, null, 2)}</pre>
      <hr style={styles.hr} />
    </div>
  );
}
