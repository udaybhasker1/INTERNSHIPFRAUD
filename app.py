from flask import Flask, request, jsonify
from flask_cors import CORS
import random  # Replace with your ML model later

app = Flask(__name__)
CORS(app)

# Allow requests only from your Chrome extension
CORS(app, origins=["chrome-extension://pkhagmeddneffagekclejglndmkpefke"])  # replace with your extension ID

def predict_email(email_text):
    # Replace this with your ML model
    prediction = random.choice(['Fraudulent Email', 'Legitimate Email'])
    confidence = random.randint(70, 99)
    if prediction == 'Fraudulent Email':
        confidence = random.randint(80, 99)  # Higher confidence for fraudulent emails
    else:
        confidence = random.randint(70, 85)  # Lower confidence for legitimate emails
    return prediction, confidence

@app.route("/predict", methods=["POST"])
def predict():
    data = request.get_json()
    email_text = data.get("email_text", "")
    if not email_text:
        return jsonify({"error": "Email text is required"}), 400

    prediction, confidence = predict_email(email_text)
    return jsonify({
        "prediction": prediction,
        "confidence": confidence
    })

if __name__ == "__main__":
    # For testing locally, HTTP is fine
    app.run(debug=True)
    # For production: use HTTPS (ngrok or deploy on cloud with SSL)