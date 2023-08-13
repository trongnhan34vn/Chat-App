import React, { useEffect, useState } from 'react';
import Header from './Conversation/Header';
import Messages from './Conversation/Messages';
import FormMessage from './Conversation/FormMessage';
import SockJS from 'sockjs-client';
import { over } from 'stompjs';
import Stomp from 'stompjs';
import { getCurrentUser } from '../../utils/user/getCurrentUser';
import { useSelector } from 'react-redux';
import { roomSelector } from '../../redux/selectors';
import { getReceiver } from '../../utils/user/getReceiver';
import { IChat, IChatMessage } from '../../types/Chat.type';
import { IRoom } from '../../types/Room.type';

let stompClient: Stomp.Client;
const Conversation = () => {
  const currentUser = getCurrentUser();
  const room = useSelector(roomSelector).roomResult;
  const receiver = room ? getReceiver(currentUser, room.users) : null;
  const [chats, setChats] = useState<IChat[]>([])

  
  useEffect(() => {
    if (!currentUser) return;
    connect();
  }, [currentUser]);

  const connect = () => {
    let Sock = new SockJS('http://localhost:8080/ws');
    stompClient = over(Sock);
    stompClient.connect({}, onConnected, onError);
  };

  // ON_ERROR_CONNECT
  const onError = (error: any) => {
    console.log(error);
  };

  // ON_CONECTED_SUCESSFULLY
  const onConnected = () => {
    if (!currentUser) return;
    stompClient.subscribe(
      '/user/' + currentUser.email + '/private',
      onPrivateMessageReceived
    );
  };

  const onPrivateMessageReceived = (payload: any) => {
    let receivedValue = JSON.parse(payload.body);
    console.log(receivedValue);
    setChats(receivedValue?.chats)
  };


  const onSendMessage = (content: string) => {
    if(!room) return;
    if (!currentUser) return;
    let sender = currentUser;
    if(!receiver) return;
    let chat: IChatMessage = {
      senderEmail: sender.email,
      receiverEmail: receiver.email,
      roomId: room.id,
      chatMessageStatus: "MESSAGE",
      content: content
    }
    stompClient.send(
      "/app/private-message",
      {},
      JSON.stringify(chat)
    );
  }

  return (
    <div className="w-2/3 border bg-[#F4F7F9] flex flex-col">
      {/* Header */}
      <Header />
      {/* Messages */}
      <Messages chats={chats} room={room} />
      {/* Input */}
      <FormMessage onSendMessage={onSendMessage} />
    </div>
  );
};

export default Conversation;
