 // Проверка, является ли устройство мобильным
const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

// Включать кастомный курсор только для десктопов
if (!isMobile) {
  // Custom Cursor
  document.addEventListener('DOMContentLoaded', () => {
    const cursors = document.querySelectorAll('.custom-cursor');
    const dot = cursors[0];
    const circle = cursors[1];

    const moveCursor = (e) => {
      const x = e.clientX;
      const y = e.clientY;

      dot.style.left = `${x}px`;
      dot.style.top = `${y}px`;

      circle.style.left = `${x}px`;
      circle.style.top = `${y}px`;
    };

    window.addEventListener('mousemove', moveCursor);

    const links = document.querySelectorAll('a, button');
    links.forEach(link => {
      link.addEventListener('mouseenter', () => {
        dot.classList.add('cursor-active');
        circle.classList.add('cursor-active');
      });
      link.addEventListener('mouseleave', () => {
        dot.classList.remove('cursor-active');
        circle.classList.remove('cursor-active');
      });
    });
  });
}

  // Loader Animation
  document.addEventListener('DOMContentLoaded', () => {
    const loader = document.querySelector('.loader');
    const loadingBar = document.getElementById('loading-bar');
    let progress = 0;

    // Обновление полосы загрузки
    const interval = setInterval(() => {
      progress += Math.random() * 4;
      if (progress >= 95) progress = 95;
      loadingBar.style.width = `${progress}%`;
    }, 100);

    // Когда всё загружено (включая картинки, стили и т.п.)
    window.addEventListener('load', () => {
      clearInterval(interval);
      loadingBar.style.width = '100%';

      // Небольшая задержка перед скрытием лоадера — просто для плавности
      setTimeout(() => {
        loader.classList.add('fade-out');
        setTimeout(() => {
          loader.remove(); // Удаляем лоадер с DOM
        }, 500); // Совпадает с CSS-анимацией
      }, 300);
    });
  });

  // Обработчик отправки формы
document.addEventListener('DOMContentLoaded', () => {
const contactForm = document.getElementById('contact-form');
const formSuccess = document.getElementById('form-success');
const formStatus = document.getElementById('form-status');

if (contactForm) {
  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault(); // Предотвращаем стандартную отправку формы
    
    const formData = new FormData(contactForm);
    
    try {
      // Используем URL из атрибута action формы
      const response = await fetch(contactForm.action, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        // Показываем сообщение об успешной отправке
        contactForm.reset(); // Очищаем форму
        
        // Показываем окно благодарности
        if (formSuccess) {
          formSuccess.classList.remove('hidden');
          
          // Показываем статус формы если есть
          if (formStatus) {
            formStatus.classList.remove('hidden');
          }
          
          // Скрываем через 5 секунд
          setTimeout(() => {
            formSuccess.classList.add('hidden');
            if (formStatus) {
              formStatus.classList.add('hidden');
            }
          }, 5000); // Скрываем через 5 секунд
        }
      } else {
        console.error('Ошибка отправки формы');
      }
    } catch (error) {
      console.error('Произошла ошибка:', error);
    }
  });
}
});

  // Header Scroll Effect
  window.addEventListener('scroll', () => {
    const header = document.getElementById('header');
    if (window.scrollY > 50) {
      header.classList.add('bg-darker', 'shadow-lg');
    } else {
      header.classList.remove('bg-darker', 'shadow-lg');
    }
  });

  document.addEventListener('DOMContentLoaded', () => {
    const menu = document.getElementById('mobile-menu');
    const openBtn = document.getElementById('menu-open'); // добавь кнопку с таким id для открытия
    const closeBtn = document.getElementById('menu-close');
  
    openBtn?.addEventListener('click', () => {
      menu.classList.remove('hidden', 'hide');
      menu.classList.add('show');
    });
  
    closeBtn?.addEventListener('click', () => {
      menu.classList.remove('show');
      menu.classList.add('hide');
  
      setTimeout(() => {
        menu.classList.add('hidden');
      }, 500); // столько же, сколько transition-duration
    });
  });
  

  // Modal Functions
  function openModal(src) {
    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    modalImage.src = src;
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    const modal = document.getElementById('imageModal');
    modal.classList.add('hidden');
    document.body.style.overflow = '';
  }

  // Close modal when clicking outside
  document.getElementById('imageModal').addEventListener('click', (e) => {
    if (e.target === document.getElementById('imageModal')) {
      closeModal();
    }
  });

  // Count-up Animation
  document.addEventListener('DOMContentLoaded', () => {
    const counters = document.querySelectorAll('.counter');
    
    const animateCounter = (counter) => {
      const target = parseInt(counter.getAttribute('data-target'));
      let count = 0;
      const increment = target / 50;
      
      const updateCount = () => {
        if (count < target) {
          count += increment;
          counter.textContent = Math.floor(count) + (target === 100 ? '%' : '');
          setTimeout(updateCount, 30);
        } else {
          counter.textContent = target + (target === 100 ? '%' : '');
        }
      };
      
      updateCount();
    };
    
    const observerOptions = {
      threshold: 0.5
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);
    
    counters.forEach(counter => {
      observer.observe(counter);
    });
  });

  // Button Ripple Effect
