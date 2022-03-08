function sidebar() {
    let sidebarBtn = document.querySelector('.sidebar-btn')
    let sidebar = document.querySelector('.sidebar')
    sidebar.classList.toggle('sidebar-animation')
    sidebarBtn.classList.toggle('sidebar-btn-animation')

    let sidebarBtnIcon = document.getElementById('sidebar-btn__icon')
    
    if (sidebar.classList.contains('sidebar-animation')) {
        sidebarBtnIcon.src = 'img/icons/UI/cancel.svg'
    } else {
        sidebarBtnIcon.src = 'img/icons/UI/menu.svg'
    }
}