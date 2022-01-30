import Head from 'next/head';
import Navbar from "../components/Navbar";
import Image from "next/image";
import nikej2 from "../public/static/img/nikej2.jpg"
import nike from "../public/static/img/nikee.png";
export default function Home() {

  return (
    <>
      <Head>
        <title>YEBOX</title>
      </Head>
      <Navbar />
      <section>
        <div className="container-fluid row">

          <div className="bg-blur"></div>
          <div className="col-lg-6 col-md-12 col-sm-12 spacing">
            <p className="d-flex justify-content-start fw-bold">$120</p>
            <h1 className="d-flex justify-content-start">NIKE WINDRUNNER WILD RUN</h1>
            <small className="d-flex justify-content-start fw-bold">MEN&apos;S RUNNING JACKET</small>
            <hr></hr>
            <p className="d-flex justify-content-start fw-normal desc pb-3">An icon gets remixed. The Nike Windrunner jacket has a color blocked cheveron front panel. It&apos;s design is water-repellent and easily packs up into itself for life on the go. This product is made with at least 50% recycled polyester.</p>

            <p className="fs-6 fw-bold size">SELECT SIZE</p>

            <div className="d-flex flex-row bd-highlight mb-5">
              <div className="px-3 pt-2 pb-2 bd-highlight border border-1">S</div>
              <div className="px-3 pt-2 pb-2 bd-highlight border border-2 border-dark">M</div>
              <div className="px-3 pt-2 pb-2 bd-highlight border border-1">L</div>
              <div className="px-3 pt-2 pb-2 bd-highlight border border-1">XL</div>
              <div className="px-3 pt-2 pb-2 bd-highlight border border-1">2XL</div>
              <small className="pt-2 fw-bold text-dark">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SIZE GUIDE</small>
            </div>

            <div className="d-flex flex-row bd-highlight pt-5 text-white">
              <div className="px-3 pt-3 pb-3 bg-secondary"><i className="fas fa-shopping-cart"></i> </div>
              <div className="px-3 pt-3 pb-3 bd-highlight border-dark bg-dark fs-6"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ADD TO CART &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
              <div className="px-3 pt-3 pb-3 bd-highlight bg-dark"><small>$120</small></div>
            </div>

          </div>

          <div className="col-lg-3 col-md-12 col-sm-12">

          </div>

          <div className="col-lg-3 col-md-12 col-sm-12 border-start bg-white">
            <div>
              <span className="dot shadow">
                <i className="fas fa-play"></i>
              </span>
              <Image src={nikej2} alt="second jacket" />
            </div>
            <div className="d-flex px-5">
              <div className="col-lg-6 col-md-12 col-sm-12 text-start fw-bold">Share +</div>
              <div className="col-lg-6 col-md-12 col-sm-12 text-end"><Image src={nike} alt="logo" width={42} height={42} /></div>
            </div>
            <div className="px-5">
              <h6 className="fw-bold">Run Wild</h6>
              <p className="fs-6">This season&apos;s Wild Run collection nods to the disruptors in Running. It features bold colors and color-blocked panels. The panels are randomly cut, making each style unique.</p>

              <small>Read More</small>
            </div>
          </div>

        </div>
      </section>

    </>

  )
}
