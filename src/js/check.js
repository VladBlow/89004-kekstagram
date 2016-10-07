'use strict';

var getMessage = function (a, b) {

  switch (typeof a) {
    case 'boolean':

      if (a == true) {
        return "Переданное GIF-изображение анимировано и содержит " + b + " кадров";
      } else {
        return "Переданное GIF-изображение не анимировано";
      }
      break;

    case 'number':
      return "Переданное SVG-изображение содержит " + a + " объектов и " + (b * 4) + " атрибутов";

    case 'object':
      if (typeof b == 'object') {
        var artifactsSquare = 0;

        for (var i = 0; i < a.length; i++) {
            artifactsSquare += parseInt(a[i]) * parseInt(b[i]);
        }

        return "Общая площадь артефактов сжатия: " + artifactsSquare + " пикселей";
      } else {
        var amountOfRedPoints = 0;

        for (var i = 0; i < a.length; i++) {
          amountOfRedPoints = amountOfRedPoints + parseInt(a[i]);
        }
        console.log(typeof a);
        return "Количество красных точек во всех строчках изображения: " + amountOfRedPoints;
      }
    default:
      return "Переданы некорректные данные";

  }
}
