from flask import Flask, request, jsonify, session
import os
from . import create_app
import flask_sqlalchemy



db = flask_sqlalchemy.SQLAlchemy()

app = create_app()


@app.route('/hello')
def hola():
    return "<p>PID" + str(os.getpid()) + "</p"




class Productos(db.Model):
    _tablename_= 'producto'
    id= db.Column(db.Integer, primary_key=True)
    nombre= db.Column(db.Text)
    precio= db.Column(db.Integer)

    def __init__(self, nombre, precio):
        self.nombre= nombre
        self.precio= precio

@app.route("/andru", methods = ["POST"])
def hello_world():
    hola = request.json
    name = hola['name']
    price = hola['price']
    print("EL nombre es: " + name + ", El precio es:"+ str(price))
    coso= Productos(name, price)
    db.session.add(coso)
    db.session.commit()
