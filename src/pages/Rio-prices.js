function Rioprices(){

fetch('C:/training_react/training-app/src/pages')
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        console.log("Fetched data:", data);
        console.log("Name:", data.name);
        console.log("First item:", data.items[0]);
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });
}
export default Rioprices;