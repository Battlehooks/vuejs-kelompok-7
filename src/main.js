import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import EventHandle from './components/EventHandle.vue';
import HelloWorld from './components/HelloWorld.vue';
import ButtonHandle from './components/ButtonHandle.vue';

//createApp(App).mount('#app');
//createApp(EventHandle).mount('#app');
//createApp(HelloWorld).mount('#app');
createApp(ButtonHandle).mount('#app');
