/**
 * EXERCISES DATA WITH EMOJIS AND TIPS
 * Simple emoji-based demonstrations since we're 100% client-side
 */

const EXERCISE_GIFS = {
    'leg-raises': 'Exercices/sitted leg raise.gif',
    'knee-lifts': 'Exercices/knee lift.gif',
    'elbow-knee': 'Exercices/elbow knee alternative.gif',
    'step-ups': 'Exercices/step-on-the stud.gif',
    'in-out-crunches': 'Exercices/in & out crunches.gif',
    'squats': 'Exercices/stool -steps.gif',
    'glute-bridges': 'Exercices/glut bridges.gif',
    'plank': 'Exercices/plank.gif',
    'side-leg-raises': 'Exercices/side leg-raise.gif',
    'mountain-climbers': 'Exercices/moutain climbers.gif',
    'step-touch': 'Exercices/step-on-the stud.gif',
    'sumo-squats': 'Exercices/sumo-squat.gif',
    'plank-alternating': 'Exercices/cheest-expanded.gif',
    'lift-arms-stepping': 'Exercices/Lift your arm and steps.gif',
    'treadmill': 'https://media.giphy.com/media/xT9IgG50Fbat7K2tF2/giphy.gif',
    'bike': 'https://media.giphy.com/media/3o7TKU5J2r3q6K8G9a/giphy.gif',
    'jump-rope': 'https://media.giphy.com/media/3o7TKU1bZ2B8b1g2y8/giphy.gif',
    'walking': 'https://media.giphy.com/media/3o7abKhOpuFTNw4tBi/giphy.gif',
    'stretching': 'https://media.giphy.com/media/3o7abKhOpuFTNw4tBi/giphy.gif',
    'lunges': 'Exercices/lunges.gif',
    'glute-kickbacks': 'Exercices/Glute kickbacks.gif',
    'romanian-deadlift': 'Exercices/romanian-lift.gif',
    'side-to-side-lunges': 'Exercices/side to side lunge.gif',
    'chest-expansion': 'Exercices/cheest-expanded.gif',
    'touch-toes-clap': 'Exercices/touch toes and clap.gif'
};

const EXERCISE_EMOJIS = {
    'leg-raises': '🦵✨',
    'knee-lifts': '⬆️💪',
    'elbow-knee': '💪🔄',
    'step-ups': '🪜⬆️',
    'in-out-crunches': '🤸‍♀️',
    'squats': '🏋️‍♀️',
    'glute-bridges': '🍑💪',
    'plank': '🧘‍♀️',
    'side-leg-raises': '🦵↔️',
    'mountain-climbers': '🏔️🏃‍♀️',
    'step-touch': '👣💃',
    'sumo-squats': '🏋️‍♀️',
    'plank-alternating': '🧘‍♀️🔄',
    'lift-arms-stepping': '🙌💃',
    'treadmill': '🏃‍♀️',
    'bike': '🚴‍♀️',
    'jump-rope': '🪢',
    'walking': '🚶‍♀️',
    'stretching': '🧘‍♀️✨',
    'lunges': '🦵🔥',
    'glute-kickbacks': '🍑⚡',
    'romanian-deadlift': '💪🏋️',
    'side-to-side-lunges': '↔️🦵',
    'chest-expansion': '💪✨',
    'touch-toes-clap': '🦶👏'
};

