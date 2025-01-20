# cryptic-chatroom
 
# Cryptic Chatroom

Welcome to **Cryptic Chatroom**, a real-time chat application designed to enable anonymous communication between users. Built with Node.js, WebSocket, and vanilla JavaScript, this application is lightweight, user-friendly, and perfect for quick chats.

## Features

- **Real-time Messaging:** Chat with others in real-time without refreshing the page.
- **Anonymous Communication:** No registration required; join the chat and start talking.
- **Responsive Design:** A clean and responsive UI, ensuring compatibility across devices.
- **Local Hosting:** Run the chatroom locally on your computer.

## Technologies Used

- **Backend:** Node.js, WebSocket
- **Frontend:** HTML, CSS, JavaScript
- **Styling:** Responsive layout using CSS
- **WebSocket Library:** Real-time communication

## Installation and Setup

Follow these steps to get the project up and running on your local machine:

### Prerequisites
- Install [Node.js](https://nodejs.org/) (v14+ recommended)

### Steps
1. Clone the repository:
    ```bash
    git clone https://github.com/AyanaAlesha/cryptic-chatroom.git
    ```
2. Navigate to the project directory:
    ```bash
    cd cryptic-chatroom
    ```
3. Install dependencies:
    ```bash
    npm install
    ```
4. Start the server:
    ```bash
    node server.js
    ```
5. Open your browser and go to:
    ```
    http://localhost:3000
    ```

## Usage

1. Open the application in your browser.
2. Enter the chatroom and type a message in the input box.
3. Click "Send" to send your message and see it appear in the chatbox.
4. Messages will be visible to all users connected to the chatroom.

## Folder Structure

```plaintext
cryptic-chatroom/
├── public/
│   ├── index.html        # Frontend HTML file
│   ├── styles.css        # Styling for the chatroom
│   └── script.js         # Client-side JavaScript
├── server.js             # Backend server with WebSocket integration
├── package.json          # Project dependencies and metadata
└── README.md             # Project documentation
