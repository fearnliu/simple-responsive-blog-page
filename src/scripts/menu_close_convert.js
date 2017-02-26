

let btn = document.querySelector('.menu-btn-icon'); // 图标按钮容器
let menu = document.querySelector('.nav-container-list');   // 导航栏容器


let menuIsCollapse = true;  // 移动优先，初始时刻，折叠导航栏

let mql = window.matchMedia('(min-width: 480px)');  // 判断视口宽度

mql.addListener(handleWidthChange); // 注册监听器，实时监控媒体查询值结果
handleWidthChange(mql); // 初始化，开始监听媒体查询值的变化

function handleWidthChange(mql) {
    if (mql.matches) {
        menu.style.display = 'block';
    } else {
        if (menuIsCollapse) {
            menu.style.display = 'none';
        } else {
            menu.style.display = 'block';
        }
    }
}


btn.addEventListener('click', ()=>{
    menuIsCollapse = !menuIsCollapse;

    if (menuIsCollapse) {   /* 菜单折叠 */
        menu.style.display = 'none';
        btn.classList.remove('icon-close');
        btn.classList.add('icon-menu');
    } else {
        menu.style.display = 'block';   /* 行内样式优先级高，会覆盖掉样式中的样式。带来的问题是：导航栏关闭的移动端页面切换到 PC 模式下时，导航栏将不可见 */
        btn.classList.remove('icon-menu');
        btn.classList.add('icon-close');
    }
}, false);
