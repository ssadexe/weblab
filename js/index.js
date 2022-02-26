function sidebar() {
    let sidebar = document.getElementById('sidebar')
    let sidebarBtn = document.getElementById('sidebar-btn');
    let wrapper = document.getElementById('wrapper')

    sidebarBtn.classList.toggle('sidebar-btn-animation'); 
    sidebar.classList.toggle('sidebar-animation');
    wrapper.classList.toggle('wrapper-animation');

    if (sidebar.classList.contains('sidebar-animation')) {
        document.body.style.position = 'fixed';
    } else {
        document.body.style.position = 'relative';
    }
    
    document.getElementById('bottom-wrapper').style.height = '100vh';
}

let sidebarMenu = document.getElementById('sidebar-menu');sidebarMenu.onclick = function closeSidebar() {
    sidebar()
}

let backBtn = document.getElementById('backBtn');
backBtn.onclick = function backPage() {
    history.back();
}