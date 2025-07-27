import { useEffect } from "react";

function Appli() {

    useEffect(() => {
        fetch('https://fake-json-api.mock.beeceptor.com/companies.typicode.com/todos')
            .then(response => response.json())
            .then(json => console.log(json))
    }, []);

}

export default Appli;