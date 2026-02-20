import os
print(os.listdir())


import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import accuracy_score
import joblib

# 1️⃣ Load Dataset
data = pd.read_csv("emails.csv")

print("Columns:", data.columns)

# 2️⃣ Select text and label columns
X = data['text']      # change if your column name is different
y = data['spam']     # change if different

# 3️⃣ Convert Text → Numbers
vectorizer = TfidfVectorizer(stop_words='english')
X_vectorized = vectorizer.fit_transform(X)

# 4️⃣ Split Data
X_train, X_test, y_train, y_test = train_test_split(
    X_vectorized, y, test_size=0.2, random_state=42
)

# 5️⃣ Train Model
model = LogisticRegression()
model.fit(X_train, y_train)

# 6️⃣ Test Model
y_pred = model.predict(X_test)
print("Accuracy:", accuracy_score(y_test, y_pred))

# 7️⃣ Save Model
joblib.dump(model, "model.pkl")
joblib.dump(vectorizer, "vectorizer.pkl")

print("Model Saved Successfully!")


sample = ["We offer 23k stipend internship without interview. Pay registration fee immediately."]
sample_vector = vectorizer.transform(sample)
prediction = model.predict(sample_vector)
if prediction[0] == 1:
    print("The email is classified as: SPAM")
else:    print("The email is classified as: NOT SPAM")
print("Sample Prediction:", prediction)
print(data['spam'].value_counts())

