// content.js

const processedEmails = new Set();
const internshipKeywords = ["internship", "apply", "opportunity", "training", "summer intern","intern", "job offer", "position", "vacancy", "recruitment", "hiring", "career fair"];

let lastUrl = location.href;

// Simple hash function
function hashString(str) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        hash = (hash << 5) - hash + str.charCodeAt(i);
        hash |= 0;
    }
    return hash;
}

// Check internship keywords safely
function isInternshipEmail(emailText) {
    if (!emailText) return false;
    const text = emailText.toLowerCase();
    return internshipKeywords.some(k => text.includes(k));
}

// Create badge
function showBadge(emailEl, prediction, confidence) {
    if (emailEl.querySelector(".internship-badge")) return;

    const badge = document.createElement("div");
    badge.className = "internship-badge";
    badge.style.padding = "8px 12px";
    badge.style.borderRadius = "6px";
    badge.style.fontWeight = "bold";
    badge.style.marginBottom = "12px";
    badge.style.display = "inline-block";

    if (prediction === "Fraudulent Email") {
        badge.style.backgroundColor = "#ff4b2b";
        badge.style.color = "#fff";
        badge.innerText = `⚠ Fraudulent Internship (Confidence: ${confidence}%)`;
    } else {
        badge.style.backgroundColor = "#2e7d32";
        badge.style.color = "#fff";
        badge.innerText = `✅ Legitimate Internship (Confidence: ${confidence}%)`;
    }

    emailEl.prepend(badge);
}

// Main email check
function checkEmail() {
    const emailEl = document.querySelector("div.a3s");
    if (!emailEl) return;

    const emailText = emailEl.innerText?.trim();
    if (!emailText) return;

    if (!isInternshipEmail(emailText)) return;

    const emailHash = hashString(emailText);
    if (processedEmails.has(emailHash)) return;

    fetch("http://127.0.0.1:5000/predict", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email_text: emailText })
    })
        .then(res => res.json())
        .then(data => {
            processedEmails.add(emailHash);
            showBadge(emailEl, data.prediction, data.confidence);
        })
        .catch(err => console.error("Prediction error:", err));
}

// Detect URL change instead of watching entire DOM
const observer = new MutationObserver(() => {
    if (location.href !== lastUrl) {
        lastUrl = location.href;
        setTimeout(checkEmail, 1000); // wait for Gmail to load email
    }
});

observer.observe(document.body, { childList: true, subtree: true });