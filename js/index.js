function sidebar() {
    let sidebar = document.getElementById('sidebar')
    let sidebarBtn = document.getElementById('sidebar-btn');

    sidebarBtn.classList.toggle('sidebar-btn-animation'); 
    sidebar.classList.toggle('sidebar-animation');

    if (sidebar.classList.contains('sidebar-animation')) {
        document.body.style.position = 'fixed';
    } else {
        document.body.style.position = 'relative';
    }

    let sidebarBtnIcon = document.getElementById('sidebar-btn-icon');
    if (sidebar.classList.contains('sidebar-animation')) {
        sidebarBtnIcon.src = 'img/icons/UI/cancel.svg';
    } else {
        sidebarBtnIcon.src = 'img/icons/UI/menu.svg';
    }
}

let sidebarMenu = document.getElementById('sidebar-menu');
sidebarMenu.onclick = function closeSidebar() {
    sidebar();
    
}

let backBtn = document.getElementById('backBtn');
backBtn.onclick = function backPage() {
    history.back();
}