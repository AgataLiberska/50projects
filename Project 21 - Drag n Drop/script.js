const fill = document.querySelector('.fill');
const empties = document.querySelectorAll('.empty');

fill.addEventListener('dragstart', dragStart);
fill.addEventListener('dragend', dragEnd);

for (const empty of empties) {
    empty.addEventListener('dragover', dragOver);
    empty.addEventListener('dragenter', dragEnter);
    empty.addEventListener('dragleave', dragLeave);
    empty.addEventListener('drop', dragDrop);
}

function dragStart() {
    this.className += ' hold';
    //class invisible has no style on it, but it will override the hold class so the
    //image will not be displayed in the container box
    //we put it in settimeout so we can actually apply the hold class to the image that is dragged out first
    setTimeout(() => {this.className = 'invisible'},0);
}

function dragEnd() {
    this.className = 'fill';
}

function dragOver(e) {
    e.preventDefault()
}

function dragEnter(e) {
    e.preventDefault();
    this.className += ' hovered';
}

function dragLeave() {
    this.className = 'empty';
}

function dragDrop() {
    this.className = 'empty';
    this.append(fill);
}