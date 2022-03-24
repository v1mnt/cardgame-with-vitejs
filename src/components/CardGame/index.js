import './style.css';

function CardGame(icon = 'alura-pixel', alt = 'Logo da alura') {
    return `
        <article class="card-game">
            <img src="images/${icon}.png" alt="${alt}">
        </article>
    `
}

export default CardGame;