import React from 'react';

const ChatList = ({ chats, selectChat, deleteChat, createIndividualChat, createGroupChat }) => {
  return (
    <div>
      <button onClick={createIndividualChat}>Create Individual Chat</button>
      <button onClick={createGroupChat}>Create Group Chat</button>
      {chats.length > 0 && (
        <div>
          <h2>Individual Chats</h2>
          <ul>
            {chats.filter((chat) => chat.type === 'individual').map((chat) => (
              <li key={chat.id} onClick={() => selectChat(chat)}>
                {chat.name}
                <button
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent event from bubbling up
                    deleteChat(chat.id);
                  }}
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
          <h2>Group Chats</h2>
          <ul>
            {chats.filter((chat) => chat.type === 'group').map((chat) => (
              <li key={chat.id} onClick={() => selectChat(chat)}>
                {chat.name}
                <button
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent event from bubbling up
                    deleteChat(chat.id);
                  }}
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ChatList;