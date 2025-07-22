// MBTI Questions
const questions = [
    // Extraversion (E) vs Introversion (I)
    {
        text: "You arrive at a bustling tavern filled with adventurers sharing tales of their quests. You...",
        answers: [
            { text: "Immediately join the loudest group and share your own stories", type: "E" },
            { text: "Find a quiet corner to observe and listen to the conversations", type: "I" }
        ]
    },
    {
        text: "Your party is planning a grand celebration after a successful quest. You prefer to...",
        answers: [
            { text: "Organize group activities and invite everyone in town", type: "E" },
            { text: "Celebrate with a small group of close companions", type: "I" }
        ]
    },
    {
        text: "While exploring an ancient library, you discover a magical communication crystal. You would use it to...",
        answers: [
            { text: "Connect with as many other adventurers as possible", type: "E" },
            { text: "Share private messages with your closest allies", type: "I" }
        ]
    },
    {
        text: "During downtime between quests, you prefer to...",
        answers: [
            { text: "Train in the public courtyard, sparring with various partners", type: "E" },
            { text: "Practice your skills in a secluded grove", type: "I" }
        ]
    },
    {
        text: "When faced with a challenging riddle, you work best...",
        answers: [
            { text: "Discussing possibilities with a group of fellow adventurers", type: "E" },
            { text: "Contemplating the solution in peaceful solitude", type: "I" }
        ]
    },
    // Sensing (S) vs Intuition (N)
    {
        text: "When tracking a mysterious creature, you rely most on...",
        answers: [
            { text: "Physical evidence and clear tracks", type: "S" },
            { text: "Your gut feeling about where it might be heading", type: "N" }
        ]
    },
    {
        text: "In combat, you prefer to...",
        answers: [
            { text: "Use well-practiced, reliable techniques", type: "S" },
            { text: "Improvise creative combinations of spells and attacks", type: "N" }
        ]
    },
    {
        text: "When studying an ancient artifact, you focus on...",
        answers: [
            { text: "Its practical uses and physical properties", type: "S" },
            { text: "The possibilities and mysteries it might contain", type: "N" }
        ]
    },
    {
        text: "While planning a mission, you prefer to...",
        answers: [
            { text: "Follow established strategies that have worked before", type: "S" },
            { text: "Develop innovative approaches and experimental tactics", type: "N" }
        ]
    },
    {
        text: "When exploring a new city, you tend to...",
        answers: [
            { text: "Visit the well-known landmarks and traditional shops", type: "S" },
            { text: "Search for hidden passages and unexplored mysteries", type: "N" }
        ]
    },
    // Thinking (T) vs Feeling (F)
    {
        text: "When making a difficult decision that affects your party, you prioritize...",
        answers: [
            { text: "The logical choice that maximizes efficiency", type: "T" },
            { text: "The option that maintains group harmony", type: "F" }
        ]
    },
    {
        text: "A merchant offers you a questionable deal. You...",
        answers: [
            { text: "Analyze the facts and negotiate based on market value", type: "T" },
            { text: "Consider the merchant's circumstances and personal needs", type: "F" }
        ]
    },
    {
        text: "When a fellow adventurer fails a crucial task, you...",
        answers: [
            { text: "Provide constructive criticism to prevent future mistakes", type: "T" },
            { text: "Offer emotional support and encouragement", type: "F" }
        ]
    },
    {
        text: "In distributing quest rewards, you believe in...",
        answers: [
            { text: "Strictly following the agreed-upon shares", type: "T" },
            { text: "Adjusting shares based on individual needs", type: "F" }
        ]
    },
    {
        text: "When choosing equipment for a quest, you prioritize...",
        answers: [
            { text: "Statistical advantages and practical benefits", type: "T" },
            { text: "Personal attachment and aesthetic appeal", type: "F" }
        ]
    },
    // Judging (J) vs Perceiving (P)
    {
        text: "Before starting a dungeon expedition, you prefer to...",
        answers: [
            { text: "Have a detailed plan with contingencies", type: "J" },
            { text: "Keep options open and adapt as you go", type: "P" }
        ]
    },
    {
        text: "Your approach to quest deadlines is to...",
        answers: [
            { text: "Complete objectives well ahead of schedule", type: "J" },
            { text: "Finish just in time, allowing for last-minute opportunities", type: "P" }
        ]
    },
    {
        text: "When setting up camp, you...",
        answers: [
            { text: "Follow a strict routine and organized system", type: "J" },
            { text: "Set up as needed, staying flexible with arrangements", type: "P" }
        ]
    },
    {
        text: "During a festival in town, you prefer to...",
        answers: [
            { text: "Follow a schedule to experience all planned events", type: "J" },
            { text: "Wander freely and see what interesting things happen", type: "P" }
        ]
    },
    {
        text: "Your adventuring pack is typically...",
        answers: [
            { text: "Carefully organized with everything in its place", type: "J" },
            { text: "Flexible with room for unexpected treasures", type: "P" }
        ]
    }
];

