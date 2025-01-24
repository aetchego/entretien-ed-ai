import React, { useEffect, useRef, useState } from "react";
import { Message } from "../types";
import { Server } from "mock-socket";
import { v4 as uuidv4 } from "uuid";

export const BOT_USR = "AI BOT";

export const useConversation = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const socket = useRef<WebSocket | null>(null);

  useEffect(() => {
    const mockServer = new Server("ws://localhost:8080");
    mockServer.on("connection", (clientSocket) => {
      clientSocket.on("message", (msg: string) => {
        clientSocket.send(`Réponse du serveur : ${msg}`);
      });
    });

    // Connexion WebSocket
    socket.current = new WebSocket("ws://localhost:8080");
    socket.current.onopen = () => {
      console.log("Connecté au serveur WebSocket simulé !");
    };

    socket.current.onmessage = (event: MessageEvent) => {
      const id = uuidv4();
      sendMessageToServer(id, event.data, true, BOT_USR);
      setTimeout(() => updateMessageToServer(id), 5000);
    };

    return () => {
      socket.current?.close();
      mockServer.close();
    };
  }, []);

  const getCurrentTime = () => {
    const currentDate = new Date();
    const hours = currentDate.getHours().toString().padStart(2, "0");
    const minutes = currentDate.getMinutes().toString().padStart(2, "0");
    return `${hours}:${minutes}`;
  };

  const sendMessageToServer = (
    id: string,
    message: string,
    isTyping: boolean,
    username: string
  ) => {
    setMessages((prevMessages) => [
      ...prevMessages,
      {
        id,
        username,
        message,
        time: getCurrentTime(),
        isTyping,
      },
    ]);
  };

  const updateMessageToServer = (id: string) => {
    setMessages((prevMessages) => {
      const index = prevMessages.findIndex((msg) => msg.id === id);
      if (index > -1) {
        const newMessages = [...prevMessages];
        const newMsg = { ...newMessages[index], isTyping: false };
        newMessages.splice(index, 1, newMsg);
        return newMessages;
      }
      return prevMessages;
    });
  };

  const onSendMessage = (newMessage: string) => {
    if (socket.current) {
      socket.current.send(newMessage);
    }
    sendMessageToServer(uuidv4(), newMessage, false, "Alizé");
  };

  return {
    messages,
    onSendMessage,
  };
};
