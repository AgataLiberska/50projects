const nums = document.querySelectorAll('.nums span');
const counter = document.querySelector('.counter');
const finalMessage = document.querySelector('.final');
const replay = document.querySelector('#replay');

runAnimation(); //you want the animation to load as soon as the page loads

function runAnimation() {
    nums.forEach((num, idx) => {
        //set variable to check for last element in the node list
        const nextToLast = nums.length - 1;

        num.addEventListener('animationend', (e) => {
            //if the animation that ended was goIn and we are not on the last element
            if (e.animationName === 'goIn' && idx !== nextToLast) {
                num.classList.remove('in');
                num.classList.add('out');
            } 
            //if the animation that ended was goOut and there is a sibling element (so our element is not last sibling)
            //get the next element, and give it 'in' class 
            //you want the current element to keep the out class.
            else if (e.animationName === 'goOut' && num.nextElementSibling) {
                num.nextElementSibling.classList.add('in');
            }
            //if the above conditions are not met, it means it's the end of the animations - hide the counter and display the final Message
            else {
                counter.classList.add('hide');
                finalMessage.classList.add('show')
            }
        })        
    })
}

//this function resets things and gets the animation ready to start
function resetDOM() {
    //hide the finalMessage
    finalMessage.classList.remove('show');
    //display the counter
    counter.classList.remove('hide');
    //remove all classes from all nums
    nums.forEach(num => {
        num.classList.value = '';
    })
    //add the in class to the first num in the nodelist (which is no 3)
    nums[0].classList.add('in');
}

//set eventlistener on the button
replay.addEventListener('click', () => {
    resetDOM();
    runAnimation();
})