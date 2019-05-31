import Component from './Component.js';
import TableHead from './TableHead.js';
import TableRow from './TableRow.js';
import sortList from '../sort-list.js';

class Table extends Component {

    render() {
        const list = this.renderDOM();
        const people = this.props.contacts;

        const tableHead = new TableHead({
            onSort: sortOptions => {
                const sorted = sortList(people, sortOptions);
                this.update({ contacts: sorted });
            }
        });

        const tableHeadDOM = tableHead.render();
        list.appendChild(tableHeadDOM);


        people.forEach(person => {
            const tableRow = new TableRow({ person });
            const tableRowDOM = tableRow.render();
            list.appendChild(tableRowDOM);
        });

        return list;
    }

    renderTemplate() {
        return /*html*/`
            <table class="table"></table>
        `;
    }
}

export default Table;