const DETAILED_EXERCISES = {
    'leg-raises': {
        name: 'Seated Leg Raises',
        reps: '12-15',
        tips: 'Assieds-toi droit sur une chaise, soulève les jambes lentement jusqu\'à la hauteur des hanches. Maintiens 1 seconde, puis abaisse. Engage tes abdominaux.',
        emoji: '🦵'
    },
    'knee-lifts': {
        name: 'Knee Lifts with Downward Presses',
        reps: '12',
        tips: 'Debout ou assis, lève les genoux vers la poitrine avec force, puis appuie vers le bas. Mouvement contrôlé et puissant.',
        emoji: '⬆️'
    },
    'elbow-knee': {
        name: 'Elbow to Knee',
        reps: '10-12 chaque côté',
        tips: 'À genoux, mets les mains derrière la tête. Lève le genou et touche le coude. Alterne les côtés. Contraction maximale.',
        emoji: '💪'
    },
    'step-ups': {
        name: 'Step-ups',
        reps: '12 par jambe',
        tips: 'Utilise un escalier ou un banc stable. Marche vers le haut, alterne les jambes. Utilise le poids du corps ou ajoute des haltères.',
        emoji: '🪜'
    },
    'in-out-crunches': {
        name: 'In and Out Crunches',
        reps: '12-15',
        tips: 'Allongée sur le dos, jambes tendues. Crunch en ramenant les genoux à la poitrine. Crunch et extension. Respire correctement.',
        emoji: '🤸'
    },
    'squats': {
        name: 'Squats',
        reps: '12-15',
        tips: 'Pieds écartés à la largeur des épaules. Descends lentement comme si tu t\'asseyais. Talons au sol, genoux alignés avec les chevilles.',
        emoji: '🦵'
    },
    'glute-bridges': {
        name: 'Glute Bridges',
        reps: '12-15',
        tips: 'Allongée sur le dos, genoux pliés, pieds au sol. Pousse les hanches vers le haut. Contracte les fessiers au maximum. Abaisse lentement.',
        emoji: '🍑'
    },
    'plank': {
        name: 'Plank',
        reps: '3 × 30s',
        tips: 'Position de pompe. Maintiens le corps droit. Engage abdominaux, fessiers et épaules. Respire régulièrement. Pas de baisse des hanches.',
        emoji: '📊'
    },
    'side-leg-raises': {
        name: 'Side Leg Raises',
        reps: '12-15',
        tips: 'Couche-toi sur le côté. Lève la jambe du haut lentement. Maintiens 1 seconde. Abaisse. Pas de balancement. Deux séries par côté.',
        emoji: '↔️'
    },
    'mountain-climbers': {
        name: 'Mountain Climbers',
        reps: '30s',
        tips: 'Position de pompe. Lève les genoux alternativement vers la poitrine rapidement. Rythme soutenu. Bonne cardio! Respire régulièrement.',
        emoji: '🏔️'
    },
    'step-touch': {
        name: 'Step Touch Cardio',
        reps: '1 minute',
        tips: 'Debout, alterne les pas latéraux. Ajoute des mouvements de bras. Augmente l\'intensité progressivement. Bon cardio!',
        emoji: '👣'
    },
    'sumo-squats': {
        name: 'Squats Sumo',
        reps: '12-15',
        tips: 'Pieds écartés plus large que la largeur des épaules. Pointes vers l\'extérieur. Descends en gardant le dos droit. Renforce les adducteurs.',
        emoji: '🦵'
    },
    'plank-alternating': {
        name: 'Plank Genoux Alternés',
        reps: '30s',
        tips: 'Position de plank. Lève un genou vers la poitrine, puis l\'autre. Mouvement alternant. Engage les abdominaux à fond.',
        emoji: '📊'
    },
    'lift-arms-stepping': {
        name: 'Lift Arms Stepping',
        reps: '1 minute',
        tips: 'Debout, marche sur place. Alterne les bras en les levant vers le haut. Mouvement dynamique. Engage les épaules et le cardio.',
        emoji: '🙌'
    },
    'treadmill': {
        name: 'Tapis de Course',
        reps: '20-30 min',
        tips: 'Commence lentement. Augmente la vitesse progressivement. Tu peux aussi augmenter l\'inclinaison. Bon échauffement cardio!',
        emoji: '🏃'
    },
    'bike': {
        name: 'Vélo',
        reps: '20-30 min',
        tips: 'Ajuste la selle à la bonne hauteur. Maintiens un rythme régulier. Augmente la résistance au fil du temps. Excellent cardio!',
        emoji: '🚴'
    },
    'jump-rope': {
        name: 'Corde à Sauter',
        reps: '10-15 min',
        tips: 'Saute à rythme régulier. Commence lentement et augmente. Utilise tes poignets, pas tes bras. Excellent cardio explosif!',
        emoji: '🪢'
    },
    'walking': {
        name: 'Marche',
        reps: '20-30 min',
        tips: 'Marche détendue mais active. Profite de la nature ou écoute la musique. C\'est ta journée de repos actif. Récupère bien!',
        emoji: '🚶'
    },
    'stretching': {
        name: 'Étirements',
        reps: '15-20 min',
        tips: 'Étire chaque groupe musculaire. Jambes, dos, bras, poitrine. Maintiens 20-30 secondes. Respire profondément. Pas de douleur!',
        emoji: '🧘'
    },
    'lunges': {
        name: 'Lunges',
        reps: '4 × 15 / jambe',
        tips: 'Fais un grand pas en avant, descends jusqu\'à ce que le genou arrière touche presque le sol. Garde le genou avant à 90°. Renforce les fesses et les jambes.',
        emoji: '🦵'
    },
    'glute-kickbacks': {
        name: 'Glute Kickbacks',
        reps: '4 × 10 / jambe',
        tips: 'À quatre pattes, lève une jambe vers l\'arrière en contractant les fessiers. Maintiens 1 seconde en haut. Cible directement les fessiers.',
        emoji: '🍑'
    },
    'romanian-deadlift': {
        name: 'Half Romanian Deadlift',
        reps: '4 × 15',
        tips: 'Debout, jambes légèrement fléchies, penche-toi en avant en gardant le dos droit. Descends jusqu\'à mi-hauteur. Travaille l\'arrière des jambes et les fesses.',
        emoji: '💪'
    },
    'side-to-side-lunges': {
        name: 'Side to Side Lunges',
        reps: '4 × 10 / jambe',
        tips: 'Fais un grand pas sur le côté, plie le genou de la jambe qui bouge. Alterne gauche-droite. Travaille les hanches et l\'intérieur des cuisses.',
        emoji: '↔️'
    },
    'chest-expansion': {
        name: 'Chest Expansion',
        reps: '12-15 reps',
        tips: 'Debout, bras tendus devant toi. Ouvre les bras sur les côtés en contractant les omoplates. Reviens lentement. Travaille la poitrine et les épaules.',
        emoji: '💪'
    },
    'touch-toes-clap': {
        name: 'Touch Toes and Clap',
        reps: '12-15 reps',
        tips: 'Penche-toi pour toucher tes orteils, puis redresse-toi et applaudis au-dessus de ta tête. Mouvement dynamique qui étire et engage tout le corps.',
        emoji: '🦶'
    }
};

/**
 * Get exercise by ID
 */
function getExerciseById(id) {
    return DETAILED_EXERCISES[id] || null;
}

/**
 * Get exercise emoji
 */
function getExerciseEmoji(id) {
    return EXERCISE_EMOJIS[id] || '💪';
}

/**
 * Get exercise GIF path
 */
function getExerciseGif(id) {
    return EXERCISE_GIFS[id] || null;
}

/**
 * Format exercise for display
 */
function formatExerciseDisplay(exercise) {
    const details = DETAILED_EXERCISES[exercise.id];
    if (!details) return exercise;

    return {
        ...exercise,
        emoji: getExerciseEmoji(exercise.id),
        gif: getExerciseGif(exercise.id),
        fullTips: details.tips
    };
}

/**
 * Get all exercises
 */
function getAllExercises() {
    return Object.keys(DETAILED_EXERCISES).map(id => ({
        id,
        ...DETAILED_EXERCISES[id]
    }));
}
