// ==UserScript==
// @name         Lab Ray Button Disable
// @namespace    http://tampermonkey.net/
// @version      2025-12-04
// @description  block certain pets from being selected in lab ray
// @author       Socks
// @match        https://www.neopets.com/lab2.phtml
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    //Add all pets you want to disable to this list
    var savePets = ["Avariio", "riverdances", "Sheiasha"];
    let a = document.getElementById('bxlist');
    let radioList = a.querySelectorAll('input[type="radio"]');

    radioList.forEach(radio => {
        if(savePets.includes(radio.value)) {
            radio.disabled = true;
        }
    });
})();