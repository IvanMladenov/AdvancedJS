var HTMLGen = (function (){
    function createParagraph(parentId, text){
        var parent = document.getElementById(parentId),
            paragraph = document.createElement('p');

        paragraph.textContent = text;
        parent.appendChild(paragraph);
    }

    function createDiv(parentId, childClass){
        var parent = document.getElementById(parentId),
            div = document.createElement('div');

        div.className = childClass;
        parent.appendChild(div);
    }

    function createLink(parentId, text, url){
        var parent = document.getElementById(parentId),
            a = document.createElement('a');

        a.textContent = text;
        a.href = url;
        parent.appendChild(a);
    }

    return {
        createParagraph: createParagraph,
        createDiv: createDiv,
        createLink: createLink
    }
})();

HTMLGen.createParagraph('wrapper', 'Soft Uni');
HTMLGen.createDiv('wrapper', 'section');
HTMLGen.createLink('book', 'C# basics book', 'http://www.introprogramming.info/');

