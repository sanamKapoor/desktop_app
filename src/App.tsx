import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function App() {

  const [counter, setCounter] = useState(0);

  return (
    <div className="p-2">
      <h1 className="text-3xl font-bold text-blue-800">Hello! Blue Pigeon 😉</h1>
      <Button className="mt-2" onClick={() => setCounter((prev) => prev + 1)}>
        Counter : {counter}
      </Button>
    </div>
  );
}
