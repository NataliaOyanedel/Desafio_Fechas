const app = new Vue ({
el: '#app', 
data: {
   titulo: 'Cuenta regresiva'



}



})


var d = new Minutes();

document.write(d.getMinutes());