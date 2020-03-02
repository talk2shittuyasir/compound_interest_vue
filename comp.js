new Vue({

    el: "#hold",
    data: {
        principal: null,
        rate: null,
        compound: null,
        time: null,
        msg: '',

    },

    computed: {
        createCal: function() {

            let rate = this.rate / 100;

            let result = this.principal * ((1 + rate / this.compound) ** (this.time * this.compound));

            if (isNaN(result)) {
                return this.msg = " INVALID INPUT!";
            } else {
                return this.msg = ` AMOUNT : N ${result.toFixed(2)}`;
            }

        },
        // validate: function(num) {

        //     if ((num < 0) || (isNaN(num))) {

        //         this.msg = " Invalid input";
        //         // this.num.value = '';

        //     }

        // },

    },
    methods: {

        reset: function() {
            this.principal = null;
            this.rate = null;
            this.compound = null;
            this.time = null;
            this.msg = "";
        },

    }
});