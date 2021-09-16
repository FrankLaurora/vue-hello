const app = new Vue (
    {
        el: "#root",

        data: {
            title: "Hello Vue!",
            picSource: "https://pbs.twimg.com/media/Db3060FWkAAtlRV.jpg",
            highlighted: "off",
        },

        methods: {
            highlight: function() {
                if(this.highlighted == "off") {
                    this.highlighted = "highlighted";
                } else {
                    this.highlighted = "off";
                }
            },
        }
    }
);