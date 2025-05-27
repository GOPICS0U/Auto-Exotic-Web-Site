/**
 * Auto Exotic - Améliorations mobiles
 * Ce fichier contient les améliorations JavaScript pour l'expérience mobile
 */

document.addEventListener('DOMContentLoaded', function() {
  // Amélioration du menu mobile
  enhanceMobileMenu();
  
  // Amélioration du lazy loading des images
  enhanceImageLazyLoading();
  
  // Amélioration de l'accessibilité
  enhanceAccessibility();
  
  // Amélioration des formulaires
  enhanceForms();
  
  // Amélioration du scroll
  enhanceScroll();
});

/**
 * Améliore le menu mobile
 */
function enhanceMobileMenu() {
  const mobileMenu = document.querySelector('.mobile-menu');
  const navLinks = document.getElementById('navLinks');
  
  if (mobileMenu && navLinks) {
    // Amélioration de l'accessibilité du menu mobile
    mobileMenu.setAttribute('aria-label', 'Menu principal');
    mobileMenu.setAttribute('aria-expanded', 'false');
    mobileMenu.setAttribute('role', 'button');
    mobileMenu.setAttribute('tabindex', '0');
    
    // Gestion du clic sur le menu mobile
    mobileMenu.addEventListener('click', function() {
      toggleMobileMenu();
    });
    
    // Gestion de la touche Entrée sur le menu mobile
    mobileMenu.addEventListener('keydown', function(e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggleMobileMenu();
      }
    });
    
    // Fermeture du menu au clic en dehors
    document.addEventListener('click', function(e) {
      if (navLinks.classList.contains('active') && 
          !mobileMenu.contains(e.target) && 
          !navLinks.contains(e.target)) {
        closeMobileMenu();
      }
    });
    
    // Fermeture du menu au scroll
    window.addEventListener('scroll', function() {
      if (navLinks.classList.contains('active')) {
        closeMobileMenu();
      }
    });
    
    // Gestion de la touche Échap
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && navLinks.classList.contains('active')) {
        closeMobileMenu();
        mobileMenu.focus();
      }
    });
    
    // Amélioration de l'accessibilité des liens du menu
    navLinks.querySelectorAll('a').forEach(function(link, index) {
      // Ajout d'un attribut pour indiquer l'élément actif
      if (window.location.href.includes(link.getAttribute('href'))) {
        link.setAttribute('aria-current', 'page');
        link.classList.add('active');
      }
      
      // Gestion de la touche Tab pour le dernier élément
      if (index === navLinks.querySelectorAll('a').length - 1) {
        link.addEventListener('keydown', function(e) {
          if (e.key === 'Tab' && !e.shiftKey) {
            e.preventDefault();
            mobileMenu.focus();
          }
        });
      }
    });
  }
}

/**
 * Bascule l'état du menu mobile
 */
function toggleMobileMenu() {
  const mobileMenu = document.querySelector('.mobile-menu');
  const navLinks = document.getElementById('navLinks');
  
  navLinks.classList.toggle('active');
  mobileMenu.classList.toggle('active');
  
  const isExpanded = navLinks.classList.contains('active');
  mobileMenu.setAttribute('aria-expanded', isExpanded ? 'true' : 'false');
  document.body.style.overflow = isExpanded ? 'hidden' : 'auto';
  
  if (isExpanded) {
    // Focus sur le premier lien du menu
    setTimeout(() => {
      navLinks.querySelector('a').focus();
    }, 100);
  }
}

/**
 * Ferme le menu mobile
 */
function closeMobileMenu() {
  const mobileMenu = document.querySelector('.mobile-menu');
  const navLinks = document.getElementById('navLinks');
  
  navLinks.classList.remove('active');
  mobileMenu.classList.remove('active');
  mobileMenu.setAttribute('aria-expanded', 'false');
  document.body.style.overflow = 'auto';
}

/**
 * Améliore le lazy loading des images
 */
function enhanceImageLazyLoading() {
  // Polyfill pour le lazy loading sur les navigateurs qui ne le supportent pas
  if (!('loading' in HTMLImageElement.prototype)) {
    document.querySelectorAll('img[loading="lazy"]').forEach(function(img) {
      img.src = img.dataset.src || img.src;
    });
  }
  
  // Ajout de la classe 'loaded' pour le fade-in
  document.querySelectorAll('img[loading="lazy"]').forEach(function(img) {
    if (img.complete) {
      img.classList.add('loaded');
    } else {
      img.addEventListener('load', function() {
        img.classList.add('loaded');
      });
    }
  });
}

