from flask import Flask, render_template, request, jsonify
import hashlib

app = Flask(__name__)

app.config['TEMPLATES_AUTO_RELOAD'] = True

@app.route('/api/hash', methods=['POST'])
def funcaopython():
    file = request.files['selectedFile']
    sfile = file.read()
    m = hashlib.sha256()
    m.update(sfile)
    return jsonify({
        "hash": m.hexdigest()
    })
    

@app.route('/')

def home():
    return render_template('index.html')

if (__name__) == '__main__':
    app.run(host='0.0.0.0', port=5000)