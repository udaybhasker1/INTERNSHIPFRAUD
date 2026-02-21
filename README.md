# 📧 ML-Based Internship Fraud detection

## 🚀 Project Overview
This project is an end-to-end Machine Learning system that detects spam/fraudulent emails using Natural Language Processing (NLP) techniques. 

The trained model is deployed using a Flask API and integrated with a Chrome Extension to classify emails in real time.

---

## 🧠 Machine Learning Concepts Used

- Supervised Learning
- Binary Classification
- TF-IDF (Term Frequency–Inverse Document Frequency)
- Logistic Regression
- Train-Test Split
- Model Evaluation (Accuracy)
- Model Serialization using Joblib

---

## 🛠 Tech Stack

- Python
- Scikit-learn
- Pandas
- Flask
- Joblib
- JavaScript (Chrome Extension)
- HTML/CSS

---

## 📊 Model Details

- Algorithm: Logistic Regression
- Feature Extraction: TF-IDF Vectorizer
- Dataset: Spam Email Dataset
- Accuracy: ~80–90%

The model was trained on labeled spam/ham email data and evaluated using a train-test split approach.

---

## 🔧 Project Structure

```
spam-email-detector-ml/
│
├── app.py                 # Flask backend API
├── train_model.py         # Model training script
├── model.pkl              # Saved trained model
├── vectorizer.pkl         # Saved TF-IDF vectorizer
├── emails.csv             # Dataset
├── requirements.txt       # Python dependencies
└── README.md              # Project documentation
```

---

## ⚙️ How to Run the Project

### 1️⃣ Install Dependencies

```
pip install -r requirements.txt
```

### 2️⃣ Train the Model

```
python train_model.py
```

### 3️⃣ Start the Flask Server

```
python app.py
```

Server runs at:
```
http://127.0.0.1:5000
```

---

## 🌐 Chrome Extension Integration

The trained model is integrated with a Chrome Extension that:

- Extracts email content
- Sends text to Flask API
- Displays prediction result (Spam / Not Spam)
- Shows confidence score

---

## 📈 Sample API Response

```json
{
  "prediction": "Fraudulent Email",
  "confidence": 87.45
}
```

---

## 🎯 Key Highlights

- Built full ML pipeline (Training → Evaluation → Deployment)
- Converted text to numerical features using TF-IDF
- Deployed model using Flask REST API
- Integrated backend with real-time Chrome Extension
- Implemented model persistence using Joblib

---

## 🔮 Future Improvements

- Add Precision, Recall, F1-score evaluation
- Compare with Naive Bayes
- Add ROC-AUC analysis
- Deploy on cloud (Render / AWS)
- Add database logging

---

## 👨‍💻 Author

H A UDAY BHASKER
GitHub: https://github.com/udaybhasker1

---

⭐ If you found this project interesting, feel free to star the repository!
