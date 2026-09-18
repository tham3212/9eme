/* ==========================================================================
   Sitographie — Module de mise à niveau
   - Données (adresse affichée / destination de travail)
   - Rendu des cartes, sans recherche ni filtres
   ========================================================================== */

(function () {
  "use strict";

  /* ---- Pictogramme (SVG inline, aucune dépendance externe) ---- */

  function iconeExterne() {
    return '<svg class="btn-icone" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17 17 7"/><path d="M8 7h9v9"/></svg>';
  }

  /* ==========================================================================
     DONNÉES
     displayUrl : adresse du document d'origine (affichée telle quelle)
     href       : destination de travail vérifiée (possession courante testée)
     ========================================================================== */

  var DONNEES = [
    {
      categorie: "Lecture",
      ressources: [
        {
          titre: "monBestSeller — Jeunesse",
          description: "Romans et livres numériques pour enfants et adolescents, avec de nombreux textes consultables en ligne.",
          displayUrl: "https://www.monbestseller.com/auteur/liste/jeunesse",
          href: "https://www.monbestseller.com/auteur/liste/jeunesse"
        },
        {
          titre: "HelloKids — Lire et apprendre",
          description: "Ressources ludiques pour les enfants : lecture, activités et jeux pour apprendre en s'amusant.",
          displayUrl: "http://fr.hellokids.com/r 644/lire-et-apprendre",
          href: "https://fr.hellokids.com/r_644/lire-et-apprendre"
        },
        {
          titre: "Je Lis Libre (CRDP Strasbourg)",
          description: "Bibliothèque de textes libres de lecture pour les élèves, proposée par le CRDP de Strasbourg.",
          displayUrl: "http://www.crdp-strasbourg.fr/je lis libre/",
          href: "http://www.crdp-strasbourg.fr/je%20lis%20libre/"
        },
        {
          titre: "J'aime lire",
          description: "Le magazine de lecture jeunesse : extras, dossiers et sélections de livres pour les enfants.",
          displayUrl: "https://www.jaimelire.com/",
          href: "https://tout.bayard-jeunesse.com/produit/tout-lunivers-des-magazines/lecture/jaime-lire/"
        },
        {
          titre: "Je Bouquine",
          description: "Le magazine des adolescents passionnés de lecture : romans, bandes dessinées et séries.",
          displayUrl: "www.jebouquine.com",
          href: "https://tout.bayard-jeunesse.com/produit/tout-lunivers-des-magazines/lecture/je-bouquine/"
        },
        {
          titre: "Julie",
          description: "Magazine destiné aux adolescentes, avec des articles, des dossiers et des rubriques de lecture.",
          displayUrl: "https://www.juliemag.com/",
          href: "https://www.juliemag.com/"
        }
      ]
    },
    {
      categorie: "Syntaxe",
      ressources: [
        {
          titre: "Je Révise — Les types de phrases",
          description: "Cours et exercices pour comprendre les différents types de phrases : déclarative, interrogative, exclamative et injonctive.",
          displayUrl: "www.jerevise.fr/types-phrases.html",
          href: "https://www.jerevise.fr/types-phrases.html"
        },
        {
          titre: "CCDMD — La prononciation des allophones",
          description: "Fiche de travail du CCDMD sur la prononciation du français, destinée aux élèves allophones.",
          displayUrl: "https://www.ccdmd.qc.ca/media/allo pron dis 034Allophones.pdf",
          href: "https://ccdmd.qc.ca/media/allo%20pron%20dis%20034Allophones.pdf"
        },
        {
          titre: "CCDMD — Jeux pédagogiques (accords)",
          description: "Jeux pédagogiques du CCDMD pour réviser les accords et la syntaxe de la phrase.",
          displayUrl: "www.ccdmd.qc.ca/fr/jeux pedagogiques/?id=80",
          href: "https://ccdmd.qc.ca/fr/jeux%20pedagogiques/?id=80"
        },
        {
          titre: "CCDMD — Jeux pédagogiques (2e activité)",
          description: "Deuxième jeu pédagogique du CCDMD pour travailler la syntaxe et l'orthographe en s'amusant.",
          displayUrl: "www.ccdmd.qc.ca/fr/jeux pedagogiques/?id=1080&action =animer",
          href: "https://ccdmd.qc.ca/fr/jeux%20pedagogiques/?id=1080&action%20=animer"
        },
        {
          titre: "CCDMD — Exercices interactifs",
          description: "Plateforme de jeux et d'exercices interactifs du CCDMD pour réviser la grammaire et l'orthographe.",
          displayUrl: "www.ccdmd.qc.ca/fr/exercices interactifs/",
          href: "https://ameliofrancais.ccdmd.qc.ca/"
        },
        {
          titre: "CCDMD — Tests de diagnostic",
          description: "Tests de diagnostic en français écrit du CCDMD pour situer et faire le point sur ses acquis.",
          displayUrl: "www.ccdmd.qc.ca/fr/modules/diagnostics/",
          href: "https://ccdmd.qc.ca/fr/modules/diagnostics/"
        },
        {
          titre: "RESTENA — Exercices de syntaxe",
          description: "Page d'exercices de français du réseau éducatif RESTENA : syntaxe, grammaire et orthographe.",
          displayUrl: "http://w3.restena.lu/amifra/exos/index.htm",
          href: "http://w3.restena.lu/amifra/exos/index.htm"
        }
      ]
    },
    {
      categorie: "Conjugaison",
      ressources: [
        {
          titre: "Ortholud — Conjugaison",
          description: "Jeux et exercices de conjugaison classés par temps, pour s'entraîner sur les principaux verbes français.",
          displayUrl: "www.ortholud.com/conjugaison.html",
          href: "https://www.ortholud.com/conjugaison.html"
        },
        {
          titre: "Bescherelle",
          description: "La référence pour revoir la conjugaison, la grammaire et l'orthographe françaises.",
          displayUrl: "http://bescherelle.com/",
          href: "https://www.bescherelle.com/"
        },
        {
          titre: "Logiciel Éducatif — Collège",
          description: "Jeux éducatifs en ligne pour le collège, dont de nombreux exercices de conjugaison française.",
          displayUrl: "www.logicieleducatif.fr/index-college.php#francas",
          href: "https://www.logicieleducatif.fr/jeux/niveau/college"
        },
        {
          titre: "La Conjugaison — Le Nouvel Obs",
          description: "Exercices de conjugaison adaptés à chaque niveau, proposés par le service « La Conjugaison ».",
          displayUrl: "https://la-conjugaison.nouvelobs.com/exercice/conjugaison-0-39.php",
          href: "https://la-conjugaison.nouvelobs.com/exercice/conjugaison-0-39.php"
        },
        {
          titre: "Le Conjugueur — Le Figaro",
          description: "QCM et exercices de conjugaison, classés par temps ou par difficulté, avec corrections.",
          displayUrl: "https://leconjugueur.lefigaro.fr/exercice",
          href: "https://leconjugueur.lefigaro.fr/exercice"
        }
      ]
    },
    {
      categorie: "Orthographe",
      ressources: [
        {
          titre: "RESTENA — Exercices d'orthographe",
          description: "Page d'exercices de français du réseau éducatif RESTENA, utilisée pour l'orthographe et la grammaire.",
          displayUrl: "http://w3.restena.lu/amifra/exos/index.htra",
          href: "http://w3.restena.lu/amifra/exos/index.htm"
        },
        {
          titre: "Ortholud — Orthographe",
          description: "Jeux et exercices d'orthographe (accords, homophones, accents) classés par classe et par difficulté.",
          displayUrl: "https://www.ortholud.com/exercices dorthographe.html",
          href: "https://www.ortholud.com/exercices_d_orthographe.html"
        },
        {
          titre: "La langue française — Exercices d'orthographe",
          description: "Une sélection de trente exercices d'orthographe, du niveau débutant au niveau avancé, avec corrections.",
          displayUrl: "https://www.lalanguefrancaise.com/orthographe/top-30-des-exercices-orthographe/",
          href: "https://www.lalanguefrancaise.com/orthographe/top-30-des-exercices-orthographe/"
        }
      ]
    },
    {
      categorie: "Production écrite",
      ressources: [
        {
          titre: "Petit Caillou — Entraînement à la rédaction",
          description: "Exercices d'entraînement à la rédaction proposés sur le blog pédagogique Petit Caillou.",
          displayUrl: "http://petitcaillou.eklablog.com/exercices-d-entrainement-a-la-redaction-a118535440",
          href: "http://petitcaillou.eklablog.com/exercices-d-entrainement-a-la-redaction-a118535440"
        },
        {
          titre: "Moments d'écriture — Jeux d'écriture",
          description: "Jeux et pistes d'écriture pour déclencher et accompagner la production écrite en classe.",
          displayUrl: "http://momentsdecriture.e-monsite.com/pages/jeux-d-ecriture/",
          href: "http://momentsdecriture.e-monsite.com/pages/jeux-d-ecriture/"
        }
      ]
    },
    {
      categorie: "Médias",
      ressources: [
        {
          titre: "TV5MONDE — Apprendre le français",
          description: "Vidéos, activités et exercices pour apprendre le français et améliorer sa compréhension de la langue.",
          displayUrl: "https://apprendre.tvsmonde.com/",
          href: "https://apprendre.tv5monde.com/"
        },
        {
          titre: "RFI Savoirs",
          description: "Ressources pédagogiques, contenus audio et activités pour apprendre le français et suivre l'actualité francophone.",
          displayUrl: "https://savoirs.rfi.fr/",
          href: "https://francaisfacile.rfi.fr/"
        }
      ]
    }
  ];

  /* ==========================================================================
     RENDU DES CARTES (simple : tout s'affiche, rien à rechercher)
     ========================================================================== */

  function creerCarte(donneesRes) {
    var article = document.createElement("article");
    article.className = "carte";

    var titre = document.createElement("h3");
    titre.className = "carte-titre";
    titre.textContent = donneesRes.titre;

    var description = document.createElement("p");
    description.className = "carte-description";
    description.textContent = donneesRes.description;

    article.appendChild(titre);
    article.appendChild(description);

    var urlBloc = document.createElement("p");
    urlBloc.className = "carte-url";
    var lien = document.createElement("a");
    lien.className = "carte-url-lien";
    lien.href = donneesRes.href;
    lien.target = "_blank";
    lien.rel = "noopener noreferrer";
    lien.textContent = donneesRes.displayUrl;
    urlBloc.appendChild(lien);
    article.appendChild(urlBloc);

    var actions = document.createElement("div");
    actions.className = "carte-actions";

    var bouton = document.createElement("a");
    bouton.className = "btn";
    bouton.href = donneesRes.href;
    bouton.target = "_blank";
    bouton.rel = "noopener noreferrer";
    bouton.textContent = "Visiter le site ";
    bouton.innerHTML += iconeExterne();
    actions.appendChild(bouton);

    article.appendChild(actions);

    return article;
  }

  /* ---- Rendu ---- */

  DONNEES.forEach(function (bloc) {
    var section = Array.prototype.slice.call(document.querySelectorAll(".rubrique")).find(function (s) {
      return s.dataset.categorie === bloc.categorie;
    });
    if (!section) return;
    var grille = section.querySelector(".grille");
    bloc.ressources.forEach(function (res) {
      grille.appendChild(creerCarte(res));
    });
  });

  /* ---- Écran de chargement (3 s) ---- */

  (function () {
    var el = document.getElementById("chargement");
    if (!el) return;
    var duree = 3000;
    if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      duree = 800;
    }
    setTimeout(function () {
      el.classList.add("is-fini");
      setTimeout(function () { if (el.parentNode) el.parentNode.removeChild(el); }, 420);
    }, duree);
  })();
})();