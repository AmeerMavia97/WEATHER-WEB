const city = document.querySelector("#user-input");
const form = document.querySelector("form")

form.addEventListener("submit", async (event) => {
    event.preventDefault();
    // console.log(city.value);
    try{
        const res = await axios.get(`https://api.weatherapi.com/v1/current.json?key=b4db485d7c4c485fa6d84351232508&q=${city.value}`)
        console.log(res.data);
    }catch{
        weather.innerHTML = `
        //         <div>
        //         Data Not Found!
        //         </div>
        //         `;
    }finally{
        city.value = "";
    }
})
