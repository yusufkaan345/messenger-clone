import React, { forwardRef } from "react";

import { Card, CardContent, Typography } from "@mui/material";
import "./Message.css";

const Message = forwardRef(({ message, username }, ref) => {
  const isUser = username === message.username;
  return (
    <div ref={ref} className={`message ${isUser && "message-user"}`}>
      <Card className={isUser ? "message-usercard" : "message-questcard"}>
        <CardContent>
          <Typography color="black" variant="h6" component="h5">
            {!isUser && `${message.username || "Unknown User"} says :`}{" "}
            {message.message}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
});
export default Message;