document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('button, .btn-primary');
  
    buttons.forEach(button => {
      const createRipple = (x, y, target) => {
        const ripple = document.createElement('span');
        ripple.classList.add('ripple');
        ripple.style.left = `${x}px`;
        ripple.style.top = `${y}px`;
        target.appendChild(ripple);
        setTimeout(() => {
          ripple.remove();
        }, 600);
      };
  
      button.addEventListener('click', function (e) {
        const x = e.clientX - e.target.getBoundingClientRect().left;
        const y = e.clientY - e.target.getBoundingClientRect().top;
        createRipple(x, y, this);
      });
  
      button.addEventListener('touchstart', function (e) {
        const touch = e.touches[0];
        const x = touch.clientX - e.target.getBoundingClientRect().left;
        const y = touch.clientY - e.target.getBoundingClientRect().top;
        createRipple(x, y, this);
      });
    });
  });
  

  // Particles Animation
document.addEventListener('DOMContentLoaded', () => {
    const particlesContainer = document.getElementById('particles-container');
  
    // Проверка, является ли устройство мобильным
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  
    // Меньше частиц на мобильных устройствах
    const particlesCount = isMobile ? 20 : 50;
  
    for (let i = 0; i < particlesCount; i++) {
      const particle = document.createElement('div');
  
      // Random properties
      const size = Math.random() * 5 + 2;
      const posX = Math.random() * 100;
      const posY = Math.random() * 100;
      const opacity = Math.random() * 0.5 + 0.1;
      const animDuration = Math.random() * 20 + 10;
      const animDelay = Math.random() * 10;
  
      // Apply styles
      particle.style.position = 'absolute';
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.borderRadius = '50%';
      particle.style.backgroundColor = '#D4B45F';
      particle.style.left = `${posX}%`;
      particle.style.top = `${posY}%`;
      particle.style.opacity = opacity;
      particle.style.animation = `float ${animDuration}s infinite ease-in-out ${animDelay}s`;
  
      particlesContainer.appendChild(particle);
    }
  });
  

  // Add float animation
  const style = document.createElement('style');
  style.innerHTML = `
    @keyframes float {
      0%, 100% { transform: translateY(0) translateX(0); }
      25% { transform: translateY(-20px) translateX(10px); }
      50% { transform: translateY(0) translateX(20px); }
      75% { transform: translateY(20px) translateX(10px); }
    }
  `;
  document.head.appendChild(style);

  // Initialize AOS
  AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true,
    mirror: false
  });

  // Initialize GSAP with ScrollTrigger
  gsap.registerPlugin(ScrollTrigger);
  
  // Header animation
  gsap.from('#header', {
    y: -50,
    opacity: 0,
    duration: 1,
    ease: 'power3.out'
  });
  
  // Parallax effect for sections
  document.querySelectorAll('.parallax').forEach(section => {
    const bg = section.querySelector('.parallax-bg');
    
    if (bg) {
      gsap.to(bg, {
        scrollTrigger: {
          trigger: section,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true
        },
        y: '20%',
        ease: 'none'
      });
    }
  });
  
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: 'smooth'
        });
        
        // Close mobile menu if open
        if (document.getElementById('mobile-menu').classList.contains('flex')) {
          document.getElementById('mobile-menu').classList.add('hidden');
          document.getElementById('mobile-menu').classList.remove('flex');
        }
      }
    });
  });





  let lastScrollTop = 0; // Начальное положение прокрутки

