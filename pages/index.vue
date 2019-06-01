<template>
  <section class="container">
    <h1>Win Party!</h1>
    <div class="buttons">
      <b-button size="is-large"
          type="is-info"
          @click="addCount1"
          icon-left="thumb-up-outline">
          いいね！{{count1}}
      </b-button>
      <b-button size="is-large"
          type="is-info"
          @click="addCount2"
          icon-left="thumb-up-outline">
          いいね！{{count2}}
      </b-button>
      <b-button size="is-large"
          type="is-info"
          @click="addCount3"
          icon-left="thumb-up-outline">
          いいね！{{count3}}
      </b-button>
    </div>
  </section>
</template>

<script>
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
export default {
  computed: {
    count1 () { return this.$store.state.counter.count_1 }
    , count2 () { return this.$store.state.counter.count_2 }
    , count3 () { return this.$store.state.counter.count_3 }
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