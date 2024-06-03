'use strict';function openTab(a,b){var d=document.getElementsByClassName("tabcontent");for(a=0;a<d.length;a++)d[a].style.display="none";document.getElementById(b).style.display="block";document.getElementById(b).scrollIntoView({behavior:"smooth",block:"center"})}var city="",formattedHours="",lastFetchedData="";document.getElementById("myInput").addEventListener("keypress",function(a){"Enter"===a.key&&(a.preventDefault(),city=a.target.value,console.log(city+" is the city name."),getWeather(city))});
async function getWeather(a){a=`https://wttr.in/${a}?format=j1`;console.log("API URL: "+a);try{const b=await (await fetch(a)).json();lastFetchedData=b;displayWeatherData(b)}catch(b){console.error("Error fetching data:",b),lastFetchedData?(console.log("Displaying last fetched data."),displayWeatherData(lastFetchedData)):console.log("No last fetched data available.")}}
document.addEventListener("DOMContentLoaded",function(){function a(c){const f=document.createElement("div"),g=document.createElement("button");g.textContent=c;g.addEventListener("click",()=>{getWeather(c)});const h=document.createElement("button");h.textContent="Remove";h.addEventListener("click",()=>{const k=e.indexOf(c);-1!==k&&(e.splice(k,1),localStorage.setItem("favoriteLocations",JSON.stringify(e)),d.removeChild(f))});f.appendChild(g);f.appendChild(h);d.appendChild(f)}const b=document.getElementById("favoriteButton");
document.getElementById("favoriteDetails");const d=document.getElementById("favoriteList"),e=JSON.parse(localStorage.getItem("favoriteLocations"))||["New York","London","Tokyo"];e.forEach(c=>{a(c)});b.addEventListener("click",function(){const c=city;e.includes(c)||(e.push(c),a(c),localStorage.setItem("favoriteLocations",JSON.stringify(e)))})});
function displayWeatherData(a){let b=a.nearest_area[0].areaName[0].value,d=a.nearest_area[0].region[0].value,e=a.current_condition[0].temp_C,c=a.weather[0].maxtempC,f=a.weather[0].mintempC,g=a.current_condition[0].humidity,h=a.current_condition[0].FeelsLikeC,k=a.current_condition[0].weatherDesc[0].value,l=a.current_condition[0].windspeedKmph,m=a.current_condition[0].winddir16Point,n=a.current_condition[0].uvIndex,p=a.weather[1].maxtempC,q=a.weather[1].mintempC,r=a.weather[2].maxtempC,t=a.weather[2].mintempC,
u=a.weather[0].date,v=a.weather[0].hourly[0].tempC,w=a.weather[0].hourly[0].winddir16Point,x=a.weather[0].hourly[0].windspeedKmph,y=a.weather[0].hourly[0].weatherDesc[0].value,z=a.weather[0].hourly[1].tempC,A=a.weather[0].hourly[1].winddir16Point,B=a.weather[0].hourly[1].windspeedKmph,C=a.weather[0].hourly[1].weatherDesc[0].value,D=a.weather[0].hourly[2].tempC,E=a.weather[0].hourly[2].winddir16Point,F=a.weather[0].hourly[2].windspeedKmph,G=a.weather[0].hourly[2].weatherDesc[0].value,H=a.weather[0].hourly[3].tempC,
I=a.weather[0].hourly[3].winddir16Point,J=a.weather[0].hourly[3].windspeedKmph,K=a.weather[0].hourly[3].weatherDesc[0].value,L=a.weather[0].hourly[4].tempC,M=a.weather[0].hourly[4].winddir16Point,N=a.weather[0].hourly[4].windspeedKmph,O=a.weather[0].hourly[4].weatherDesc[0].value,P=a.weather[0].hourly[5].tempC,Q=a.weather[0].hourly[5].winddir16Point,R=a.weather[0].hourly[5].windspeedKmph,S=a.weather[0].hourly[5].weatherDesc[0].value,T=a.weather[0].hourly[6].tempC,U=a.weather[0].hourly[6].winddir16Point,
V=a.weather[0].hourly[6].windspeedKmph,W=a.weather[0].hourly[6].weatherDesc[0].value,X=a.weather[0].hourly[7].tempC,Y=a.weather[0].hourly[7].winddir16Point,Z=a.weather[0].hourly[7].windspeedKmph,aa=a.weather[0].hourly[7].weatherDesc[0].value,ba=a.weather[1].date,ca=a.weather[1].hourly[0].tempC,da=a.weather[1].hourly[0].winddir16Point,ea=a.weather[1].hourly[0].windspeedKmph,fa=a.weather[1].hourly[0].weatherDesc[0].value,ha=a.weather[1].hourly[1].tempC,ia=a.weather[1].hourly[1].winddir16Point,ja=a.weather[1].hourly[1].windspeedKmph,
ka=a.weather[1].hourly[1].weatherDesc[0].value,la=a.weather[1].hourly[2].tempC,ma=a.weather[1].hourly[2].winddir16Point,na=a.weather[1].hourly[2].windspeedKmph,oa=a.weather[1].hourly[2].weatherDesc[0].value,pa=a.weather[1].hourly[3].tempC,qa=a.weather[1].hourly[3].winddir16Point,ra=a.weather[1].hourly[3].windspeedKmph,sa=a.weather[1].hourly[3].weatherDesc[0].value,ta=a.weather[1].hourly[4].tempC,ua=a.weather[1].hourly[4].winddir16Point,va=a.weather[1].hourly[4].windspeedKmph,wa=a.weather[1].hourly[4].weatherDesc[0].value,
xa=a.weather[1].hourly[5].tempC,ya=a.weather[1].hourly[5].winddir16Point,za=a.weather[1].hourly[5].windspeedKmph,Aa=a.weather[1].hourly[5].weatherDesc[0].value,Ba=a.weather[1].hourly[6].tempC,Ca=a.weather[1].hourly[6].winddir16Point,Da=a.weather[1].hourly[6].windspeedKmph,Ea=a.weather[1].hourly[6].weatherDesc[0].value,Fa=a.weather[1].hourly[7].tempC,Ga=a.weather[1].hourly[7].winddir16Point,Ha=a.weather[1].hourly[7].windspeedKmph,Ia=a.weather[1].hourly[7].weatherDesc[0].value,Ja=a.weather[2].date,
Ka=a.weather[2].hourly[0].tempC,La=a.weather[2].hourly[0].winddir16Point,Ma=a.weather[2].hourly[0].windspeedKmph,Na=a.weather[2].hourly[0].weatherDesc[0].value,Oa=a.weather[2].hourly[1].tempC,Pa=a.weather[2].hourly[1].winddir16Point,Qa=a.weather[2].hourly[1].windspeedKmph,Ra=a.weather[2].hourly[1].weatherDesc[0].value,Sa=a.weather[2].hourly[2].tempC,Ta=a.weather[2].hourly[2].winddir16Point,Ua=a.weather[2].hourly[2].windspeedKmph,Va=a.weather[2].hourly[2].weatherDesc[0].value,Wa=a.weather[2].hourly[3].tempC,
Xa=a.weather[2].hourly[3].winddir16Point,Ya=a.weather[2].hourly[3].windspeedKmph,Za=a.weather[2].hourly[3].weatherDesc[0].value,$a=a.weather[2].hourly[4].tempC,ab=a.weather[2].hourly[4].winddir16Point,bb=a.weather[2].hourly[4].windspeedKmph,cb=a.weather[2].hourly[4].weatherDesc[0].value,db=a.weather[2].hourly[5].tempC,eb=a.weather[2].hourly[5].winddir16Point,fb=a.weather[2].hourly[5].windspeedKmph,gb=a.weather[2].hourly[5].weatherDesc[0].value,hb=a.weather[2].hourly[6].tempC,ib=a.weather[2].hourly[6].winddir16Point,
jb=a.weather[2].hourly[6].windspeedKmph,kb=a.weather[2].hourly[6].weatherDesc[0].value,lb=a.weather[2].hourly[7].tempC,mb=a.weather[2].hourly[7].winddir16Point,nb=a.weather[2].hourly[7].windspeedKmph,ob=a.weather[2].hourly[7].weatherDesc[0].value,pb=a.weather[0].hourly[0].FeelsLikeC,qb=a.weather[0].hourly[1].FeelsLikeC,rb=a.weather[0].hourly[2].FeelsLikeC,sb=a.weather[0].hourly[3].FeelsLikeC,tb=a.weather[0].hourly[4].FeelsLikeC,ub=a.weather[0].hourly[5].FeelsLikeC,vb=a.weather[0].hourly[6].FeelsLikeC,
wb=a.weather[0].hourly[7].FeelsLikeC,xb=a.weather[1].hourly[0].FeelsLikeC,yb=a.weather[1].hourly[1].FeelsLikeC,zb=a.weather[1].hourly[2].FeelsLikeC,Ab=a.weather[1].hourly[3].FeelsLikeC,Bb=a.weather[1].hourly[4].FeelsLikeC,Cb=a.weather[1].hourly[5].FeelsLikeC,Db=a.weather[1].hourly[6].FeelsLikeC,Eb=a.weather[1].hourly[7].FeelsLikeC,Fb=a.weather[2].hourly[0].FeelsLikeC,Gb=a.weather[2].hourly[1].FeelsLikeC,Hb=a.weather[2].hourly[2].FeelsLikeC,Ib=a.weather[2].hourly[3].FeelsLikeC,Jb=a.weather[2].hourly[4].FeelsLikeC,
Kb=a.weather[2].hourly[5].FeelsLikeC,Lb=a.weather[2].hourly[6].FeelsLikeC,Mb=a.weather[2].hourly[7].FeelsLikeC;document.getElementById("loc").innerHTML=b+", "+d+"<br/>";document.getElementById("desc").innerHTML=k;document.getElementById("temp").innerHTML=e+"&deg;C";document.getElementById("minmax").innerHTML=c+"&deg;C<hr/>"+f+"&deg;C";document.getElementById("detailsnow").innerHTML="Feels like: "+h+"&degC<br/>Ultraviolet Index: "+n+"<br/>Humidity: "+g+"%<br/>Wind: "+l+"kmph from "+m;document.getElementById("tomorrow").innerHTML=
"Tomorrow<hr/>Max: "+p+"&deg;C<hr/>Min: "+q;document.getElementById("overmorrow").innerHTML="Overmorrow<hr/>Max: "+r+"&deg;C<hr/>Min: "+t;document.getElementById("today").innerHTML=`
        Today in ${b}, ${d} <br/>(${u}) <br/>
        <table>
          <tr>
            <th style="border: 1px solid white;">Time</th>
            <th style="border: 1px solid white;">Temperature</th>
            <th style="border: 1px solid white;">Wind (km/h)</th>
            <th style="border: 1px solid white;">Condition</th>
          </tr>
          <tr>
            <td style="border: 1px solid white;">0 AM</td>
            <td style="border: 1px solid white;">${v}(<span style="color: #F0F0F0">${pb}</span>)\u00b0C</td>
            <td style="border: 1px solid white;">${x} km/h, ${w}</td>
            <td style="border: 1px solid white;">${y}</td>
          </tr>
          <tr>
            <td style="border: 1px solid white;">3 AM</td>
            <td style="border: 1px solid white;">${z}(<span style="color: #F0F0F0">${qb}</span>)\u00b0C</td>
            <td style="border: 1px solid white;">${B} km/h, ${A}</td>
            <td style="border: 1px solid white;">${C}</td>
          </tr>
          <tr>
            <td style="border: 1px solid white;">6 AM</td>
            <td style="border: 1px solid white;">${D}(<span style="color: #F0F0F0">${rb}</span>)\u00b0C</td>
            <td style="border: 1px solid white;">${F} km/h, ${E}</td>
            <td style="border: 1px solid white;">${G}</td>
          </tr>
          <tr>
            <td style="border: 1px solid white;">9 AM</td>
            <td style="border: 1px solid white;">${H}(<span style="color: #F0F0F0">${sb}</span>)\u00b0C</td>
            <td style="border: 1px solid white;">${J} km/h, ${I}</td>
            <td style="border: 1px solid white;">${K}</td>
          </tr>
          <tr>
            <td style="border: 1px solid white;">12 PM</td>
            <td style="border: 1px solid white;">${L}(<span style="color: #F0F0F0">${tb}</span>)\u00b0C</td>
            <td style="border: 1px solid white;">${N} km/h, ${M}</td>
            <td style="border: 1px solid white;">${O}</td>
          </tr>
          <tr>
            <td style="border: 1px solid white;">3 PM</td>
            <td style="border: 1px solid white;">${P}(<span style="color: #F0F0F0">${ub}</span>)\u00b0C</td>
            <td style="border: 1px solid white;">${R} km/h, ${Q}</td>
            <td style="border: 1px solid white;">${S}</td>
          </tr>
          <tr>
            <td style="border: 1px solid white;">6 PM</td>
            <td style="border: 1px solid white;">${T}(<span style="color: #F0F0F0">${vb}</span>)\u00b0C</td>
            <td style="border: 1px solid white;">${V} km/h, ${U}</td>
            <td style="border: 1px solid white;">${W}</td>
          </tr>
          <tr>
            <td style="border: 1px solid white;">9 PM</td>
            <td style="border: 1px solid white;">${X}(<span style="color: #F0F0F0">${wb}</span>)\u00b0C</td>
            <td style="border: 1px solid white;">${Z} km/h, ${Y}</td>
            <td style="border: 1px solid white;">${aa}</td>
          </tr>
        </table>
        <br/>
        `;document.getElementById("nextday").innerHTML=`
            Tommorow in ${b}, ${d} <br/> (${ba}) <br/>
        <table>
          <tr>
            <th style="border: 1px solid white;">Time</th>
            <th style="border: 1px solid white;">Temperature</th>
            <th style="border: 1px solid white;">Wind (km/h)</th>
            <th style="border: 1px solid white;">Condition</th>
          </tr>
          <tr>
            <td style="border: 1px solid white;">0 AM</td>
            <td style="border: 1px solid white;">${ca}(<span style="color: #F0F0F0">${xb}</span>)\u00b0C</td>
            <td style="border: 1px solid white;">${ea} km/h, ${da}</td>
            <td style="border: 1px solid white;">${fa}</td>
          </tr>
          <tr>
            <td style="border: 1px solid white;">3 AM</td>
            <td style="border: 1px solid white;">${ha}(<span style="color: #F0F0F0">${yb}</span>)\u00b0C</td>
            <td style="border: 1px solid white;">${ja} km/h, ${ia}</td>
            <td style="border: 1px solid white;">${ka}</td>
          </tr>
          <tr>
            <td style="border: 1px solid white;">6 AM</td>
            <td style="border: 1px solid white;">${la}(<span style="color: #F0F0F0">${zb}</span>)\u00b0C</td>
            <td style="border: 1px solid white;">${na} km/h, ${ma}</td>
            <td style="border: 1px solid white;">${oa}</td>
          </tr>
          <tr>
            <td style="border: 1px solid white;">9 AM</td>
            <td style="border: 1px solid white;">${pa}(<span style="color: #F0F0F0">${Ab}</span>)\u00b0C</td>
            <td style="border: 1px solid white;">${ra} km/h, ${qa}</td>
            <td style="border: 1px solid white;">${sa}</td>
          </tr>
          <tr>
            <td style="border: 1px solid white;">12 PM</td>
            <td style="border: 1px solid white;">${ta}(<span style="color: #F0F0F0">${Bb}</span>)\u00b0C</td>
            <td style="border: 1px solid white;">${va} km/h, ${ua}</td>
            <td style="border: 1px solid white;">${wa}</td>
          </tr>
          <tr>
            <td style="border: 1px solid white;">3 PM</td>
            <td style="border: 1px solid white;">${xa}(<span style="color: #F0F0F0">${Cb}</span>)\u00b0C</td>
            <td style="border: 1px solid white;">${za} km/h, ${ya}</td>
            <td style="border: 1px solid white;">${Aa}</td>
          </tr>
          <tr>
            <td style="border: 1px solid white;">6 PM</td>
            <td style="border: 1px solid white;">${Ba}(<span style="color: #F0F0F0">${Db}</span>)\u00b0C</td>
            <td style="border: 1px solid white;">${Da} km/h, ${Ca}</td>
            <td style="border: 1px solid white;">${Ea}</td>
          </tr>
          <tr>
            <td style="border: 1px solid white;">9 PM</td>
            <td style="border: 1px solid white;">${Fa}(<span style="color: #F0F0F0">${Eb}</span>)\u00b0C</td>
            <td style="border: 1px solid white;">${Ha} km/h, ${Ga}</td>
            <td style="border: 1px solid white;">${Ia}</td>
          </tr>
        </table>
        <br/>
        `;document.getElementById("nextnextday").innerHTML=`
        Day after tommorow in ${b}, ${d} <br/> (${Ja})<br/>
        <table>
          <tr>
            <th style="border: 1px solid white;">Time</th>
            <th style="border: 1px solid white;">Temperature</th>
            <th style="border: 1px solid white;">Wind (km/h)</th>
            <th style="border: 1px solid white;">Condition</th>
          </tr>
          <tr>
            <td style="border: 1px solid white;">0 AM</td>
            <td style="border: 1px solid white;">${Ka}(<span style="color: #F0F0F0">${Fb}</span>)\u00b0C</td>
            <td style="border: 1px solid white;">${Ma} km/h, ${La}</td>
            <td style="border: 1px solid white;">${Na}</td>
          </tr>
          <tr>
            <td style="border: 1px solid white;">3 AM</td>
            <td style="border: 1px solid white;">${Oa}(<span style="color: #F0F0F0">${Gb}</span>)\u00b0C</td>
            <td style="border: 1px solid white;">${Qa} km/h, ${Pa}</td>
            <td style="border: 1px solid white;">${Ra}</td>
          </tr>
          <tr>
            <td style="border: 1px solid white;">6 AM</td>
            <td style="border: 1px solid white;">${Sa}(<span style="color: #F0F0F0">${Hb}</span>)\u00b0C</td>
            <td style="border: 1px solid white;">${Ua} km/h, ${Ta}</td>
            <td style="border: 1px solid white;">${Va}</td>
          </tr>
          <tr>
            <td style="border: 1px solid white;">9 AM</td>
            <td style="border: 1px solid white;">${Wa}(<span style="color: #F0F0F0">${Ib}</span>)\u00b0C</td>
            <td style="border: 1px solid white;">${Ya} km/h, ${Xa}</td>
            <td style="border: 1px solid white;">${Za}</td>
          </tr>
          <tr>
            <td style="border: 1px solid white;">12 PM</td>
            <td style="border: 1px solid white;">${$a}(<span style="color: #F0F0F0">${Jb}</span>)\u00b0C</td>
            <td style="border: 1px solid white;">${bb} km/h, ${ab}</td>
            <td style="border: 1px solid white;">${cb}</td>
          </tr>
          <tr>
            <td style="border: 1px solid white;">3 PM</td>
            <td style="border: 1px solid white;">${db}(<span style="color: #F0F0F0">${Kb}</span>)\u00b0C</td>
            <td style="border: 1px solid white;">${fb} km/h, ${eb}</td>
            <td style="border: 1px solid white;">${gb}</td>
          </tr>
          <tr>
            <td style="border: 1px solid white;">6 PM</td>
            <td style="border: 1px solid white;">${hb}(<span style="color: #F0F0F0">${Lb}</span>)\u00b0C</td>
            <td style="border: 1px solid white;">${jb} km/h, ${ib}</td>
            <td style="border: 1px solid white;">${kb}</td>
          </tr>
          <tr>
            <td style="border: 1px solid white;">9 PM</td>
            <td style="border: 1px solid white;">${lb}(<span style="color: #F0F0F0">${Mb}</span>)\u00b0C</td>
            <td style="border: 1px solid white;">${nb} km/h, ${mb}</td>
            <td style="border: 1px solid white;">${ob}</td>
          </tr>
        </table>
        <br/>
        `}getWeather();