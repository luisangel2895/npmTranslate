"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = npmtest;

function npmtest(str) {
  let translation = str;

  const reverse = str => str.split('').reverse().join('');

  function minMay(str) {
    const length = str.length;
    let translation = '';
    let capitalize = true;

    for (let i = 0; i < length; i++) {
      const char = str.charAt(i);
      translation += capitalize ? char.toUpperCase() : char.toLowerCase();
      capitalize = !capitalize;
    }

    return translation;
  }

  if (str.toLowerCase() == reverse(str).toLowerCase()) {
    return minMay(str.toLowerCase());
  }

  if (str.toLowerCase().endsWith('ar')) {
    translation = str.slice(0, -2);
  }

  if (str.toLowerCase().startsWith('z')) {
    translation += 'pe';
  }

  if (translation.length >= 10) {
    const firstHalf = translation.slice(0, Math.round(translation.length / 2));
    const secondHalf = translation.slice(Math.round(translation.length / 2));
    translation = `${firstHalf}-${secondHalf}`;
  }

  return translation;
}

// Tuve q transpilarlo a mano en la pagina de babel rarisimo q ahora ahi funcione
// y pareciera q por comandos de babel-cli no 