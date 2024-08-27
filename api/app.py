from flask import Flask, jsonify
import requests
from bs4 import BeautifulSoup

app = Flask(__name__)

@app.route("/api/app")
def get_academic_programs():
    program_list = []
    req = requests.get('https://bulletin.temple.edu/academic-programs/')
    soup = BeautifulSoup(req.content, 'lxml')

    # Find the body containing all the programs/degrees
    main_body = soup.find('tbody', class_='fixedTH', id='degree_body')

    # Iterate through each program in the body
    for program_element in main_body.find_all('tr'):
        program_children = program_element.find_all('td') # Children contain program name and degree types
        program_name =  program_children[0].get_text(strip=True)
        program_list.append(program_name)

    return jsonify(program_list)

if __name__ == "__main__":
    app.run(debug=True)
