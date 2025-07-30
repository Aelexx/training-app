function Rioprices(){

    const lat = 52.52; // Example latitude
    const lon = 13.405; // Example longitude
    const apiKey = 'eb9c24f68ed54d3b98d180818252907'; // Replace with your actual API key
    const apiUrl = `https://api.weatherapi.com/v1/current.json?key=eb9c24f68ed54d3b98d180818252907&q=Rio de janeiro&aqi=no`;
    const targetDiv = document.getElementById('div-fetch');
    fetch(apiUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        
        <div id="div-fetch">

        </div>
        //console.log('Weather data:', data);
        // Process and display the data on your site
      })
      .catch(error => {
        console.error('There has been a problem with your fetch operation:', error);
      });
}
export default Rioprices;