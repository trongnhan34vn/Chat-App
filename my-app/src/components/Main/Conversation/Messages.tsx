import React from 'react';
import { IRoom } from '../../../types/Room.type';
import { IChat } from '../../../types/Chat.type';

interface MessagesProps {
  room: IRoom | null;
  chats: IChat[]
}

const Messages = ({ room, chats }: MessagesProps) => {
  console.log(chats);
  

  return (
    <div
      className="flex-1 overflow-auto"
      style={{ backgroundColor: '#DAD3CC' }}
    >
      <div className="py-2 px-3">
        {/* Default Messages */}
        <div className="flex justify-center mb-2">
          <div
            className="rounded py-2 px-4"
            style={{ backgroundColor: '#DDECF2' }}
          >
            <p className="text-sm uppercase">February 20, 2018</p>
          </div>
        </div>
        <div className="flex justify-center mb-4">
          <div
            className="rounded py-2 px-4"
            style={{ backgroundColor: '#FCF4CB' }}
          >
            <p className="text-xs">
              Messages to this chat and calls are now secured with end-to-end
              encryption. Tap for more info.
            </p>
          </div>
        </div>
        {/* Default Messages */}
        <div className="flex mb-2">
          <div
            className="rounded py-2 px-3"
            style={{ backgroundColor: '#F2F2F2' }}
          >
            <p className="text-sm text-teal">Sylverter Stallone</p>
            <p className="text-sm mt-1">
              Hi everyone! Glad you could join! I am making a new movie.
            </p>
            <p className="text-right text-xs text-grey-dark mt-1">12:45 pm</p>
          </div>
        </div>
        <div className="flex mb-2">
          <div
            className="rounded py-2 px-3"
            style={{ backgroundColor: '#F2F2F2' }}
          >
            <p className="text-sm text-purple">Tom Cruise</p>
            <p className="text-sm mt-1">
              Hi all! I have one question for the movie
            </p>
            <p className="text-right text-xs text-grey-dark mt-1">12:45 pm</p>
          </div>
        </div>
        <div className="flex mb-2">
          <div
            className="rounded py-2 px-3"
            style={{ backgroundColor: '#F2F2F2' }}
          >
            <p className="text-sm text-orange">Harrison Ford</p>
            <p className="text-sm mt-1">Again?</p>
            <p className="text-right text-xs text-grey-dark mt-1">12:45 pm</p>
          </div>
        </div>
        <div className="flex mb-2">
          <div
            className="rounded py-2 px-3"
            style={{ backgroundColor: '#F2F2F2' }}
          >
            <p className="text-sm text-orange">Russell Crowe</p>
            <p className="text-sm mt-1">Is Andrés coming for this one?</p>
            <p className="text-right text-xs text-grey-dark mt-1">12:45 pm</p>
          </div>
        </div>
        <div className="flex mb-2">
          <div
            className="rounded py-2 px-3"
            style={{ backgroundColor: '#F2F2F2' }}
          >
            <p className="text-sm text-teal">Sylverter Stallone</p>
            <p className="text-sm mt-1">He is. Just invited him to join.</p>
            <p className="text-right text-xs text-grey-dark mt-1">12:45 pm</p>
          </div>
        </div>
        <div className="flex justify-end mb-2">
          <div
            className="rounded py-2 px-3"
            style={{ backgroundColor: '#E2F7CB' }}
          >
            <p className="text-sm mt-1">Hi guys.</p>
            <p className="text-right text-xs text-grey-dark mt-1">12:45 pm</p>
          </div>
        </div>
        <div className="flex justify-end mb-2">
          <div
            className="rounded py-2 px-3"
            style={{ backgroundColor: '#E2F7CB' }}
          >
            <p className="text-sm mt-1">Count me in</p>
            <p className="text-right text-xs text-grey-dark mt-1">12:45 pm</p>
          </div>
        </div>
        <div className="flex mb-2">
          <div
            className="rounded py-2 px-3"
            style={{ backgroundColor: '#F2F2F2' }}
          >
            <p className="text-sm text-purple">Tom Cruise</p>
            <p className="text-sm mt-1">Get Andrés on this movie ASAP!</p>
            <p className="text-right text-xs text-grey-dark mt-1">12:45 pm</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Messages;
