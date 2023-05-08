from flask import Flask,request,jsonify
import sqlite3 as sq
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# app=Flask(__name__)


# conn=sq.connect("auswitzh.db")
# cur=conn.cursor()

# cur.execute("""CREATE TABLE IF NOT EXISTS songs (
#     id TEXT,
#     song TEXT,
#     time TEXT,
#     img TEXT
# )""")

# cur.execute("INSERT INTO songs VALUES (5,'helloi','proton.com','img.png')")
# conn.commit()
# conn.close()



@app.route("/song",methods=['POST','GET'])
def hello():
    conn=sq.connect("auswitzh.db")
    cur=conn.cursor()

    if request.method=='POST':
        song_data = request.get_json()

        # varid=request.form["id"]
        varsong=song_data['song']
        vartime=song_data['time']
        varimg=song_data['img']

        varid=varsong+vartime

        varid=varid.replace("?","")

        cur.execute("INSERT INTO songs (id, song, time, img) SELECT ?, ?, ?, ? WHERE NOT EXISTS (SELECT 1 FROM songs WHERE id = ?)",(varid,varsong,vartime,varimg,varid))

#         INSERT INTO your_table_name (id, column1, column2, ...)
# SELECT 'your_id_value', 'value1', 'value2', ...
# WHERE NOT EXISTS (
#   SELECT 1 FROM your_table_name WHERE id = 'your_id_value'
# );
        conn.commit()
        return "success"

    if request.method=='GET':
        var=cur.execute("SELECT * FROM songs")
        form=('id','song','time','img')
        tempdict={}
        templist=[]
        for a in var.fetchall():
            tempdict={}
            con=0
            for b in a:
                tempdict[form[con]]=b
                con+=1
            templist.append(tempdict)
        return jsonify(templist)


@app.route("/delete/<name>",methods=['DELETE'])
def home(name):
    conn=sq.connect("auswitzh.db")
    cur=conn.cursor()

    print(name)
    # if "'" in name:
    name = name.replace("'", "''")
    name = name.replace("?", "")
    print(name)

    if request.method=='DELETE':
        cur.execute(f"DELETE FROM songs WHERE id='{name}'")
        conn.commit()
        return f"Deleted {name} succesfully!"



if __name__=="__main__":
    app.run(debug=True)

