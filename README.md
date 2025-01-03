# To-Do List Web Application

- The To-Do List Web Application project helps users manage tasks, goals, and track progress through an easy-to-use web interface. The main functions of the application include changing the background color of the navbar, adding items to the list, marking items as completed, and deleting items.
<img src="./imgs/Screenshot 2025-01-02 140455.png" alt="Image 2" width="100%" height="auto"/>

## Features

### Toggle Navbar visibility
- When clicking on the `headerNavbar` element, the `headerNavbarColor` element will be opened or closed depending on the current state.
### Close Navbar on click outside the container
- If the user clicks outside the container of `headerNavbar` and `headerNavbarColor`, the `headerNavbarColor` element will be closed automatically.

### Change background color when selecting color from Navbar
- User can select color from `navbar__color` color list, and the background color of the website will change according to the selected color.
<img src="./imgs/Screenshot 2025-01-02 140508.png" alt="Image 2" width="100%" height="auto"/>

### Show and hide icons in Footer
- Clicking on `footerContent` will change the display between `iconCircle` and `iconPlus` icons.

### Update number of completed items
- The number of items in the "Done" list will be automatically updated each time an item is completed.

### Move item between "Ongoing" and "Done" lists
- When user clicks on the check icon, the item will be moved between "Ongoing" and "Done" lists.
<img src="./imgs/Screenshot 2025-01-02 140624.png" alt="Image 3" width="100%" height="auto"/>


### Show and hide completed items navigation
- Navigation will be displayed when there are items in the "Done" list, allowing the user to move between completed items.

### Delete items with right-click menu
- When right-clicking on an item, the delete menu will appear. The user can delete the item or cancel the deletion action.
  <img src="./imgs/Screenshot 2025-01-02 140710.png" alt="Image 3" width="100%" height="auto"/>


### Add new items to the list
- The user can add a new item to the list by typing in the input box and pressing Enter.

### Handle hover events for items
- "Ongoing" icons will change state when the user hovers in or out.

### Update background color of selected items
- Selected items will have a background color that changes when the user clicks on the item.

### Hide and show completed items navigation
- Navigation between completed and uncompleted items is controlled by click events on the navigation.

## Install and Run the App

1. Download the source code from GitHub or clone the code.

2. Open the `index.html` file in your browser.
