var slider =  document.querySelector(".slider");
var images = ["url('../assets/banners/foto1.png')",
                "url('../assets/banners/foto2.png')",
                "url('../assets/banners/foto3.png')",
                "url('../assets/banners/foto4.png')",
                "url('../assets/banners/foto5.png')"];
var counter = 0;

function moverseA(idDelElemento) {
    location.hash = "#" + idDelElemento;
}

function abrirMenu(){
    var menuMobile = document.getElementById("menu-mobile");
    menuMobile.style.display = "block";
}

function moverseADMenu(idDelElemento) {
    var menuMobile = document.getElementById("menu-mobile");
    if(idDelElemento=="cerrar"){
        menuMobile.style.display = "none";
    }else{
        location.hash = "#" + idDelElemento;
        menuMobile.style.display = "none";
    }
}

function irAcontacto(){
    location.replace("https://www.facebook.com/pages/category/Cosmetic-Dentist/Republica-Dental-354284801996896/")
}

function showMoreServices(){
    var moreServ = document.getElementById("mas-servicios");
    moreServ.style.display = "block";
}

function changeService(id){ 
    var titulo = document.getElementById("tit-servicios");
    var description = document.getElementById("description-servicios-id");
    switch(id){
        case 'con':
            titulo.innerText="Consultas";
            var cont = "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus culpa reprehenderit nulla recusandae beatae temporibus minima incidunt voluptate doloribus sint harum iste sapiente, quasi nihil totam. Reiciendis maxime asperiores repellat?</p>";
            description.innerHTML = cont;
            break;
        case 'trden':
            titulo.innerText="Tratamientos dentales";
            var cont = "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus culpa reprehenderit nulla recusandae beatae temporibus minima incidunt voluptate doloribus sint harum iste sapiente, quasi nihil totam. Reiciendis maxime asperiores repellat?</p>";
            description.innerHTML = cont;
            break;
        case 'trpe':
            titulo.innerText="Tratamientos periododentales";
            var cont = "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus culpa reprehenderit nulla recusandae beatae temporibus minima incidunt voluptate doloribus sint harum iste sapiente, quasi nihil totam. Reiciendis maxime asperiores repellat?</p>";
            description.innerHTML = cont;
            break;
        case 'trbla':
            titulo.innerText="Tratamientos blanqueadores";
            var cont = "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus culpa reprehenderit nulla recusandae beatae temporibus minima incidunt voluptate doloribus sint harum iste sapiente, quasi nihil totam. Reiciendis maxime asperiores repellat?</p>";
            description.innerHTML = cont;
            break;
        case 'trpro':
            titulo.innerText="Proteción de caries";
            var cont = "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus culpa reprehenderit nulla recusandae beatae temporibus minima incidunt voluptate doloribus sint harum iste sapiente, quasi nihil totam. Reiciendis maxime asperiores repellat?</p>";
            description.innerHTML = cont;
            break;
        case 'odo':
            titulo.innerText="Odontología de implantes";
            var cont = "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus culpa reprehenderit nulla recusandae beatae temporibus minima incidunt voluptate doloribus sint harum iste sapiente, quasi nihil totam. Reiciendis maxime asperiores repellat?</p>";
            description.innerHTML = cont;
            break;
        default:
            titulo.innerText="Consultas";
            var cont = "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus culpa reprehenderit nulla recusandae beatae temporibus minima incidunt voluptate doloribus sint harum iste sapiente, quasi nihil totam. Reiciendis maxime asperiores repellat?</p>";
            description.innerHTML = cont;
            break;
    }
    if(lastItemSelected){
        lastItemSelected.classList.remove("activate-item-card");
    }
    var enlace = document.getElementById(id);
    enlace.classList.add("activate-item-card");
    lastItemSelected = enlace;
}

var lastItemSelected;
changeService('con');

function prev() {
    counter--;
    if(counter>=0 && counter<images.length){
        slider.style.backgroundImage = images[counter]; 
    }else{
        counter=images.length-1;
        slider.style.backgroundImage = images[counter];
    }
}

function next() {
    counter++;
    if(counter>=0 && counter<images.length){
        slider.style.backgroundImage = images[counter]; 
    }else{
        counter=0;
        slider.style.backgroundImage = images[counter];
    }
    setTimeout(next,5000);
}

setTimeout(next,5000);

function calendar(){
    var date = new Date();
    var contetCalendar = document.getElementById("cont-calendar");
    var month = document.getElementById("month");
    var year = document.getElementById("year");

    month.innerText = getMonthName(date.getMonth());
    year.innerText = date.getFullYear();

     
    var today = date.getDate(); 
    var dayWeek = date.getDay();

    
    var content = createCalendar(today,dayWeek,date.getMonth(),date.getFullYear());
    

    contetCalendar.innerHTML = content;
}

calendar();

function createCalendar(today,dayWeek,month,year){
    var days = getDaysMonth(month,year); 
    for(var i=today;i>=0;i--){
        if(dayWeek<0){
            dayWeek=6;
        }
        dayWeek--;
    }
    
    var content = '<table><tr>'
    +'<th>Dom</th>'
    +'<th>Lun</th>'
    +'<th>Mar</th>'
    +'<th>Mie</th>'
    +'<th>Jue</th>'
    +'<th>Vier</th>'
    +'<th>Sab</th>'
    +'</tr>';
    content += "<tr>";
    for(var i=1;i<=dayWeek;i++){
        content+="<td></td>";
    }
    var index = 0;
    for(var i=dayWeek;i<6;i++){
        content+="<td>"+days[index]+"</td>";
        index++;
    }
    content += "</tr>";
    while(index<days.length){
        content += "<tr>";
        for(var i=0;i<7;i++){
            if(days[index])
                content+="<td>"+days[index]+"</td>";
            else
                content+="<td></td>";
            index++;
        }
        content += "</tr>";
    }
    content+="</table>";

    return content;
}


function giveNumber(){
    var tempInput = document.createElement("input");
    tempInput.style = "position: absolute; left: -1000px; top: -1000px";
    tempInput.value = "772 12 39 292";
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
    alert("Número copiado al portapapeles");
}

function getDaysMonth(id,year){
    var days31 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31];
    var days30 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];
    var days29 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29];
    var days28 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28];
    switch(id){
        case 0:
         return days31;
         break;
        case 1:
         if(year%4==0)
            return days29;
         else
            return days28;
         break;
        case 2:
         return days31;
         break;
        case 3:
         return days30;
         break;
        case 4:
         return days31;
         break;
        case 5:
         return days30;
         break;
        case 6:
         return days31;
         break;
        case 7:
         return days31;
         break;
        case 8:
         return days30;
         break;
        case 9:
         return days31;
         break;
        case 10:
         return days30;
         break;
        case 11:
         return days31;
         break;
        default:
            return days31;
    }
}

function getMonthName(id){
    switch(id){
        case 0:
         return "Enero";
         break;
        case 1:
         return "Febrero";
         break;
        case 2:
         return "Marzo";
         break;
        case 3:
         return "Abril";
         break;
        case 4:
         return "Mayo";
         break;
        case 5:
         return "Junio";
         break;
        case 6:
         return "Julio";
         break;
        case 7:
         return "Agosto";
         break;
        case 8:
         return "Septiembre";
         break;
        case 9:
         return "Octubre";
         break;
        case 10:
         return "Noviembre";
         break;
        case 11:
         return "Diciembre";
         break;
        default:
            return "Enero";
    }
}




