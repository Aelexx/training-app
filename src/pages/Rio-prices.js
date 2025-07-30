function Rioprices(){

    const lat = 52.52; // Example latitude
    const lon = 13.405; // Example longitude
    const apiKey = 'eb9c24f68ed54d3b98d180818252907'; // Replace with your actual API key
    const apiUrl = `https://api.weatherapi.com/v1/current.json?key=eb9c24f68ed54d3b98d180818252907&q=Rio de janeiro&aqi=no`;
    const targetDiv = document.getElementById('rio-prices');

    fetch(apiUrl) // Example API endpoint
        .then(response => response.json())
        .then(data => {
          targetDiv.innerHTML = `
                
                <p>${data}</p>
            `;
        })

    
}
export default Rioprices;