const translations = {
  es: {
    documentTitle: "Juan Manuel Monteoliva | Investigación en luz natural",
    metaDescription: "Investigación sobre luz natural en arquitectura mediante simulación computacional, mediciones ópticas y análisis de confort, eficiencia y percepción espacial.",
    socialDescription: "Luz natural, simulación computacional, mediciones ópticas y factores humanos en arquitectura.",
    eyebrow: "INVESTIGACIÓN EN LUZ NATURAL · ARQUITECTURA",
    role: "Investigación en luz natural, desempeño ambiental y percepción espacial",
    bio: "Simulación computacional con Radiance, mediciones ópticas y desarrollo de métricas para evaluar confort, eficiencia y experiencia espacial.",
    topicMeasurements: "Mediciones ópticas",
    topicHumanFactors: "Factores humanos",
    academicTitle: "Perfiles académicos",
    professionalTitle: "Red profesional y desarrollo",
    researchgateSubtitle: "Publicaciones y actividad científica",
    zenodoSubtitle: "Datos, software y resultados abiertos",
    linkedinSubtitle: "Experiencia y colaboraciones",
    githubSubtitle: "Código, herramientas y proyectos"
  },
  en: {
    documentTitle: "Juan Manuel Monteoliva | Daylight Research",
    metaDescription: "Research on daylight in architecture through computational simulation, optical measurements, and the assessment of comfort, efficiency, and spatial perception.",
    socialDescription: "Daylight, computational simulation, optical measurements, and human factors in architecture.",
    eyebrow: "DAYLIGHT RESEARCH · ARCHITECTURE",
    role: "Research on daylight, environmental performance, and spatial perception",
    bio: "Computational simulation with Radiance, optical measurements, and the development of metrics to assess comfort, efficiency, and spatial experience.",
    topicMeasurements: "Optical measurements",
    topicHumanFactors: "Human factors",
    academicTitle: "Academic profiles",
    professionalTitle: "Professional network and development",
    researchgateSubtitle: "Publications and scientific activity",
    zenodoSubtitle: "Open data, software, and research outputs",
    linkedinSubtitle: "Experience and collaborations",
    githubSubtitle: "Code, tools, and projects"
  }
};

const languageButtons = document.querySelectorAll(".lang-button");
const translatableElements = document.querySelectorAll("[data-i18n]");

function setMetaContent(selector, content) {
  const element = document.querySelector(selector);
  if (element) element.setAttribute("content", content);
}

function applyLanguage(language) {
  const selectedLanguage = translations[language] ? language : "es";
  const strings = translations[selectedLanguage];

  document.documentElement.lang = selectedLanguage;
  document.title = strings.documentTitle;

  setMetaContent("#meta-description", strings.metaDescription);
  setMetaContent("#og-title", strings.documentTitle);
  setMetaContent("#og-description", strings.socialDescription);
  setMetaContent("#twitter-title", strings.documentTitle);
  setMetaContent("#twitter-description", strings.socialDescription);

  translatableElements.forEach((element) => {
    const key = element.dataset.i18n;
    if (strings[key]) element.textContent = strings[key];
  });

  languageButtons.forEach((button) => {
    const isActive = button.dataset.lang === selectedLanguage;
    button.setAttribute("aria-pressed", String(isActive));
  });

  localStorage.setItem("preferredLanguage", selectedLanguage);
}

languageButtons.forEach((button) => {
  button.addEventListener("click", () => applyLanguage(button.dataset.lang));
});

const savedLanguage = localStorage.getItem("preferredLanguage");
const browserLanguage = navigator.language?.toLowerCase().startsWith("es") ? "es" : "en";
applyLanguage(savedLanguage || browserLanguage);
