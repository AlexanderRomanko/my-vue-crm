import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

import colors from 'vuetify/lib/util/colors'
export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: '#212121',
                secondary: '#b0bec5',
                accent: '#626262',
                error: '#FF5722',
                info: '#2196F3',
                success: '#009688',
                warning: '#FFC107',
            },
            dark: {
                primary: colors.blue.lighten3,
            },
        },
    },
});
