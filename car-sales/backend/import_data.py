import pandas as pd
from pymongo import MongoClient

# חיבור ל-MongoDB
client = MongoClient("mongodb://localhost:27017/")
db = client["car_sales"]  # יצירת מסד הנתונים
collection = db["cars"]  # יצירת האוסף

# קריאת קובץ ה-CSV
file_path = "C:/Users/omar/devops-car-sales/car-sales/backend/data/cars.csv"
df = pd.read_csv(file_path)

# המרת הנתונים לרשימת מילונים והכנסת הנתונים למסד הנתונים
data = df.to_dict(orient="records")
collection.insert_many(data)

print("✅ הנתונים הוכנסו בהצלחה!")
