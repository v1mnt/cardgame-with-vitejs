import './src/styles/settings/colors.css'
import './src/styles/elements/base.css'
import './src/styles/generic/reset.css'

import ScoreBoard from './src/Objetcs/ScoreBoard';
import BoardGame from './src/Objetcs/BoardGame';

const $root = document.querySelector("#root");

$root.insertAdjacentHTML(
    "beforeend", `
    ${ScoreBoard()}
    ${BoardGame(2)}
`);



