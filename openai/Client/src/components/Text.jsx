// App.js
import React, { useState } from "react";
import axios from "axios";

function Text() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { text: input, sender: "user" };
    setMessages((prev) => [...prev, userMessage]);

    try {
      const response = await axios.post("http://localhost:5000/api/chat", {
        message: input,
      });

      const aiMessage = { text: response.data.reply.content, sender: "ai" };
      setMessages((prev) => [...prev, aiMessage]);
    } catch (error) {
      console.error("Error sending message:", error);
      setMessages((prev) => [
        ...prev,
        { text: "Error: Unable to get a response", sender: "ai" },
      ]);
    }

    setInput("");
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>AI Chat Interface</h1>
      <div style={styles.chatBox}>
        {messages.map((msg, index) => (
          <div
            key={index}
            style={{
              ...styles.message,
              ...(msg.sender === "user"
                ? styles.userMessage
                : styles.aiMessage),
            }}
          >
            {msg.text}
          </div>
        ))}
      </div>
      <div style={styles.inputContainer}>
        <input
          type="text"
          style={styles.input}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
        />
        <button style={styles.button} onClick={handleSend}>
          Send
        </button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
    fontFamily: "Arial, sans-serif",
  },
  header: {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "16px",
  },
  chatBox: {
    width: "400px",
    height: "400px",
    border: "1px solid #ddd",
    borderRadius: "8px",
    padding: "16px",
    overflowY: "auto",
    marginBottom: "16px",
    backgroundColor: "#f9f9f9",
  },
  message: {
    padding: "8px",
    borderRadius: "6px",
    margin: "4px 0",
    maxWidth: "75%",
    lineHeight: "1.4",
  },
  userMessage: {
    backgroundColor: "#000000",
    alignSelf: "flex-end",
    textAlign: "right",
  },
  aiMessage: {
    backgroundColor: "#000000",
    alignSelf: "flex-start",
    textAlign: "left",
  },
  inputContainer: {
    display: "flex",
    width: "400px",
  },
  input: {
    flex: "1",
    padding: "8px",
    borderRadius: "4px 0 0 4px",
    border: "1px solid #ddd",
    fontSize: "16px",
  },
  button: {
    padding: "8px 16px",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "0 4px 4px 0",
    cursor: "pointer",
    fontSize: "16px",
  },
};

export default Text;
