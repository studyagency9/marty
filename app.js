/**
 * MAIN APPLICATION LOGIC
 * Complete fitness app for Martinese
 */

// SPLASH SCREEN
window.addEventListener('DOMContentLoaded', () => {
    const splashScreen = document.getElementById('splashScreen');
    
    setTimeout(() => {
        splashScreen.classList.remove('active');
        setTimeout(() => {
            splashScreen.style.display = 'none';
            // Show daily tip after splash screen
            showDailyTip();
        }, 500);
    }, 2500);
});

// APP STATE
const appState = {
    currentScreen: 'homeScreen',
    currentWorkout: null,
    currentExerciseIndex: 0,
    timerRunning: false,
    timerSeconds: 30,
    timerPhase: 'work', // 'work' or 'rest'
    completedSessions: [],
    streak: 0
};

// DOM REFERENCES - Will be initialized after DOM is ready
let screens = {};
let navItems = [];
let elements = {};

/**
 * INITIALIZATION
 */
function initializeApp() {
    console.log('[v0] Fitness app initialized for Martinese');
    
    // Initialize DOM references
    screens = {
        home: document.getElementById('homeScreen'),
        workout: document.getElementById('workoutScreen'),
        activeWorkout: document.getElementById('activeWorkoutScreen'),
        exercise: document.getElementById('exerciseScreen'),
        motivation: document.getElementById('motivationScreen'),
        rest: document.getElementById('restDayScreen'),
        cardio: document.getElementById('cardioScreen'),
        stats: document.getElementById('statsScreen')
    };
    
    navItems = document.querySelectorAll('.nav-item');
    
    elements = {
        appElement: document.getElementById('app'),
        mainContent: document.getElementById('mainContent'),
        streakDays: document.getElementById('streakDays'),
        sessionsCompleted: document.getElementById('sessionsCompleted'),
        todayWorkoutCard: document.getElementById('todayWorkoutCard'),
        startSessionBtn: document.getElementById('startSessionBtn'),
        weeklyCards: document.getElementById('weeklyCards'),
        sessionTitle: document.getElementById('sessionTitle'),
        sessionExercisesCount: document.getElementById('sessionExercisesCount'),
        exercisesListContainer: document.getElementById('exercisesListContainer'),
        startCircuitBtn: document.getElementById('startCircuitBtn'),
        exerciseName: document.getElementById('exerciseName'),
        repsCount: document.getElementById('repsCount'),
        demoImage: document.getElementById('demoImage'),
        demoGif: document.getElementById('demoGif'),
        postureAdvice: document.getElementById('postureAdvice'),
        nextExerciseBtn: document.getElementById('nextExerciseBtn'),
        motivationText: document.getElementById('motivationText'),
        nextTipBtn: document.getElementById('nextTipBtn'),
        butterflyContainer: document.getElementById('butterflyContainer'),
        timerValue: document.getElementById('timerValue'),
        timerLabel: document.getElementById('timerLabel'),
        timerStartBtn: document.getElementById('timerStartBtn'),
        timerPauseBtn: document.getElementById('timerPauseBtn'),
        timerSection: document.getElementById('timerSection'),
        notificationBtn: document.getElementById('notificationBtn')
    };
    
    console.log('[DEBUG] startSessionBtn:', elements.startSessionBtn);
    
    loadDataFromLocalStorage();
    createButterflyDecorations();
    setupEventListeners();
    updateHomeScreen();
    registerServiceWorker();
    setupNotifications();
}

/**
 * SERVICE WORKER REGISTRATION
 */
function registerServiceWorker() {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('service-worker.js')
            .then(reg => console.log('[v0] Service Worker registered'))
            .catch(err => console.log('[v0] Service Worker registration failed'));
    }
}

/**
 * LOCAL STORAGE
 */
function loadDataFromLocalStorage() {
    const stored = localStorage.getItem('martinese-fitness-data');
    if (stored) {
        try {
            const data = JSON.parse(stored);
            appState.completedSessions = data.completedSessions || [];
            appState.streak = data.streak || 0;
        } catch (e) {
            console.log('[v0] Error loading data from localStorage');
        }
    }
    updateStreak();
}

function saveDataToLocalStorage() {
    const data = {
        completedSessions: appState.completedSessions,
        streak: appState.streak,
        lastUpdated: new Date().toISOString()
    };
    localStorage.setItem('martinese-fitness-data', JSON.stringify(data));
}

