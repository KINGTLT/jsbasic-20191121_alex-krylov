/**
 * Проверяем объект obj на пустоту
 * @param {Object} obj
 * @returns {Boolean}
 */

let obj = {

};

function isEmpty(obj) {

    
  for (let key in obj) {
    return false;
  }

  return true;
}
