import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

let store = new Vuex.Store({
    state: {
        userName: '',
        loading: false,
        menu: '',
        urlName: '',
        datasum: [{hasDelement: false}],
        datalist: [{hasBtn: false, imgurl: ''}],
        residentList: []
    },
    mutations: {
        get_login_user (state, data) {
            state.userName = data;
        },
        switch_loading (state, data) {
            state.loading = data;
        },
        update_menu (state, data) {
            state.menu = data;
        },
        update_url_name (state, data) {
            state.urlName = data;
        },
        update_summary (state, data) {
            state.datasum.push(data);
        },
        update_list (state, data) {
            state.datalist.push(data);
        },
        update_resident_list (state, data) {
            state.residentList.push(data);
        }
    },
    actions: {
        update_resident_list ({commit}, pageSize) {
            // axios.get('/useractive/info', {
            //     pageSize: pageSize,
            //     count: 10
            // }).then((res) => {
            //     console.log(res);
            //     commit('update_resident_list', res.data.list);
            // });
        }
    }
});
export default store;