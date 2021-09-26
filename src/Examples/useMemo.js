import React, { useState, useMemo } from "react";

function complexCompute(num) {
  console.log("complexCompute....");

  let i = 0;
  while (i < 10) i++;
  return num * 2;
}

export default function MemoExample() {
  const [number, setNumber] = useState(42);
  const [colored, setcolored] = useState(false);

  //! console.log("complexCompute...."); больше не вызывается, т.е. оптимизировали
  const compute = useMemo(() => {
    complexCompute(number);
  }, [number]);

  const styles = {
    color: colored ? "red" : "black",
    hr: {
      width: "500px",
      color: "red",
    },
  };

  return (
    <div>
      <h3>useMemo</h3>
      <h2 style={styles}>Вычисляемое свойство: {number} </h2>
      <button onClick={() => setNumber((prev) => prev + 1)}>ADD</button>
      <button onClick={() => setNumber((prev) => prev - 1)}>Remove</button>
      <button onClick={() => setcolored((prev) => !prev)}>Change</button>
      <hr style={styles.hr} />
    </div>
  );
}
