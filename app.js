

const app = Vue.createApp({
  data() { 
    return { 
        
      titulo: '🆘 Safety QR', 
      Subtitulo: 'Estos son los datos de tu QR ',
      nombre: undefined,
      apellidos: undefined,
      edad: undefined,
      email:undefined,
      sexo: undefined,
      mensaje: undefined,
      mensajeVeu: ''
      
    }    
  },
  methods: {
    qrVue() {
      QR.makeCode(
  
        this.nombre + " " + this.apellidos + "\n" + this.email + "\n" + this.mensaje,
        this.mensajeVeu='Copia el QR e imprimelo, luego pegalo en un lado visible (ropa, mochila, gorra, etc..) para protege a los que mas quieres 👧🏽👶🏽🧗🏽‍♂️🚴🏽‍♀️🚣🏽‍♂️🏄🏽‍♀️'


      
        
      );

    }
  },
})

app.mount('#app');




// Genera un QR usando el DOM
const contenedorQR = document.getElementById('contenedorQR');
const formulario = document.getElementById('formulario');

const QR = new QRCode(contenedorQR);

formulario.addEventListener('submit', (e) => {
	e.preventDefault();
  QR.makeCode(formulario.nombre.value + " "
    + formulario.apellido.value + "\n"
    + formulario.email.value + "\n"
    + formulario.mensaje.value + ""
    );
  });