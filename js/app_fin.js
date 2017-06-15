new Vue({
    el: '#app',
    data: {
        mensaje: 'Hola desde vuejs...',
        descripcion: 'Otro texto aca'
    },
    methods: {
        changetitle: function(){
            this.mensaje = 'Mensaje cambiado!!!';
        }
    },
    computed: {
        reversetext: function(){
            return this.descripcion.split('').reverse().join('');
        }
    }
});