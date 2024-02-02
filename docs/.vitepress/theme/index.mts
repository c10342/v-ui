import { Theme } from "vitepress"
import DefaultTheme from "vitepress/theme";
import vui from 'v-ui'

const theme:Theme = {
    ...DefaultTheme,
    enhanceApp({app}) {
        app.use(vui)
        // app.component('demo', demo)
    },
}

export default theme