/**
 * Améliore l'accessibilité
 */
function enhanceAccessibility() {
  // Ajout d'un skip link si absent
  if (!document.querySelector('.skip-link')) {
    const skipLink = document.createElement('a');
    skipLink.classList.add('skip-link');
    skipLink.href = '#main-content';
    skipLink.textContent = 'Aller au contenu principal';
    document.body.insertBefore(skipLink, document.body.firstChild);
  }
  
  // Gestion du skip link
  const skipLink = document.querySelector('.skip-link');
  if (skipLink) {
    skipLink.addEventListener('click', function(e) {
      e.preventDefault();
      const mainContent = document.getElementById('main-content') || document.querySelector('main');
      if (mainContent) {
        mainContent.setAttribute('tabindex', '-1');
        mainContent.focus();
        // Suppression du tabindex après le focus pour éviter les problèmes de navigation au clavier
        setTimeout(() => {
          mainContent.removeAttribute('tabindex');
        }, 1000);
      }
    });
  }
  
  // Ajout d'un ID au contenu principal si absent
  const mainContent = document.querySelector('main');
  if (mainContent && !mainContent.id) {
    mainContent.id = 'main-content';
  }
  
  // Amélioration des boutons
  document.querySelectorAll('.btn').forEach(function(btn) {
    if (!btn.getAttribute('role') && btn.tagName !== 'BUTTON') {
      btn.setAttribute('role', 'button');
    }
    if (!btn.getAttribute('tabindex') && btn.tagName !== 'BUTTON' && btn.tagName !== 'A') {
      btn.setAttribute('tabindex', '0');
    }
  });
}

/**
 * Améliore les formulaires
 */
function enhanceForms() {
  // Amélioration des champs de formulaire
  document.querySelectorAll('.form-control').forEach(function(input) {
    // Ajout d'un attribut autocomplete si absent
    if (!input.getAttribute('autocomplete') && input.getAttribute('type') !== 'hidden') {
      const inputType = input.getAttribute('type') || input.tagName.toLowerCase();
      const inputName = input.getAttribute('name') || '';
      
      if (inputName.includes('name') || inputType === 'text' && inputName.includes('nom')) {
        input.setAttribute('autocomplete', 'name');
      } else if (inputName.includes('email') || inputType === 'email') {
        input.setAttribute('autocomplete', 'email');
      } else if (inputName.includes('tel') || inputType === 'tel') {
        input.setAttribute('autocomplete', 'tel');
      } else if (inputName.includes('message') || inputType === 'textarea') {
        input.setAttribute('autocomplete', 'off');
      }
    }
    
    // Ajout d'un attribut placeholder si absent
    if (!input.getAttribute('placeholder') && input.getAttribute('type') !== 'hidden') {
      const inputLabel = input.previousElementSibling;
      if (inputLabel && inputLabel.tagName === 'LABEL') {
        input.setAttribute('placeholder', inputLabel.textContent);
      }
    }
  });
  
  // Amélioration des boutons de formulaire
  document.querySelectorAll('form .btn').forEach(function(btn) {
    btn.setAttribute('type', 'submit');
  });
}

/**
 * Améliore le scroll
 */
function enhanceScroll() {
  // Scroll fluide pour les ancres
  document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId !== '#') {
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          e.preventDefault();
          window.scrollTo({
            top: targetElement.offsetTop - 80, // Offset pour le header fixe
            behavior: 'smooth'
          });
        }
      }
    });
  });
  
  // Bouton retour en haut
  const backToTopButton = document.querySelector('.back-to-top');
  if (backToTopButton) {
    window.addEventListener('scroll', function() {
      if (window.pageYOffset > 300) {
        backToTopButton.classList.add('visible');
      } else {
        backToTopButton.classList.remove('visible');
      }
    });
    
    backToTopButton.addEventListener('click', function(e) {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  } else {
    // Création du bouton retour en haut s'il n'existe pas
    const backToTopButton = document.createElement('a');
    backToTopButton.classList.add('back-to-top');
    backToTopButton.href = '#';
    backToTopButton.setAttribute('aria-label', 'Retour en haut de page');
    backToTopButton.innerHTML = '<i class="fas fa-arrow-up"></i>';
    document.body.appendChild(backToTopButton);
    
    window.addEventListener('scroll', function() {
      if (window.pageYOffset > 300) {
        backToTopButton.classList.add('visible');
      } else {
        backToTopButton.classList.remove('visible');
      }
    });
    
    backToTopButton.addEventListener('click', function(e) {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
}