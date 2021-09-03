let getsearchValue = () =>{
    let value = document.getElementById("search-fild");
    let get_value = value.value;
    console.log(get_value);
    get_url();
};

let get_url = () =>{
    fetch("https://samples.openweathermap.org/data/2.5/forecast?id=524901&appid=b1b15e88fa797225412429c1c50c122a1")
    .then(res => res.json())
    .then(data = console.log(data));
}
