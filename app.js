Vue.createApp({
    data() {
        return {
            // Estado de la app
            test: '<strong>Hola!</strong>',
            nuevoId: 6,
            textInput: '',
            showTextLength: '',
        }
    },
    mounted() {
        console.log("Ya me han renderizado!");

        // busca el atributo ref="title"; obtiene el elemento del DOM
        this.$refs.title.style.backgroundColor = "red";
        this.$refs.title.textContent = "RENDERIZADO!! Gracias al hook Mounted";
    },
    updated() {
        console.log("Ha cambiado el DOM Virtual!! Te he actualizado el DOM que ves en el navegador.");
    },
    methods: {
        saludar(nombre) {
            return 'Alo!!!!!' + nombre;
        },
        calculate() {
            this.showTextLength = this.textInput;

        },

    },
    // Las computed properties NO deberían modificar el estado
    computed: {
        setColorNumber() {
            // una función que está calculando un estado a partir de otro
            if (this.showTextLength.length % 2 == 0) {
                return 'purple';
            }

            return 'yellow';
        },
        getTextLength() {
            return this.showTextLength.length;
        },
        getArrayFromText() {
            // me crea un array con tantos elementos como carácteres tiene el string
            return this.showTextLength.split('')
        }
    }

}).mount('#app')