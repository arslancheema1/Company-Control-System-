import React, { useState } from 'react';
import { BsFillChatFill } from 'react-icons/bs';
import { Container, Row, Col, ListGroup, Button, Modal, Form, Card } from 'react-bootstrap';
import { FaUserCircle, FaUserPlus } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const ChatApp = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [chats, setChats] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [activeChat, setActiveChat] = useState(null);
  const [chatType, setChatType] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [chatName, setChatName] = useState('');
  const [individualChats, setIndividualChats] = useState([]);
  const [groups, setGroups] = useState([]);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

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
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light shadow-sm" style={{ position: 'fixed', width: '100%', top: '0', zIndex: '900', padding: '0.8rem 0.3rem', fontSize: '1.2rem', backgroundColor: '#003135' }}>
        <button className="btn btn-outline-secondary me-2" onClick={toggleSidebar}>
          <i className="fas fa-bars"></i>
        </button>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <h3 style={{ marginLeft: '11rem', color: '#ffffff' }}>Employee Management</h3>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item position-relative">
              <a className="nav-link" href="#">
                <i className="fas fa-bell text-white"></i>
                <span className="badge bg-danger rounded-pill position-absolute top-0 start-100 translate-middle" style={{ fontSize: '0.75rem', width: '1.5rem', height: '1.5rem', lineHeight: '1rem', zIndex: 1200, color: '#ffffff' }}>
                  2
                </span>
              </a>
            </li>
            <li className="nav-item">
              <Button className="btn btn-primary ms-3 ">
               
                Start
              </Button>
            </li>
          </ul>
        </div>
      </nav>

      {/* Sidebar */}
      <div className={`d-flex flex-column shadow-lg ${isSidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`} style={{ width: '215px', height: '100vh', position: 'fixed', top: '70px', left: '0', zIndex: '900', backgroundColor: '#003135', transition: 'transform 0.3s ease', transform: isSidebarOpen ? 'translateX(0)' : 'translateX(-100%)' }}>
        <ul className="nav flex-column mt-4">
          <li className="nav-item">
            <Link className="nav-link text-light" to="/dasem">
              <i className="fas fa-tachometer-alt me-2 text-primary"></i>Dashboard
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-light" to="/WorkManagement">
              <i className="fas fa-briefcase me-2 text-success"></i>Work
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-light" to="/LeaveManagment">
              <i className="fas fa-calendar-alt me-2 text-warning"></i>Leave
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-light" to="/chat">
              <i className="fas fa-comments me-2 text-info"></i>Communication
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-light" to="/">
              <i className="fas fa-sign-out-alt me-2 text-danger"></i>Logout
            </Link>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <Container fluid className="chat-app d-flex flex-column" style={{ marginLeft: isSidebarOpen ? '215px' : '0', marginTop: '70px', padding: '0.5rem', background: '#e8e9eb', height: 'calc(100vh - 70px)', transition: 'margin-left 0.3s ease', overflow: 'hidden' }}>
        <Row className="flex-grow-1 d-flex overflow-hidden">
          <Col md={2} className="border-end p-3 bg-003135 shadow-sm rounded-start overflow-auto">
            <Button variant="primary" className="mb-3 w-100 rounded-pill" onClick={() => handleCreateChat('individual')}>
              <FaUserCircle className="me-2" />
              Create Individual Chat
            </Button>
            <Button variant="primary" className="mb-3 w-100 rounded-pill" onClick={() => handleCreateChat('group')}>
              <BsFillChatFill className="me-2" />
              Create Group Chat
            </Button>
            <h5 className="mb-3 text-dark">Individual Chats</h5>
            <ListGroup className="mb-3">
              {individualChats.map((chat, index) => (
                <ListGroup.Item key={index} action onClick={() => handleChatClick(chat, 'individual')} className="d-flex align-items-center rounded-pill mb-2 shadow-sm bg-light">
                  <FaUserCircle size={30} className="me-2" />
                  {chat}
                </ListGroup.Item>
              ))}
            </ListGroup>
            <h5 className="mb-3 text-dark">Group Chats</h5>
            <ListGroup>
              {groups.map((group, index) => (
                <ListGroup.Item key={index} action onClick={() => handleChatClick(group, 'group')} className="d-flex align-items-center rounded-pill mb-2 shadow-sm bg-light">
                  <BsFillChatFill size={30} className="me-2" />
                  {group}
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Col>
          <Col md={isSidebarOpen ? 8 : 10} className="d-flex flex-column p-3 overflow-hidden" style={{ backgroundColor: '#f8f9fa' }}>
            {/* Heading Container */}
            <div className="mb-3">
              {activeChat && (
                <Card className="p-4 shadow-lg border-0" style={{ backgroundColor: '#e8e9eb', borderRadius: '12px', border: '1px solid #ddd', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
                  <h4 style={{ color: '#003135', margin: '0' }}>{chatType === 'group' ? '' : ''}  {activeChat}</h4>
                </Card>
              )}
            </div>

            {/* Chat Box */}
            <Card className="flex-grow-1 overflow-auto p-3 shadow-lg" style={{ backgroundColor: '#E8E9EB' }}>
              {chats
                .filter(chat => chat.user === activeChat)
                .map((chat, index) => (
                  <div key={index} className="d-flex justify-content-between align-items-center mb-2 shadow-sm p-2 rounded" style={{ backgroundColor: '#FFFFFF' }}>
                    <span>{chat.text}</span>
                    <FontAwesomeIcon icon={faTrashAlt} style={{ cursor: 'pointer', color: 'red' }} onClick={() => handleDeleteMessage(chat.id)} />
                  </div>
                ))}
            </Card>

            {/* Message Input */}
            {activeChat && (
              <div className="d-flex mt-3">
                <Form.Control type="text" value={newMessage} onChange={e => setNewMessage(e.target.value)} placeholder="Type your message..." className="me-2 rounded-pill shadow-sm" />
                <Button onClick={handleSendMessage} variant="primary" className="rounded-pill shadow-sm">
                  Send
              </Button>                    
              </div>
            )}
          </Col>
        </Row>
      </Container>

      {/* Create Chat Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Create New {chatType === 'group' ? 'Group' : 'Individual'} Chat</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group controlId="formChatName">
            <Form.Label>Chat Name:</Form.Label>
            <Form.Control type="text" value={chatName} onChange={e => setChatName(e.target.value)} placeholder="Enter chat name..." className="shadow-sm" />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)} className="shadow-sm">
            Cancel
          </Button>
          <Button variant="primary" onClick={handleCreateChatConfirm} className="shadow-sm">
            Create Chat
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ChatApp;
