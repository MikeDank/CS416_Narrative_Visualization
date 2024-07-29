// main.js

// Global variables
let globalData;
let currentScene = 1;
let currentEducationType = 'primary';

// Load data once and make it available to all scenes
d3.csv("world-data-2023 2.csv").then(function(data) {
    globalData = data.map(d => ({
        ...d,
        GDP: parseFloat(d.GDP.replace(/[^0-9.-]+/g,"")),
        "Gross primary education enrollment (%)": parseFloat(d["Gross primary education enrollment (%)"]),
        "Gross tertiary education enrollment (%)": parseFloat(d["Gross tertiary education enrollment (%)"]),
        "Co2-Emissions": Math.max(1, parseFloat(d["Co2-Emissions"].replace(/,/g, '')))
    }));
    
    // Call a function to initialize the current scene
    initializeCurrentScene();
}).catch(function(error) {
    console.log("Error loading the CSV file:", error);
    d3.select("#chart").append("p").text("Error loading data. Please check the console for details.");
});

function initializeCurrentScene() {
    if (document.title.includes('Scene 1')) {
        initializeScene1();
    } else if (document.title.includes('Scene 2')) {
        initializeScene2();
    } else if (document.title.includes('Scene 3')) {
        initializeScene3();
    }
}

function initializeScene1() {
    // Any additional setup for Scene 1
    console.log("Scene 1 initialized");
    // You can add any scene-specific initialization here
}

function initializeScene2() {
    // Setup for Scene 2
    console.log("Scene 2 initialized");
    // Add scene 2 specific initialization here
}

function initializeScene3() {
    // Setup for Scene 3
    console.log("Scene 3 initialized");
    // Add scene 3 specific initialization here
}

// You can add more shared functions here if needed