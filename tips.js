/**
 * DAILY TIPS FOR MARTINESE
 * Conseils nutritionnels personnalisés et motivants
 */

const DAILY_TIPS = [
    {
        id: 1,
        title: "Mon boss, bois un verre d'eau avant de manger…",
        content: "💡 Ça calme un peu la faim et évite que tu manges tout d'un coup. Ton ventre va me remercier.",
        emoji: "💧"
    },
    {
        id: 2,
        title: "Madame ma femme, commence la journée avec un truc qui te tient au corps",
        content: "💡 Les œufs + banane, ça te donne de l'énergie et ça empêche que tu commences à regarder les vidéos de l'atieke sur tik tok.",
        emoji: "🍳"
    },
    {
        id: 3,
        title: "Petite tête, oublie les trucs comme le Coca et prends de l'eau ou du Foléré",
        content: "💡 Les sodas gonflent le ventre et font dormir les muscles. Le bissap, lui, hydrate et te fait briller. Et puis c'est plus joli sur les photos, tes followers vont apprécier.",
        emoji: "🥤"
    },
    {
        id: 4,
        title: "Madame De Song, mets des légumes dans ton assiette",
        content: "💡 Ça te rassasie et donne des vitamines. Oui, je sais, je t'embête avec ça, mais ton corps va adorer.",
        emoji: "🥗"
    },
    {
        id: 5,
        title: "Chef, choisis des protéines légères le soir",
        content: "💡 Poulet vapeur, poisson grillé ou haricots… ça t'aide à récupérer après le sport et tu dors tranquille sans stocker du gras.",
        emoji: "🍗"
    },
    {
        id: 6,
        title: "Mon boss, évite les grignotages le soir",
        content: "💡 Chin-chin ou plantain frit, je sais que c'est tentant… mais ton ventre et moi préférons que tu résistes 😏.",
        emoji: "🚫"
    },
    {
        id: 7,
        title: "Petite tête, préfère les féculents complets ou moins transformés",
        content: "💡 Riz brun, plantain bouilli, igname… ça te donne de l'énergie durable et évite les fringales en plein boulot.",
        emoji: "🍚"
    },
    {
        id: 8,
        title: "Madame ma femme, mange lentement",
        content: "💡 Savoure chaque bouchée, respire entre deux… ton cerveau comprend que tu es rassasiée avant que ton assiette soit vide. Et moi je te regarde faire 😎.",
        emoji: "🍽️"
    },
    {
        id: 9,
        title: "Madame De Song, ajoute des fruits dans ta journée",
        content: "💡 Mangue, papaye, goyave… ça hydrate et remplace le sucre industriel. Et ça fait joli dans l'assiette, un peu comme toi 😏.",
        emoji: "🥭"
    },
    {
        id: 10,
        title: "Chef, fais attention aux sauces trop grasses",
        content: "💡 Un filet d'huile d'arachide suffit pour le goût. Ton ventre me dira merci, et tes fesses aussi 😜.",
        emoji: "🥄"
    },
    {
        id: 11,
        title: "Mon boss, prépare tes repas à l'avance",
        content: "💡 Comme ça tu n'as pas à réfléchir après une longue journée. Et moi je peux juste regarder 😎, tranquille.",
        emoji: "📦"
    },
    {
        id: 12,
        title: "Petite tête, évite le fast-food plus d'une fois par semaine",
        content: "💡 Les fritures et sauces lourdes stockent le gras au ventre et aux hanches… je préfère te voir toute tonique 😏.",
        emoji: "🍔"
    },
    {
        id: 13,
        title: "Madame ma femme, utilise des assiettes plus petites",
        content: "💡 Ton cerveau pense que c'est beaucoup, mais tu manges moins… malin, non ? 😉",
        emoji: "🍽️"
    },
    {
        id: 14,
        title: "Madame De Song, commence par les légumes dans ton assiette",
        content: "💡 Les fibres remplissent ton ventre et ralentissent la digestion, donc tu manges moins de riz ou d'igname après.",
        emoji: "🥦"
    },
    {
        id: 15,
        title: "Chef, si tu as faim, prends des arachides ou des noix",
        content: "💡 Ça calme la faim avec de bonnes graisses et protéines, sans exploser en sucre. Et ça te garde en forme pour venir me taquiner 😏.",
        emoji: "🥜"
    },
    {
        id: 16,
        title: "Mon boss, commence toujours par t'échauffer",
        content: "💡 Même 3-5 minutes de step léger ou de marche sur place suffisent. Ça prépare tes muscles, évite les blessures et te met dans le rythme. Faut pas que tu te tordes juste parce que t'as envie d'aller vite.",
        emoji: "🔥"
    },
    {
        id: 17,
        title: "Petite tête, fais tes mouvements correctement",
        content: "💡 Mieux vaut 10 squats bien faits que 20 vite et bancals. Chaque contraction compte pour tes fesses et ton ventre. Et moi je rigole moins si tu t'écroules à moitié.",
        emoji: "✅"
    },
    {
        id: 18,
        title: "Madame ma femme, n'oublie pas la corde ou les step-ups",
        content: "💡 Ça travaille les jambes, les fesses et le cardio en même temps. Quelques minutes suffisent pour sentir que ça bosse sans te casser pour le lendemain.",
        emoji: "🪢"
    },
    {
        id: 19,
        title: "Madame De Song, commence avec ton poids",
        content: "💡 Fentes, squats, gainages… pas besoin de charge pour progresser. On fait simple, efficace, sans se ruiner ni se fatiguer inutilement.",
        emoji: "💪"
    },
    {
        id: 20,
        title: "Chef, teste les squats sumo",
        content: "💡 Ils ciblent bien les fesses et l'intérieur des cuisses. Sérieusement, tu vas sentir que ça bosse dès la première série. Et moi, je valide chaque contraction.",
        emoji: "🍑"
    },
    {
        id: 21,
        title: "Mon boss, varie l'ordre des exercices",
        content: "💡 Ton corps s'habitue vite. Change l'ordre, ajoute des variantes… ça brûle plus de calories et ça évite l'ennui.",
        emoji: "🔄"
    },
    {
        id: 22,
        title: "Petite tête, écoute ton corps",
        content: "💡 Si tu es fatiguée après ta longue journée, réduis un peu les répétitions ou le temps de gainage. On reste actifs sans s'épuiser.",
        emoji: "👂"
    },
    {
        id: 23,
        title: "Madame ma femme, augmente doucement les répétitions",
        content: "💡 Ajoute une ou deux reps chaque semaine, ou quelques secondes de plus sur le gainage. Ça construit tes muscles, doucement mais sûrement.",
        emoji: "📈"
    },
    {
        id: 24,
        title: "Madame De Song, fais toujours un retour au calme",
        content: "💡 Étirements et respiration, ça évite les courbatures et ça aide à récupérer pour le lendemain. Oui, même si tu es pressée.",
        emoji: "🧘"
    },
    {
        id: 25,
        title: "Chef, la régularité vaut mieux qu'une séance intense",
        content: "💡 20-30 minutes tous les jours valent mieux qu'une heure intense une fois par semaine. Ton corps préfère la constance.",
        emoji: "📅"
    },
    {
        id: 26,
        title: "Mon boss, teste le gainage latéral",
        content: "💡 Travaille les obliques et ton ventre. Tu vas sentir la différence en quelques semaines, et ça te donne une sangle solide pour tous les autres mouvements.",
        emoji: "⚡"
    },
    {
        id: 27,
        title: "Petite tête, joue avec le tempo",
        content: "💡 Lent pour sentir le muscle, rapide pour le cardio. Varie les rythmes et ton corps ne s'ennuie jamais.",
        emoji: "⏱️"
    },
    {
        id: 28,
        title: "Madame ma femme, serre bien les fessiers à chaque squat ou hip thrust",
        content: "💡 C'est là que la magie opère. Concentre-toi sur la contraction, pas juste sur le nombre de reps.",
        emoji: "✨"
    },
    {
        id: 29,
        title: "Madame De Song, mesure tes progrès autrement que sur la balance",
        content: "💡 Photos, nombre de reps, temps de gainage… La balance peut mentir, ton corps change même si le chiffre ne bouge pas.",
        emoji: "📸"
    },
    {
        id: 30,
        title: "Chef, n'oublie pas les jours de repos actif",
        content: "💡 Une petite marche ou des étirements légers laissent tes muscles récupérer et continuent à brûler un peu de calories.",
        emoji: "🚶"
    },
    {
        id: 31,
        title: "Mon boss, commence tes journées avec un peu de mouvement",
        content: "💡 Même 5 minutes d'étirements ou de marche sur place, ça réveille ton corps et ton métabolisme. Et ça t'évite de venir me chercher pour te réveiller.",
        emoji: "🌅"
    },
    {
        id: 32,
        title: "Petite tête, fixe-toi un objectif chaque semaine",
        content: "💡 Un kilo perdu, 30 secondes de plus en gainage… Note-le. Tu verras tes progrès et moi je valide.",
        emoji: "🎯"
    },
    {
        id: 33,
        title: "Madame ma femme, note tes séances",
        content: "💡 Nombre de squats, temps de corde, reps… Ça te permet de voir où tu en es et de t'améliorer chaque semaine.",
        emoji: "📝"
    },
    {
        id: 34,
        title: "Madame De Song, célèbre les petites victoires",
        content: "💡 Chaque kilo perdu ou chaque série de plus, c'est un pas vers ton objectif. Faut pas sous-estimer le pouvoir de tes progrès.",
        emoji: "🎉"
    },
    {
        id: 35,
        title: "Chef, prépare tes repas à l'avance",
        content: "💡 Rien de compliqué : ignames bouillies, plantains, légumes feuilles… Quand tout est prêt, pas de tentation de fast-food. Ton ventre et moi, on aime ça.",
        emoji: "🍱"
    },
    {
        id: 36,
        title: "Mon boss, écoute ton corps",
        content: "💡 Si tu es fatiguée après une longue journée, fais une séance courte. Tu avances quand même et tu récupères mieux.",
        emoji: "💭"
    },
    {
        id: 37,
        title: "Petite tête, hydrate-toi régulièrement",
        content: "💡 Même sans soif. L'eau aide à brûler les graisses, à récupérer après le sport et à éviter les crampes.",
        emoji: "💦"
    },
    {
        id: 38,
        title: "Madame ma femme, fais un peu de cardio tous les jours",
        content: "💡 Step, corde ou marches rapides. Juste assez pour activer le cœur et brûler un peu de calories.",
        emoji: "❤️"
    },
    {
        id: 39,
        title: "Madame De Song, consomme assez de protéines locales",
        content: "💡 Poulet, poisson, haricots… Pour nourrir les muscles et garder tes fesses fermes en perdant du ventre.",
        emoji: "🐟"
    },
    {
        id: 40,
        title: "Chef, varie tes légumes",
        content: "💡 Feuilles de manioc, okra, carottes… Chaque couleur apporte vitamines et fibres. Ton ventre te dira merci.",
        emoji: "🌈"
    },
    {
        id: 41,
        title: "Mon boss, mange sans distraction",
        content: "💡 Télé, téléphone… concentre-toi sur ton repas. Tu digères mieux et tu manges juste ce qu'il faut.",
        emoji: "📵"
    },
    {
        id: 42,
        title: "Petite tête, privilégie les féculents complets ou moins transformés",
        content: "💡 Riz brun, plantain bouilli, igname… Plus d'énergie durable et moins de fringales.",
        emoji: "🌾"
    },
    {
        id: 43,
        title: "Madame ma femme, limite les sauces grasses",
        content: "💡 Une petite cuillère d'huile d'arachide ou coco suffit pour le goût et ton ventre reste plat.",
        emoji: "🥥"
    },
    {
        id: 44,
        title: "Madame De Song, prends une collation saine si tu as faim",
        content: "💡 Arachides, noix… ça tient jusqu'au repas sans provoquer de pic de sucre ou gonfler ton ventre.",
        emoji: "🌰"
    },
    {
        id: 45,
        title: "Chef, dors suffisamment",
        content: "💡 7-8h par nuit. Le sommeil aide à brûler les graisses et à récupérer après le sport.",
        emoji: "😴"
    },
    {
        id: 46,
        title: "Mon boss, respire profondément chaque soir",
        content: "💡 Ça réduit le stress et le cortisol, qui favorise le ventre plat. Et ça te calme pour mieux dormir.",
        emoji: "🌙"
    },
    {
        id: 47,
        title: "Petite tête, respecte tes jours de repos",
        content: "💡 Les muscles se construisent pendant le repos. Pas de repos = risque de blessure et moins de résultats.",
        emoji: "🛌"
    },
    {
        id: 48,
        title: "Madame ma femme, bouge un peu au bureau",
        content: "💡 Même 5 minutes de marche ou lever les jambes toutes les heures, ça active le métabolisme et limite le gras.",
        emoji: "🏢"
    },
    {
        id: 49,
        title: "Madame De Song, planifie tes repas de la semaine",
        content: "💡 Préparer à l'avance évite de céder à la facilité des snacks gras ou sucrés après le travail.",
        emoji: "📋"
    },
    {
        id: 50,
        title: "Chef, garde ton assiette colorée",
        content: "💡 Plus de couleurs = plus de nutriments et plus de satiété. Et puis c'est joli à regarder.",
        emoji: "🎨"
    },
    {
        id: 51,
        title: "Mon boss, bouge avant de t'asseoir devant la télé",
        content: "💡 Même 5 minutes de marche ou step avant, ça brûle des calories et active ton métabolisme.",
        emoji: "📺"
    },
    {
        id: 52,
        title: "Petite tête, fais des mini-circuits si tu es pressée",
        content: "💡 10-15 minutes suffisent pour travailler fesses, ventre et jambes. Mieux que rien.",
        emoji: "⚡"
    },
    {
        id: 53,
        title: "Madame ma femme, reste positive pendant le sport",
        content: "💡 Même si ça pique un peu, penser que tu avances te donne de l'énergie et diminue le stress.",
        emoji: "😊"
    },
    {
        id: 54,
        title: "Madame De Song, écoute ton ressenti",
        content: "💡 Si un exercice te fait mal, adapte-le. Sécurité avant tout, sinon je vais râler.",
        emoji: "⚠️"
    },
    {
        id: 55,
        title: "Chef, varie les exercices",
        content: "💡 Change l'ordre ou teste des variantes. Ton corps ne s'habitue pas et tu brûles plus.",
        emoji: "🔀"
    },
    {
        id: 56,
        title: "Mon boss, fais des séances courtes mais régulières",
        content: "💡 20-30 minutes chaque jour valent mieux qu'une séance longue mais rare.",
        emoji: "⏰"
    },
    {
        id: 57,
        title: "Petite tête, hydrate-toi pendant le sport",
        content: "💡 L'eau maintient ton énergie, évite les crampes et aide à éliminer les déchets.",
        emoji: "🚰"
    },
    {
        id: 58,
        title: "Madame ma femme, note ton ressenti après chaque séance",
        content: "💡 Savoir ce que tu aimes ou pas permet d'améliorer les séances et rester motivée.",
        emoji: "✍️"
    },
    {
        id: 59,
        title: "Madame De Song, sois fière de chaque effort",
        content: "💡 Chaque squat, step ou gainage compte. Tu construis ton corps et ta discipline.",
        emoji: "💎"
    },
    {
        id: 60,
        title: "Chef, reste constante sur les 2 mois",
        content: "💡 Les transformations viennent avec la régularité. Chaque jour compte, et je suis là pour te rappeler que tu gères.",
        emoji: "🏆"
    }
];

/**
 * Get a random daily tip
 */
function getRandomTip() {
    const randomIndex = Math.floor(Math.random() * DAILY_TIPS.length);
    return DAILY_TIPS[randomIndex];
}

/**
 * Get tip of the day (based on date to keep same tip for the day)
 */
function getTipOfTheDay() {
    const today = new Date();
    const dayOfYear = Math.floor((today - new Date(today.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);
    const tipIndex = dayOfYear % DAILY_TIPS.length;
    return DAILY_TIPS[tipIndex];
}

/**
 * Get tip by ID
 */
function getTipById(id) {
    return DAILY_TIPS.find(tip => tip.id === id);
}
