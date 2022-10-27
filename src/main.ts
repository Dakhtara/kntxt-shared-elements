import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { router } from './router/routes'
import {
    SharedElementRouteGuard,
    SharedElementDirective
} from 'v-shared-element'

const app = createApp(App)

app.use(SharedElementDirective);

router.beforeEach(SharedElementRouteGuard);
app.use(router);

app.mount("#app");