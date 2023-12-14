//SIDEBAR
const menuItems = document.querySelectorAll(".menu-item");

//MESSAGE
const messagesNotification = document.querySelector("#messages-notifications");
const messages = document.querySelector(".messages");
//-----------------seach chat when clicked--------------
const message = messages.querySelectorAll('.messages');
const messageSearch = document.querySelector('#message-search');

//THEME

const theme = document.querySelector('#theme');
const themeModel = document.querySelector('.customize-theme');








// =============SIDEBAR===================
//REMOVE ACTIVE CLASS FROM ALL MENU ITEMS

const changeActiveItem = () => {
  menuItems.forEach(item => {
    item.classList.remove("active");
  });
};
//ADDS ACTIVE CLASS FROM ALL MENU ITEMS

menuItems.forEach(items => {
  items.addEventListener("click", () => {
    changeActiveItem();
    items.classList.add("active");
    if (items.id != "Notifications") {
      document.querySelector(".Notifications-popup").style.display = "none";
    } else {
      document.querySelector(".Notifications-popup").style.display = "block";
      document.querySelector(
        "#Notifications .Notification-count"
      ).style.display = "none";
    }
  });
});
// =============SIDEBAR ENDS===================
// --------------------------------------------------------------------------------------------------------------------------------


// ====================MESSAGES STRAT=================

//search chat
const searchMessage = () => {
    const val = messageSearch.value.toLowerCase();
    console.log(val);
    message.forEach(chat => {
        let name = chat.querySelector('h5').textContent.toLocaleLowerCase();
    })
}


//hightlights message card when messages menu item is clicked
messagesNotification.addEventListener("click", () => {
  messages.style.boxShadow = "0 0 1rem var(--color-primary)";
  messagesNotification.querySelector('.Notification-count').style.display = 'none';
  setTimeout(() =>{
    messages.style.boxShadow = 'none';
  },2000);
});

//THEME/DISPLAY CUTOMIZATION
const openThemeModel = () =>{
  themeModel.style.display = 'grid';
}

theme.addEventListener('click',openThemeModel);