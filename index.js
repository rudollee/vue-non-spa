import main from './main.js'
import footer from './footer.js'

const {createApp} = Vue;
createApp(main).mount('#main');
createApp(footer).mount('#footer');

