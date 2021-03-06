import 'jquery';
import '../css/main.scss';
import '../users.html';

import { RandomGenerator } from './random-generator';

//const outputAnimation = $('#animationContainer');

const outputParagraph = $('#outputParagraph');

const outputRandomInt = () => {
    outputParagraph.text (RandomGenerator.randomInteger());
};

const outputRandomRange = () => {
    outputParagraph.text(RandomGenerator.randomRange(1, 500));
};

const buttonRndInt = jQuery('#randomInt');
const buttonRndRange = jQuery('#randomRange');

buttonRndInt.click(outputRandomInt);
buttonRndRange.click(outputRandomRange);