import { w3cwebsocket } from 'websocket'
const W3CWebSocket = w3cwebsocket

export const state = () => ({
    local_count_1: 0
    , local_count_2: 0
    , local_count_3: 0
    , all_count_1: 0
    , all_count_2: 0
    , all_count_3: 0
    // , socket: new W3CWebSocket('ws://localhost:3000/ws')
})
  
export const mutations = {
    add1 (state) {
        state.local_count_1 += 1
        state.all_count_1 += 1
        // this.socket.send()
    }
    , add2 (state) {
        state.local_count_2 += 1
        state.all_count_2 += 1
        // this.socket.send()
    }
    , add3 (state) {
        state.local_count_3 += 1
        state.all_count_3 += 1
        // this.socket.send()
    }
}