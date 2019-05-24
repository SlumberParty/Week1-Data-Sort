import Component from './Component.js';
import Header from './Header.js';

class App extends Component {

    render() {
        const dom = this.renderDOM();

        //Header
        const header = new Header();
        const headerDOM = header.render();

        //Data List

        //Sort Data

        //append to DOM
        const main = dom.querySelector('main');
        main.insertBefore(headerDOM, main);

        return dom;
    }

    renderTemplate() {
        return /*html*/`
            <div>
                <main></main>
            </div>
        `;
    }
}

export default App;