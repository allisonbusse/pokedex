import Component from '../Component.js';
import Header from './Header.js';
import pokemons from '../../../data/sample-data.js';
import PokeList from '../pokedex/PokeList.js';
import PokeCard from '../pokedex/PokeCard.js';

class App extends Component {
    onRender(dom) {
        const header = new Header();
        const headerDOM = header.renderDOM();
        dom.prepend(headerDOM);

        const props = {
            pokemons: pokemons
        };

        const pokeList = new PokeList(props);
        const pokeListDOM = pokeList.renderDOM();

        const pokeCards = dom.querySelector('#pokecards');
        pokeCards.appendChild(pokeListDOM);
    }

    renderHTML() {
        return /*html*/`
            <div>
                <!-- Header goes here -->
            <main>
                <section id="sidebar">
                </section>
                <section id="pokecards">
                </section>
                <section id="paging">
                </section>
            </main>
                <!-- Footer goes here -->
            </div>
        `;
    }
}

export default App;