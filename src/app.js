const app = new Vue({
    el:'#app',
    data: {
        hexColor: '',
        hexColor2: '',
        hexColo3: '',
        hexColor4: '',
 
    },


    mounted() {
        let colors = document.querySelectorAll('.col');
        for(let index = 0; index < colors.length; index++) {
            this.hexColor = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
            this.hexColor2 = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
            this.hexColor3= '#'+(Math.random()*0xFFFFFF<<0).toString(16);
            this.hexColor4 = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
            colors[index].style.backgroundColor = this.hexColor;
        }        
    },

    methods: {
        randomHex() {
            let colors = document.querySelectorAll('.col');
            for(let index = 0; index < colors.length; index++) {
                this.hexColor = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
                this.hexColor2 = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
                this.hexColor3= '#'+(Math.random()*0xFFFFFF<<0).toString(16);
                this.hexColor4 = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
                colors[index].style.backgroundColor = this.hexColor;
            }
        },

    }

})