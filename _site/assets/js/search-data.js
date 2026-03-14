// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "Side projects and explorations in data science, web development, and more.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "Gavin Qu&#39;s Curriculum Vitae.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "post-pca-like-a-croissant-that-flattens-over-time",
        
          title: "PCA - Like a Croissant that Flattens Over Time",
        
        description: "A mini-blog explaining Principal Component Analysis using a croissant analogy, covering eigenvalues, dimensionality reduction, and applications in demand estimation.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/pca-miniblog/";
          
        },
      },{id: "post-specialists-vs-generalists-in-the-age-of-hyperspecialization",
        
          title: "Specialists vs. Generalists in the Age of Hyperspecialization",
        
        description: "A Thanksgiving reflection on comparative advantage, the division of labor, and hyperspecialization, illustrated by a botanist turned EA game developer and Adam Smith&#39;s pin factory.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/hyperspecialization/";
          
        },
      },{id: "post-the-economics-and-data-science-of-online-dating",
        
          title: "The Economics and Data Science of Online Dating",
        
        description: "A book review of Paul Oyer&#39;s Economics of Online Dating, exploring search theory, costly signaling, network externalities, statistical discrimination, and bargaining in modern romance.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/economics-online-dating/";
          
        },
      },{id: "post-from-medical-charts-to-economic-markets",
        
          title: "From Medical Charts to Economic Markets",
        
        description: "Using K-means clustering on UKHLS health data to identify three distinct health trajectory types and their impact on labor market outcomes, gender disparities, and educational attainment.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/from-medical-charts/";
          
        },
      },{id: "post-why-i-chose-to-study-in-the-uk",
        
          title: "Why I Chose to Study in the UK",
        
        description: "A personal account of choosing to study economics at the University of Essex in the UK, comparing European and US graduate programs, and reflecting on a year abroad.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/uk-year-in-review/";
          
        },
      },{id: "post-first-attempt-at-economic-research",
        
          title: "First Attempt at Economic Research",
        
        description: "A first attempt at economic research using propensity score matching to study the causal effect of marital status on earnings using the UKHLS dataset.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/data-cleaning/";
          
        },
      },{id: "post-my-first-blog-post",
        
          title: "My First Blog Post",
        
        description: "A first blog post about the learning pyramid and the journey of learning Machine Learning from theory to application, including recommended books and resources.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/first-blog-post/";
          
        },
      },{id: "projects-health-trajectories-research",
          title: 'Health Trajectories Research',
          description: "K-means clustering of health trajectories using UKHLS panel data",
          section: "Projects",handler: () => {
              window.location.href = "/projects/health_trajectories/";
            },},{id: "projects-personal-portfolio-site",
          title: 'Personal Portfolio Site',
          description: "Academic portfolio and blog built with Jekyll and al-folio",
          section: "Projects",handler: () => {
              window.location.href = "/projects/portfolio_site/";
            },},{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/GJQu", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/gavinqu", "_blank");
        },
      },{
        id: 'social-x',
        title: 'X',
        section: 'Socials',
        handler: () => {
          window.open("https://twitter.com/GavinJQu", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
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
