export const state = () => ({
    count_1: 0
    , count_2: 0
    , count_3: 0
})
  
export const mutations = {
    add1 (state) {
        state.count_1 += 1
    }
    , add2 (state) {
        state.count_2 += 1
    }
    , add3 (state) {
        state.count_3 += 1
    }
}