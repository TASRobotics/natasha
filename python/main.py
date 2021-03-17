import socketio

# standard Python
sio = socketio.Client()


@sio.event
def connect():
    print("I'm connected!")


@sio.event
def connect_error():
    print("The connection failed!")


@sio.event
def disconnect():
    print("I'm disconnected!")


sio.connect('http://localhost:5000', headers={"type": "python"})

while True:
    message = input("enter message: ")
    sio.emit("message", message)
