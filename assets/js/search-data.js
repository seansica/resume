// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-research",
          title: "Research",
          description: "Selected publications and ongoing research work.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-resume",
          title: "Resume",
          description: "Professional experience, education, and selected projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-personal",
          title: "Personal",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/personal/";
          },
        },{id: "nav-projects",
          title: "Projects",
          description: "Selected engineering and research projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "news-started-the-master-of-information-and-data-science-program-at-uc-berkeley",
          title: 'Started the Master of Information and Data Science program at UC Berkeley.',
          description: "",
          section: "News",},{id: "news-published-research-on-causal-effects-of-fine-tuning-on-sparse-autoencoder-features-for-datasci-266-nlp-at-uc-berkeley-code",
          title: 'Published research on causal effects of fine-tuning on sparse autoencoder features for DATASCI...',
          description: "",
          section: "News",},{id: "news-enrolled-in-the-bluedot-impact-ai-safety-fundamentals-course-studying-alignment-interpretability-and-governance",
          title: 'Enrolled in the BlueDot Impact AI Safety Fundamentals course, studying alignment, interpretability, and...',
          description: "",
          section: "News",},{id: "projects-mitre-att-amp-ck",
          title: 'MITRE ATT&amp;amp;CK',
          description: "Leading open-source software engineering for the world&#39;s most widely adopted threat intelligence framework",
          section: "Projects",handler: () => {
              window.location.href = "/projects/attack/";
            },},{id: "projects-berkeley-mids",
          title: 'Berkeley MIDS',
          description: "Graduate coursework projects spanning capstone engineering, interpretability research, and RAG system evaluation",
          section: "Projects",handler: () => {
              window.location.href = "/projects/mids/";
            },},{id: "teachings-data-science-fundamentals",
          title: 'Data Science Fundamentals',
          description: "This course covers the foundational aspects of data science, including data collection, cleaning, analysis, and visualization. Students will learn practical skills for working with real-world datasets.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/data-science-fundamentals/";
            },},{id: "teachings-introduction-to-machine-learning",
          title: 'Introduction to Machine Learning',
          description: "This course provides an introduction to machine learning concepts, algorithms, and applications. Students will learn about supervised and unsupervised learning, model evaluation, and practical implementations.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/introduction-to-machine-learning/";
            },},{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
