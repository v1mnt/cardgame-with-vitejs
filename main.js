import './src/styles/settings/colors.css'
import './src/styles/elements/base.css'
import './src/styles/generic/reset.css'

import BoardGame from './src/Objetcs/BoardGame';

const $root = document.querySelector("#root");
const $htmlBoardGame = BoardGame(3);

$root.insertAdjacentHTML("beforeend", $htmlBoardGame);
$root.insertAdjacentHTML("beforeend", $player);


