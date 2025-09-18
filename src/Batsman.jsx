import { useState } from "react"

export default function Batsman() {

    const [runs, setRuns] = useState(0);

    const handleRuns = (run) => {
        const newRuns = runs + run;
        setRuns(newRuns);
    }

    const style = {
        border: "2px solid red",
        padding: "20px"
    }
    return (
        <div style={style}>
            <h3>Batsman:Anik</h3>
            <h1>Score:{runs}</h1>

            <button onClick={() => handleRuns(1)}>Single</button>
            <button onClick={() => handleRuns(2)}>Double</button>
            <button onClick={() => handleRuns(4)}>Four</button>
            <button onClick={() => handleRuns(6)}>Six</button>

        </div>



    )
}