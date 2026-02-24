//Name: Kyle Gladden
//Assesment: Lab #4

// exercise1.js
const accordion = document.querySelector('.accordion');

accordion.addEventListener('click', function(event) {
 // 1. Find the closest trigger from event.target
    const trigger = event.target.closest(`.accordion-trigger`);

    if (!trigger) return;

    const currentItem = trigger.closest(`.accordion-item`);

    const allItems = accordion.querySelectorAll(`.accordion-item`);

    allItems.forEach(item => {
        if (item !== currentItem) {
            item.classList.remove(`open`);
        }

    });

    currentItem.classList.toggle('open');


    
 // If null, the click was not on a trigger - return early.
 // 2. From the trigger, find the closest .accordion-item
 // 3. Close ALL accordion items (querySelectorAll + forEach + remove class)
 // 4. Toggle .open on the clicked item only
});