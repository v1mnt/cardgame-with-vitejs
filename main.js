import './src/styles/settings/colors.css'
import './src/styles/elements/base.css'
import './src/styles/generic/reset.css'

import BoardGame from './src/Objetcs/BoardGame';
import ScoreBoard from './src/Objetcs/ScoreBoard';

const $root = document.querySelector("#root");

$root.insertAdjacentHTML(
    "beforeend", `
    ${ScoreBoard()}
    ${BoardGame(6)}
`);



