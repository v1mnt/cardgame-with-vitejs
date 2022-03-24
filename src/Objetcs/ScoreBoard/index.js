import PlayerName from '../../components/PlayerName'
import './style.css'

function ScoreBoard(){
    return `
        <header class="score-board">
            ${PlayerName('Player1')}
            ${PlayerName('Player2')}
        </header>
    `;
}

export default ScoreBoard;