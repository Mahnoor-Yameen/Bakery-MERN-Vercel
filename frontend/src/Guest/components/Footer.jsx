import React from 'react'
import { AppRoute } from '../../App'


export default function Footer() {
  return (
    <>
    <div style={{backgroundColor:"#f9e0b7"}}>

      <footer className=''>

        <hr />

        {/* 2 sections hain */}
        {/* SECTION 1 */}
        <section>


          <div className="container pt-3 ">

            {/* ek row banai hui  */}
            <div className="row">

              {/* ROW COL 1 */}
              <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 d-flex flex-column align-items-center justify-content-center mb-4">
                <img
                  className="footer-logo mb-3 img-fluid rounded-circle"
                  src="https://freedesignfile.com/upload/2021/08/Bakery-logo-vector.jpg"
                  alt=""
                />
                <div>

                  {/* yahan icons lagy huay hain  */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={25}
                    height={25}
                    fill="currentColor"
                    className="bi bi-globe ms-1 me-1"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855A7.97 7.97 0 0 0 5.145 4H7.5V1.077zM4.09 4a9.267 9.267 0 0 1 .64-1.539 6.7 6.7 0 0 1 .597-.933A7.025 7.025 0 0 0 2.255 4H4.09zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a6.958 6.958 0 0 0-.656 2.5h2.49zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5H4.847zM8.5 5v2.5h2.99a12.495 12.495 0 0 0-.337-2.5H8.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5H4.51zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5H8.5zM5.145 12c.138.386.295.744.468 1.068.552 1.035 1.218 1.65 1.887 1.855V12H5.145zm.182 2.472a6.696 6.696 0 0 1-.597-.933A9.268 9.268 0 0 1 4.09 12H2.255a7.024 7.024 0 0 0 3.072 2.472zM3.82 11a13.652 13.652 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5H3.82zm6.853 3.472A7.024 7.024 0 0 0 13.745 12H11.91a9.27 9.27 0 0 1-.64 1.539 6.688 6.688 0 0 1-.597.933zM8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855.173-.324.33-.682.468-1.068H8.5zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.65 13.65 0 0 1-.312 2.5zm2.802-3.5a6.959 6.959 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5h2.49zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7.024 7.024 0 0 0-3.072-2.472c.218.284.418.598.597.933zM10.855 4a7.966 7.966 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4h2.355z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={25}
                    height={25}
                    fill="currentColor"
                    className="bi bi-google ms-1 me-1"
                    viewBox="0 0 16 16"
                  >
                    <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={25}
                    height={25}
                    fill="currentColor"
                    className="bi bi-pinterest ms-1 me-1"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 0a8 8 0 0 0-2.915 15.452c-.07-.633-.134-1.606.027-2.297.146-.625.938-3.977.938-3.977s-.239-.479-.239-1.187c0-1.113.645-1.943 1.448-1.943.682 0 1.012.512 1.012 1.127 0 .686-.437 1.712-.663 2.663-.188.796.4 1.446 1.185 1.446 1.422 0 2.515-1.5 2.515-3.664 0-1.915-1.377-3.254-3.342-3.254-2.276 0-3.612 1.707-3.612 3.471 0 .688.265 1.425.595 1.826a.24.24 0 0 1 .056.23c-.061.252-.196.796-.222.907-.035.146-.116.177-.268.107-1-.465-1.624-1.926-1.624-3.1 0-2.523 1.834-4.84 5.286-4.84 2.775 0 4.932 1.977 4.932 4.62 0 2.757-1.739 4.976-4.151 4.976-.811 0-1.573-.421-1.834-.919l-.498 1.902c-.181.695-.669 1.566-.995 2.097A8 8 0 1 0 8 0z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg ms-1 me-1"
                    width={25}
                    height={25}
                    fill="currentColor"
                    className="bi bi-skype"
                    viewBox="0 0 16 16"
                  >
                    <path d="M4.671 0c.88 0 1.733.247 2.468.702a7.423 7.423 0 0 1 6.02 2.118 7.372 7.372 0 0 1 2.167 5.215c0 .344-.024.687-.072 1.026a4.662 4.662 0 0 1 .6 2.281 4.645 4.645 0 0 1-1.37 3.294A4.673 4.673 0 0 1 11.18 16c-.84 0-1.658-.226-2.37-.644a7.423 7.423 0 0 1-6.114-2.107A7.374 7.374 0 0 1 .529 8.035c0-.363.026-.724.08-1.081a4.644 4.644 0 0 1 .76-5.59A4.68 4.68 0 0 1 4.67 0zm.447 7.01c.18.309.43.572.729.769a7.07 7.07 0 0 0 1.257.653c.492.205.873.38 1.145.523.229.112.437.264.615.448.135.142.21.331.21.528a.872.872 0 0 1-.335.723c-.291.196-.64.289-.99.264a2.618 2.618 0 0 1-1.048-.206 11.44 11.44 0 0 1-.532-.253 1.284 1.284 0 0 0-.587-.15.717.717 0 0 0-.501.176.63.63 0 0 0-.195.491.796.796 0 0 0 .148.482 1.2 1.2 0 0 0 .456.354 5.113 5.113 0 0 0 2.212.419 4.554 4.554 0 0 0 1.624-.265 2.296 2.296 0 0 0 1.08-.801c.267-.39.402-.855.386-1.327a2.09 2.09 0 0 0-.279-1.101 2.53 2.53 0 0 0-.772-.792A7.198 7.198 0 0 0 8.486 7.3a1.05 1.05 0 0 0-.145-.058 18.182 18.182 0 0 1-1.013-.447 1.827 1.827 0 0 1-.54-.387.727.727 0 0 1-.2-.508.805.805 0 0 1 .385-.723 1.76 1.76 0 0 1 .968-.247c.26-.003.52.03.772.096.274.079.542.177.802.293.105.049.22.075.336.076a.6.6 0 0 0 .453-.19.69.69 0 0 0 .18-.496.717.717 0 0 0-.17-.476 1.374 1.374 0 0 0-.556-.354 3.69 3.69 0 0 0-.708-.183 5.963 5.963 0 0 0-1.022-.078 4.53 4.53 0 0 0-1.536.258 2.71 2.71 0 0 0-1.174.784 1.91 1.91 0 0 0-.45 1.287c-.01.37.076.736.25 1.063z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={25}
                    height={25}
                    fill="currentColor"
                    className="bi bi-youtube ms-1 me-1"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z" />
                  </svg>
                </div>
              </div>

              {/* ROW COL 2 */}
              <div className="col-0 col-sm-0 col-md-3 col-lg-3 col-xl-3 d-none d-sm-none d-md-inline">
                <h3>Support:</h3>
                <p>
                  <a
                    className="text-decoration-none footer-anchors"
                    href=""
                    target="_blank"
                  >
                    {" "}
                    Contact Us{" "}
                  </a>
                </p>
                <p>
                  <a
                    className="text-decoration-none footer-anchors"
                    href=""
                    target="_blank"
                  >
                    {" "}
                    Become Partner{" "}
                  </a>
                </p>
                <p>
                  <a
                    className="text-decoration-none footer-anchors"
                    href=""
                    target="_blank"
                  >
                    {" "}
                    Locate a Dealer{" "}
                  </a>
                </p>
                <p>
                  <a
                    className="text-decoration-none footer-anchors"
                    href=""
                    target="_blank"
                  >
                    {" "}
                    Product Registration
                  </a>
                </p>
                <p></p>
                <p>
                  <a
                    className="text-decoration-none footer-anchors"
                    href=""
                    target="_blank"
                  >
                    {" "}
                    Complaints{" "}
                  </a>
                </p>
                <p>
                  <a
                    className="text-decoration-none footer-anchors"
                    href=""
                    target="_blank"
                  >
                    {" "}
                    Future Updates{" "}
                  </a>
                </p>
              </div>

              {/* ROW COL 3 */}
              <div className="col-0 col-sm-6 col-md-3 col-lg-3 col-xl-3 d-none d-sm-inline">
                <h3>Sweet Bakery:</h3>
                <p>
                  <a
                    className="text-decoration-none footer-anchors"
                    href=""
                    target="_blank"
                  >
                    {" "}
                    FAQ{" "}
                  </a>
                </p>
                <p>
                  <a
                    className="text-decoration-none footer-anchors"
                    href=""
                    target="_blank"
                  >
                    {" "}
                    Our Mission{" "}
                  </a>
                </p>
                <p>
                  <a
                    className="text-decoration-none footer-anchors"
                    href=""
                    target="_blank"
                  >
                    {" "}
                    History{" "}
                  </a>
                </p>
                <p>
                  <a
                    className="text-decoration-none footer-anchors"
                    href=""
                    target="_blank"
                  >
                    {" "}
                    Terms &amp; Policy{" "}
                  </a>
                </p>
                <p>Address:</p>
                <address>
                  Disney Toy Mills Ltd. Plot No.HH-79, Landhi Industrial Area, Landhi,
                  Karachi, Pakistan.
                </address>
              </div>

              {/* ROW COL 4 */}
              <div className="col-12 col-sm-6 col-md-3 col-lg-3 col-xl-3 d-flex flex-column align-items-center">
                <h3>Thank you for visiting our website:</h3>
                {/* <input
                  className="update-input my-1"
                  type="text"
                  placeholder="   Name"
                />
                <input
                  className="update-input my-1"
                  type="text"
                  placeholder="   Email"
                />
                <button
                  type="button"
                  className="btn btn-outline-info subscribe-button"
                >
                  Subscribe{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    fill="currentColor"
                    className="bi bi-send"
                    viewBox="0 0 16 16"
                  >
                    <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z" />
                  </svg>
                </button> */}
              </div>
            </div>
          </div>
          <hr />
        </section>

        {/* SECTION 2 */}

        <section>
          <div className="d-flex justify-content-center align-items-center">
            <p>All Rights Reserved</p>
          </div>
        </section>
      </footer>


      </div>

    </>
  )
}
