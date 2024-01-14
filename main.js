// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      2024-01-14
// @description  try to take over the world!
// @author       You
// @match        https://jpdb.io/review
// @icon         https://www.google.com/s2/favicons?sz=64&domain=jpdb.io
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    let copyToClipBKanjiInfo = () => {
        let radicalDivs = document.querySelectorAll('.subsection-composed-of-kanji div.subsection .description');
        let radicals = Array.from(radicalDivs).map(radicalDiv => radicalDiv.textContent.trim());

        let keyword = document.querySelector('.subsection-composed-of-kanji').nextElementSibling.querySelector('.subsection').textContent.trim();

        let finalText = `Radicals: ${radicals.join(', ')}\nKeyword: ${keyword}`;

        navigator.clipboard.writeText( finalText );
    }

    let insertButtonForKanjiInfoGen = () => {
        let box = document.querySelector('.review-reveal .result.kanji .vbox.gap');

        const button = document.createElement('button');
        button.textContent = 'Copy Kanji Info for Mnemonic generation';

        button.addEventListener('click', copyToClipBKanjiInfo);

        box.appendChild(button);
    }

    if ( document.querySelectorAll('.subsection-composed-of-kanji') ) insertButtonForKanjiInfoGen();
    
})();