let stats = {

    integrity: 50,

    knowledge: 50,

    culture: 50,

    nature: 50,

    prosperity: 50

};


let currentScene = 0;


/*
    STORY DATA
*/

const scenes = [

    {

        chapter: "INTRODUCTION",

        emoji: "🏛️",

        title: "Welcome To Harrapan Civilisation",

        text:
            "DID YOU KNOW?: The Harappans had a writing system that has not yet been fully deciphered!"
        ,
        // Qs:
        //     "",

        choices: [

            {
                text: "Begin the journey",
                effects: {},
                next: 1
            }

        ]

    },


    {

        chapter: "CHAPTER I",

        emoji: "🏺",

        title: "🏺Harappan Civilization — Fact + Quiz",

        text:
            "Fact: Harappan cities were remarkably well planned for their time. Many settlements had straight streets, standardized brick sizes, wells, houses, and organized drainage systems. ",

        choices: [

            {
                text: "Next",
                effects: {

                },
                next: 2

            },


        ]

    },


    {

        chapter: "CHAPTER I",

        emoji: "🪙",

        title: "❓ Quiz:",

        text:
            "Which feature is especially associated with Harappan urban planning?",

        choices: [

            {
                text: "	A. Sophisticated drainage systems",
                isCorrect: true,
                effects: {

                },
                next: 3

            },
            {
                text: "B. Giant stone pyramids",
                isCorrect: false,
                effects: {

                },
                next: 3

            },
            {
                text: "C. Roman-style amphitheaters",
                isCorrect: false,
                effects: {

                },
                next: 3
            },
            {
                text: "D. Medieval castles",
                isCorrect: false,
                effects: {

                },
                next: 3
            }

        ]

    },


    {

        chapter: "CHAPTER I",

        emoji: "📜",

        title: "📜Fact:🚿 The Great Bath",

        text:
            "The Great Bath at Mohenjo-daro is a large, carefully constructed brick-lined structure. Its exact purpose is unknown, but it may have had ritual or ceremonial significance.",

        choices: [

            {
                text: "NEXT",
                effects: {
                    // culture: 15
                },
                next: 4
            }

        ]

    },


    {

        chapter: "CHAPTER I",

        emoji: "❓",

        title: "The Quiz",

        text:
            "Where is the famous Great Bath located?",

        choices: [

            {
                text: "A. Harappa",
                effects: {
                    // integrity: -5
                },
                next: 5
            },

            {
                text: "B. Mohenjo-daro",
                effects: {
                    // knowledge: 15,
                    // integrity: 5
                },
                next: 5
            },

            {
                text: "C. Lothal",
                effects: {
                    // prosperity: 10
                },
                next: 5
            },
            {
                text: "D. Rakhigarhi",
                effects: {
                    // prosperity: 10
                },
                next: 5
            }

        ]

    },


    {

        chapter: "CHAPTER I",

        emoji: " 📜",

        title: "The Mysterious Script 📜",

        text:
            "Harappan people used symbols that appear on seals, pottery, tablets, and other objects. Despite decades of research, the Harappan script has not been conclusively deciphered.",

        choices: [

            {
                text: "NEXT",

                effects: {
                    nature: 10,
                    integrity: 10
                },

                next: 6

            }

        ]

    },


    {

        chapter: "CHAPTER I",

        emoji: "📜 ",


        title: "❓ Quiz:",

        text:
            "What is the current status of the Harappan script?",

        choices: [

            {
                text: "•	A. Completely deciphered",

                effects: {
                    prosperity: 20,
                    integrity: -15
                },

                next: 7
            },

            {
                text: "•	B. Partially translated into Greek",

                effects: {
                    integrity: 15
                },

                next: 7
            },

            {
                text: "•	C. Still undeciphered",

                effects: {
                    integrity: 20,
                    knowledge: 5
                },

                next: 7
            },
            {
                text: "•	D. Written entirely in Sanskrit",

                effects: {
                    integrity: 20,
                    knowledge: 5
                },

                next: 7
            }

        ]

    },


    {

        chapter: "CHAPTER I",

        emoji: "🐂",

        title: "📜 Fact:",

        text:
            "Harappan seals are often made from steatite and feature animals and short inscriptions. One of the most famous motifs is a mysterious one-horned animal often called the “unicorn.”",

        choices: [

            {
                text: "NEXT",

                effects: {


                },
                next: 8


            }

        ]

    },


    {

        chapter: "CHAPTER I",

        emoji: "💧 ",

        title: "❓ Quiz:",

        text:
            " Which Harappan site is particularly famous for its water-management system?",

        choices: [

            {
                text: "•	A. Dholavira",

                effects: {},

                next: 9
            },

            {
                text: "•	B. Taxila",

                effects: {
                    nature: 20
                },

                next: 9
            },

            {
                text: "•	C. Sarnath",

                effects: {
                    nature: 15,
                    knowledge: 10
                },

                next: 9
            },
            {
                text: "•	D. Pataliputra",

                effects: {
                    nature: 15,
                    knowledge: 10
                },

                next: 9
            }

        ]

    },


    {

        chapter: "CHAPTER I",

        emoji: "⚖️ ",

        title: "📜 Fact:",

        text:
            "Harappan sites have yielded sets of carefully standardized weights. Such standardization would have helped with trade and measuring goods.",

        choices: [

            {
                text: "NEXT",



                next: 10
            }

        ]

    }

];