// MBTI Types and their corresponding fantasy archetypes
const mbtiTypes = {
    "INTJ": { title: "The Strategic Wizard", description: "A master of arcane knowledge, always three steps ahead." },
    "INTP": { title: "The Curious Alchemist", description: "An innovative thinker, constantly experimenting with new magical formulas." },
    "ENTJ": { title: "The Charismatic Warlord", description: "A natural leader, organizing and commanding forces with strategic brilliance." },
    "ENTP": { title: "The Inventive Trickster", description: "A quick-witted problem solver, always ready with an unconventional solution." },
    "INFJ": { title: "The Mystic Seer", description: "An insightful visionary, guiding others with profound wisdom and empathy." },
    "INFP": { title: "The Idealistic Bard", description: "A compassionate storyteller, inspiring others with tales of hope and heroism." },
    "ENFJ": { title: "The Inspiring Paladin", description: "A charismatic protector, rallying allies with unwavering conviction." },
    "ENFP": { title: "The Enthusiastic Adventurer", description: "A passionate explorer, always eager for new experiences and connections." },
    "ISTJ": { title: "The Reliable Knight", description: "A steadfast defender, upholding tradition and order with unwavering loyalty." },
    "ISFJ": { title: "The Nurturing Healer", description: "A compassionate caregiver, tending to the needs of others with quiet strength." },
    "ESTJ": { title: "The Organized Commander", description: "A practical leader, efficiently managing resources and personnel." },
    "ESFJ": { title: "The Harmonious Diplomat", description: "A sociable mediator, fostering cooperation and maintaining social order." },
    "ISTP": { title: "The Crafty Rogue", description: "A skilled tactician, adapting quickly to any situation with resourcefulness." },
    "ISFP": { title: "The Artistic Ranger", description: "A sensitive soul, attuned to the beauty of nature and expressing it through various arts." },
    "ESTP": { title: "The Daring Swashbuckler", description: "An energetic risk-taker, thriving in the heat of action and adventure." },
    "ESFP": { title: "The Exuberant Performer", description: "A charismatic entertainer, bringing joy and excitement to any gathering." }
};

// Global variables
let currentQuestion = 0;
let userAnswers = {
    E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0
};

// DOM Elements
const introSection = document.getElementById('intro');
const questionSection = document.getElementById('question');
const resultsSection = document.getElementById('results');
const startButton = document.getElementById('start-quest');
const questionText = document.getElementById('question-text');
const answersContainer = document.getElementById('answers');
const progressFill = document.querySelector('.progress-fill');
const currentQuestionSpan = document.getElementById('current-question');
const archetypeTitle = document.getElementById('archetype-title');
const archetypeDescription = document.getElementById('archetype-description');
const strengthsList = document.getElementById('strengths-list');
const partyRole = document.getElementById('party-role');
const restartButton = document.getElementById('restart-quest');
const audioToggle = document.getElementById('toggle-audio');

// Audio (optional feature)
let backgroundMusic = null;
try {
    backgroundMusic = new Audio('medieval-background-music.mp3');
    backgroundMusic.loop = true;
} catch (error) {
    console.log("Background music not available");
}

// Event Listeners
startButton.addEventListener('click', startQuest);
restartButton.addEventListener('click', restartQuest);
audioToggle.addEventListener('click', toggleAudio);

// Functions
function startQuest() {
    introSection.classList.add('hidden');
    questionSection.classList.remove('hidden');
    loadQuestion();
    playBackgroundMusic();
}

function loadQuestion() {
    if (currentQuestion < questions.length) {
        const question = questions[currentQuestion];
        questionText.textContent = question.text;
        answersContainer.innerHTML = '';
        question.answers.forEach((answer, index) => {
            const button = document.createElement('button');
            button.classList.add('answer-option');
            button.textContent = answer.text;
            button.onclick = () => selectAnswer(answer.type);
            button.type = 'button';
            answersContainer.appendChild(button);
        });
        updateProgress();
        
        // Load the corresponding image
        const questionImage = document.getElementById('question-image');
        questionImage.src = `images/question${currentQuestion + 1}.png`;
        questionImage.alt = `Illustration for question ${currentQuestion + 1}`;
        questionImage.onerror = function() {
            this.onerror = null;
            this.src = 'images/default-question.png';
            console.log(`Failed to load image for question ${currentQuestion + 1}, using default image`);
        };
    } else {
        showResults();
    }
}

function selectAnswer(type) {
    userAnswers[type]++;
    currentQuestion++;
    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        showResults();
    }
}

function updateProgress() {
    const progress = ((currentQuestion + 1) / questions.length) * 100;
    progressFill.style.width = `${progress}%`;
    currentQuestionSpan.textContent = currentQuestion + 1;
}

function calculateMBTI() {
    const types = ['E', 'I', 'S', 'N', 'T', 'F', 'J', 'P'];
    let mbti = '';
    for (let i = 0; i < types.length; i += 2) {
        mbti += userAnswers[types[i]] > userAnswers[types[i+1]] ? types[i] : types[i+1];
    }
    return mbti;
}

