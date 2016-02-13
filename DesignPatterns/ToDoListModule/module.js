var sectionCounter = 0;

(function(){
    var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

    Date.prototype.getDayName = function(){
        var currentDay = new Date().getDay();
        return days[currentDay];
    }
})();

(function(){
    var currentDay = new Date().getDayName(),
        element = document.getElementById('day-of-week');

    element.textContent = currentDay + ' TODO List';
})();

function createSection(){
    sectionCounter++;
    var section = document.createElement('SECTION'),
        itemButton = document.createElement('BUTTON'),
        itemName = document.createElement('INPUT'),
        parent = document.getElementById('container'),
        text = document.getElementById('section-name'),
        sectionHeader = document.createElement('H3'),
        className = text.value.split(/\s+/).join('');


    section.className = className;
    itemButton.className = className;
    itemName.className = className;
    itemButton.textContent = '+';
    itemName.placeholder = 'Add Item...';
    itemName.type = 'text';
    sectionHeader.textContent = sectionCounter + '. ' + text.value;

    section.appendChild(sectionHeader);
    parent.appendChild(section);
    parent.appendChild(itemName);
    parent.appendChild(itemButton);
}

function createItem(){
    
}

var btn = document.getElementById('new-section');
btn.addEventListener('click', createSection);

