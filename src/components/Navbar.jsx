import React from 'react'
import { Icons } from './icon'
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
            <section class="bg_color overflow-x-hidden">
                <div class="container">
                    <div class="py-5">
                        <h3>Recommended By</h3>
                    </div>
                    <div class="sliderss1 row align-items-center px-0">
                        <div class="col-6 col-md-3">
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
            <section class="bg_color py-5 overflow-x-hidden" id="why">
                <div class="container">
                    <div class="d-flex flex-column align-items-center justify-content-center text-center">
                        <p class="fs_xxl fw_bold ff_primary primary_color">Why Choose Us</p>
                        <p class="ff_primary secondary_color fs_md fw_medium">A Lorem Ipsum is simply dummy text of the printing
                            and typesetting <span class="d-lg-flex">industry. Lorem Ipsum has been the industry's
                                standard dummy text</span> ever since the 1500s.</p>
                    </div>
                </div>
                <div class="row pt-5">
                    <div class="col-12 col-md-6 col-lg-4">
                        <div class="cards d-flex flex-column justify-content-center align-items-center">
                            <span><svg width="84" height="77" viewBox="0 0 84 77" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <rect width="84" height="77" rx="12" fill="#E6FDF6" />
                                <g clip-path="url(#clip0_1_400)">
                                    <path
                                        d="M58 53.1667C58 53.5204 57.8596 53.8595 57.6095 54.1096C57.3595 54.3596 57.0203 54.5001 56.6667 54.5001H27.3334C26.9798 54.5001 26.6406 54.3596 26.3906 54.1096C26.1405 53.8595 26 53.5204 26 53.1667C26 52.8131 26.1405 52.474 26.3906 52.2239C26.6406 51.9739 26.9798 51.8334 27.3334 51.8334H56.6667C57.0203 51.8334 57.3595 51.9739 57.6095 52.2239C57.8596 52.474 58 52.8131 58 53.1667ZM26.388 33.9027C26.1007 33.3698 25.9676 32.7674 26.0037 32.1631C26.0397 31.5587 26.2435 30.9764 26.592 30.4814C27.1617 29.6456 27.9246 28.9595 28.816 28.4814L38.8174 23.2761C39.8004 22.7649 40.8921 22.498 42 22.498C43.108 22.498 44.1997 22.7649 45.1827 23.2761L55.1827 28.4854C56.0741 28.9635 56.837 29.6496 57.4067 30.4854C57.7553 30.9804 57.959 31.5627 57.9951 32.1671C58.0311 32.7714 57.898 33.3738 57.6107 33.9067C57.3014 34.4918 56.8375 34.9809 56.2695 35.3206C55.7015 35.6603 55.0512 35.8377 54.3894 35.8334H54V46.5001H55.3334C55.687 46.5001 56.0261 46.6406 56.2762 46.8906C56.5262 47.1406 56.6667 47.4798 56.6667 47.8334C56.6667 48.187 56.5262 48.5262 56.2762 48.7762C56.0261 49.0263 55.687 49.1667 55.3334 49.1667H28.6667C28.3131 49.1667 27.9739 49.0263 27.7239 48.7762C27.4739 48.5262 27.3334 48.187 27.3334 47.8334C27.3334 47.4798 27.4739 47.1406 27.7239 46.8906C27.9739 46.6406 28.3131 46.5001 28.6667 46.5001H30V35.8334H29.6107C28.9483 35.8375 28.2974 35.6597 27.7291 35.3192C27.1608 34.9788 26.6969 34.4888 26.388 33.9027ZM32.6667 46.5001H36.6667V35.8334H32.6667V46.5001ZM39.3334 35.8334V46.5001H44.6667V35.8334H39.3334ZM51.3334 35.8334H47.3334V46.5001H51.3334V35.8334ZM28.7507 32.6667C28.8344 32.821 28.9589 32.9492 29.1106 33.0374C29.2622 33.1256 29.4353 33.1703 29.6107 33.1667H54.3894C54.5648 33.1703 54.7378 33.1256 54.8895 33.0374C55.0412 32.9492 55.1657 32.821 55.2494 32.6667C55.3103 32.5648 55.3398 32.4472 55.3341 32.3286C55.3284 32.21 55.2878 32.0957 55.2174 32.0001C54.8943 31.52 54.4603 31.1248 53.952 30.8481L43.952 25.6387C43.3494 25.326 42.6804 25.1627 42.0014 25.1627C41.3224 25.1627 40.6534 25.326 40.0507 25.6387L30.0507 30.8481C29.5427 31.1257 29.1087 31.5212 28.7854 32.0014C28.7148 32.0966 28.6739 32.2105 28.6677 32.3288C28.6616 32.4472 28.6904 32.5647 28.7507 32.6667Z"
                                        fill="#236E57" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_1_400">
                                        <rect width="32" height="32" fill="white" transform="translate(26 22.5)" />
                                    </clipPath>
                                </defs>
                            </svg>

                            </span>
                            <p class="ff_primary primary_color fs_lg fw_bold pt-3">Digital Saving</p>
                            <p class="fs_sm fw_regular ff_primary secondary_color text-center">A Lorem Ipsum is simply dummy
                                text <span class="d-xxl-block">of the printing and typesetting</span>industry</p>
                        </div>
                    </div>
                    <div class="col-12 col-md-6 col-lg-4 mt-4 mt-md-0">
                        <div class="cards d-flex flex-column justify-content-center align-items-center">
                            <span><svg width="84" height="77" viewBox="0 0 84 77" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <rect width="84" height="77" rx="12" fill="#FEEFEB" />
                                <g clip-path="url(#clip0_1_407)">
                                    <path
                                        d="M44.576 27.8333C45.6606 27.8344 46.7005 28.2657 47.4674 29.0326C48.2343 29.7995 48.6656 30.8394 48.6667 31.924C48.6667 32.2776 48.8072 32.6168 49.0572 32.8668C49.3073 33.1169 49.6464 33.2573 50 33.2573C50.3537 33.2573 50.6928 33.1169 50.9428 32.8668C51.1929 32.6168 51.3334 32.2776 51.3334 31.924V31.8333C51.3334 31.808 51.3334 31.7853 51.3334 31.76C51.2889 29.997 50.5575 28.321 49.2953 27.0894C48.033 25.8578 46.3396 25.1678 44.576 25.1667H43.3334V23.8333C43.3334 23.4797 43.1929 23.1406 42.9428 22.8905C42.6928 22.6405 42.3536 22.5 42 22.5C41.6464 22.5 41.3073 22.6405 41.0572 22.8905C40.8072 23.1406 40.6667 23.4797 40.6667 23.8333V25.1667H39.424C37.8204 25.1684 36.2697 25.7403 35.0491 26.7802C33.8284 27.8202 33.0174 29.2603 32.7609 30.8432C32.5044 32.4262 32.8192 34.0487 33.6491 35.4209C34.4789 36.793 35.7697 37.8254 37.2907 38.3333L40.6667 39.46V49.1667H39.424C38.3394 49.1656 37.2996 48.7343 36.5327 47.9674C35.7657 47.2004 35.3344 46.1606 35.3334 45.076C35.3334 44.7224 35.1929 44.3832 34.9428 44.1332C34.6928 43.8831 34.3536 43.7427 34 43.7427C33.6464 43.7427 33.3073 43.8831 33.0572 44.1332C32.8072 44.3832 32.6667 44.7224 32.6667 45.076V45.1667C32.6667 45.192 32.6667 45.2147 32.6667 45.24C32.7112 47.003 33.4425 48.679 34.7048 49.9106C35.967 51.1422 37.6604 51.8321 39.424 51.8333H40.6667V53.1667C40.6667 53.5203 40.8072 53.8594 41.0572 54.1095C41.3073 54.3595 41.6464 54.5 42 54.5C42.3536 54.5 42.6928 54.3595 42.9428 54.1095C43.1929 53.8594 43.3334 53.5203 43.3334 53.1667V51.8333H44.576C46.1796 51.8316 47.7303 51.2597 48.951 50.2198C50.1716 49.1798 50.9827 47.7397 51.2392 46.1568C51.4956 44.5738 51.1808 42.9513 50.351 41.5791C49.5211 40.207 48.2304 39.1746 46.7094 38.6667L43.3334 37.54V27.8333H44.576ZM45.8694 41.1947C46.7913 41.5015 47.5738 42.1265 48.077 42.9577C48.5801 43.7888 48.771 44.772 48.6154 45.7311C48.4598 46.6902 47.9679 47.5625 47.2278 48.192C46.4877 48.8215 45.5476 49.167 44.576 49.1667H43.3334V40.3493L45.8694 41.1947ZM40.6667 36.6507L38.1334 35.8053C37.2117 35.4986 36.4292 34.8738 35.9261 34.0429C35.4229 33.212 35.2318 32.2291 35.3871 31.2702C35.5423 30.3113 36.0338 29.439 36.7734 28.8093C37.513 28.1796 38.4526 27.8336 39.424 27.8333H40.6667V36.6507Z"
                                        fill="#F05830" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_1_407">
                                        <rect width="32" height="32" fill="white" transform="translate(26 22.5)" />
                                    </clipPath>
                                </defs>
                            </svg>

                            </span>
                            <p class="ff_primary primary_color fs_lg fw_bold pt-3">Online Investment</p>
                            <p class="fs_sm fw_regular ff_primary secondary_color text-center">A Lorem Ipsum is simply dummy
                                text <span class="d-xxl-block">of the printing and typesetting</span>industry</p>
                        </div>
                    </div>
                    <div class="col-12 col-md-6 col-lg-4 mt-4 mt-lg-0">
                        <div class="cards d-flex flex-column justify-content-center align-items-center">
                            <span><svg width="84" height="77" viewBox="0 0 84 77" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <rect width="84" height="77" rx="12" fill="url(#paint0_linear_1_414)" />
                                <rect width="84" height="77" rx="12" fill="#E7E6EF" />
                                <g clip-path="url(#clip0_1_414)">
                                    <path
                                        d="M50.7747 25.3533L42.4214 22.568C42.1478 22.4769 41.8522 22.4769 41.5787 22.568L33.2254 25.3533C31.8972 25.7945 30.7419 26.643 29.9235 27.7782C29.1052 28.9135 28.6654 30.2778 28.6667 31.6773V38.4999C28.6667 48.5839 40.9334 54.1533 41.4587 54.3853C41.6291 54.461 41.8135 54.5001 42 54.5001C42.1865 54.5001 42.3709 54.461 42.5414 54.3853C43.0667 54.1533 55.3333 48.5839 55.3333 38.4999V31.6773C55.3346 30.2778 54.8949 28.9135 54.0765 27.7782C53.2581 26.643 52.1028 25.7945 50.7747 25.3533ZM52.6667 38.4999C52.6667 45.7733 44.2414 50.5439 42 51.6853C39.756 50.5479 31.3334 45.7919 31.3334 38.4999V31.6773C31.3334 30.8377 31.5977 30.0193 32.0888 29.3383C32.5798 28.6572 33.2727 28.1479 34.0694 27.8826L42 25.2386L49.9307 27.8826C50.7273 28.1479 51.4202 28.6572 51.9113 29.3383C52.4023 30.0193 52.6666 30.8377 52.6667 31.6773V38.4999Z"
                                        fill="url(#paint1_linear_1_414)" />
                                    <path
                                        d="M46.4 33.5666L40.816 39.1666L37.824 36.0466C37.7039 35.9154 37.5588 35.8094 37.3971 35.7351C37.2355 35.6608 37.0606 35.6196 36.8828 35.6139C36.705 35.6082 36.5278 35.6381 36.3617 35.702C36.1957 35.7658 36.044 35.8622 35.9158 35.9855C35.7876 36.1089 35.6853 36.2566 35.6151 36.4201C35.5449 36.5835 35.508 36.7594 35.5068 36.9373C35.5056 37.1152 35.54 37.2916 35.608 37.456C35.6759 37.6204 35.7761 37.7696 35.9027 37.8946L38.9773 41.0946C39.2066 41.3423 39.4838 41.5409 39.792 41.6784C40.1003 41.8159 40.4332 41.8895 40.7707 41.8946H40.8147C41.1454 41.8957 41.4731 41.8311 41.7786 41.7045C42.0842 41.578 42.3616 41.392 42.5947 41.1573L48.2907 35.4613C48.4151 35.3372 48.5138 35.1897 48.5812 35.0274C48.6487 34.8651 48.6835 34.6911 48.6836 34.5154C48.6838 34.3396 48.6494 34.1656 48.5823 34.0031C48.5152 33.8407 48.4168 33.6931 48.2927 33.5686C48.1685 33.4442 48.0211 33.3455 47.8588 33.2781C47.6965 33.2106 47.5225 33.1758 47.3467 33.1757C47.171 33.1755 46.9969 33.2099 46.8345 33.277C46.672 33.3441 46.5244 33.4425 46.4 33.5666Z"
                                        fill="url(#paint2_linear_1_414)" />
                                </g>
                                <defs>
                                    <linearGradient id="paint0_linear_1_414" x1="74.5919" y1="56.9308" x2="-0.0740888"
                                        y2="34.6931" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#0C0059" />
                                        <stop offset="0.47069" stop-color="#15096B" />
                                        <stop offset="1" stop-color="#2C2289" />
                                    </linearGradient>
                                    <linearGradient id="paint1_linear_1_414" x1="52.3466" y1="46.1596" x2="27.8106"
                                        y2="40.5775" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#0C0059" />
                                        <stop offset="0.47069" stop-color="#15096B" />
                                        <stop offset="1" stop-color="#2C2289" />
                                    </linearGradient>
                                    <linearGradient id="paint2_linear_1_414" x1="47.2078" y1="39.6222" x2="36.3112"
                                        y2="35.1263" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#0C0059" />
                                        <stop offset="0.47069" stop-color="#15096B" />
                                        <stop offset="1" stop-color="#2C2289" />
                                    </linearGradient>
                                    <clipPath id="clip0_1_414">
                                        <rect width="32" height="32" fill="white" transform="translate(26 22.5)" />
                                    </clipPath>
                                </defs>
                            </svg>

                            </span>
                            <p class="ff_primary primary_color fs_lg fw_bold pt-3">Secure and Fast</p>
                            <p class="fs_sm fw_regular ff_primary secondary_color text-center">A Lorem Ipsum is simply dummy
                                text <span class="d-xxl-block">of the printing and typesetting</span>industry</p>
                        </div>
                    </div>
                    <div class="col-12 col-md-6 col-lg-4 mt-4">
                        <div class="cards d-flex flex-column justify-content-center align-items-center">
                            <span><svg width="84" height="77" viewBox="0 0 84 77" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <rect width="84" height="77" rx="12" fill="#ECF3F1" />
                                <g clip-path="url(#clip0_1_423)">
                                    <path
                                        d="M33.3333 45.1666C34.4379 45.1666 35.3333 44.2712 35.3333 43.1666C35.3333 42.0621 34.4379 41.1666 33.3333 41.1666C32.2288 41.1666 31.3333 42.0621 31.3333 43.1666C31.3333 44.2712 32.2288 45.1666 33.3333 45.1666Z"
                                        fill="#4F4F4F" />
                                    <path
                                        d="M51.3333 26.5H32.6667C30.8992 26.5021 29.2047 27.2052 27.955 28.455C26.7052 29.7047 26.0021 31.3992 26 33.1667L26 43.8333C26.0021 45.6008 26.7052 47.2953 27.955 48.545C29.2047 49.7948 30.8992 50.4979 32.6667 50.5H51.3333C53.1008 50.4979 54.7953 49.7948 56.045 48.545C57.2948 47.2953 57.9979 45.6008 58 43.8333V33.1667C57.9979 31.3992 57.2948 29.7047 56.045 28.455C54.7953 27.2052 53.1008 26.5021 51.3333 26.5ZM32.6667 29.1667H51.3333C52.3942 29.1667 53.4116 29.5881 54.1618 30.3382C54.9119 31.0884 55.3333 32.1058 55.3333 33.1667H28.6667C28.6667 32.1058 29.0881 31.0884 29.8382 30.3382C30.5884 29.5881 31.6058 29.1667 32.6667 29.1667ZM51.3333 47.8333H32.6667C31.6058 47.8333 30.5884 47.4119 29.8382 46.6618C29.0881 45.9116 28.6667 44.8942 28.6667 43.8333V35.8333H55.3333V43.8333C55.3333 44.8942 54.9119 45.9116 54.1618 46.6618C53.4116 47.4119 52.3942 47.8333 51.3333 47.8333Z"
                                        fill="#4F4F4F" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_1_423">
                                        <rect width="32" height="32" fill="white" transform="translate(26 22.5)" />
                                    </clipPath>
                                </defs>
                            </svg>

                            </span>
                            <p class="ff_primary primary_color fs_lg fw_bold pt-3">Purchase via Cards</p>
                            <p class="fs_sm fw_regular ff_primary secondary_color text-center">A Lorem Ipsum is simply dummy
                                text <span class="d-xxl-block">of the printing and typesetting</span>industry</p>
                        </div>
                    </div>
                    <div class="col-12 col-md-6 col-lg-4 mt-4">
                        <div class="cards d-flex flex-column justify-content-center align-items-center">
                            <span><svg width="84" height="77" viewBox="0 0 84 77" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <rect width="84" height="77" rx="12" fill="#FDEFEF" />
                                <path
                                    d="M34.6204 52.2124C34.3289 52.2123 34.0455 52.1168 33.8136 51.9403C33.5816 51.7639 33.4138 51.5163 33.336 51.2354C33.2581 50.9546 33.2744 50.6559 33.3823 50.3852C33.4903 50.1145 33.6839 49.8866 33.9337 49.7364C38.6577 46.8991 38.6577 40.8058 38.6577 37.1658C38.6577 36.1049 39.0791 35.0875 39.8293 34.3373C40.5794 33.5872 41.5968 33.1658 42.6577 33.1658C43.7186 33.1658 44.736 33.5872 45.4861 34.3373C46.2363 35.0875 46.6577 36.1049 46.6577 37.1658C46.6577 37.5194 46.5172 37.8585 46.2672 38.1086C46.0171 38.3586 45.678 38.4991 45.3244 38.4991C44.9708 38.4991 44.6316 38.3586 44.3816 38.1086C44.1315 37.8585 43.991 37.5194 43.991 37.1658C43.991 36.8121 43.8506 36.473 43.6005 36.223C43.3505 35.9729 43.0113 35.8324 42.6577 35.8324C42.3041 35.8324 41.965 35.9729 41.7149 36.223C41.4649 36.473 41.3244 36.8121 41.3244 37.1658C41.3244 41.0951 41.3244 48.4111 35.3057 52.0231C35.0986 52.1471 34.8618 52.2125 34.6204 52.2124ZM41.2377 54.1071C44.2804 51.0404 46.0577 46.7284 46.519 41.2791C46.5346 41.1043 46.5155 40.9281 46.4628 40.7607C46.4101 40.5933 46.3249 40.438 46.2121 40.3036C46.0992 40.1692 45.961 40.0584 45.8052 39.9775C45.6494 39.8967 45.4792 39.8474 45.3044 39.8324C45.1294 39.8145 44.9526 39.8319 44.7846 39.8838C44.6165 39.9356 44.4605 40.0207 44.3261 40.134C44.1916 40.2474 44.0813 40.3866 44.0017 40.5435C43.9222 40.7003 43.875 40.8716 43.863 41.0471C43.4484 45.9231 41.971 49.5804 39.3457 52.2218C39.0964 52.4727 38.957 52.8123 38.9581 53.166C38.9592 53.5197 39.1008 53.8585 39.3517 54.1078C39.6026 54.3571 39.9423 54.4965 40.296 54.4954C40.6496 54.4942 40.9884 54.3527 41.2377 54.1018V54.1071ZM48.171 53.8591C48.9798 52.5153 49.6533 51.0945 50.1817 49.6178C50.2922 49.2875 50.269 48.9271 50.1172 48.6137C49.9654 48.3002 49.697 48.0586 49.3693 47.9405C49.0417 47.8224 48.6809 47.8372 48.364 47.9817C48.0471 48.1262 47.7994 48.389 47.6737 48.7138C47.2043 50.0232 46.6067 51.2831 45.8897 52.4751C45.7988 52.6249 45.7384 52.7911 45.7117 52.9643C45.6851 53.1375 45.6928 53.3142 45.7345 53.4844C45.7761 53.6545 45.8509 53.8148 45.9545 53.9561C46.0582 54.0974 46.1886 54.2169 46.3384 54.3078C46.6409 54.4913 47.0039 54.5471 47.3476 54.463C47.5178 54.4213 47.6781 54.3465 47.8194 54.2429C47.9607 54.1393 48.0802 54.0089 48.171 53.8591ZM51.3244 45.4204C51.8183 42.6976 52.0417 39.9326 51.991 37.1658C51.9898 35.2768 51.4154 33.4327 50.3438 31.8772C49.2722 30.3216 47.7538 29.1278 45.9893 28.4535C44.2248 27.7793 42.2973 27.6563 40.4614 28.1008C38.6255 28.5453 36.9677 29.5364 35.707 30.9431C35.5843 31.0724 35.4887 31.2251 35.426 31.392C35.3632 31.5589 35.3346 31.7368 35.3418 31.915C35.349 32.0931 35.3919 32.2681 35.4679 32.4294C35.5439 32.5907 35.6515 32.7351 35.7844 32.8541C35.9172 32.9731 36.0725 33.0643 36.2412 33.1222C36.4099 33.1801 36.5884 33.2035 36.7663 33.1912C36.9443 33.1788 37.1179 33.1309 37.2769 33.0503C37.436 32.9697 37.5773 32.858 37.6924 32.7218C38.5928 31.7168 39.7769 31.0087 41.0883 30.691C42.3996 30.3734 43.7765 30.4611 45.037 30.9427C46.2974 31.4243 47.3821 32.2769 48.1476 33.3881C48.9131 34.4992 49.3234 35.8165 49.3244 37.1658C49.3736 39.7615 49.1672 42.3558 48.7084 44.9111C48.641 45.258 48.7142 45.6174 48.9117 45.9104C49.1092 46.2034 49.4149 46.406 49.7617 46.4738C49.8464 46.4907 49.9326 46.4992 50.019 46.4991C50.3279 46.4983 50.6269 46.3903 50.8649 46.1936C51.103 45.9969 51.2654 45.7236 51.3244 45.4204ZM35.991 37.1658C35.9907 36.7936 36.0214 36.4221 36.083 36.0551C36.1229 35.8784 36.1263 35.6955 36.093 35.5174C36.0598 35.3394 35.9907 35.17 35.8898 35.0196C35.789 34.8691 35.6585 34.7408 35.5065 34.6424C35.3544 34.5441 35.1839 34.4777 35.0053 34.4474C34.8268 34.4171 34.6439 34.4236 34.4679 34.4663C34.2919 34.509 34.1264 34.5871 33.9816 34.6959C33.8368 34.8046 33.7157 34.9418 33.6256 35.0989C33.5355 35.256 33.4784 35.4298 33.4577 35.6098C33.3697 36.1238 33.3251 36.6443 33.3244 37.1658C33.3244 43.3591 31.5297 46.4991 27.991 46.4991C27.6374 46.4991 27.2983 46.6396 27.0482 46.8896C26.7982 47.1397 26.6577 47.4788 26.6577 47.8324C26.6577 48.1861 26.7982 48.5252 27.0482 48.7752C27.2983 49.0253 27.6374 49.1658 27.991 49.1658C33.1497 49.1658 35.991 44.8991 35.991 37.1658ZM54.2577 53.7178C56.452 48.4833 57.4977 42.8389 57.3244 37.1658C57.3305 34.951 56.8288 32.7643 55.8577 30.7738C55.7811 30.6162 55.6742 30.4752 55.5431 30.3589C55.4121 30.2427 55.2594 30.1533 55.0938 30.0961C54.9282 30.0388 54.7529 30.0147 54.578 30.0252C54.4031 30.0357 54.232 30.0805 54.0744 30.1571C53.9168 30.2337 53.7758 30.3406 53.6596 30.4717C53.5433 30.6027 53.454 30.7554 53.3967 30.921C53.3394 31.0866 53.3154 31.2619 53.3258 31.4368C53.3363 31.6117 53.3811 31.7828 53.4577 31.9404C54.2511 33.5679 54.6616 35.3552 54.6577 37.1658C54.8255 42.4574 53.8623 47.724 51.8324 52.6138C51.7601 52.7734 51.72 52.9458 51.7144 53.121C51.7088 53.2961 51.7378 53.4707 51.7997 53.6346C51.8616 53.7986 51.9553 53.9488 52.0753 54.0765C52.1953 54.2042 52.3393 54.3071 52.499 54.3791C52.6717 54.4585 52.8596 54.4995 53.0497 54.4991C53.3047 54.498 53.554 54.4238 53.7681 54.2853C53.9822 54.1469 54.1521 53.9499 54.2577 53.7178ZM30.6577 41.1658V37.1658C30.6612 33.9842 31.9267 30.934 34.1763 28.6844C36.426 26.4347 39.4762 25.1693 42.6577 25.1658C45.2556 25.1571 47.7846 26.0001 49.8577 27.5658C50.1406 27.7779 50.4962 27.869 50.8463 27.819C51.1963 27.769 51.5122 27.582 51.7244 27.2991C51.9365 27.0162 52.0277 26.6606 51.9776 26.3105C51.9276 25.9605 51.7406 25.6446 51.4577 25.4324C48.9235 23.5197 45.8327 22.4894 42.6577 22.4991C38.7693 22.5037 35.0414 24.0504 32.2919 26.7999C29.5423 29.5495 27.9956 33.2773 27.991 37.1658V41.1658C27.991 41.5194 28.1315 41.8585 28.3816 42.1086C28.6316 42.3586 28.9708 42.4991 29.3244 42.4991C29.678 42.4991 30.0171 42.3586 30.2672 42.1086C30.5172 41.8585 30.6577 41.5194 30.6577 41.1658Z"
                                    fill="#EB5757" />
                            </svg>

                            </span>
                            <p class="ff_primary primary_color fs_lg fw_bold pt-3">Instant and fee-free
                                <span class="d-lg-block">transaction</span>
                            </p>
                            <p class="fs_sm fw_regular ff_primary secondary_color text-center">A Lorem Ipsum is simply dummy
                                text <span class="d-xxl-block">of the printing and typesetting</span>industry</p>
                        </div>
                    </div>
                    <div class="col-12 col-md-6 col-lg-4 mt-4">
                        <div class="cards d-flex flex-column justify-content-center align-items-center">
                            <span><svg width="84" height="77" viewBox="0 0 84 77" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <rect width="84" height="77" rx="12" fill="#EBF3FE" />
                                <g clip-path="url(#clip0_1_437)">
                                    <path
                                        d="M50.7747 25.3533L42.4214 22.568C42.1478 22.4769 41.8522 22.4769 41.5787 22.568L33.2254 25.3533C31.8972 25.7945 30.7419 26.643 29.9235 27.7782C29.1052 28.9135 28.6654 30.2778 28.6667 31.6773V38.4999C28.6667 48.5839 40.9334 54.1533 41.4587 54.3853C41.6291 54.461 41.8135 54.5001 42 54.5001C42.1865 54.5001 42.3709 54.461 42.5414 54.3853C43.0667 54.1533 55.3333 48.5839 55.3333 38.4999V31.6773C55.3346 30.2778 54.8949 28.9135 54.0765 27.7782C53.2581 26.643 52.1028 25.7945 50.7747 25.3533ZM52.6667 38.4999C52.6667 45.7733 44.2414 50.5439 42 51.6853C39.756 50.5479 31.3334 45.7919 31.3334 38.4999V31.6773C31.3334 30.8377 31.5977 30.0193 32.0888 29.3383C32.5798 28.6572 33.2727 28.1479 34.0694 27.8826L42 25.2386L49.9307 27.8826C50.7273 28.1479 51.4202 28.6572 51.9113 29.3383C52.4023 30.0193 52.6666 30.8377 52.6667 31.6773V38.4999Z"
                                        fill="#0065ED" />
                                    <path
                                        d="M46.4 33.5666L40.816 39.1666L37.824 36.0466C37.7039 35.9154 37.5588 35.8094 37.3971 35.7351C37.2355 35.6608 37.0606 35.6196 36.8828 35.6139C36.705 35.6082 36.5278 35.6381 36.3617 35.702C36.1957 35.7658 36.044 35.8622 35.9158 35.9855C35.7876 36.1089 35.6853 36.2566 35.6151 36.4201C35.5449 36.5835 35.508 36.7594 35.5068 36.9373C35.5056 37.1152 35.54 37.2916 35.608 37.456C35.6759 37.6204 35.7761 37.7696 35.9027 37.8946L38.9773 41.0946C39.2066 41.3423 39.4838 41.5409 39.792 41.6784C40.1003 41.8159 40.4332 41.8895 40.7707 41.8946H40.8147C41.1454 41.8957 41.4731 41.8311 41.7786 41.7045C42.0842 41.578 42.3616 41.392 42.5947 41.1573L48.2907 35.4613C48.4151 35.3372 48.5138 35.1897 48.5812 35.0274C48.6487 34.8651 48.6835 34.6911 48.6836 34.5154C48.6838 34.3396 48.6494 34.1656 48.5823 34.0031C48.5152 33.8407 48.4168 33.6931 48.2927 33.5686C48.1685 33.4442 48.0211 33.3455 47.8588 33.2781C47.6965 33.2106 47.5225 33.1758 47.3467 33.1757C47.171 33.1755 46.9969 33.2099 46.8345 33.277C46.672 33.3441 46.5244 33.4425 46.4 33.5666Z"
                                        fill="#0065ED" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_1_437">
                                        <rect width="32" height="32" fill="white" transform="translate(26 22.5)" />
                                    </clipPath>
                                </defs>
                            </svg>

                            </span>
                            <p class="ff_primary primary_color fs_lg fw_bold pt-3">Secure and Fast</p>
                            <p class="fs_sm fw_regular ff_primary secondary_color text-center">A Lorem Ipsum is simply dummy
                                text <span class="d-xxl-block">of the printing and typesetting</span>industry</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* section-choose  */}
            <section id="choose" class="bg_color position-relative">
                <img src={Img1s} alt="#" className='bg-position2' />
                <div class="container py-5">
                    <div class="row  align-items-center">
                        <div class="col-12 col-lg-6 order-first order-lg-first position-relative z-3">
                            <img src={Img2s} alt="#" className='w-100 position-relative z-3' />
                        </div>
                        <div class="col-12 col-lg-6 my-5 my-lg-0">
                            <h1 class="fs_XXl fw-bold ff-gilroy-bold">Choose and Convert your Wallet Anytime!</h1>
                            <p class="fs-sm fw_medium ff-gilroy-light py-4">A Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the
                                1500s, when an unknown.
                                A Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                            <span class=" align-items-center d-flex justify-content-center justify-content-lg-start">
                                <button class="connectwallet_btn fs-md fw-bold text_color ff-gilroy-bold">Choose your
                                    wallet</button>
                            </span>
                        </div>
                    </div>
                </div>
            </section>

            {/* section-available  */}
            <section id="available" class="bg_color position-relative">
                <img src={Img3s} alt="#" className='bg-position ' />
                <div class="container py-5">
                    <div class="row  align-items-center">
                        <div class="col-12 col-lg-6 order-last order-lg-first position-relative z-3 my-5 my-lg-0">
                            <h1 class="fs_XXl fw-bold ff-gilroy-bold">Available and Download Anytime!</h1>
                            <p class="fs-sm fw_medium ff-gilroy-light py-4">A Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry. Lorem Ipsum has been
                                the industry's standard.</p>
                            <div class="d-block">
                                <div
                                    class="flex-column align-items-center d-flex flex-sm-row justify-content-center justify-content-lg-start">
                                    <div class="play-store-box">
                                        <div class="d-flex ">
                                            <svg class="me-3" width="29" height="30" viewBox="0 0 29 30" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M21.2771 19.6496C24.79 17.7208 27.4532 16.251 27.6827 16.1368C28.4171 15.7462 29.1754 14.7127 27.6827 13.9098C27.2008 13.6574 24.6061 12.2333 21.2771 10.397L16.6622 15.0576L21.2771 19.6496Z"
                                                    fill="#FFD900" />
                                                <path
                                                    d="M16.6624 15.0574L1.96797 29.8671C2.31286 29.9128 2.70229 29.8214 3.16138 29.569C4.12525 29.0414 14.3429 23.4615 21.2773 19.6506L16.6624 15.0574Z"
                                                    fill="#F43249" />
                                                <path
                                                    d="M16.6624 15.0575L21.2773 10.4198C21.2773 10.4198 4.19497 1.09747 3.16144 0.54702C2.77201 0.316331 2.33576 0.24781 1.94519 0.316331L16.6624 15.0575Z"
                                                    fill="#00EE76" />
                                                <path
                                                    d="M16.6622 15.0579L1.94496 0.31665C1.34768 0.454835 0.842911 0.982449 0.842911 2.06166C0.842911 3.78383 0.842911 26.6985 0.842911 28.1226C0.842911 29.1104 1.23348 29.8219 1.9678 29.8904L16.6622 15.0579Z"
                                                    fill="#00D3FF" />
                                            </svg>
                                            <div>
                                                <h1 class="ff-gilroy-light fs-8 white_color fw_regular m-0">GET IN ON</h1>
                                                <svg width="96" height="20" viewBox="0 0 96 20" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M30.5696 5.88916C27.9292 5.88916 25.748 7.93223 25.748 10.7336C25.748 13.5121 27.9064 15.5781 30.5696 15.5781C33.2328 15.5781 35.3912 13.535 35.3912 10.7336C35.3912 7.93223 33.2328 5.88916 30.5696 5.88916ZM30.5696 13.6503C29.1226 13.6503 27.8607 12.4329 27.8607 10.7119C27.8607 8.9669 29.1238 7.77349 30.5696 7.77349C32.0154 7.77349 33.2785 8.9669 33.2785 10.7119C33.2785 12.4329 32.0154 13.6503 30.5696 13.6503ZM20.0767 5.88916C17.4135 5.88916 15.2551 7.93223 15.2551 10.7336C15.2551 13.5121 17.4135 15.5781 20.0767 15.5781C22.7399 15.5781 24.8983 13.535 24.8983 10.7336C24.8983 7.93223 22.7399 5.88916 20.0767 5.88916ZM20.0767 13.6503C18.6297 13.6503 17.3678 12.4329 17.3678 10.7119C17.3678 8.9669 18.6309 7.77349 20.0767 7.77349C21.5236 7.77349 22.7856 8.9669 22.7856 10.7119C22.7856 12.4329 21.5453 13.6503 20.0767 13.6503ZM7.60924 7.38178V9.42486H12.4765C12.3383 10.5726 11.9489 11.4223 11.3745 11.9967C10.663 12.7082 9.56096 13.4893 7.60924 13.4893C4.60116 13.4893 2.28285 11.0557 2.28285 8.04758C2.28285 5.03949 4.6023 2.56017 7.60924 2.56017C9.2389 2.56017 10.4106 3.20312 11.2831 4.02995L12.7289 2.58301C11.5115 1.41243 9.88186 0.51709 7.60924 0.51709C3.49911 0.51709 0.0547676 3.89176 0.0547676 8.0019C0.0547676 12.112 3.49911 15.4867 7.60924 15.4867C9.83618 15.4867 11.4898 14.7524 12.8214 13.374C14.1759 12.0195 14.5893 10.1135 14.5893 8.57519C14.5893 8.09326 14.5436 7.65701 14.4739 7.28928L7.60924 7.38178ZM58.6268 8.96576C58.2362 7.88655 56.9971 5.88916 54.5166 5.88916C52.0361 5.88916 49.9931 7.84087 49.9931 10.7336C49.9931 13.4425 52.0362 15.5781 54.7462 15.5781C56.9503 15.5781 58.2133 14.2236 58.741 13.4425L57.1113 12.3404C56.5597 13.1444 55.8254 13.672 54.7462 13.672C53.667 13.672 52.9098 13.1901 52.4267 12.2023L58.8323 9.51622L58.6268 8.96576ZM52.1058 10.5966C52.0601 8.73622 53.5528 7.77235 54.608 7.77235C55.4577 7.77235 56.1463 8.18576 56.3987 8.80588L52.1058 10.5966ZM46.8936 15.2572H49.0064V1.06754H46.8936V15.2572ZM43.4504 6.96837H43.3819C42.9 6.39393 42.0046 5.88916 40.8558 5.88916C38.445 5.88916 36.2637 8.02474 36.2637 10.7336C36.2637 13.4425 38.4678 15.5552 40.8558 15.5552C42.0035 15.5552 42.8988 15.0505 43.3819 14.4532H43.4504V15.1418C43.4504 17.0022 42.4626 17.9889 40.8786 17.9889C39.5927 17.9889 38.7887 17.0478 38.4678 16.2667L36.6314 17.0478C37.159 18.3338 38.5603 19.9177 40.8786 19.9177C43.3579 19.9177 45.4478 18.448 45.4478 14.8894V6.18723H43.4504V6.96837ZM41.0396 13.6503C39.5927 13.6503 38.3764 12.4329 38.3764 10.7348C38.3764 9.03657 39.5938 7.79633 41.0396 7.79633C42.4637 7.79633 43.6115 9.03657 43.6115 10.7348C43.6103 12.4101 42.4626 13.6503 41.0396 13.6503ZM68.4767 1.06754H63.4255V15.2572H65.5383V9.88395H68.4767C70.819 9.88395 73.1144 8.18462 73.1144 5.47575C73.1144 2.76687 70.819 1.06754 68.4767 1.06754ZM68.5452 7.91054H65.56V3.0421H68.5452C70.1064 3.0421 71.0245 4.35086 71.0245 5.47575C71.0028 6.5778 70.1075 7.91054 68.5452 7.91054ZM81.5414 5.86632C80.026 5.86632 78.442 6.53211 77.799 8.04758L79.6594 8.82872C80.0728 8.04758 80.8071 7.79519 81.5882 7.79519C82.6903 7.79519 83.7923 8.46099 83.8152 9.63156V9.76974C83.4246 9.5402 82.6218 9.21815 81.6111 9.21815C79.5908 9.21815 77.5466 10.343 77.5466 12.4101C77.5466 14.3161 79.2003 15.5324 81.0366 15.5324C82.4607 15.5324 83.2407 14.8894 83.7227 14.1323H83.7912V15.2343H85.8343V9.79259C85.8114 7.29042 83.9522 5.86632 81.5414 5.86632ZM81.289 13.6275C80.6004 13.6275 79.6354 13.2826 79.6354 12.4341C79.6354 11.332 80.8288 10.9186 81.8623 10.9186C82.7805 10.9186 83.2168 11.1253 83.7912 11.4006C83.6302 12.7093 82.5053 13.6275 81.289 13.6275ZM93.2049 6.18837L90.7941 12.3187H90.7256L88.2234 6.18837H85.9508L89.716 14.7752L87.5804 19.574H89.7845L95.5472 6.18837H93.2049ZM74.2862 15.2572H76.3989V1.06754H74.2862V15.2572Z"
                                                        fill="#EDEDED" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="play-store-box mx-sm-4 my-4">
                                        <div class="d-flex ">
                                            <div class="me-3">
                                                <svg width="31" height="31" viewBox="0 0 31 31" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M27.1062 20.8165C26.4867 22.1905 26.1882 22.804 25.3902 24.019C24.2772 25.714 22.7052 27.826 20.7597 27.844C19.0317 27.859 18.5877 26.719 16.2402 26.7325C13.8942 26.7445 13.4052 27.865 11.6757 27.8485C9.73018 27.8305 8.24068 25.924 7.12618 24.2275C4.01068 19.4875 3.68518 13.9225 5.60668 10.963C6.97168 8.86149 9.12718 7.63149 11.1522 7.63149C13.2147 7.63149 14.5122 8.76249 16.2162 8.76249C17.8707 8.76249 18.8787 7.62849 21.2637 7.62849C23.0637 7.62849 24.9747 8.61099 26.3352 10.306C21.8772 12.7495 22.6002 19.1155 27.1062 20.8165ZM19.4547 5.73549C20.3202 4.62249 20.9787 3.05349 20.7402 1.44849C19.3242 1.54599 17.6697 2.44599 16.7022 3.62049C15.8262 4.68549 15.1017 6.26499 15.3822 7.80099C16.9272 7.84749 18.5262 6.92499 19.4547 5.73549Z"
                                                        fill="url(#paint0_linear_1_580)" />
                                                    <defs>
                                                        <linearGradient id="paint0_linear_1_580" x1="4.41377" y1="1.44849"
                                                            x2="27.106" y2="31.1729" gradientUnits="userSpaceOnUse">
                                                            <stop stop-color="#E5E5E5" />
                                                            <stop offset="1" stop-color="white" />
                                                        </linearGradient>
                                                    </defs>
                                                </svg>
                                            </div>
                                            <div>
                                                <h1 class="ff-gilroy-light fs-8 white_color fw_regular m-0">Download on the</h1>
                                                <p class="ff-gilroy-light white_color fw_bold fs-16 m-0">App Store</p>

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
            <section id="ready" class="bg-pic">
                <div class="container">
                    <div class=" justify-content-center">
                        <div class="d-flex text-center justify-content-center flex-column ">
                            <h1 class="py-4 fs_xxl white_color fw_bold ff-gilroy-bold">Ready to get updated?</h1>
                            <div>
                                <p class="m-0 ff-gilroy-light fs_md tertiary_color fw_medium">A Lorem Ipsum is simply dummy
                                    text
                                    of the printing and typesetting industry. Lorem Ipsum has
                                    been the
                                    industry's standard.</p>
                            </div>
                            <div class="d-flex flex-column  flex-lg-row align-items-center py-5 justify-content-center">
                                <input class=" white_color input-property ff-gilroy-light fs_sm fw_regular" type="text"
                                    placeholder="Email Address" />
                                <button
                                    class="ff-gilroy-bold fs_md fw_bold submit-btn white_color m-l-5 my-3 my-lg-0">Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
             {/* footer  */}
            <footer>
                <div class="container">
                    <div class="footer-section">
                        <div class="row">
                            <div class="col-12 col-lg-6 order-last order-lg-first ">
                                <h1 class="ff-gilroy-bold color-green fs-62">B<span class="color-orange">.</span>Th</h1>
                                <p class="ff-gilroy-light secondary_color fs_md fw_medium ">A Lorem Ipsum is simply dummy text
                                    of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.</p>
                                <div class="d-flex gap-3 align justify-content-center justify-content-lg-start">
                                    <a href="">
                                        <svg width="49" height="49" viewBox="0 0 49 49" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <g clip-path="url(#clip0_1_558)">
                                                <path fill-rule="evenodd" clip-rule="evenodd"
                                                    d="M0.643799 24.0014C0.643799 10.7375 11.4317 -0.0512695 24.6893 -0.0512695C37.947 -0.0512695 48.7349 10.7375 48.7349 24.0014C48.7349 37.2653 37.947 48.054 24.6893 48.054C11.4317 48.054 0.643799 37.2653 0.643799 24.0014ZM2.24833 24.0014C2.24833 36.3802 12.3149 46.4519 24.6893 46.4519C37.0637 46.4519 47.1303 36.3802 47.1303 24.0014C47.1303 11.6225 37.0637 1.55084 24.6893 1.55084C12.3149 1.55084 2.24833 11.6225 2.24833 24.0014ZM25.9371 10.5003H29.938C30.0396 10.4867 30.143 10.4967 30.2401 10.5296C30.3372 10.5625 30.4254 10.6173 30.4978 10.6899C30.5702 10.7625 30.6249 10.8509 30.6576 10.9481C30.6903 11.0453 30.7001 11.1487 30.6863 11.2504V15.7507C30.7387 15.9697 30.6488 16.1767 30.4928 16.3282C30.3812 16.4366 30.2359 16.4544 30.0859 16.4728C30.0262 16.4801 29.9658 16.4875 29.9065 16.5007H27.2238C27.1007 16.4934 26.9947 16.4842 26.9029 16.4762C26.3317 16.4264 26.3144 16.4249 26.1891 17.2508L26.1846 19.5009H29.938C30.0396 19.4873 30.1431 19.4974 30.2402 19.5303C30.3374 19.5632 30.4256 19.618 30.4982 19.6906C30.5707 19.7631 30.6255 19.8514 30.6584 19.9486C30.6913 20.0458 30.7013 20.1493 30.6877 20.251V24.7513C30.7013 24.853 30.6913 24.9564 30.6584 25.0536C30.6255 25.1508 30.5707 25.2391 30.4982 25.3117C30.4256 25.3842 30.3374 25.4391 30.2402 25.472C30.1431 25.5049 30.0396 25.5149 29.938 25.5013H26.1891L26.1861 36.7521C26.327 37.1946 25.9686 37.5532 25.5262 37.5022H20.9451C20.8433 37.5153 20.7399 37.5049 20.6427 37.4719C20.5455 37.4389 20.4572 37.3842 20.3844 37.3118C20.3116 37.2394 20.2564 37.1514 20.2228 37.0544C20.1892 36.9574 20.1783 36.854 20.1908 36.7521V25.5013H17.9414C17.8398 25.5149 17.7364 25.5049 17.6392 25.472C17.542 25.4391 17.4538 25.3842 17.3812 25.3117C17.3087 25.2391 17.2539 25.1508 17.221 25.0536C17.1881 24.9564 17.1781 24.853 17.1917 24.7513V20.251C17.1781 20.1493 17.1881 20.0458 17.221 19.9486C17.2539 19.8514 17.3087 19.7631 17.3812 19.6906C17.4538 19.618 17.542 19.5632 17.6392 19.5303C17.7364 19.4974 17.8398 19.4873 17.9414 19.5009H20.1908V17.0183C20.1908 13.604 20.8416 10.4493 25.9371 10.5003ZM29.1342 14.9166V12.0514H25.9356C22.3682 12.0514 21.6889 13.6535 21.6889 17.0168V20.2495C21.6889 20.4625 21.6619 20.6665 21.5119 20.818C21.4374 20.8924 21.349 20.9513 21.2518 20.9914C21.1545 21.0316 21.0503 21.0522 20.9451 21.052H18.6912V23.9502H20.9451C21.3889 23.9502 21.6904 24.3088 21.6904 24.7513V36.0021H24.7255L24.727 24.7498C24.7274 24.5372 24.8121 24.3334 24.9625 24.1833C25.1129 24.0331 25.3167 23.9487 25.5292 23.9487H29.1882V21.0505H25.5262C25.421 21.0505 25.3167 21.0298 25.2195 20.9894C25.1222 20.9491 25.0339 20.8899 24.9595 20.8154C24.8851 20.7408 24.8262 20.6523 24.786 20.555C24.7459 20.4576 24.7253 20.3533 24.7255 20.248L24.7315 17.4038C24.7315 16.1092 24.9264 14.8446 27.2552 14.8446L29.1342 14.9166Z"
                                                    fill="#5C5C5C" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_1_558">
                                                    <rect width="47.9861" height="48.0033" fill="white"
                                                        transform="translate(0.696533)" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </a>
                                    <a href="">
                                        <span>
                                            <svg width="49" height="49" viewBox="0 0 49 49" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <g clip-path="url(#clip0_1_548)">
                                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                                        d="M0.623047 24.0014C0.623047 10.7375 11.4109 -0.0512695 24.6686 -0.0512695C37.9262 -0.0512695 48.7141 10.7375 48.7141 24.0014C48.7141 37.2653 37.9262 48.054 24.6686 48.054C11.4109 48.054 0.623047 37.2653 0.623047 24.0014ZM2.22758 24.0014C2.22758 36.3802 12.2942 46.4519 24.6686 46.4519C37.043 46.4519 47.1096 36.3802 47.1096 24.0014C47.1096 11.6225 37.043 1.55084 24.6686 1.55084C12.2942 1.55084 2.22758 11.6225 2.22758 24.0014ZM38.2654 15.6053C38.1594 15.9389 38.0224 16.2619 37.8561 16.5699C38.0151 16.5034 38.1913 16.4899 38.3585 16.5315C38.5258 16.573 38.6753 16.6673 38.7848 16.8004C38.8943 16.9335 38.9581 17.0984 38.9666 17.2706C38.9752 17.4428 38.9281 17.6131 38.8323 17.7565C38.1997 18.7045 37.4196 19.5452 36.5215 20.2466L36.5229 20.4926C36.5229 27.7726 30.9836 35.3032 21.7162 35.3032C18.8884 35.3042 16.1199 34.4924 13.7401 32.9645C13.5877 32.8664 13.4729 32.7196 13.4144 32.5481C13.3559 32.3765 13.357 32.1902 13.4176 32.0194C13.4808 31.8499 13.5983 31.706 13.7519 31.6105C13.9055 31.5149 14.0865 31.473 14.2664 31.4914C16.0169 31.6974 17.7898 31.3959 19.3739 30.6228C18.6026 30.3059 17.9098 29.8242 17.3441 29.2113C16.7784 28.5985 16.3534 27.8694 16.0989 27.0751C16.0561 26.9427 16.0485 26.8013 16.0769 26.6651C16.1053 26.5288 16.1687 26.4023 16.2608 26.298L16.3133 26.2455C15.0927 25.1835 14.3354 23.6204 14.3354 21.9177C14.3355 21.7739 14.3718 21.6324 14.441 21.5063C14.5102 21.3802 14.61 21.2735 14.7313 21.1962C14.8302 21.1379 14.939 21.0983 15.0522 21.0792C14.5906 20.2178 14.3573 19.2525 14.3747 18.2753C14.392 17.2982 14.6593 16.3417 15.1511 15.4973C15.2165 15.3856 15.3079 15.2914 15.4175 15.2227C15.5271 15.1539 15.6516 15.1126 15.7806 15.1023C15.9095 15.092 16.0391 15.113 16.1582 15.1635C16.2773 15.2139 16.3825 15.2924 16.4648 15.3923C18.6126 18.0277 21.6923 19.7349 25.0648 20.1596C25.0339 19.3888 25.1589 18.6196 25.4324 17.8982C25.7058 17.1769 26.122 16.5182 26.6561 15.9617C27.1902 15.4051 27.8311 14.9622 28.5404 14.6594C29.2498 14.3567 30.0129 14.2003 30.7841 14.1997C32.2036 14.2015 33.5722 14.7289 34.626 15.6803C35.4941 15.4676 36.3259 15.1274 37.0943 14.6707C37.2342 14.5885 37.3958 14.5506 37.5577 14.5622C37.7196 14.5737 37.8741 14.634 38.001 14.7353C38.1279 14.8365 38.2211 14.9739 38.2683 15.1292C38.3155 15.2845 38.3145 15.4505 38.2654 15.6053ZM34.9849 19.5059C35.043 19.3851 35.1305 19.2808 35.2393 19.2025C35.3978 19.0894 35.5524 18.9709 35.7027 18.847L35.4298 18.8815C35.2485 18.9015 35.0659 18.8591 34.9119 18.7613C34.758 18.6635 34.6419 18.5162 34.5829 18.3436C34.5239 18.171 34.5254 17.9834 34.5872 17.8118C34.649 17.6402 34.7674 17.4947 34.9229 17.3994C35.0398 17.33 35.153 17.2544 35.2618 17.1729C35.0204 17.2389 34.776 17.2959 34.5285 17.3454C34.395 17.3718 34.2569 17.3638 34.1273 17.322C33.9977 17.2803 33.8808 17.2063 33.7877 17.1069C33.1665 16.4461 32.345 16.0086 31.4501 15.862C30.5553 15.7154 29.6371 15.868 28.8377 16.296C28.0383 16.7241 27.4021 17.4037 27.0278 18.2299C26.6534 19.0561 26.5617 19.9826 26.7668 20.8662C26.8238 21.1122 26.7623 21.3687 26.6018 21.5622C26.4414 21.7557 26.2104 21.8502 25.9465 21.8487C22.2194 21.6562 18.7022 20.0641 16.0974 17.3904C15.8937 18.2137 15.949 19.0799 16.2557 19.8706C16.5625 20.6613 17.1058 21.338 17.8114 21.8082C18.1098 22.0062 18.2387 22.3798 18.1293 22.7188C18.0198 23.0578 17.6929 23.2738 17.3405 23.2753C16.9311 23.2618 16.5217 23.2033 16.1229 23.1028C16.3352 23.8174 16.7377 24.4608 17.2874 24.9641C17.8371 25.4675 18.5132 25.8119 19.2435 25.9605C19.4212 25.9951 19.5819 26.089 19.6995 26.2267C19.817 26.3645 19.8844 26.5381 19.8907 26.7191C19.897 26.9001 19.8417 27.0779 19.734 27.2235C19.6262 27.369 19.4723 27.4738 19.2974 27.5206C18.936 27.6181 18.5642 27.6811 18.1848 27.7066C18.5583 28.2347 19.0506 28.6676 19.6221 28.9704C20.1936 29.2732 20.8282 29.4374 21.4748 29.4498C21.6401 29.4532 21.8002 29.5077 21.9333 29.6057C22.0665 29.7036 22.1661 29.8404 22.2186 29.9971C22.2712 30.1539 22.274 30.3231 22.2267 30.4815C22.1795 30.64 22.0845 30.78 21.9547 30.8823C20.6213 31.9329 19.0554 32.6479 17.3885 32.9675C18.7803 33.4527 20.2438 33.7002 21.7177 33.6995C29.9818 33.6995 34.9199 26.9836 34.9199 20.4911C34.9199 20.2931 34.9154 20.0921 34.9064 19.8941C34.8997 19.7602 34.9267 19.6267 34.9849 19.5059Z"
                                                        fill="#5C5C5C" />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_1_548">
                                                        <rect width="47.9861" height="48.0033" fill="white"
                                                            transform="translate(0.675781)" />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        </span>
                                    </a>
                                    <a href="">
                                        <svg width="49" height="49" viewBox="0 0 49 49" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <g clip-path="url(#clip0_1_552)">
                                                <path fill-rule="evenodd" clip-rule="evenodd"
                                                    d="M0.604004 24.0019C0.604004 10.738 11.3919 -0.0507812 24.6495 -0.0507812C37.9072 -0.0507812 48.6951 10.738 48.6951 24.0019C48.6951 37.2658 37.9072 48.0545 24.6495 48.0545C11.3919 48.0545 0.604004 37.2658 0.604004 24.0019ZM2.20854 24.0019C2.20854 36.3807 12.2751 46.4524 24.6495 46.4524C37.0239 46.4524 47.0905 36.3807 47.0905 24.0019C47.0905 11.623 37.0239 1.55133 24.6495 1.55133C12.2751 1.55133 2.20854 11.623 2.20854 24.0019ZM24.647 13.5824C28.039 13.5824 28.4413 13.5952 29.7806 13.6566C30.5861 13.6661 31.3839 13.8141 32.1394 14.094C32.6874 14.3055 33.1851 14.6294 33.6005 15.0449C34.0158 15.4604 34.3396 15.9583 34.5511 16.5065C34.8308 17.2622 34.9787 18.0604 34.9883 18.8662C35.0497 20.2059 35.0624 20.6083 35.0624 24.0027C35.0624 27.397 35.0497 27.7973 34.9883 29.1371C34.9787 29.9429 34.8308 30.741 34.5511 31.4967C34.3396 32.0449 34.0158 32.5428 33.6005 32.9583C33.1851 33.3738 32.6874 33.6978 32.1394 33.9093C31.3839 34.1891 30.5861 34.3371 29.7806 34.3467C28.4413 34.4081 28.039 34.4208 24.647 34.4208C21.2549 34.4208 20.8526 34.4081 19.5134 34.3467C18.7079 34.3371 17.91 34.1891 17.1546 33.9093C16.6065 33.6978 16.1088 33.3738 15.6935 32.9583C15.2781 32.5428 14.9543 32.0449 14.7429 31.4967C14.4631 30.741 14.3152 29.9429 14.3056 29.1371C14.2442 27.7973 14.2315 27.3949 14.2315 24.0016C14.2315 20.6083 14.2442 20.2059 14.3056 18.8662C14.3152 18.0604 14.4631 17.2622 14.7429 16.5065C14.9543 15.9583 15.2781 15.4604 15.6935 15.0449C16.1088 14.6294 16.6065 14.3055 17.1546 14.094C17.91 13.8141 18.7079 13.6661 19.5134 13.6566C20.8526 13.5952 21.2549 13.5824 24.647 13.5824ZM24.647 11.2927C21.1967 11.2927 20.7637 11.3076 19.4085 11.369C18.3549 11.3903 17.3125 11.5901 16.3256 11.9599C15.4816 12.2865 14.715 12.7858 14.0751 13.4259C13.4352 14.0661 12.936 14.8329 12.6096 15.6773C12.2398 16.6649 12.04 17.708 12.0189 18.7624C11.9574 20.118 11.9426 20.549 11.9426 24.0016C11.9426 27.4542 11.9574 27.8863 12.0189 29.2419C12.0401 30.2959 12.2399 31.3387 12.6096 32.3259C12.936 33.1703 13.4352 33.9372 14.0751 34.5773C14.715 35.2174 15.4816 35.7168 16.3256 36.0433C17.3128 36.4133 18.3556 36.6131 19.4096 36.6343C20.7647 36.6957 21.1967 36.7105 24.647 36.7105C28.0973 36.7105 28.5303 36.6957 29.8854 36.6343C30.9394 36.6131 31.9822 36.4133 32.9694 36.0433C33.8134 35.7168 34.58 35.2174 35.2199 34.5773C35.8598 33.9372 36.359 33.1703 36.6854 32.3259C37.0549 31.3383 37.2543 30.2952 37.2751 29.2409C37.3365 27.8852 37.3513 27.4542 37.3513 24.0016C37.3513 20.549 37.3365 20.1169 37.2751 18.7613C37.2538 17.7073 37.0541 16.6645 36.6843 15.6773C36.3579 14.8329 35.8588 14.0661 35.2189 13.4259C34.5789 12.7858 33.8124 12.2865 32.9683 11.9599C31.981 11.5903 30.9383 11.3909 29.8843 11.37C28.5292 11.3065 28.0983 11.2927 24.647 11.2927ZM32.955 17.2175C32.955 18.0597 32.2722 18.7424 31.43 18.7424C30.5878 18.7424 29.905 18.0597 29.905 17.2175C29.905 16.3753 30.5878 15.6925 31.43 15.6925C32.2722 15.6925 32.955 16.3753 32.955 17.2175ZM21.0246 18.5751C22.0974 17.8581 23.3587 17.4753 24.6489 17.4753C26.3791 17.4753 28.0384 18.1629 29.2619 19.3866C30.4853 20.6104 31.1726 22.2702 31.1726 24.0009C31.1726 25.2915 30.79 26.5532 30.0732 27.6263C29.3563 28.6994 28.3375 29.5358 27.1454 30.0298C25.9534 30.5237 24.6417 30.6529 23.3762 30.4011C22.1108 30.1493 20.9483 29.5278 20.036 28.6152C19.1236 27.7026 18.5023 26.5398 18.2506 25.274C17.9989 24.0082 18.1281 22.6961 18.6218 21.5037C19.1156 20.3113 19.9518 19.2921 21.0246 18.5751ZM22.2962 27.523C22.9926 27.9885 23.8114 28.2369 24.6489 28.2369C25.7721 28.2369 26.8492 27.7906 27.6434 26.9962C28.4375 26.2018 28.8837 25.1244 28.8837 24.0009C28.8837 23.1631 28.6353 22.3441 28.17 21.6475C27.7047 20.9509 27.0433 20.408 26.2695 20.0874C25.4957 19.7667 24.6442 19.6828 23.8228 19.8463C23.0013 20.0097 22.2467 20.4132 21.6545 21.0056C21.0622 21.598 20.6589 22.3528 20.4955 23.1745C20.3321 23.9962 20.416 24.8479 20.7365 25.622C21.057 26.396 21.5998 27.0576 22.2962 27.523Z"
                                                    fill="#5C5C5C" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_1_552">
                                                    <rect width="47.9861" height="48.0033" fill="white"
                                                        transform="translate(0.654785)" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                            <div class="col-12 col-lg-6">
                                <div class="row py-3 py-lg-0 text-center text-lg-start">
                                    <div class="col-12 col-md-6 justify-content-center d-flex py-2 py-lg-0">
                                        <ul>
                                            <li class="py-2"><a href=""
                                                class="ff-gilroy-bold fw_bold fs_lg primary_color  p-lg-0 ">About Us</a>
                                            </li>
                                            <li class="py-2"><a href=""
                                                class="ff-gilroy-light secondary_color fs_md fw_regular line">Whitepaper</a>
                                            </li>
                                            <li class="py-2"><a href=""
                                                class="ff-gilroy-light secondary_color fs_md fw_regular line">Blog</a></li>
                                            <li class="py-2"><a href=""
                                                class="ff-gilroy-light secondary_color fs_md fw_regular  line">Activity</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="col-12 col-md-6 justify-content-center d-flex py-2  py-lg-0">
                                        <ul class="white_s_nowwrap ">
                                            <li class="py-2"><a href=""
                                                class="ff-gilroy-bold fw_bold fs_lg primary_color py-3 position-relative">Support</a>
                                            </li>
                                            <li class="py-2"><a href=""
                                                class="ff-gilroy-light secondary_color fs_md fw_regular py-2 line">Help &
                                                Support</a>
                                            </li>
                                            <li class="py-2"><a href=""
                                                class="ff-gilroy-light secondary_color fs_md fw_regular py-2 line">Community</a>
                                            </li>
                                            <li class="py-2"><a href=""
                                                class="ff-gilroy-light secondary_color fs_md fw_regular py-2 line">Author
                                                Profile</a>
                                            </li>
                                            <li class="py-2"><a href=""
                                                class="ff-gilroy-light secondary_color fs_md fw_regular py-2 line">Contact</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <h1
                    class="ff-gilroy-light fw_regular  secondary_color fs_md align-content-center justify-content-center d-flex py-2">
                    All rights reserved@2021</h1>
            </footer>
        </div>
    )
}

export default Navbar