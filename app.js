const headerNavbar = document.querySelector(".header__navbar");
const headerNavbarColor = document.querySelector(".header__navbar-color");
//click header navbar
headerNavbar.addEventListener('click', ()=>{
    if (headerNavbarColor.style.display == 'block'){
        headerNavbarColor.style.display = 'none';
    } else {
        headerNavbarColor.style.display = 'block';
    }
});
//off event when click outside
document.addEventListener("click", (e)=>{
    if (!headerNavbarColor.contains(e.target) && !headerNavbar.contains(e.target)){
        headerNavbarColor.style.display = 'none';  
    }
});
//stop event click when inside headerNavbarColor
headerNavbarColor.addEventListener('click', (e)=>{
    e.stopPropagation();
});
//set backgroundcolor for 'navbar__color'
const listNavbarColor = document.querySelectorAll('.navbar__color');
listNavbarColor.forEach( colorDiv =>{
    const classes = Array.from(colorDiv.classList);
    const colorClass = classes.find ( cls => /^[A-Fa-f0-9]{6}$/.test(cls))
    if (colorClass) {
        colorDiv.style.backgroundColor = `#${colorClass}`;
    }
})
//selected navbar color & set backgroundcolor for 'app'
const app = document.querySelector('.app');
const footer = document.querySelector('.footer');
listNavbarColor.forEach( colorDiv =>{
    colorDiv.addEventListener('click', ()=>{
        listNavbarColor.forEach( div => {
            div.classList.remove('active');
        });
        colorDiv.classList.add('active');
        document.documentElement.style.setProperty('--bg-color', `#${colorDiv.classList[1]}`)
        // app.style.backgroundColor = `#${colorDiv.classList[1]}`;
        // app.style.backgroundColor = window.getComputedStyle(colorDiv).backgroundColor;
    })
})
//icon footer
const footerContent = document.querySelector('.footer__content');
const iconCircle = document.querySelector('.icon-circle')
const iconPlus = document.querySelector('.icon-plus')
const inputToDo = document.querySelector('.inputToDo');
//event click in footer
footerContent.addEventListener('click', () => {
    const iconCircleDisplay = window.getComputedStyle(iconCircle).display;  
    if (iconCircleDisplay === 'none') {
        iconCircle.style.display = 'block';  
        iconPlus.style.display = 'none';    
        !inputToDo.focus(); 
    } 
});
document.addEventListener ('click', (e) => {
    if (!footerContent.contains(e.target)) {
        iconCircle.style.display = 'none';
        iconPlus.style.display = 'block';
    }
})
//update count item in div item-done
const updateCount = ()=>{
    const itemDone = document.querySelector('.item-done');
    const spanCount = document.querySelector('.item-done-navigation span');
    const itemCount = itemDone.querySelectorAll('.item').length;
    spanCount.textContent = itemCount;
}
// Move items between divs
const updateItemPosition = (item) => {
    const itemDone = document.querySelector('.item-done');
    const itemOngoing = document.querySelector('.item__ongoing');
    const iconCheckDone = item.querySelector('.icon-check-done'); // Chỉ icon của item hiện tại
    const iconCheckDoneStyle = window.getComputedStyle(iconCheckDone);
    if (iconCheckDoneStyle.display === 'block') {
        itemDone.appendChild(item);
    } else {
        itemOngoing.appendChild(item);
    }
    updateCount();
    hideShowItemDoneNavigation();
}
// Event hover for items
const addHoverEvent = (item) => {
    const ongoingIcon = item.querySelector('.icon-ongoing');
    const checkIcon = item.querySelector('.icon-check');
    const checkDoneIcon = item.querySelector('.icon-check-done');
    const inputItem = item.querySelector('.input__item'); 

    ongoingIcon.addEventListener('mouseenter', () => {
        ongoingIcon.style.display = 'none';
        checkIcon.style.display = 'block';
    });
    ongoingIcon.addEventListener('mouseleave', () => {
        ongoingIcon.style.display = 'block';
        checkIcon.style.display = 'none';
    });

    checkIcon.addEventListener('click', () => {
        if (checkDoneIcon.style.display === 'none' || checkDoneIcon.style.display === '') {
            ongoingIcon.style.display = 'none';   
            checkIcon.style.display = 'none';     
            checkDoneIcon.style.display = 'block'; 
            inputItem.classList.add('done');
            updateItemPosition(item); // Di chuyển item khi hoàn thành
        }
    });
    checkDoneIcon.addEventListener('click', () => {
        ongoingIcon.style.display = 'block';   
        checkIcon.style.display = 'none';      
        checkDoneIcon.style.display = 'none';  
        inputItem.classList.remove('done'); 
        updateItemPosition(item); // Di chuyển item về ongoing khi chưa hoàn thành
    });
};

