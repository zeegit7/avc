from flask import Flask,jsonify,request
from flask_cors import CORS
from pytube import YouTube 
import sample


#setting app varibale as an instance of the flask class
#__name__ depicts name of the module
app = Flask(__name__)

#enabling cross origin requests
CORS(app, supports_credentials=True)

@app.route("/", methods=["POST"])
def summarize_video():
    try:
        req_data = request.get_json()
        url = req_data['url']
        title = req_data['title']
        description = req_data['description']
        print(url)
        print(title)
        print(description)
        YouTube(url).streams.first().download('Videos',filename="{}".format(title))
        print(sample.add(3,2))
        return jsonify("POST success"),204
    except Exception as err:
        print(str(err))
        return jsonify('POST failed'),500


if __name__ == '__name__':
	app.run(debug=True)