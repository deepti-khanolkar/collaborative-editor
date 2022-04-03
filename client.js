//import { io } from "socket.io-client"

const { request } = require("http")

const socket = io('http://localhost:3000')
//import request from 'superagent'
//const baseUrl = '/api/v1/user'

function getEl(id) {
    return document.getElementById(id)
}

const editor = getEl("editor")
//const button = document.getElementById("button")

editor.addEventListener("keyup", (evt) => {
    const text = editor.value
    socket.send(text)
})

socket.on('message', (data) => {
    editor.value = data
})

// button.addEventListener("click", (evt) => {
//   //request.post(baseUrl)
// }) 