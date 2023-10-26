import { Link } from 'react-router-dom'
import {memo, useState} from "react";
import"./style.scss";
import { 
    AiOutlineFacebook,  
    AiOutlineInstagram, 
    AiOutlineMail, 
    AiOutlineUser, 
    AiOutlineShoppingCart 
} from "react-icons/ai";
import { formatter } from 'utils/fomater';
import {ROUTERS} from "utils/router"

const Header = () => {

    const [menus, setMenus] = useState([
        {
            name: "Trang chu",
            path: ROUTERS.USER.HOME,
        },
        {
            name: "Chi nhanh",
            path: ROUTERS.USER.CN,
        },
        {
            name: "San pham",
            path: "",
            isShowSubmenu:false,
            child: [
                {
                    name: "Dell",
                    path: "",
                },
                {
                    name: "Asus",
                    path: "",
                },
                {
                    name: "Msi",
                    path: "",
                },
            ]
        },
    ])
    return (
        <>
            <div className="header_top">
            <div className="container">
                <div className="row">
                    <div className="col-6 header_top_left">
                        <ul>
                            <li>
                                <AiOutlineMail />
                                hello@gmail.com
                            </li>
                            <li>
                                Mien phi don hang tu {formatter(200000)}
                            </li>
                        </ul>
                    </div> 
                    <div className="col-6 header_top_right">
                        <ul>
                            <li>
                                <Link to={""}>
                                    <AiOutlineFacebook />
                                </Link>
                            </li>
                            <li>
                                <Link to={""}>
                                    <AiOutlineInstagram />
                                </Link>
                            </li>

                            <li>
                                <Link to={""}>
                                <AiOutlineUser/>
                                </Link>
                                <span>Dang nhap</span>
                            </li>
                        </ul>
                    </div> 
                </div>    
            </div>
            </div> 
            <div className="container">
                <div className="row">
                    <div className="col-xl-3 "> 
                        <div className="header__logo">
                            <h1>HELLO</h1>
                        </div>
                    </div>
                    <div className="col-xl-6 "> 
                        <nav className="header_menu">
                            <ul>
                                {
                                    menus?.map((menu, menuKey) => (
                                        <li key={menuKey} className={menuKey === 0 ? "active" : ""}>
                                            <Link to={menu?.path}> {menu?.name}</Link>
                                            {
                                                menu.child && (
                                                    <ul className="header_menu_dropdown">
                                                        {
                                                            menu.child.map((childItem, childKey) => (
                                                                <li key={`${menuKey}-${childKey}`}>
                                                                    <Link to={childItem.path}> {childItem.name}  </Link>
                                                                </li>
                                                            ))}
                                                        
                                                    </ul>
                                                )
                                            }
                                        </li>
                                    ))}
                            </ul>
                        </nav>
                    
                    </div>

                    <div className="col-xl-3 "> 
                        <div className="header_cart">
                            <div className="header_cart_price">
                                <span>{formatter(120000)}</span>
                            </div>
                            <ul>
                            <li>
                                <Link to="#">
                                    <AiOutlineShoppingCart /> <span>5</span>
                                </Link>
                            </li>
                        </ul>
                        </div>
                    </div>
                </div>
            </div> 
        </>  
    );
};

export default memo(Header);