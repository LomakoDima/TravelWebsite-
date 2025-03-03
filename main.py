from flask import Flask, render_template, request, jsonify
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from flask_cors import CORS
import os

app = Flask(__name__)
CORS(app)  


SMTP_SERVER = "smtp.gmail.com" 
SMTP_PORT = 587  
EMAIL_LOGIN = "почта"  
EMAIL_PASSWORD = "пароль"  

BASE_DIR = os.path.dirname(os.path.abspath(__file__))  # Получаем путь к папке с файлом скрипта
REVIEWS_FILE = os.path.join(BASE_DIR, "data", "reviews.txt")  # Сохраняем в папке "data"

# Убедимся, что папка "data" существует
if not os.path.exists(os.path.join(BASE_DIR, "data")):
    os.makedirs(os.path.join(BASE_DIR, "data"))


@app.route("/send_email", methods=["POST"])
def send_email():
    try:
        name = request.form.get("name")
        email = request.form.get("email")
        message = request.form.get("message")

        if not name or not email or not message:
            return jsonify({"status": "error", "message": "Все поля обязательны!"}), 400

        
        msg = MIMEMultipart()
        msg["From"] = EMAIL_LOGIN
        msg["To"] = "почта" 
        msg["Subject"] = "Новое сообщение с сайта"

        body = f"Имя: {name}\nEmail: {email}\n\nСообщение:\n{message}"
        msg.attach(MIMEText(body, "plain"))

        
        server = smtplib.SMTP(SMTP_SERVER, SMTP_PORT)
        server.starttls()
        server.login(EMAIL_LOGIN, EMAIL_PASSWORD)
        server.sendmail(EMAIL_LOGIN, "почта", msg.as_string())
        server.quit()

        return jsonify({"status": "success", "message": "Сообщение отправлено успешно!"})

    except Exception as e:
        return jsonify({"status": "error", "message": str(e)}), 500

@app.route("/book", methods=["POST"])
def book():
    try:
        name = request.form.get("name")
        phone = request.form.get("phone")
       

        if not all([name, phone]):
            return jsonify({"status": "error", "message": "Все поля обязательны!"}), 400

        # Здесь можно добавить сохранение в базу данных или файл
        with open("bookings.txt", "a", encoding="utf-8") as f:
            f.write(f"{name}, {phone}\n")

        return jsonify({"status": "success", "message": "Бронирование успешно отправлено!"})
    except Exception as e:
        return jsonify({"status": "error", "message": str(e)}), 500
    

@app.route("/submit_review", methods=["POST"])
def submit_review():
    try:
        name = request.form.get("name")
        review_text = request.form.get("review")
        rating = request.form.get("rating")

        if not all([name, review_text, rating]):
            return jsonify({"status": "error", "message": "Все поля обязательны!"}), 400

        # Сохранение в файл
        with open(REVIEWS_FILE, "a", encoding="utf-8") as f:
            f.write(f"{name}|{rating}|{review_text}\n")

        return jsonify({"status": "success", "message": "Отзыв успешно отправлен!"})

    except Exception as e:
        return jsonify({"status": "error", "message": str(e)}), 500

@app.route("/get_reviews", methods=["GET"])
def get_reviews():
    try:
        reviews = []
        with open(REVIEWS_FILE, "r", encoding="utf-8") as f:
            for line in f:
                parts = line.strip().split("|")
                if len(parts) == 3:
                    reviews.append({"name": parts[0], "rating": parts[1], "review": parts[2]})

        return jsonify({"status": "success", "reviews": reviews})

    except Exception as e:
        return jsonify({"status": "error", "message": str(e)}), 500


@app.route("/")
def index():
    return render_template("index.html")

@app.route('/test')
def test():
    return render_template('test.html')

if __name__ == "__main__":
    app.run(debug=True)