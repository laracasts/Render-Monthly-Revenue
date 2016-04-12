import Vue from 'vue';
import Chart from 'chart.js';

export default Vue.extend({
    template: `
        <div>
            <canvas width="800" height="600" v-el:canvas></canvas>
            {{{ legend }}} 
        </div>
    `,

    props: ['keys', 'values'],

    data() {
        return {
            legend: ''
        };
    },

    ready() {
        this.render({
            labels: this.keys,
            datasets: [
                {
                    label: "Revenue",
                    fillColor: "rgba(220,220,220,0.2)",
                    strokeColor: "rgba(220,220,220,1)",
                    pointColor: "rgba(220,220,220,1)",
                    pointStrokeColor: "#fff",
                    pointHighlightFill: "#fff",
                    pointHighlightStroke: "rgba(220,220,220,1)",
                    data: this.values
                }
            ]
        });
    },

    methods: {
        render(data) {
            const chart = new Chart(
                this.$els.canvas.getContext('2d')
            ).Line(data);

            this.legend = chart.generateLegend();
        }
    }
});
