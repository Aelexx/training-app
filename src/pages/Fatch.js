
import { useEffect } from "react";

function App() {

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(json => console.log(json))
    }, []);

    return (
        <div>
            Different ways to fetch Data
        </div>
    );
}

export default App;