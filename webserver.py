import requests
import os

from flask import Flask, request, render_template
app = Flask(__name__,static_url_path="/static")



@app.route('/index', methods=['GET','POST'])
def index_page():
    return render_template("Homepage.html")
    #
@app.route('/about', methods=['GET','POST'])
def about_page():
    return render_template("Aboutus.html")
    #

#
@app.route('/blog/8-experiments-in-motivation', methods=['GET','POST'])
def blog1_page():
    return render_template("8-Experiments-in-Motivation.html")
#
@app.route('/blog/a-mindful-shift-of-focus', methods=['GET','POST'])
def blog2_page():
    return render_template("A-Mindful-Shift-of-Focus.html")
#
@app.route('/blog/how-to-develop-an-awesome-sense-of-direction', methods=['GET','POST'])
def blog3_page():
    return render_template("How-to-Develop-an-Awesome-Sense-of-Direction.html")
#
@app.route('/blog/training-to-be-a-good-writer', methods=['GET','POST'])
def blog4_page():
    return render_template("Training-to-Be-a-Good-Writer.html")
#
@app.route('/blog/what-productivity-systems-wont-solve', methods=['GET','POST'])
def blog5_page():
    return render_template("What-Productivity-Systems-Won't-Solve.html")


@app.route('/contact', methods=['GET'])
def contact_page():
    return render_template("Contactus.html", notifications=[])

@app.route('/contact', methods=['POST'])
def send_email():
    name = request.form.get("Name")
    message = request.form.get("Message")
    subject = request.form.get("Subject")
    notifications = []

    data = {
        'from': os.environ["INFO253_MAILGUN_FROM_EMAIL"],
        'to': os.environ["INFO253_MAILGUN_TO_EMAIL"],
        'name': name,
        'subject': subject,
        'text': message,
    }
    auth = (os.environ["INFO253_MAILGUN_USER"], os.environ["INFO253_MAILGUN_PASSWORD"])

    r = requests.post(
        'https://api.mailgun.net/v3/sandbox1842acc8d5c14d05b861900f936933ca.mailgun.org/messages'.format(os.environ["INFO253_MAILGUN_DOMAIN"]),
        auth=auth,
        data=data)
    print(r.status_code)
    if r.status_code == requests.codes.ok:
        notifications.append("Hi "+ name + ", " + "your email was sent")
    else:
        notifications.append("You email was not sent. Please try again later")

    return render_template("Contactus.html", notifications=notifications)






