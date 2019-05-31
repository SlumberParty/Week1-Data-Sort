import Component from './Component.js';
import Header from './Header.js';
import contacts from '../../data/data-list.js';
import Table from './Table.js';
import TableHead from './TableHead.js';
import sortList from '../sort-list.js';

class App extends Component {

    render() {
        const dom = this.renderDOM();

        //Header
        const header = new Header();
        const headerDOM = header.render();

        //main DOM
        const main = dom.querySelector('main');
        dom.insertBefore(headerDOM, main);

        //Table
        const table = new Table({ contacts });
        main.appendChild(table.render());

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