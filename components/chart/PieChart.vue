<script>
import { Pie, mixins } from 'vue-chartjs'
const { reactiveProp } = mixins

export default {
    name: 'PieChart',
    extends: Pie,
    mixins: [reactiveProp],
    props: ['chartData', 'options'],
    mounted: function(){
        this.renderChart(this.chartData, this.options)
    },
    watch : {
        chartData : function(val) {
            this.renderChart(this.chartData, this.options)
        },
        options : function(val) {
            this.renderChart(this.chartData, this.options)
        }
    }
}
</script>