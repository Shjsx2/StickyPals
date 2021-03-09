const e = require('express');
const admin = require('firebase-admin')
const fs = require('fs');
const { resolve } = require('path');

var serviceAccount = require('./db.json')

admin.initializeApp({credential: admin.credential.cert(serviceAccount), databaseURL: "https://cogs120-aa561-default-rtdb.firebaseio.com"})
const db = admin.database()

function addNote(note){
    var ref = db.ref('notes')
    var newRef = ref.push();
    var id = newRef.key
    return new Promise((resolve, reject) =>{
        newRef.set(note).then(()=>resolve(id)).catch(e => reject(e))
    })
}

function getNote(id){
    var ref = db.ref('notes/'+id)
    return new Promise((resolve, reject) => {
        ref.once('value').then(function(snapshot){
            if(snapshot.exists()){
                resolve(snapshot.val())
            } else{
                reject("ID DNE")
            }
        }).catch(e => {
            reject(e)
        })
    })
}

function updateNote(id, notes, title){
    var ref = db.ref('notes/'+id)
    return new Promise((resolve, reject) => {
        ref.set({"title": title, "note":notes}).then(res => resolve(res)).catch(e => reject(e))
    })
}

module.exports = {db: db, addNote: addNote, getNote: getNote, updateNote: updateNote}