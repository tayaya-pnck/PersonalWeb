document.addEventListener('DOMContentLoaded', () => {

  // ========== STARFIELD ==========
  const canvas = document.getElementById('starfield');
  const ctx = canvas.getContext('2d');
  let stars = [];
  let starCount;

  function resizeCanvas() {
    const hero = document.getElementById('hero');
    canvas.width = hero.offsetWidth;
    canvas.height = hero.offsetHeight;
    initStars();
  }

  function initStars() {
    starCount = Math.floor((canvas.width * canvas.height) / 4000);
    stars = [];
    for (let i = 0; i < starCount; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 1.6 + 0.4,
        alpha: Math.random() * 0.6 + 0.2,
        drift: Math.random() * 0.15 + 0.02,
        twinkleSpeed: Math.random() * 0.02 + 0.005,
        twinklePhase: Math.random() * Math.PI * 2,
      });
    }
  }

  function drawStars(time) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    stars.forEach(s => {
      const twinkle = s.alpha * (0.7 + 0.3 * Math.sin(time * s.twinkleSpeed + s.twinklePhase));
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255, 255, 255, ${twinkle})`;
      ctx.fill();
      s.y -= s.drift;
      if (s.y < -10) {
        s.y = canvas.height + 10;
        s.x = Math.random() * canvas.width;
      }
    });
  }

  function animateStars(time) {
    drawStars(time);
    requestAnimationFrame(animateStars);
  }

  resizeCanvas();
  animateStars(0);
  window.addEventListener('resize', resizeCanvas);

  // ========== TYPEWRITER ==========
  const typingEl = document.querySelector('.typing');
  if (typingEl) {
    const texts = [
      'Java Engineer & AI Researcher',
      'Full-Stack Developer',
      'Published Author',
      'Open Source Contributor',
    ];
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function type() {
      const current = texts[textIndex];
      if (!isDeleting) {
        typingEl.textContent = current.substring(0, charIndex + 1);
        charIndex++;
        if (charIndex === current.length) {
          setTimeout(() => { isDeleting = true; type(); }, 2000);
          return;
        }
        setTimeout(type, 80);
      } else {
        typingEl.textContent = current.substring(0, charIndex);
        charIndex--;
        if (charIndex < 0) {
          isDeleting = false;
          charIndex = 0;
          textIndex = (textIndex + 1) % texts.length;
          setTimeout(type, 500);
          return;
        }
        setTimeout(type, 40);
      }
    }

    type();
  }

  // ========== NAVBAR SCROLL ==========
  const navbar = document.getElementById('navbar');
  let lastScroll = 0;

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    if (scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
    lastScroll = scrollY;
  });

  // ========== MOBILE NAV TOGGLE ==========
  const navToggle = document.getElementById('nav-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (navToggle) {
    navToggle.addEventListener('click', () => {
      navLinks.classList.toggle('open');
    });

    document.querySelectorAll('.nav-links a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
      });
    });
  }

  // ========== SCROLL REVEAL ==========
  const revealElements = document.querySelectorAll(
    '.about-grid, .timeline, .projects-grid, .skills-grid, .education-content, .leadership-card, .contact-grid'
  );

  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px',
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  revealElements.forEach(el => {
    el.classList.add('reveal');
    observer.observe(el);
  });

  // ========== ANIMATED COUNTERS ==========
  const statNumbers = document.querySelectorAll('.stat-number');

  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseInt(el.getAttribute('data-target'));
        animateCounter(el, target);
        counterObserver.unobserve(el);
      }
    });
  }, { threshold: 0.5 });

  statNumbers.forEach(el => counterObserver.observe(el));

  function animateCounter(el, target) {
    let current = 0;
    const increment = Math.ceil(target / 40);
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      el.textContent = current;
    }, 40);
  }

  // ========== SMOOTH SCROLL FOR NAV ==========
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // ========== PARALLAX V-FIN ==========
  const vfin = document.querySelector('.v-fin');
  if (vfin) {
    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY;
      const heroHeight = document.getElementById('hero').offsetHeight;
      const progress = Math.min(scrollY / heroHeight, 1);
      vfin.style.transform = `translateX(-50%) translateY(${progress * -20}px)`;
      vfin.style.opacity = 1 - progress * 0.8;
    });
  }

  // ========== PSYCHO-FRAME GLOW TRAIL ON MOUSE ==========
  const hero = document.getElementById('hero');
  let mouseGlow = null;

  if (window.innerWidth > 768) {
    mouseGlow = document.createElement('div');
    mouseGlow.className = 'mouse-glow';
    mouseGlow.style.cssText = `
      position: fixed;
      width: 200px;
      height: 200px;
      border-radius: 50%;
      background: radial-gradient(circle, rgba(255, 0, 60, 0.04), transparent 70%);
      pointer-events: none;
      z-index: 9999;
      transform: translate(-50%, -50%);
      transition: opacity 0.3s;
      opacity: 0;
    `;
    document.body.appendChild(mouseGlow);

    let mouseTimeout;

    document.addEventListener('mousemove', (e) => {
      mouseGlow.style.left = e.clientX + 'px';
      mouseGlow.style.top = e.clientY + 'px';
      mouseGlow.style.opacity = '1';
      clearTimeout(mouseTimeout);
      mouseTimeout = setTimeout(() => {
        mouseGlow.style.opacity = '0';
      }, 2000);
    });

    document.addEventListener('mouseleave', () => {
      mouseGlow.style.opacity = '0';
    });
  }

  // ========== PROJECT CARD TILT EFFECT ==========
  const cards = document.querySelectorAll('.project-card');
  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = (y - centerY) / 20;
      const rotateY = (centerX - x) / 20;
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });

  // ========== GLOW LINE TRACKING ON PROJECT CARDS ==========
  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      card.style.setProperty('--mouse-x', x + '%');
      card.style.setProperty('--mouse-y', y + '%');
    });
  });
});
