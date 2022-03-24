import CardGame from "../CardGame";

function CardFrontBack(){
    return `
        <article class="card-front-back">
            ${CardGame()}
            ${CardGame("javascript", "Logo do javascript")}
        </article>
    `
}

export default CardFrontBack;