const archetypeDetails = {
    "INTJ": {
        strengths: ["Master of arcane strategy", "Excellent at predicting enemy movements", "Deep understanding of magical theory"],
        role: "Strategic advisor and master of battlefield control magic"
    },
    "INTP": {
        strengths: ["Innovative spell creation", "Complex problem solving", "Understanding of magical principles"],
        role: "Magical researcher and creative problem solver in challenging situations"
    },
    "ENTJ": {
        strengths: ["Natural leadership", "Strategic planning", "Resource management"],
        role: "Party leader and tactical commander during large-scale operations"
    },
    "ENTP": {
        strengths: ["Quick tactical thinking", "Creative combat solutions", "Adaptable strategy"],
        role: "Innovative strategist and unpredictable combat specialist"
    },
    "INFJ": {
        strengths: ["Deep insight into others", "Long-term strategic vision", "Understanding of group dynamics"],
        role: "Spiritual advisor and guardian of the party's well-being"
    },
    "INFP": {
        strengths: ["Strong moral compass", "Creative inspiration", "Deep emotional understanding"],
        role: "Party's moral compass and keeper of ancient lore"
    },
    "ENFJ": {
        strengths: ["Inspiring leadership", "Team harmony", "Emotional guidance"],
        role: "Charismatic leader and protector of the group's unity"
    },
    "ENFP": {
        strengths: ["Spontaneous problem solving", "Inspiring others", "Finding unique paths"],
        role: "Morale booster and creative scout in unknown territories"
    },
    "ISTJ": {
        strengths: ["Unwavering loyalty", "Attention to detail", "Reliable defense"],
        role: "Steadfast defender and keeper of party traditions"
    },
    "ISFJ": {
        strengths: ["Protective instincts", "Practical support", "Detailed preparation"],
        role: "Party healer and maintainer of group resources"
    },
    "ESTJ": {
        strengths: ["Efficient organization", "Clear direction", "Practical leadership"],
        role: "Quartermaster and coordinator of party operations"
    },
    "ESFJ": {
        strengths: ["Group harmony", "Practical care", "Social networking"],
        role: "Party diplomat and keeper of team morale"
    },
    "ISTP": {
        strengths: ["Technical mastery", "Crisis handling", "Tactical thinking"],
        role: "Master of weapons and tactical specialist"
    },
    "ISFP": {
        strengths: ["Aesthetic awareness", "Environmental attunement", "Graceful combat"],
        role: "Scout and specialist in nature-based challenges"
    },
    "ESTP": {
        strengths: ["Quick reflexes", "Combat prowess", "Risk assessment"],
        role: "Front-line warrior and master of opportunistic combat"
    },
    "ESFP": {
        strengths: ["Social influence", "Performance skills", "Quick adaptation"],
        role: "Face of the party and master of social situations"
    }
};

function showResults() {
    questionSection.classList.add('hidden');
    resultsSection.classList.remove('hidden');
    
    const mbti = calculateMBTI();
    const archetype = mbtiTypes[mbti];
    const details = archetypeDetails[mbti];
    
    // Load archetype image
    const archetypeImage = document.getElementById('archetype-image');
    archetypeImage.src = `images/archetypes/${mbti}.png`;
    archetypeImage.alt = archetype.title;
    archetypeImage.onerror = function() {
        this.onerror = null;
        this.src = 'images/archetypes/default.png';
        console.log(`Failed to load archetype image for ${mbti}, using default image`);
    };
    
    archetypeTitle.textContent = archetype.title;
    archetypeDescription.textContent = archetype.description;
    
    strengthsList.innerHTML = details.strengths
        .map(strength => `<li>${strength}</li>`)
        .join('');
    
    partyRole.textContent = details.role;
}

function restartQuest() {
    currentQuestion = 0;
    userAnswers = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };
    resultsSection.classList.add('hidden');
    introSection.classList.remove('hidden');
}

function playBackgroundMusic() {
    if (backgroundMusic) {
        backgroundMusic.play().catch(error => console.log("Audio play failed:", error));
    }
}

function toggleAudio() {
    if (backgroundMusic) {
        if (backgroundMusic.paused) {
            backgroundMusic.play();
            audioToggle.classList.remove('muted');
        } else {
            backgroundMusic.pause();
            audioToggle.classList.add('muted');
        }
    }
}

// Local Storage
function saveProgress() {
    localStorage.setItem('mbtiProgress', JSON.stringify({
        currentQuestion: currentQuestion,
        userAnswers: userAnswers
    }));
}

function loadProgress() {
    const progress = JSON.parse(localStorage.getItem('mbtiProgress'));
    if (progress) {
        currentQuestion = progress.currentQuestion;
        userAnswers = progress.userAnswers;
        if (currentQuestion > 0 && currentQuestion < questions.length) {
            startQuest();
        }
    }
}

// Initialize
loadProgress();
