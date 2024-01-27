import "../Home/internal.css";
import "../Home/mainstyle.css";
import animationLogo from "../assets/images/Infinix-logo-animation.gif";
import layer_1 from "../assets/images/Layer_1.png";
import background from "../assets/images/background.jpg";
import background_500 from "../assets/images/background-500.jpg";
import background_800 from "../assets/images/background-800.jpg";
import background_1080 from "../assets/images/background-1080.jpg";
import layer_1_3 from "../assets/images/Layer_1 (3).png";
import ellipse_6_1 from "../assets/images/Ellipse 6 (1).png";
import rectangle_9_1 from "../assets/images/Rectangle 9 (1).png";
import v_rentals from "../assets/images/V-Rentals.png";
import site2 from "../assets/images/site2.png";
import tehkom from "../assets/images/tehkom.png";
import sitee from "../assets/images/sitee.png";
import general from "../assets/images/general.png";
import layer_1_4 from "../assets/images/Layer_1 (4).png";
import layer_1_5 from "../assets/images/Layer_1 (5).png";
import layer_1_6 from "../assets/images/Layer_1 (6).png";
import layer_1_7 from "../assets/images/Layer_1 (7).png";
import layer_1_8 from "../assets/images/Layer_1 (8).png";
import isolationMode from "../assets/images/Isolation_Mode (1).png";
import MaskGroup from "../assets/images/Mask-group.png"
import { gsap, ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
import { useEffect } from "react";
import $ from 'jquery';
import SplitType from 'split-type'
// import Swiper JS
import Swiper from 'swiper';
// import Swiper styles
import 'swiper/css';

gsap.registerPlugin(ScrollTrigger)



const Home = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".page__wrap",
      { y: "0.3em" },
      {
        opacity: 1,
        y: "0em",
        duration: 0.3,
        ease: "power1.inOut",
      }
    );



    let tl = gsap.timeline({
      delay: 0.5,
      defaults: { duration: 0.2, ease: "power4.out" },
    });

    function progressUpdate() {
      let progress = Math.round(this.progress() * 99);
      $(".loader_number").text(progress);
    }

    tl.to(".loader_bottom_bar", {
      width: "100%",
      duration: 2.7,
      onUpdate: progressUpdate,
      ease: "power4.out", // Add your desired easing function here
    }).set(".loader", {
      display: "none",
    });


    function animateText(textClass, targetClass) {
      let textElements = document.querySelectorAll(textClass);
      let targetDiv = document.querySelector(targetClass);

      let endX = targetDiv.getBoundingClientRect().left;
      let endY =
        targetDiv.getBoundingClientRect().top + targetDiv.offsetHeight / 2;

      textElements.forEach((textToMove) => {
        let startX = textToMove.getBoundingClientRect().left;
        let startY = textToMove.getBoundingClientRect().top;
        let finalY = endY - textToMove.offsetHeight / 2;

        gsap.to(textToMove, {
          x: endX - startX,
          y: finalY - startY,
          scrollTrigger: {
            trigger: ".teleport-component",
            start: "2% top",
            end: "center top",
            scrub: 0.5,
          },
        });
      });
    }

    // Just call these once
    animateText(".move-text-1", ".target-div-1");
    animateText(".move-text-2", ".target-div-2");

    document.addEventListener("DOMContentLoaded", function () {
      // Initialize Swiper
      var swiper = new Swiper(".fiverr", {
        effect: "cards",
        grabCursor: true,
        keyboard: true,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        },
        navigation: {
          nextEl: $(this).find(".swiper-next")[0],
          prevEl: $(this).find(".swiper-prev")[0],
          disabledClass: "is-disabled",
        },
      });

      // Initialize Swiper
      var swiper = new Swiper(".upwork", {
        effect: "cards",
        grabCursor: true,
        keyboard: true,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        },
        navigation: {
          nextEl: $(this).find(".upwork-next")[0],
          prevEl: $(this).find(".upwork-prev")[0],
          disabledClass: "is-disabled",
        },
      });

      // Append elements
      $(".span-wrapper").each(function (index) {
        let relatedEl = $(".span-element").eq(index);
        relatedEl.appendTo($(this));
      });

      // SVG color manipulation
      document.querySelectorAll(".logo__single svg path").forEach((path) => {
        const originalColor = path.getAttribute("fill");
        path.style.setProperty("--original-color", originalColor);
        path.setAttribute("fill", "currentColor");
      });

    });
  },);

  useEffect(() => {
    window.onbeforeunload = function () {
      window.scrollTo(0, 0);
    };

    window.onpageshow = function (event) {
      if (event.persisted) {
        window.scrollTo(0, 0);
        window.location.reload(true);
      }
    };
  }, [])

  useEffect(() => {
    document.addEventListener("DOMContentLoaded", function () {
      // create svg elements
      $(".svg-code").each(function (index) {
        let svgCode = $(this).text();
        $(svgCode).insertAfter($(this));
      });

      const logoChangers = document.querySelectorAll(".logo-changer");

      // Loop through each .logo-changer element and create a ScrollTrigger for it
      logoChangers.forEach((logoChanger) => {
        ScrollTrigger.create({
          trigger: logoChanger,
          start: "top 3%",
          end: "bottom 10%",
          toggleClass: {
            targets: ".nav__logo-wrapper",
            className: "changed-logo",
          },
        });
      });

      // Split text into spans
      let typeSplit = new SplitType("[text-split]", {
        types: "lines, words, chars",
        tagName: "span",
      });

      // Link timelines to scroll position
      function createScrollTrigger(triggerElement, timeline) {
        // Reset tl when scroll out of view past bottom of screen
        ScrollTrigger.create({
          trigger: triggerElement,
          start: "top bottom",
          onLeaveBack: () => {
            timeline.progress(0);
            timeline.pause();
          },
        });

        // Play tl when scrolled into view (60% from top of screen)
        ScrollTrigger.create({
          trigger: triggerElement,
          start: "top bottom",
          onEnter: () => timeline.play(),
        });
      }
      $("[scrub-each-word]").each(function (index) {
        let tl = gsap.timeline({
          scrollTrigger: {
            trigger: $(this),
            start: "top 70%",
            end: "top 20%",
            scrub: 0.5,
          },
        });
        tl.from($(this).find(".char"), {
          opacity: 0.15,
          duration: 0.3,
          ease: "power1.out",
          stagger: { each: 0.4 },
        });
      });

      $("[letters-slide-up]").each(function (index) {
        let tl = gsap.timeline({ paused: true });
        tl.from($(this).find(".word"), {
          yPercent: 130,
          duration: 0.9,
          ease: "power4.out",
          stagger: { amount: 0.3 },
        });
        createScrollTrigger($(this), tl);
      });

      // Avoid flash of unstyled content
      gsap.set("[text-split]", { opacity: 1 });

      // Copy footer mail
      window.withJquery = function () {
        console.time("time1");
        var temp = $("<input>");
        $("body").append(temp);
        temp.val($(".is-mail-to-copy").text()).select();
        document.execCommand("copy");
        temp.remove();
        console.timeEnd("time1");
      };
    });
  }, [])

  useEffect(() => {
    let splitText;
    function runSplit() {
      splitText = new SplitType("[stagger-link]", {
        types: "words, chars",
      });
    }
    runSplit();

    // ————— Update on window resize
    let windowWidth = $(window).innerWidth();
    window.addEventListener("resize", function () {
      if (windowWidth !== $(window).innerWidth()) {
        windowWidth = $(window).innerWidth();
        splitText.revert();
        runSplit();
      }
    });

    // ————— animation
    const staggerLinks = document.querySelectorAll("[stagger-link]");
    staggerLinks.forEach((link) => {
      const letters = link.querySelectorAll("[stagger-link-text] .char");
      link.addEventListener("mouseenter", function () {
        gsap.to(letters, {
          yPercent: -130,
          duration: 0.4,
          ease: "power4.inOut",
          stagger: { each: 0.025, from: "start" },
          overwrite: true,
        });
      });
      link.addEventListener("mouseleave", function () {
        gsap.to(letters, {
          yPercent: 0,
          duration: 0.3,
          ease: "power2.out",
          stagger: { each: 0.025 },
          overwrite: true,
        });
      });
    });
  }, [])

  useEffect(() => {

    window.addEventListener("scroll", function () {
      var buttons = document.getElementsByClassName("back-to-top");
      for (var i = 0; i < buttons.length; i++) {
        if (window.scrollY > 20) {
          buttons[i].style.display = "flex";
        } else {
          buttons[i].style.display = "none";
        }
      }
    });

    // Scroll to the top with a 2-second duration when any button is clicked
    var buttons = document.getElementsByClassName("back-to-top");
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener("click", function () {
        scrollToTop(2000); // 2 seconds duration
      });
    }

    // Function to scroll to the top with a timing-based animation
    function scrollToTop(duration) {
      var start = window.pageYOffset;
      var startTime = performance.now();

      function scrollStep(timestamp) {
        var currentTime = timestamp || performance.now();
        var elapsedTime = currentTime - startTime;

        window.scrollTo(
          0,
          easeInOutCubic(elapsedTime, start, -start, duration)
        );

        if (elapsedTime < duration) {
          requestAnimationFrame(scrollStep);
        }
      }

      function easeInOutCubic(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return (c / 2) * t * t * t + b;
        t -= 2;
        return (c / 2) * (t * t * t + 2) + b;
      }

      requestAnimationFrame(scrollStep);
    }



    document.querySelectorAll(".w--current").forEach((el) => {
      let innerDiv = el.querySelector("[stagger-link-text]");
      if (innerDiv) {
        innerDiv.setAttribute("stagger-link-text", "orange");
      }
    });
  }, [])


  useEffect(() => {
  })

  useEffect(() => {
    window.Webflow && window.Webflow.destroy();
    window.Webflow && window.Webflow.ready();
    window.Webflow && window.Webflow.require('ix2').init();
    document.dispatchEvent(new Event('readystatechange'))
    document.dispatchEvent(new Event('DOMContentLoaded'))
  })



  return (
    <div className="body">
      <div className="globals">
        <div className="w-embed"></div>
        {/* <!-- ------------------------------------------------------------------ NAVIGATION------------------------------------------------------------------ --> */}
        <div className="nav">
          <div className="navigation">
            <a
              data-w-id="e2c41eac-496c-f159-1a57-a056f0741e18"
              href="/"
              aria-current="page"
              className="nav__logo-wrapper w-inline-block w--current"
            >
              <div className="nav__logo w-embed">
                <svg
                  width="169"
                  height="40"
                  viewBox="0 0 169 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    id="Vector"
                    d="M32.5194 25.0516H26.9682C26.7786 21.395 25.2854 18.4299 22.2751 16.3316C20.2083 14.8917 17.8854 14.3992 15.3872 14.5128C10.9974 14.7118 6.86845 18.3352 5.85398 22.9486C4.78262 27.8082 7.20977 32.3363 12.4954 35.1451C11.9835 36.5897 11.5426 38.1007 10.8837 39.5074C10.7509 39.7916 9.67958 39.9289 9.215 39.73C3.59749 37.2718 -0.142776 31.1569 0.00418042 24.8053C0.208023 16.3506 6.51291 9.58212 14.861 8.86691C23.1948 8.15169 30.6137 13.7076 32.2966 21.9776C32.4909 22.9391 32.4435 23.948 32.5194 25.0516Z"
                    fill="white"
                  />
                  <path
                    id="Vector_2"
                    d="M39.7724 12.424H45.5701C45.371 17.6816 46.0299 22.887 44.6267 27.9598C42.7021 34.9035 35.8757 39.6116 28.3383 39.3464C21.2465 39.0953 14.7709 33.7241 13.2445 26.7899C13.0691 25.9894 12.96 25.1652 12.8842 24.3458C12.8273 23.7159 12.8747 23.0764 12.8747 22.3328C13.3393 22.3091 13.6806 22.2618 14.0172 22.276C15.3161 22.3186 16.8662 21.9681 17.8333 22.5602C18.5776 23.0196 18.5633 24.6774 18.9141 25.7905C20.379 30.418 23.8964 33.3405 28.3335 33.6389C32.8039 33.9373 37.004 31.6116 38.7342 27.4388C39.4785 25.6484 39.6349 23.5501 39.744 21.575C39.9051 18.5815 39.7866 15.5691 39.7866 12.4146L39.7724 12.424Z"
                    fill="white"
                  />
                  <path
                    id="Vector_3"
                    d="M39.9526 6.40857V0.824219H45.409V6.40857H39.9526Z"
                    fill="white"
                  />

                  <path
                    d="M59.5073 32.373H60.8057V38.99H59.5073V32.373Z"
                    fill="white"
                  />
                  <path
                    d="M63.9407 32.373H65.0781L71.3688 37.2201V32.373H72.6672V39.0001H71.5298L65.2391 34.1429V38.99H63.9407V32.373Z"
                    fill="white"
                  />
                  <path
                    d="M75.7952 32.373H76.9325L83.2232 37.2201V32.373H84.5216V39.0001H83.3843L77.0936 34.1429V38.99H75.7952V32.373Z"
                    fill="white"
                  />
                  <path
                    d="M89.3506 32.373H95.0374C95.4602 32.373 95.893 32.4837 96.2553 32.7954C96.6076 33.0971 96.8492 33.5898 96.8492 34.163V37.2101C96.8492 37.7732 96.6076 38.266 96.2553 38.5777C95.893 38.8794 95.4602 38.99 95.0374 38.99H89.3506C88.938 38.99 88.4951 38.8794 88.1328 38.5777C87.7805 38.266 87.549 37.7732 87.549 37.2101V34.163C87.549 33.5898 87.7805 33.0971 88.1328 32.7954C88.4951 32.4837 88.938 32.373 89.3506 32.373ZM89.5117 33.4491C89.3204 33.4491 89.1393 33.5094 89.0386 33.5999C88.9279 33.6904 88.8474 33.801 88.8474 34.0927V37.2704C88.8474 37.562 88.9279 37.6827 89.0386 37.7732C89.1393 37.8637 89.3204 37.914 89.5117 37.914H94.8764C95.0676 37.914 95.2488 37.8637 95.3495 37.7732C95.4602 37.6827 95.5407 37.562 95.5407 37.2704V34.0927C95.5407 33.801 95.4602 33.6904 95.3495 33.5999C95.2488 33.5094 95.0676 33.4491 94.8764 33.4491H89.5117Z"
                    fill="white"
                  />
                  <path
                    d="M104.797 38.99H103.71L98.9695 32.373H100.57L104.254 37.5117L107.927 32.373H109.538L104.797 38.99Z"
                    fill="white"
                  />
                  <path
                    d="M114.288 32.373H115.375L120.115 38.99H118.505L117.408 37.4615H112.244L111.147 38.99H109.547L114.288 32.373ZM114.831 33.8513L113.019 36.3855H116.643L114.831 33.8513Z"
                    fill="white"
                  />
                  <path
                    d="M120.39 32.373H129.268V33.4491H125.473V38.99H124.175V33.4491H120.39V32.373Z"
                    fill="white"
                  />
                  <path
                    d="M131.893 32.373H133.191V38.99H131.893V32.373Z"
                    fill="white"
                  />
                  <path
                    d="M138.027 32.373H143.714C144.137 32.373 144.569 32.4837 144.932 32.7954C145.284 33.0971 145.526 33.5898 145.526 34.163V37.2101C145.526 37.7732 145.284 38.266 144.932 38.5777C144.569 38.8794 144.137 38.99 143.714 38.99H138.027C137.614 38.99 137.171 38.8794 136.809 38.5777C136.457 38.266 136.225 37.7732 136.225 37.2101V34.163C136.225 33.5898 136.457 33.0971 136.809 32.7954C137.171 32.4837 137.614 32.373 138.027 32.373ZM138.188 33.4491C137.997 33.4491 137.816 33.5094 137.715 33.5999C137.604 33.6904 137.524 33.801 137.524 34.0927V37.2704C137.524 37.562 137.604 37.6827 137.715 37.7732C137.816 37.8637 137.997 37.914 138.188 37.914H143.553C143.744 37.914 143.925 37.8637 144.026 37.7732C144.137 37.6827 144.217 37.562 144.217 37.2704V34.0927C144.217 33.801 144.137 33.6904 144.026 33.5999C143.925 33.5094 143.744 33.4491 143.553 33.4491H138.188Z"
                    fill="white"
                  />
                  <path
                    d="M148.554 32.373H149.691L155.982 37.2201V32.373H157.28V39.0001H156.143L149.852 34.1429V38.99H148.554V32.373Z"
                    fill="white"
                  />
                  <path
                    d="M162.029 32.373H167.001C167.414 32.373 167.857 32.4837 168.219 32.7954C168.551 33.0669 168.773 33.5195 168.803 34.0323H167.494C167.484 33.7809 167.414 33.6804 167.313 33.5999C167.202 33.5094 167.031 33.4491 166.84 33.4491H162.19C161.999 33.4491 161.818 33.5094 161.717 33.5999C161.606 33.6904 161.526 33.801 161.526 34.0927V34.4346C161.526 34.7262 161.606 34.8368 161.717 34.9273C161.818 35.0178 161.999 35.0782 162.19 35.0782H167.202C167.615 35.0782 168.058 35.1988 168.42 35.5005C168.773 35.8022 169.004 36.295 169.004 36.8682V37.2101C168.994 37.7732 168.773 38.266 168.41 38.5777C168.048 38.8794 167.615 39.0001 167.192 39.0001H162.029C161.606 39.0001 161.173 38.8794 160.811 38.5777C160.459 38.266 160.227 37.7732 160.227 37.2101V37.0089H161.526C161.526 37.1397 161.526 37.2704 161.526 37.2704C161.526 37.562 161.606 37.6827 161.717 37.7732C161.818 37.8637 161.999 37.914 162.19 37.914H167.031C167.223 37.914 167.404 37.8637 167.504 37.7732C167.615 37.6827 167.696 37.562 167.696 37.2704C167.696 37.2704 167.696 36.8883 167.696 36.6871C167.675 36.476 167.605 36.3855 167.514 36.305C167.404 36.2145 167.233 36.1542 167.041 36.1542H162.029C161.616 36.1542 161.173 36.0335 160.811 35.7318C160.469 35.4402 160.237 34.9675 160.227 34.4144V34.163C160.227 33.5898 160.459 33.0971 160.811 32.7954C161.173 32.4837 161.616 32.373 162.029 32.373Z"
                    fill="white"
                  />

                  <path
                    d="M59.0042 3.12834H63.3951V26H59.0042V3.12834Z"
                    fill="white"
                  />
                  <path
                    d="M74.0991 6.81283H82.6087C84.0043 6.81283 85.502 7.22995 86.7274 8.27273C87.5784 9.03743 88.2251 10.1497 88.5314 11.4358C88.6335 11.9572 88.6676 12.4786 88.7016 13.0348C88.8037 14.5642 88.7697 24.5053 88.7357 26H84.3107C84.3107 23.7754 84.3107 13.5909 84.3107 13C84.2766 11.6444 84.0384 11.3663 83.6639 11.0535C83.2895 10.7406 82.7109 10.5321 82.0641 10.5321H72.4653C71.7845 10.5321 71.2059 10.7406 70.8314 11.0535C70.4911 11.3663 70.2188 11.6444 70.2188 13C70.2188 13.2086 70.1507 26 70.1507 26H65.7597V6.84759H70.1507V8.16845C71.342 7.19519 72.7716 6.81283 74.0991 6.81283Z"
                    fill="white"
                  />
                  <path
                    d="M98.5252 0H104.856V3.71925H99.0698C98.1848 3.71925 97.8104 3.92781 97.47 4.24064C96.8573 4.83155 96.8232 5.00535 96.8232 6.81283H104.856V10.5321H96.8232V26H92.3983V10.5321H89.6071V6.84759H92.4323C92.4323 6.84759 92.4663 5.10963 92.6025 4.623C92.8748 3.30214 93.5215 2.18984 94.4065 1.45989C95.6319 0.417111 97.1296 0 98.5252 0Z"
                    fill="white"
                  />
                  <path
                    d="M105.7 1.1123H110.091V4.83155H105.7V1.1123ZM105.7 6.84759H110.091V26H105.7V6.84759Z"
                    fill="white"
                  />
                  <path
                    d="M120.697 6.81283H129.207C130.602 6.81283 132.1 7.22995 133.325 8.27273C134.176 9.03743 134.823 10.1497 135.13 11.4358C135.232 11.9572 135.266 12.4786 135.3 13.0348C135.402 14.5642 135.368 24.5053 135.334 26H130.909C130.909 23.7754 130.909 13.5909 130.909 13C130.875 11.6444 130.636 11.3663 130.262 11.0535C129.888 10.7406 129.309 10.5321 128.662 10.5321H119.063C118.383 10.5321 117.804 10.7406 117.43 11.0535C117.089 11.3663 116.817 11.6444 116.817 13C116.817 13.2086 116.749 26 116.749 26H112.358V6.84759H116.749V8.16845C117.94 7.19519 119.37 6.81283 120.697 6.81283Z"
                    fill="white"
                  />
                  <path
                    d="M137.431 1.1123H141.822V4.83155H137.431V1.1123ZM137.431 6.84759H141.822V26H137.431V6.84759Z"
                    fill="white"
                  />
                  <path
                    d="M142.42 6.84759H148.615L155.695 13.6257L162.775 6.84759H169.004L158.691 16.5107L168.834 26H162.605L155.695 19.361L148.785 26H142.556L152.7 16.5107L142.42 6.84759Z"
                    fill="white"
                  />
                </svg>
              </div>
            </a>
            <div className="nav__logo-cta-wrapper">
              <div
                data-scroll="stop"
                data-w-id="e2c41eac-496c-f159-1a57-a056f0741e1b"
                className="nav__open-wrapper backdrop-bulr-16"
              >
                <div className="nav__open-top-line"></div>
                <div className="nav__open-bottom-line"></div>
                <div
                  data-w-id="765f7be1-de90-4e8a-b33e-c03197d14316"
                  data-is-ix2-target="1"
                  className="scroll-lottie opacity-05"
                  data-animation-type="lottie"
                  data-src="https://assets-global.website-files.com/63793925c7db23ce040b0824/6501972589575cb2d75c754d_Scroll.json"
                  data-loop="0"
                  data-direction="1"
                  data-autoplay="0"
                  data-renderer="svg"
                  data-default-duration="1.03436765890371"
                  data-duration="0"
                ></div>
              </div>
              <a
                data-scroll="stop"
                data-w-id="a218e2b4-1c27-f9fd-6b3f-8524dad809b7"
                href="/contact-us"
                className="get-in-touch__mobile w-inline-block"
              >
                <img
                  src="https://assets-global.website-files.com/63793925c7db23ce040b0824/6507f8a7020d0150e7f0b556_Pen.svg"
                  loading="lazy"
                  alt=""
                  className="mobile__pen"
                />
              </a>
              <div
                data-w-id="a4d4e9df-7f74-ec3b-40f4-c50318097d80"
                className="button-outter"
              >
                <a href="/contact-us" className="new-buttonn w-inline-block">
                  <div className="black-background"></div>
                  <div className="items-wrapper">
                    <div className="text-rotaotr is-inside">
                      <div className="nav-text text-4">Get in touch</div>
                    </div>
                    <div className="text-rotaotr is-outside">
                      <div className="nav-text text-4">Don&#x27;t be shy</div>
                    </div>
                    <div className="circle-wrapper">
                      <div className="circle"></div>
                      {/* <!-- <img
                      src="https://assets-global.website-files.com/63793925c7db23ce040b0824/64e8667bfbbf04480e3205e2_Arrow-green.svg"
                      loading="lazy"
                      alt=""
                      className="image-40"
                    /> --> */}
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="hidden-navigation">
            <div className="nav__wrapper">
              <div className="nav_top-wrapper">
                <a
                  stagger-link=""
                  data-scroll="start"
                  data-w-id="e2c41eac-496c-f159-1a57-a056f0741e2d"
                  href="/#"
                  className="nav_top-single-closer w-inline-block"
                >
                  <img
                    src="https://assets-global.website-files.com/63793925c7db23ce040b0824/64e87091a9432f998933e04b_Nav-close.svg"
                    loading="lazy"
                    alt=""
                    className="image-41"
                  />
                  <div
                    stagger-link-text="pale-green"
                    className="nav-top-closer letter-spacing-0-5 line-height-1 p-body is-nav-closer"
                  >
                    close
                  </div>
                </a>
                <div className="nav_top-single">
                  <div className="p-body nav__top-text letter-spacing-0-5">
                    menu
                  </div>
                </div>
              </div>
              <div className="separator-footer bg--1 opacity-01"></div>
              <div className="nav_main-wrapper">
                <div className="nav_main-top-wrapper">
                  <a
                    stagger-link=""
                    href="/services"
                    className="menu-link w-inline-block"
                  >
                    <div className="nav_main-text-wrapper">
                      <div
                        stagger-link-text="white"
                        className="h3 line-height-1"
                      >
                        Services
                      </div>
                    </div>
                    <div className="nav_main-arrow">
                      <div className="nav-arrow w-embed">
                        <svg
                          width="0.9em"
                          height="0.9em"
                          viewBox="0 0 15 14"
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M1.99998 0L14.166 0V12.1668H12.166V3.41432L1.70711 13.8739L0.292847 12.4597L10.7519 2L1.99998 2V0Z"
                            fill="currentColor"
                          />
                        </svg>
                      </div>
                    </div>
                  </a>
                  <a
                    stagger-link=""
                    href="/resources"
                    className="menu-link w-inline-block"
                  >
                    <div className="nav_main-text-wrapper">
                      <div
                        stagger-link-text="white"
                        className="h3 line-height-1"
                      >
                        Resources
                      </div>
                    </div>
                    <div className="nav_main-arrow">
                      <div className="nav-arrow w-embed">
                        <svg
                          width="0.9em"
                          height="0.9em"
                          viewBox="0 0 15 14"
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M1.99998 0L14.166 0V12.1668H12.166V3.41432L1.70711 13.8739L0.292847 12.4597L10.7519 2L1.99998 2V0Z"
                            fill="currentColor"
                          />
                        </svg>
                      </div>
                    </div>
                  </a>
                  <a
                    stagger-link=""
                    href="/about-us"
                    className="menu-link w-inline-block"
                  >
                    <div className="nav_main-text-wrapper">
                      <div
                        stagger-link-text="white"
                        className="h3 line-height-1"
                      >
                        About
                      </div>
                    </div>
                    <div className="nav_main-arrow">
                      <div className="nav-arrow w-embed">
                        <svg
                          width="0.9em"
                          height="0.9em"
                          viewBox="0 0 15 14"
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M1.99998 0L14.166 0V12.1668H12.166V3.41432L1.70711 13.8739L0.292847 12.4597L10.7519 2L1.99998 2V0Z"
                            fill="currentColor"
                          />
                        </svg>
                      </div>
                    </div>
                  </a>
                  <a
                    stagger-link=""
                    href="/contact-us"
                    className="menu-link w-inline-block"
                  >
                    <div className="nav_main-text-wrapper">
                      <div
                        stagger-link-text="white"
                        className="h3 line-height-1"
                      >
                        Contact
                      </div>
                    </div>
                    <div className="nav_main-arrow">
                      <div className="nav-arrow w-embed">
                        <svg
                          width="0.9em"
                          height="0.9em"
                          viewBox="0 0 15 14"
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M1.99998 0L14.166 0V12.1668H12.166V3.41432L1.70711 13.8739L0.292847 12.4597L10.7519 2L1.99998 2V0Z"
                            fill="currentColor"
                          />
                        </svg>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="nav_main-bottom-wrapper">
                  <a
                    stagger-link=""
                    href="https://www.upwork.com/freelancers/hristodikov/"
                    className="menu-link w-inline-block"
                  >
                    <div
                      stagger-link-text=""
                      className="p-body line-height-1 nav-link-bg"
                    >
                      UpWork
                    </div>
                  </a>
                  <a
                    stagger-link=""
                    href="https://www.fiverr.com/dikovh"
                    className="menu-link w-inline-block"
                  >
                    <div
                      stagger-link-text=""
                      className="p-body line-height-1 nav-link-bg"
                    >
                      Fiverr
                    </div>
                  </a>
                  <a
                    stagger-link=""
                    href="https://www.linkedin.com/in/hristo-dikov/"
                    className="menu-link w-inline-block"
                  >
                    <div
                      stagger-link-text=""
                      className="p-body line-height-1 nav-link-bg"
                    >
                      Linkedin
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div
              data-scroll="start"
              data-w-id="e2c41eac-496c-f159-1a57-a056f0741e62"
              className="nav-overlay-closer"
            ></div>
          </div>
        </div>

        {/* <!-- ------------------------------------------------------------------ Loader ------------------------------------------------------------------ --> */}
        <div className="loader-logo">
          <img
            src={animationLogo}
            loading="eager"
            alt=""
            className="loader-image"
          />
        </div>
        {/* <!-- ------------------------------------------------------------------ BANNER------------------------------------------------------------------ --> */}
      </div>
      <main className="page__wrap">
        <div
          id="hero"
          tr-scrollflip-element="component"
          className="teleport-component"
        >
          <section
            tr-scrollflip-scrubstart="top top"
            className="section-home-hero"
          >
            <div className="page-spacing__medium test">
              <div className="container-large hero-content">
                <div className="p-body-normal text-2 opacity-04 narrower is-home-hero">
                  Competitive Edge through Creativity &amp; Technology
                </div>
                <div className="homehero__text-wrapper">
                  <h1 className="h1 is-home-hero">
                    Technology
                    <span
                      data-w-id="23833245-073c-841d-4e79-701c8f4e0478"
                      className="home-cta_span span-wrapper"
                    ></span>
                    <br />
                    <span className="home-cta_span2 span-wrapper"> </span>
                    <span className="text-accent"> </span>that &nbsp;
                    <span
                      tr-scrollflip-element="origin"
                      className="move-text-1 text-accent"
                    >
                      {" "}
                      Makes a{" "}
                    </span>
                    <br />
                    <span
                      tr-scrollflip-element="origin"
                      className="move-text-2 text-accent"
                    >
                      Difference
                    </span>
                  </h1>
                  <h1 className="h1 is-home-hero mobile">
                    Market Insights that
                    <br />
                    <span className="move-text-1 text-accent">Make a</span>
                    <span className="move-text-2 text-accent">Difference</span>
                  </h1>
                  <div className="hide-this">
                    <div className="home-cta_span">
                      <div className="span-element">
                        <img
                          src={layer_1}
                          loading="lazy"
                          data-w-id="4fc866e3-082c-1bfd-b8a2-f1a19295f086"
                          alt=""
                          className="home__hero-star"
                        />
                      </div>
                    </div>
                    <div className="home-cta_span2">
                      <div className="span-element">
                        <img
                          src={MaskGroup}
                          loading="eager"
                          data-w-id="53e6f3bd-abed-3d64-d7c3-502192f03ad0"
                          sizes="100vw"
                          alt=""
                          srcset="images/Mask group.png"
                          className="home-span-image"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <a
                href="#difference"
                className="home__hero-arrow-wrap w-inline-block"
              >
                <img
                  src="https://assets-global.website-files.com/63793925c7db23ce040b0824/64f5ea52cb1f1c2f3250e751_VerticalDarkArrow.svg"
                  loading="lazy"
                  alt=""
                  className="home__hero-arrrow hide-on-mobile"
                />
                <img
                  src="https://assets-global.website-files.com/63793925c7db23ce040b0824/64eb54a1ae5e8c4c700b121b_Arrow-bottom.svg"
                  loading="lazy"
                  alt=""
                  className="home__hero-arrrow hide-on-desktop"
                />
              </a>
            </div>
            <div className="home-bg">
              <div className="home__hero-bg">
                <img
                  src="https://assets-global.website-files.com/63793925c7db23ce040b0824/64f2e2314ae531679cb2a32f_Cut-edge-white.svg"
                  loading="lazy"
                  style={{
                    WebkitTransform:
                      "translate3d(0, 0, 0) scale3d(0, 0, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                    MozTransform:
                      "translate3d(0, 0, 0) scale3d(0, 0, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                    msTransform:
                      "translate3d(0, 0, 0) scale3d(0, 0, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                    transform:
                      "translate3d(0, 0, 0) scale3d(0, 0, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                  }}
                  alt=""
                  className="cut-edge is-home-hero"
                />
                <a
                  href="#difference"
                  className="cut-edge is-home-hero home-mobile is-link w-inline-block"
                >
                  <img
                    src="https://assets-global.website-files.com/63793925c7db23ce040b0824/650ad622817c9f1e05d281c4_white-side.svg"
                    loading="lazy"
                    alt=""
                    className="cut-edge is-home-hero home-mobile"
                  />
                </a>
              </div>
            </div>
            <div
              data-w-id="83518ac2-f205-f7c2-7dd0-8484af416ef0"
              className="gradient__image-wrapper"
            >
              <img
                src={background}
                loading="eager"
                sizes="(max-width: 479px) 100vw, 97vw"
                srcset={
                  (background_500, background_800, background_1080, background)
                }
                alt=""
                className="gradient__image is-home-hero-right"
              />
              <img
                src={background}
                loading="eager"
                sizes="(max-width: 479px) 100vw, 97vw"
                srcset={
                  (background_500, background_800, background_1080, background)
                }
                alt=""
                className="gradient__image is-home-hero-right"
              />
            </div>
          </section>
          <section
            tr-scrollflip-scrubend="40% center"
            className="section is-not-overflow"
          >
            <div className="page-spacing__medium z-index-5">
              <div className="container-small">
                <div className="section__home-about">
                  <div className="spacing-container-03"></div>
                  <div id="difference" className="spacing-container-03"></div>
                  <div className="wrapper__teleport">
                    <div className="target-div-1 z-index-5"></div>
                    <div className="spacing-container-04 hide-on-desktop"></div>
                    <div className="target-div-2 z-index-5"></div>
                  </div>
                  <div className="spacing-container-02"></div>
                  <div
                    data-w-id="581c9748-1d05-0e08-4e64-c932eb159c10"
                    className="separator bg--1 opacity-02"
                  ></div>
                  <div className="spacing-container-02"></div>
                  <div className="home__about-wrapper-inner">
                    <div className="column-50 flex-vertical">
                      <div className="p-body text-2 text-lighter sticky-heading opacity-07 mobile-h2">
                        Why we exist?
                      </div>
                    </div>
                    <div className="column-50 flex-vertical">
                      <div
                        scrub-each-word=""
                        text-split=""
                        className="p-large is-90percent"
                      >
                        At Infinix Innovations, we surpass the role of
                        traditional technology providers We go beyond providing
                        interactive technology for events and exhibitions,
                        specializing in engineering unique products and
                        solutions. Our dedicationlies in boosting marketing
                        campaigns by using experiential technology to create
                        state of the art experiences for every project.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              data-w-id="739117db-c5ef-61c8-e2f2-1eaf84c45ea8"
              className="gradient__image-wrapper"
            >
              <img
                src={background}
                loading="lazy"
                alt=""
                className="gradient__image is-4 opacity-06"
              />
            </div>
          </section>
        </div>
        <section className="section is-service z-index-5">
          <div className="page-spacing__large">
            <div className="container-small is-service">
              <div
                data-w-id="68899ad1-b25c-ddb6-7aba-7feefb0db744"
                className="services-wrapper"
              >
                <div className="services-sticky">
                  <h2 className="humongus">Services</h2>
                  <div className="services-track">
                    <div className="services__wrapper">
                      <div className="w-dyn-list">
                        <div
                          role="list"
                          className="service__slider w-dyn-items"
                        >
                          <div
                            role="listitem"
                            className="service-item w-dyn-item"
                          >
                            <a
                              data-w-id="52d8cbef-9526-9dca-e171-165f7a27a1cc"
                              href="/services/market-trends-analysis"
                              className="single-service-wrapper bg--3 radius-16 radius-24 w-inline-block"
                            >
                              <div
                                data-w-id="54dc9481-d76e-7894-29d5-a73a0322b026"
                                className="service__single-image-wrap"
                              >
                                <img src={layer_1_3} alt="service" />
                              </div>
                              <div
                                data-w-id="6a575794-c216-6f9f-0477-527f51640c02"
                                className="service__single-text-block"
                              >
                                <h3 className="p-leading line-height-1-1 is-service-single-text text-balance">
                                  Interactive Installation
                                </h3>
                                <div className="service_single-small-wrapper">
                                  <div className="p-small text-4 is-bigger is-services-tablet">
                                    Demonstrating expertise in crafting
                                    interactive installations tailored for
                                    impactful presentations at events. These
                                    installations bring dynamic interaction
                                    options to your presentations, enhancing
                                    engagement and leaving a lasting impression.
                                  </div>
                                </div>
                              </div>
                              <img
                                src="https://assets-global.website-files.com/63793925c7db23ce040b0824/64f5f32f6bda170853c4dea2_VectorTest.svg"
                                loading="lazy"
                                alt=""
                                className="cut-edge top-right is-services"
                              />
                              <div className="service__single-wrapper-bg">
                                <div
                                  data-w-id="20aa7ea5-0a72-b658-1a07-1534c6e36f3d"
                                  className="service__single-bg bg-accent"
                                ></div>
                              </div>
                              <div
                                data-w-id="fd334e19-8828-bb58-a856-8e50d2e6adda"
                                className="service__single-arrow w-embed"
                              >
                                <svg
                                  width="0.9em"
                                  height="0.9em"
                                  viewBox="0 0 17 17"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M13.5858 2L1.00003 2V0L16 0C16.5523 0 17 0.447715 17 1V16L15 16V3.41421L1.90384 16.5104L0.489624 15.0962L13.5858 2Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </div>
                            </a>
                          </div>
                          <div
                            role="listitem"
                            className="service-item w-dyn-item"
                          >
                            <a
                              data-w-id="52d8cbef-9526-9dca-e171-165f7a27a1cc"
                              href="/services/customer-research"
                              className="single-service-wrapper bg--3 radius-16 radius-24 w-inline-block"
                            >
                              <div
                                data-w-id="54dc9481-d76e-7894-29d5-a73a0322b026"
                                className="service__single-image-wrap"
                              >
                                <img src={ellipse_6_1} alt="service" />
                              </div>
                              <div
                                data-w-id="6a575794-c216-6f9f-0477-527f51640c02"
                                className="service__single-text-block"
                              >
                                <h3 className="p-leading line-height-1-1 is-service-single-text text-balance">
                                  Immersive Art Installation
                                </h3>
                                <div className="service_single-small-wrapper">
                                  <div className="p-small text-4 is-bigger is-services-tablet">
                                    Kinetic structures and mechatronics redefine
                                    our approach to immersive art installations,
                                    introducing cutting-edge technology into the
                                    creative process.
                                  </div>
                                </div>
                              </div>
                              <img
                                src="https://assets-global.website-files.com/63793925c7db23ce040b0824/64f5f32f6bda170853c4dea2_VectorTest.svg"
                                loading="lazy"
                                alt=""
                                className="cut-edge top-right is-services"
                              />
                              <div className="service__single-wrapper-bg">
                                <div
                                  data-w-id="20aa7ea5-0a72-b658-1a07-1534c6e36f3d"
                                  className="service__single-bg bg-accent"
                                ></div>
                              </div>
                              <div
                                data-w-id="fd334e19-8828-bb58-a856-8e50d2e6adda"
                                className="service__single-arrow w-embed"
                              >
                                <svg
                                  width="0.9em"
                                  height="0.9em"
                                  viewBox="0 0 17 17"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M13.5858 2L1.00003 2V0L16 0C16.5523 0 17 0.447715 17 1V16L15 16V3.41421L1.90384 16.5104L0.489624 15.0962L13.5858 2Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </div>
                            </a>
                          </div>
                          <div
                            role="listitem"
                            className="service-item w-dyn-item"
                          >
                            <a
                              data-w-id="52d8cbef-9526-9dca-e171-165f7a27a1cc"
                              href="/services/market-sizing-and-forecasting"
                              className="single-service-wrapper bg--3 radius-16 radius-24 w-inline-block"
                            >
                              <div
                                data-w-id="54dc9481-d76e-7894-29d5-a73a0322b026"
                                className="service__single-image-wrap"
                              >
                                <img src={rectangle_9_1} alt="service" />
                              </div>
                              <div
                                data-w-id="6a575794-c216-6f9f-0477-527f51640c02"
                                className="service__single-text-block"
                              >
                                <h3 className="p-leading line-height-1-1 is-service-single-text text-balance">
                                  Programming & Gaming Solution For Events &
                                  Exhibitions
                                </h3>
                                <div className="service_single-small-wrapper">
                                  <div className="p-small text-4 is-bigger is-services-tablet">
                                    Delivering technically robust gaming
                                    activations and applications tailored for
                                    events and exhibitions, captivating
                                    audiences with immersive content.
                                  </div>
                                </div>
                              </div>
                              <img
                                src="https://assets-global.website-files.com/63793925c7db23ce040b0824/64f5f32f6bda170853c4dea2_VectorTest.svg"
                                loading="lazy"
                                alt=""
                                className="cut-edge top-right is-services"
                              />
                              <div className="service__single-wrapper-bg">
                                <div
                                  data-w-id="20aa7ea5-0a72-b658-1a07-1534c6e36f3d"
                                  className="service__single-bg bg-accent"
                                ></div>
                              </div>
                              <div
                                data-w-id="fd334e19-8828-bb58-a856-8e50d2e6adda"
                                className="service__single-arrow w-embed"
                              >
                                <svg
                                  width="0.9em"
                                  height="0.9em"
                                  viewBox="0 0 17 17"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M13.5858 2L1.00003 2V0L16 0C16.5523 0 17 0.447715 17 1V16L15 16V3.41421L1.90384 16.5104L0.489624 15.0962L13.5858 2Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </div>
                            </a>
                          </div>
                          <div
                            role="listitem"
                            className="service-item w-dyn-item"
                          >
                            <a
                              data-w-id="52d8cbef-9526-9dca-e171-165f7a27a1cc"
                              href="/services/market-sizing-and-forecasting"
                              className="single-service-wrapper bg--3 radius-16 radius-24 w-inline-block"
                            >
                              <div
                                data-w-id="54dc9481-d76e-7894-29d5-a73a0322b026"
                                className="service__single-image-wrap"
                              >
                                <img src={v_rentals} alt="service" />
                              </div>
                              <div
                                data-w-id="6a575794-c216-6f9f-0477-527f51640c02"
                                className="service__single-text-block"
                              >
                                <h3 className="p-leading line-height-1-1 is-service-single-text text-balance">
                                  Audio Visual Rentals
                                </h3>
                                <div className="service_single-small-wrapper">
                                  <div className="p-small text-4 is-bigger is-services-tablet">
                                    Delivering top-notch audio-visual equipment
                                    for an unparalleled event experience.
                                  </div>
                                </div>
                              </div>
                              <img
                                src="https://assets-global.website-files.com/63793925c7db23ce040b0824/64f5f32f6bda170853c4dea2_VectorTest.svg"
                                loading="lazy"
                                alt=""
                                className="cut-edge top-right is-services"
                              />
                              <div className="service__single-wrapper-bg">
                                <div
                                  data-w-id="20aa7ea5-0a72-b658-1a07-1534c6e36f3d"
                                  className="service__single-bg bg-accent"
                                ></div>
                              </div>
                              <div
                                data-w-id="fd334e19-8828-bb58-a856-8e50d2e6adda"
                                className="service__single-arrow w-embed"
                              >
                                <svg
                                  width="0.9em"
                                  height="0.9em"
                                  viewBox="0 0 17 17"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M13.5858 2L1.00003 2V0L16 0C16.5523 0 17 0.447715 17 1V16L15 16V3.41421L1.90384 16.5104L0.489624 15.0962L13.5858 2Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section track__record logo-changer">
          <div className="page-spacing__large is-track-record bg--2 radius-24">
            <div className="container-small is-track-record">
              <div className="record-div bg--4">
                <img
                  src="https://assets-global.website-files.com/63793925c7db23ce040b0824/64eb532cc6cfc5af6123a385_frame-top-right-outside.svg"
                  loading="lazy"
                  alt=""
                  className="cut-edge top-right-outside is-record is-hidden-on-desktop"
                />
                <img
                  src="https://assets-global.website-files.com/63793925c7db23ce040b0824/64eb532cc6cfc5af6123a385_frame-top-right-outside.svg"
                  loading="lazy"
                  alt=""
                  className="cut-edge top-right-outside is-record"
                />
                <img
                  src="https://assets-global.website-files.com/63793925c7db23ce040b0824/64eb539f0f9044a1a9b1bb8a_frame-top-left-outside.svg"
                  loading="lazy"
                  alt=""
                  className="cut-edge top-left-outside"
                />
                <div className="record__heading-div">
                  <h2 className="p-leading opacity-06">Projects</h2>
                </div>
              </div>
              <h2 className="project-heading">
                Elevate Your Business
                <span className="project-span">
                  with Actionable Technologies
                </span>
              </h2>

              {/* <!-- -----------HERE----------- --> */}

              <div className="column-50 flex-vertical is-grid is-footer-grid ">
                <a className="partner-item" href="/#">
                  <img src={site2} alt="partner" />
                  <h4 className="project-heading4">
                    SITE <br />
                    GITEX 2023
                  </h4>

                  <div className="view-button">View</div>
                  <div className="description">Interactive LED</div>
                </a>

                <a className="partner-item" href="/#">
                  <img src={tehkom} alt="Tehkom" />
                  <h4 className="project-heading4">
                    TAHAKOM
                    <br />
                    GITEX 2023
                  </h4>

                  <div className="view-button">View</div>
                  <div className="description">Interactive LED</div>
                </a>
                <a className="partner-item" href="/#">
                  <img src={sitee} alt="Sitee" />
                  <h4 className="project-heading4">
                    Site <br />
                    GITEX 2023
                  </h4>

                  <div className="view-button">View</div>
                  <div className="description">Interactive LED</div>
                </a>
                <a className="partner-item" href="/#">
                  <img src={general} alt="General" />
                  <h4 className="project-heading4">
                    GE, General Electric
                    <br />
                    Arab health 2023
                  </h4>

                  <div className="view-button">View</div>
                  <div className="description">Interactive LED</div>
                </a>
              </div>
              <div
                data-w-id="451fff9d-1313-535d-71de-411304f891a0"
                className="logos-expander bg--4"
              >
                <img
                  src="https://assets-global.website-files.com/63793925c7db23ce040b0824/64eb59905eb38b96ebae57ed_bottom-left-ouside.svg"
                  loading="lazy"
                  alt=""
                  className="cut-edge top-only"
                />
                <img
                  src="https://assets-global.website-files.com/63793925c7db23ce040b0824/64eb59905eb38b96ebae57ed_bottom-left-ouside.svg"
                  loading="lazy"
                  alt=""
                  className="cut-edge bottom-left-outside"
                />
                <div
                  data-w-id="2f6abd90-5562-7b73-88e4-b9bcc1cdd38d"
                  className="whyus__expand is-logos"
                >
                  <div className="whyus__vertical bg-accent"></div>
                  <div className="whyus__horizontal is-horizontal bg-accent"></div>
                </div>
                <div className="p-body opacity-08 lighter line-height-1">
                  View all
                </div>
              </div>
            </div>
            <a
              href="#why-us"
              data-w-id="9f1c2ce4-4767-9e2e-207a-07f0144976af"
              className="edge-cut__side-right is-records w-inline-block"
            >
              <img
                src="https://assets-global.website-files.com/63793925c7db23ce040b0824/64f5f5c17591e40f7e4c9e91_New-side-cut.svg"
                loading="lazy"
                alt=""
                className="cut-edge records"
              />
              <img
                src="https://assets-global.website-files.com/63793925c7db23ce040b0824/64eb54a1ae5e8c4c700b121b_Arrow-bottom.svg"
                loading="lazy"
                alt=""
                className="records-arrow"
              />
            </a>
          </div>
        </section>
        <section className="section is-full logo-changer is-logos">
          <div className="logos_section radius-36">
            <div className="logos__inner-wrapper">
              <div className="logo__heading">
                <h2 className="h3 text-3 line-height-1-1 is-logos">
                  Who trusts us?
                </h2>
              </div>
              <div
                data-w-id="cdad0975-bbfa-f9a7-13ca-f17db374b06c"
                className="logo__single"
              >
                <div
                  style={{
                    WebkitTransform:
                      "translate3d(0, 3em, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                    MozTransform:
                      "translate3d(0, 3em, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                    msTransform:
                      "translate3d(0, 3em, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                    transform:
                      "translate3d(0, 3em, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                    opacity: 0,
                  }}
                  className="logos-change-wrapper"
                >
                  <div
                    style={{
                      WebkitTransform:
                        "translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                      MozTransform:
                        "translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                      msTransform:
                        "translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                      transform:
                        "translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                    }}
                    className="logo__single-wrapper is-1"
                  >
                    <div className="logo-wrapper w-embed">
                      <svg
                        width="100%"
                        height="100%"
                        viewBox="0 0 626 519"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_694_1162)">
                          <path
                            d="M313.2 193.082C404.104 193.082 495.014 193.147 585.918 193C596.779 192.983 608.776 201.124 608.776 215.77C608.784 254.488 608.806 293.203 608.763 331.922C608.75 343.825 600.866 352.781 589.129 354.475C588.435 354.575 587.728 354.609 587.025 354.613C571.14 354.622 555.259 354.601 539.375 354.648C538.038 354.648 537.622 354.336 537.661 352.963C537.765 349.501 537.761 346.03 537.661 342.568C537.622 341.242 538.056 340.982 539.297 340.986C554.8 341.025 570.302 341.012 585.805 341.012C591.45 341.012 595.043 337.498 595.125 331.827C595.173 328.469 595.134 325.111 595.134 321.757C595.134 286.669 595.125 251.577 595.147 216.489C595.147 212.619 593.941 209.487 590.361 207.593C589.246 207 588.049 206.679 586.769 206.718C586.443 206.727 586.118 206.718 585.792 206.718C404.031 206.718 222.273 206.718 40.5116 206.718C36.0815 206.718 32.9445 208.902 31.7383 212.78C31.4779 213.625 31.4345 214.478 31.4345 215.345C31.4345 254.332 31.4345 293.32 31.4345 332.308C31.4345 337.468 35.1356 341.012 40.4899 341.012C162.565 341.012 284.645 341.012 406.721 341.012C408.416 341.012 409.263 341.866 409.263 343.573C409.263 346.767 409.224 349.964 409.285 353.158C409.307 354.245 409.055 354.808 407.866 354.626C407.55 354.579 407.215 354.618 406.89 354.618C284.65 354.618 162.409 354.618 40.1731 354.618C27.5382 354.618 17.793 344.912 17.793 332.325C17.793 293.333 17.793 254.345 17.793 215.358C17.793 202.736 27.4818 193.082 40.1514 193.082C131.169 193.082 222.182 193.082 313.2 193.082Z"
                            fill="#EC008C"
                          />
                          <path
                            d="M440.547 307.476C440.148 308.208 440.304 308.806 440.304 309.369C440.295 324.309 440.278 339.249 440.326 354.189C440.33 355.575 440.057 356.035 438.573 355.996C434.242 355.883 429.903 355.9 425.569 355.987C424.202 356.013 423.885 355.614 423.89 354.28C423.929 320.232 423.92 286.184 423.92 252.136C423.92 250.892 423.972 249.644 423.903 248.401C423.846 247.387 424.111 246.975 425.243 246.993C429.361 247.062 433.479 247.049 437.596 246.997C438.59 246.984 438.915 247.27 438.885 248.279C438.816 250.632 438.863 252.989 438.863 255.723C439.926 254.501 440.69 253.548 441.527 252.669C447.281 246.607 454.548 244.804 462.636 244.969C480.226 245.329 494.428 261.885 494.519 279.871C494.579 291.942 490.249 301.943 481.007 309.685C471.991 317.238 456.918 318.806 447.381 313.412C444.751 311.926 442.569 309.924 440.547 307.476ZM439.319 284.455C439.362 288.783 442.634 294.893 449.902 298.546C456.844 302.029 463.695 301.635 469.995 297.124C476.634 292.367 479.102 285.551 477.966 277.618C476.916 270.299 472.88 264.827 465.951 262.075C452.978 256.932 439.328 266.634 439.323 284.455H439.319Z"
                            fill="#EC008C"
                          />
                          <path
                            d="M522.782 307.055C522.782 308.074 522.782 308.594 522.782 309.118C522.782 324.17 522.765 339.227 522.812 354.28C522.812 355.601 522.539 356.026 521.146 355.996C516.868 355.896 512.581 355.896 508.299 355.996C506.824 356.03 506.433 355.645 506.433 354.146C506.481 320.085 506.463 286.023 506.481 251.967C506.481 250.364 505.787 248.284 506.806 247.283C507.743 246.364 509.804 247.049 511.366 247.032C514.295 246.997 517.224 247.066 520.148 246.997C521.237 246.971 521.528 247.339 521.498 248.379C521.428 250.684 521.476 252.994 521.476 255.589C522.869 254.073 523.967 252.686 525.251 251.507C530.909 246.321 537.747 244.822 545.227 244.973C562.796 245.329 576.776 261.902 577.049 279.268C577.253 292.393 572.571 303.151 561.945 310.842C553.215 317.164 543.349 318.074 533.143 314.855C529.004 313.55 525.798 310.79 522.778 307.055H522.782ZM560.787 280.768C560.804 269.762 552.369 260.789 541.969 260.758C530.549 260.724 521.775 269.472 521.806 280.867C521.836 291.921 530.319 300.747 540.927 300.764C552.23 300.786 560.774 292.185 560.791 280.768H560.787Z"
                            fill="#EC008C"
                          />
                          <path
                            d="M311.92 305.145C303.902 317.541 285.453 319.66 273.061 312.108C261.458 305.032 254.26 290.278 256.113 276.734C258.252 261.131 267.719 249.714 281.96 246.065C292.395 243.392 301.81 245.472 309.742 253.067C309.894 253.215 310.067 253.34 310.28 253.518C310.74 253.028 310.519 252.469 310.519 251.984C310.536 243.431 310.571 234.878 310.493 226.324C310.48 224.834 310.931 224.544 312.311 224.57C316.697 224.656 321.088 224.63 325.479 224.578C326.525 224.565 326.868 224.838 326.868 225.93C326.837 255 326.842 284.069 326.868 313.143C326.868 314.183 326.534 314.4 325.57 314.391C321.453 314.343 317.331 314.33 313.213 314.4C312.089 314.417 311.877 314.027 311.903 313.017C311.968 310.543 311.924 308.065 311.924 305.149L311.92 305.145ZM272.197 280.425C272.206 291.877 280.762 300.76 291.779 300.76C302.843 300.76 311.66 291.821 311.634 280.625C311.612 269.701 302.613 260.836 291.571 260.845C281.135 260.854 272.184 269.901 272.193 280.425H272.197Z"
                            fill="#EC008C"
                          />
                          <path
                            d="M203.312 294.915C201.386 300.621 197.928 304.941 193.433 308.52C175.639 322.693 150.091 317.589 139.361 297.714C132.198 284.442 135.087 266.733 145.713 255.637C157.064 243.786 174.892 242.17 186.495 248.6C199.104 255.589 205.742 266.452 205.747 281.045C205.747 282.869 205.304 284.689 205.135 286.517C205.031 287.648 204.549 287.986 203.377 287.973C196.552 287.908 189.723 287.943 182.893 287.943C173.409 287.943 163.928 287.943 154.443 287.943C152.656 287.943 152.656 287.952 153.328 289.589C156.417 297.146 164.583 301.743 172.944 300.643C177.439 300.049 181.605 298.71 184.915 295.422C185.297 295.045 185.692 294.906 186.213 294.906C191.845 294.915 197.477 294.915 203.304 294.915H203.312ZM189.133 273.397C187.597 266.478 179.579 260.897 171.135 260.849C162.839 260.797 154.257 266.599 152.651 273.397H189.133Z"
                            fill="#EC008C"
                          />
                          <path
                            d="M394.645 256.204C394.645 253.305 394.689 250.84 394.624 248.375C394.593 247.317 394.914 246.979 395.999 246.997C400.117 247.057 404.234 247.053 408.356 246.997C409.393 246.984 409.615 247.348 409.615 248.305C409.593 269.905 409.593 291.504 409.615 313.104C409.615 314.079 409.38 314.404 408.356 314.391C404.239 314.335 400.121 314.33 395.999 314.391C394.94 314.408 394.589 314.122 394.624 313.043C394.697 310.621 394.645 308.199 394.645 305.374C393.851 306.28 393.335 306.934 392.753 307.519C386.037 314.27 377.862 317.281 368.443 316.371C353.911 314.972 344.939 306.622 340.261 293.151C338.708 288.684 338.422 284.074 338.504 279.407C338.743 265.906 344.96 255.793 356.38 248.955C362.511 245.285 369.341 244.276 376.496 245.389C383.364 246.459 389.035 249.458 393.396 254.891C393.665 255.229 393.994 255.52 394.65 256.196L394.645 256.204ZM374.669 261.083C363.427 259.948 354.584 270.416 354.666 281.426C354.749 292.367 364.412 300.937 374.621 300.851C385.985 300.755 394.185 292.475 394.19 280.512C394.19 269.879 386.362 260.32 374.673 261.087L374.669 261.083Z"
                            fill="#EC008C"
                          />
                          <path
                            d="M78.1476 253.171C83.4107 247.179 89.854 244.787 97.139 245.004C109.648 245.372 121.25 254.172 122.365 268.271C122.739 272.968 122.956 277.661 122.947 282.371C122.934 292.549 122.917 302.727 122.973 312.9C122.982 314.144 122.635 314.417 121.441 314.4C117.107 314.326 112.768 314.313 108.438 314.4C107.066 314.43 106.628 314.161 106.637 312.666C106.711 301.462 106.685 290.257 106.672 279.052C106.672 276.118 106.338 273.215 105.513 270.399C103.786 264.467 98.9614 260.771 93.1299 260.849C86.8688 260.931 81.8747 264.818 80.3083 270.854C79.6271 273.488 79.3625 276.179 79.3581 278.891C79.3451 290.153 79.3191 301.41 79.3928 312.671C79.4015 314.157 78.972 314.434 77.5965 314.404C73.2099 314.313 68.8189 314.339 64.4279 314.395C63.3952 314.408 63.0611 314.161 63.0655 313.069C63.1002 291.526 63.1002 269.979 63.0655 248.435C63.0655 247.291 63.3779 246.984 64.5103 247.001C68.628 247.066 72.7456 247.053 76.8676 247.005C77.8482 246.992 78.2213 247.252 78.1649 248.275C78.0825 249.766 78.1432 251.265 78.1432 253.171H78.1476Z"
                            fill="#EC008C"
                          />
                          <path
                            d="M233.298 253.089C234.756 251.325 235.871 249.813 237.294 248.561C240.501 245.736 244.367 244.995 248.458 244.887C249.183 244.865 249.239 245.259 249.239 245.797C249.235 250.455 249.222 255.108 249.248 259.766C249.252 260.767 248.619 260.685 247.959 260.763C245.026 261.113 242.232 261.88 239.759 263.592C235.966 266.218 234.912 270.152 234.864 274.385C234.747 284.563 234.804 294.741 234.791 304.919C234.791 307.627 234.739 310.335 234.812 313.039C234.843 314.114 234.509 314.404 233.45 314.391C229.007 314.335 224.559 314.304 220.116 314.404C218.724 314.434 218.446 314.014 218.45 312.693C218.494 293.688 218.481 274.684 218.481 255.68C218.481 253.189 218.515 250.697 218.463 248.21C218.446 247.3 218.728 246.997 219.656 247.006C223.774 247.049 227.896 247.049 232.014 247.006C232.986 246.993 233.376 247.239 233.315 248.271C233.233 249.722 233.294 251.182 233.294 253.093L233.298 253.089Z"
                            fill="#EC008C"
                          />
                          <path
                            d="M472.916 355.957C466.902 355.957 460.888 355.913 454.874 355.991C453.551 356.009 453.273 355.588 453.295 354.358C453.369 350.354 453.356 346.346 453.295 342.343C453.278 341.281 453.581 340.982 454.649 340.986C466.841 341.021 479.029 341.025 491.222 340.986C492.324 340.986 492.567 341.337 492.549 342.364C492.497 346.424 492.484 350.484 492.554 354.54C492.571 355.675 492.259 355.991 491.117 355.978C485.052 355.922 478.982 355.952 472.911 355.952L472.916 355.957Z"
                            fill="#EC008C"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_694_1162">
                            <rect
                              width="591"
                              height="163"
                              fill="white"
                              transform="translate(17.793 193)"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                  </div>
                  <div
                    style={{
                      WebkitTransform:
                        "translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                      MozTransform:
                        "translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                      msTransform:
                        "translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                      transform:
                        "translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                    }}
                    className="logo__single-wrapper is-1"
                  >
                    <div className="logo-wrapper w-embed">
                      <img src={layer_1_4} alt="Logo" />
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    width: "0%",
                    height: "0%",
                  }}
                  className="logo-cover"
                ></div>
              </div>
              <div
                data-w-id="0399fad0-9f5b-9a9a-2a47-7d2e7e2059d9"
                className="logo__single"
              >
                <div
                  style={{
                    WebkitTransform:
                      "translate3d(0, 3em, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                    MozTransform:
                      "translate3d(0, 3em, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                    msTransform:
                      "translate3d(0, 3em, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                    transform:
                      "translate3d(0, 3em, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                    opacity: 0,
                  }}
                  className="logos-change-wrapper"
                >
                  <div
                    style={{
                      WebkitTransform:
                        "translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                      MozTransform:
                        "translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                      msTransform:
                        "translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                      transform:
                        "translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                    }}
                    className="logo__single-wrapper is-1"
                  >
                    <div className="logo-wrapper w-embed"></div>
                  </div>
                  <div
                    style={{
                      WebkitTransform:
                        "translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                      MozTransform:
                        "translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                      msTransform:
                        "translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                      transform:
                        "translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                    }}
                    className="logo__single-wrapper is-1"
                  >
                    <div className="logo-wrapper w-embed">
                      <img src={layer_1_5} alt="Logo" />
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    width: "0%",
                    height: "0%",
                  }}
                  className="logo-cover"
                ></div>
              </div>
              <div className="logo__single is-empty hide-tablet"></div>
              <div
                data-w-id="8a9643ad-4fab-0beb-55e6-1d730c8205f1"
                className="logo__single"
              >
                <div
                  style={{
                    WebkitTransform:
                      "translate3d(0, 3em, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                    MozTransform:
                      "translate3d(0, 3em, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                    msTransform:
                      "translate3d(0, 3em, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                    transform:
                      "translate3d(0, 3em, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                    opacity: 0,
                  }}
                  className="logos-change-wrapper"
                >
                  <div
                    style={{
                      WebkitTransform:
                        "translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                      MozTransform:
                        "translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                      msTransform:
                        "translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                      transform:
                        "translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                    }}
                    className="logo__single-wrapper is-3"
                  >
                    <div className="logo-wrapper w-embed">
                      <svg
                        width="100%"
                        height="100%"
                        viewBox="0 0 626 519"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_697_1545)">
                          <path
                            d="M15.9863 372.044C18.2528 375.203 21.2703 377.75 24.7673 379.456C28.2642 381.162 32.1309 381.972 36.0195 381.815C44.1727 381.815 49.9954 379.101 49.9954 375.067C49.9954 370.259 46.1906 369.947 32.9892 368.397C21.4965 367.077 13.2652 365.218 13.2652 356.376C13.2652 348.234 21.3403 342.263 33.92 342.263C43.9382 342.263 53.0223 346.063 56.8271 351.956L51.0044 356.763C47.7431 351.956 41.4549 349.241 33.6109 349.241C24.6797 349.241 20.8749 352.342 20.8749 355.599C20.8749 359.165 23.7488 360.098 35.6288 361.415C49.3737 362.965 57.8361 364.515 57.8361 374.13C57.8361 383.745 48.0522 388.787 35.785 388.787C24.6797 388.787 14.3523 384.21 10.082 377.387L15.9863 372.044ZM91.4613 375.61L97.5185 378.789C94.3659 385.258 87.6293 389.204 80.4341 388.79C69.4069 388.79 61.3318 381.811 61.3318 371.654C61.3318 361.961 69.0977 354.517 80.4341 354.517C91.305 354.517 98.2149 361.73 98.2149 371.267V373.903H68.5542C69.1705 376.517 70.7127 378.82 72.896 380.388C75.0794 381.955 77.7567 382.682 80.4341 382.432C85.1867 382.721 89.6065 379.986 91.4613 375.61ZM68.7886 368.244H90.8396C89.491 363.501 84.9659 360.383 80.0468 360.8C75.0292 360.414 70.392 363.481 68.7886 368.244ZM101.249 378.558C101.249 372.743 106.062 369.33 113.985 368.4L128.348 366.694V366.459C128.348 363.281 125.552 360.953 119.42 360.953C115.061 360.56 110.863 362.7 108.627 366.459L102.414 363.667C104.51 358.161 111.732 354.517 119.729 354.517C129.9 354.517 135.726 358.704 135.726 366.616V380.495C135.726 382.358 136.579 383.209 140.618 382.28V388.095C133.552 389.567 130.369 386.931 129.282 383.596C125.401 387.098 120.297 388.936 115.072 388.716C107.384 388.794 101.249 385.381 101.249 378.558ZM128.348 372.587L115.225 374.137C110.798 374.602 108.624 375.688 108.624 378.48C108.624 381.272 111.263 382.666 115.612 382.666C121.278 382.666 128.344 380.186 128.344 375.301L128.348 372.587ZM151.951 388.095H144.42V342.962H151.951V359.325C155.389 356.051 160.016 354.314 164.762 354.517C167.102 354.378 169.445 354.717 171.648 355.515C173.851 356.314 175.868 357.553 177.574 359.158C179.28 360.763 180.639 362.7 181.568 364.848C182.497 366.997 182.977 369.313 182.977 371.654C182.977 373.994 182.497 376.31 181.568 378.459C180.639 380.608 179.28 382.544 177.574 384.149C175.868 385.754 173.851 386.994 171.648 387.792C169.445 388.59 167.102 388.93 164.762 388.79C162.411 388.906 160.061 388.539 157.858 387.712C155.655 386.885 153.644 385.616 151.951 383.983V388.095ZM151.642 371.888C151.719 373.387 152.096 374.855 152.75 376.206C153.405 377.557 154.324 378.764 155.453 379.754C156.583 380.744 157.899 381.498 159.325 381.972C160.752 382.445 162.258 382.628 163.757 382.51C165.275 382.653 166.806 382.479 168.253 381.999C169.7 381.519 171.032 380.745 172.164 379.724C173.295 378.703 174.202 377.459 174.827 376.069C175.452 374.68 175.781 373.177 175.793 371.654C175.793 364.675 170.279 360.797 163.757 360.797C162.258 360.679 160.752 360.862 159.325 361.336C157.899 361.809 156.583 362.563 155.453 363.553C154.324 364.544 153.405 365.75 152.75 367.101C152.096 368.452 151.719 369.921 151.642 371.42V371.888ZM216.634 375.61L222.691 378.789C219.538 385.258 212.802 389.204 205.606 388.79C194.579 388.79 186.504 381.811 186.504 371.654C186.504 361.961 194.27 354.517 205.606 354.517C216.477 354.517 223.387 361.73 223.387 371.267V373.903H193.723C194.493 376.235 195.938 378.286 197.875 379.798C199.812 381.309 202.154 382.214 204.606 382.396C207.057 382.579 209.508 382.032 211.648 380.824C213.789 379.616 215.526 377.801 216.634 375.61ZM194.036 368.244H216.09C214.738 363.504 210.216 360.383 205.297 360.8C200.273 360.393 195.619 363.467 194.036 368.244ZM246.063 354.517C249.571 354.366 253.045 355.258 256.044 357.08C259.044 358.902 261.435 361.573 262.913 364.753L256.856 368.244C256.008 366.064 254.511 364.197 252.567 362.893C250.624 361.589 248.326 360.912 245.985 360.953C239.228 360.953 234.105 364.987 234.105 371.732C234.105 378.476 239.228 382.51 245.985 382.51C248.326 382.551 250.624 381.874 252.567 380.57C254.511 379.267 256.008 377.399 256.856 375.219L262.835 378.785C259.781 385.204 253.174 389.177 246.063 388.865C235.27 388.865 226.883 381.886 226.883 371.728C226.883 361.493 235.27 354.514 246.063 354.514V354.517ZM274.562 371.654L294.13 355.135H304.688L287.138 369.56L305.385 388.095H295.679L281.703 373.981L274.559 379.874V388.017H267.027V342.884H274.559L274.562 371.654ZM325.965 372.044C328.232 375.204 331.25 377.751 334.747 379.457C338.245 381.163 342.112 381.973 346.001 381.815C354.154 381.815 359.977 379.101 359.977 375.067C359.977 370.259 356.172 369.947 342.971 368.397C331.475 367.077 323.247 365.218 323.247 356.376C323.247 348.234 331.325 342.263 343.902 342.263C353.917 342.263 363.001 346.063 366.806 351.956L360.983 356.763C357.722 351.956 351.437 349.241 343.589 349.241C334.662 349.241 330.857 352.342 330.857 355.599C330.857 359.165 333.731 360.098 345.607 361.415C359.352 362.965 367.818 364.515 367.818 374.13C367.818 383.745 358.034 388.787 345.763 388.787C334.662 388.787 324.334 384.21 320.06 377.387L325.965 372.044ZM377.058 399.959C374.707 399.962 372.384 399.487 370.223 398.565L371.697 392.207C373.198 393.025 374.88 393.452 376.589 393.448C378.18 393.578 379.768 393.165 381.095 392.278C382.421 391.391 383.407 390.081 383.893 388.563L384.281 387.399L367.736 355.141H376.127L388.242 379.8L400.043 355.141H408.197L390.491 391.199C389.496 393.91 387.651 396.227 385.23 397.807C382.81 399.386 379.944 400.142 377.058 399.962V399.959ZM411.376 376.309C413.009 378.404 415.128 380.07 417.55 381.164C419.972 382.258 422.624 382.747 425.278 382.588C430.482 382.588 434.049 381.425 434.049 378.554C434.049 375.684 431.257 375.606 423.335 374.677C414.719 373.591 408.197 372.193 408.197 365.214C408.197 359.009 414.25 354.514 423.803 354.514C426.956 354.31 430.114 354.818 433.044 355.999C435.974 357.18 438.6 359.004 440.728 361.336L435.918 365.991C432.816 362.415 428.22 360.495 423.491 360.794C417.981 360.794 415.419 362.266 415.419 364.593C415.419 366.921 417.899 367.23 425.121 368.085C433.974 369.17 441.509 370.256 441.509 377.856C441.509 385.299 433.743 388.868 425.434 388.868C416.968 388.868 409.746 386.076 406.097 381.191L411.376 376.309ZM450.668 361.574H442.359V355.138H450.668V345.445H458.122V355.138H472.641V361.574H458.047V376.152C458.047 380.417 460.377 381.737 465.344 381.737C467.812 381.67 470.252 381.199 472.566 380.342L473.81 386.778C470.667 387.895 467.362 388.499 464.026 388.563C456.96 388.563 450.593 385.771 450.593 376.855V361.574H450.668ZM506.11 375.61L512.171 378.789C510.627 381.953 508.182 384.591 505.141 386.37C502.101 388.15 498.601 388.992 495.083 388.79C484.062 388.79 475.984 381.811 475.984 371.654C475.984 361.961 483.75 354.517 495.083 354.517C497.374 354.34 499.677 354.645 501.843 355.411C504.009 356.178 505.99 357.389 507.658 358.968C509.326 360.546 510.645 362.456 511.529 364.574C512.413 366.693 512.842 368.973 512.789 371.267V373.903H483.125C484.718 378.677 489.026 382.025 494.05 382.398C499.074 382.772 503.83 380.095 506.11 375.61ZM483.437 368.244H505.492C504.14 363.501 499.615 360.38 494.696 360.8C489.678 360.414 485.041 363.481 483.437 368.244ZM517.993 355.138H525.521V359.325C528.446 356.051 532.703 354.28 537.092 354.517C539.398 354.378 541.699 354.876 543.74 355.957C545.781 357.038 547.484 358.66 548.663 360.644C550.292 358.675 552.348 357.101 554.674 356.04C557.001 354.979 559.538 354.458 562.095 354.517C572.348 354.517 577.24 360.953 577.24 370.493V388.173H569.705V371.423C569.705 365.608 567.144 361.421 560.934 361.421C554.486 361.421 551.381 365.452 551.381 371.501V388.095H543.846V371.345C543.846 365.53 541.284 361.34 535.074 361.34C528.552 361.34 525.521 365.374 525.521 371.42V388.017H517.993V355.138ZM585.78 376.309C587.413 378.404 589.532 380.07 591.954 381.164C594.376 382.258 597.028 382.747 599.682 382.588C604.879 382.588 608.453 381.425 608.453 378.554C608.453 375.684 605.661 375.606 597.739 374.677C589.117 373.591 582.594 372.193 582.594 365.214C582.594 359.009 588.654 354.514 598.201 354.514C604.591 354.103 610.818 356.614 615.132 361.336L610.315 365.991C608.786 364.227 606.869 362.84 604.715 361.939C602.56 361.037 600.226 360.645 597.895 360.794C592.378 360.794 589.816 362.266 589.816 364.593C589.816 366.921 592.303 367.23 599.525 368.085C608.379 369.17 615.907 370.256 615.907 377.856C615.907 385.299 608.141 388.868 599.831 388.868C591.372 388.868 584.15 386.076 580.501 381.191L585.78 376.309Z"
                            fill="#05050C"
                          />
                          <path
                            d="M293.456 119.434L202.688 289.92L273.601 226.656C279.979 220.977 285.076 214.009 288.554 206.214C292.032 198.418 293.811 189.974 293.773 181.44L293.456 119.434ZM332.536 240.087L423.299 69.6L352.391 132.864C346.013 138.543 340.917 145.512 337.44 153.307C333.963 161.102 332.185 169.547 332.223 178.08L332.536 240.087Z"
                            fill="#0956C2"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_697_1545">
                            <rect
                              width="625.39"
                              height="518.51"
                              fill="white"
                              transform="translate(0.298828 0.40332)"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                  </div>
                  <div
                    style={{
                      WebkitTransform:
                        "translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                      MozTransform:
                        "translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                      msTransform:
                        "translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                      transform:
                        "translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                    }}
                    className="logo__single-wrapper is-3"
                  >
                    <div className="logo-wrapper w-embed">
                      <img src={layer_1_6} alt="Logo" />
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    width: "0%",
                    height: "0%",
                  }}
                  className="logo-cover"
                ></div>
              </div>
              <div className="logo__single is-empty"></div>
              <div
                data-w-id="25d15675-1f16-05fb-9669-279b84e3a9c4"
                className="logo__single"
              >
                <div className="logos-change-wrapper is-oposite">
                  <div
                    style={{
                      WebkitTransform:
                        "translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                      MozTransform:
                        "translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                      msTransform:
                        "translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                      transform:
                        "translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                    }}
                    className="logo__single-wrapper is-2"
                  >
                    <div className="logo-wrapper w-embed">
                      <img src={layer_1_7} alt="Logo" />
                    </div>
                  </div>
                  <div
                    style={{
                      WebkitTransform:
                        "translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                      MozTransform:
                        "translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                      msTransform:
                        "translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                      transform:
                        "translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                    }}
                    className="logo__single-wrapper is-2"
                  >
                    <div className="logo-wrapper w-embed">
                      <svg
                        width="100%"
                        height="100%"
                        viewBox="0 0 626 519"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M466.989 252.606C467.252 252.414 467.345 252.376 467.384 252.31C470.457 247.215 475.207 244.498 480.816 243.243C487.763 241.688 494.567 242.208 501.015 245.484C504.916 247.462 508.17 250.19 510.536 253.91C510.629 254.052 510.745 254.178 510.914 254.397C511.166 254.047 511.391 253.751 511.605 253.45C515.828 247.484 521.674 244.093 528.801 242.898C534.52 241.94 540.169 242.334 545.543 244.673C554.363 248.514 559.562 255.268 561.331 264.686C561.704 266.669 561.835 268.674 561.83 270.69C561.819 286.232 561.824 301.768 561.824 317.31C561.824 317.573 561.802 317.836 561.824 318.099C561.885 318.696 561.698 318.959 561.03 318.954C555.552 318.932 550.073 318.932 544.601 318.954C544.003 318.954 543.686 318.8 543.751 318.143C543.784 317.842 543.751 317.529 543.751 317.223C543.751 303.302 543.751 289.382 543.751 275.461C543.751 273.221 543.609 270.991 542.858 268.86C541.209 264.154 538.251 260.73 533.217 259.558C529.48 258.687 525.815 258.994 522.353 260.769C518.529 262.735 516.502 266.039 515.56 270.098C515.182 271.72 515.029 273.374 515.029 275.045C515.04 289.185 515.034 303.324 515.029 317.464C515.029 319.124 515.226 318.937 513.566 318.937C508.482 318.943 503.398 318.937 498.32 318.937C498.013 318.937 497.706 318.932 497.399 318.937C497.016 318.948 496.835 318.779 496.846 318.39C496.857 318.039 496.846 317.688 496.846 317.338C496.846 303.417 496.846 289.497 496.846 275.576C496.846 272.887 496.55 270.252 495.559 267.732C493.46 262.412 488.787 259.229 483.057 259.131C479.726 259.076 476.609 259.711 473.892 261.733C470.539 264.225 468.868 267.699 468.205 271.731C467.986 273.073 467.948 274.426 467.948 275.785C467.948 289.574 467.948 303.363 467.948 317.151C467.948 317.414 467.948 317.677 467.948 317.94C467.931 318.921 467.926 318.937 466.923 318.937C461.533 318.943 456.142 318.943 450.757 318.937C449.782 318.937 449.765 318.921 449.765 317.913C449.76 313.36 449.765 308.808 449.765 304.255C449.765 284.687 449.765 265.124 449.765 245.555C449.765 243.873 449.535 244.125 451.234 244.12C456.098 244.109 460.963 244.12 465.822 244.12C467.066 244.12 466.973 243.999 466.973 245.227C466.973 247.621 466.973 250.015 466.973 252.611L466.989 252.606Z"
                          fill="#010101"
                        />
                        <path
                          d="M296.055 249.62C295.628 248.673 295.315 247.856 294.91 247.089C290.582 238.927 284.014 233.739 274.766 232.325C266.554 231.071 258.786 232.336 251.79 237.026C245.063 241.534 240.762 247.845 238.702 255.603C236.188 265.075 236.401 274.514 240.056 283.679C243.332 291.885 249.013 297.906 257.29 301.27C262.166 303.253 267.266 303.801 272.498 303.363C275.308 303.127 278.048 302.601 280.661 301.544C287.613 298.722 292.549 293.83 295.523 286.96C296.044 285.761 296.033 285.761 297.255 286.325C302.048 288.56 306.842 290.79 311.63 293.036C312.019 293.217 312.462 293.321 312.791 293.715C311.389 297.654 309.28 301.204 306.562 304.387C299.627 312.506 290.829 317.497 280.392 319.546C271.479 321.293 262.566 321.14 253.916 318.247C235.832 312.21 224.393 299.769 219.846 281.345C216.745 268.772 217.622 256.265 222.958 244.361C229.767 229.164 241.589 219.818 257.75 216.077C267.321 213.863 276.914 214.241 286.26 217.375C295.518 220.476 303.182 225.866 308.814 233.952C310.37 236.187 311.624 238.581 312.605 241.123C312.775 241.567 312.775 241.825 312.304 242.044C306.918 244.542 301.533 247.056 296.049 249.615L296.055 249.62Z"
                          fill="#010101"
                        />
                        <path
                          d="M395.881 281.214C395.913 301.598 382.168 314.993 368.231 318.833C352.931 323.046 339.131 320.093 327.615 308.846C321.091 302.475 317.524 294.564 316.724 285.443C316.04 277.598 317.064 270.038 320.86 263.064C326.908 251.943 336.304 245.303 348.751 243.106C356.902 241.666 364.944 242.307 372.559 245.67C384.562 250.968 392.144 260.045 395.031 272.903C395.656 275.686 395.815 278.529 395.881 281.219V281.214ZM356.108 259.141C354.782 259.076 353.298 259.224 351.84 259.547C344.916 261.081 340.139 265.272 337.317 271.665C334.934 277.067 334.836 282.737 336.276 288.379C339.262 300.081 349.375 305.598 360.222 303.691C365.931 302.689 370.264 299.506 373.326 294.646C377.189 288.522 377.835 281.838 376.142 274.952C373.951 266.044 366.276 259.015 356.108 259.141Z"
                          fill="#010101"
                        />
                        <path
                          d="M108.531 341.678C108.531 345.529 108.537 349.38 108.531 353.232C108.531 354.179 108.488 354.201 107.71 354.125C97.909 353.122 88.563 350.503 79.7429 346.115C64.283 338.418 52.5814 326.854 44.4461 311.657C41.4056 304.546 38.3761 297.435 37.0284 289.749C36.6614 287.64 36.3381 285.525 36.0587 283.4C36.0259 283.142 36.0259 282.874 35.993 282.616C35.9163 282.035 36.0478 281.663 36.7435 281.756C36.9134 281.778 37.0941 281.756 37.2695 281.756C44.7145 281.756 52.1595 281.756 59.61 281.756C59.7415 281.756 59.873 281.767 60.0045 281.756C60.6454 281.679 60.9029 281.92 61.0015 282.605C61.4562 285.903 62.2013 289.141 63.3408 292.274C69.3121 308.709 80.477 320.055 96.8736 326.207C100.193 327.451 103.634 328.316 107.156 328.804C107.37 328.831 107.584 328.924 107.797 328.93C108.444 328.946 108.575 329.308 108.553 329.878C108.515 330.792 108.542 331.713 108.542 332.633C108.542 335.652 108.542 338.67 108.542 341.689L108.531 341.678Z"
                          fill="#F1455D"
                        />
                        <path
                          d="M48.4457 267.321C44.8519 267.321 41.2636 267.321 37.6698 267.321C37.363 267.321 37.0562 267.304 36.7495 267.321C36.1414 267.365 35.8565 267.151 35.9387 266.494C36.0811 265.321 36.1414 264.138 36.3112 262.977C37.3192 256.068 39.149 249.385 41.8936 242.953C46.2653 232.709 52.527 223.768 60.613 216.115C71.5258 205.777 84.3944 199.149 99.142 196.185C101.843 195.643 104.566 195.204 107.321 195.034C108.521 194.963 108.537 194.98 108.537 196.223C108.537 203.619 108.537 211.015 108.537 218.41C108.537 219.528 108.521 219.517 107.436 219.758C101.487 221.078 95.625 222.716 90.1905 225.527C80.6965 230.435 73.257 237.552 67.828 246.755C64.2506 252.82 62.0538 259.377 60.9965 266.324C60.8486 267.293 60.8431 267.315 59.8844 267.315C56.0715 267.326 52.2641 267.315 48.4511 267.315L48.4457 267.321Z"
                          fill="#FCD739"
                        />
                        <path
                          d="M122.972 341.503C122.972 337.827 122.962 334.151 122.978 330.475C122.989 328.749 122.715 329.094 124.413 328.815C130.867 327.741 137.013 325.752 142.656 322.449C157.234 313.919 166.454 301.467 169.856 284.84C170.004 284.112 170.196 283.383 170.239 282.649C170.289 281.871 170.678 281.701 171.341 281.772C171.56 281.794 171.779 281.772 171.998 281.772H193.95C194.081 281.772 194.213 281.772 194.344 281.772C195.664 281.783 195.67 281.783 195.516 283.082C191.928 313.799 170.76 341.93 137.874 351.413C133.277 352.739 128.593 353.604 123.849 354.136C123.005 354.229 122.978 354.218 122.978 353.319C122.967 349.38 122.978 345.441 122.978 341.503H122.972Z"
                          fill="#4BAE2E"
                        />
                        <path
                          d="M126.643 195.062C127.053 195.045 127.464 195.012 127.87 195.007C149.904 195.007 171.937 195.007 193.971 195.007C195.763 195.007 195.576 194.87 195.576 196.645C195.587 218.744 195.593 240.844 195.598 262.943C195.598 263.415 195.598 263.886 195.516 264.395C181.689 232.227 158.57 209.327 126.643 195.062Z"
                          fill="#588DF0"
                        />
                        <path
                          d="M420.396 253.504C420.746 253.461 420.807 253.291 420.878 253.148C423.371 248.158 427.6 245.495 432.848 244.164C435.938 243.38 439.071 243.233 442.232 243.304C443.093 243.32 444.177 242.909 444.747 243.501C445.251 244.027 444.895 245.084 444.9 245.906C444.917 250.02 444.906 254.134 444.906 258.249C444.906 259.509 444.966 259.405 443.799 259.405C441.652 259.405 439.504 259.35 437.362 259.432C433.347 259.585 429.725 260.829 426.69 263.546C423.787 266.143 422.291 269.463 421.672 273.248C421.398 274.941 421.382 276.645 421.382 278.354C421.382 291.392 421.382 304.436 421.382 317.475C421.382 319.041 421.623 318.943 419.903 318.943C414.775 318.943 409.653 318.943 404.525 318.943C403.232 318.943 403.199 319.14 403.199 317.71C403.199 293.556 403.199 269.397 403.199 245.243C403.199 244.01 403.095 244.12 404.333 244.12C409.33 244.12 414.32 244.12 419.317 244.12C420.434 244.12 420.396 244.043 420.396 245.172C420.396 247.927 420.396 250.683 420.396 253.504Z"
                          fill="#010101"
                        />
                        <path
                          d="M590.349 281.466C590.349 293.365 590.349 305.264 590.349 317.168C590.349 317.475 590.322 317.781 590.349 318.088C590.431 318.811 590.081 318.959 589.429 318.954C583.956 318.932 578.478 318.932 573.005 318.954C572.336 318.954 572.019 318.773 572.106 318.066C572.139 317.809 572.106 317.54 572.106 317.277C572.106 293.436 572.106 269.589 572.106 245.747C572.106 243.923 571.816 244.125 573.668 244.12C578.746 244.109 583.83 244.115 588.908 244.12C590.464 244.12 590.327 243.928 590.333 245.506C590.333 257.493 590.333 269.479 590.333 281.471L590.349 281.466Z"
                          fill="#010101"
                        />
                        <path
                          d="M590.256 235.765C588.887 235.765 587.577 235.765 586.268 235.765C581.891 235.765 577.519 235.765 573.142 235.765C572.139 235.765 572.123 235.749 572.123 234.779C572.123 229.011 572.123 223.242 572.123 217.473C572.123 216.471 572.139 216.449 573.115 216.449C578.538 216.443 583.962 216.443 589.391 216.449C590.322 216.449 590.349 216.471 590.349 217.386C590.355 223.33 590.349 229.274 590.349 235.218C590.349 235.344 590.311 235.47 590.256 235.771V235.765Z"
                          fill="#010101"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    width: "0%",
                    height: "0%",
                  }}
                  className="logo-cover"
                ></div>
              </div>
              <div className="logo__single is-empty"></div>
              <div
                data-w-id="d028ce38-b804-de18-8480-4aa4e1dcf3b5"
                className="logo__single"
              >
                <div
                  style={{
                    WebkitTransform:
                      "translate3d(0, 3em, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                    MozTransform:
                      "translate3d(0, 3em, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                    msTransform:
                      "translate3d(0, 3em, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                    transform:
                      "translate3d(0, 3em, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                    opacity: 0,
                  }}
                  className="logos-change-wrapper"
                >
                  <div
                    style={{
                      WebkitTransform:
                        "translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                      MozTransform:
                        "translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                      msTransform:
                        "translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                      transform:
                        "translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                    }}
                    className="logo__single-wrapper is-3"
                  >
                    <div className="logo-wrapper w-embed">
                      <svg
                        width="100%"
                        viewBox="0 0 627 519"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_694_1125)">
                          <path
                            d="M31.6252 297.933C21.9503 297.933 14.4024 295.737 8.98168 291.346C3.62957 286.954 0.919203 280.538 0.850586 272.099H11.8636C12.0694 283.077 18.7253 288.567 31.8311 288.567C37.2518 288.567 41.4031 287.537 44.285 285.479C47.2356 283.352 48.7108 280.298 48.7108 276.319C48.7108 273.094 47.51 270.623 45.1084 268.908C42.7068 267.124 38.384 265.546 32.1399 264.173L25.8614 262.835C18.3136 261.326 12.6184 258.856 8.77583 255.425C4.93329 251.994 3.01202 247.259 3.01202 241.221C3.01202 235.183 5.34499 230.38 10.0109 226.811C14.6769 223.175 20.9896 221.356 28.9492 221.356C38.5555 221.356 45.7603 223.415 50.5635 227.532C55.4353 231.649 57.9398 237.31 58.077 244.515H47.1669C46.8238 239.78 45.2457 236.315 42.4324 234.119C39.6877 231.855 35.2276 230.723 29.0521 230.723C24.2489 230.723 20.5779 231.615 18.0391 233.399C15.5003 235.183 14.2309 237.722 14.2309 241.015C14.2309 244.377 15.363 246.916 17.6274 248.632C19.8917 250.484 24.0774 252.062 30.1843 253.366L36.5656 254.704C44.9369 256.488 50.9409 259.061 54.5775 262.424C58.2829 265.786 60.1355 270.315 60.1355 276.01C60.1355 282.803 57.5967 288.155 52.519 292.066C47.51 295.977 40.5454 297.933 31.6252 297.933Z"
                            fill="#0A2140"
                          />
                          <path
                            d="M159.248 223.003V232.884H117.975V253.572H155.336V263.247H117.975V286.405H158.939V296.286H106.962V223.003H159.248Z"
                            fill="#0A2140"
                          />
                          <path
                            d="M258.542 223.003V232.884H217.269V253.572H254.631V263.247H217.269V286.405H258.234V296.286H206.256V223.003H258.542Z"
                            fill="#0A2140"
                          />
                          <path
                            d="M360.925 275.907L361.645 287.332C361.988 291.105 362.812 294.09 364.115 296.286H352.794C351.421 294.296 350.701 291.174 350.632 286.92L350.323 279.097C350.118 274.363 349.054 271.035 347.133 269.114C345.212 267.124 342.124 266.129 337.87 266.129H316.564V296.286H305.551V223.003H337.561C345.383 223.003 351.524 224.822 355.984 228.458C360.513 232.026 362.777 236.967 362.777 243.28C362.777 247.74 361.68 251.514 359.484 254.601C357.357 257.62 354.338 259.748 350.426 260.983C353.994 262.012 356.602 263.762 358.249 266.232C359.896 268.633 360.788 271.858 360.925 275.907ZM316.564 256.969H337.767C342.021 256.969 345.349 255.871 347.75 253.675C350.221 251.479 351.456 248.357 351.456 244.309C351.456 240.398 350.186 237.447 347.647 235.457C345.177 233.467 341.609 232.472 336.943 232.472H316.564V256.969Z"
                            fill="#0A2140"
                          />
                          <path
                            d="M421.99 296.286H410.977V223.003H421.99V296.286Z"
                            fill="#0A2140"
                          />
                          <path
                            d="M500.156 297.933C490.481 297.933 482.933 295.737 477.513 291.346C472.16 286.954 469.45 280.538 469.381 272.099H480.394C480.6 283.077 487.256 288.567 500.362 288.567C505.783 288.567 509.934 287.537 512.816 285.479C515.766 283.352 517.242 280.298 517.242 276.319C517.242 273.094 516.041 270.623 513.639 268.908C511.238 267.124 506.915 265.546 500.671 264.173L494.392 262.835C486.844 261.326 481.149 258.856 477.307 255.425C473.464 251.994 471.543 247.259 471.543 241.221C471.543 235.183 473.876 230.38 478.542 226.811C483.208 223.175 489.52 221.356 497.48 221.356C507.086 221.356 514.291 223.415 519.094 227.532C523.966 231.649 526.471 237.31 526.608 244.515H515.698C515.355 239.78 513.777 236.315 510.963 234.119C508.219 231.855 503.758 230.723 497.583 230.723C492.78 230.723 489.109 231.615 486.57 233.399C484.031 235.183 482.762 237.722 482.762 241.015C482.762 244.377 483.894 246.916 486.158 248.632C488.423 250.484 492.608 252.062 498.715 253.366L505.096 254.704C513.468 256.488 519.472 259.061 523.108 262.424C526.814 265.786 528.666 270.315 528.666 276.01C528.666 282.803 526.128 288.155 521.05 292.066C516.041 295.977 509.076 297.933 500.156 297.933Z"
                            fill="#0A2140"
                          />
                          <path
                            d="M566.441 223.003H626.24V232.884H601.95V296.286H590.731V232.884H566.441V223.003Z"
                            fill="#0A2140"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_694_1125">
                            <rect
                              width="625.39"
                              height="518.51"
                              fill="white"
                              transform="translate(0.850586)"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                  </div>
                  <div
                    style={{
                      WebkitTransform:
                        "translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                      MozTransform:
                        "translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                      msTransform:
                        "translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                      transform:
                        "translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                    }}
                    className="logo__single-wrapper is-3"
                  >
                    <div className="logo-wrapper w-embed">
                      <img src={isolationMode} alt="Logo" />
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    width: "0%",
                    height: "0%",
                  }}
                  className="logo-cover"
                ></div>
              </div>
              <div
                data-w-id="0d030dfa-9aa8-2989-2e73-905f6bb869b9"
                className="logo__single"
              >
                <div className="logos-change-wrapper is-oposite">
                  <div
                    style={{
                      WebkitTransform:
                        "translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                      MozTransform:
                        "translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                      msTransform:
                        "translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                      transform:
                        "translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                    }}
                    className="logo__single-wrapper is-2"
                  >
                    <div className="logo-wrapper w-embed">
                      <img src={layer_1_8} alt="Logo" />
                    </div>
                  </div>
                  <div
                    style={{
                      WebkitTransform:
                        "translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                      MozTransform:
                        "translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                      msTransform:
                        "translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                      transform:
                        "translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                    }}
                    className="logo__single-wrapper is-2"
                  >
                    <div className="logo-wrapper w-embed">
                      <img src={isolationMode} alt="Logo" />
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    width: "0%",
                    height: "0%",
                  }}
                  className="logo-cover"
                ></div>
              </div>
              <div className="logo__single is-empty"></div>
            </div>
          </div>
        </section>
        <section className="section is-full logo-changer in-home is-8">
          <div className="related_section radius-36">
            <div className="page-spacing__medium is-related-articles">
              <div className="blog__newsletter-wrapper is-home radius-16">
                <div className="container-small is-inner-related">
                  <div className="newsletter__home-heading">
                    <div className="newsletter__heading-text">
                      <h2 className="text-3 h3 line-height-1-1">
                        Don&#x27;t want to <br />
                        miss anything?
                      </h2>
                    </div>
                    <div className="newsletter__heading-text">
                      <div className="p-body text-3 text-balance">
                        Sign up for our newsletter to discover winning trends
                        before your competition!
                      </div>
                    </div>
                  </div>
                  <div className="blog__newsletter-form">
                    <div
                      fs-formsubmit-enhance="true"
                      fs-formsubmit-element="form"
                      className="blog__newsletter-block w-form"
                    >
                      <form
                        id="email-form"
                        name="email-form"
                        data-name="Email Form"
                        action="https://assets.mailerlite.com/jsonp/614959/forms/100454619644167706/subscribe"
                        method="post"
                        className="blog__newsletter-form"
                        data-wf-page-id="652ab251b8dc5f55fea70ec0"
                        data-wf-element-id="bd262f9d-3f0a-c3cc-1540-073a764f18cc"
                      >
                        <input
                          className="blog__newsletter-field is-home w-input"
                          maxlength="256"
                          name="fields[email]"
                          data-name="fields[email]"
                          placeholder="Email"
                          type="email"
                          id="fields[email]"
                          required=""
                        />
                        <div className="newsletter__button-wrapper is-home">
                          <div
                            data-w-id="3c0b519a-a9a3-60c4-48e0-5d02c9bac54d"
                            className="newsletter-button-text text-3"
                          >
                            Subscribe
                          </div>
                          <input
                            type="submit"
                            data-wait="Please wait..."
                            data-w-id="bd262f9d-3f0a-c3cc-1540-073a764f18cf"
                            className="newsletter__submit-button-inner line-height-1 w-button"
                            value="Subscribe"
                          />
                          <img
                            data-w-id="bd262f9d-3f0a-c3cc-1540-073a764f18d0"
                            loading="lazy"
                            alt=""
                            src="https://assets-global.website-files.com/63793925c7db23ce040b0824/64e8667bfbbf04480e3205e2_Arrow-green.svg"
                            className="newsletter__arrow rel"
                          />
                          <img
                            data-w-id="f919849e-39d4-53c8-64af-1f1f3e944daf"
                            loading="lazy"
                            alt=""
                            src="https://assets-global.website-files.com/63793925c7db23ce040b0824/64e8667bfbbf04480e3205e2_Arrow-green.svg"
                            className="newsletter__arrow ap"
                          />
                        </div>
                      </form>
                      <div className="is--adifico w-form-done">
                        <div className="z-index-5 text-3 is-bold opacity-07 newsletter">
                          Thank you! Your have joined our newsletter!
                          <a
                            href="/#"
                            fs-formsubmit-element="reset"
                            className="newsletter-close text-3 underline-link is-ligher"
                          >
                            Close
                          </a>
                        </div>
                        <div className="success__message-bg opacity-06"></div>
                      </div>
                      <div className="newsletter-error w-form-fail">
                        <div>
                          Oops! Something went wrong while submitting the form.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="footer-new">
                <div className="footer-content-row">
                  <h3 className="text-3 h3">
                    Seeking Inspiration for Activations? Let's Collaborate!
                  </h3>

                  <div className="p-body text-2 text-balance spacing-top-04">
                    We are social:
                  </div>
                  <div className="p-body text-2 text-balance text-blue">
                    Instagram / Facebook / Linkedin
                  </div>
                  <div className="p-body text-2 text-balance spacing-top-02">
                    Privacy Policy
                  </div>
                </div>
                <div className="footer-content-row">
                  <h4 className="text-3 h3 line-height-1-1 text-blue">
                    +971 544437608
                  </h4>
                  <h4 className="text-3 h3 line-height-1-1 text-blue">
                    support@infinix.com
                  </h4>
                  <h4>Business Center 1,</h4>
                  <h5>M Floor, The Meydan Hotel,Nad Al Sheba, Dubai, U.A.E.</h5>

                  <div className="p-body text-2 text-balance spacing-top-08">
                    ©2023 infinix technology solutions Ltd.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <div
        data-w-id="25b693c8-060d-6dbd-c653-6e06b7aa6b3c"
        className="addifico-sory"
      >
        <div
          data-w-id="fdfe489e-a551-9649-4a12-07e994d853d5"
          className="addifico-story p-body"
        >
          <em>Infinix </em>
          <span className="opacity-05">
            - Market Insights
            <em>that make aDifference</em>
          </span>
        </div>
      </div>
      <div
        data-w-id="8b82cde6-841a-9fdc-1c1d-2e0f3243441e"
        style={{
          opacity: 0,
        }}
        className="page-loader"
      >
        <div className="loader__inner">
          <div className="loader__content-wrapper">
            <div className="column-50 is-home-loader">
              <div className="loader_changing-content left">
                <div
                  data-w-id="da1b112b-1394-6cd9-f561-dbe42e1bd39d"
                  style={{
                    WebkitTransform:
                      "translate3d(0, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                    MozTransform:
                      "translate3d(0, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                    msTransform:
                      "translate3d(0, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                    transform:
                      "translate3d(0, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                  }}
                  className="h2 text-right text-3 opacity-05 line-height-1-5"
                >
                  we
                </div>
              </div>
            </div>
            <div className="column-50 is-home-loader">
              <div className="loader_changing-content">
                <div
                  data-w-id="78bf62d3-ad4e-1ca2-a097-dfd5f0ff7a7d"
                  style={{
                    WebkitTransform:
                      "translate3d(0, 33%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                    MozTransform:
                      "translate3d(0, 33%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                    msTransform:
                      "translate3d(0, 33%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                    transform:
                      "translate3d(0, 33%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                  }}
                  className="loader_changing-inner"
                >
                  <div className="h2 text-left text-3 line-height-1-5">
                    analyze
                  </div>
                  <div className="h2 text-left text-3 line-height-1-5">
                    build
                  </div>
                  <div className="h2 text-left text-3 line-height-1-5">
                    grow
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="loader-cut">
            <img
              src="https://assets-global.website-files.com/63793925c7db23ce040b0824/650167bcb96ab5cdf6c1a8ae_Sidecut.svg"
              loading="lazy"
              style={{
                WebkitTransform:
                  "translate3d(0, 0, 0) scale3d(0, 0, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                MozTransform:
                  "translate3d(0, 0, 0) scale3d(0, 0, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                msTransform:
                  "translate3d(0, 0, 0) scale3d(0, 0, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                transform:
                  "translate3d(0, 0, 0) scale3d(0, 0, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                width: "8em",
                height: "8em",
              }}
              data-w-id="38085e0b-5756-9c0c-5b33-358fa5b5c14f"
              alt=""
              className="loader__image"
            />
            <div className="loader__numbers">
              <div
                data-w-id="dceac674-3e6e-12cd-713b-12e22152d84b"
                style={{
                  opacity: 0,
                  WebkitTransform:
                    "translate3d(0, 10px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                  MozTransform:
                    "translate3d(0, 10px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                  msTransform:
                    "translate3d(0, 10px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                  transform:
                    "translate3d(0, 10px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                }}
                className="loader_number h3 text-left is-home"
              >
                99
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="globals">
        <div className="w-embed"></div>

        <div fs-cc="banner" className="cookie-banner">
          <div className="cookie__policy-inner">
            <div className="lottie-wrapper">
              <div
                data-w-id="4f9d4498-162d-967f-5ef7-9caefe7eee86"
                data-animation-type="lottie"
                data-src="https://assets-global.website-files.com/63793925c7db23ce040b0824/650c0b0847b5d025005f6823_Cookie.json"
                data-loop="1"
                data-direction="1"
                data-autoplay="1"
                data-is-ix2-target="0"
                data-renderer="svg"
                data-default-duration="20.02001920458794"
                data-duration="0"
              ></div>
            </div>
            <div className="cookie__text-wrapper">
              <h3 className="p-body">
                Hi! Cookies for vibes, emails by choice. Opt-in for news, ok?
              </h3>
              <div className="cookie__button-wrapper">
                <a
                  stagger-link=""
                  href="/https://www.upwork.com/freelancers/hristodikov/"
                  target="_blank"
                  className="close-button-redirect w-inline-block"
                >
                  <div
                    stagger-link-text="cookie"
                    className="p-body-normal text-leave underline-link is-cookie"
                  >
                    Leave website
                  </div>
                </a>
                <a
                  fs-cc="close"
                  stagger-link=""
                  href="/#"
                  className="close-button w-inline-block"
                >
                  <div
                    stagger-link-text=""
                    className="p-body-normal text-accent underline-link is-cookie"
                  >
                    Accept &amp; Close
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="globals">
        <div className="w-embed"></div>
        <div className="nav">
          <div className="hidden-navigation">
            <div className="nav__wrapper">
              <div className="nav_top-wrapper">
                <a
                  stagger-link=""
                  data-scroll="start"
                  data-w-id="e2c41eac-496c-f159-1a57-a056f0741e2d"
                  href="/#"
                  className="nav_top-single-closer w-inline-block"
                >
                  <img
                    src="https://assets-global.website-files.com/63793925c7db23ce040b0824/64e87091a9432f998933e04b_Nav-close.svg"
                    loading="lazy"
                    alt=""
                    className="image-41"
                  />
                  <div
                    stagger-link-text="pale-green"
                    className="nav-top-closer letter-spacing-0-5 line-height-1 p-body is-nav-closer"
                  >
                    close
                  </div>
                </a>
                <div className="nav_top-single">
                  <div className="p-body nav__top-text letter-spacing-0-5">
                    menu
                  </div>
                </div>
              </div>
              <div className="separator-footer bg--1 opacity-01"></div>
              <div className="nav_main-wrapper">
                <div className="nav_main-top-wrapper">
                  <a
                    stagger-link=""
                    href="/services"
                    className="menu-link w-inline-block"
                  >
                    <div className="nav_main-text-wrapper">
                      <div
                        stagger-link-text="white"
                        className="h3 line-height-1"
                      >
                        Services
                      </div>
                    </div>
                    <div className="nav_main-arrow">
                      <div className="nav-arrow w-embed">
                        <svg
                          width="0.9em"
                          height="0.9em"
                          viewBox="0 0 15 14"
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M1.99998 0L14.166 0V12.1668H12.166V3.41432L1.70711 13.8739L0.292847 12.4597L10.7519 2L1.99998 2V0Z"
                            fill="currentColor"
                          />
                        </svg>
                      </div>
                    </div>
                  </a>
                  <a
                    stagger-link=""
                    href="/resources"
                    className="menu-link w-inline-block"
                  >
                    <div className="nav_main-text-wrapper">
                      <div
                        stagger-link-text="white"
                        className="h3 line-height-1"
                      >
                        Resources
                      </div>
                    </div>
                    <div className="nav_main-arrow">
                      <div className="nav-arrow w-embed">
                        <svg
                          width="0.9em"
                          height="0.9em"
                          viewBox="0 0 15 14"
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M1.99998 0L14.166 0V12.1668H12.166V3.41432L1.70711 13.8739L0.292847 12.4597L10.7519 2L1.99998 2V0Z"
                            fill="currentColor"
                          />
                        </svg>
                      </div>
                    </div>
                  </a>
                  <a
                    stagger-link=""
                    href="/about-us"
                    className="menu-link w-inline-block"
                  >
                    <div className="nav_main-text-wrapper">
                      <div
                        stagger-link-text="white"
                        className="h3 line-height-1"
                      >
                        About
                      </div>
                    </div>
                    <div className="nav_main-arrow">
                      <div className="nav-arrow w-embed">
                        <svg
                          width="0.9em"
                          height="0.9em"
                          viewBox="0 0 15 14"
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M1.99998 0L14.166 0V12.1668H12.166V3.41432L1.70711 13.8739L0.292847 12.4597L10.7519 2L1.99998 2V0Z"
                            fill="currentColor"
                          />
                        </svg>
                      </div>
                    </div>
                  </a>
                  <a
                    stagger-link=""
                    href="/contact-us"
                    className="menu-link w-inline-block"
                  >
                    <div className="nav_main-text-wrapper">
                      <div
                        stagger-link-text="white"
                        className="h3 line-height-1"
                      >
                        Contact
                      </div>
                    </div>
                    <div className="nav_main-arrow">
                      <div className="nav-arrow w-embed">
                        <svg
                          width="0.9em"
                          height="0.9em"
                          viewBox="0 0 15 14"
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M1.99998 0L14.166 0V12.1668H12.166V3.41432L1.70711 13.8739L0.292847 12.4597L10.7519 2L1.99998 2V0Z"
                            fill="currentColor"
                          />
                        </svg>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="nav_main-bottom-wrapper">
                  <a
                    stagger-link=""
                    href="https://www.upwork.com/freelancers/hristodikov/"
                    className="menu-link w-inline-block"
                  >
                    <div
                      stagger-link-text=""
                      className="p-body line-height-1 nav-link-bg"
                    >
                      UpWork
                    </div>
                  </a>
                  <a
                    stagger-link=""
                    href="https://www.fiverr.com/dikovh"
                    className="menu-link w-inline-block"
                  >
                    <div
                      stagger-link-text=""
                      className="p-body line-height-1 nav-link-bg"
                    >
                      Fiverr
                    </div>
                  </a>
                  <a
                    stagger-link=""
                    href="https://www.linkedin.com/in/hristo-dikov/"
                    className="menu-link w-inline-block"
                  >
                    <div
                      stagger-link-text=""
                      className="p-body line-height-1 nav-link-bg"
                    >
                      Linkedin
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div
              data-scroll="start"
              data-w-id="e2c41eac-496c-f159-1a57-a056f0741e62"
              className="nav-overlay-closer"
            ></div>
          </div>
        </div>
        <div className="loader-logo">
          <img
            src={animationLogo}
            loading="eager"
            alt=""
            className="loader-image"
          />
        </div>
        <div fs-cc="banner" className="cookie-banner">
          <div className="cookie__policy-inner">
            <div className="lottie-wrapper">
              <div
                data-w-id="4f9d4498-162d-967f-5ef7-9caefe7eee86"
                data-animation-type="lottie"
                data-src="https://assets-global.website-files.com/63793925c7db23ce040b0824/650c0b0847b5d025005f6823_Cookie.json"
                data-loop="1"
                data-direction="1"
                data-autoplay="1"
                data-is-ix2-target="0"
                data-renderer="svg"
                data-default-duration="20.02001920458794"
                data-duration="0"
              ></div>
            </div>
            <div className="cookie__text-wrapper">
              <h3 className="p-body">
                Hi! Cookies for vibes, emails by choice. Opt-in for news, ok?
              </h3>
              <div className="cookie__button-wrapper">
                <a
                  href="/#"
                  stagger-link=""
                  target="blank"
                  className="close-button-redirect w-inline-block"
                >
                  <div
                    stagger-link-text="cookie"
                    className="p-body-normal text-leave underline-link is-cookie"
                  >
                    Leave website
                  </div>
                </a>
                <a
                  fs-cc="close"
                  stagger-link=""
                  href="/#"
                  className="close-button w-inline-block"
                >
                  <div
                    stagger-link-text=""
                    className="p-body-normal text-accent underline-link is-cookie"
                  >
                    Accept &amp; Close
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