function exportData() {
    const data = {
        completedSessions: appState.completedSessions,
        streak: appState.streak,
        exportDate: new Date().toISOString()
    };
    const dataStr = JSON.stringify(data, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `fitness-data-${new Date().toISOString().split('T')[0]}.json`;
    link.click();
    URL.revokeObjectURL(url);
}

function clearAllData() {
    if (confirm('Es-tu sûr de vouloir réinitialiser toutes les données?')) {
        appState.completedSessions = [];
        appState.streak = 0;
        localStorage.removeItem('martinese-fitness-data');
        location.reload();
    }
}

/**
 * SCREEN NAVIGATION
 */
function showScreen(screenName) {
    console.log('[DEBUG] showScreen appelé avec:', screenName);
    
    // Remove active from all screens
    Object.values(screens).forEach(screen => {
        if (screen) screen.classList.remove('active');
    });
    
    // Map screen names to actual screen objects
    const screenMap = {
        'home': screens.home,
        'homeScreen': screens.home,
        'workout': screens.workout,
        'workoutScreen': screens.workout,
        'activeWorkout': screens.activeWorkout,
        'activeWorkoutScreen': screens.activeWorkout,
        'stats': screens.stats,
        'statsScreen': screens.stats,
        'exercise': screens.exercise,
        'exerciseScreen': screens.exercise,
        'motivation': screens.motivation,
        'motivationScreen': screens.motivation,
        'rest': screens.rest,
        'restDayScreen': screens.rest,
        'cardio': screens.cardio,
        'cardioScreen': screens.cardio
    };
    
    const screen = screenMap[screenName] || screens.home;
    console.log('[DEBUG] Écran trouvé:', screen);
    
    if (screen) {
        screen.classList.add('active');
        appState.currentScreen = screenName;
        window.scrollTo(0, 0);
        console.log('[DEBUG] Classe active ajoutée à l\'écran');
        
        // Update content when switching screens
        if (screenName === 'workoutScreen') {
            console.log('[DEBUG] Appel de loadWorkoutScreen');
            loadWorkoutScreen();
        } else if (screenName === 'statsScreen') {
            updateStatsScreen();
        }
    }
}

function setupEventListeners() {
    // Bottom Navigation
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            const screenName = item.dataset.screen;
            showScreen(screenName);
            updateBottomNav(screenName);
        });
    });

    // Navigation buttons
    const backButtons = document.querySelectorAll('.btn-back');
    backButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            showScreen('homeScreen');
            updateBottomNav('homeScreen');
        });
    });

    // Home screen
    elements.startSessionBtn?.addEventListener('click', () => {
        console.log('[DEBUG] Bouton Commencer cliqué');
        startTodaySession();
    });
    
    // Daily tip button
    const viewDailyTipBtn = document.getElementById('viewDailyTipBtn');
    if (viewDailyTipBtn) {
        viewDailyTipBtn.addEventListener('click', showDailyTipModal);
    }
    
    const closeDailyTipBtn = document.getElementById('closeDailyTipBtn');
    if (closeDailyTipBtn) {
        closeDailyTipBtn.addEventListener('click', closeDailyTipModal);
    }
    
    // Start active workout
    const startActiveWorkoutBtn = document.getElementById('startActiveWorkoutBtn');
    if (startActiveWorkoutBtn) {
        startActiveWorkoutBtn.addEventListener('click', startActiveWorkout);
    }
    
    // Active workout controls
    const pauseActiveWorkoutBtn = document.getElementById('pauseActiveWorkoutBtn');
    if (pauseActiveWorkoutBtn) {
        pauseActiveWorkoutBtn.addEventListener('click', toggleActiveWorkoutPause);
    }
    
    const skipActiveExerciseBtn = document.getElementById('skipActiveExerciseBtn');
    if (skipActiveExerciseBtn) {
        skipActiveExerciseBtn.addEventListener('click', skipToNextExercise);
    }
    
    const skipRestBtn = document.getElementById('skipRestBtn');
    if (skipRestBtn) {
        skipRestBtn.addEventListener('click', skipRestPeriod);
    }
    
    const exitWorkoutBtn = document.getElementById('exitWorkoutBtn');
    if (exitWorkoutBtn) {
        exitWorkoutBtn.addEventListener('click', exitActiveWorkout);
    }

    // Workout screen
    elements.startCircuitBtn?.addEventListener('click', startCircuit);

    // Exercise screen
    elements.nextExerciseBtn?.addEventListener('click', nextExercise);

    // Timer controls
    elements.timerStartBtn?.addEventListener('click', toggleTimer);
    elements.timerPauseBtn?.addEventListener('click', toggleTimer);

    // Motivation screen
    elements.nextTipBtn?.addEventListener('click', updateMotivationTip);
    elements.notificationBtn?.addEventListener('click', showRandomNotification);

    // Rest day
    document.getElementById('markRestDoneBtn')?.addEventListener('click', markRestDayDone);
    
    // Cardio
    document.getElementById('markCardioBtn')?.addEventListener('click', markCardioDone);
    const cardioBtns = document.querySelectorAll('.cardio-btn');
    cardioBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            btn.textContent = '✓ Fait';
            btn.disabled = true;
        });
    });

    // Settings
    document.getElementById('exportDataBtn')?.addEventListener('click', exportData);
    document.getElementById('clearDataBtn')?.addEventListener('click', clearAllData);
    
    // Daily Tip
    document.getElementById('closeDailyTipBtn')?.addEventListener('click', closeDailyTip);
}

