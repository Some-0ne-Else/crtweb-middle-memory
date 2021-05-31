import React from 'react';

function Counter() {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    const id = setInterval(() => {
      setCount((c) => c + 1); // ✅ This doesn't depend on `count` variable outside
    }, 1000);
    return () => clearInterval(id);
  }, []); // ✅ Our effect doesn't use any variables in the component scope

  return <h1>{count}</h1>;
}

export default Counter;
