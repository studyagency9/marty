/**
 * FITNESS PROGRAM DATA
 * Detailed workout schedule for Martinese's 8-week fitness journey
 */

const WEEK_DAYS = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'];

const WORKOUT_PROGRAM = {
    'Lundi': {
        name: 'Lundi',
        type: 'force',
        duration: 25,
        exercises: [
            { id: 'leg-raises', name: 'Seated Leg Raises', reps: '12-15 reps', tips: 'Garde le dos droit, engage les abdominaux. Respire profondément.' },
            { id: 'knee-lifts', name: 'Knee Lifts with Downward Presses', reps: '12 reps', tips: 'Contrôle le mouvement, respire régulièrement. Monte les genoux haut.' },
            { id: 'elbow-knee', name: 'Elbow to Knee', reps: '10-12 reps/côté', tips: 'Touche le coude au genou opposé, contraction maximale des obliques.' },
            { id: 'step-ups', name: 'Step-ups', reps: '12 reps/jambe', tips: 'Utilise un escalier ou marche stable. Garde l\'équilibre et le dos droit.' },
            { id: 'in-out-crunches', name: 'In and Out Crunches', reps: '12-15 reps', tips: 'Contrôle la descente, ne force pas le cou. Expire en montant.' },
            { id: 'squats', name: 'Step + Clap Between Legs', reps: '12-15 reps', tips: 'Monte sur le step et applaudis entre les jambes. Garde l\'équilibre et le rythme.' },
            { id: 'chest-expansion', name: 'Chest Expansion', reps: '12-15 reps', tips: 'Ouvre les bras sur les côtés en contractant les omoplates. Travaille la poitrine et les épaules.' },
            { id: 'lunges', name: 'Lunges', reps: '4 × 15 reps/jambe', tips: 'Renforce les fesses et les jambes. Descends en gardant le genou à 90°.' }
        ]
    },
    'Mardi': {
        name: 'Mardi',
        type: 'cardio',
        duration: 30,
        exercises: [
            { id: 'glute-bridges', name: 'Glute Bridges', reps: '12-15 reps', tips: 'Contracte les fessiers en montant. Pousse les hanches vers le haut, maintiens 2 secondes.' },
            { id: 'plank', name: 'Plank', reps: '3 × 30s', tips: 'Engage les abdominaux, corps bien aligné. Coudes sous les épaules.' },
            { id: 'leg-raises', name: 'Seated Leg Raises', reps: '12-15 reps', tips: 'Garde le dos droit, engage les abdominaux. Respire profondément.' },
            { id: 'mountain-climbers', name: 'Mountain Climbers', reps: '30s', tips: 'Rythme soutenu, engage le cardio. Alterne les genoux rapidement.' },
            { id: 'in-out-crunches', name: 'In and Out Crunches', reps: '12-15 reps', tips: 'Contrôle la descente, ne force pas le cou. Expire en montant.' },
            { id: 'knee-lifts', name: 'Knee Lifts Cardio', reps: '1 minute', tips: 'Rythme cardio élevé avec les genoux. Monte les genoux haut et rapidement.' },
            { id: 'glute-kickbacks', name: 'Glute Kickbacks', reps: '4 × 10 reps/jambe', tips: 'Cible directement les fessiers. Contracte bien en montant la jambe.' }
        ]
    },
    'Mercredi': {
        name: 'Mercredi',
        type: 'force',
        duration: 25,
        exercises: [
            { id: 'sumo-squats', name: 'Squats Sumo', reps: '12-15 reps', tips: 'Pieds écartés largeur épaules, genoux vers l\'extérieur. Descends profondément.' },
            { id: 'step-ups', name: 'Step-ups', reps: '12 reps/jambe', tips: 'Utilise un escalier ou marche stable. Garde l\'équilibre et le dos droit.' },
            { id: 'leg-raises', name: 'Seated Leg Raises', reps: '12-15 reps', tips: 'Garde le dos droit, engage les abdominaux. Respire profondément.' },
            { id: 'plank', name: 'Plank Avancé', reps: '30s', tips: 'Maintiens la position planche parfaite. Corps aligné, abdominaux engagés, coudes sous les épaules.' },
            { id: 'elbow-knee', name: 'Elbow to Knee', reps: '10-12 reps/côté', tips: 'Touche le coude au genou opposé, contraction maximale des obliques.' },
            { id: 'lift-arms-stepping', name: 'Lift Arms Stepping', reps: '1 minute', tips: 'Lève les bras en marchant sur place. Engage les épaules et le cardio.' },
            { id: 'romanian-deadlift', name: 'Half Romanian Deadlift', reps: '4 × 15 reps', tips: 'Travaille l\'arrière des jambes et les fesses. Garde le dos droit.' }
        ]
    },
    'Jeudi': {
        name: 'Jeudi',
        type: 'rest',
        duration: 15,
        exercises: [
            { id: 'stretching', name: 'Étirements Légers', reps: 'N/A', tips: 'Détends-toi, récupère bien' }
        ]
    },
    'Vendredi': {
        name: 'Vendredi',
        type: 'force',
        duration: 28,
        exercises: [
            { id: 'squats', name: 'Step + Clap Between Legs', reps: '12-15 reps', tips: 'Monte sur le step et applaudis entre les jambes. Garde l\'équilibre et le rythme.' },
            { id: 'glute-bridges', name: 'Glute Bridges', reps: '12-15 reps', tips: 'Contracte les fessiers en montant. Pousse les hanches vers le haut, maintiens 2 secondes.' },
            { id: 'leg-raises', name: 'Seated Leg Raises', reps: '12-15 reps', tips: 'Garde le dos droit, engage les abdominaux. Respire profondément.' },
            { id: 'plank', name: 'Plank', reps: '3 × 30s', tips: 'Engage les abdominaux, corps bien aligné. Coudes sous les épaules.' },
            { id: 'mountain-climbers', name: 'Mountain Climbers', reps: '30s', tips: 'Rythme soutenu, engage le cardio. Alterne les genoux rapidement.' },
            { id: 'in-out-crunches', name: 'In and Out Crunches', reps: '12-15 reps', tips: 'Contrôle la descente, ne force pas le cou. Expire en montant. Termine en force!' },
            { id: 'touch-toes-clap', name: 'Touch Toes and Clap', reps: '12-15 reps', tips: 'Penche-toi pour toucher tes orteils, puis redresse-toi et applaudis. Mouvement dynamique complet.' },
            { id: 'side-to-side-lunges', name: 'Side to Side Lunges', reps: '4 × 10 reps/jambe', tips: 'Travaille les hanches et l\'intérieur des cuisses. Alterne les côtés.' }
        ]
    },
    'Samedi': {
        name: 'Samedi',
        type: 'cardio',
        duration: 30,
        exercises: [
            { id: 'treadmill', name: 'Tapis de Course', reps: '20-30 min', tips: 'Commence lentement, augmente progressivement. Garde un rythme confortable.' },
            { id: 'bike', name: 'Vélo', reps: '20-30 min', tips: 'Cardio complet, brûle les calories. Varie l\'intensité pour de meilleurs résultats.' },
            { id: 'jump-rope', name: 'Corde à Sauter', reps: '10-15 min', tips: 'Excellent pour l\'endurance et la coordination. Fais des pauses si nécessaire.' }
        ]
    },
    'Dimanche': {
        name: 'Dimanche',
        type: 'active-rest',
        duration: 20,
        exercises: [
            { id: 'walking', name: 'Marche', reps: '20-30 min', tips: 'Marche détendue, profite du grand air. Récupération active importante.' },
            { id: 'stretching', name: 'Étirements', reps: '10-15 min', tips: 'Étire tous les groupes musculaires. Récupération complète pour la semaine prochaine.' }
        ]
    }
};