const listItem = document.querySelector('.item__ongoing');
//add item from input to list item
inputToDo.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && inputToDo.value.trim() !== '') {
        const newItem = document.createElement('div');
        newItem.classList.add('item');
        //add icon 
        const icon1 = document.createElement('i');
        icon1.classList.add('fa-regular', 'fa-circle', 'item-icon', 'icon-ongoing');
        newItem.appendChild(icon1);
        const icon2 = document.createElement('i');
        icon2.classList.add('fa-regular', 'fa-circle-check', 'item-icon', 'icon-check');
        newItem.appendChild(icon2);
        const icon3 = document.createElement('i');
        icon3.classList.add('fa-solid', 'fa-circle-check', 'item-icon', 'icon-check-done');
        newItem.appendChild(icon3);
        const input = document.createElement('input')
        input.type = 'text';
        input.value = inputToDo.value.trim();
        input.readOnly = false;
        input.classList.add('input__item');
        newItem.appendChild(input);

        listItem.appendChild(newItem);
        inputToDo.value = '';

        deleteItem();
        addHoverEvent(newItem);
        addRightClickMenu();
    }
});
//for each item
const items = document.querySelectorAll('.item');
items.forEach(addHoverEvent);

//hide and show item-done-navigation
const hideShowItemDoneNavigation = () => {
    const itemDone = document.querySelector('.item-done');
    const itemDoneNavigation = document.querySelector('.item-done-navigation');
    const itemCount = itemDone.querySelectorAll('.item').length; 
    if (itemCount !== 0) { 
        itemDoneNavigation.style.display = "flex"; 
    } else {
        itemDoneNavigation.style.display = "none"; 
    }
};
// hide and show item-done with navigation
const hideShowItemDoneWithNavigation = () => {
    const itemDone = document.querySelector('.item-done');
    const itemDoneNavigationRight = document.querySelector('.item-done-navigation-right');
    const itemDoneNavigationDown = document.querySelector('.item-done-navigation-down');
    const itemDoneNavigation = document.querySelector('.item-done-navigation');

    itemDoneNavigation.addEventListener('click', () => {
        if (itemDoneNavigationRight.style.display === 'none') {
            itemDoneNavigationDown.style.display = 'none';
            itemDoneNavigationRight.style.display = 'block';
            itemDone.style.display = 'none';
        } else {
            itemDoneNavigationDown.style.display = 'block';
            itemDoneNavigationRight.style.display = 'none';
            itemDone.style.display = 'flex';
        }
    });
};
hideShowItemDoneWithNavigation();

//show form delete when right-click 
const deleteItem = () => {
    const deleteMenu = document.getElementById('deleteMenu');
    const deleteModal = document.getElementById('deleteModal');
    const confirmDelete = document.getElementById('confirmDelete');
    const cancelDelete = document.getElementById('cancelDelete');
    let itemToDelete = null;
    document.querySelectorAll('.item').forEach(item => {
        item.addEventListener('contextmenu', (e) => {
            e.preventDefault();
            itemToDelete = item;
            const x = e.pageX;
            const y = e.pageY;
            deleteMenu.style.left = `${x}px`;
            deleteMenu.style.top = `${y}px`;
            deleteMenu.style.display = 'block';
        });
    });
    document.addEventListener('click', () => {
        deleteMenu.style.display = 'none';
    });
    document.querySelector('.delete-option').addEventListener('click', () => {
        deleteModal.style.display = 'flex'; 
        deleteMenu.style.display = 'none'; 
    });
    confirmDelete.addEventListener('click', () => {
        if (itemToDelete) {
            itemToDelete.remove(); 
            itemToDelete = null; 
        }
        deleteModal.style.display = 'none'; 
    });
    cancelDelete.addEventListener('click', () => {
        deleteModal.style.display = 'none'; 
        itemToDelete = null; 
    });
};
deleteItem();
