import React, { useState } from 'react';
import ChatBar from './chatbar'; // Ensure this import path is correct
import { BsFillChatFill } from 'react-icons/bs';
import { Container, Row, Col, ListGroup, Button, Modal, Form, Badge, Card } from 'react-bootstrap';
import { FaUserCircle } from 'react-icons/fa';

const ChatApp = () => {
  const [chats, setChats] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [activeChat, setActiveChat] = useState(null);
  const [chatType, setChatType] = useState(null); // 'individual' or 'group'
  const [showModal, setShowModal] = useState(false);
  const [chatName, setChatName] = useState('');
  const [individualChats, setIndividualChats] = useState([]);
  const [groups, setGroups] = useState([]);

  const handleSendMessage = () => {
    if (newMessage.trim() !== '') {
      setChats([...chats, { text: newMessage, id: Date.now(), user: activeChat, type: chatType }]);
      setNewMessage('');
    }
  };

  const handleDeleteMessage = (id) => {
    setChats(chats.filter(chat => chat.id !== id));
  };

  const handleChatClick = (user, type) => {
    setActiveChat(user);
    setChatType(type);
  };

  const handleCreateChat = (type) => {
    setChatType(type);
    setShowModal(true);
  };

  const handleCreateChatConfirm = () => {
    if (chatName.trim() !== '') {
      if (chatType === 'individual') {
        setIndividualChats([...individualChats, chatName]);
      } else if (chatType === 'group') {
        setGroups([...groups, chatName]);
      }
      setActiveChat(chatName);
      setShowModal(false);
      setChatName('');
    }
  };

  return (
    <Container fluid className="chat-app d-flex flex-column" style={{ height: '100vh', background: '#003135' }}>
      <Row className="bg-gradient bac text-white p-3 shadow-lg rounded-bottom">
        <Col>
          <h2>Chat Application</h2>
        </Col>
        <Col className="text-end">
          <BsFillChatFill size={30} />
        </Col>
      </Row>
      <Row className="flex-grow-1 d-flex">
        <Col md={3} className="border-end p-3 bg-003135 shadow-sm rounded-start">
          <Button variant="primary" className="mb-3 w-100 rounded-pill" onClick={() => handleCreateChat('individual')}>
            Create Individual Chat
          </Button>
          <Button variant="secondary" className="mb-3 w-100 rounded-pill" onClick={() => handleCreateChat('group')}>
            Create Group Chat
          </Button>
          <h5 className="mb-3 text-white">Individual Chats</h5>
          <ListGroup className="mb-3">
            {individualChats.map((chat, index) => (
              <ListGroup.Item
                key={index}
                action
                onClick={() => handleChatClick(chat, 'individual')}
                className="d-flex align-items-center rounded-pill mb-2 shadow-sm bg-light"
              >
                <FaUserCircle size={30} className="me-2 " />
                {chat}
              </ListGroup.Item>
            ))}
          </ListGroup>
          <h5 className="mb-3 text-white">Group Chats</h5>
          <ListGroup>
            {groups.map((group, index) => (
              <ListGroup.Item
                key={index}
                action
                onClick={() => handleChatClick(group, 'group')}
                className="d-flex align-items-center rounded-pill mb-2 shadow-sm bg-light"
              >
                <FaUserCircle size={30} className="me-2 " />
                {group}
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
        <Col md={9} className="d-flex flex-column p-3 bg- rounded-end shadow-sm">
          {activeChat && (
            <>
              <Card className="chat-header bg-gradient text-dark mb-2 shadow-sm rounded">
                <Card.Body className="d-flex justify-content-between align-items-center">
                  <div className="d-flex align-items-center">
                    <FaUserCircle size={30} className="me-2" />
                    {activeChat}
                  </div>
                  <div className="ms-auto">
                    <Badge bg="light" text="dark">
                      {chatType === 'individual' ? 'Individual' : 'Group'}
                    </Badge>
                  </div>
                </Card.Body>
              </Card>
              <div className="chat-container flex-grow-1 overflow-auto mb-3 bg-light rounded p-2 shadow-sm">
                {chats
                  .filter(chat => chat.user === activeChat && chat.type === chatType)
                  .map(chat => (
                    <Card className="mb-2 shadow-sm" key={chat.id}>
                      <Card.Body className="d-flex justify-content-between align-items-center bg-secondary text-white rounded">
                        <div>{chat.text}</div>
                        <Button variant="danger" size="sm" onClick={() => handleDeleteMessage(chat.id)}>
                          🗑️
                        </Button>
                      </Card.Body>
                    </Card>
                  ))}
              </div>
              <div className="mt-auto">
                <ChatBar
                  newMessage={newMessage}
                  setNewMessage={setNewMessage}
                  handleSendMessage={handleSendMessage}
                />
              </div>
            </>
          )}
        </Col>
      </Row>

      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>{chatType === 'individual' ? 'Create Individual Chat' : 'Create Group Chat'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>Chat Name</Form.Label>
              <Form.Control
                type="text"
                value={chatName}
                onChange={(e) => setChatName(e.target.value)}
                placeholder="Enter chat name"
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleCreateChatConfirm}>
            Create
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default ChatApp;
