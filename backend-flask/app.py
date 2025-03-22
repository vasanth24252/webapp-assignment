from flask import Flask, jsonify

app = Flask(__name__)

@app.route('/')
def home():
    return jsonify({"message": "I like digitalocean!"})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
