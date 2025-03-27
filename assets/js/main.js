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
      name: "E-Commerce Application",
      description:
        "This platform provides all kind of electronics & electrical equipments for local customers",
      technologies: ["HTML5", "Bootstrap", "CSS3", "JavaScript", "PHP"],
      image: "assets/img/portfolio/chanakaelectronics.JPG",
      link: "https://chanakaelectronics.com/",
    },
    {
      name: "Tranquil Terrace",
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
      name: "CineSync Android App",
      description:
        "A comprehensive platform for movie and TV enthusiasts to explore, review, and track their favorite content. Features include personalized recommendations, user-generated reviews, advanced search filters (genre, year, rating), watchlists, and integration with streaming services. Built with React, Node.js, Firebase, and IMDB API for real-time data updates.",
      technologies: ["Java", "Kotlin", "Android", "Firebase", "SQLite"],
      image: "assets/img/portfolio/cinesync.png",
      link: "https://github.com/Tharindu714/CineSync_movie-Database-Android-App.git",
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
      image: "https://media.licdn.com/dms/image/v2/D4D12AQFHql8Dym1MhQ/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1675072633615?e=2147483647&v=beta&t=e4Sczl2clj5wdJFpFjgM_bpoPtN7UjEVI5W03Fjl9dw",
      link: "oop-concept-beginner-guide.html",
    },

    {
      name: "JavaScript Fun Game: Cowboy Adventure",
      description:
        "The project was built with vanilla HTML5 Canvas and JavaScript, making it a perfect exercise for coding bootcamp enthusiasts and those new to game development. The game emphasizes the practical application of JavaScript for dynamic content manipulation and interactive design.",
        technologies: ["HTML5", "CSS3", "JavaScript"],
      image: "assets/img/portfolio/cowboy.jpg",
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
})();
