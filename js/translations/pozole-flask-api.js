export const pozoleTranslations = {
  en: {
    "pozole-flask-api-title": "Pozole",
    "pozole-flask-api-subtitle": "QA Showcase — Flask REST API Testing & Validation",
    "pozole-flask-api-summary": "A REST API built to manage employee schedules and shift assignments for a restaurant workflow system. The project demonstrates how automated testing can validate business rules, API reliability, database integrity, and backend performance in a production-style Flask application.",
    "pozole-flask-api-the_story": "Restaurant scheduling sounds simple until dozens of employees, overlapping shifts, and scheduling rules begin interacting. Instead of focusing only on CRUD operations, I treated the API as a production backend where incorrect data could create operational problems. The objective was to build a testing strategy that verifies business rules, protects database integrity, and ensures every endpoint behaves consistently as the application evolves.",
    "pozole-flask-api-role_focus": "I designed and maintained the complete QA strategy for the API, covering business logic validation, database integrity, automated endpoint testing, smoke testing, performance testing, continuous integration, and code quality enforcement.",
    
    "pozole-flask-api-ach-1": "Achieved 99% automated test coverage across the API's core backend functionality.",
    "pozole-flask-api-ach-2": "Validated CRUD operations, scheduling rules, and database constraints through automated testing.",
    "pozole-flask-api-ach-3": "Performed load testing with Locust, confirming a stable 4ms average response time with no failures.",
    "pozole-flask-api-ach-4": "Integrated CI pipelines using GitHub Actions to enforce automated testing on every push.",
    "pozole-flask-api-ach-5": "Configured Ruff and Lefthook to enforce consistent code quality before every commit.",

    "pozole-flask-api-test_strategy_table_label": "What I tested — and why it mattered",

    "pozole-flask-api-tt-1": "Business Logic",
    "pozole-flask-api-tool-1": "pytest",
    "pozole-flask-api-wt-1": "Scheduling rules, employee assignments, validation logic, serialization, and database models to ensure business rules remain consistent under different scenarios.",

    "pozole-flask-api-tt-2": "API Validation",
    "pozole-flask-api-tool-2": "pytest + Requests",
    "pozole-flask-api-wt-2": "REST endpoints, CRUD operations, HTTP status codes, request validation, and response payloads to verify reliable API behavior.",

    "pozole-flask-api-tt-3": "Critical API Health",
    "pozole-flask-api-tool-3": "pytest",
    "pozole-flask-api-wt-3": "Smoke tests verify that the API starts successfully, core endpoints respond correctly, and critical services remain operational after every deployment.",

    "pozole-flask-api-tt-4": "Backend under load",
    "pozole-flask-api-tool-4": "Locust",
    "pozole-flask-api-wt-4": "Concurrent clients perform scheduling operations while measuring response time, stability, and failure rate under sustained traffic.",

    "pozole-flask-api-gal-1": "Terminal output showing the full pytest suite passing with 99% coverage",
    "pozole-flask-api-gal-2": "Coverage.py HTML report showing 99% code coverage",
    "pozole-flask-api-gal-3": "Locust dashboard showing a 4ms average response time with no failures",
    "pozole-flask-api-gal-4": "API test execution validating restaurant scheduling endpoints",
    "pozole-flask-api-hero-alt": "Pozole REST API Showcase Dashboard",
    "pozole-flask-api-pytest-alt": "Pytest Test Suite Output Terminal",
    "pozole-flask-api-coverage-alt": "Coverage.py HTML Report Dashboard",
    "pozole-flask-api-locust-alt": "Locust Load Test Dashboard Metrics",

    "pozole-flask-api-what_im_proud_of": "Designing tests around the scheduling rules instead of only the API endpoints. Validating business logic independently makes the suite faster, easier to maintain, and more effective at catching regressions before they reach production."
  },
  fr: {
    "pozole-flask-api-title": "Pozole",
    "pozole-flask-api-subtitle": "Démonstration QA — Tests et validation d'une API REST Flask",
    "pozole-flask-api-summary": "Une API REST conçue pour gérer les horaires des employés et l'attribution des quarts de travail dans un système de restauration. Le projet démontre comment les tests automatisés permettent de valider les règles métier, la fiabilité des API, l'intégrité des données et les performances d'un backend Flask proche d'un environnement de production.",
    "pozole-flask-api-the_story": "La planification des employés paraît simple jusqu'à ce que des dizaines d'employés, des quarts qui se chevauchent et des règles métier complexes interagissent. Plutôt que de me limiter aux opérations CRUD, j'ai traité cette API comme un véritable backend de production où une erreur de données pourrait avoir un impact opérationnel. L'objectif était de construire une stratégie QA capable de protéger la logique métier, l'intégrité de la base de données et la fiabilité des endpoints au fil des évolutions de l'application.",
    "pozole-flask-api-role_focus": "J'ai conçu et maintenu la stratégie complète d'automatisation QA de cette API : validation de la logique métier, contrôle de l'intégrité des données, tests automatisés des endpoints, tests de fumée, tests de performance, intégration continue et contrôles de qualité du code.",
    
    "pozole-flask-api-ach-1": "Atteint 99 % de couverture des tests automatisés sur les principales fonctionnalités du backend.",
    "pozole-flask-api-ach-2": "Validation des opérations CRUD, des règles de planification et des contraintes de base de données grâce aux tests automatisés.",
    "pozole-flask-api-ach-3": "Réalisation de tests de charge avec Locust confirmant un temps de réponse stable de 4 ms sans échec.",
    "pozole-flask-api-ach-4": "Mise en place de GitHub Actions afin d'exécuter automatiquement les tests et les contrôles qualité à chaque push.",
    "pozole-flask-api-ach-5": "Configuration de Ruff et Lefthook pour appliquer automatiquement les règles de qualité avant chaque commit.",

    "pozole-flask-api-test_strategy_table_label": "Ce que j'ai testé — et pourquoi c'était important",

    "pozole-flask-api-tt-1": "Logique métier",
    "pozole-flask-api-tool-1": "pytest",
    "pozole-flask-api-wt-1": "Les règles de planification, l'attribution des employés, la validation des données, la sérialisation et les modèles afin de garantir le respect des règles métier.",

    "pozole-flask-api-tt-2": "Validation API",
    "pozole-flask-api-tool-2": "pytest + Requests",
    "pozole-flask-api-wt-2": "Les endpoints REST, les opérations CRUD, les codes de réponse HTTP, la validation des requêtes et les réponses de l'API afin de garantir un comportement fiable.",

    "pozole-flask-api-tt-3": "Santé des services critiques",
    "pozole-flask-api-tool-3": "pytest",
    "pozole-flask-api-wt-3": "Des tests de fumée vérifient que l'API démarre correctement, que les endpoints essentiels répondent comme prévu et que les services critiques restent disponibles après chaque déploiement.",

    "pozole-flask-api-tt-4": "Backend sous charge",
    "pozole-flask-api-tool-4": "Locust",
    "pozole-flask-api-wt-4": "Des clients virtuels exécutent simultanément des opérations de planification afin de mesurer le temps de réponse, la stabilité et le taux d'échec sous une charge soutenue.",

    "pozole-flask-api-gal-1": "Sortie terminal montrant la suite pytest complète réussie avec 99 % de couverture",
    "pozole-flask-api-gal-2": "Rapport HTML Coverage.py montrant 99 % de couverture du code",
    "pozole-flask-api-gal-3": "Tableau de bord Locust montrant un temps de réponse moyen de 4 ms sans échec",
    "pozole-flask-api-gal-4": "Exécution des tests API validant les endpoints de planification du restaurant",
    "pozole-flask-api-hero-alt": "Tableau de bord de démonstration de l'API REST Pozole",
    "pozole-flask-api-pytest-alt": "Terminal de sortie de la suite de tests Pytest",
    "pozole-flask-api-coverage-alt": "Tableau de bord du rapport HTML Coverage.py",
    "pozole-flask-api-locust-alt": "Métriques du tableau de bord des tests de charge Locust",

    "pozole-flask-api-what_im_proud_of": "Avoir construit les tests au-dessus des règles de planification plutôt que seulement autour des endpoints. Valider la logique métier indépendamment rend la suite plus rapide, plus facile à maintenir et plus efficace pour détecter les régressions avant la mise en production."
  }
};

