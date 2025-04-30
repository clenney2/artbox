// Wait for DOM to fully load
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const mobileMenuToggle = document.getElementById('mobile-menu');
    const mobileNav = document.getElementById('mobile-nav');
    const body = document.body;
    
    if (mobileMenuToggle && mobileNav) {
        mobileMenuToggle.addEventListener('click', function() {
            mobileMenuToggle.classList.toggle('active');
            mobileNav.classList.toggle('active');
            body.classList.toggle('no-scroll');
        });
    }
    
    // Close mobile menu when clicking on links
    const mobileNavLinks = document.querySelectorAll('#mobile-nav a');
    
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', function() {
            mobileMenuToggle.classList.remove('active');
            mobileNav.classList.remove('active');
            body.classList.remove('no-scroll');
        });
    });
    
    let ticking = false;

function handleScroll() {
  const header = document.querySelector("header");
  const scrollTopBtn = document.querySelector(".scroll-to-top");

  if (window.scrollY > 100) {
    header.classList.add("scrolled");
    scrollTopBtn.classList.add("show");
  } else {
    header.classList.remove("scrolled");
    scrollTopBtn.classList.remove("show");
  }
}

window.addEventListener("scroll", () => {
  if (!ticking) {
    requestAnimationFrame(() => {
      handleScroll();
      ticking = false;
    });
    ticking = true;
  }
});

    
    scrollButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Contact form submission
    const contactForm = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            // Simple validation
            if (!name || !email || !message) {
                formMessage.innerHTML = 'Будь ласка, заповніть всі поля';
                formMessage.style.color = '#ff3333';
                return;
            }
            
            // Simulate form submission (in a real project, this would be an API call)
            contactForm.reset();
            formMessage.innerHTML = '💌 Дякуємо! Ваше повідомлення надіслано успішно.';
            formMessage.style.color = '#f5a623';
            
            // Reset message after 5 seconds
            setTimeout(() => {
                formMessage.innerHTML = '';
            }, 5000);
        });
    }
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const target = document.querySelector(this.getAttribute('href'));
            
            if (target) {
                const headerOffset = 80;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Add animation for elements when they come into view
    const animateElements = document.querySelectorAll('.skill-card, .project-card, .stat-item');
    
    const observerOptions = {
        threshold: 0.2,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeIn 0.6s ease-out forwards';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    animateElements.forEach(element => {
        element.style.opacity = '0';
        observer.observe(element);
    });
});

// Portfolio Image Modal
function openModal(src) {
    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    modalImage.src = src;
    modal.classList.add('active');
    document.documentElement.style.overflow = 'hidden';
    document.documentElement.style.overflow = '';
    modal.scrollTop = 0;

}

