function menuListener () {
    const menuItems = Array.from(document.getElementsByClassName("menu-item"))
    const menu = document.getElementById("menu");
    for (let i = 0; i < menuItems.length; i++) {
        menuItems[i].onmouseover = () => {
            menu.dataset.activeIndex = i;
        }
    }
}
function ready(fn) {
    if (document.readyState !== 'loading') {
        fn();
    } else {
        document.addEventListener('DOMContentLoaded', fn);
    }
}
ready(menuListener);
