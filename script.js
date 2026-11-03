    document.addEventListener('DOMContentLoaded', function () {



      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      const typedText = document.getElementById("typed-text");

      const translations = {
        en: {
          "about.title": "About Me",
          "about.value": "Full Stack developer delivering real-world products across backend, frontend, and infrastructure.",
          "about.metric.projects": "major projects at Epitech",
          "about.metric.bugs": "hours in bug fixing",
          "about.profile.teamwork": "const teamwork = <span class='str'>true</span>;",
          "about.profile.adaptability": "const adaptability = <span class='str'>high</span>;",
          "about.profile.proactive": "const proactiveContributor = <span class='str'>true</span>;",
          "log.comment": "<span class='comment'>// My learning journey and skill progress</span>",
          "log.line1": "console.log(<span class='var'>\"I started learning to code during my Web and Mobile Web Developer training (Level 5 Professional Title) from July 2024 to April 2025. Learned fundamentals: MySQL, PostgreSQL, HTML, CSS, JavaScript, PHP (Symfony framework).\"</span>);",
          "log.line2": "console.log(<span class='var'>\"Since September 2025, I have been at Epitech, where I built Job Board, Despotisme, and Orbit Otter Chat, learned to work with Docker, and discovered the basics of Jenkins.\"</span>);",
          "log.line3": "console.log(<span class='var'>\"I keep working on concrete projects, growing my hands-on experience, and enjoying the process.\"</span>);",
          "log.line4": "console.log(<span class='var'>\"At Epitech, I helped supervise a work-experience placement for seconde students — an opportunity to share knowledge, explain technical concepts clearly, and support students discovering the world of IT.\"</span>);",
          "log.line5": "console.log(<span class='var'>\"I work as an Apprentice Data Analyst at DGAMPA, developing my analytical skills in a professional environment, with a focus on understanding data, asking useful questions, and presenting information clearly.\"</span>);",
          "typed.greeting": ["> Hello, I'm Anatoliy > Web Developer | Coding Enthusiast"],
          "nav.about": "About",
          "nav.projects": "Projects",
          "nav.skills": "Skills",
          "nav.hobbies": "Hobbies",
          "nav.contact": "Contact",
          "section.projects": "Projects",
          "section.skills": "Skills",
          "section.hobbies": "Hobbies",
          "section.contact": "Contact",
          "hobby.cooking": "Cooking",
          "hobby.drums": "Drums",
          "hobby.hiking": "Hiking",
          "hobby.running": "Running",
          "form.firstname": "Firstname",
          "form.lastname": "Lastname",
          "form.email": "Email",
          "form.subject": "Subject",
          "form.message": "Your message",
          "form.send": "Send",
          "form.copyEmail": "Copy Email",
          "form.tip": "If your email app does not open, copy my email and write directly.",
          "form.status.sent": "Opening your email app. If nothing happens, write to anatoliy.lavrentiev1@gmail.com.",
          "form.status.copied": "Email copied: anatoliy.lavrentiev1@gmail.com",
          "form.status.copyFailed": "Could not copy automatically. Email: anatoliy.lavrentiev1@gmail.com",
          "button.cv": "downloadCV();"
        },
        fr: {
          "about.title": "À propos de moi",
          "about.value": "Développeur Full Stack, je réalise des produits concrets côté backend, frontend et infrastructure.",
          "about.metric.projects": "projets majeurs à Epitech",
          "about.metric.bugs": "heures de bug fixing",
          "about.profile.teamwork": "const teamwork = <span class='str'>true</span>;",
          "about.profile.adaptability": "const adaptability = <span class='str'>high</span>;",
          "about.profile.proactive": "const proactiveContributor = <span class='str'>true</span>;",
          "log.comment": "<span class='comment'>// Mon parcours d'apprentissage et progression des compétences</span>",
          "log.line1": "console.log(<span class='var'>\"J’ai commencé à apprendre le code lors de ma formation Développeur Web et Web Mobile (Titre Professionnel de niveau 5) de juillet 2024 à avril 2025. Bases étudiées : MySQL, PostgreSQL, HTML, CSS, JavaScript, PHP (framework Symfony).\"</span>);",
          "log.line2": "console.log(<span class='var'>\"Depuis septembre 2025, je suis à Epitech, où j’ai réalisé Job Board, Despotisme et Orbit Otter Chat, appris à travailler avec Docker et découvert les bases de Jenkins.\"</span>);",
          "log.line3": "console.log(<span class='var'>\"Je continue à travailler sur des projets concrets, à gagner en expérience pratique et à prendre plaisir au processus.\"</span>);",
          "log.line4": "console.log(<span class='var'>\"À Epitech, j’ai participé à l’encadrement d’un stage de seconde : une occasion de transmettre mes connaissances, de rendre les notions techniques accessibles et d’accompagner la découverte des métiers de l’informatique.\"</span>);",
          "log.line5": "console.log(<span class='var'>\"Je travaille comme apprenti Data Analyst à la DGAMPA, où je développe mes compétences analytiques dans un cadre professionnel, avec une attention particulière à la compréhension des données, à la pertinence des questions et à la clarté de leur présentation.\"</span>);",
          "typed.greeting": ["> Bonjour, je suis Anatoliy > Développeur Web | Passionné de code"],
          "nav.about": "À propos",
          "nav.projects": "Projets",
          "nav.skills": "Compétences",
          "nav.hobbies": "Loisirs",
          "nav.contact": "Contact",
          "section.projects": "Projets",
          "section.skills": "Compétences",
          "section.hobbies": "Loisirs",
          "section.contact": "Contact",
          "hobby.cooking": "Cuisine",
          "hobby.drums": "Batterie",
          "hobby.hiking": "Randonnée",
          "hobby.running": "Course",
          "form.firstname": "Prénom",
          "form.lastname": "Nom",
          "form.email": "E-mail",
          "form.subject": "Objet",
          "form.message": "Votre message",
          "form.send": "Envoyer",
          "form.copyEmail": "Copier l'e-mail",
          "form.tip": "Si votre application e-mail ne s'ouvre pas, copiez mon adresse et écrivez-moi directement.",
          "form.status.sent": "Ouverture de votre application e-mail. Sinon, écrivez à anatoliy.lavrentiev1@gmail.com.",
          "form.status.copied": "E-mail copié : anatoliy.lavrentiev1@gmail.com",
          "form.status.copyFailed": "Copie automatique impossible. E-mail : anatoliy.lavrentiev1@gmail.com",
          "button.cv": "téléchargerCV();"
        }
      };

      let currentLang = localStorage.getItem('lang') || 'en';


      let line = 0, char = 0;
      let text = translations[currentLang]["typed.greeting"][0].split(" > ");
      let typingTimeoutId = null;
      let typingSessionId = 0;

      function type(sessionId) {
        if (sessionId !== typingSessionId) return;
        if (line < text.length) {
          if (char < text[line].length) {
            typedText.innerHTML += text[line].charAt(char);
            char++;
            typingTimeoutId = setTimeout(() => type(sessionId), 100);
          } else {
            typedText.innerHTML += "<br>";
            line++;
            char = 0;
            typingTimeoutId = setTimeout(() => type(sessionId), 600);
          }
        }
      }

      function startTyping(lang) {
        if (typingTimeoutId) clearTimeout(typingTimeoutId);
        typingSessionId += 1;
        const sessionId = typingSessionId;
        text = translations[lang]["typed.greeting"][0].split(" > ");
        typedText.style.transition = "opacity 0.3s ease";
        typedText.style.opacity = 0;
        typingTimeoutId = setTimeout(() => {
          if (sessionId !== typingSessionId) return;
          typedText.innerHTML = "";
          line = 0;
          char = 0;
          typedText.style.opacity = 1;
          type(sessionId);
        }, 300);
      }

      const scrollBtn = document.getElementById("scrollTopBtn");
      window.onscroll = function () {
        scrollBtn.style.display = (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) ? "flex" : "none";
      };
      scrollBtn.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: prefersReducedMotion ? 'auto' : 'smooth' });
      });


      const form = document.getElementById('contactForm');
      const contactStatus = document.getElementById('contactStatus');
      const copyEmailBtn = document.getElementById('copyEmailBtn');
      const contactEmail = 'anatoliy.lavrentiev1@gmail.com';

      function tr(key) {
        return translations[currentLang][key] || key;
      }

      async function copyEmailToClipboard() {
        if (navigator.clipboard && window.isSecureContext) {
          await navigator.clipboard.writeText(contactEmail);
          return;
        }
        const temp = document.createElement('textarea');
        temp.value = contactEmail;
        temp.setAttribute('readonly', '');
        temp.style.position = 'absolute';
        temp.style.left = '-9999px';
        document.body.appendChild(temp);
        temp.select();
        document.execCommand('copy');
        document.body.removeChild(temp);
      }

      form.addEventListener('submit', function (e) {
        e.preventDefault();
        const firstName = document.getElementById('firstname').value.trim();
        const lastName = document.getElementById('lastname').value.trim();
        const email = document.getElementById('email').value;
        const subjectInput = document.getElementById('subject').value.trim();
        const message = document.getElementById('message').value;
        const fullName = `${firstName} ${lastName}`.trim();
        const subject = subjectInput || `Portfolio message from ${fullName}`;
        const body = `${message}\n\nFrom: ${fullName} <${email}>`;
        const mailtoLink = `mailto:${contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        window.location.href = mailtoLink;
        contactStatus.textContent = tr("form.status.sent");
        form.reset();
      });

      copyEmailBtn.addEventListener('click', async () => {
        try {
          await copyEmailToClipboard();
          contactStatus.textContent = tr("form.status.copied");
        } catch (err) {
          contactStatus.textContent = tr("form.status.copyFailed");
        }
      });


      const faders = document.querySelectorAll('.ide-card, .skill, .project, footer, .section-spacing h2');
      if (!prefersReducedMotion) {
        const observer = new IntersectionObserver(entries => {
          entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.classList.add('visible');
          });
        }, { threshold: 0.2 });
        faders.forEach(el => {
          el.classList.add('fade-in');
          observer.observe(el);
        });
      } else {
        faders.forEach(el => el.classList.add('visible'));
      }


      const canvas = document.getElementById('grid-bg');
      const ctx = canvas.getContext('2d');
      let w, h, t = 0;

      function resize() {
        w = canvas.width = window.innerWidth;
        h = canvas.height = window.innerHeight;
      }
      window.addEventListener('resize', resize);
      resize();

      function draw() {
        ctx.clearRect(0, 0, w, h);
        ctx.strokeStyle = 'rgba(0,255,157,0.15)';
        ctx.lineWidth = 1;
        const gridSize = 40;
        for (let x = -w; x < w * 2; x += gridSize) {
          const offsetY = Math.sin((x + t) * 0.005) * 10;
          ctx.beginPath();
          ctx.moveTo(x - (t % gridSize), 0);
          ctx.lineTo(x - (t % gridSize), h);
          ctx.stroke();
          ctx.beginPath();
          ctx.moveTo(0, x + offsetY);
          ctx.lineTo(w, x + offsetY);
          ctx.stroke();
        }
        t += 0.5;
        requestAnimationFrame(draw);
      }
      if (!prefersReducedMotion) draw();

      canvas.style.position = 'fixed';
      canvas.style.top = 0;
      canvas.style.left = 0;
      canvas.style.zIndex = 0;
      canvas.style.width = '100%';
      canvas.style.height = '100%';
      canvas.style.pointerEvents = 'none';


      const burger = document.getElementById('burger');
      const nav = document.querySelector('.nav-links');
      burger.addEventListener('click', () => {
        const isOpen = burger.classList.toggle('active');
        nav.classList.toggle('open', isOpen);
        burger.setAttribute('aria-expanded', String(isOpen));
      });
      document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
          burger.classList.remove('active');
          nav.classList.remove('open');
          burger.setAttribute('aria-expanded', 'false');
        });
      });
      document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
          burger.classList.remove('active');
          nav.classList.remove('open');
          burger.setAttribute('aria-expanded', 'false');
        }
      });

      const themeToggle = document.getElementById('themeToggle');
      const themeIcon = themeToggle.querySelector('i');
      if (localStorage.getItem('theme') === 'light') {
        document.body.classList.add('light-theme');
        themeIcon.classList.replace('fa-sun', 'fa-moon');
      }
      themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('light-theme');
        const isLight = document.body.classList.contains('light-theme');
        themeIcon.classList.replace(isLight ? 'fa-sun' : 'fa-moon', isLight ? 'fa-moon' : 'fa-sun');
        localStorage.setItem('theme', isLight ? 'light' : 'dark');
      });


      const langBtn = document.getElementById("langToggle");
      const langIcon = langBtn.querySelector("i");

      function setLanguage(lang) {
        document.documentElement.lang = lang;
        document.querySelectorAll("[data-i18n]").forEach(el => {
          const key = el.getAttribute("data-i18n");
          const translation = translations[lang][key];
          if (translation) {
            el.style.transition = "opacity 0.2s ease";
            el.style.opacity = 0;
            setTimeout(() => {
              el.innerHTML = translation;
              el.style.opacity = 1;
            }, 200);
          }
        });

        document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
          const key = el.getAttribute("data-i18n-placeholder");
          const translation = translations[lang][key];
          if (translation) {
            el.style.transition = "opacity 0.2s ease";
            el.style.opacity = 0;
            setTimeout(() => {
              el.setAttribute("placeholder", translation);
              el.style.opacity = 1;
            }, 200);
          }
        });

        if (lang === "fr") {
          langIcon.className = "fa-solid fa-globe-europe";
          langBtn.title = "Passer en anglais";
        } else {
          langIcon.className = "fa-solid fa-globe";
          langBtn.title = "Switch to French";
        }

        startTyping(lang);
        localStorage.setItem('lang', lang);
      }

      setLanguage(currentLang);

      langBtn.addEventListener("click", () => {
        currentLang = currentLang === "en" ? "fr" : "en";
        setLanguage(currentLang);
      });



    });
