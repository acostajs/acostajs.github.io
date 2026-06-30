export const customKeyboardTranslations = {
  en: {
    "custom-keyboard-collective-title": "Custom Keyboard Collective",
    "custom-keyboard-collective-subtitle": "QA Showcase — Django E-Commerce Testing & Automation",
    "custom-keyboard-collective-summary": "An e-commerce application built to simulate a production-ready online store for custom mechanical keyboards. The project focuses on demonstrating modern QA practices through automated testing, continuous integration, performance validation, and reliable end-to-end user workflows.",
    "custom-keyboard-collective-the_story": "Rather than treating an online store as a simple CRUD application, I approached it as a production system where every purchase, account update, and checkout flow had to behave consistently. The goal was to build a QA showcase that demonstrates how automated testing can validate both the underlying business logic and the complete customer experience—from browsing products to completing an order—while ensuring every change can be deployed with confidence.",
    "custom-keyboard-collective-role_focus": "I designed and maintained the complete QA automation strategy for this application, covering business logic validation, API verification, browser automation, smoke testing, performance testing, continuous integration, and code quality enforcement.",
    
    "custom-keyboard-collective-ach-1": "Achieved 99% automated test coverage across the application's core functionality.",
    "custom-keyboard-collective-ach-2": "Built maintainable end-to-end browser tests using Playwright and the Page Object Model.",
    "custom-keyboard-collective-ach-3": "Validated API endpoints, business workflows, and user journeys through layered automated testing.",
    "custom-keyboard-collective-ach-4": "Performed load testing with Locust, confirming a stable 41ms average response time with no failures.",
    "custom-keyboard-collective-ach-5": "Implemented GitHub Actions, Ruff, and Lefthook to automatically enforce testing and code quality on every commit.",

    "custom-keyboard-collective-test_strategy_table_label": "What I tested — and why it mattered",

    "custom-keyboard-collective-tt-1": "Business Logic",
    "custom-keyboard-collective-tool-1": "pytest",
    "custom-keyboard-collective-wt-1": "Product inventory, pricing calculations, shopping cart behavior, form validation, and database models to ensure business rules remain correct under different scenarios.",

    "custom-keyboard-collective-tt-2": "API Validation",
    "custom-keyboard-collective-tool-2": "pytest + Requests",
    "custom-keyboard-collective-wt-2": "REST endpoints, authentication, request validation, and response consistency to verify reliable communication between the frontend and backend.",

    "custom-keyboard-collective-tt-3": "End-to-End User Flows",
    "custom-keyboard-collective-tool-3": "Playwright (Page Object Model)",
    "custom-keyboard-collective-wt-3": "Complete customer journeys including account creation, product browsing, cart management, and checkout through a real browser session.",

    "custom-keyboard-collective-tt-4": "Critical Page Health",
    "custom-keyboard-collective-tool-4": "Playwright",
    "custom-keyboard-collective-wt-4": "Smoke tests verify that the application's critical pages load successfully and remain accessible after every deployment, providing fast feedback during CI.",

    "custom-keyboard-collective-tt-5": "Backend under load",
    "custom-keyboard-collective-tool-5": "Locust",
    "custom-keyboard-collective-wt-5": "Concurrent virtual users browsing products and interacting with the store while measuring response times, stability, and failure rates under sustained load.",

    "custom-keyboard-collective-gal-1": "Terminal output showing the complete pytest suite passing with 99% coverage",
    "custom-keyboard-collective-gal-2": "Coverage.py HTML report showing 99% coverage",
    "custom-keyboard-collective-gal-3": "Locust dashboard showing a 41ms average response time and 0% failures",
    "custom-keyboard-collective-gal-4": "Playwright trace viewer showing an automated shopping and checkout journey",

    "custom-keyboard-collective-what_im_proud_of": "Building a layered testing strategy instead of relying only on end-to-end tests. Each layer validates a different part of the application, making failures easier to diagnose while keeping the test suite fast, reliable, and maintainable."
  },
  fr: {
    "custom-keyboard-collective-title": "Custom Keyboard Collective",
    "custom-keyboard-collective-subtitle": "Démonstration QA — Tests et automatisation d'une application e-commerce Django",
    "custom-keyboard-collective-summary": "Une application e-commerce conçue pour simuler une boutique en ligne prête pour la production spécialisée dans les claviers mécaniques personnalisés. Le projet met l'accent sur les pratiques modernes d'assurance qualité grâce aux tests automatisés, à l'intégration continue, aux tests de performance et à la validation complète des parcours utilisateurs.",
    "custom-keyboard-collective-the_story": "Plutôt que de considérer une boutique en ligne comme une simple application CRUD, je l'ai abordée comme un système de production où chaque achat, chaque mise à jour de compte et chaque parcours de paiement doivent fonctionner de manière fiable. L'objectif était de créer un projet démontrant comment une stratégie QA automatisée peut valider à la fois la logique métier et l'expérience utilisateur complète, du catalogue jusqu'à la commande finale.",
    "custom-keyboard-collective-role_focus": "J'ai conçu et maintenu la stratégie complète d'automatisation QA pour cette application : validation de la logique métier, vérification des API, automatisation navigateur, tests de fumée, tests de performance, intégration continue et contrôles de qualité du code.",
    
    "custom-keyboard-collective-ach-1": "Atteint 99 % de couverture des tests automatisés sur les fonctionnalités principales.",
    "custom-keyboard-collective-ach-2": "Création de tests end-to-end maintenables avec Playwright et le modèle Page Object.",
    "custom-keyboard-collective-ach-3": "Validation des API, de la logique métier et des parcours utilisateurs grâce à une stratégie de tests multicouche.",
    "custom-keyboard-collective-ach-4": "Réalisation de tests de charge avec Locust confirmant un temps de réponse stable de 41 ms sans échec.",
    "custom-keyboard-collective-ach-5": "Mise en place de GitHub Actions, Ruff et Lefthook afin d'appliquer automatiquement les tests et les contrôles qualité à chaque commit.",

    "custom-keyboard-collective-test_strategy_table_label": "Ce que j'ai testé — et pourquoi c'était important",

    "custom-keyboard-collective-tt-1": "Logique métier",
    "custom-keyboard-collective-tool-1": "pytest",
    "custom-keyboard-collective-wt-1": "L'inventaire des produits, les calculs de prix, le fonctionnement du panier, la validation des formulaires et les modèles de données afin de garantir le respect des règles métier.",

    "custom-keyboard-collective-tt-2": "Validation API",
    "custom-keyboard-collective-tool-2": "pytest + Requests",
    "custom-keyboard-collective-wt-2": "Les endpoints REST, l'authentification, la validation des requêtes et la cohérence des réponses afin de garantir une communication fiable entre le frontend et le backend.",

    "custom-keyboard-collective-tt-3": "Parcours utilisateur complet",
    "custom-keyboard-collective-tool-3": "Playwright (Page Object Model)",
    "custom-keyboard-collective-wt-3": "Des parcours complets incluant la création de compte, la navigation dans le catalogue, la gestion du panier et le processus d'achat dans un navigateur réel.",

    "custom-keyboard-collective-tt-4": "Santé des pages critiques",
    "custom-keyboard-collective-tool-4": "Playwright",
    "custom-keyboard-collective-wt-4": "Des tests de fumée vérifient que les pages critiques de l'application se chargent correctement et restent accessibles après chaque déploiement, offrant un retour rapide pendant l'intégration continue.",

    "custom-keyboard-collective-tt-5": "Backend sous charge",
    "custom-keyboard-collective-tool-5": "Locust",
    "custom-keyboard-collective-wt-5": "Des utilisateurs virtuels simultanés naviguant sur la boutique et interagissant avec l'application afin de mesurer le temps de réponse, la stabilité et le taux d'échec sous charge.",

    "custom-keyboard-collective-gal-1": "Sortie terminal montrant la suite pytest complète réussie avec 99 % de couverture",
    "custom-keyboard-collective-gal-2": "Rapport HTML Coverage.py montrant 99 % de couverture",
    "custom-keyboard-collective-gal-3": "Tableau de bord Locust montrant un temps de réponse moyen de 41 ms et 0 % d'échec",
    "custom-keyboard-collective-gal-4": "Visualiseur de traces Playwright montrant un parcours d'achat automatisé",

    "custom-keyboard-collective-what_im_proud_of": "La mise en place d'une stratégie de tests multicouche plutôt que de dépendre uniquement des tests end-to-end. Chaque niveau valide une partie différente de l'application, ce qui facilite le diagnostic des erreurs tout en gardant une suite de tests rapide, fiable et facile à maintenir."
  }
};