const MOTIVATION_TIPS = [
    '💧 Bois plus d\'eau aujourd\'hui - Hydrate-toi bien pour une meilleure performance',
    '🍎 Évite le grignotage - Tes repas principaux sont suffisants',
    '🥩 Mange plus de protéines - Essentielles pour la récupération musculaire',
    '🚶 Marche 10 minutes après les repas - Aide à la digestion et contrôle le poids',
    '😴 Bien dormir 7-8 heures - La récupération est aussi importante que l\'exercice',
    '💪 Chaque séance te rapproche de ton objectif - 86kg → 75kg, tu y es presque!',
    '✨ Crois en toi - Ton corps est plus fort que tu le penses',
    '🎯 La constance est la clé - Une séance à la fois, tu vas y arriver',
    '🌟 Célèbre tes victoires - Chaque jour de fait est une victoire',
    '⏰ C\'est l\'heure du sport - Lève-toi et donne le meilleur de toi'
];

/**
 * Get today's workout based on current day
 */
function getTodayWorkout() {
    const today = new Date();
    const dayIndex = today.getDay();
    const adjustedIndex = dayIndex === 0 ? 6 : dayIndex - 1; // Convert JS day to our array
    const dayName = WEEK_DAYS[adjustedIndex];
    return WORKOUT_PROGRAM[dayName];
}

/**
 * Get workout by day name
 */
function getWorkoutByDay(dayName) {
    return WORKOUT_PROGRAM[dayName];
}

/**
 * Get all workouts for the week
 */
function getWeeklyProgram() {
    return Object.values(WORKOUT_PROGRAM);
}

/**
 * Get random motivation tip
 */
function getRandomMotivationTip() {
    return MOTIVATION_TIPS[Math.floor(Math.random() * MOTIVATION_TIPS.length)];
}

/**
 * Check if a day is a rest day
 */
function isRestDay(dayName) {
    const workout = WORKOUT_PROGRAM[dayName];
    return workout && (workout.type === 'rest' || workout.type === 'active-rest');
}