function closeModal() {
    const modal = document.getElementById('imageModal');
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

// Close modal when clicking outside the image
document.getElementById('imageModal').addEventListener('click', function(e) {
    if (e.target === this) {
        closeModal();
    }
});


// Языковое переключение (десктоп + мобайл)
document.querySelectorAll('.language-switcher img, .mobile-lang-switcher img').forEach(icon => {
    icon.addEventListener('click', () => {
        const selectedLang = icon.getAttribute('data-lang');
        setLanguage(selectedLang); // предполагается, что setLanguage уже есть
        localStorage.setItem('lang', selectedLang);
    });
});


const translations = {
    ua: {
      nav_home: "Головна",
      nav_about: "Про мене",
      nav_skills: "Навички",
      nav_portfolio: "Роботи",
      nav_contact: "Контакти",
  
      heroRole: "ВЕБ-АРХІТЕКТОР",
      heroSubtitle: "Сайти, що працюють на вас. Дизайн, що запам'ятовується. Функціональність, яка конвертує.",
      heroPortfolioBtn: "ПОРТФОЛІО",
      heroContactBtn: "ЗКОНТАКТУВАТИ",
  
      about_title: "Про мене",
      about_intro: "Привіт, мене звати Діана. Я веб‑розробниця з понад 3 роками досвіду, що створює сучасні, ефективні рішення для бізнесу. Мій підхід ґрунтується на аналізі потреб клієнта та розробці індивідуальних, адаптивних сайтів.",
      about_stack: "Використовуючи HTML5, CSS3, Tailwind, PHP та JavaScript, я створю проекти, які не лише виглядають професійно, але й оптимізовані для досягнення конкретних бізнес-результатів. Моя мета – перетворити ваш сайт у потужний інструмент для зростання вашого бізнесу.",
      about_motto: "Досвід, що трансформує ідеї у цінні цифрові продукти.",
      about_experience: "Років досвіду",
      about_projects: "Проектів",
      about_clients: "Задоволених клієнтів",
  
      skills_title: "Навички",
      skills_subtitle: "Технології, з якими я працюю",
      skills_description: "Постійно розвиваюсь і вдосконалюю свої навички, щоб створювати сучасні та функціональні веб-рішення.",
      html5: "Семантична, доступна та структурована розмітка",
      css3: "Сучасне оформлення, анімації, макети та адаптивність",
      js: "Динамічна взаємодія та поведінка елементів",
      php: "Серверна логіка, обробка форм та запитів",
      tailwindcss: "Гнучкий дизайн за допомогою утилітарних класів",
      responsive_design_title: "Адаптивний дизайн",
      responsive_design: "Ідеальний вигляд на всіх пристроях",
      mysql: "Система управління базами даних",
      jquery: "Бібліотека JavaScript для роботи з DOM",
      jquery_ui: "Бібліотека віджетів для створення інтерфейсів",
  
      portfolio_title: "Портфоліо",
      portfolio_subtitle: "Від задачі – до рішення",
      portfolio_description: "Кожен з лендингів – відповідь на конкретний запит клієнта.",
      project1_title: "RitmusTánc – Танцювальна Студія (Угорщина)",
      project1_description: " Сайт поєднує візуальну емоцію з функціональністю: чітка структура, акцент на UX, зручна навігація та адаптивність на всіх етапах взаємодії. ",
      project2_title: "ZenYo – Студія йоги (Угорщина)",
      project2_description: "Чистий UI, продуманий UX і м’яка візуальна айдентика. Структура заточена під швидке залучення: знайомство з послугами, інструкторами, цінами та запис — в декілька кліків.",
      project3_title: "RhythmX – Танцювальна студія (Угорщина)",
      project3_description: "Стильний сайт для студії танцю, з акцентом на програми, викладачів і відгуки. Простий у навігації, зручний для запису на заняття.",
      project4_title: "ÉliteJóga – Студія йоги (Угорщина)",
      project4_description: "Високорівнева реалізація з фокусом на UI-естетику та UX-структуру. Компонентна сітка, акценти на контенті, оптимізований call-to-action flow. Проєкт спрямований на конверсію та комфорт взаємодії на всіх пристроях.",
      portfolio_btn: "ПЕРЕГЛЯНУТИ",
      portfolio_note: "*Дані на сайті — приклади для демонстрації роботи. Реальний контент надається замовником після узгодження.",
  
      namePlaceholder: "Ваше ім'я",
      emailPlaceholder: "Ваш email",
      messagePlaceholder: "Ваше повідомлення",
  
      title: "Контакти",
      subtitle: "Давайте створимо щось неймовірне разом",
      description: "Шукаєте веб-розробника для вашого наступного проекту? Зв'яжіться зі мною, і ми обговоримо, як я можу допомогти втілити ваші ідеї в життя.",
      email: "Email",
      telegram: "Telegram",
      location: "Локація",
      city: "Київ, Україна",
      formTitle: "Напишіть мені",
      nameLabel: "Ім'я",
      namePlaceholder: "Ваше ім'я",
      emailLabel: "Email",
      emailPlaceholder: "Ваш email",
      messageLabel: "Повідомлення",
      messagePlaceholder: "Ваше повідомлення",
      sendButton: "Надіслати",
      successMessage: "💌 Дякуємо! Ваше повідомлення надіслано успішно.",
      sentStatus: "Повідомлення відправлено!",
  
      footer_description: "Допомагаю брендам звучати онлайн — від першого враження до останнього кліка.",
      footer_nav_title: "Навігація",
      footer_contact_title: "Контакти",
    },
    
    en: {
      nav_home: "Home",
      nav_about: "About Me",
      nav_skills: "Skills",
      nav_portfolio: "Portfolio",
      nav_contact: "Contact",
  
      heroRole: "WEB ARCHITECT",
      heroSubtitle: "Websites that work for you. Memorable design. Functionality that converts.",
      heroPortfolioBtn: "PORTFOLIO",
      heroContactBtn: "CONTACT ME",
  
      about_title: "About Me",
      about_intro: "Hi, my name is Diana. I'm a web developer with over 3 years of experience, creating modern, effective solutions for businesses. My approach is based on analyzing client needs and developing custom, responsive websites.",
      about_stack: "Using HTML5, CSS3, Tailwind, PHP, and JavaScript, I create projects that not only look professional but are also optimized to achieve specific business goals. My aim is to turn your website into a powerful tool for growing your business.",
      about_motto: "Experience that transforms ideas into valuable digital products.",
      about_experience: "Years of experience",
      about_projects: "Projects",
      about_clients: "Happy clients",
  
      skills_title: "Skills",
      skills_subtitle: "Technologies I Work With",
      skills_description: "I constantly develop and enhance my skills to create modern and functional web solutions.",
      html5: "Semantic, accessible, and structured markup",
      css3: "Modern styling, animations, layouts, and responsiveness",
      js: "Dynamic interaction and element behavior",
      php: "Server-side logic, form and request processing",
      tailwindcss: "Flexible design with utility classes",
      responsive_design_title: "Responsive Design",
      responsive_design: "Perfect appearance on all devices",
      mysql: "Database management system",
      jquery: "JavaScript library for DOM manipulation",
      jquery_ui: "Widget library for creating interfaces",
  
      portfolio_title: "Portfolio",
      portfolio_subtitle: "From problem – to solution",
      portfolio_description: "Each landing page is a response to a specific client request.",
      project1_title: "RitmusTánc – Dance Studio (Hungary)",
      project1_description: "The site blends visual emotion with functionality: clear structure, UX-focused flow, intuitive navigation, and full responsiveness across all interaction points.",
      project2_title: "ZenYo – Yoga Studio (Hungary)",
      project2_description: "Clean UI, thoughtful UX, and a soft visual identity. The layout is optimized for fast engagement: service overview, instructors, pricing, and registration — all in a few clicks.",
      project3_title: "RhythmX – Dance Studio (Hungary)",
      project3_description: "Stylish website with a focus on programs, instructors, and reviews. Easy to navigate and convenient for booking classes.",
      project4_title: "ÉliteJóga – Yoga Studio (Hungary)",
      project4_description: "High-level implementation with a focus on UI aesthetics and UX structure. Component-based layout, content-focused design, and an optimized call-to-action flow. Built for conversion and seamless user experience across all devices.",
      portfolio_btn: "VIEW",
      portfolio_note: "*The content on the site is for demonstration purposes. Actual content is provided by the client upon agreement.",
  
      namePlaceholder: "Your name",
      emailPlaceholder: "Your email",
      messagePlaceholder: "Your message",
  
      title: "Contact",
      subtitle: "Let's create something amazing together",
      description: "Looking for a web developer for your next project? Get in touch and let's discuss how I can help bring your ideas to life.",
      email: "Email",
      telegram: "Telegram",
      location: "Location",
      city: "Kyiv, Ukraine",
      formTitle: "Write me a message",
      nameLabel: "Name",
      namePlaceholder: "Your name",
      emailLabel: "Email",
      emailPlaceholder: "Your email",
      messageLabel: "Message",
      messagePlaceholder: "Your message",
      sendButton: "Send",
      successMessage: "💌 Thank you! Your message has been sent successfully.",
      sentStatus: "Message sent!",
  
      footer_description: "Helping brands stand out online — from the first impression to the final click.",
      footer_nav_title: "Navigation",
      footer_contact_title: "Contact",
  
  },
    
    pl: {
      nav_home: "Strona główna",
      nav_about: "O mnie",
      nav_skills: "Umiejętności",
      nav_portfolio: "Realizacje",
      nav_contact: "Kontakt",
  
      heroRole: "ARCHITEKT STRON WWW",
      heroSubtitle: "Strony, które pracują na Ciebie. Zapadający w pamięć design. Funkcjonalność, która konwertuje.",
      heroPortfolioBtn: "PORTFOLIO",
      heroContactBtn: "KONTAKT",
  
      about_title: "O mnie",
      about_intro: "Cześć, mam na imię Diana. Jestem web developerem z ponad 3-letnim doświadczeniem, tworzę nowoczesne i skuteczne rozwiązania dla firm. Moje podejście opiera się na analizie potrzeb klienta i tworzeniu indywidualnych, responsywnych stron internetowych.",
      about_stack: "Korzystając z HTML5, CSS3, Tailwind, PHP i JavaScript tworzę projekty, które nie tylko wyglądają profesjonalnie, ale są też zoptymalizowane pod kątem osiągania konkretnych celów biznesowych. Moim celem jest przekształcenie Twojej strony w potężne narzędzie do rozwoju biznesu.",
      about_motto: "Doświadczenie, które przekształca pomysły w wartościowe produkty cyfrowe.",
      about_experience: "Lata doświadczenia",
      about_projects: "Projekty",
      about_clients: "Zadowoleni klienci",
  
      skills_title: "Umiejętności",
      skills_subtitle: "Technologie, z których korzystam",
      skills_description: "Ciągle rozwijam swoje umiejętności, aby tworzyć nowoczesne i funkcjonalne rozwiązania internetowe.",
      html5: "Semantyczne, dostępne i uporządkowane znaczniki",
      css3: "Nowoczesny styl, animacje, układy i responsywność",
      js: "Dynamiczna interakcja i zachowanie elementów",
      php: "Logika serwera, obsługa formularzy i zapytań",
      tailwindcss: "Elastyczny projekt z klasami użytkowymi",
      responsive_design_title: "Responsywny design",
      responsive_design: "Idealny wygląd na wszystkich urządzeniach",
      mysql: "System zarządzania bazą danych",
      jquery: "Biblioteka JavaScript do manipulacji DOM",
      jquery_ui: "Biblioteka widżetów do tworzenia interfejsów",
  
      portfolio_title: "Portfolio",
      portfolio_subtitle: "Od problemu – do rozwiązania",
      portfolio_description: "Każdy landing page to odpowiedź na konkretną potrzebę klienta.",
      project1_title: "RitmusTánc – Studio tańca (Węgry)",
      project1_description: "Strona łączy emocje wizualne z funkcjonalnością: przejrzysta struktura, nacisk na UX, intuicyjna nawigacja i pełna responsywność na każdym etapie interakcji.",
      project2_title: "ZenYo – Studio jogi (Węgry)",
      project2_description: "Czysty UI, przemyślany UX i delikatna identyfikacja wizualna. Struktura zoptymalizowana pod szybkie zaangażowanie: usługi, instruktorzy, cennik i zapisy — wszystko w kilku kliknięciach.",
      project3_title: "RhythmX – Studio tańca (Węgry)",
      project3_description: "Nowoczesna strona z naciskiem na programy, instruktorów i opinie. Prosta w nawigacji, wygodna do zapisów na zajęcia.",
      project4_title: "ÉliteJóga – Studio jogi (Węgry)",
      project4_description: "Wysokopoziomowa realizacja z naciskiem na estetykę UI i strukturę UX. Siatka komponentów, treściowe akcenty i zoptymalizowany flow call-to-action. Projekt ukierunkowany na konwersję i płynne doświadczenie na wszystkich urządzeniach.",
      portfolio_btn: "ZOBACZ",
      portfolio_note: "*Treści na stronie mają charakter demonstracyjny. Rzeczywiste materiały dostarczane są przez klienta po uzgodnieniu.",
   
      namePlaceholder: "Twoje imię",
      emailPlaceholder: "Twój email",
      messagePlaceholder: "Twoja wiadomość",
  
      title: "Kontakt",
      subtitle: "Stwórzmy coś niesamowitego razem",
      description: "Szukasz web developera do swojego następnego projektu? Skontaktuj się ze mną, a porozmawiamy, jak mogę pomóc zrealizować Twoje pomysły.",
      email: "Email",
      telegram: "Telegram",
      location: "Lokalizacja",
      city: "Kijów, Ukraina",
      formTitle: "Napisz do mnie",
      nameLabel: "Imię",
      namePlaceholder: "Twoje imię",
      emailLabel: "Email",
      emailPlaceholder: "Twój email",
      messageLabel: "Wiadomość",
      messagePlaceholder: "Twoja wiadomość",
      sendButton: "Wyślij",
      successMessage: "💌 Dziękuję! Twoja wiadomość została pomyślnie wysłana.",
      sentStatus: "Wiadomość wysłana!",
  
      footer_description: "Pomagam markom zaistnieć online – od pierwszego wrażenia do ostatniego kliknięcia.",
      footer_nav_title: "Nawigacja",
      footer_contact_title: "Kontakt",
  
    }
  };
  
  function setLanguage(lang) {
  localStorage.setItem("siteLang", lang);
  
  // Перевод обычного текста
  const elements = document.querySelectorAll("[data-i18n]");
  elements.forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });
  
  // Перевод плейсхолдеров
  const placeholders = document.querySelectorAll("[data-i18n-placeholder]");
  placeholders.forEach(el => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (translations[lang] && translations[lang][key]) {
      el.placeholder = translations[lang][key];
    }
  });
  }
  
  
  // Обработка кликов по флажкам
  document.querySelectorAll(".lang-switch").forEach(btn => {
    btn.addEventListener("click", () => {
      const lang = btn.getAttribute("data-lang");
      setLanguage(lang);
    });
  });
  
  
  const contactForm = document.getElementById('contactForm');
  const formPopup = document.getElementById('form-success-popup');
  
  if (contactForm) {
      contactForm.addEventListener('submit', function (e) {
          e.preventDefault();
  
          const formData = new FormData(contactForm);
  
          fetch('https://formspree.io/f/xovdqzjq', {
              method: 'POST',
              headers: { 'Accept': 'application/json' },
              body: formData
          })
          .then(response => {
              if (response.ok) {
                  contactForm.reset();
                  showSuccessPopup();
              } else {
                  alert('Помилка надсилання. Спробуйте пізніше.');
              }
          })
          .catch(() => {
              alert('Сталась помилка. Спробуйте пізніше.');
          });
      });
  }
  
  function showSuccessPopup() {
      if (!formPopup) return;
      formPopup.classList.remove('hidden');
      setTimeout(() => {
          formPopup.classList.add('visible');
      }, 10);
  
      setTimeout(() => {
          formPopup.classList.remove('visible');
          setTimeout(() => {
              formPopup.classList.add('hidden');
          }, 500);
      }, 5000);
  }
  

  particlesJS('particles-js', {
    particles: {
      number: { value: 25 },
      color: { value: '#ffffff' },
      opacity: { value: 0.1 },
      size: { value: 2 },
      move: { speed: 0.6 },
      line_linked: { enable: false }
    },
    interactivity: { detect_on: "canvas", events: { onhover: { enable: false } } },
    retina_detect: true
  });
  