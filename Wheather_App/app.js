window.addEventListener('load', () => {
    let long;
    let lat;
    let tempDegree = document.querySelector('.temp-degree');
    let tempDesc = document.querySelector('.temp-desc');
    let locZone = document.querySelector('.loc-timezone');
    /* let icon = document.querySelector('.icon'); */

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position => {
            long = position.coords.longitude;
            lat = position.coords.latitude;

            const proxy = `https://cors-anywhere.herokuapp.com/`;
            const api = `http://api.weatherapi.com/v1/current.json?key=cb9fa57c16dc43fb9c4211632221403&q=${lat},${long}&aqi=no`;
            
            fetch(api)
            .then(Response => {
                return Response.json();
            })
            .then(data => {
                console.log(data);
                const {temp_c, condition} = data.current;
                const {region} = data.location;

                // DOM elements
                tempDegree.textContent = temp_c + " " + "c";
                tempDesc.textContent = condition.text;
                locZone.textContent = region;

            })
        });
    }
    
})
