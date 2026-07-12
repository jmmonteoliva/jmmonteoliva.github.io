(function () {
  "use strict";

  var translations = {
    es: {
      documentTitle: "Juan Manuel Monteoliva | Luz natural y tecnologías emergentes",
      metaDescription: "Investigador del CONICET y profesor en FAD-UNCUYO. Luz natural, simulación computacional, I+D y factores humanos aplicados al ambiente construido.",
      socialDescription: "Investigación en luz natural, tecnologías emergentes, simulación computacional y factores humanos.",
      languageSelector: "Seleccionar idioma",
      avatarAlt: "Retrato de Juan Manuel Monteoliva",
      eyebrow: "LUZ NATURAL · SIMULACIÓN · FACTORES HUMANOS",
      rolesLabel: "Cargos profesionales",
      roleResearcher: "Investigador del CONICET",
      roleProfessor: "Profesor de Propiedad Intelectual en FAD-UNCUYO",
      bio: "Investigo cómo la luz natural y las tecnologías emergentes pueden mejorar el confort, la eficiencia y la experiencia de las personas en el ambiente construido. Combino simulación computacional, I+D y estudios de factores humanos.",
      primaryActionsLabel: "Acciones principales",
      viewProfile: "Ver perfil profesional",
      contactMe: "Contactarme",
      professionalTitle: "Perfil profesional",
      emailTitle: "Correo profesional",
      academicTitle: "Perfiles académicos",
      developmentsTitle: "Desarrollos",
      codeTitle: "Código y recursos",
      communicationTitle: "Divulgación y contenido"
    },
    en: {
      documentTitle: "Juan Manuel Monteoliva | Daylight and Emerging Technologies",
      metaDescription: "CONICET researcher and professor at FAD-UNCUYO. Daylight, computational simulation, R&D, and human factors for the built environment.",
      socialDescription: "Research in daylight, emerging technologies, computational simulation, and human factors.",
      languageSelector: "Select language",
      avatarAlt: "Portrait of Juan Manuel Monteoliva",
      eyebrow: "DAYLIGHT · SIMULATION · HUMAN FACTORS",
      rolesLabel: "Professional roles",
      roleResearcher: "CONICET Researcher",
      roleProfessor: "Professor of Intellectual Property at FAD-UNCUYO",
      bio: "I study how daylight and emerging technologies can improve comfort, efficiency, and people's experience of the built environment. I combine computational simulation, R&D, and human-factors research.",
      primaryActionsLabel: "Primary actions",
      viewProfile: "View professional profile",
      contactMe: "Contact me",
      professionalTitle: "Professional profile",
      emailTitle: "Professional email",
      academicTitle: "Academic profiles",
      developmentsTitle: "Developments",
      codeTitle: "Code and resources",
      communicationTitle: "Outreach and content"
    }
  };

  function setMetaContent(selector, content) {
    var element = document.querySelector(selector);
    if (element) {
      element.setAttribute("content", content);
    }
  }

  function updateText(strings) {
    var textElements = document.querySelectorAll("[data-i18n]");
    var ariaElements = document.querySelectorAll("[data-i18n-aria-label]");
    var altElements = document.querySelectorAll("[data-i18n-alt]");

    Array.prototype.forEach.call(textElements, function (element) {
      var key = element.getAttribute("data-i18n");
      if (strings[key]) {
        element.textContent = strings[key];
      }
    });

    Array.prototype.forEach.call(ariaElements, function (element) {
      var key = element.getAttribute("data-i18n-aria-label");
      if (strings[key]) {
        element.setAttribute("aria-label", strings[key]);
      }
    });

    Array.prototype.forEach.call(altElements, function (element) {
      var key = element.getAttribute("data-i18n-alt");
      if (strings[key]) {
        element.setAttribute("alt", strings[key]);
      }
    });
  }

  function setLanguage(language) {
    var selectedLanguage = translations[language] ? language : "es";
    var strings = translations[selectedLanguage];
    var buttons = document.querySelectorAll(".lang-button");

    document.documentElement.lang = selectedLanguage;
    document.title = strings.documentTitle;

    setMetaContent("#meta-description", strings.metaDescription);
    setMetaContent("#og-title", strings.documentTitle);
    setMetaContent("#og-description", strings.socialDescription);
    setMetaContent("#twitter-title", strings.documentTitle);
    setMetaContent("#twitter-description", strings.socialDescription);
    updateText(strings);

    Array.prototype.forEach.call(buttons, function (button) {
      button.setAttribute(
        "aria-pressed",
        button.getAttribute("data-lang") === selectedLanguage ? "true" : "false"
      );
    });

    try {
      window.localStorage.setItem("preferredLanguage", selectedLanguage);
    } catch (error) {
      /* Embedded browsers may restrict localStorage. */
    }
  }

  function getInitialLanguage() {
    try {
      var savedLanguage = window.localStorage.getItem("preferredLanguage");
      if (translations[savedLanguage]) {
        return savedLanguage;
      }
    } catch (error) {
      /* Continue with browser language. */
    }

    if (window.navigator.language && window.navigator.language.toLowerCase().indexOf("es") !== 0) {
      return "en";
    }

    return "es";
  }

  document.addEventListener("DOMContentLoaded", function () {
    var buttons = document.querySelectorAll(".lang-button");

    Array.prototype.forEach.call(buttons, function (button) {
      button.addEventListener("click", function () {
        setLanguage(button.getAttribute("data-lang"));
      });
    });

    setLanguage(getInitialLanguage());
  });
}());
