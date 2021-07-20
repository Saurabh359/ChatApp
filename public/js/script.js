const socket= io()
const chatWindow= document.getElementById("chatBox")
        
socket.on('messageRecived', (msg)=>{
    let mgline= document.createElement('div')
    let currMsg= document.createElement('p')
    currMsg.textContent= msg
    currMsg.classList.add("recievedMsg")
    mgline.appendChild(currMsg)
    mgline.classList.add("msgLine")
    chatWindow.appendChild(mgline)
    chatWindow.scrollTop = chatWindow.scrollHeight
})

document.querySelector('#sendForm').addEventListener('submit', (e)=>{
    e.preventDefault()

    const msg= document.getElementById("message")

    if(msg.value!=""){
        let mgline= document.createElement('div')
        let currMsg= document.createElement('p')

        currMsg.textContent= msg.value
        currMsg.classList.add("sendMsg")
        mgline.appendChild(currMsg)
        
        mgline.classList.add("msgLine")
        chatWindow.appendChild(mgline)

        socket.emit("sendMessage",msg.value)
        msg.value =""
        chatWindow.scrollTop = chatWindow.scrollHeight
    }
})