// Получаем элемент шапки
const header = document.getElementById('header');

// Слушаем событие прокрутки
window.addEventListener('scroll', () => {
const currentScroll = window.pageYOffset || document.documentElement.scrollTop; // Текущее положение прокрутки

// Если скроллим вниз (к футеру), добавляем затемнение
if (currentScroll > lastScrollTop && currentScroll > 100) {
  header.classList.add('bg-black', 'bg-opacity-50'); // Затемнение при прокрутке вниз
} else if (currentScroll < lastScrollTop) {
  // Если скроллим вверх (к обложке), убираем затемнение
  header.classList.remove('bg-black', 'bg-opacity-50');
}

// Обновляем последнее положение прокрутки
lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
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
    project1_title: "GymMex – Спортзал (Мексика)",
    project1_description: "Лендінг для фітнес-клубу з фокусом на тренерів, ціни та відгуки. Інтуїтивна структура і динамічний дизайн забезпечують ефективне залучення клієнтів.",
    project2_title: "Masszázs Stúdió – Масажний салон (Угорщина)",
    project2_description: "Сайт для масажного салону з логічно структурованими послугами, блоками з майстрами та відгуками. Дизайн, орієнтований на комфорт та довіру клієнтів.",
    project3_title: "RhythmX – Танцювальна студія (Угорщина)",
    project3_description: "Стильний сайт для студії танцю, з акцентом на програми, викладачів і відгуки. Простий у навігації, зручний для запису на заняття.",
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
    project1_title: "GymMex – Gym (Mexico)",
    project1_description: "Landing page for a fitness club focused on trainers, pricing, and reviews. Intuitive structure and dynamic design ensure effective customer engagement.",
    project2_title: "Masszázs Stúdió – Massage Salon (Hungary)",
    project2_description: "Website for a massage salon with logically structured services, blocks for therapists and reviews. Design focused on client comfort and trust.",
    project3_title: "RhythmX – Dance Studio (Hungary)",
    project3_description: "Stylish website for a dance studio, highlighting programs, instructors, and reviews. Easy to navigate and convenient for class registration.",
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
    project1_title: "GymMex – Siłownia (Meksyk)",
    project1_description: "Landing page dla klubu fitness z naciskiem na trenerów, ceny i opinie. Intuicyjna struktura i dynamiczny design zapewniają skuteczne przyciąganie klientów.",
    project2_title: "Masszázs Stúdió – Salon masażu (Węgry)",
    project2_description: "Strona internetowa salonu masażu z logicznie uporządkowanymi usługami, sekcjami z terapeutami i opiniami. Projekt skoncentrowany na komforcie i zaufaniu klientów.",
    project3_title: "RhythmX – Studio tańca (Węgry)",
    project3_description: "Stylowa strona dla studia tańca, z naciskiem na programy, instruktorów i opinie. Łatwa w nawigacji i wygodna do zapisów na zajęcia.",
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

// Установка языка при загрузке
document.addEventListener("DOMContentLoaded", () => {
  const lang = localStorage.getItem("siteLang") || "ua";
  setLanguage(lang);

  // Мобильное меню открытие/закрытие
  document.getElementById("menu-toggle")?.addEventListener("click", () => {
    document.getElementById("mobile-menu")?.classList.remove("hidden");
  });

  document.getElementById("menu-close")?.addEventListener("click", () => {
    document.getElementById("mobile-menu")?.classList.add("hidden");
  });
});