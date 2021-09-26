import React, { useState } from "react";

function computedInitialState() {
  console.log("Some calculations...");
  return Math.trunc(Math.random() * 2);
}

export default function StateExample() {
  const [counter, setCounter] = useState(0);
  const [compute, setCompute] = useState(() => {
    return computedInitialState();
    //!будет вычисляться 1 раз и не будет постоянного рендеринга
  });

  function increment() {
    // setCounter(counter + 1);

    //!можно основывать counter на предыдущем состоянии
    //* считается best practice
    setCounter((prev) => {
      return prev + 1;
    });

    //!либо краткая запись
    //* setCounter(prev=> prev+1)
  }

  function decrement() {
    setCounter(counter - 1);
  }

  //! state с объектами
  const [exampleState, setExampleState] = useState({
    title: "counter",
    date: Date.now(),
  });

  {
    /* теперь меняется корректно */
  }

  function correctChange() {
    return setExampleState((prev) => {
      return {
        ...prev,
        title: "name changed correcttly",
      };
    });
  }

  const styles = {
    hr: {
      width: "500px",
    },
  };

  return (
    <div>
      <h3>useState</h3>
      <h2>Counter: {counter}</h2>
      <button onClick={increment}>ADD</button>
      <button onClick={decrement}>Remove</button>

      {/* всё полностью меняется */}
      {/* <button onClick={() => setExampleState({ title: "new name" })}>
        change name
      </button> */}

      {/* теперь меняется корректно */}

      <button onClick={correctChange}>change name</button>
      <pre> {JSON.stringify(exampleState, null, 2)} </pre>
      <hr style={styles.hr} />
    </div>
  );
}
