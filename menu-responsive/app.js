'use strict'

let bmore = document.getElementById('bmore');
let links = document.getElementById('links');

bmore.addEventListener('click', () =>{
    links.classList.toggle('collapsed');
})