import Component from './Component.js';

let direction = 1;

class TableHead extends Component {

    render() {

        const headerRow = this.renderDOM();

        const buttons = headerRow.querySelectorAll('button');
        
        buttons.forEach(button => {
            button.addEventListener('click', () => {
                direction = direction * -1;
                
                const sortOptions = {
                    property: button.value,
                    direction
                };
                
                this.props.onSort(sortOptions);
            });
        });

        return headerRow;
    }

    renderTemplate() {
        return /*html*/`
            <tr>
                <th><button value="firstName">First Name</button></th>
                <th><button value="lastName">Last Name</button></th>
                <th><button value="company">Company</button></th>
                <th><button value="favoriteFruit">Favorite Fruit</button></th>
            </tr>
        `;
    }
}

export default TableHead;