/*
    DISPLAY SCENE
*/

function showScene() {

    const scene = scenes[currentScene];


    document.getElementById("chapter")
        .textContent = scene.chapter;


    document.getElementById("sceneEmoji")
        .textContent = scene.emoji;


    document.getElementById("title")
        .textContent = scene.title;


    document.getElementById("storytext")
        .textContent = scene.text;

    // document.getElementById("dyk")
    //     .textContent = scene.Qs;


    const choices =
        document.getElementById("choices");


    choices.innerHTML = "";


    scene.choices.forEach((choice, index) => {

        const button =
            document.createElement("button");


        button.textContent =
            choice.text;

        button.onclick = () => makeChoice(index, button);


        choices.appendChild(button);

    });


    updateStats();

}


/*
    PLAYER CHOICE
*/

function makeChoice(index) {

    const choice =
        scenes[currentScene].choices[index];


    // Apply effects

    for (let stat in choice.effects) {

        stats[stat] +=
            choice.effects[stat];

    }


    // Prevent impossible values

    for (let stat in stats) {

        stats[stat] =
            Math.max(0, Math.min(100, stats[stat]));

    }


    currentScene =
        choice.next;


    if (currentScene >= scenes.length) {

        showEnding();

    }

    else {

        showScene();

    }

}


/*
    UPDATE STATS
*/

function updateStats() {

    document.getElementById("integrity")
        .textContent = stats.integrity;

    document.getElementById("knowledge")
        .textContent = stats.knowledge;

    document.getElementById("culture")
        .textContent = stats.culture;

    document.getElementById("nature")
        .textContent = stats.nature;

    document.getElementById("prosperity")
        .textContent = stats.prosperity;

}


/*
    ENDING
*/

function showEnding() {

    let values = Object.values(stats);

    let average =
        values.reduce((a, b) => a + b, 0)
        / values.length;


    let title;

    let text;


    if (average >= 70) {

        title =
            "🌟 THE BALANCED LEGACY";

        text =
            `You discovered that civilization
            is not built by one person or one idea.

            Prosperity, knowledge, culture,
            integrity and nature must grow together.

            Your journey has created
            a balanced legacy.`;

    }

    else if (stats.knowledge >= 70) {

        title =
            "📚 THE AGE OF KNOWLEDGE";

        text =
            `You chose learning and discovery.

            Your greatest legacy is knowledge
            passed from one generation to another.`;

    }

    else if (stats.culture >= 70) {

        title =
            "🪷 THE GUARDIAN OF HERITAGE";

        text =
            `You protected culture,
            craftsmanship and traditions.

            Your legacy lives through
            the people and their heritage.`;

    }

    else {

        title =
            "💎 Harappan Craftsmanship";

        text =
            `You focused on prosperity
            and the growth of your kingdom.

            Your legacy is one of progress
            and opportunity.`;

    }


    document.getElementById("chapter")
        .textContent = "YOUR LEGACY";


    document.getElementById("sceneEmoji")
        .textContent = "💎 ";


    document.getElementById("title")
        .textContent = title;


    document.getElementById("storyText")
        .textContent = text;


    document.getElementById("choices")
        .innerHTML =
        `<button onclick="location.reload()">
            🔄 Begin Again
        </button>`;


    updateStats();

}


/*
    START GAME
*/

showScene();
// function checkAnswer(event, iscorrect) {
//     const clickButton = event.target;
//     if (iscorrect) {
//         if (isCorrect) {
//             clickButton.style.backgroundColor = "green";
//             clickButton.style.color = "white"; // Makes the text easier to read
//         } else {
//             clickButton.style.backgroundColor = "red";
//             clickButton.style.color = "white";
//         }

//     }
// }
// checkAnswer();
function makeChoice(index, clickedButton) {
    const choice = scenes[currentScene].choices[index];

    // Disable all buttons to prevent spamming
    const allButtons = document.querySelectorAll("#choices button");
    allButtons.forEach(btn => btn.disabled = true);

    // If choice has isCorrect defined, apply feedback color
    if (choice.isCorrect !== undefined) {
        if (choice.isCorrect) {
            clickedButton.style.backgroundColor = "#2e7d32"; // Green
            clickedButton.style.color = "white";
        } else {
            clickedButton.style.backgroundColor = "#c62828"; // Red
            clickedButton.style.color = "white";
        }
    }

    // Apply effects
    for (let stat in choice.effects) {
        stats[stat] += choice.effects[stat];
    }

    // Clamp stats between 0 and 100
    for (let stat in stats) {
        stats[stat] = Math.max(0, Math.min(100, stats[stat]));
    }

    currentScene = choice.next;

    // Add a short delay (700ms) so the player can see the color before transitioning
    const delay = choice.isCorrect !== undefined ? 700 : 0;

    setTimeout(() => {
        if (currentScene >= scenes.length) {
            showEnding();
        } else {
            showScene();
        }
    }, delay);
}
