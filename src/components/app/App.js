import Component from '../Component.js';
import Header from './Header.js';
import Footer from './Footer.js';
import PokeList from '../pokedex/PokeList.js';

class App extends Component {
    onRender(dom) {
        const header = new Header();
        const headerDOM = header.renderDOM();
        dom.prepend(headerDOM);

        // const props = {
        //     pokemons: pokemons
        // };

        

        const url = 'https://alchemy-pokedex.herokuapp.com/api/pokedex';
        fetch(url)
            .then(response => response.json())
            .then(data => {
                const pokeList = new PokeList({ pokemons: data });
                const pokeListDOM = pokeList.renderDOM();
                const pokeCards = dom.querySelector('#pokecards');
                pokeCards.appendChild(pokeListDOM);
            });

        const footer = new Footer();
        const footerDOM = footer.renderDOM();
        dom.appendChild(footerDOM);
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