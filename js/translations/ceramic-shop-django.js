export const ceramicShopTranslations = {
  en: {
    "ceramic-shop-django-title": "Ceramic Shop E-Commerce",
    "ceramic-shop-django-subtitle": "QA Showcase — Stripe Payments & Checkout Flow Testing",
    "ceramic-shop-django-summary": "An online ceramic store built to simulate a real production e-commerce system. It includes user accounts, shopping cart functionality, and Stripe payment integration. The main focus of the project is to demonstrate how quality assurance and automated testing can be applied across critical user journeys like checkout and payments.",
    "ceramic-shop-django-the_story": "Most QA portfolios stop at testing forms and login pages. I wanted to test something that actually has stakes: real money moving through a real payment flow. So I built a full ceramic e-commerce store, then treated it like a production app a QA team would be accountable for — writing tests for the boring, easy-to-skip parts (does the cart total update correctly when you change quantity?) and the genuinely hard parts (does the app correctly handle a Stripe webhook that arrives out of order, or fails to arrive at all?). The result is a test suite that doesn't just check that pages load — it checks that money handling is correct under realistic and adversarial conditions.",
    "ceramic-shop-django-role_focus": "I built and maintained the complete QA automation strategy for this application: test environment setup, simulated external payment events, and end-to-end validation of user flows under realistic conditions — including the parts most portfolios skip, like asynchronous Stripe webhook handling.",
    
    "ceramic-shop-django-ach-1": "Reached 100% test coverage across core application logic.",
    "ceramic-shop-django-ach-2": "Built maintainable end-to-end browser tests using Playwright and the Page Object Model.",
    "ceramic-shop-django-ach-3": "Validated Stripe payment flows, including asynchronous webhook processing.",
    "ceramic-shop-django-ach-4": "Performed load testing with Locust, confirming a stable 17ms average response time with no failures.",
    "ceramic-shop-django-ach-5": "Implemented CI quality checks using GitHub Actions and Lefthook to enforce linting and testing before commits.",

    "ceramic-shop-django-test_strategy_table_label": "What I tested — and why it mattered",

    "ceramic-shop-django-tt-1": "Cart & Pricing Logic",
    "ceramic-shop-django-tool-1": "pytest",
    "ceramic-shop-django-wt-1": "Cart totals recalculate correctly when quantity changes, discount codes apply only once, and the order total matches the Stripe charge amount before any request leaves the app.",

    "ceramic-shop-django-tt-2": "Stripe Checkout Session",
    "ceramic-shop-django-tool-2": "pytest + Stripe test keys",
    "ceramic-shop-django-wt-2": "Checkout sessions are created with the right line items and currency. Cancellation mid-flow leaves no orphaned orders in the database.",

    "ceramic-shop-django-tt-3": "Stripe Webhook Handling",
    "ceramic-shop-django-tool-3": "pytest + unittest.mock",
    "ceramic-shop-django-wt-3": "payment_intent.succeeded marks the order as paid. A failed payment leaves the order in 'pending'. An invalid webhook signature is rejected — the handler never trusts the payload without verifying the signature first.",

    "ceramic-shop-django-tt-4": "User Account Flows",
    "ceramic-shop-django-tool-4": "Playwright (Page Object Model)",
    "ceramic-shop-django-wt-4": "A new user can register, browse products, add items to the cart, complete checkout with a Stripe test card, and see the confirmed order in their account history — all in a single automated browser session.",

    "ceramic-shop-django-tt-5": "Critical Page Health",
    "ceramic-shop-django-tool-5": "Playwright",
    "ceramic-shop-django-wt-5": "Smoke tests verify that every critical page loads successfully with no unexpected errors. The suite confirms key user-facing routes remain accessible after each deployment and runs in under 3 seconds on every CI push.",

    "ceramic-shop-django-tt-6": "Backend under load",
    "ceramic-shop-django-tool-6": "Locust",
    "ceramic-shop-django-wt-6": "50 concurrent virtual users browsing and adding to cart for 5 minutes. Confirmed 17ms average response time and 0% failure rate — the Stripe session creation endpoint stayed stable under sustained parallel requests.",

    "ceramic-shop-django-gal-1": "Terminal output showing the full pytest suite passing with 100% coverage",
    "ceramic-shop-django-gal-2": "Coverage.py HTML report showing 100% coverage across all modules",
    "ceramic-shop-django-gal-3": "Locust load test dashboard showing 17ms average response time and 0% failure rate",
    "ceramic-shop-django-gal-4": "Playwright trace viewer showing the automated checkout flow step by step",
    "ceramic-shop-django-hero-alt": "Ceramic Shop E-Commerce Showcase Dashboard",
    "ceramic-shop-django-pytest-alt": "Pytest Test Suite Output Terminal",
    "ceramic-shop-django-coverage-alt": "Coverage.py HTML Report Dashboard",
    "ceramic-shop-django-locust-alt": "Locust Load Test Dashboard Metrics",

    "ceramic-shop-django-what_im_proud_of": "The Stripe webhook tests. It's the part of this project nobody asks about in a portfolio review, but it's the part that would actually break in production if I got it wrong — and that gap between 'looks done' and 'is actually correct' is the whole point of QA."
  },
  fr: {
    "ceramic-shop-django-title": "Boutique de Céramique E-Commerce",
    "ceramic-shop-django-subtitle": "Démonstration QA — Tests des paiements Stripe et du parcours de paiement",
    "ceramic-shop-django-summary": "Une boutique en ligne de céramique conçue pour simuler une application e-commerce réelle. Elle inclut la gestion des comptes utilisateurs, un panier d'achat et l'intégration des paiements Stripe. Le projet met l'accent sur l'assurance qualité et l'automatisation des tests sur les parcours critiques comme le paiement.",
    "ceramic-shop-django-the_story": "La plupart des portfolios QA s'arrêtent aux formulaires et aux pages de connexion. Je voulais tester quelque chose avec de vrais enjeux : de l'argent réel circulant dans un vrai flux de paiement. J'ai donc construit une boutique de céramique complète, puis je l'ai traitée comme une application en production dont une équipe QA serait responsable — en écrivant des tests pour les parties simples (le panier se met-il à jour correctement quand on change la quantité ?) et pour les parties vraiment difficiles (l'application gère-t-elle correctement un webhook Stripe qui arrive dans le désordre, ou qui n'arrive pas du tout ?). Le résultat est une suite de tests qui ne se contente pas de vérifier que les pages se chargent — elle vérifie que la gestion de l'argent est correcte, même dans des conditions réalistes et imprévues.",
    "ceramic-shop-django-role_focus": "J'ai conçu et maintenu la stratégie complète de tests automatisés pour cette application : configuration de l'environnement de test, simulation des événements de paiement externes, et validation de bout en bout des parcours utilisateurs dans des conditions réalistes — y compris les parties que la plupart des portfolios évitent, comme la gestion asynchrone des webhooks Stripe.",
    
    "ceramic-shop-django-ach-1": "Atteint une couverture de tests de 100 % sur les principales fonctionnalités de l'application.",
    "ceramic-shop-django-ach-2": "Création de tests E2E maintenables avec Playwright et le modèle Page Object.",
    "ceramic-shop-django-ach-3": "Validation des flux de paiement Stripe, incluant le traitement des webhooks asynchrones.",
    "ceramic-shop-django-ach-4": "Tests de charge avec Locust confirmant un temps de réponse stable de 17 ms sans échec.",
    "ceramic-shop-django-ach-5": "Mise en place de contrôles qualité via GitHub Actions et Lefthook pour garantir le linting et les tests avant chaque commit.",

    "ceramic-shop-django-test_strategy_table_label": "Ce que j'ai testé — et pourquoi c'était important",

    "ceramic-shop-django-tt-1": "Panier & calcul des prix",
    "ceramic-shop-django-tool-1": "pytest",
    "ceramic-shop-django-wt-1": "Les totaux du panier se recalculent correctement lors du changement de quantité, les codes de réduction ne s'appliquent qu'une seule fois, et le total de la commande correspond exactement au montant envoyé à Stripe avant toute requête externe.",

    "ceramic-shop-django-tt-2": "Session de paiement Stripe",
    "ceramic-shop-django-tool-2": "pytest + clés de test Stripe",
    "ceramic-shop-django-wt-2": "Les sessions de paiement sont créées avec les bons articles et la bonne devise. Une annulation en cours de flux ne laisse aucune commande orpheline en base de données.",

    "ceramic-shop-django-tt-3": "Gestion des webhooks Stripe",
    "ceramic-shop-django-tool-3": "pytest + unittest.mock",
    "ceramic-shop-django-wt-3": "payment_intent.succeeded marque la commande comme payée. Un paiement échoué laisse la commande en état 'en attente'. Une signature de webhook invalide est rejetée — le gestionnaire ne fait jamais confiance à la charge utile sans vérifier la signature au préalable.",

    "ceramic-shop-django-tt-4": "Parcours utilisateur complet",
    "ceramic-shop-django-tool-4": "Playwright (Page Object Model)",
    "ceramic-shop-django-wt-4": "Un nouvel utilisateur peut s'inscrire, parcourir les produits, ajouter des articles au panier, finaliser le paiement avec une carte de test Stripe, et consulter la commande confirmée dans son historique — le tout dans une seule session navigateur automatisée.",

    "ceramic-shop-django-tt-5": "Santé des pages critiques",
    "ceramic-shop-django-tool-5": "Playwright",
    "ceramic-shop-django-wt-5": "Des tests de fumée vérifient que chaque page critique se charge correctement sans erreur inattendue. La suite confirme que les principaux parcours accessibles aux utilisateurs restent disponibles après chaque déploiement et s'exécute en moins de 3 secondes à chaque push CI.",

    "ceramic-shop-django-tt-6": "Backend sous charge",
    "ceramic-shop-django-tool-6": "Locust",
    "ceramic-shop-django-wt-6": "50 utilisateurs virtuels simultanés naviguant et ajoutant au panier pendant 5 minutes. Temps de réponse moyen confirmé à 17 ms et taux d'échec de 0 % — l'endpoint de création de session Stripe est resté stable sous des requêtes parallèles soutenues.",

    "ceramic-shop-django-gal-1": "Sortie terminal montrant la suite pytest complète réussie avec 100 % de couverture",
    "ceramic-shop-django-gal-2": "Rapport HTML Coverage.py montrant 100 % de couverture sur tous les modules",
    "ceramic-shop-django-gal-3": "Tableau de bord Locust montrant un temps de réponse moyen de 17 ms et 0 % d'échec",
    "ceramic-shop-django-gal-4": "Visualiseur de traces Playwright montrant le parcours de paiement automatisé étape par étape",
    "ceramic-shop-django-hero-alt": "Tableau de bord de présentation de Boutique de Céramique E-Commerce",
    "ceramic-shop-django-pytest-alt": "Terminal de sortie de la suite de tests Pytest",
    "ceramic-shop-django-coverage-alt": "Tableau de bord du rapport HTML Coverage.py",
    "ceramic-shop-django-locust-alt": "Métriques du tableau de bord du test de charge Locust",

    "ceramic-shop-django-what_im_proud_of": "Les tests des webhooks Stripe. C'est la partie de ce projet dont personne ne parle dans une relecture de portfolio, mais c'est celle qui casserait réellement en production si je m'étais trompé — et cet écart entre « ça a l'air fini » et « c'est réellement correct » est tout l'enjeu de l'assurance qualité."
  }
};

