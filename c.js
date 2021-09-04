let cityName = () =>{
    let value = document.getElementById("search-fild");
    let get_value = value.value;
    value.value = "";
    return get_value;
};
let api_key = `100a6b05396087284ca9a3f964e66a55`
let get_url = () =>{
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName()}&appid=${api_key}&units=metric`)
    .then(res => res.json())
    .then(data => displayContant(data));
}
let getid =(id,name)=>{
    let innercity = document.getElementById(id);
    innercity.innerText = name;

}

let displayContant = (temps) =>{
    let cityname = temps.name;
    if (cityname === undefined ){
        getid("city","No City Found")
        getid("temperature",00);
        getid("info","None");
    }
    else{
        getid("city",cityname);
        getid("temperature",temps.main.temp);
        getid("info",temps.weather[0].main);
        let url = `http://openweathermap.org/img/wn/${temps.weather[0].icon}@2x.png`;
        let icon = document.getElementById("img");
        icon.setAttribute('src',url);

    }
}