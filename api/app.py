from flask import Flask
from temple_requests import get_academic_programs

app = Flask(__name__)

@app.route("/api/getPrograms")
def get_academic_programs_wrapper():
    return get_academic_programs()

if __name__ == "__main__":
    app.run(debug=True)


