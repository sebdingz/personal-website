function toggleMenu(){
    const menu = document.querySelector(".menu-links");/*targeting menulikns */
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}
// 向右滑动
function scrollLef() {
    const container = document.querySelector('.experience-details-wrapper');
    container.scrollBy({
        left: -300, // 这个值根据你的项目容器的宽度来设置
        behavior: 'smooth'
    });
}

function scrollRig() {
    const container = document.querySelector('.experience-details-wrapper');
    container.scrollBy({
        left: 300, // 这个值根据你的项目容器的宽度来设置
        behavior: 'smooth'
    });
}
