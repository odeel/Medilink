// src/components/Chat.jsx
import React, { useState, useEffect } from 'react';
import {
  Send,
  Search,
  MoreVertical,
  Phone,
  Video,
  UserPlus,
  MessageCircle
} from 'lucide-react';
import '../styles/Chat.css';

export const Chat = () => {
  const [selectedContact, setSelectedContact] = useState(null);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const contacts = [
    { id: '1', name: 'Dr. Sarah Johnson', role: 'Cardiologist', avatar: 'SJ', lastMessage: 'Thank you for the patient update', lastMessageTime: '2 min ago', unreadCount: 2, isOnline: true },
    { id: '2', name: 'Maria Rodriguez',    role: 'Nurse',       avatar: 'MR', lastMessage: 'Medicine inventory is updated', lastMessageTime: '1 hour ago', unreadCount: 0, isOnline: true },
    { id: '3', name: 'Central Medical Center', role: 'Clinic',   avatar: 'CM', lastMessage: 'New appointment scheduled', lastMessageTime: '3 hours ago', unreadCount: 1, isOnline: false },
    { id: '4', name: 'Dr. Michael Chen',    role: 'Neurologist', avatar: 'MC', lastMessage: 'Case discussion tomorrow?', lastMessageTime: '1 day ago', unreadCount: 0, isOnline: false },
  ];

  const initialMessages = [
    { id: '1', sender: 'Dr. Sarah Johnson', content: 'Good morning! I wanted to discuss the patient case we reviewed yesterday.', timestamp: '9:30 AM', isOwn: false },
    { id: '2', sender: 'You',               content: 'Good morning Dr. Johnson! Yes, I have the updated reports ready.', timestamp: '9:32 AM', isOwn: true },
    { id: '3', sender: 'Dr. Sarah Johnson', content: 'Perfect! Could you send me the latest blood work results?', timestamp: '9:35 AM', isOwn: false },
    { id: '4', sender: 'You',               content: "I'll send them over right now. The patient shows significant improvement.", timestamp: '9:36 AM', isOwn: true },
    { id: '5', sender: 'Dr. Sarah Johnson', content: 'Thank you for the patient update. This is exactly what I needed.', timestamp: '9:38 AM', isOwn: false },
  ];

  useEffect(() => {
    if (selectedContact) {
      setMessages(initialMessages);
    }
  }, [selectedContact]);

  const filteredContacts = contacts.filter(c =>
    c.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    c.role.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSendMessage = e => {
    e.preventDefault();
    const txt = message.trim();
    if (!txt) return;
    const newMsg = {
      id: Date.now().toString(),
      sender: 'You',
      content: txt,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      isOwn: true,
    };
    setMessages(prev => [...prev, newMsg]);
    setMessage('');

    setTimeout(() => {
      const resp = {
        id: (Date.now()+1).toString(),
        sender: selectedContact.name,
        content: "Thanks for your message! I'll get back to you shortly.",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        isOwn: false,
      };
      setMessages(prev => [...prev, resp]);
    }, 2000);
  };

  return (
    <div className="chat">
      {/* Sidebar */}
      <div className="chat__sidebar">
        <div className="chat__sidebar-header">
          <h2>Messages</h2>
          <button><UserPlus size={20}/></button>
        </div>
        <div className="chat__sidebar-search">
          <Search size={20}/>
          <input
            type="text"
            placeholder="Search contacts..."
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="chat__contacts">
          {filteredContacts.map(c => (
            <div
              key={c.id}
              onClick={() => { setSelectedContact(c); setMessages([]); }}
              className={`chat__contact ${selectedContact?.id === c.id ? 'active' : ''}`}
            >
              <div className="chat__contact-avatar">
                {c.avatar}
                {c.isOnline && <span className="online-dot"/>}
              </div>
              <div className="chat__contact-info">
                <div className="chat__contact-top">
                  <p className="name">{c.name}</p>
                  <p className="time">{c.lastMessageTime}</p>
                </div>
                <p className="role">{c.role}</p>
                <p className="last-message">{c.lastMessage}</p>
              </div>
              {c.unreadCount > 0 && (
                <div className="chat__unread">{c.unreadCount}</div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Chat area */}
      <div className="chat__area">
        {selectedContact ? (
          <>
            <div className="chat__header">
              <div className="chat__header-left">
                <div className="chat__avatar">
                  {selectedContact.avatar}
                  {selectedContact.isOnline && <span className="online-dot"/>}
                </div>
                <div>
                  <h3>{selectedContact.name}</h3>
                  <p className="role">{selectedContact.role}</p>
                </div>
              </div>
              <div className="chat__header-actions">
                <Phone size={20}/>
                <Video size={20}/>
                <MoreVertical size={20}/>
              </div>
            </div>

            <div className="chat__messages">
              {messages.length > 0 ? messages.map(msg => (
                <div key={msg.id} className={`chat__message ${msg.isOwn ? 'own' : ''}`}>
                  <div className="bubble">
                    <p>{msg.content}</p>
                    <span className="timestamp">{msg.timestamp}</span>
                  </div>
                </div>
              )) : (
                <div className="chat__empty">
                  <MessageCircle size={48}/>
                  <p>Select a contact to start chatting</p>
                </div>
              )}
            </div>

            <form className="chat__input" onSubmit={handleSendMessage}>
              <input
                type="text"
                placeholder="Type a message..."
                value={message}
                onChange={e => setMessage(e.target.value)}
              />
              <button type="submit" disabled={!message.trim()}>
                <Send size={20}/>
              </button>
            </form>
          </>
        ) : (
          <div className="chat__empty-center">
            <MessageCircle size={48}/>
            <p>Select a contact to start chatting</p>
          </div>
        )}
      </div>
    </div>
  );
};
