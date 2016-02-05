function createParagraph(parentId, text){
    var parent = document.getElementById(parentId);
    var paragraph = document.createElement('p');

    paragraph.textContent = text;
    parent.appendChild(paragraph);
}

createParagraph('wrapper', 'Pesho');