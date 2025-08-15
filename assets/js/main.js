/**
 * Template Name: KnightOne
 * Template URL: https://bootstrapmade.com/knight-simple-one-page-bootstrap-template/
 * Updated: Oct 16 2024 with Bootstrap v5.3.3
 * Author: BootstrapMade.com
 * License: https://bootstrapmade.com/license/
 */

(function () {
  "use strict";

  /**
   * Apply .scrolled class to the body as the page is scrolled down
   */
  function toggleScrolled() {
    const selectBody = document.querySelector("body");
    const selectHeader = document.querySelector("#header");
    if (
      !selectHeader.classList.contains("scroll-up-sticky") &&
      !selectHeader.classList.contains("sticky-top") &&
      !selectHeader.classList.contains("fixed-top")
    )
      return;
    window.scrollY > 100
      ? selectBody.classList.add("scrolled")
      : selectBody.classList.remove("scrolled");
  }

  document.addEventListener("scroll", toggleScrolled);
  window.addEventListener("load", toggleScrolled);

  /**
   * Mobile nav toggle
   */
  const mobileNavToggleBtn = document.querySelector(".mobile-nav-toggle");

  function mobileNavToogle() {
    document.querySelector("body").classList.toggle("mobile-nav-active");
    mobileNavToggleBtn.classList.toggle("bi-list");
    mobileNavToggleBtn.classList.toggle("bi-x");
  }
  if (mobileNavToggleBtn) {
    mobileNavToggleBtn.addEventListener("click", mobileNavToogle);
  }

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll("#navmenu a").forEach((navmenu) => {
    navmenu.addEventListener("click", () => {
      if (document.querySelector(".mobile-nav-active")) {
        mobileNavToogle();
      }
    });
  });

  /**
   * Toggle mobile nav dropdowns
   */
  document.querySelectorAll(".navmenu .toggle-dropdown").forEach((navmenu) => {
    navmenu.addEventListener("click", function (e) {
      e.preventDefault();
      this.parentNode.classList.toggle("active");
      this.parentNode.nextElementSibling.classList.toggle("dropdown-active");
      e.stopImmediatePropagation();
    });
  });

  /**
   * Preloader
   */
  window.addEventListener("load", () => {
    setTimeout(() => {
      document.getElementById("preloader").style.opacity = "0";
      setTimeout(() => document.getElementById("preloader").remove(), 500);
    }, 2000); // Keep it for at least 2s for effect
  });

  /**
   * Scroll top button
   */
  let scrollTop = document.querySelector(".scroll-top");

  function toggleScrollTop() {
    if (scrollTop) {
      window.scrollY > 100
        ? scrollTop.classList.add("active")
        : scrollTop.classList.remove("active");
    }
  }
  scrollTop.addEventListener("click", (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  window.addEventListener("load", toggleScrollTop);
  document.addEventListener("scroll", toggleScrollTop);

  /**
   * Animation on scroll function and init
   */
  function aosInit() {
    AOS.init({
      duration: 600,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });
  }
  window.addEventListener("load", aosInit);

  /**
   * Initiate glightbox
   */
  const glightbox = GLightbox({
    selector: ".glightbox",
  });

  /**
   * Initiate Pure Counter
   */
  new PureCounter();

  /**
   * Init isotope layout and filters
   */
  document.querySelectorAll(".isotope-layout").forEach(function (isotopeItem) {
    let layout = isotopeItem.getAttribute("data-layout") ?? "masonry";
    let filter = isotopeItem.getAttribute("data-default-filter") ?? "*";
    let sort = isotopeItem.getAttribute("data-sort") ?? "original-order";

    let initIsotope;
    imagesLoaded(isotopeItem.querySelector(".isotope-container"), function () {
      initIsotope = new Isotope(
        isotopeItem.querySelector(".isotope-container"),
        {
          itemSelector: ".isotope-item",
          layoutMode: layout,
          filter: filter,
          sortBy: sort,
        }
      );
    });

    isotopeItem
      .querySelectorAll(".isotope-filters li")
      .forEach(function (filters) {
        filters.addEventListener(
          "click",
          function () {
            isotopeItem
              .querySelector(".isotope-filters .filter-active")
              .classList.remove("filter-active");
            this.classList.add("filter-active");
            initIsotope.arrange({
              filter: this.getAttribute("data-filter"),
            });
            if (typeof aosInit === "function") {
              aosInit();
            }
          },
          false
        );
      });
  });

  /**
   * Frequently Asked Questions Toggle
   */
  document
    .querySelectorAll(".faq-item h3, .faq-item .faq-toggle")
    .forEach((faqItem) => {
      faqItem.addEventListener("click", () => {
        faqItem.parentNode.classList.toggle("faq-active");
      });
    });

  /**
   * Init swiper sliders
   */
  function initSwiper() {
    document.querySelectorAll(".init-swiper").forEach(function (swiperElement) {
      let config = JSON.parse(
        swiperElement.querySelector(".swiper-config").innerHTML.trim()
      );

      if (swiperElement.classList.contains("swiper-tab")) {
        initSwiperWithCustomPagination(swiperElement, config);
      } else {
        new Swiper(swiperElement, config);
      }
    });
  }

  window.addEventListener("load", initSwiper);

  /**
   * Correct scrolling position upon page load for URLs containing hash links.
   */
  window.addEventListener("load", function (e) {
    if (window.location.hash) {
      if (document.querySelector(window.location.hash)) {
        setTimeout(() => {
          let section = document.querySelector(window.location.hash);
          let scrollMarginTop = getComputedStyle(section).scrollMarginTop;
          window.scrollTo({
            top: section.offsetTop - parseInt(scrollMarginTop),
            behavior: "smooth",
          });
        }, 100);
      }
    }
  });

  /**
   * Navmenu Scrollspy
   */
  let navmenulinks = document.querySelectorAll(".navmenu a");

  function navmenuScrollspy() {
    navmenulinks.forEach((navmenulink) => {
      if (!navmenulink.hash) return;
      let section = document.querySelector(navmenulink.hash);
      if (!section) return;
      let position = window.scrollY + 200;
      if (
        position >= section.offsetTop &&
        position <= section.offsetTop + section.offsetHeight
      ) {
        document
          .querySelectorAll(".navmenu a.active")
          .forEach((link) => link.classList.remove("active"));
        navmenulink.classList.add("active");
      } else {
        navmenulink.classList.remove("active");
      }
    });
  }
  const projects = [
    {
      name: "E-Commerce Application",
      description:
        "This platform provides all kind of electronics & electrical equipments for local customers",
      technologies: ["HTML5", "Bootstrap", "CSS3", "JavaScript", "PHP"],
      image: "assets/img/portfolio/chanakaelectronics.JPG",
      link: "https://chanakaelectronics.com/",
    },
    {
      name: "Tranquil Terrace- HMS",
      description:
        "Tranquil Terrace is a hotel system management desktop application which allows handling customer service in one place.",
      technologies: ["Java", "Swing", "Apache NetBeans", "MySQL"],
      image: "assets/img/portfolio/tter.png",
      link: "https://github.com/Tharindu714/Tranquil_terrace.git",
    },
    {
      name: "Green Garden Bungalow",
      description:
        "greengardenbungalow.com is an online platform that allows tourists to reserve bookings & get well-acquainted with the bungalow.",
      technologies: ["HTML5", "Bootstrap", "CSS3", "JavaScript", "PHP"],
      image: "assets/img/portfolio/green.JPG",
      link: "https://www.greengardenbungalow.com/",
    },
    {
      name: "EventPulse Android App",
      description:
        "Event Pulse is a fan-centralized Android App that allows fans to track the latest movies, TV Tvseries & games.",
      technologies: ["Java", "Kotlin", "Android", "Firebase", "SQLite"],
      image: "assets/img/portfolio/eventpulse.png",
      link: "https://github.com/Tharindu714/EventPulse-Android-Full-Project.git",
    },
    {
      name: "Travelling Agency Site",
      description:
        "bluedotstravelsandtours.com is an online platform that allows tourists to reserve bookings, aware more about the county & get a detail-wise description about the tours and hotels",
      technologies: ["HTML5", "Tailwind", "CSS3", "JavaScript", "PHP"],
      image: "assets/img/portfolio/bluedots.JPG",
      link: "https://bluedotstravelsandtours.com/",
    },

    {
      name: "EPAdmins Android App",
      description:
        "EPAdmins is the Central Processing Unit of the Event Pulse Application that handles all the activities on the user side.",
      technologies: ["Java", "Kotlin", "Android", "Firebase", "SQLite"],
      image: "assets/img/portfolio/epadmins.png",
      link: "https://github.com/Tharindu714/EPAdmins-Android-Full-Project.git",
    },

    {
      name: "Delta Codex Graphics",
      description:
        "deltacodexgraphics.site is a graphic designer site which shows the company portfolio and their best designs for the purpose of enhancing the potential customer base.",
      technologies: ["HTML5", "Bootstrap", "CSS3", "JavaScript", "PHP"],
      image: "assets/img/portfolio/deltacodex.JPG",
      link: "https://deltacodexgraphics.site/",
    },

    {
      name: "BattleHell Weapons",
      description:
        "A specialized marketplace for licensed buyers to purchase firearms and accessories. Includes user verification, role-based access control (e.g., dealers vs. collectors), secure payment gateways, and compliance with legal regulations. Developed using Java Spring Boot, React, and Stripe API, with a focus on security and audit trails.",
      technologies: [
        "Java",
        "HTML5",
        "Bootstrap",
        "CSS3",
        "JavaScript",
        "TypeScript",
      ],
      image: "assets/img/portfolio/battleHell.jpeg",
      link: "https://github.com/Tharindu714/Battle-Hell-Gun-Shop.git",
    },

    {
      name: "Notebook Android App",
      description:
        "A lightweight note-taking app for Android that supports text, voice, and image entries. Features include offline storage via SQLite, cloud sync with Firebase, rich text formatting, and PIN protection. Designed as a beginner-friendly project to teach Android development fundamentals like Kotlin, Room Database, and Material Design.",
      technologies: ["Java", "Kotlin", "Android", "SQLite"],
      image: "assets/img/portfolio/notebook.jpg",
      link: "https://github.com/Tharindu714/Notebook-android-app.git",
    },

    {
      name: "Futuristic Electronic Template",
      description:
        "A dynamic, responsive website template tailored for tech portfolios, electronic brands, or innovation-driven startups. Includes animated UI components, dark/light mode toggle, parallax scrolling, and modular sections for projects, blogs, and testimonials. Built with HTML5, CSS3 (Sass), and GSAP for smooth animations.",
      technologies: ["HTML5", "Bootstrap", "CSS3"],
      image: "assets/img/portfolio/etemplate.png",
      link: "https://github.com/Tharindu714/Mini_Eshop_Web-Template.git",
    },

    {
      name: "Fresh E Commerce",
      description:
        "A farm-to-table marketplace connecting local farmers directly with consumers. Offers features like seasonal produce listings, subscription boxes, delivery tracking, and farmer profiles. Leverages Flutter for cross-platform apps and Firebase for real-time inventory management and user authentication.",
      technologies: ["HTML5", "Bootstrap", "CSS3", "JavaScript", "PHP"],
      image: "assets/img/portfolio/fresh.jpeg",
      link: "https://github.com/Tharindu714/Green-Food_store.git",
    },

    {
      name: "TeamUp TMS",
      description:
        "A Hackathon-winning project enabling teams to collaborate on tasks via shared boards, live chat, and deadline tracking. Built with WebSocket for real-time updates, HTML, CSS & HHVM for the frontend, and PHP + PostgreSQL for the backend. Supports file sharing, role assignments, and progress analytics.",
      technologies: ["PHP", "Hack/HHVM", "CSS3", "JavaScript"],
      image: "assets/img/portfolio/teamup.png",
      link: "https://github.com/Tharindu714/Team-up.git",
    },

    {
      name: "SmartTrade",
      description:
        "A premium template for e-commerce stores specializing in refurbished and new smartphones. Features include dynamic product filtering (price, brand, specs), customer reviews, EMI calculators, and admin dashboards. Built with Next.js, TypeScript, and PayPal API, with a focus on responsive design.",
      technologies: [
        "Java",
        "HTML5",
        "Bootstrap",
        "CSS3",
        "JavaScript",
        "TypeScript",
      ],
      image: "assets/img/portfolio/smartChat.jpeg",
      link: "https://github.com/Tharindu714/SmartTrade-API-Full.git",
    },

    {
      name: "X Platform Mobile App",
      description:
        "This project is based on a fun concept - Imagine DC & Marvel Superheros are chatting with each other using some kind of messenger App; This is it",
      technologies: [
        "React",
        "JavaScript",
        "TypeScript",
        "Java",
        "ngrok",
        "HTML5",
      ],
      image: "assets/img/portfolio/ract.jpg",
      link: "https://github.com/Tharindu714/ReactApp_FrontEnd.git",
    },

    {
      name: "Cowboy Escape",
      description:
        "An interactive browser game designed to teach JavaScript event handling and DOM manipulation. Players guide a cowboy through obstacles using keyboard events, with score tracking and power-ups. Built with vanilla HTML5 Canvas and JavaScript, ideal for coding bootcamp exercises.",
      technologies: ["HTML5", "CSS3", "JavaScript"],
      image: "assets/img/portfolio/cowboy.jpg",
      link: "https://github.com/Tharindu714/JavaScript-Fun-Game.git",
    },

    {
      name: "Red Hat Boy",
      description:
        "An interactive browser game designed to teach JavaScript event handling and DOM manipulation. Players guide a Little Boy through obstacles using keyboard events, with score tracking and power-ups. Built with vanilla HTML5 Canvas and JavaScript, ideal for coding bootcamp exercises.",
      technologies: ["HTML5", "CSS3", "JavaScript"],
      image: "assets/img/portfolio/redhat.jpg",
      link: "https://github.com/Tharindu714/Red-Hat-Boy--JS-fun-game.git",
    },

    {
      name: "Robot Vs. Zombies",
      description:
        "An interactive browser game designed to teach JavaScript event handling and DOM manipulation. Players guide a Robot through Zombie Obstacles using keyboard events, with score tracking and power-ups. Built with vanilla HTML5 Canvas and JavaScript, ideal for coding bootcamp exercises.",
      technologies: ["HTML5", "CSS3", "JavaScript"],
      image: "assets/img/portfolio/rvz.jpg",
      link: "https://github.com/Tharindu714/Robot.Vs.Zombie-Game.git",
    },

    {
      name: "Sole Proprietor Portfolio Website",
      description:
        "A sleek portfolio website for freelance developers and designers, showcasing projects, skills, and client testimonials. Includes a blog section, contact form with EmailJS integration, and a dark-themed UI with CSS Grid and Framer Motion animations. Optimized for SEO and accessibility.",
      technologies: ["HTML5", "CSS3", "JavaScript", "Hack/HHVM"],
      image: "assets/img/portfolio/etemp2.jpeg",
      link: "https://github.com/Tharindu714/Electronic_Futuristic_portfolio_site.git",
    },

    {
      name: "Blog website - DCRC",
      description:
        "A content-rich blog outlining the roadmap for a robotics research hub. Covers topics like AI ethics, automation trends, and funding strategies. Built with Pure HTML and Elementor, featuring interactive charts, embedded video lectures, and a newsletter subscription system.",
      technologies: ["HTML5", "CSS3", "JavaScript", "PHP"],
      image: "assets/img/portfolio/dcrc.png",
      link: "https://tharindu714.github.io/deltacodexrobotics/",
    },

    {
      name: "Single Person Portfolio website",
      description:
        "A dual-purpose portfolio highlighting coding projects and graphic design work. Includes a project carousel, skill meters, and a downloadable resume section. Developed using React, Three.js for 3D visuals, and Netlify for deployment, with A+ performance scores.",
      technologies: ["HTML5", "CSS3", "JavaScript", "PHP", "SCSS", "Hack/HHVM"],
      image: "assets/img/portfolio/portfolio.jpg",
      link: "https://github.com/Tharindu714/personal-portfolio-web.git",
    },

    {
      name: "Adyapanaya Student Management System",
      description:
        "Adyapanaya Student Management System is a standalone desktop application developed for managing students in educational institution.",
      technologies: ["Java", "intellJ IDE", "MySQL"],
      image: "assets/img/portfolio/adyapanaya.png",
      link: "https://github.com/Tharindu714/Adayapanaya_STU-Mgt-System.git",
    },

    {
      name: "Calculator - AWT",
      description:
        "A calculator built with legacy tools like Java AWT to demonstrate foundational programming concepts. Focuses on teaching state management, arithmetic logic, and debugging techniques without modern frameworks. Includes unit tests and a vintage UI design.",
      technologies: ["Java", "Netbeans IDE", "AWT"],
      image: "assets/img/portfolio/cal.jpg",
      link: "https://github.com/Tharindu714/Mycalculator-Java-AWT.git",
    },

    {
      name: "Invoice Generating System",
      description:
        "A desktop application for managing repairs, invoices, and customer data. Features barcode scanning, inventory tracking, and PDF receipt generation. Built with Java and MySQL, with a focus on offline functionality for small businesses.",
      technologies: ["Java", "MySQL", "Jsper Report"],
      image: "assets/img/portfolio/pos.jpg",
      link: "https://github.com/Tharindu714/POS-System.git",
    },

    {
      name: "E-Sewana Student Portal",
      description:
        "E-Sewana is a student Portal, Where eligible students can download & upload Assignment, Mark Attendance, Pay Lecture fees and all the academic stuff can handle student activities in this portal",
      technologies: ["PHP", "MySQL", "JavaScript", "JSON", "CSS", "Hack/HHVM"],
      image: "assets/img/portfolio/esewana.jpg",
      link: "https://github.com/Tharindu714/E-sewana-SMS-API.git",
    },

    {
      name: "Company Portfolio WebSite",
      description:
        "This project is a business portfolio Web site, developed on the idea of enhancing target customer base",
      technologies: [
        "PHP",
        "MySQL",
        "JavaScript",
        "JSON",
        "CSS",
        "HTML5",
        "Hack/HHVM",
      ],
      image: "assets/img/portfolio/deltaC.jpeg",
      link: "https://github.com/Tharindu714/deltacodex.git",
    },

    {
      name: "Unity Mobile Gaming Component Development",
      description:
        "Provide a solid foundation for mobile game development in Unity, showcasing a modular Main Menu system, scene management, UI components, and project configuration.",
      technologies: ["Unity", "C#", "Mobile Game Development"],
      image: "assets/img/portfolio/unity_mobile_designs.png",
      link: "https://github.com/Tharindu714/unity-Mobile-game-Components-Basic.git",
    },

    {
      name: "Endless Runner Game in Unity 🏃️",
      description:
        "Embark on a magical journey with Arissa—a Unity-powered educational RPG that teaches core game mechanics through interactive lessons and animations.",
      technologies: ["Unity", "C#", "shaderLab", "HLSL"],
      image: "assets/img/portfolio/arissa_game.jpg",
      link: "https://github.com/Tharindu714/Unity-powered-educational-game-Project.git",
    },

    {
      name: "Unity Basic Animation Project 🎮",
      description:
        "Learn and experiment with Unity’s animation system through practical examples—covering Animation Clips, Animator Controllers, Blend Trees, and script-driven triggers.",
      technologies: ["Unity", "C#", "HLSL"],
      image: "assets/img/portfolio/unity_anim.png",
      link: "https://github.com/Tharindu714/Unity-animation-basic-Project.git",
    },

    {
      name: "Online Note Collection Database for SE Students",
      description:
        "A static, responsive website offering JIAT students organized access to lecture notes across multiple subjects.",
      technologies: ["JavaScript", "CSS3", "HTML5", "SCSS"],
      image: "assets/img/portfolio/notehive.png",
      link: "https://tharindu714.github.io/notehive.com/",
    },

    {
      name: "OODP Real World Scenario Trainer",
      description:
        "A hands-on collection of foundational Object-Oriented Design Patterns implemented in Java. Each pattern features a real-world scenario, UML-conformant code, and execution output.",
      technologies: ["Java", "CSS3", "HTML5"],
      image: "assets/img/portfolio/oodp.PNG",
      link: "https://tharindu714.github.io/Design-Patterns-FULL/index.html",
    },
  ];

  const openSources = [
    {
      name: "Multithreading Debugging Library -Java",
      description:
        "The Multithreading Debugging Library is a powerful Java-based tool designed to help developers detect, analyze, and debug multithreading issues such as deadlocks, race conditions, and thread execution anomalies.",
      technologies: ["Java", "NetBeans IDE"],
      image: "assets/img/open-source-img/multithreading.jpg",
      link: "https://github.com/Tharindu714/Multithreading-Debugger-library.git",
    },

    {
      name: "lightweight JavaScript/TypeScript library",
      description:
        "A lightweight JavaScript/TypeScript library that optimizes web app performance by lazy-loading images, managing state, and more.",
      technologies: ["TypeScript", "JavaScript", "HTML5"],
      image: "assets/img/open-source-img/lazy-load.jpg",
      link: "https://github.com/Tharindu714/lazyload-library-tsx.git",
    },
    {
      name: "WiFiSentinel-Wifi Security Auditor",
      description:
        "This Application is designed to keep your Wi-Fi network secure, optimized, and always under your control.",
      technologies: ["Java", "NetBeans IDE"],
      image: "assets/img/open-source-img/wifi.jpg",
      link: "https://github.com/Tharindu714/WiFiSentinel-OpenSource-App.git",
    },

    {
      name: "System Monitor Shell Command Application",
      description:
        "A lightweight system resource monitoring project that displays your CPU, memory, and disk usage.",
      technologies: ["GitBash", "CMD", "Shell Command"],
      image: "assets/img/open-source-img/system_monitor.jpg",
      link: "https://github.com/Tharindu714/System-Monitor-Open_source.git",
    },

    {
      name: "File-renamer-Shell-executioner",
      description:
        "Bulk File Renamer is a simple yet powerful script that helps you rename multiple files in a directory at once by replacing a specific text pattern in filenames.",
      technologies: ["GitBash", "CMD", "Shell Command"],
      image: "assets/img/open-source-img/Bulk_renamer.jpg",
      link: "https://github.com/Tharindu714/File-renamer-Shell-executioner.git",
    },

    {
      name: "HMS Reservation DB Architecture",
      description:
        "This repository contains a MySQL database script for a hotel management system. The script creates and populates a database named hotel_db, which is designed to handle various aspects of hotel operations, such as managing cities, customers, rooms, bookings, and payments.",
      technologies: [
        "MySQL",
        "TypeScript",
        "JavaScript",
        "C#",
        "Java",
        "Python",
        "PHP",
      ],
      image: "assets/img/open-source-img/HMS_db.jpg",
      link: "https://github.com/Tharindu714/Basic-Guest-House-Management-system-Database.git",
    },

    {
      name: "Charity Service DB Architecture",
      description:
        "This repository contains a MySQL database script for a hotel management system. The script creates and populates a database named hotel_db, which is designed to handle various aspects of hotel operations, such as managing cities, customers, rooms, bookings, and payments.",
      technologies: [
        "MySQL",
        "TypeScript",
        "JavaScript",
        "C#",
        "C++",
        "Java",
        "Python",
        "Kotlin",
        "PHP",
      ],
      image: "assets/img/open-source-img/charity_db.jpg",
      link: "https://github.com/Tharindu714/Charity-service-database.git",
    },
    {
      name: "Scala Content Management System",
      description:
        "This project demonstrates a multi-language project structure combining both Scala and Java codebases.",
      technologies: ["Scala", "Java", "CSS3", "HTML5", "CMS"],
      image: "assets/img/open-source-img/scala_cms.jpg",
      link: "https://github.com/Tharindu714/Scala-content-management-System.git",
    },
    {
      name: "Arduino 2 Wheel Obstacle avoiding Car",
      description:
        "2WD Arduino robot with ultrasonic servo scanning for obstacle avoidance and Bluetooth-based manual control with LED and buzzer feedback.",
      technologies: ["C++", "Arduino", "Ultrasonic Sensor", "Bluetooth"],
      image: "assets/img/open-source-img/2W_car.jpg",
      link: "https://github.com/Tharindu714/Arduino-2Wheel-obstacle-avoiding-car-FULL.git",
    },
  ];

  const research = [
    {
      name: "AgroLink 🍃",
      description:
        "AgroLink is an IoT-based research project that was developed for a traditional system-driven tea factory.",
      technologies: [
        "C++",
        "Java",
        "JavaScript",
        "React",
        "CSS3",
        "Arduino",
        "NetBeans",
      ],
      image: "assets/img/portfolio/agrolink.jpg",
      link: "https://github.com/Tharindu714/AgroLink.git",
    },

    {
      name: "CineSync Android App",
      description:
        "A comprehensive platform for movie and TV enthusiasts to explore, review, and track their favorite content. Features include personalized recommendations, user-generated reviews, advanced search filters (genre, year, rating), watchlists, and integration with streaming services. Built with React, Node.js, Firebase, and IMDB API for real-time data updates.",
      technologies: ["Java", "Kotlin", "Android", "Firebase", "SQLite"],
      image: "assets/img/portfolio/cinesync.png",
      link: "https://github.com/Tharindu714/CineSync_movie-Database-Android-App.git",
    },

    {
      name: "First Person Horror Survival Game in Unity",
      description:
        "© 2025 /Insane Games By Tharindu Chanaka. All rights reserved. Built with Unity.",
      technologies: ["Unity", "C#", "shaderLab", "HLSL"],
      image: "assets/img/portfolio/kyf.jpg",
      link: "https://github.com/Tharindu714/Know-Your-Fear-First-Person-Survival-Horror-Game.git",
    },

    {
      name: "3D Scrolling Shooter Game in Unity",
      description:
        "This is an on-going reaserch project that aims to develop a 3D Scrolling zombie Shooter Game using Unity.",
      technologies: ["Unity", "C#", "shaderLab", "HLSL"],
      image: "assets/img/portfolio/scrolling_game.jpg",
      link: "https://github.com/Tharindu714/3D-Side-Scroller-Game.git",
    },

    {
      name: "Charging Timer Unit Project - Arduino",
      description:
        "Arduino-based timer that indicates charge status via an LED and enforces a cooldown period before recharging. Features a buzzer for alerts and a button to reset the timer.",
      technologies: ["C++", "Arduino", "LED", "Buzzer"],
      image: "assets/img/portfolio/arduino_timer.jpg",
      link: "https://github.com/Tharindu714/Charging-Timer-Unit-simple-Sketch.git",
    },

    {
      name: "Automated Smart Clothing Line - Arduino",
      description:
        "An Arduino-driven retractable clothesline system that protects clothes from rain automatically. It uses a rain sensor to detect weather conditions and retracts the line when rain is detected, ensuring clothes stay dry.",
      technologies: ["C++", "Arduino", "Rain Sensor", "Servo Motor"],
      image: "assets/img/portfolio/smart_cloth.jpg",
      link: "https://github.com/Tharindu714/Smart-Cloth-Line-Simple-Project.git",
    },

    {
      name: "Intelligent Chatbot system - Askghost.com",
      description:
        "A demonic chatbot built with Next.js (App Router), Vercel for hosting, and Firebase for data storage. Step into the Cursed Realm and let the Ghost guide you.",
      technologies: ["JavaScript", "TypeScript", "HTML5", "CSS3", "Next.js"],
      image: "assets/img/portfolio/askghost.PNG",
      link: "https://github.com/Tharindu714/AskGhost.com.git",
    },

    {
      name: "Jurassic World Inventory Management System 🦖",
      description:
        "A robust, multi-module Java EE application for managing dinosaur inventory, with security, business logic, and a rich web interface.",
      technologies: ["Java", "Java EE", "HTML5", "CSS3", "JavaScript"],
      image: "assets/img/portfolio/j2ee_jurassic.png",
      link: "https://github.com/Tharindu714/Jurassic-World-J2EE-Inventory-System.git",
    },

    {
      name: "J2EE Bank Management System 🏦",
      description:
        "A robust, enterprise-grade banking system built with Java EE and Enterprise JavaBeans (EJB), delivering a secure, scalable, and user-friendly experience for financial operations.",
      technologies: ["Java", "Java EE", "HTML5", "CSS3", "JavaScript"],
      image: "assets/img/portfolio/banking.png",
      link: "https://github.com/Tharindu714/National-Banking-System.git",
    },
  ];

  const funny = [
    {
      name: "Promotional WEB for Know Your Fear Game",
      description:
        "This repository hosts the static web pages promoting the 'Know Your Fear' Unity 3D game. It delivers essential information, visuals, and download links to players, ensuring a seamless marketing landing page experience",
      technologies: ["JavaScript", "HTML5", "CSS3", "Firebase"],
      image: "assets/img/portfolio/kyfweb.png",
      link: "https://tharindu714.github.io/KnowYourFear.com/",
    },

    {
      name: "Retro Ping Pong with AI",
      description:
        "Welcome to Pong AI — a modern, crisp take on the classic Pong game with responsive visuals, smooth controls, and a cheeky AI opponent that loves a good rematch.",
      technologies: ["JavaScript", "HTML5", "CSS3"],
      image: "assets/img/portfolio/pongai.png",
      link: "https://tharindu714.github.io/pongai.com/",
    },

    {
      name: "Retro Bomberman with AI",
      description:
        "Retro Bomber is a small arcade game inspired by classic bomber-style levels. You (the Player) must place bombs, break blocks, and outsmart enemies while keeping your lives.",
      technologies: ["JavaScript", "HTML5", "CSS3"],
      image: "assets/img/portfolio/bomberai.png",
      link: "https://tharindu714.github.io/retrobomber.com/",
    },
  ];

  const bcd_proj = [
    {
      name: "Remote Method Invocation (RMI) Project 🚀",
      description:
        "The Remote Method Invocation (RMI) Project is designed to demonstrate and implement the Java RMI framework for distributed application development.",
      technologies: ["Java", "RMI", "Networking", "IntelliJ IDEA"],
      image: "assets/img/bcd_projects/photo_5824499257590266335_y.jpg",
      link: "https://github.com/Tharindu714/Remote-Method-Invocation.git",
    },

    {
      name: "Real-time currency conversion App 💱",
      description:
        "The Real-time Currency Conversion App is a Java-based application that provides real-time currency conversion functionality using the ExchangeRate-API.",
      technologies: ["Java", "IntelliJ IDEA", "ExchangeRate-API"],
      image: "assets/img/bcd_projects/photo_5824588923622504941_y.jpg",
      link: "https://github.com/Tharindu714/Currency-converter-app.git",
    },

    {
      name: "Java EE Session Beans Application 🏦",
      description:
        "Java EE examples showcasing Stateless, Stateful, and Singleton Session Beans with simple web clients.",
      technologies: ["Java", "IntelliJ IDEA", "Java EE", "EJB"],
      image: "assets/img/bcd_projects/photo_5824774809807075600_y.jpg",
      link: "https://github.com/Tharindu714/BCD-Session-Beans.git",
    },

    {
      name: "Context & Dependency Injection with Java EE 🔌",
      description:
        "This project demonstrates the power of Jakarta Contexts and Dependency Injection (CDI) by implementing a modular and extensible notification system using qualifiers, scopes, and event-based logging.",
      technologies: ["Java", "IntelliJ IDEA", "Java EE", "EJB"],
      image: "assets/img/bcd_projects/photo_5824486806480075069_y.jpg",
      link: "https://github.com/Tharindu714/context-Dependency-injections.git",
    },

    {
      name: "EAR Deployment Basic Structure Project 📦",
      description:
        "Demonstrate the simplest form of an enterprise Java application with separate EJB and Java EE client modules—your first step toward a full EAR deployment.",
      technologies: ["Java", "IntelliJ IDEA", "Java EE", "EJB", "EAR"],
      image: "assets/img/bcd_projects/photo_5824447838241798559_y.jpg",
      link: "https://github.com/Tharindu714/EAR-Deployment-Basics.git",
    },

    {
      name: "Delta Codex EAR Project 📦",
      description:
        "Demonstrate a complete Jakarta EE 9 EAR packaging with Core, EJB, Web, and EAR modules, ready for real-world deployment.",
      technologies: ["Java", "IntelliJ IDEA", "Java EE", "EJB", "EAR"],
      image: "assets/img/bcd_projects/photo_5824456892032858507_y.jpg",
      link: "https://github.com/Tharindu714/EAR-Standard-Configurations-Template.git",
    },

    {
      name: "Java Messaging Service (JMS) Topic Connection 🗨️",
      description:
        "Demonstrate a simple JMS Topic-based publish/subscribe application using GlassFish/Payara’s JMS provider.",
      technologies: ["Java", "IntelliJ IDEA", "Java EE", "JMS", "GlassFish"],
      image: "assets/img/bcd_projects/photo_5824633810325715412_y.jpg",
      link: "https://github.com/Tharindu714/JMS-Topic-Connection.git",
    },

    {
      name: "Java Messaging Service (JMS) Queue Connection Project 🗨️",
      description:
        "Demonstrate a point‑to‑point JMS Queue implementation using GlassFish/Payara’s JMS provider.",
      technologies: ["Java", "IntelliJ IDEA", "Java EE", "JMS", "GlassFish"],
      image: "assets/img/bcd_projects/photo_5824841837066697138_y.jpg",
      link: "https://github.com/Tharindu714/JMS-Queue-Connection.git",
    },

    {
      name: "ActiveMQ Messaging Project 🗨️",
      description:
        "Showcase a complete point-to-point messaging system using Apache ActiveMQ, featuring producer, consumer, and broker configuration. This guide walks through installation, setup, running examples, and best practices.",
      technologies: [
        "Java",
        "IntelliJ IDEA",
        "Java EE",
        "ActiveMQ",
        "GlassFish",
      ],
      image: "assets/img/bcd_projects/activemq.jpg",
      link: "https://github.com/Tharindu714/Third-Party-JMS-project-basics.git",
    },

    {
      name: "J2EE Transaction Backend Template 🚀",
      description:
        "A robust and modular J2EE backend template for handling transaction-based applications. Perfect for kickstarting your transaction microservices, financial applications, or any Java EE-based backend.",
      technologies: ["Java", "IntelliJ IDEA", "Java EE"],
      image: "assets/img/bcd_projects/transactions.png",
      link: "https://github.com/Tharindu714/J2EE-Transaction-Bankend-Template.git",
    },

    {
      name: "Online Auction System Project 🏷️",
      description:
        "A robust, enterprise-grade Online Auction System built with Jakarta EE, packaged as an EAR, leveraging ActiveMQ for async messaging and tested using JMeter and VisualVM.",
      technologies: ["Java", "IntelliJ IDEA", "Java EE", "EJB", "EAR"],
      image: "assets/img/bcd_projects/photo_5822374438484687265_y.jpg",
      link: "https://github.com/Tharindu714/Developing-a-Distributed-Online-Auction-System-with-EJB-and-JMS.git",
    },

    {
      name: "Simple Banking System with JTA 🏦",
      description:
        "A lightweight Java EE backend demonstrating account management and transaction processing with Java Transaction API (JTA).",
      technologies: ["Java", "IntelliJ IDEA", "Java EE", "JTA"],
      image: "assets/img/bcd_projects/j2eebanking.jpg",
      link: "https://github.com/Tharindu714/Simple-Banking-System-JTA.git",
    },

    {
      name: "Programmatic Timer EJB Demo ⏱️",
      description:
        "A Java EE application showcasing the use of programmatic timers via the TimerService API. This example demonstrates how to create, manage, and cancel timers programmatically within an EJB environment.",
      technologies: ["Java", "IntelliJ IDEA", "Java EE", "EJB"],
      image: "assets/img/bcd_projects/j2eetimer.jfif",
      link: "https://github.com/Tharindu714/Programmatical-Timer-J2EE.git",
    },

    {
      name: "J2EE Built-in Interceptors Introduction 🔄",
      description:
        "A primer on using JEE container-managed interceptors for cross-cutting concerns without custom bindings, leveraging standard EJB lifecycle and method-level interception.",
      technologies: ["Java", "IntelliJ IDEA", "Java EE", "Interceptors"],
      image: "assets/img/bcd_projects/photo_5824786088391195053_y.jpg",
      link: "https://github.com/Tharindu714/J2EE-Built-in-Interceptors.git",
    },

    {
      name: "Customized Interceptors with Annotations in J2EE 🔄",
      description:
        "Explore how to define and apply custom interceptors using CDI/EJB annotations to modularize cross-cutting concerns such as logging, validation, and security.",
      technologies: [
        "Java",
        "IntelliJ IDEA",
        "Java EE",
        "Interceptors",
        "Annotations",
      ],
      image: "assets/img/bcd_projects/interceptors.jpg",
      link: "https://github.com/Tharindu714/J2EE-Customize-Interceptors.git",
    },

    {
      name: "Secured Enterprise-Level Admin Panel 🔐",
      description:
        "A Java EE–based web application featuring role-based access control, custom security realms, and a polished admin dashboard.",
      technologies: ["Java", "IntelliJ IDEA", "Java EE"],
      image: "assets/img/bcd_projects/photo_5824496543170935138_y.jpg",
      link: "https://github.com/Tharindu714/Secured-Enterprise-Level-Admin-Panel.git",
    },

    {
      name: "J2EE REST API Modules 🛠️",
      description:
        "A JAX-RS–powered RESTful API built with Java EE, providing CRUD endpoints under com.tharindu.web.rest for core domain entities.",
      technologies: ["Java", "IntelliJ IDEA", "Java EE", "JAX-RS"],
      image: "assets/img/bcd_projects/photo_5824367466518788463_y.jpg",
      link: "https://github.com/Tharindu714/J2EE-REST-API.git",
    },

    {
      name: "J2EE Web Services with Jersey 🌐",
      description:
        "A comprehensive demonstration of JAX-RS endpoints using Jersey, including request/response filters, controllers, and JSP-based views under WEB-INF.",
      technologies: ["Java", "IntelliJ IDEA", "Java EE", "JAX-RS", "Jersey"],
      image: "assets/img/bcd_projects/photo_5824564682827086221_y.jpg",
      link: "https://github.com/Tharindu714/J2EE-WS-Jersy.git",
    },

    {
      name: "J2EE Security with Database Integration 🛢",
      description:
        "Demonstrates securing a Jakarta EE application using a database-backed IdentityStore, JPA persistence, and container-managed JDBC connection pooling.",
      technologies: ["Java", "IntelliJ IDEA", "Java EE", "MySQL"],
      image: "assets/img/bcd_projects/photo_5824312392153152011_y.jpg",
      link: "https://github.com/Tharindu714/J2EE-Security-API-with-MySQL.git",
    },

    {
      name: "Manual Security AUTH Demo 🛡️",
      description:
        "A Jakarta EE application showcasing manual authentication and authorization using HttpAuthenticationMechanism, IdentityStore, EJB security annotations, and servlet-based access controls.",
      technologies: ["Java", "IntelliJ IDEA", "Java EE", "Authentication"],
      image: "assets/img/bcd_projects/manual_auth.png",
      link: "https://github.com/Tharindu714/Manual-Security-AUTH.git",
    },

    {
      name: "J2EE Security with JWT & Database 🛡️",
      description:
        "A Jakarta EE application demonstrating stateless authentication using JSON Web Tokens (JWT) backed by a database IdentityStore and JPA persistence.",
      technologies: ["Java", "IntelliJ IDEA", "Java EE", "JWT", "MySQL"],
      image: "assets/img/bcd_projects/photo_5824285840665328011_y.jpg",
      link: "https://github.com/Tharindu714/J2EE-Security-jwt-with-Database.git",
    },
  ];

  const oodp = [
    {
      name: "Editable Document Editor 📝",
      description:
        "A Java-based document editor that allows users to create, edit, and save text documents with basic formatting options. It demonstrates the use of Object-Oriented Design Principles (OODP) such as encapsulation, inheritance, and polymorphism.",
      technologies: ["Java", "Java Swing", "Composite", "IntelliJ IDEA"],
      image: "assets/img/oodp_projects/photo_5824784228670356017_y.jpg",
      link: "https://github.com/Tharindu714/Document-name-editor-app-composite.git",
    },

    {
      name: "Holiday Package Builder Graphical User Interface 🏖️",
      description:
        "A Java Swing application to design custom holiday packages using the Builder pattern with printable invoices and visual add-on selection.",
      technologies: ["Java", "Java Swing", "Builder", "IntelliJ IDEA"],
      image: "assets/img/oodp_projects/hms.png",
      link: "https://github.com/Tharindu714/HMS-package-selector-Builder-patten.git",
    },

    {
      name: "Remote Control Simulator 🎮",
      description:
        "A sleek Java‑Swing application illustrating the Bridge Pattern in action—switch seamlessly between TV and Media Player remotes, full‑screen GIF animations included!",
      technologies: ["Java", "Java Swing", "Bridge", "IntelliJ IDEA"],
      image: "assets/img/oodp_projects/photo_5824410446256519602_y.jpg",
      link: "https://github.com/Tharindu714/Remote-Changing-Application-Bridge.git",
    },

    {
      name: "Lost Ark Hero Upgrader Interface 🏹",
      description:
        "An immersive Java Swing application demonstrating the Decorator Design Pattern by allowing players to dynamically enhance their Lost Ark heroes with multiple power-ups at runtime.",
      technologies: ["Java", "Java Swing", "Decorator", "IntelliJ IDEA"],
      image: "assets/img/oodp_projects/lost_ark.png",
      link: "https://github.com/Tharindu714/Lost-Ark-Hero-Upgrade-Decorator-Pattern.git",
    },

    {
      name: "Fresh Dine Ordering System 🍽️",
      description:
        "A modern Java Swing application demonstrating the Composite Design Pattern by building a flexible restaurant menu and order system. Customers can browse nested menus, add individual items or entire sub-menus to their orders, and see real-time total price calculations—all with a fresh forest‑cream UI.",
      technologies: ["Java", "Java Swing", "Composite", "IntelliJ IDEA"],
      image: "assets/img/oodp_projects/food_order.png",
      link: "https://github.com/Tharindu714/Food-Ordering-Composite-Pattern.git",
    },

    {
      name: "Messaging Agent Bridge Pattern 📡",
      description:
        "A sleek, modular Java Swing desktop messenger that sends Text, Image, or Audio messages via Email, WhatsApp, or SMS — all powered by the Bridge Pattern.",
      technologies: ["Java", "Java Swing", "Bridge", "IntelliJ IDEA"],
      image: "assets/img/oodp_projects/msg_agent.png",
      link: "https://github.com/Tharindu714/Messaging-Agent-Bridge-Pattern.git",
    },

    {
      name: "SmartWatch Builder Pattern App ⌚",
      description:
        "A sleek Java Swing desktop application showcasing the Builder Pattern, complete with live preview and instant configuration output.",
      technologies: ["Java", "Java Swing", "Builder", "IntelliJ IDEA"],
      image: "assets/img/oodp_projects/smart.png",
      link: "https://github.com/Tharindu714/SmartWatch-Builder-Pattern-App.git",
    },

    {
      name: "Secure Banking Validator DialogBox 💳",
      description:
        "A polished Java Swing desktop app demonstrating the Chain of Responsibility pattern for real-time transaction validation.",
      technologies: [
        "Java",
        "Java Swing",
        "chain of Responsibility",
        "IntelliJ IDEA",
      ],
      image: "assets/img/oodp_projects/smart_banking.png",
      link: "https://github.com/Tharindu714/Security-Validator-Banking-DialogBox.git",
    },

    {
      name: "Flyweight Text Editor Application 📝",
      description:
        "TC Text Editor is a sleek, high-performance Java Swing application showcasing the Flyweight Design Pattern. Built with clean code and Maven, it delivers an intuitive UI and extreme memory efficiency.",
      technologies: ["Java", "Java Swing", "Flyweight", "IntelliJ IDEA"],
      image: "assets/img/oodp_projects/photo_5824687497416915529_y.jpg",
      link: "https://github.com/Tharindu714/Flyweight-Text-Editor-Application.git",
    },

    {
      name: "Smart Home Command Interpreter 🏠",
      description:
        "A Smart Home Command Interpreter is a desktop Java application that demonstrates the Interpreter Design Pattern in action.",
      technologies: ["Java", "Java Swing", "Interpreter", "IntelliJ IDEA"],
      image: "assets/img/oodp_projects/SmartHome.jpg",
      link: "https://github.com/Tharindu714/Smart-Home-command-Dialog-Interpreter.git",
    },

    {
      name: "Code-Editor-Memento Pattern 📝",
      description:
        "A sleek, dark-themed Java Swing code editor with robust Undo/Redo powered by the Memento Pattern.",
      technologies: ["Java", "Java Swing", "Memento", "IntelliJ IDEA"],
      image: "assets/img/oodp_projects/memento.png",
      link: "https://github.com/Tharindu714/Code-Editor-Memento.git",
    },

    {
      name: "DrawingPrototypeApp — Prototype Pattern Studio 🎨",
      description:
        "Make beautiful clones, fast. A compact, delightful Java Swing app that demonstrates the Prototype design pattern through an interactive drawing studio.",
      technologies: ["Java", "Java Swing", "Prototype", "IntelliJ IDEA"],
      image: "assets/img/oodp_projects/prototype.png",
      link: "https://github.com/Tharindu714/Prototype-Shape-Drawing-Application.git",
    },

    {
      name: "CalcPro - Custom Formula Interpreter 📐e = ∑∞ⁿ⁼⁰ ¹ₙ🤓",
      description:
        "CalcPro is a colourful, math-inclined single-file Java demo that implements the Interpreter Design Pattern to parse and evaluate custom formulas like ADD(5, 10), MULTIPLY(ADD(2,3),4) and DIVIDE(SUBTRACT(20,4),2).",
      technologies: ["Java", "Java Swing", "interpreter", "IntelliJ IDEA"],
      image: "assets/img/oodp_projects/calcPro.PNG",
      link: "https://github.com/Tharindu714/CalcPro-Custom-Formula-Interpreter.git",
    },

    {
      name: "Visitor Pattern - Shape Creator 🖼️",
      description:
        "Compute areas cleanly — without changing your shape classes. A lightweight, educational, and visually delightful Java Swing application demonstrating the Visitor design pattern to compute areas for multiple shape types (Circle, Square, Triangle) while keeping code open for extension.",
      technologies: ["Java", "Java Swing", "visitor", "IntelliJ IDEA"],
      image: "assets/img/oodp_projects/vistor.png",
      link: "https://github.com/Tharindu714/Visitor-pattern-Shapes-App.git",
    },

    {
      name: "Urban Traffic Simulator 🚦",
      description:
        "Flyweight-Urban-Traffic-Simulator — a colourful, real-time 2D/3D-style demo (single-file Java Swing) that demonstrates the Flyweight Design Pattern to efficiently simulate thousands of vehicles without duplicating heavy geometry/texture data",
      technologies: ["Java", "Java Swing", "Flyweight", "IntelliJ IDEA"],
      image: "assets/img/oodp_projects/flyweight.png",
      link: "https://github.com/Tharindu714/Flyweight-Urban-Traffic-simulator.git",
    },

    {
      name: "Music Streaming Application 📀",
      description:
        "MelodyShare is a compact, colourful demo that uses the Flyweight design pattern to share heavy album data (artwork, artist, album meta) across many Song instances. This reduces memory usage while allowing thousands of simultaneous plays.",
      technologies: ["Java", "Java Swing", "Flyweight", "IntelliJ IDEA"],
      image: "assets/img/oodp_projects/melodyshare.png",
      link: "https://github.com/Tharindu714/Flyweight-Music-Streaming-Application.git",
    },

    {
      name: "Expression Interpreter Calculator 👩🏻‍💻",
      description:
        "A colourful, educational Java Swing demo that parses integer expressions (infix) containing + and -, builds an AST using the Interpreter pattern, evaluates step-by-step, and displays tokens, RPN, evaluation steps and the final result.",
      technologies: ["Java", "Java Swing", "interpreter", "IntelliJ IDEA"],
      image: "assets/img/oodp_projects/interpreter_calculator.png",
      link: "https://github.com/Tharindu714/Expression-Interpreter-Calculator.git",
    },

    {
      name: "Smart Home Controller Mediator 🏠",
      description:
        "A colourful Java Swing demo that demonstrates the Mediator design pattern (Central Hub) for smart home devices. Devices (lights, thermostat, cameras, notifiers) never talk to each other directly",
      technologies: ["Java", "Java Swing", "Mediator", "IntelliJ IDEA"],
      image: "assets/img/oodp_projects/smartHome_mediator.png",
      link: "https://github.com/Tharindu714/Smart-Home-Mediator-Controller.git",
    },

    {
      name: "Memento Text Editor ✎",
      description:
        "A sleek, colourful Java Swing demo that implements the Memento design pattern to provide reliable multi-step undo/redo for a text editor.",
      technologies: ["Java", "Java Swing", "memento", "IntelliJ IDEA"],
      image: "assets/img/oodp_projects/memento_text_editor.png",
      link: "https://github.com/Tharindu714/Memento-Text-Editor-Application.git",
    },

    {
      name: "Player Prototype Game 🎮",
      description:
        "A colourful Java Swing demo that demonstrates the Prototype design pattern. Create an original player, clone it multiple times to experiment with ‘what-if’ scenarios, and manipulate clones independently without affecting the original.",
      technologies: ["Java", "Java Swing", "prototype", "IntelliJ IDEA"],
      image: "assets/img/oodp_projects/prototype_lab.png",
      link: "https://github.com/Tharindu714/Player-Prototype-Game-Demo.git",
    },

    {
      name: "ShopEasy — Visitor Pattern Shopping Cart 🛍️",
      description:
        "Different item types (Book, Electronics, Clothing) accept visitors that perform operations such as printing details, totaling prices, and applying discounts — without modifying the item classes themselves.",
      technologies: ["Java", "Java Swing", "visitor", "IntelliJ IDEA"],
      image: "assets/img/oodp_projects/shopeasy.png",
      link: "https://github.com/Tharindu714/Shopping-Cart-Visitor-Application.git",
    },
  ];

  const skills = [
    { image: "assets/img/clients/client-1.png", alt: "Skill 1" },
    { image: "assets/img/clients/client-2.png", alt: "Skill 2" },
    { image: "assets/img/clients/client-3.png", alt: "Skill 3" },
    { image: "assets/img/clients/client-4.png", alt: "Skill 4" },
    { image: "assets/img/clients/client-5.png", alt: "Skill 5" },
    { image: "assets/img/clients/client-6.png", alt: "Skill 6" },
    { image: "assets/img/clients/client-7.png", alt: "Skill 7" },
    { image: "assets/img/clients/client-8.png", alt: "Skill 8" },
    { image: "assets/img/clients/client-9.png", alt: "Skill 9" },
    { image: "assets/img/clients/client-10.png", alt: "Skill 10" },
    { image: "assets/img/clients/client-11.png", alt: "Skill 11" },
    { image: "assets/img/clients/client-12.png", alt: "Skill 12" },
    { image: "assets/img/clients/client-13.png", alt: "Skill 13" },
    { image: "assets/img/clients/client-14.png", alt: "Skill 14" },
    { image: "assets/img/clients/client-15.png", alt: "Skill 15" },
    { image: "assets/img/clients/client-16.png", alt: "Skill 16" },
  ];

  const posts = [
    {
      name: "AgroLink: Smart IoT Monitoring System for Agriculture",
      description:
        "AgroLink is an IoT project designed to address critical issues intea factories by replacing traditional measurement methods with a Smart Monitor.",
      technologies: ["C++", "Java", "JavaScript", "React", "MySQL"],
      image: "assets/img/main-blog-img/agrolink.JPG",
      link: "AgroLink-blog.html",
    },

    {
      name: "Event Pulse: The Ultimate Fan Engagement Platform",
      description:
        "Event Pulse is a cutting-edge fan engagement platform designed to bridge the gap between entertainment enthusiasts and their favorite movies, TV series, and games.",
      technologies: ["Java", "Android", "Firebase", "SQLite", "HTTPS"],
      image: "assets/img/main-blog-img/eventPulse.jpg",
      link: "event-pulse-blog.html",
    },

    {
      name: "CineSync: Your Personal Movie Database & Review App",
      description:
        "Filter movies, TV shows, and anthologies – add your watched films and thoughts to build lasting memories.",
      technologies: ["Java", "Android", "Firebase", "SQLite", "HTTPS"],
      image: "assets/img/main-blog-img/cinesync.jpg",
      link: "cine-sync-blog.html",
    },

    {
      name: "Tranquil Terrace HMS: A Comprehensive Hotel Management System",
      description:
        "Tranquil Terrace HMS is a large-scale hotel management solution built using Java and MySQL. Developed as a group project, this system manages reservations, guest check-ins/outs, billing, and employee schedules across multiple departments, such as Administration, HR, Front Office, and Kitchen.",
      technologies: ["Java", "MySQL", "Netbeans"],
      image: "assets/img/main-blog-img/tranquil.jpg",
      link: "Hotel-management-system-blog.html",
    },

    {
      name: "React Native Chat App: Bridging Real-Time Communication",
      description:
        "In this post, I discuss the development of a React Native Chat App. The app is designed to provide seamless, real-time messaging by leveraging a robust backend built with Java and MySQL. It also integrates ngrok for testing remote connections.",
      technologies: [
        "React",
        "JavaScript",
        "TypeScript",
        "Java",
        "ngrok",
        "HTML5",
      ],
      image: "assets/img/main-blog-img/supechat.jpg",
      link: "react-chatApp-blog.html",
    },

    {
      name: "Hackothan Winning TMS: Real-Time Collaborative Task Management System",
      description:
        "Create a web-based application using PHP and a relational database system (e.g., MySQL) that allows users to collaboratively manage tasks and projects in real-time. This scenario is suitable for teams who want to showcase their PHP and database integration skills.",
      technologies: ["PHP", "Hack/HHVM", "CSS3", "JavaScript"],
      image: "assets/img/main-blog-img/teamup.jpg",
      link: "teamUp-Task-collaboration-management-system.html",
    },

    {
      name: "Understanding OOP Concepts: A Beginner's Guide",
      description:
        "In this post, I share insights from my research paper on Object-Oriented Programming Concepts (OOPC). Whether you're new to programming or looking to deepen your understanding, this guide covers the fundamentals of OOP, including its history, key principles, and real-world applications.",
      technologies: ["Java", "OOPC", "Research"],
      image: "assets/img/main-blog-img/OOPs.jpg",
      link: "oop-concept-beginner-guide.html",
    },

    {
      name: "JavaScript Fun Game: Cowboy Adventure",
      description:
        "The project was built with vanilla HTML5 Canvas and JavaScript, making it a perfect exercise for coding bootcamp enthusiasts and those new to game development. The game emphasizes the practical application of JavaScript for dynamic content manipulation and interactive design.",
      technologies: ["HTML5", "CSS3", "JavaScript"],
      image: "https://i.ytimg.com/vi/Wp-VDfxCmLQ/hqdefault.jpg",
      link: "javascript-game-development.html",
    },
  ];

  window.addEventListener("load", navmenuScrollspy);
  document.addEventListener("scroll", navmenuScrollspy);

  document.querySelectorAll(".glow-button").forEach((button) => {
    button.addEventListener("mouseenter", () => {
      button.style.boxShadow = "0 0 15px #0cde91";
    });
    button.addEventListener("mouseleave", () => {
      button.style.boxShadow = "none";
    });
  });

  const projectsContainer = document.getElementById("projects-container");

  projects.forEach((project) => {
    const projectDiv = document.createElement("div");
    projectDiv.classList.add("service-item");
    projectDiv.style = `
      background: #1a1a1a;
      padding: 20px;
      border-radius: 12px;
      width: 500px;
      height: 550px;
      text-align: center;
      transition: transform 0.3s ease-in-out;
      position: relative;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    `;

    projectDiv.innerHTML = `
      <div class="image-container">
        <img src="${project.image}" alt="Project Image" />
      </div>
      
      <h3 class="title">${project.name}</h3>
      <p class="description">${project.description}</p>
    
      <div class="technologies">
        ${project.technologies
          .map(
            (tech) => `
            <span class="tech-tag">
              ${tech}
            </span>`
          )
          .join("")}
      </div>
    
    <a href="${project.link}" class="glow-button" target="_blank"
    style="
    color: #0cde91;
    text-decoration: none;
    font-size: 1rem;
    font-weight: bold;
    display: block;
    margin-top: 15px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    ">
    🔗 View this Project
    </a>
  `;
    projectsContainer.appendChild(projectDiv);
  });

  const Fungameonline_Container = document.getElementById("fun-container");

  funny.forEach((fun_project) => {
    const funDiv = document.createElement("div");
    funDiv.classList.add("service-item");
    funDiv.style = `
      background: #1a1a1a;
      padding: 20px;
      border-radius: 12px;
      width: 500px;
      height: 550px;
      text-align: center;
      transition: transform 0.3s ease-in-out;
      position: relative;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    `;

    funDiv.innerHTML = `
      <div class="image-container">
        <img src="${fun_project.image}" alt="Project Image" />
      </div>
      
      <h3 class="title">${fun_project.name}</h3>
      <p class="description">${fun_project.description}</p>
    
      <div class="technologies">
        ${fun_project.technologies
          .map(
            (tech) => `
            <span class="tech-tag">
              ${tech}
            </span>`
          )
          .join("")}
      </div>
    
    <a href="${fun_project.link}" class="glow-button" target="_blank"
    style="
    color: #0cde91;
    text-decoration: none;
    font-size: 1rem;
    font-weight: bold;
    display: block;
    margin-top: 15px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    ">
    🔗 View this Project
    </a>
  `;
    Fungameonline_Container.appendChild(funDiv);
  });

  const bcd_Container = document.getElementById("bcd-container");

  bcd_proj.forEach((bcd_project) => {
    const bcdDiv = document.createElement("div");
    bcdDiv.classList.add("service-item");
    bcdDiv.style = `
      background: #1a1a1a;
      padding: 20px;
      border-radius: 12px;
      width: 500px;
      height: 550px;
      text-align: center;
      transition: transform 0.3s ease-in-out;
      position: relative;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    `;

    bcdDiv.innerHTML = `
      <div class="image-container">
        <img src="${bcd_project.image}" alt="Project Image" />
      </div>
      
      <h3 class="title">${bcd_project.name}</h3>
      <p class="description">${bcd_project.description}</p>

            <div class="technologies">
        ${bcd_project.technologies
          .map(
            (tech) => `
            <span class="tech-tag">
              ${tech}
            </span>`
          )
          .join("")}
      </div>
    
    <a href="${bcd_project.link}" class="glow-button" target="_blank"
    style="
    color: #0cde91;
    text-decoration: none;
    font-size: 1rem;
    font-weight: bold;
    display: block;
    margin-top: 15px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    ">
    🔗 View this Project
    </a>
  `;
    bcd_Container.appendChild(bcdDiv);
  });

  const oodp_Container = document.getElementById("oodp-container");

  oodp.forEach((oodp_project) => {
    const oodpDiv = document.createElement("div");
    oodpDiv.classList.add("service-item");
    oodpDiv.style = `
      background: #1a1a1a;
      padding: 20px;
      border-radius: 12px;
      width: 500px;
      height: 550px;
      text-align: center;
      transition: transform 0.3s ease-in-out;
      position: relative;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    `;

    oodpDiv.innerHTML = `
      <div class="image-container">
        <img src="${oodp_project.image}" alt="Project Image" />
      </div>
      
      <h3 class="title">${oodp_project.name}</h3>
      <p class="description">${oodp_project.description}</p>

            <div class="technologies">
        ${oodp_project.technologies
          .map(
            (tech) => `
            <span class="tech-tag">
              ${tech}
            </span>`
          )
          .join("")}
      </div>
    
    <a href="${oodp_project.link}" class="glow-button" target="_blank"
    style="
    color: #0cde91;
    text-decoration: none;
    font-size: 1rem;
    font-weight: bold;
    display: block;
    margin-top: 15px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    ">
    🔗 View this Project </a>
  `;
    oodp_Container.appendChild(oodpDiv);
  });

  const reserchContainer = document.getElementById("research-container");

  research.forEach((research) => {
    const researchtDiv = document.createElement("div");
    researchtDiv.classList.add("service-item");
    researchtDiv.style = `
      background: #1a1a1a;
      padding: 20px;
      border-radius: 12px;
      width: 500px;
      height: 550px;
      text-align: center;
      transition: transform 0.3s ease-in-out;
      position: relative;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    `;

    researchtDiv.innerHTML = `
      <div class="image-container">
        <img src="${research.image}" alt="Project Image" />
      </div>
      
      <h3 class="title">${research.name}</h3>
      <p class="description">${research.description}</p>
    
      <div class="technologies">
        ${research.technologies
          .map(
            (tech) => `
            <span class="tech-tag">
              ${tech}
            </span>`
          )
          .join("")}
      </div>
    
    <a href="${research.link}" class="glow-button" target="_blank"
    style="
    color: #0cde91;
    text-decoration: none;
    font-size: 1rem;
    font-weight: bold;
    display: block;
    margin-top: 15px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    ">
    🔗 View this Project
    </a>
  `;
    reserchContainer.appendChild(researchtDiv);
  });

  const postContainer = document.getElementById("Post-container");

  posts.forEach((post) => {
    const postDiv = document.createElement("div");
    postDiv.classList.add("service-item");
    postDiv.style = `
      background: #1a1a1a;
      padding: 20px;
      border-radius: 12px;
      width: 500px;
      height: 550px;
      text-align: center;
      transition: transform 0.3s ease-in-out;
      position: relative;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    `;

    postDiv.innerHTML = `
      <div class="image-container">
        <img src="${post.image}" alt="Project Image" />
      </div>
      
      <h3 class="title">${post.name}</h3>
      <p class="description">${post.description}</p>
    
      <div class="technologies">
        ${post.technologies
          .map(
            (tech) => `
            <span class="tech-tag">
              ${tech}
            </span>`
          )
          .join("")}
      </div>
    
    <a href="${post.link}" class="glow-button" target="_blank"
    style="
    color: #0cde91;
    text-decoration: none;
    font-size: 1rem;
    font-weight: bold;
    display: block;
    margin-top: 15px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    ">
    🧐📖 Read This Blog
    </a>
  `;
    postContainer.appendChild(postDiv);
  });

  const skillsContainer = document.querySelector(".clients-wrap");

  skills.forEach((skill) => {
    const skillItem = document.createElement("div");
    skillItem.classList.add(
      "col-xl-3",
      "col-md-4",
      "client-logo",
      "bg-transparent"
    );

    skillItem.innerHTML = `
    <img src="${skill.image}" class="img-fluid" alt="${skill.alt}" />
  `;

    skillsContainer.appendChild(skillItem);
  });

  const openSourceContainer = document.getElementById("open-source-container");

  openSources.forEach((open_source_projects) => {
    const openSourceDiv = document.createElement("div");
    openSourceDiv.classList.add("service-item");
    openSourceDiv.style = `
      background: #1a1a1a;
      padding: 20px;
      border-radius: 12px;
      width: 500px;
      height: fit-content;
      text-align: center;
      transition: transform 0.3s ease-in-out;
      position: relative;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    `;

    openSourceDiv.innerHTML = `
      <div class="image-container-os">
        <img src="${open_source_projects.image}" alt="Project Image" />
      </div>
      
      <h3 class="title">${open_source_projects.name}</h3>
      <p class="description">${open_source_projects.description}</p>
    
      <div class="technologies">
        ${open_source_projects.technologies
          .map(
            (tech) => `
            <span class="tech-tag">
              ${tech}
            </span>`
          )
          .join("")}
      </div>
    
    <a href="${open_source_projects.link}" class="glow-button" target="_blank"
    style="
    color: #0cde91;
    text-decoration: none;
    font-size: 1rem;
    font-weight: bold;
    display: block;
    margin-top: 15px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    ">
    🔗 View this Project
    </a>
  `;
    openSourceContainer.appendChild(openSourceDiv);
  });
})();

/**
 * This script:
 * 1) Finds each section with id in the list (open-source, research, funn, services, BCD, blogs)
 * 2) Replaces the existing .container.section-title with a .section-header (keeps inner HTML)
 * 3) Wraps the existing "<div id='...-container'>" into a .project-section wrapper
 * 4) Adds click handler on the header to toggle the 'open' class on the wrapper
 *
 * No CSS changes were made — it uses your .section-header and .project-section rules already in <style>.
 */
document.addEventListener("DOMContentLoaded", function () {
  const sectionIds = [
    "open-source",
    "research",
    "funn",
    "services",
    "BCD",
    "OODP",
  ];

  sectionIds.forEach(function (id) {
    const section = document.getElementById(id);
    if (!section) return;

    // Find the title block and the content container inside the section
    const titleBlock = section.querySelector(".container.section-title");
    // look for any child div whose id ends with "-container"
    const contentContainer = Array.from(section.children).find(
      (child) => child.id && child.id.endsWith("-container")
    );

    // If title and content exist, transform them
    if (titleBlock && contentContainer) {
      // Create header div and move innerHTML of titleBlock into it
      const header = document.createElement("div");
      header.className = "section-header";
      header.innerHTML = titleBlock.innerHTML;

      // Replace titleBlock with header
      titleBlock.parentNode.replaceChild(header, titleBlock);

      // Create wrapper and move contentContainer into it
      const wrapper = document.createElement("div");
      wrapper.className = "project-section";

      // Replace contentContainer with wrapper, then append content inside wrapper
      contentContainer.parentNode.replaceChild(wrapper, contentContainer);
      wrapper.appendChild(contentContainer);

      // Toggle on header click
      header.addEventListener("click", function () {
        wrapper.classList.toggle("open");
        // optional: smooth scroll into view when opening
        if (wrapper.classList.contains("open")) {
          // small delay to allow max-height change; then scroll
          setTimeout(function () {
            wrapper.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }, 200);
        }
      });
      // If you want some sections to be open by default, uncomment lines below
      // if (id === 'open-source') wrapper.classList.add('open');
    }
  });
});
