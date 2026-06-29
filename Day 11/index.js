// Data structure containing the 10 tasks with metadata, input specs, evaluation logic, and JavaScript code.
const tasks = [
    {
        id: 1,
        title: "Average of 5 Numbers",
        desc: "Calculates the sum and average of five input values.",
        icon: "fa-calculator",
        inputs: [
            { id: "t1-n1", label: "Number 1", type: "number", placeholder: "e.g. 10", defaultValue: 10 },
            { id: "t1-n2", label: "Number 2", type: "number", placeholder: "e.g. 20", defaultValue: 20 },
            { id: "t1-n3", label: "Number 3", type: "number", placeholder: "e.g. 30", defaultValue: 30 },
            { id: "t1-n4", label: "Number 4", type: "number", placeholder: "e.g. 40", defaultValue: 40 },
            { id: "t1-n5", label: "Number 5", type: "number", placeholder: "e.g. 50", defaultValue: 50 }
        ],
        calculate: () => {
            const vals = [1, 2, 3, 4, 5].map(i => parseFloat(document.getElementById(`t1-n${i}`).value) || 0);
            const sum = vals.reduce((a, b) => a + b, 0);
            const avg = sum / 5;
            return `
                <div class="result-card">
                    <div class="result-title">Result</div>
                    <div class="result-value">${avg.toFixed(2)}</div>
                    <div class="result-details">
                        <div class="result-row">
                            <span>Numbers</span>
                            <span>${vals.join(", ")}</span>
                        </div>
                        <div class="result-row">
                            <span>Sum</span>
                            <span>${sum.toFixed(2)}</span>
                        </div>
                        <div class="result-row">
                            <span>Average</span>
                            <span>${avg.toFixed(2)}</span>
                        </div>
                    </div>
                </div>
            `;
        },
        code: `// Find the average of 5 numbers
function findAverage(n1, n2, n3, n4, n5) {
    const sum = n1 + n2 + n3 + n4 + n5;
    const average = sum / 5;
    
    console.log("Sum: " + sum);
    console.log("Average: " + average);
    
    return { sum, average };
}`
    },
    {
        id: 2,
        title: "Circle Area & Perimeter",
        desc: "Computes the area (πr²) and perimeter (2πr) of a circle for a given radius.",
        icon: "fa-circle",
        inputs: [
            { id: "t2-radius", label: "Radius (r)", type: "number", placeholder: "e.g. 7", defaultValue: 7, min: 0 }
        ],
        calculate: () => {
            const radius = parseFloat(document.getElementById("t2-radius").value) || 0;
            if (radius < 0) return `<div class="result-card status-negative"><p>Radius cannot be negative.</p></div>`;
            const area = Math.PI * radius * radius;
            const perimeter = 2 * Math.PI * radius;
            return `
                <div class="result-card">
                    <div class="result-title">Circle Metrics</div>
                    <div class="result-value">${area.toFixed(2)}</div>
                    <div class="result-details">
                        <div class="result-row">
                            <span>Radius</span>
                            <span>${radius.toFixed(2)}</span>
                        </div>
                        <div class="result-row">
                            <span>Area (π * r²)</span>
                            <span>${area.toFixed(4)}</span>
                        </div>
                        <div class="result-row">
                            <span>Perimeter (2 * π * r)</span>
                            <span>${perimeter.toFixed(4)}</span>
                        </div>
                    </div>
                </div>
            `;
        },
        code: `// Calculate the area and perimeter of a circle
function calculateCircle(radius) {
    const area = Math.PI * Math.pow(radius, 2);
    const perimeter = 2 * Math.PI * radius;
    
    return { area, perimeter };
}`
    },
    {
        id: 3,
        title: "Minutes to Hours & Mins",
        desc: "Converts minutes into hours and remaining minutes.",
        icon: "fa-clock",
        inputs: [
            { id: "t3-minutes", label: "Total Minutes", type: "number", placeholder: "e.g. 130", defaultValue: 130, min: 0 }
        ],
        calculate: () => {
            const minutes = parseInt(document.getElementById("t3-minutes").value) || 0;
            if (minutes < 0) return `<div class="result-card status-negative"><p>Minutes cannot be negative.</p></div>`;
            const hours = Math.floor(minutes / 60);
            const remMinutes = minutes % 60;
            return `
                <div class="result-card">
                    <div class="result-title">Conversion</div>
                    <div class="result-value">${hours} hrs ${remMinutes} mins</div>
                    <div class="result-details">
                        <div class="result-row">
                            <span>Total Minutes</span>
                            <span>${minutes} mins</span>
                        </div>
                        <div class="result-row">
                            <span>Hours</span>
                            <span>${hours} hr(s)</span>
                        </div>
                        <div class="result-row">
                            <span>Remaining Minutes</span>
                            <span>${remMinutes} min(s)</span>
                        </div>
                    </div>
                </div>
            `;
        },
        code: `// Convert minutes into hours and minutes
function convertMinutes(totalMins) {
    const hours = Math.floor(totalMins / 60);
    const mins = totalMins % 60;
    
    return { hours, mins };
}`
    },
    {
        id: 4,
        title: "Marks & Percentage",
        desc: "Computes total marks, percentage, and grade for 5 subjects.",
        icon: "fa-graduation-cap",
        inputs: [
            { id: "t4-s1", label: "Subject 1 Marks", type: "number", placeholder: "0-100", defaultValue: 85, min: 0, max: 100 },
            { id: "t4-s2", label: "Subject 2 Marks", type: "number", placeholder: "0-100", defaultValue: 90, min: 0, max: 100 },
            { id: "t4-s3", label: "Subject 3 Marks", type: "number", placeholder: "0-100", defaultValue: 78, min: 0, max: 100 },
            { id: "t4-s4", label: "Subject 4 Marks", type: "number", placeholder: "0-100", defaultValue: 92, min: 0, max: 100 },
            { id: "t4-s5", label: "Subject 5 Marks", type: "number", placeholder: "0-100", defaultValue: 88, min: 0, max: 100 }
        ],
        calculate: () => {
            const marks = [1, 2, 3, 4, 5].map(i => parseFloat(document.getElementById(`t4-s${i}`).value) || 0);
            
            if (marks.some(m => m < 0 || m > 100)) {
                return `<div class="result-card status-negative"><p>Please enter marks between 0 and 100.</p></div>`;
            }
            
            const total = marks.reduce((a, b) => a + b, 0);
            const percentage = (total / 500) * 100;
            
            let grade = "F";
            let statusClass = "status-negative";
            if (percentage >= 90) { grade = "A+"; statusClass = "status-positive"; }
            else if (percentage >= 80) { grade = "A"; statusClass = "status-positive"; }
            else if (percentage >= 70) { grade = "B"; statusClass = "status-positive"; }
            else if (percentage >= 60) { grade = "C"; statusClass = "status-zero"; }
            else if (percentage >= 50) { grade = "D"; statusClass = "status-zero"; }
            else { grade = "F"; }
            
            return `
                <div class="result-card">
                    <div class="result-title">Result</div>
                    <div class="result-value">${percentage.toFixed(2)}%</div>
                    <div class="result-details">
                        <div class="result-row">
                            <span>Subject Marks</span>
                            <span>${marks.join(", ")}</span>
                        </div>
                        <div class="result-row">
                            <span>Total Marks</span>
                            <span>${total.toFixed(1)} / 500</span>
                        </div>
                        <div class="result-row">
                            <span>Grade</span>
                            <span class="status-pill ${statusClass}">${grade}</span>
                        </div>
                    </div>
                </div>
            `;
        },
        code: `// Calculate total marks and percentage of 5 subjects
function calculateMarks(marks) {
    const total = marks.reduce((sum, val) => sum + val, 0);
    const percentage = (total / (marks.length * 100)) * 100;
    
    return { total, percentage };
}`
    },
    {
        id: 5,
        title: "Number Status Checker",
        desc: "Determines if a number is positive, negative, or zero.",
        icon: "fa-magnifying-glass",
        inputs: [
            { id: "t5-num", label: "Number", type: "number", placeholder: "e.g. -4.5", defaultValue: -4.5 }
        ],
        calculate: () => {
            const num = parseFloat(document.getElementById("t5-num").value);
            if (isNaN(num)) {
                return `<div class="result-card status-negative"><p>Please enter a valid number.</p></div>`;
            }
            
            let resultText = "";
            let badgeClass = "";
            
            if (num > 0) {
                resultText = "Positive";
                badgeClass = "status-positive";
            } else if (num < 0) {
                resultText = "Negative";
                badgeClass = "status-negative";
            } else {
                resultText = "Zero";
                badgeClass = "status-zero";
            }
            
            return `
                <div class="result-card">
                    <div class="result-title">Number Status</div>
                    <div class="result-value">
                        <span class="status-pill ${badgeClass}" style="font-size: 1.25rem;">${resultText}</span>
                    </div>
                    <div class="result-details">
                        <div class="result-row">
                            <span>Value</span>
                            <span>${num}</span>
                        </div>
                    </div>
                </div>
            `;
        },
        code: `// Check whether a number is positive, negative, or zero
function checkNumber(num) {
    if (num > 0) {
        return "Positive";
    } else if (num < 0) {
        return "Negative";
    } else {
        return "Zero";
    }
}`
    },
    {
        id: 6,
        title: "Convert Age to Days",
        desc: "Converts age in years into days.",
        icon: "fa-calendar",
        inputs: [
            { id: "t6-age", label: "Age in Years", type: "number", placeholder: "e.g. 21", defaultValue: 21, min: 0 },
            { id: "t6-leap", label: "Account for Leap Years (365.25 days)", type: "checkbox", defaultValue: false }
        ],
        calculate: () => {
            const age = parseFloat(document.getElementById("t6-age").value) || 0;
            const useLeap = document.getElementById("t6-leap").checked;
            
            if (age < 0) {
                return `<div class="result-card status-negative"><p>Age cannot be negative.</p></div>`;
            }
            
            const multiplier = useLeap ? 365.25 : 365;
            const days = Math.floor(age * multiplier);
            
            return `
                <div class="result-card">
                    <div class="result-title">Age in Days</div>
                    <div class="result-value">${days.toLocaleString()} days</div>
                    <div class="result-details">
                        <div class="result-row">
                            <span>Age in Years</span>
                            <span>${age} years</span>
                        </div>
                        <div class="result-row">
                            <span>Multiplier</span>
                            <span>${multiplier} days/year</span>
                        </div>
                    </div>
                </div>
            `;
        },
        code: `// Convert age in years into days
function ageToDays(ageYears, includeLeap = false) {
    const multiplier = includeLeap ? 365.25 : 365;
    return Math.floor(ageYears * multiplier);
}`
    },
    {
        id: 7,
        title: "Square and Cube",
        desc: "Finds the square (x²) and cube (x³) of a number.",
        icon: "fa-superscript",
        inputs: [
            { id: "t7-num", label: "Number (x)", type: "number", placeholder: "e.g. 5", defaultValue: 5 }
        ],
        calculate: () => {
            const num = parseFloat(document.getElementById("t7-num").value) || 0;
            const square = num * num;
            const cube = num * num * num;
            
            return `
                <div class="result-card">
                    <div class="result-title">Calculations</div>
                    <div class="result-details">
                        <div class="result-row">
                            <span>Base Number (x)</span>
                            <span>${num}</span>
                        </div>
                        <div class="result-row">
                            <span>Square (x²)</span>
                            <span>${square}</span>
                        </div>
                        <div class="result-row">
                            <span>Cube (x³)</span>
                            <span>${cube}</span>
                        </div>
                    </div>
                </div>
            `;
        },
        code: `// Find the square and cube of a number
function getSquareAndCube(num) {
    const square = Math.pow(num, 2);
    const cube = Math.pow(num, 3);
    
    return { square, cube };
}`
    },
    {
        id: 8,
        title: "Electricity Bill",
        desc: "Calculates electricity bill for given units.",
        icon: "fa-bolt",
        inputs: [
            { id: "t8-units", label: "Units Consumed", type: "number", placeholder: "e.g. 350", defaultValue: 350, min: 0 }
        ],
        calculate: () => {
            const units = parseFloat(document.getElementById("t8-units").value) || 0;
            if (units < 0) return `<div class="result-card status-negative"><p>Units cannot be negative.</p></div>`;
            
            let bill = 0;
            
            if (units <= 100) {
                bill = units * 3.00;
            } else if (units <= 300) {
                bill = (100 * 3.00) + ((units - 100) * 4.50);
            } else if (units <= 500) {
                bill = (100 * 3.00) + (200 * 4.50) + ((units - 300) * 6.00);
            } else {
                bill = (100 * 3.00) + (200 * 4.50) + (200 * 6.00) + ((units - 500) * 8.00);
            }
            
            let surcharge = 0;
            if (units > 300) {
                surcharge = bill * 0.10;
            }
            
            const total = bill + surcharge;
            
            return `
                <div class="result-card">
                    <div class="result-title">Bill Details</div>
                    <div class="result-value">₹${total.toFixed(2)}</div>
                    <div class="result-details">
                        <div class="result-row">
                            <span>Units Consumed</span>
                            <span>${units}</span>
                        </div>
                        <div class="result-row">
                            <span>Base Charges</span>
                            <span>₹${bill.toFixed(2)}</span>
                        </div>
                        <div class="result-row">
                            <span>Surcharge (10% on >300 units)</span>
                            <span>₹${surcharge.toFixed(2)}</span>
                        </div>
                    </div>
                </div>
            `;
        },
        code: `// Calculate electricity bill for given units
function calculateElectricityBill(units) {
    let bill = 0;
    let surcharge = 0;
    
    if (units <= 100) {
        bill = units * 3.00;
    } else if (units <= 300) {
        bill = (100 * 3.00) + ((units - 100) * 4.50);
    } else if (units <= 500) {
        bill = (100 * 3.00) + (200 * 4.50) + ((units - 300) * 6.00);
    } else {
        bill = (100 * 3.00) + (200 * 4.50) + (200 * 6.00) + ((units - 500) * 8.00);
    }
    
    if (units > 300) {
        surcharge = bill * 0.10;
    }
    
    return bill + surcharge;
}`
    },
    {
        id: 9,
        title: "Rupees to Dollars",
        desc: "Converts rupees into dollars.",
        icon: "fa-dollar-sign",
        inputs: [
            { id: "t9-inr", label: "Amount in Rupees (₹)", type: "number", placeholder: "e.g. 5000", defaultValue: 5000, min: 0 },
            { id: "t9-rate", label: "Exchange Rate (1 USD to INR)", type: "number", placeholder: "e.g. 83.5", defaultValue: 83.5, min: 0.01 }
        ],
        calculate: () => {
            const inr = parseFloat(document.getElementById("t9-inr").value) || 0;
            const rate = parseFloat(document.getElementById("t9-rate").value) || 1;
            
            if (inr < 0 || rate <= 0) {
                return `<div class="result-card status-negative"><p>Please enter valid inputs.</p></div>`;
            }
            
            const usd = inr / rate;
            
            return `
                <div class="result-card">
                    <div class="result-title">Conversion</div>
                    <div class="result-value">$${usd.toFixed(2)} USD</div>
                    <div class="result-details">
                        <div class="result-row">
                            <span>Rupees (INR)</span>
                            <span>₹${inr.toFixed(2)}</span>
                        </div>
                        <div class="result-row">
                            <span>Exchange Rate</span>
                            <span>₹${rate.toFixed(2)} per USD</span>
                        </div>
                    </div>
                </div>
            `;
        },
        code: `// Convert rupees into dollars
function rupeesToDollars(rupees, rate) {
    if (rate <= 0) return 0;
    return rupees / rate;
}`
    },
    {
        id: 10,
        title: "Largest of Three Numbers",
        desc: "Finds the largest among three numbers using comparison operators.",
        icon: "fa-arrow-up-9-1",
        inputs: [
            { id: "t10-n1", label: "First Number (a)", type: "number", placeholder: "e.g. 15", defaultValue: 15 },
            { id: "t10-n2", label: "Second Number (b)", type: "number", placeholder: "e.g. 42", defaultValue: 42 },
            { id: "t10-n3", label: "Third Number (c)", type: "number", placeholder: "e.g. 27", defaultValue: 27 }
        ],
        calculate: () => {
            const a = parseFloat(document.getElementById("t10-n1").value) || 0;
            const b = parseFloat(document.getElementById("t10-n2").value) || 0;
            const c = parseFloat(document.getElementById("t10-n3").value) || 0;
            
            let largest;
            
            if (a >= b && a >= c) {
                largest = a;
            } else if (b >= a && b >= c) {
                largest = b;
            } else {
                largest = c;
            }
            
            return `
                <div class="result-card">
                    <div class="result-title">Result</div>
                    <div class="result-value">${largest}</div>
                    <div class="result-details">
                        <div class="result-row">
                            <span>Evaluated Numbers</span>
                            <span>[${a}, ${b}, ${c}]</span>
                        </div>
                    </div>
                </div>
            `;
        },
        code: `// Find the largest among three numbers using comparison operators
function findLargest(n1, n2, n3) {
    let largest;
    
    if (n1 >= n2 && n1 >= n3) {
        largest = n1;
    } else if (n2 >= n1 && n2 >= n3) {
        largest = n2;
    } else {
        largest = n3;
    }
    
    return largest;
}`
    }
];

