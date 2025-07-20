import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, User } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hi! I'm Vamshi's AI assistant. I can help you learn more about his skills, experience, and projects. What would you like to know?",
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const getBotResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();
    
    if (message.includes('skill') || message.includes('technology') || message.includes('programming')) {
      return "Vamshi is proficient in JavaScript, Java, Python, HTML, CSS, React, Angular, Node.js, Express.js, MongoDB, and MySQL. He also has experience with Git, GitHub, and AutoCAD. His diverse skill set spans both web development and embedded systems.";
    }
    
    if (message.includes('experience') || message.includes('work') || message.includes('job')) {
      return "Vamshi is currently a Full Stack Web Development Trainee at Naresh IT Solutions (May 2024 - Present) and completed an internship at CodSoft (Jul-Aug 2024). He's gained hands-on experience in modern web development technologies and real-time projects.";
    }
    
    if (message.includes('project') || message.includes('ultrasonic') || message.includes('braking')) {
      return "Vamshi led a 4-member team to develop an Ultrasonic Sensor-Based Automatic Braking System. This project involved real-time embedded system development, safety algorithms, and hardware integration for automotive applications.";
    }
    
    if (message.includes('education') || message.includes('degree') || message.includes('university')) {
      return "Vamshi is pursuing B.Tech in Electrical and Electronics Engineering from Kakatiya University (Expected Jan 2025) with 75% grade. He completed Senior Secondary from Alphores Junior College (82.40%) and Secondary from Siddartha High School (92.00%).";
    }
    
    if (message.includes('certification') || message.includes('certificate')) {
      return "Vamshi holds certifications in Python for Data Science (IBM), AI for Beginners (HP LIFE), Web Development (CodSoft), and AutoCAD (CITD ESDP, Kakatiya University).";
    }
    
    if (message.includes('contact') || message.includes('email') || message.includes('phone')) {
      return "You can reach Vamshi at naradasvamshi02@gmail.com or call +91 90328 92783. You can also connect with him on GitHub (github.com/vamshi-9032) or LinkedIn (linkedin.com/in/chintunaradas).";
    }
    
    if (message.includes('location') || message.includes('where')) {
      return "Vamshi is based in Karimnagar, Telangana, India.";
    }
    
    if (message.includes('hello') || message.includes('hi') || message.includes('hey')) {
      return "Hello! I'm here to help you learn more about Vamshi Naradasu. Feel free to ask about his skills, experience, projects, education, or how to contact him.";
    }
    
    if (message.includes('resume') || message.includes('cv')) {
      return "You can download Vamshi's complete resume by clicking the 'Download Resume' button in the hero section. It contains detailed information about his education, experience, skills, and projects.";
    }
    
    return "That's an interesting question! You can learn more about Vamshi by exploring different sections of his portfolio, or feel free to ask me about his skills, experience, projects, education, or contact information.";
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate typing delay
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: getBotResponse(inputValue),
        isBot: true,
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white p-4 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 group relative"
        >
          {isOpen ? (
            <X className="w-6 h-6 group-hover:scale-110 transition-transform duration-200" />
          ) : (
            <MessageCircle className="w-6 h-6 group-hover:scale-110 transition-transform duration-200" />
          )}
          {!isOpen && (
            <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white px-3 py-1 rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
              AI Assistant
            </div>
          )}
        </button>
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-80 h-96 bg-white rounded-lg shadow-2xl border border-gray-200 z-50 flex flex-col">
          {/* Header */}
          <div className="bg-teal-600 text-white p-4 rounded-t-lg flex items-center gap-3">
            <Bot className="w-6 h-6" />
            <div>
              <h3 className="font-semibold">AI Assistant</h3>
              <p className="text-xs text-teal-100">Ask me about Vamshi</p>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
              >
                <div
                  className={`max-w-xs px-3 py-2 rounded-lg ${
                    message.isBot
                      ? 'bg-gray-100 text-gray-800'
                      : 'bg-teal-600 text-white'
                  }`}
                >
                  <div className="flex items-start gap-2">
                    {message.isBot && <Bot className="w-4 h-4 mt-0.5 flex-shrink-0" />}
                    <p className="text-sm">{message.text}</p>
                    {!message.isBot && <User className="w-4 h-4 mt-0.5 flex-shrink-0" />}
                  </div>
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-gray-100 text-gray-800 max-w-xs px-3 py-2 rounded-lg">
                  <div className="flex items-center gap-2">
                    <Bot className="w-4 h-4" />
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 border-t border-gray-200">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask me anything..."
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 text-sm"
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputValue.trim()}
                className="bg-teal-600 hover:bg-teal-700 disabled:bg-gray-300 text-white p-2 rounded-lg transition-colors"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;