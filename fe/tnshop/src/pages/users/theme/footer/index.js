import {memo} from "react";
import"./style.scss";
import { Link } from "react-router-dom";
import { AiOutlineAccountBook, AiOutlineFacebook, AiOutlineInstagram, AiOutlineLinkedin } from "react-icons/ai";
//import Header from "../header";

const Footer = () => {
    return <footer className="footer">
        <div className="container">
            <div className="row">
                <div className="col-lg-3">
                    <div className="footer_about">
                        <h1 className="footer_about_logo">HELLO</h1>
                        <ul>
                            <li>Dia chi: 46 le van chi</li>
                            <li>Phone: +84959893491849</li>
                            <li>Email: Helo12@jdhadh</li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="footer_widget">
                        <h6>Cua hang</h6>
                        <ul>
                            <li>
                                <Link to="">Lien he</Link>
                            </li>
                            <li>
                                <Link to="">Lien he 1</Link>
                            </li>
                            <li>
                                <Link to="">Lien he 2</Link>
                            </li>
                        </ul>

                        <ul>
                            <li>
                                <Link to="">Lien he 3</Link>
                            </li>
                            <li>
                                <Link to="">Lien he 4</Link>
                            </li>
                            <li>
                                <Link to="">Lien he 5</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-3">
                    <div className="footer_widget">
                        <h6>Khuyen mai va uu dai</h6>
                        <p> Dang ky nhan thong tin</p>
                        <form action="#">
                            <div>
                                <input typy="text" placeholder="Nhap email" />
                                <button type="submit" className="button-submit">
                                    Dang ky
                                </button>
                            </div>
                            <div className="footer_widget_social">
                                <div>
                                    <AiOutlineFacebook />
                                </div>
                                <div>
                                    <AiOutlineInstagram />
                                </div>
                                <div>
                                    <AiOutlineLinkedin />
                                </div>

                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </footer>    
};

export default memo(Footer);