Vue.component('img-compo', {
    template: '#img-compo-template',
    props: ['imageurl', 'alttitle'],
    data: function(){
        return {
            test: 'Pruebasss!!!',
            counter: 0,
            esmayor: false
        }
    },
    methods: {
        countClick: function(){
            this.counter ++;
            if(this.counter > 10){
                this.$emit('mayor', this.counter);
                this.esmayor = true;
            }
        }
    }
});

Vue.component('list-group', {
    template: '#list-group-template',
    props: ['listdata'],
    data: function(){
        return {
            newItem: ''
        }
    },
    methods: {
        addItem: function () {
            this.listdata.push(this.newItem);
            this.newItem = '';
        }
    }
});

new Vue({
    el: '#app',
    data: {
        imagenes: [
            {title: 'Imagen 1', url: 'images/1.jpg'},
            {title: 'Imagen 2', url: 'images/2.jpg'},
            {title: 'Imagen 3', url: 'images/3.jpg'},
            {title: 'Imagen 4', url: 'images/4.jpg'},
            {title: 'Imagen 5', url: 'images/5.jpg'}
        ],
        lista : ['Texto']
    },
    methods: {
        notificar: function(data){
            //alert("Contador con valor: " + data);
        }
    }
});