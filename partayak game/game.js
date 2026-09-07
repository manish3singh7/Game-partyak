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

        chapter: "PROLOGUE",

        emoji: "🏛️",

        title: "The Letter",

        text:
        `Pataliputra is beginning to wake.

        Your mentor gives you a sealed letter.

        "Deliver this before sunset."

        You don't know what lies ahead.`,

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

        emoji: "🏙️",

        title: "The City",

        text:
        `The streets of Pataliputra are alive.

        Merchants call out to customers.
        Artisans work in their workshops.
        Students gather around their teachers.

        Where will you go?`,

        choices: [

            {
                text: "Visit the marketplace",
                effects: {
                    prosperity: 10
                },
                next: 2
            },

            {
                text: "Visit an artisan",
                effects: {
                    culture: 10
                },
                next: 3
            },

            {
                text: "Visit a scholar",
                effects: {
                    knowledge: 10
                },
                next: 4
            }

        ]

    },


    {

        chapter: "CHAPTER I",

        emoji: "🪙",

        title: "The Marketplace",

        text:
        `A merchant explains how goods
        travel between different regions.

        "Trade carries more than goods,"
        he tells you.
        "It carries ideas too."`,

        choices: [

            {
                text: "Thank the merchant and continue",
                effects: {
                    knowledge: 10,
                    prosperity: 5
                },
                next: 5
            }

        ]

    },


    {

        chapter: "CHAPTER I",

        emoji: "🏺",

        title: "The Artisan",

        text:
        `An artisan carefully shapes a clay pot.

        "Kings may build palaces,"
        he says,
        "but ordinary people build
        the culture that fills them."`,

        choices: [

            {
                text: "Admire the craftsmanship",
                effects: {
                    culture: 15
                },
                next: 5
            }

        ]

    },


    {

        chapter: "CHAPTER I",

        emoji: "📚",

        title: "The Scholar",

        text:
        `A scholar asks you:

        "What makes a civilization strong?"`,

        choices: [

            {
                text: "Only its army",
                effects: {
                    integrity: -5
                },
                next: 5
            },

            {
                text: "Knowledge and cooperation",
                effects: {
                    knowledge: 15,
                    integrity: 5
                },
                next: 5
            },

            {
                text: "Gold",
                effects: {
                    prosperity: 10
                },
                next: 5
            }

        ]

    },


    {

        chapter: "CHAPTER II",

        emoji: "🌾",

        title: "The Fields",

        text:
        `Outside the city, farmers are struggling
        to distribute water to their fields.

        Your journey is already taking longer
        than expected.`,

        choices: [

            {
                text: "Help repair the irrigation channel",

                effects: {
                    nature: 10,
                    integrity: 10
                },

                next: 6
            },

            {
                text: "Continue your journey",

                effects: {
                    prosperity: 5
                },

                next: 6
            },

            {
                text: "Ask the village elder",

                effects: {
                    knowledge: 10
                },

                next: 6
            }

        ]

    },


    {

        chapter: "CHAPTER III",

        emoji: "🏪",

        title: "The Merchant's Offer",

        text:
        `A merchant has accidentally received goods
        belonging to someone else.

        He quietly offers you gold
        to keep the mistake secret.`,

        choices: [

            {
                text: "Accept the gold",

                effects: {
                    prosperity: 20,
                    integrity: -15
                },

                next: 7
            },

            {
                text: "Tell him to return the goods",

                effects: {
                    integrity: 15
                },

                next: 7
            },

            {
                text: "Find the rightful owner",

                effects: {
                    integrity: 20,
                    knowledge: 5
                },

                next: 7
            }

        ]

    },


    {

        chapter: "CHAPTER IV",

        emoji: "📖",

        title: "The Scholar's Question",

        text:
        `A scholar studying mathematics and astronomy
        asks you:

        "Why should knowledge be preserved?"`,

        choices: [

            {
                text: "To become powerful",

                effects: {
                    prosperity: 5
                },

                next: 8
            },

            {
                text: "To understand the world",

                effects: {
                    knowledge: 15
                },

                next: 8
            },

            {
                text: "To share it with future generations",

                effects: {
                    knowledge: 20,
                    culture: 5
                },

                next: 8
            }

        ]

    },


    {

        chapter: "CHAPTER V",

        emoji: "🌳",

        title: "The Forest",

        text:
        `Near the eastern road,
        you see travelers cutting trees.

        You have little time left.

        What will you do?`,

        choices: [

            {
                text: "Ignore them",

                effects: {},

                next: 9
            },

            {
                text: "Ask them to stop",

                effects: {
                    nature: 20
                },

                next: 9
            },

            {
                text: "Speak with the local community",

                effects: {
                    nature: 15,
                    knowledge: 10
                },

                next: 9
            }

        ]

    },


    {

        chapter: "FINAL",

        emoji: "🌅",

        title: "The Eastern Gate",

        text:
        `You finally reach the eastern gate.

        Your mentor takes the letter.

        He opens it.

        The paper is completely blank.

        "The letter was never the lesson."

        He looks at you.

        "What makes a civilization great?"`,

        choices: [

            {
                text: "Prosperity",

                effects: {
                    prosperity: 10
                },

                next: 10
            },

            {
                text: "Knowledge",

                effects: {
                    knowledge: 10
                },

                next: 10
            },

            {
                text: "Culture and heritage",

                effects: {
                    culture: 10
                },

                next: 10
            },

            {
                text: "Balance between people and nature",

                effects: {
                    nature: 10,
                    integrity: 10
                },

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


    document.getElementById("storyText")
        .textContent = scene.text;


    const choices =
        document.getElementById("choices");


    choices.innerHTML = "";


    scene.choices.forEach((choice, index) => {

        const button =
            document.createElement("button");


        button.textContent =
            choice.text;


        button.onclick =
            () => makeChoice(index);


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
            "🪙 THE PROSPEROUS BUILDER";

        text =
            `You focused on prosperity
            and the growth of your kingdom.

            Your legacy is one of progress
            and opportunity.`;

    }


    document.getElementById("chapter")
        .textContent = "YOUR LEGACY";


    document.getElementById("sceneEmoji")
        .textContent = "🏆";


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