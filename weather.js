function readData(input){
    city=input.value;
    
    let data=document.getElementById("loc")
    
    let response=fetch("https://api.openweathermap.org/data/2.5/forecast?q="+city+"&appid=376ba0c8fde8bf20caca1b6b1cafd35b&units=metric")
    let weather=fetch("https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid=376ba0c8fde8bf20caca1b6b1cafd35b&units=metric")
    weather.then((res1)=>{
        res1.json().then((dataa)=>{
            min_temp=dataa.main.temp_min
            max_temp=dataa.main.temp_max
            data.innerHTML="Country: "+dataa.sys.country+"<br>Minimum Temperature:"+min_temp+"<br>Maximum Temperature:"+max_temp+"<br>";
            

        })
    })
    response.then((res)=>{
        
        res.json().then((data)=>{
        let weatherarr=data.list;
        var temp=[];
        var dates=[];
        for(let i=0;i<weatherarr.length;i=i+8){
            temp.push(weatherarr[i].main.temp);
            dates.push(weatherarr[i].dt_txt.split(" ")[0]);
        }
        plot(dates,temp)
        })
        })

}
