import React from 'react'
import { Icons } from './icon'
import { Icons1s } from './icon'
import { Icons2s } from './icon'
import { Icons3s } from './icon'
import { Icons4s } from './icon'
import { Icons5s } from './icon'
import { Icons6s } from './icon'
import { Icon1a } from './icon'
import { Icon2a } from './icon'
import { Icon3a } from './icon'
import { Icon1f } from './icon'
import { Icon2f } from './icon' 
import {Icon3f} from './icon'
import imgher1s from '../assets/image/webp/imgher1s.webp'
import Vector1s from '../assets/image/webp/Vector1s.webp'
import Vector2s from '../assets/image/webp/Vector2s.webp'
import Vector3s from '../assets/image/webp/Vector3s.webp'
import Vector4s from '../assets/image/webp/Vector4s.webp'
import Img1s from '../assets/image/png/bg-green-color-pic.png'
import Img2s from '../assets/image/png/section3pic.png'
import Img3s from '../assets/image/png/green-box.png'
import Img4s from '../assets/image/png/main-img.png'


const Navbar = () => {
    return (
        <div>
            {/* navbar  */}
            <header className="bg_color">
                <nav>
                    <div className="container">
                        <div className="d-flex align-items-center justify-content-between py-4">
                            <h1 className="ff-gilroy-bold color-green fs-xls zindex">B<span className="color-orange">.</span>Th</h1>
                            <ul id="navbar"
                                className="d-flex align-items-center justify-content-center gap-5 mb-0 px-0 navbar_jav w-100 ">
                                <li><a href="#why"
                                    className="ff_primary fs_sm fw_medium primary_color position-relative undrline_nav">About
                                    Us</a></li>
                                <li><a href="#choose"
                                    className="ff_primary fs_sm fw_medium primary_color position-relative undrline_nav">Features</a>
                                </li>
                                <li><a href="#available"
                                    className="ff_primary fs_sm fw_medium primary_color position-relative undrline_nav">How it
                                    works</a></li>
                                <li><a href="#ready"
                                    className="ff_primary fs_sm fw_medium primary_color position-relative undrline_nav">Support</a>
                                </li>
                                <li><a href="#"
                                    className="ff_primary white_color fs_sm fw-bold btn_download d-lg-none position-relative undline_nav">Download</a>
                                </li>
                            </ul>
                            <span className=""><a href="#" className="ff_primary white_color fs_sm fw-bold btn_download d-none d-lg-block">Download</a></span>

                            <label for="checkbox" id="menu" onclick="opennav()">
                                <span></span>
                                <span className="icon1"></span>
                                <span></span>
                            </label>
                        </div>
                    </div>
                </nav>
            </header>
            {/*  section-1st (save time) */}
            <section className="bg_color position-relative overflow-x-hidden overflow-y-hidden">
                <div className="container py-lg-5">
                    <div className="row py-md-5  align-items-center">
                        <div className="col-12 col-lg-6 order-1 order-lg-0 pt-150">
                            <p className="d-none d-lg-block ff_primary primary_color fs_xxls fw-bold text-center text-lg-start">Save
                                Time and Start <span className="d-lg-block">Digital
                                    Wallet!</span></p>
                            <p className="d-none d-lg-block ff_primary fw_medium fs_md secondary_color">A Lorem Ipsum is simply
                                dummy text of the printing and <span className="d-lg-block">typesetting
                                    industry. Lorem Ipsum has been the industry's</span></p>

                            <div className="row flex-column-reverse flex-md-row align-items-center align-items-md-start">
                                <div className="col-12 col-md-6 d-flex flex-column align-items-center">
                                    <button className="ff_primary fs_sm fw-bold white_color btn_get ">Get Started</button>
                                    <div className="d-flex pt-4 justify-content-center">
                                        <span>
                                            <p className="ff_primary fs_xls fw_bold dark_color pls_hover">1.9k+</p>
                                            <p className=" ff_primary secondary_color fs_sm fw_medium ">Active Users</p>
                                        </span>
                                        <span className="ps-5">
                                            <p className="ff_primary fs_xls fw_bold dark_color pls_hover">20+</p>
                                            <p className=" ff_primary secondary_color fs_sm fw_medium wht-sps">New Features</p>
                                        </span>
                                    </div>
                                </div>
                                <div className="col-12 col-md-6 d-flex justify-content-center">
                                    <Icons />
                                    <p className="ff_primary primary_color fs_sm fw_bold mb-0 mt-3 ms-3">Watch Video</p>
                                </div>

                            </div>
                        </div>
                        <div className="col-12 col-lg-6 order-0">
                            <p className="d-lg-none ff_primary primary_color fs_xxls fw-bol">Save Time and Start <span
                                className="d-lg-block">Digital Wallet!</span></p>
                            <p className="d-lg-none ff_primary fw_medium fs_md secondary_color">A Lorem Ipsum is simply dummy text
                                of the printing and <span className="d-lg-block">typesetting
                                    industry. Lorem Ipsum has been the industry's</span></p>
                            <div className="position-absolute end-0 img_grp">
                                <img src={imgher1s} alt="#" className='w-100 img_header' />
                            </div>

                        </div>
                    </div>
                </div>

            </section>

            {/* section-2nd (Recommended By)  */}
            <section className="bg_color overflow-x-hidden">
                <div className="container">
                    <div className="py-5">
                        <h3>Recommended By</h3>
                    </div>
                    <div className="sliderss1 row align-items-center px-0">
                        <div className="col-6 col-md-3">
                            <img src={Vector1s} alt="#" className='imgv1 mx_width w-100' />
                        </div>
                        <div class="col-6 col-md-3">
                            <img src={Vector2s} alt="#" className='imgv1  mx_width w-100' />
                        </div>
                        <div class="col-6 col-md-3 mt-4 mt-md-0">
                            <img src={Vector3s} alt="#" className='imgv1  mx_width w-100' />
                        </div>
                        <div class="col-6 col-md-3 mt-4 mt-md-0">
                            <img src={Vector4s} alt="#" className='imgv1  mx_width w-100' />
                        </div>
                    </div>
                </div>
            </section>

            {/* section-3rd (Why Choose Us)  */}
            <section className="bg_color py-5 overflow-x-hidden" id="why">
                <div className="container">
                    <div className="d-flex flex-column align-items-center justify-content-center text-center">
                        <p className="fs_xxl fw_bold ff_primary primary_color">Why Choose Us</p>
                        <p className="ff_primary secondary_color fs_md fw_medium">A Lorem Ipsum is simply dummy text of the printing
                            and typesetting <span className="d-lg-flex">industry. Lorem Ipsum has been the industry's
                                standard dummy text</span> ever since the 1500s.</p>
                    </div>
                </div>
                <div className="row pt-5">
                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="cards d-flex flex-column justify-content-center align-items-center">
                            <Icons1s/>
                            <p className="ff_primary primary_color fs_lg fw_bold pt-3">Digital Saving</p>
                            <p className="fs_sm fw_regular ff_primary secondary_color text-center">A Lorem Ipsum is simply dummy
                                text <span className="d-xxl-block">of the printing and typesetting</span>industry</p>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 mt-4 mt-md-0">
                        <div className="cards d-flex flex-column justify-content-center align-items-center">
                            <Icons2s/>
                            <p className="ff_primary primary_color fs_lg fw_bold pt-3">Online Investment</p>
                            <p className="fs_sm fw_regular ff_primary secondary_color text-center">A Lorem Ipsum is simply dummy
                                text <span className="d-xxl-block">of the printing and typesetting</span>industry</p>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 mt-4 mt-lg-0">
                        <div className="cards d-flex flex-column justify-content-center align-items-center">
                            <Icons3s/>
                            <p className="ff_primary primary_color fs_lg fw_bold pt-3">Secure and Fast</p>
                            <p className="fs_sm fw_regular ff_primary secondary_color text-center">A Lorem Ipsum is simply dummy
                                text <span className="d-xxl-block">of the printing and typesetting</span>industry</p>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 mt-4">
                        <div className="cards d-flex flex-column justify-content-center align-items-center">
                            < Icons4s/>
                            <p className="ff_primary primary_color fs_lg fw_bold pt-3">Purchase via Cards</p>
                            <p className="fs_sm fw_regular ff_primary secondary_color text-center">A Lorem Ipsum is simply dummy
                                text <span className="d-xxl-block">of the printing and typesetting</span>industry</p>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 mt-4">
                        <div className="cards d-flex flex-column justify-content-center align-items-center">
                            <Icons5s/>
                            <p className="ff_primary primary_color fs_lg fw_bold pt-3">Instant and fee-free
                                <span className="d-lg-block">transaction</span>
                            </p>
                            <p className="fs_sm fw_regular ff_primary secondary_color text-center">A Lorem Ipsum is simply dummy
                                text <span className="d-xxl-block">of the printing and typesetting</span>industry</p>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 mt-4">
                        <div className="cards d-flex flex-column justify-content-center align-items-center">
                            <Icons6s/>
                            <p className="ff_primary primary_color fs_lg fw_bold pt-3">Secure and Fast</p>
                            <p className="fs_sm fw_regular ff_primary secondary_color text-center">A Lorem Ipsum is simply dummy
                                text <span className="d-xxl-block">of the printing and typesetting</span>industry</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* section-choose  */}
            <section id="choose" className="bg_color position-relative">
                <img src={Img1s} alt="#" className='bg-position2' />
                <div className="container py-5">
                    <div className="row  align-items-center">
                        <div className="col-12 col-lg-6 order-first order-lg-first position-relative z-3">
                            <img src={Img2s} alt="#" className='w-100 position-relative z-3' />
                        </div>
                        <div className="col-12 col-lg-6 my-5 my-lg-0">
                            <h1 className="fs_XXl fw-bold ff-gilroy-bold">Choose and Convert your Wallet Anytime!</h1>
                            <p className="fs-sm fw_medium ff-gilroy-light py-4">A Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the
                                1500s, when an unknown.
                                A Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                            <span className=" align-items-center d-flex justify-content-center justify-content-lg-start">
                                <button className="connectwallet_btn fs-md fw-bold text_color ff-gilroy-bold">Choose your
                                    wallet</button>
                            </span>
                        </div>
                    </div>
                </div>
            </section>

            {/* section-available  */}
            <section id="available" className="bg_color position-relative">
                <img src={Img3s} alt="#" className='bg-position ' />
                <div className="container py-5">
                    <div className="row  align-items-center">
                        <div className="col-12 col-lg-6 order-last order-lg-first position-relative z-3 my-5 my-lg-0">
                            <h1 className="fs_XXl fw-bold ff-gilroy-bold">Available and Download Anytime!</h1>
                            <p className="fs-sm fw_medium ff-gilroy-light py-4">A Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry. Lorem Ipsum has been
                                the industry's standard.</p>
                            <div className="d-block">
                                <div
                                    className="flex-column align-items-center d-flex flex-sm-row justify-content-center justify-content-lg-start">
                                    <div className="play-store-box">
                                        <div className="d-flex ">
                                            <Icon1a/>
                                            <div>
                                                <h1 className="ff-gilroy-light fs-8 white_color fw_regular m-0">GET IN ON</h1>
                                                <Icon2a/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="play-store-box mx-sm-4 my-4">
                                        <div className="d-flex ">
                                            <div className="me-3"> 
                                                <Icon3a/>
                                            </div>
                                            <div>
                                                <h1 className="ff-gilroy-light fs-8 white_color fw_regular m-0">Download on the</h1>
                                                <p className="ff-gilroy-light white_color fw_bold fs-16 m-0">App Store</p>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div class="col-12 col-lg-6 ">
                            <img src={Img4s} alt="#" className='w-100 position-relative z-3' />
                        </div>
                    </div>
                </div>
            </section>

            {/* section-ready  */}
            <section id="ready" className="bg-pic">
                <div className="container">
                    <div className=" justify-content-center">
                        <div className="d-flex text-center justify-content-center flex-column ">
                            <h1 className="py-4 fs_xxl white_color fw_bold ff-gilroy-bold">Ready to get updated?</h1>
                            <div>
                                <p className="m-0 ff-gilroy-light fs_md tertiary_color fw_medium">A Lorem Ipsum is simply dummy
                                    text
                                    of the printing and typesetting industry. Lorem Ipsum has
                                    been the
                                    industry's standard.</p>
                            </div>
                            <div className="d-flex flex-column  flex-lg-row align-items-center py-5 justify-content-center">
                                <input className=" white_color input-property ff-gilroy-light fs_sm fw_regular" type="text"
                                    placeholder="Email Address" />
                                <button
                                    className="ff-gilroy-bold fs_md fw_bold submit-btn white_color m-l-5 my-3 my-lg-0">Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
             {/* footer  */}
            <footer>
                <div className="container">
                    <div className="footer-section">
                        <div className="row">
                            <div className="col-12 col-lg-6 order-last order-lg-first ">
                                <h1 className="ff-gilroy-bold color-green fs-62">B<span className="color-orange">.</span>Th</h1>
                                <p className="ff-gilroy-light secondary_color fs_md fw_medium ">A Lorem Ipsum is simply dummy text
                                    of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.</p>
                                <div className="d-flex gap-3 align justify-content-center justify-content-lg-start">
                                    <a href="#">
                                        < Icon1f/>
                                    </a>
                                    <a href="#">
                                        <Icon2f/>
                                    </a>
                                    <a href="#">
                                        <Icon3f/>
                                    </a>
                                </div>
                            </div>
                            <div className="col-12 col-lg-6">
                                <div className="row py-3 py-lg-0 text-center text-lg-start">
                                    <div className="col-12 col-md-6 justify-content-center d-flex py-2 py-lg-0">
                                        <ul>
                                            <li className="py-2"><a href=""
                                                className="ff-gilroy-bold fw_bold fs_lg primary_color  p-lg-0 ">About Us</a>
                                            </li>
                                            <li className="py-2"><a href=""
                                                className="ff-gilroy-light secondary_color fs_md fw_regular line">Whitepaper</a>
                                            </li>
                                            <li className="py-2"><a href=""
                                                className="ff-gilroy-light secondary_color fs_md fw_regular line">Blog</a></li>
                                            <li className="py-2"><a href=""
                                                className="ff-gilroy-light secondary_color fs_md fw_regular  line">Activity</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="col-12 col-md-6 justify-content-center d-flex py-2  py-lg-0">
                                        <ul className="white_s_nowwrap ">
                                            <li className="py-2"><a href=""
                                                className="ff-gilroy-bold fw_bold fs_lg primary_color py-3 position-relative">Support</a>
                                            </li>
                                            <li className="py-2"><a href=""
                                                className="ff-gilroy-light secondary_color fs_md fw_regular py-2 line">Help &
                                                Support</a>
                                            </li>
                                            <li className="py-2"><a href=""
                                                className="ff-gilroy-light secondary_color fs_md fw_regular py-2 line">Community</a>
                                            </li>
                                            <li className="py-2"><a href=""
                                                className="ff-gilroy-light secondary_color fs_md fw_regular py-2 line">Author
                                                Profile</a>
                                            </li>
                                            <li className="py-2"><a href=""
                                                className="ff-gilroy-light secondary_color fs_md fw_regular py-2 line">Contact</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <h1
                    className="ff-gilroy-light fw_regular  secondary_color fs_md align-content-center justify-content-center d-flex py-2">
                    All rights reserved@2021</h1>
            </footer>
        </div>
    )
}

export default Navbar