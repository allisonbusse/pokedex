import Component from '../Component.js';
import hashStorage from '../../services/hash-storage.js';

class Sort extends Component {
    onRender(form) {
        form.addEventListener('click', event => {
            console.log(form);
            event.preventDefault();
            const formData = new FormData(form);
            const sort = formData.get('sort');
            console.log(sort);

            hashStorage.set({ 
                sort: sort,
                page: 1
            });
        });
        const input = form.querySelector('input');

        window.addEventListener('hashchange', () => {
            input.value = hashStorage.get().sort || '';
        });
    }

    
    renderHTML() {
        return /*html*/`
        <form>
                <p>Sort by:</p>
                <input type="radio" name="sort" value="attack">Attack</button>
                <input type="radio" name="sort" value="speed">Speed</button>
            </form>
        `;
    }
}

export default Sort;