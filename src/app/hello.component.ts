import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello',
  template: `	<div class="layout has-sidebar fixed-sidebar fixed-header">
  <aside id="sidebar" class="sidebar break-point-lg has-bg-image">
    <div class="image-wrapper">
      <img src="https://user-images.githubusercontent.com/25878302/144499035-2911184c-76d3-4611-86e7-bc4e8ff84ff5.jpg"
        alt="sidebar background" />
    </div>
    <div class="sidebar-layout">
      <div class="sidebar-header">
        <span style="
              text-transform: uppercase;
              font-size: 15px;
              letter-spacing: 3px;
              font-weight: bold;
            ">Mom's Kitchen</span>
      </div>
      <div class="sidebar-content">
        <nav class="menu open-current-submenu">
          <ul>
            <li class="menu-item sub-menu">
              <a href="#">
                <span class="menu-icon">
                  <i class="ri-vip-diamond-fill"></i>
                </span>
                <span class="menu-title">Components</span>
                <span class="menu-suffix">&#x1F525;</span>
              </a>
              <div class="sub-menu-list">
                <ul>
                  <li class="menu-item">
                    <a href="#">
                      <span class="menu-title">Grid</span>
                    </a>
                  </li>
                  <li class="menu-item">
                    <a href="#">
                      <span class="menu-title">Layout</span>
                    </a>
                  </li>
                  <li class="menu-item sub-menu">
                    <a href="#">
                      <span class="menu-title">Forms</span>
                    </a>
                    <div class="sub-menu-list">
                      <ul>
                        <li class="menu-item">
                          <a href="#">
                            <span class="menu-title">Input</span>
                          </a>
                        </li>
                        <li class="menu-item">
                          <a href="#">
                            <span class="menu-title">Select</span>
                          </a>
                        </li>
                        <li class="menu-item sub-menu">
                          <a href="#">
                            <span class="menu-title">More</span>
                          </a>
                          <div class="sub-menu-list">
                            <ul>
                              <li class="menu-item">
                                <a href="#">
                                  <span class="menu-title">CheckBox</span>
                                </a>
                              </li>
                              <li class="menu-item">
                                <a href="#">
                                  <span class="menu-title">Radio</span>
                                </a>
                              </li>
                              <li class="menu-item sub-menu">
                                <a href="#">
                                  <span class="menu-title">Want more ?</span>
                                  <span class="menu-suffix">&#x1F914;</span>
                                </a>
                                <div class="sub-menu-list">
                                  <ul>
                                    <li class="menu-item">
                                      <a href="#">
                                        <span class="menu-prefix">&#127881;</span>
                                        <span class="menu-title">You made it </span>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
            </li>
            <li class="menu-item sub-menu">
              <a href="#">
                <span class="menu-icon">
                  <i class="ri-bar-chart-2-fill"></i>
                </span>
                <span class="menu-title">Charts</span>
              </a>
              <div class="sub-menu-list">
                <ul>
                  <li class="menu-item1">
                    <a href="menu-item1">
                      <span class="menu-title">Pie chart</span>
                    </a>
                  </li>
                  <li class="menu-item">
                    <a href="#">
                      <span class="menu-title">Line chart</span>
                    </a>
                  </li>
                  <li class="menu-item">
                    <a href="#">
                      <span class="menu-title">Bar chart</span>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li class="menu-item sub-menu">
              <a href="#">
                <span class="menu-icon">
                  <i class="ri-shopping-cart-fill"></i>
                </span>
                <span class="menu-title">E-commerce</span>
              </a>
              <div class="sub-menu-list">
                <ul>
                  <li class="menu-item">
                    <a href="#">
                      <span class="menu-title">Products</span>
                    </a>
                  </li>
                  <li class="menu-item">
                    <a href="#">
                      <span class="menu-title">Orders</span>
                    </a>
                  </li>
                  <li class="menu-item">
                    <a href="#">
                      <span class="menu-title">credit card</span>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li class="menu-item sub-menu">
              <a href="#">
                <span class="menu-icon">
                  <i class="ri-global-fill"></i>
                </span>
                <span class="menu-title">Maps</span>
              </a>
              <div class="sub-menu-list">
                <ul>
                  <li class="menu-item">
                    <a href="#">
                      <span class="menu-title">Google maps</span>
                    </a>
                  </li>
                  <li class="menu-item">
                    <a href="#">
                      <span class="menu-title">Open street map</span>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li class="menu-item sub-menu">
              <a href="#">
                <span class="menu-icon">
                  <i class="ri-brush-3-fill"></i>
                </span>
                <span class="menu-title">Theme</span>
              </a>
              <div class="sub-menu-list">
                <ul>
                  <li class="menu-item">
                    <a href="#">
                      <span class="menu-title">Dark</span>
                    </a>
                  </li>
                  <li class="menu-item">
                    <a href="#">
                      <span class="menu-title">Light</span>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li class="menu-item">
              <a href="#">
                <span class="menu-icon">
                  <i class="ri-book-2-fill"></i>
                </span>
                <span class="menu-title">Documentation</span>
              </a>
            </li>
            <li class="menu-item">
              <a href="#">
                <span class="menu-icon">
                  <i class="ri-calendar-fill"></i>
                </span>
                <span class="menu-title">Calendar</span>
              </a>
            </li>
            <li class="menu-item">
              <a href="#">
                <span class="menu-icon">
                  <i class="ri-service-fill"></i>
                </span>
                <span class="menu-title">Examples</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div class="sidebar-footer"><span>Sidebar footer</span></div>
    </div>
  </aside>
  <div id="overlay" class="overlay"></div>
  <div class="layout">
    <header class="header">
      <a id="btn-collapse" href="#">
        <i class="ri-menu-line ri-xl"></i>
      </a>
      <a id="btn-toggle" href="#" class="sidebar-toggler break-point-lg">
        <i class="ri-menu-line ri-xl"></i>
      </a>
    </header>`,
  styles: [`	.layout {
    z-index: 1;
  }

  .layout .header {
    box-shadow: 1px 
    1px 4px #666;
    display: flex;
    align-items: center;
    padding: 20px;
  }

  .layout .content {
    padding: 20px;
    display: flex;
    flex-direction: column;
  }

  .layout .footer {
    text-align: center;
    margin-top: auto;
    margin-bottom: 20px;
    padding: 20px;
  }

  .layout.rtl .header {
    box-shadow: -1px 1px 4px #9aa0b9;
  }

  .sidebar {
    color: #b3b8d4;
    overflow-x: hidden !important;
    position: relative;
    background-color: #0c1e35;
  }

  .sidebar .image-wrapper {
    overflow: hidden;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    opacity: 0.2;
    z-index: 1;
    display: none;
  }

  .sidebar .image-wrapper>img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }

  .sidebar.has-bg-image .image-wrapper {
    display: block;
  }

  .sidebar .sidebar-layout {
    height: 100%;
    display: flex;
    flex-direction: column;
    position: relative;
    z-index: 2;
  }

  .sidebar .sidebar-layout .sidebar-header {
    height: 64px;
    min-height: 64px;
    display: flex;
    align-items: center;
    padding: 0 20px;
    border-bottom: 1px solid rgba(83, 93, 125, 0.3);
  }

  .sidebar .sidebar-layout .sidebar-header>span {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  .sidebar .sidebar-layout .sidebar-content {
    flex-grow: 1;
    padding: 10px 0;
  }

  .sidebar .sidebar-layout .sidebar-footer {
    height: 64px;
    min-height: 64px;
    display: flex;
    align-items: center;
    border-top: 1px solid rgba(83, 93, 125, 0.3);
    padding: 0 20px;
  }

  .sidebar .sidebar-layout .sidebar-footer>span {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  @keyframes swing {

    0%,
    30%,
    50%,
    70%,
    100% {
      transform: rotate(0deg);
    }

    10% {
      transform: rotate(10deg);
    }

    40% {
      transform: rotate(-10deg);
    }

    60% {
      transform: rotate(5deg);
    }

    80% {
      transform: rotate(-5deg);
    }
  }

  .layout .sidebar .menu ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }

  .layout .sidebar .menu .menu-item a {
    display: flex;
    align-items: center;
    height: 50px;
    padding: 0 20px;
    color: #b3b8d4;
  }

  .layout .sidebar .menu .menu-item a .menu-icon {
    font-size: 1.2rem;
    width: 35px;
    min-width: 35px;
    height: 35px;
    line-height: 35px;
    text-align: center;
    display: inline-block;
    margin-right: 10px;
    border-radius: 2px;
    transition: color 0.3s;
  }

  .layout .sidebar .menu .menu-item a .menu-icon i {
    display: inline-block;
  }

  .layout .sidebar .menu .menu-item a .menu-title {
    font-size: 0.9rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    flex-grow: 1;
    transition: color 0.3s;
  }

  .layout .sidebar .menu .menu-item a .menu-prefix,
  .layout .sidebar .menu .menu-item a .menu-suffix {
    display: inline-block;
    padding: 5px;
    opacity: 1;
    transition: opacity 0.3s;
  }

  .layout .sidebar .menu .menu-item a:hover .menu-title {
    color: #dee2ec;
  }

  .layout .sidebar .menu .menu-item a:hover .menu-icon {
    color: #dee2ec;
  }

  .layout .sidebar .menu .menu-item a:hover .menu-icon i {
    animation: swing ease-in-out 0.5s 1 alternate;
  }

  .layout .sidebar .menu .menu-item a:hover::after {
    border-color: #dee2ec !important;
  }

  .layout .sidebar .menu .menu-item.sub-menu {
    position: relative;
  }

  .layout .sidebar .menu .menu-item.sub-menu>a::after {
    content: "";
    transition: transform 0.3s;
    border-right: 2px solid currentcolor;
    border-bottom: 2px solid currentcolor;
    width: 5px;
    height: 5px;
    transform: rotate(-45deg);
  }

  .layout .sidebar .menu .menu-item.sub-menu>.sub-menu-list {
    padding-left: 20px;
    display: none;
    overflow: hidden;
    z-index: 999;
  }

  .layout .sidebar .menu .menu-item.sub-menu.open>a::after {
    transform: rotate(45deg);
  }

  .layout .sidebar .menu .menu-item.active>a .menu-title {
    color: #dee2ec;
  }

  .layout .sidebar .menu .menu-item.active>a::after {
    border-color: #dee2ec;
  }

  .layout .sidebar .menu .menu-item.active>a .menu-icon {
    color: #dee2ec;
  }

  .layout .sidebar .menu>ul>.sub-menu>.sub-menu-list {
    background-color: #0b1a2c;
  }

  .layout .sidebar .menu.icon-shape-circle .menu-item a .menu-icon,
  .layout .sidebar .menu.icon-shape-rounded .menu-item a .menu-icon,
  .layout .sidebar .menu.icon-shape-square .menu-item a .menu-icon {
    background-color: #0b1a2c;
  }

  .layout .sidebar .menu.icon-shape-circle .menu-item a .menu-icon {
    border-radius: 50%;
  }

  .layout .sidebar .menu.icon-shape-rounded .menu-item a .menu-icon {
    border-radius: 4px;
  }

  .layout .sidebar .menu.icon-shape-square .menu-item a .menu-icon {
    border-radius: 0;
  }

  .layout .sidebar:not(.collapsed) .menu>ul>.menu-item.sub-menu>.sub-menu-list {
    visibility: visible !important;
    position: static !important;
    transform: translate(0, 0) !important;
  }

  .layout .sidebar.collapsed .menu>ul>.menu-item>a .menu-prefix,
  .layout .sidebar.collapsed .menu>ul>.menu-item>a .menu-suffix {
    opacity: 0;
  }

  .layout .sidebar.collapsed .menu>ul>.menu-item.sub-menu>a::after {
    content: "";
    width: 5px;
    height: 5px;
    background-color: currentcolor;
    border-radius: 50%;
    display: inline-block;
    position: absolute;
    right: 10px;
    top: 50%;
    border: none;
    transform: translateY(-50%);
  }

  .layout .sidebar.collapsed .menu>ul>.menu-item.sub-menu>a:hover::after {
    background-color: #dee2ec;
  }

  .layout .sidebar.collapsed .menu>ul>.menu-item.sub-menu>.sub-menu-list {
    transition: none !important;
    width: 200px;
    margin-left: 3px !important;
    border-radius: 4px;
    display: block !important;
  }

  .layout .sidebar.collapsed .menu>ul>.menu-item.active>a::after {
    background-color: #dee2ec;
  }

  .layout .sidebar.has-bg-image .menu.icon-shape-circle .menu-item a .menu-icon,
  .layout .sidebar.has-bg-image .menu.icon-shape-rounded .menu-item a .menu-icon,
  .layout .sidebar.has-bg-image .menu.icon-shape-square .menu-item a .menu-icon {
    background-color: rgba(11, 26, 44, 0.6);
  }

  .layout .sidebar.has-bg-image:not(.collapsed) .menu>ul>.sub-menu>.sub-menu-list {
    background-color: rgba(11, 26, 44, 0.6);
  }

  .layout.rtl .sidebar .menu .menu-item a .menu-icon {
    margin-left: 10px;
    margin-right: 0;
  }

  .layout.rtl .sidebar .menu .menu-item.sub-menu>a::after {
    transform: rotate(135deg);
  }

  .layout.rtl .sidebar .menu .menu-item.sub-menu>.sub-menu-list {
    padding-left: 0;
    padding-right: 20px;
  }

  .layout.rtl .sidebar .menu .menu-item.sub-menu.open>a::after {
    transform: rotate(45deg);
  }

  .layout.rtl .sidebar.collapsed .menu>ul>.menu-item.sub-menu a::after {
    right: auto;
    left: 10px;
  }

  .layout.rtl .sidebar.collapsed .menu>ul>.menu-item.sub-menu>.sub-menu-list {
    margin-left: -3px !important;
  }`]
})
export class HelloComponent  {
  @Input() name: string;
}
