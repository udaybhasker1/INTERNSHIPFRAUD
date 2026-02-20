document.getElementById("checkBtn").addEventListener("click", () => {
    const email_text = document.getElementById("email_text").value.trim();
    if(!email_text){
        alert("Please enter email content!");
        return;
    }

    fetch("http://127.0.0.1:5000/predict", {  // local Flask backend
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email_text })
    })
    .then(res => res.json())
    .then(data => {
        const resultDiv = document.getElementById("result");
        if(data.prediction === "Fraudulent Email"){
            resultDiv.style.background = "linear-gradient(135deg, #ff416c, #ff4b2b)";
        } else {
            resultDiv.style.background = "linear-gradient(135deg, #56ab2f, #a8e063)";
        }
        resultDiv.innerHTML = `${data.prediction} <br> Confidence: ${data.confidence}%`;
        resultDiv.style.color = "white";
        resultDiv.style.padding = "10px";
        resultDiv.style.borderRadius = "10px";
        resultDiv.style.marginTop = "10px";
    })
    .catch(err => console.error("Error:", err));
});