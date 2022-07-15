import React, { useEffect, useState } from "react";
import { Button, FormControl, Input } from "@mui/material";
import Message from "./Message";
import db from "./firebase";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import FlipMove from "react-flip-move";
import "./App.css";
import SendIcon from "@mui/icons-material/Send";

export default function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    { username: "yk1", message: "hey1" },
    { username: "yk2", message: "hey2" },
  ]);
  const [userName, setUserName] = useState("");

  useEffect(() => {
    setUserName(prompt("please enter your username"));
  }, []);

  useEffect(() => {
    db.collection("messages")
      .orderBy("timestamp", "desc")
      .onSnapshot((snap) => {
        setMessages(
          snap.docs.map((doc) => ({ id: doc.id, message: doc.data() }))
        );
      });
  }, []);
  function sendMessage(e) {
    e.preventDefault();
    db.collection("messages").add({
      username: userName,
      message: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setInput("");
  }

  return (
    <div className="App">
      <img
        style={{ width: "100px" }}
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Facebook_Messenger_logo_2020.svg/2048px-Facebook_Messenger_logo_2020.svg.png"
        alt=""
      />
      <h1>Welcome To Messenger</h1>
      <h2>Hello {userName} :D</h2>
      <form action="" className="app-form ">
        <FormControl className="app-formcontrol">
          <Input
            className="app-input"
            placeholder="Enter a Message"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />

          <Button
            style={{ margin: "15px" }}
            disabled={!input}
            variant="contained"
            color="secondary"
            type="submit"
            onClick={sendMessage}
          >
            SEND MESSAGE <SendIcon style={{ marginLeft: "5px" }}></SendIcon>
          </Button>
        </FormControl>
      </form>
      <FlipMove>
        {messages.map(({ id, message }) => {
          return <Message key={id} username={userName} message={message} />;
        })}
      </FlipMove>
    </div>
  );
}