// Current State
let activeTaskId = 1;

// DOM Elements
const navList = document.getElementById("nav-list");
const mainHeaderTitle = document.getElementById("mainHeaderTitle");
const taskDescription = document.getElementById("taskDescription");
const formInputsContainer = document.getElementById("formInputsContainer");
const calculateBtn = document.getElementById("calculateBtn");
const resultContainer = document.getElementById("resultContainer");
const codeBlock = document.getElementById("codeBlock");
const copyCodeBtn = document.getElementById("copyCodeBtn");
const copyToast = document.getElementById("copyToast");
const sidebar = document.getElementById("sidebar");
const hamburgerMenu = document.getElementById("hamburgerMenu");
const mobileCloseBtn = document.getElementById("mobileCloseBtn");

// Client-side regex-based Syntax Highlighter (Simple Light Highlights)
function highlightCode(code) {
    let escaped = code
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;");
    
    // Highlights double line comments
    escaped = escaped.replace(/(\/\/.*$)/gm, '<span class="hljs-comment">$1</span>');
    
    // Highlights strings
    escaped = escaped.replace(/(["'])(.*?)\1/g, '<span class="hljs-string">$1$2$1</span>');
    
    // Highlights numbers
    escaped = escaped.replace(/\b(\d+(?:\.\d+)?)\b/g, '<span class="hljs-number">$1</span>');
    
    // Highlights keywords
    const keywords = [
        'return', 'if', 'else', 'const', 'let', 'var', 'function', 'Math', 'pow', 'reduce', 'floor', 'log', 'console'
    ];
    const kwRegex = new RegExp(`\\b(${keywords.join('|')})\\b`, 'g');
    escaped = escaped.replace(kwRegex, '<span class="hljs-keyword">$1</span>');
    
    // Highlights specific operators
    escaped = escaped.replace(/(&amp;&amp;|==|&gt;=|&lt;=|\+|-|\*|\/)/g, '<span class="hljs-operator">$1</span>');

    return escaped;
}

// Render dynamic forms
function renderForm(task) {
    formInputsContainer.innerHTML = "";
    
    task.inputs.forEach(input => {
        const formGroup = document.createElement("div");
        formGroup.className = "form-group";
        
        if (input.type === "checkbox") {
            formGroup.className = "form-group toggle-group";
            formGroup.innerHTML = `
                <label for="${input.id}">${input.label}</label>
                <label class="toggle-switch">
                    <input type="checkbox" id="${input.id}" ${input.defaultValue ? 'checked' : ''}>
                    <span class="slider"></span>
                </label>
            `;
        } else {
            formGroup.innerHTML = `
                <label for="${input.id}">${input.label}</label>
                <input 
                    type="${input.type}" 
                    id="${input.id}" 
                    class="form-control" 
                    placeholder="${input.placeholder || ''}" 
                    value="${input.defaultValue !== undefined ? input.defaultValue : ''}"
                    ${input.min !== undefined ? `min="${input.min}"` : ''}
                    ${input.max !== undefined ? `max="${input.max}"` : ''}
                    ${input.step !== undefined ? `step="${input.step}"` : ''}
                    required
                >
            `;
        }
        formInputsContainer.appendChild(formGroup);
    });
}

// Display the JavaScript code snippet
function renderCode(task) {
    codeBlock.innerHTML = highlightCode(task.code);
}

// Load a specific task
function loadTask(taskId) {
    const task = tasks.find(t => t.id === taskId);
    if (!task) return;
    
    activeTaskId = taskId;
    
    mainHeaderTitle.textContent = task.title;
    taskDescription.textContent = task.desc;
    
    renderForm(task);
    renderCode(task);
    
    // Reset output display placeholder
    resultContainer.innerHTML = `
        <div class="result-placeholder">
            <p>Enter inputs and click Calculate to see results.</p>
        </div>
    `;
    
    // Update sidebar nav buttons
    const buttons = document.querySelectorAll(".nav-item-btn");
    buttons.forEach(btn => {
        if (parseInt(btn.getAttribute("data-id")) === taskId) {
            btn.classList.add("active");
        } else {
            btn.classList.remove("active");
        }
    });

    runCalculation();
}

// Run calculator logic
function runCalculation() {
    const task = tasks.find(t => t.id === activeTaskId);
    if (!task) return;
    
    const resultHTML = task.calculate();
    resultContainer.innerHTML = resultHTML;
}

// Generate navigation dynamically
function generateNavigation() {
    navList.innerHTML = "";
    
    tasks.forEach(task => {
        const li = document.createElement("li");
        li.innerHTML = `
            <button class="nav-item-btn ${task.id === activeTaskId ? 'active' : ''}" data-id="${task.id}">
                <span class="nav-index">${task.id}</span>
                <span style="display:flex; align-items:center; gap:0.5rem; flex:1;">
                    <i class="fa-solid ${task.icon}" style="font-size:0.8rem; opacity:0.8;"></i>
                    <span>${task.title}</span>
                </span>
            </button>
        `;
        navList.appendChild(li);
    });
    
    // Attach click events
    document.querySelectorAll(".nav-item-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            const id = parseInt(btn.getAttribute("data-id"));
            loadTask(id);
            sidebar.classList.remove("open");
        });
    });
}

// Bind UI event listeners
function bindEvents() {
    // Form calculation trigger
    document.getElementById("calculator-form").addEventListener("submit", (e) => {
        e.preventDefault();
        runCalculation();
    });
    
    // Copy Code logic
    copyCodeBtn.addEventListener("click", () => {
        const task = tasks.find(t => t.id === activeTaskId);
        if (!task) return;
        
        navigator.clipboard.writeText(task.code).then(() => {
            copyToast.classList.add("show");
            setTimeout(() => {
                copyToast.classList.remove("show");
            }, 2000);
        }).catch(err => {
            console.error("Copy failed: ", err);
        });
    });

    // Mobile navigation controls
    hamburgerMenu.addEventListener("click", () => {
        sidebar.classList.add("open");
    });
    
    mobileCloseBtn.addEventListener("click", () => {
        sidebar.classList.remove("open");
    });
}

// Core Initialization
document.addEventListener("DOMContentLoaded", () => {
    generateNavigation();
    bindEvents();
    loadTask(1);
});
