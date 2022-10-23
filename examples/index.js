import Button from './components/button';
import Input from './components/input';
import Switch from './components/switch';

const components = [
    Button,
    Input,
    Switch
]
const install = function(Vue) {
    components.forEach(item => {
        Vue.component(item.name, item)
    })
}

if(typeof Window !== undefined && window.Vue) {
    install(Vue)
}

export {
    Button,
    Input,
    Switch,
    install
}

export default {
    install
}