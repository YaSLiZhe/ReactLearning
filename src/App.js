import { useEffect, useState } from "react";

export default function App() {
  const [advice, setAdvices] = useState("");
  const [count, setCounts] = useState(0);
  async function getAdvice() {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    setAdvices(data.slip.advice);
    setCounts((c) => c + 1);
  }
  useEffect(function () {
    getAdvice();
  }, []);

  return (
    <div>
      <h1>{advice}</h1>
      <button onClick={getAdvice}>Get advice</button>
      <Message count={count} />
    </div>
  );
}

function Message(props) {
  return (
    <p>
      You have read <strong>{props.count}</strong> pieces advice
    </p>
  );
}
