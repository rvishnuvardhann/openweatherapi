function readData(){
    
    let div1=document.getElementById("usingfetch")
    
    let response=fetch("https://api.openweathermap.org/data/2.5/weather?q=hyderabad&appid=376ba0c8fde8bf20caca1b6b1cafd35b&units=metric")
    
    response.then((res)=>{
        
        res.json().then((data)=>{
            
           let {main:{temp,temp_min,temp_max}}=data;
           //console.log(temp,temp_min,temp_max);
            div1.innerHTML+="TEMP = "+temp+"<br/>"+"MIN_TEMP = "+temp_min+"<br/>"+"MAX_TEMP = "+temp_max+"<br/>"
        })
        })
}
readData();