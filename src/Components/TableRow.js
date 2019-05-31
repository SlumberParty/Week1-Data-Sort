import Component from './Component.js';

class TableRow extends Component {

    render() {
        const list = this.renderDOM();

        return list;
    }

    renderTemplate() {
        const person = this.props.person;
        return /*html*/`
            <tr>
                <td>${person.firstName}</td>
                <td>${person.lastName}</td>
                <td>${person.company}</td>
                <td>${person.favoriteFruit}</td>
            </tr>
        `;
    }
}
export default TableRow;