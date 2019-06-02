<template>
  <section class="container">
    <h1>Win Party!</h1>
    <div class="buttons">
      <b-button size="is-large"
          type="is-info"
          @click="addCount1"
          icon-left="thumb-up-outline">
          いいね！{{local_count1}}
      </b-button>
      <b-button size="is-large"
          type="is-info"
          @click="addCount2"
          icon-left="thumb-up-outline">
          いいね！{{local_count2}}
      </b-button>
      <b-button size="is-large"
          type="is-info"
          @click="addCount3"
          icon-left="thumb-up-outline">
          いいね！{{local_count3}}
      </b-button>
    </div>
    <div>
        <PieChart :chartData="pieChartData" :options="options"></PieChart>
    </div>
  </section>
</template>

<script>
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import PieChart from '@/components/chart/PieChart.vue'

export default {
    components: {
        PieChart
    },
    data() {
        return {
            options : {
                title: {
                    display: true,
                    text: ''
                }
            }
        }
    },
    // created: function() {
    //     this.$store.state.counter.socket.onmessage = function(e) {
    //     }
    // },
    computed: {
        local_count1 () { return this.$store.state.counter.local_count_1 }
        , local_count2 () { return this.$store.state.counter.local_count_2 }
        , local_count3 () { return this.$store.state.counter.local_count_3 }
        , pieChartData () {
            return {
                labels: ["チームA", "チームB", "チームC"],
                datasets: [{
                    label: 'いいね！',
                    data: [this.$store.state.counter.all_count_1
                            , this.$store.state.counter.all_count_2
                            , this.$store.state.counter.all_count_3],
                    backgroundColor: [
                        'rgba(255, 100, 130, 0.2)',
                        'rgba(100, 130, 255, 0.2)',
                        'rgba(130, 255, 100, 0.2)'
                    ]
                }]
            }
        }
    },
    methods: {
        addCount1 (e) {
            this.$store.commit('counter/add1')
        }
        , addCount2 (e) {
            this.$store.commit('counter/add2')
        }
        , addCount3 (e) {
            this.$store.commit('counter/add3')
        }
    }
}
</script>