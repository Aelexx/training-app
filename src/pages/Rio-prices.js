function Rioprices(){

    const lat = 52.52; // Example latitude
    const lon = 13.405; // Example longitude
    const apiKey = 'eb9c24f68ed54d3b98d180818252907'; // Replace with your actual API key
    const apiUrl = `https://api.weatherapi.com/v1/current.json?key=eb9c24f68ed54d3b98d180818252907&q=Rio de janeiro&aqi=no`;
    const targetDiv = document.getElementById('my-data-display');

    fetch(apiUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        // Assuming 'data' is an array of objects
        data.forEach(item => {
            const p = document.createElement('p');
            p.textContent = `Name: ${item.name}, Value: ${item.value}`;
            targetDiv.appendChild(p);
        });
    })
    
}
export default Rioprices;