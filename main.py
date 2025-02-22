from flask import Flask, render_template, request, jsonify
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  


SMTP_SERVER = "smtp.gmail.com" 
SMTP_PORT = 587  
EMAIL_LOGIN = "почта"  
EMAIL_PASSWORD = "пароль"  

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

@app.route("/")
def index():
    return render_template("index.html")

@app.route('/test')
def test():
    return render_template('test.html')

if __name__ == "__main__":
    app.run(debug=True)