function updateBottomNav(screenName) {
    navItems.forEach(item => {
        if (item.dataset.screen === screenName) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
}

function markRestDayDone() {
    const today = new Date().toISOString().split('T')[0];
    if (!appState.completedSessions.includes(today)) {
        appState.completedSessions.push(today);
        updateStreak();
        saveDataToLocalStorage();
        showCelebration();
    }
}

function markCardioDone() {
    const today = new Date().toISOString().split('T')[0];
    if (!appState.completedSessions.includes(today)) {
        appState.completedSessions.push(today);
        updateStreak();
        saveDataToLocalStorage();
        showCelebration();
    }
}

/**
 * HOME SCREEN
 */
function updateHomeScreen() {
    const today = getTodayWorkout();
    
    if (today) {
        const todayWorkoutName = document.getElementById('todayWorkoutName');
        const todayExercisesCount = document.getElementById('todayExercisesCount');
        
        if (todayWorkoutName) {
            todayWorkoutName.textContent = today.name;
        }
        if (todayExercisesCount) {
            todayExercisesCount.textContent = `${today.exercises.length} exercices`;
        }
    }

    // Update progress stats
    updateProgressStats();
    
    // Create weekly schedule cards
    createWeeklySchedule();
    
    // Update stats screen
    updateStatsScreen();
}

function updateProgressStats() {
    const today = new Date();
    const sessionsThisWeek = appState.completedSessions.filter(date => {
        const sessionDate = new Date(date);
        const diff = today - sessionDate;
        return diff < 7 * 24 * 60 * 60 * 1000;
    }).length;

    // Update home screen stats
    const streakValue = document.getElementById('streakValue');
    const sessionsValue = document.getElementById('sessionsValue');
    
    if (streakValue) streakValue.textContent = appState.streak;
    if (sessionsValue) sessionsValue.textContent = sessionsThisWeek;
}

function updateStatsScreen() {
    // Update stats screen values
    const statsStreakValue = document.getElementById('statsStreakValue');
    const statsSessionsValue = document.getElementById('statsSessionsValue');
    const statsTotalTime = document.getElementById('statsTotalTime');
    const statsWeeksCount = document.getElementById('statsWeeksCount');
    
    if (statsStreakValue) statsStreakValue.textContent = appState.streak;
    if (statsSessionsValue) statsSessionsValue.textContent = appState.completedSessions.length;
    if (statsTotalTime) {
        const totalMinutes = appState.completedSessions.length * 25;
        statsTotalTime.textContent = totalMinutes;
    }
    if (statsWeeksCount) {
        const weeks = Math.ceil(appState.completedSessions.length / 5);
        statsWeeksCount.textContent = weeks;
    }
}

/**
 * WORKOUT SCREEN
 */
function loadWorkoutScreen() {
    const today = getTodayWorkout();
    
    if (!today) return;
    
    // Update title and progress
    const sessionTitle = document.getElementById('sessionTitle');
    const sessionProgressText = document.getElementById('sessionProgressText');
    const exercisesListContainer = document.getElementById('exercisesListContainer');
    
    if (sessionTitle) {
        sessionTitle.textContent = today.name;
    }
    
    if (sessionProgressText) {
        sessionProgressText.textContent = `${today.exercises.length} exercices`;
    }
    
    // Create exercise list with full details
    if (exercisesListContainer) {
        exercisesListContainer.innerHTML = '';
        
        today.exercises.forEach((exercise, index) => {
            const exerciseCard = document.createElement('div');
            exerciseCard.className = 'exercise-item';
            
            const emoji = getExerciseEmoji(exercise.id);
            const exerciseDetails = getExerciseById(exercise.id);
            const description = exerciseDetails ? exerciseDetails.tips : exercise.tips || 'Exercice de renforcement musculaire.';
            
            exerciseCard.innerHTML = `
                <div style="display: flex; align-items: flex-start; gap: 1rem; width: 100%;">
                    <div style="background: linear-gradient(135deg, var(--primary-600), var(--primary-800)); color: white; width: 40px; height: 40px; border-radius: 12px; display: flex; align-items: center; justify-content: center; font-weight: bold; flex-shrink: 0;">${index + 1}</div>
                    <div style="flex: 1;">
                        <div class="exercise-name" style="font-size: 1.125rem; font-weight: 600; margin-bottom: 0.5rem;">${exercise.name}</div>
                        <div style="display: flex; gap: 0.75rem; margin-bottom: 0.75rem;">
                            <span style="background: var(--primary-50); color: var(--primary-700); padding: 0.25rem 0.75rem; border-radius: 8px; font-size: 0.875rem; font-weight: 600;">🔁 ${exercise.reps}</span>
                            <span style="background: var(--primary-50); color: var(--primary-700); padding: 0.25rem 0.75rem; border-radius: 8px; font-size: 0.875rem; font-weight: 600;">⏱️ ~45 sec</span>
                        </div>
                        <div style="color: var(--gray-600); font-size: 0.9375rem; line-height: 1.6;">${description}</div>
                    </div>
                </div>
            `;
            
            exerciseCard.addEventListener('click', () => {
                appState.currentWorkout = today;
                appState.currentExerciseIndex = index;
                showExerciseDetails(exercise);
            });
            
            exercisesListContainer.appendChild(exerciseCard);
        });
    }
}

function createWeeklySchedule() {
    const container = elements.weeklyCards;
    container.innerHTML = '';
    const program = getWeeklyProgram();

    program.forEach(day => {
        const card = document.createElement('div');
        card.className = 'day-card';
        
        const isCompleted = appState.completedSessions.includes(new Date().toISOString().split('T')[0]);
        const isRest = isRestDay(day.name);
        const isToday = new Date().toLocaleDateString('fr-FR', { weekday: 'long' }).includes(day.name.toLowerCase());
        
        if (isRest) card.classList.add('rest');
        if (isCompleted) card.classList.add('completed');
        if (isToday) card.classList.add('today');
        
        card.innerHTML = `
            <div class="day-name">${day.name.substring(0, 3)}</div>
            <div class="day-status">${isCompleted ? '✓' : (isRest ? '💤' : '•')}</div>
        `;
        
        card.addEventListener('click', () => {
            appState.currentWorkout = day;
            showWorkoutSession(day);
        });
        
        container.appendChild(card);
    });
}

/**
 * WORKOUT SESSION
 */
function startTodaySession() {
    console.log('[DEBUG] startTodaySession appelé');
    const today = getTodayWorkout();
    console.log('[DEBUG] Workout du jour:', today);
    if (today) {
        appState.currentWorkout = today;
        showWorkoutSession(today);
    } else {
        console.error('[ERROR] Aucun workout trouvé pour aujourd\'hui');
    }
}

function showWorkoutSession(workout) {
    console.log('[DEBUG] showWorkoutSession appelé avec:', workout);
    
    if (isRestDay(workout.name)) {
        console.log('[DEBUG] Jour de repos détecté');
        showScreen('rest');
        return;
    }
    
    if (workout.type === 'cardio') {
        console.log('[DEBUG] Séance cardio détectée');
        showScreen('cardio');
        return;
    }

    console.log('[DEBUG] Séance normale, chargement de l\'écran workout');
    appState.currentExerciseIndex = 0;
    loadWorkoutScreen();
    showScreen('workout');
    updateBottomNav('workoutScreen');
}

function createExercisesList(workout) {
    const container = elements.exercisesListContainer;
    container.innerHTML = '';

    workout.exercises.forEach((exercise, index) => {
        const item = document.createElement('div');
        item.className = 'exercise-item';
        item.innerHTML = `
            <div style="flex: 1;">
                <div class="exercise-name">${exercise.name}</div>
                <div class="exercise-reps">${exercise.reps}</div>
            </div>
            <button class="exercise-action">Voir</button>
        `;

        item.querySelector('.exercise-action').addEventListener('click', () => {
            appState.currentExerciseIndex = index;
            showExerciseDetails(exercise);
        });

        container.appendChild(item);
    });
}

/**
 * EXERCISE DETAILS
 */
function showExerciseDetails(exercise) {
    const emoji = getExerciseEmoji(exercise.id);
    const gifPath = getExerciseGif(exercise.id);
    
    elements.exerciseName.textContent = exercise.name;
    elements.repsCount.textContent = exercise.reps;
    
    // Show demo with emoji first
    elements.demoImage.classList.remove('visible');
    elements.demoGif.textContent = emoji;
    elements.demoGif.style.display = 'flex';
    elements.demoGif.style.alignItems = 'center';
    elements.demoGif.style.justifyContent = 'center';
    elements.demoGif.style.fontSize = '5rem';
    
    // Lazy load GIF if available
    if (gifPath) {
        const img = new Image();
        img.onload = () => {
            elements.demoImage.src = gifPath;
            elements.demoImage.alt = exercise.name;
            elements.demoImage.classList.add('visible');
            elements.demoGif.style.display = 'none';
        };
        img.src = gifPath;
    }
    
    // Show posture tips
    const details = getExerciseById(exercise.id);
    if (details) {
        elements.postureAdvice.innerHTML = `<p class="advice-text">${details.tips}</p>`;
    }

    showScreen('exercise');
}

function nextExercise() {
    const currentWorkout = appState.currentWorkout;
    appState.currentExerciseIndex++;

    if (appState.currentExerciseIndex >= currentWorkout.exercises.length) {
        markSessionComplete();
    } else {
        const nextExercise = currentWorkout.exercises[appState.currentExerciseIndex];
        showExerciseDetails(nextExercise);
    }
}

/**
 * SESSION COMPLETION
 */
function markSessionComplete() {
    const today = new Date().toISOString().split('T')[0];
    
    if (!appState.completedSessions.includes(today)) {
        appState.completedSessions.push(today);
        updateStreak();
        saveDataToLocalStorage();
    }

    showCelebration();
}

function showCelebration() {
    const celebration = document.createElement('div');
    celebration.className = 'celebration-content';
    celebration.innerHTML = `
        <div style="font-size: 5rem; margin-bottom: 1.5rem; animation: bounce 1s ease-in-out infinite;">🦋</div>
        <h2 style="font-size: 2.5rem; font-weight: 800; color: #1F2937; margin-bottom: 1rem; letter-spacing: -1px;">Bravo Martinese!</h2>
        <p style="font-size: 1.25rem; color: #6B7280; margin-bottom: 0.5rem; font-weight: 600;">Séance terminée avec succès! 🎉</p>
        <p style="font-size: 1rem; color: #9CA3AF; margin-bottom: 2rem;">Tu es de plus en plus proche de ton objectif!</p>
        <div style="background: linear-gradient(135deg, #F3F4F6 0%, #E5E7EB 100%); border-radius: 16px; padding: 1.5rem; margin-bottom: 2rem;">
            <div style="display: flex; justify-content: space-around; gap: 1rem;">
                <div style="text-align: center;">
                    <div style="font-size: 2rem; font-weight: 800; background: linear-gradient(135deg, #9B5DE5 0%, #F59E0B 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;">${appState.streak || 0}</div>
                    <div style="font-size: 0.875rem; color: #6B7280; font-weight: 600;">Jours</div>
                </div>
                <div style="text-align: center;">
                    <div style="font-size: 2rem; font-weight: 800; background: linear-gradient(135deg, #9B5DE5 0%, #F59E0B 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;">${appState.completedSessions.length}</div>
                    <div style="font-size: 0.875rem; color: #6B7280; font-weight: 600;">Séances</div>
                </div>
                <div style="text-align: center;">
                    <div style="font-size: 2rem; font-weight: 800; background: linear-gradient(135deg, #9B5DE5 0%, #F59E0B 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;">💪</div>
                    <div style="font-size: 0.875rem; color: #6B7280; font-weight: 600;">Force</div>
                </div>
            </div>
        </div>
        <button id="celebrationCloseBtn" style="width: 100%; background: linear-gradient(135deg, #9B5DE5 0%, #F59E0B 100%); color: white; border: none; padding: 1.25rem; border-radius: 16px; font-size: 1.125rem; font-weight: 700; cursor: pointer; box-shadow: 0 8px 24px rgba(155, 93, 229, 0.4); transition: all 0.3s ease;">Continuer</button>
    `;

    const overlay = document.createElement('div');
    overlay.className = 'celebration-overlay';
    overlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(135deg, rgba(155, 93, 229, 0.97) 0%, rgba(91, 33, 182, 0.97) 100%);
        backdrop-filter: blur(20px);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 2000;
        animation: fadeIn 0.4s ease-out;
    `;
    
    celebration.style.cssText = `
        background: white;
        border-radius: 32px;
        padding: 3rem 2.5rem;
        text-align: center;
        max-width: 450px;
        margin: 1rem;
        box-shadow: 0 30px 80px rgba(0, 0, 0, 0.4);
        animation: scaleIn 0.5s cubic-bezier(0.4, 0, 0.2, 1);
    `;
    
    overlay.appendChild(celebration);
    document.body.appendChild(overlay);

    const closeBtn = document.getElementById('celebrationCloseBtn');
    closeBtn.addEventListener('mouseenter', () => {
        closeBtn.style.transform = 'translateY(-3px) scale(1.02)';
        closeBtn.style.boxShadow = '0 12px 32px rgba(155, 93, 229, 0.5)';
    });
    closeBtn.addEventListener('mouseleave', () => {
        closeBtn.style.transform = 'translateY(0) scale(1)';
        closeBtn.style.boxShadow = '0 8px 24px rgba(155, 93, 229, 0.4)';
    });
    closeBtn.addEventListener('click', () => {
        overlay.style.animation = 'fadeOut 0.3s ease-out';
        setTimeout(() => {
            overlay.remove();
            showScreen('home');
            updateHomeScreen();
        }, 300);
    });
}

/**
 * DAILY TIP
 */
function showDailyTip() {
    // Check if tip was already shown today
    const today = new Date().toISOString().split('T')[0];
    const lastTipDate = localStorage.getItem('lastTipDate');
    
    if (lastTipDate === today) {
        return; // Already shown today
    }
    
    const tip = getTipOfTheDay();
    const modal = document.getElementById('dailyTipModal');
    const emojiEl = document.getElementById('dailyTipEmoji');
    const titleEl = document.getElementById('dailyTipTitle');
    const textEl = document.getElementById('dailyTipText');
    const closeBtn = document.getElementById('closeDailyTipBtn');
    
    if (modal && emojiEl && titleEl && textEl && closeBtn) {
        emojiEl.textContent = tip.emoji;
        titleEl.textContent = tip.title;
        textEl.textContent = tip.content;
        
        modal.classList.add('active');
        
        // Attach event listener to close button
        closeBtn.onclick = function() {
            modal.classList.remove('active');
        };
        
        // Save that we showed the tip today
        localStorage.setItem('lastTipDate', today);
    }
}

function closeDailyTip() {
    const modal = document.getElementById('dailyTipModal');
    if (modal) {
        modal.classList.remove('active');
    }
}

/**
 * STREAK MANAGEMENT
 */
function updateStreak() {
    const today = new Date();
    let streak = 0;
    let checkDate = new Date(today);

    while (true) {
        const dateStr = checkDate.toISOString().split('T')[0];
        if (appState.completedSessions.includes(dateStr)) {
            streak++;
            checkDate.setDate(checkDate.getDate() - 1);
        } else {
            break;
        }
    }

    appState.streak = streak;
}

/**
 * TIMER CIRCUIT
 */
function startCircuit() {
    appState.timerRunning = false;
    appState.timerSeconds = 30;
    appState.timerPhase = 'work';
    updateTimerDisplay();
    showScreen('exercise');
}

function toggleTimer() {
    appState.timerRunning = !appState.timerRunning;

    if (appState.timerRunning) {
        elements.timerStartBtn.style.display = 'none';
        elements.timerPauseBtn.style.display = 'inline-block';
        runTimer();
    } else {
        elements.timerStartBtn.style.display = 'inline-block';
        elements.timerPauseBtn.style.display = 'none';
    }
}

function runTimer() {
    if (!appState.timerRunning) return;

    if (appState.timerSeconds > 0) {
        appState.timerSeconds--;
        updateTimerDisplay();
        setTimeout(runTimer, 1000);
    } else {
        // Switch phase
        if (appState.timerPhase === 'work') {
            appState.timerPhase = 'rest';
            appState.timerSeconds = 15;
        } else {
            appState.timerPhase = 'work';
            appState.timerSeconds = 30;
        }
        updateTimerDisplay();
        runTimer();
    }
}

function updateTimerDisplay() {
    elements.timerValue.textContent = appState.timerSeconds.toString().padStart(2, '0');
    elements.timerLabel.textContent = appState.timerPhase === 'work' ? 'Travail' : 'Repos';
}

/**
 * MOTIVATION SCREEN
 */
function updateMotivationTip() {
    const tip = getRandomMotivationTip();
    elements.motivationText.textContent = tip;
    
    // Add to history
    const history = document.getElementById('messagesHistory');
    if (history) {
        const messageItem = document.createElement('div');
        messageItem.className = 'message-item';
        messageItem.textContent = tip;
        history.insertBefore(messageItem, history.firstChild);
        
        // Keep only last 10 messages
        while (history.children.length > 10) {
            history.removeChild(history.lastChild);
        }
    }
}

function showRandomNotification() {
    const tips = MOTIVATION_TIPS;
    const tip = tips[Math.floor(Math.random() * tips.length)];
    alert(tip);
}

/**
 * BUTTERFLIES
 */
function createButterflyDecorations() {
    const container = elements.butterflyContainer;
    if (!container) return;

    const butterflyEmojis = ['🦋', '🦋', '🦋', '🦋', '🦋'];
    
    butterflyEmojis.forEach((emoji, index) => {
        const butterfly = document.createElement('div');
        butterfly.className = 'butterfly';
        if (index === 0) butterfly.classList.add('butterfly-large');
        butterfly.textContent = emoji;
        butterfly.style.left = Math.random() * 100 + '%';
        butterfly.style.top = Math.random() * 50 + '%';
        butterfly.style.animationDelay = (index * 0.5) + 's';
        container.appendChild(butterfly);
    });
}

function createCelebrationButterflies() {
    const container = elements.butterflyContainer;
    if (!container) return;

    for (let i = 0; i < 5; i++) {
        const butterfly = document.createElement('div');
        butterfly.className = 'butterfly butterfly-celebration';
        butterfly.textContent = '🦋';
        butterfly.style.left = Math.random() * 100 + '%';
        butterfly.style.top = '80%';
        container.appendChild(butterfly);

        setTimeout(() => butterfly.remove(), 2000);
    }
}

/**
 * NOTIFICATIONS SETUP
 */
function setupNotifications() {
    // Show random motivational message on app open
    if ('Notification' in window && Notification.permission === 'granted') {
        // Could send notification here
    }

    // Show daily tip at app opening
    const lastShown = localStorage.getItem('last-tip-shown');
    const today = new Date().toISOString().split('T')[0];
    
    if (lastShown !== today) {
        setTimeout(() => {
            showDailyTipModal();
            localStorage.setItem('last-tip-shown', today);
        }, 1000);
    }
}

/**
 * DAILY TIP MODAL
 */
function showDailyTipModal() {
    const modal = document.getElementById('dailyTipModal');
    const tipText = document.getElementById('dailyTipText');
    
    if (modal && tipText) {
        // Get a random motivation tip
        const tip = getRandomMotivationTip();
        tipText.textContent = tip;
        
        modal.classList.add('active');
    }
}

function closeDailyTipModal() {
    const modal = document.getElementById('dailyTipModal');
    if (modal) {
        modal.classList.remove('active');
    }
}

/**
 * REST DAY HANDLERS
 */
function setupRestDayHandlers() {
    const markRestDoneBtn = document.getElementById('markRestDoneBtn');
    if (markRestDoneBtn) {
        markRestDoneBtn.addEventListener('click', markSessionComplete);
    }
}

/**
 * CARDIO HANDLERS
 */
function setupCardioHandlers() {
    const cardioBtns = document.querySelectorAll('.cardio-btn');
    cardioBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Simulate cardio session
            setTimeout(markSessionComplete, 1000);
        });
    });

    const markCardioBtn = document.getElementById('markCardioBtn');
    if (markCardioBtn) {
        markCardioBtn.addEventListener('click', markSessionComplete);
    }
}

/**
 * ACTIVE WORKOUT SESSION
 */
const activeWorkoutState = {
    currentExerciseIndex: 0,
    isRunning: false,
    isPaused: false,
    timer: null,
    previewTimer: null,
    restTimer: null,
    timeRemaining: 45,
    isResting: false,
    restTime: 10
};

function startActiveWorkout() {
    console.log('[DEBUG] Démarrage de la séance active');
    
    if (!appState.currentWorkout) {
        console.error('[ERROR] Aucun workout chargé');
        return;
    }
    
    activeWorkoutState.currentExerciseIndex = 0;
    activeWorkoutState.isRunning = true;
    activeWorkoutState.isPaused = false;
    
    showScreen('activeWorkout');
    loadActiveExercise();
    // Don't start timer immediately - showPreviewScreen will start it after 8 seconds
}

function loadActiveExercise() {
    const workout = appState.currentWorkout;
    const index = activeWorkoutState.currentExerciseIndex;
    const exercise = workout.exercises[index];
    
    console.log('[DEBUG] loadActiveExercise - Index:', index, 'Exercice:', exercise?.name);
    
    if (!exercise) {
        console.log('[DEBUG] Aucun exercice trouvé, fin de la séance');
        completeActiveWorkout();
        return;
    }
    
    // Update counter
    const counter = document.getElementById('activeWorkoutCounter');
    if (counter) {
        counter.textContent = `Exercice ${index + 1} sur ${workout.exercises.length}`;
    }
    
    // Update progress bar
    const progressFill = document.getElementById('activeWorkoutProgressFill');
    if (progressFill) {
        const progress = ((index + 1) / workout.exercises.length) * 100;
        progressFill.style.width = `${progress}%`;
    }
    
    // Update exercise info
    const nameEl = document.getElementById('activeWorkoutName');
    const repsEl = document.getElementById('activeWorkoutReps');
    const descEl = document.getElementById('activeWorkoutDescription');
    const videoArea = document.getElementById('activeWorkoutVideo');
    
    if (nameEl) nameEl.textContent = exercise.name;
    if (repsEl) repsEl.textContent = exercise.reps;
    
    const exerciseDetails = getExerciseById(exercise.id);
    if (descEl && exerciseDetails) {
        descEl.textContent = exerciseDetails.tips || exercise.tips || 'Exercice de renforcement musculaire.';
    }
    
    // Update video area with lazy loaded GIF
    const gifPath = getExerciseGif(exercise.id);
    if (videoArea) {
        if (gifPath) {
            // Show loading placeholder first
            const emoji = getExerciseEmoji(exercise.id);
            videoArea.innerHTML = `
                <div class="video-placeholder">
                    <div class="video-icon">${emoji}</div>
                    <p class="video-text">Chargement...</p>
                </div>
            `;
            
            // Lazy load the GIF
            const img = new Image();
            img.onload = () => {
                videoArea.innerHTML = `<img src="${gifPath}" alt="${exercise.name}" />`;
            };
            img.onerror = () => {
                videoArea.innerHTML = `
                    <div class="video-placeholder">
                        <div class="video-icon">${emoji}</div>
                        <p class="video-text">Vidéo non disponible</p>
                    </div>
                `;
            };
            img.src = gifPath;
        } else {
            const emoji = getExerciseEmoji(exercise.id);
            videoArea.innerHTML = `
                <div class="video-placeholder">
                    <div class="video-icon">${emoji}</div>
                    <p class="video-text">Vidéo de démonstration</p>
                </div>
            `;
        }
    }
    
    // Reset timer
    console.log('[DEBUG] Réinitialisation du timer à 45 secondes');
    activeWorkoutState.timeRemaining = 45;
    updateTimerDisplay();
    
    // Show preview screen for 8 seconds before starting exercise
    showPreviewScreen(exercise);
}

function startExerciseTimer() {
    console.log('[DEBUG] startExerciseTimer appelé - timeRemaining:', activeWorkoutState.timeRemaining);
    
    // Clear any existing timer
    if (activeWorkoutState.timer) {
        clearInterval(activeWorkoutState.timer);
        activeWorkoutState.timer = null;
    }
    
    // Ensure timeRemaining is set correctly
    if (activeWorkoutState.timeRemaining <= 0) {
        console.warn('[WARNING] timeRemaining est <= 0, réinitialisation à 45');
        activeWorkoutState.timeRemaining = 45;
    }
    
    activeWorkoutState.isRunning = true;
    activeWorkoutState.isPaused = false;
    
    // Update display immediately
    updateTimerDisplay();
    
    activeWorkoutState.timer = setInterval(() => {
        if (!activeWorkoutState.isPaused && activeWorkoutState.isRunning) {
            activeWorkoutState.timeRemaining--;
            console.log('[DEBUG] Timer décompte:', activeWorkoutState.timeRemaining);
            updateTimerDisplay();
            
            // Play alert sound for last 3 seconds
            if (activeWorkoutState.timeRemaining > 0 && activeWorkoutState.timeRemaining <= 3) {
                SoundEffects.playAlert();
            }
            
            if (activeWorkoutState.timeRemaining <= 0) {
                console.log('[DEBUG] Exercice terminé, passage au suivant');
                // Play exercise complete sound
                SoundEffects.playExerciseComplete();
                clearInterval(activeWorkoutState.timer);
                activeWorkoutState.timer = null;
                moveToNextExercise();
            }
        }
    }, 1000);
}

function updateTimerDisplay() {
    const timerValue = document.getElementById('activeTimerValue');
    const timerCircle = document.getElementById('timerCircleProgress');
    
    if (timerValue) {
        timerValue.textContent = activeWorkoutState.timeRemaining;
    }
    
    if (timerCircle) {
        const circumference = 2 * Math.PI * 85;
        const progress = (activeWorkoutState.timeRemaining / 45) * circumference;
        timerCircle.style.strokeDashoffset = circumference - progress;
    }
}

function toggleActiveWorkoutPause() {
    activeWorkoutState.isPaused = !activeWorkoutState.isPaused;
    
    // Play pause sound
    SoundEffects.playPause();
    
    const pauseBtn = document.getElementById('pauseActiveWorkoutBtn');
    if (pauseBtn) {
        if (activeWorkoutState.isPaused) {
            pauseBtn.innerHTML = `
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                    <polygon points="5 3 19 12 5 21 5 3"/>
                </svg>
                <span>Reprendre</span>
            `;
        } else {
            pauseBtn.innerHTML = `
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                    <rect x="6" y="4" width="4" height="16" rx="1"/>
                    <rect x="14" y="4" width="4" height="16" rx="1"/>
                </svg>
                <span>Pause</span>
            `;
        }
    }
}

function moveToNextExercise() {
    const workout = appState.currentWorkout;
    
    if (activeWorkoutState.currentExerciseIndex < workout.exercises.length - 1) {
        // Show rest screen
        showRestScreen();
    } else {
        // Workout complete
        completeActiveWorkout();
    }
}

function showRestScreen() {
    console.log('[DEBUG] showRestScreen - Affichage de l\'écran de repos');
    const restOverlay = document.getElementById('restScreenOverlay');
    if (restOverlay) {
        restOverlay.style.display = 'flex';
        activeWorkoutState.isResting = true;
        activeWorkoutState.restTime = 10;
        
        // Clear any existing rest timer
        if (activeWorkoutState.restTimer) {
            clearInterval(activeWorkoutState.restTimer);
        }
        
        activeWorkoutState.restTimer = setInterval(() => {
            activeWorkoutState.restTime--;
            const restTimerValue = document.getElementById('restTimerValue');
            if (restTimerValue) {
                restTimerValue.textContent = activeWorkoutState.restTime;
            }
            
            if (activeWorkoutState.restTime <= 0) {
                clearInterval(activeWorkoutState.restTimer);
                activeWorkoutState.restTimer = null;
                skipRestPeriod();
            }
        }, 1000);
    }
}

function skipRestPeriod() {
    console.log('[DEBUG] skipRestPeriod - Passage à l\'exercice suivant');
    const restOverlay = document.getElementById('restScreenOverlay');
    if (restOverlay) {
        restOverlay.style.display = 'none';
    }
    
    // Clear rest timer if exists
    if (activeWorkoutState.restTimer) {
        clearInterval(activeWorkoutState.restTimer);
        activeWorkoutState.restTimer = null;
    }
    
    activeWorkoutState.isResting = false;
    activeWorkoutState.currentExerciseIndex++;
    console.log('[DEBUG] Chargement exercice index:', activeWorkoutState.currentExerciseIndex);
    loadActiveExercise();
}

function skipToNextExercise() {
    if (activeWorkoutState.timer) {
        clearInterval(activeWorkoutState.timer);
    }
    moveToNextExercise();
}

function completeActiveWorkout() {
    if (activeWorkoutState.timer) {
        clearInterval(activeWorkoutState.timer);
    }
    
    activeWorkoutState.isRunning = false;
    
    // Play celebration sound
    SoundEffects.playCelebration();
    
    markSessionComplete();
    showCelebration();
}

function showPreviewScreen(exercise) {
    const previewOverlay = document.getElementById('previewScreenOverlay');
    if (!previewOverlay) return;
    
    // Clear any existing preview timer
    if (activeWorkoutState.previewTimer) {
        clearInterval(activeWorkoutState.previewTimer);
    }
    
    // Update preview content
    const previewName = document.getElementById('previewExerciseName');
    const previewReps = document.getElementById('previewExerciseReps');
    const previewDemoArea = document.querySelector('.preview-demo-area');
    const previewDesc = document.getElementById('previewDescription');
    
    if (previewName) previewName.textContent = exercise.name;
    if (previewReps) previewReps.textContent = exercise.reps;
    
    const exerciseDetails = getExerciseById(exercise.id);
    const gifPath = getExerciseGif(exercise.id);
    const emoji = getExerciseEmoji(exercise.id);
    
    // Display GIF with lazy loading if available, otherwise show emoji
    if (previewDemoArea) {
        if (gifPath) {
            // Show loading placeholder first
            previewDemoArea.innerHTML = `<div class="preview-demo-icon">${emoji}</div>`;
            
            // Lazy load the GIF
            const img = new Image();
            img.onload = () => {
                previewDemoArea.innerHTML = `<img src="${gifPath}" alt="${exercise.name}" />`;
            };
            img.src = gifPath;
        } else {
            previewDemoArea.innerHTML = `<div class="preview-demo-icon">${emoji}</div>`;
        }
    }
    
    if (previewDesc && exerciseDetails) {
        previewDesc.textContent = exerciseDetails.tips || exercise.tips || 'Prépare-toi pour cet exercice';
    }
    
    // Show preview overlay
    previewOverlay.style.display = 'flex';
    
    // Play start sound
    SoundEffects.playStart();
    
    // Reset preview timer value
    let previewTime = 8;
    const previewTimerValue = document.getElementById('previewTimerValue');
    if (previewTimerValue) {
        previewTimerValue.textContent = previewTime;
    }
    
    // Start 8 second countdown
    activeWorkoutState.previewTimer = setInterval(() => {
        previewTime--;
        if (previewTimerValue) {
            previewTimerValue.textContent = previewTime;
        }
        
        if (previewTime <= 0) {
            clearInterval(activeWorkoutState.previewTimer);
            activeWorkoutState.previewTimer = null;
            previewOverlay.style.display = 'none';
            // Start the actual exercise timer
            startExerciseTimer();
        }
    }, 1000);
}

function exitActiveWorkout() {
    if (activeWorkoutState.timer) {
        clearInterval(activeWorkoutState.timer);
    }
    if (activeWorkoutState.previewTimer) {
        clearInterval(activeWorkoutState.previewTimer);
    }
    
    // Hide preview overlay if visible
    const previewOverlay = document.getElementById('previewScreenOverlay');
    if (previewOverlay) {
        previewOverlay.style.display = 'none';
    }
    
    activeWorkoutState.isRunning = false;
    showScreen('workout');
}

/**
 * INSTALL PROMPT - PWA Installation
 */
function setupInstallPrompt() {
    let deferredPrompt;
    let installButton;

    // Check if app is already installed
    const isInstalled = window.matchMedia('(display-mode: standalone)').matches || 
                       window.navigator.standalone === true;

    // Don't show install prompt if already installed
    if (isInstalled) {
        console.log('[PWA] App already installed');
        return;
    }

    // Create install button
    function createInstallButton() {
        const installBtn = document.createElement('button');
        installBtn.id = 'installPwaBtn';
        installBtn.innerHTML = `
            <div style="display: flex; align-items: center; gap: 0.5rem;">
                <span style="font-size: 1.2rem;">📱</span>
                <span>Ajouter à l'écran d'accueil</span>
            </div>
        `;
        installBtn.style.cssText = `
            position: fixed;
            bottom: 80px;
            right: 20px;
            background: linear-gradient(135deg, #9B5DE5 0%, #7C3AED 100%);
            color: white;
            border: none;
            border-radius: 12px;
            padding: 12px 20px;
            font-size: 0.9rem;
            font-weight: 600;
            cursor: pointer;
            box-shadow: 0 4px 16px rgba(155, 93, 229, 0.3);
            z-index: 10000;
            transition: all 0.3s ease;
            animation: slideInUp 0.5s ease;
        `;

        installBtn.addEventListener('mouseenter', () => {
            installBtn.style.transform = 'translateY(-2px)';
            installBtn.style.boxShadow = '0 6px 20px rgba(155, 93, 229, 0.4)';
        });

        installBtn.addEventListener('mouseleave', () => {
            installBtn.style.transform = 'translateY(0)';
            installBtn.style.boxShadow = '0 4px 16px rgba(155, 93, 229, 0.3)';
        });

        installBtn.addEventListener('click', () => {
            if (deferredPrompt) {
                // Android/Chrome installation
                deferredPrompt.prompt();
                deferredPrompt.userChoice.then((choiceResult) => {
                    if (choiceResult.outcome === 'accepted') {
                        console.log('[PWA] User accepted the install prompt');
                        installBtn.style.display = 'none';
                    } else {
                        console.log('[PWA] User dismissed the install prompt');
                    }
                    deferredPrompt = null;
                });
            } else {
                // iOS/Safari installation - show instructions
                showIosInstallInstructions();
            }
        });

        document.body.appendChild(installBtn);
        return installBtn;
    }

    // Chrome/Android install prompt
    window.addEventListener('beforeinstallprompt', (e) => {
        e.preventDefault();
        deferredPrompt = e;
        
        if (!installButton) {
            installButton = createInstallButton();
        }
    });

    // iOS/Safari - show install button after delay
    setTimeout(() => {
        if (!deferredPrompt && !installButton && !isInstalled) {
            // Check if running on iOS Safari
            const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
            const isSafari = /Safari/.test(navigator.userAgent) && !/Chrome|CriOS|FxiOS/.test(navigator.userAgent);
            
            if (isIOS && isSafari) {
                installButton = createInstallButton();
            }
        }
    }, 3000);
}

/**
 * Show iOS installation instructions
 */
function showIosInstallInstructions() {
    const modal = document.createElement('div');
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.8);
        z-index: 10001;
        display: flex;
        align-items: center;
        justify-content: center;
        animation: fadeIn 0.3s ease;
    `;

    modal.innerHTML = `
        <div style="
            background: white;
            border-radius: 16px;
            padding: 2rem;
            max-width: 350px;
            width: 90%;
            text-align: center;
            animation: slideUp 0.3s ease;
        ">
            <div style="font-size: 3rem; margin-bottom: 1rem;">📱</div>
            <h3 style="margin: 0 0 1rem 0; color: #333; font-size: 1.3rem;">Installer Martinese Fitness</h3>
            <div style="text-align: left; margin: 1.5rem 0; color: #666; line-height: 1.6;">
                <p style="margin: 0 0 1rem 0;"><strong>Pour iPhone/iPad:</strong></p>
                <ol style="margin: 0; padding-left: 1.5rem;">
                    <li style="margin-bottom: 0.5rem;">Appuie sur l'icône <strong>Partager</strong> <span style="font-size: 1.2rem;">⬆️</span></li>
                    <li style="margin-bottom: 0.5rem;">Fais défiler vers le bas</li>
                    <li style="margin-bottom: 0.5rem;">Appuie sur <strong>"Sur l'écran d'accueil"</strong></li>
                    <li style="margin-bottom: 0.5rem;">Appuie sur <strong>"Ajouter"</strong></li>
                </ol>
            </div>
            <button id="closeIosInstall" style="
                background: linear-gradient(135deg, #9B5DE5 0%, #7C3AED 100%);
                color: white;
                border: none;
                border-radius: 8px;
                padding: 12px 24px;
                font-size: 1rem;
                font-weight: 600;
                cursor: pointer;
                width: 100%;
            ">J'ai compris</button>
        </div>
    `;

    document.body.appendChild(modal);

    // Close modal
    document.getElementById('closeIosInstall').addEventListener('click', () => {
        modal.style.animation = 'fadeOut 0.3s ease';
        setTimeout(() => {
            document.body.removeChild(modal);
        }, 300);
    });

    // Close on background click
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.animation = 'fadeOut 0.3s ease';
            setTimeout(() => {
                document.body.removeChild(modal);
            }, 300);
        }
    });
}

// INITIALIZE APP ON LOAD
document.addEventListener('DOMContentLoaded', initializeApp);

// Handle app visibility
document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'visible') {
        updateHomeScreen();
    }
});

// Setup additional handlers
setupRestDayHandlers();
setupCardioHandlers();
setupInstallPrompt();

// Log app start
console.log('[v0] Fitness app initialized for Martinese');
