import Link from "next/link";
import Image from "next/image";
import { useRouter } from 'next/router';
import landsdata from "./landsdata";
import building from "../public/static/img/building.png";
import nike from "../public/static/img/nikee.png";

export default function Navbar() {
    const router = useRouter();
    return (
        <>

            <header className="border-bottom">
                <div className="container">
                    <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">

                        <i className="fas fa-grip-lines fa-2x"></i> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                        {/* <hr className="vr border-5 border-dark" /> */}

                        <div className="border-start border-end border-secondary d-flex align-items-center mb-2 mb-lg-0 text-dark text-decoration-none">
                            &nbsp;&nbsp;&nbsp;<Image src={nike} alt="logo" width={52} height={52} />&nbsp;&nbsp;&nbsp;
                        </div>

                        <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                            <li><a href="#" className="nav-link px-2 link-dark fw-bold">&nbsp;&nbsp;&nbsp;&nbsp;NEW RELEASES</a></li>
                            <li><a href="#" className="nav-link px-2 link-dark fw-bold">CUSTOMIZE</a></li>
                            <li><a href="#" className="nav-link px-2 link-dark fw-bold">SALE</a></li>
                        </ul>

                        {/* <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
                            <input type="search" className="form-control" placeholder="Search..." aria-label="Search" />
                        </form> */}

                        <i className="col-lg-auto fas fa-bell"></i> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;



                        <i className="fas fa-heart position-relative colored"><span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-dark noti-font">
                            8
                            {/* <span className="visually-hidden">unread messages</span> */}
                        </span></i> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;


                        <i className="fas fa-shopping-cart"></i> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;


                        <div className="text-end leftborder">

                            &nbsp;&nbsp;&nbsp;&nbsp;<Image src={building} alt="mdo" width={32} height={32} className="rounded-circle border" />

                            <div className="badge text-wrap fw-normal" style={{ width: 100, color: "#000000", textAlign: "left" }}>
                                Hello<br /><span className="mt-2 fs-6 fw-bold">Nicholas</span>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* <nav className="navbar navbar-expand-lg navbar-light bg-white pt-4 pb-4">
                <div className="container">
                    <a className="navbar-brand" href="#">ZARMMAK REAL ESTATE</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-start" id="navbarNavAltMarkup">
                        <div className="navbar-nav">

                            <a className="nav-link" aria-current="page">NEW RELEASES &nbsp;&nbsp;&nbsp;</a>

                            <a className="nav-link" href="#">CUSTOMIZE &nbsp;&nbsp;&nbsp;</a>

                            <a className="nav-link" href="#">SALE &nbsp;&nbsp;&nbsp;</a>

                            <span className="navbar-text">
                                <Link href="/lands">
                                    <a className="btn btn-outline-primary btn-md position-relative">
                                        Lands for Sale
                                        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                            {landsdata.length}
                                            <span className="visually-hidden">unread messages</span>
                                        </span>
                                    </a>
                                </Link>
                            </span>
                        </div>
                    </div>
                </div>
            </nav> */}
        </>
    );
}