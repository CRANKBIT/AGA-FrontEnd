import React, { FC, useState, KeyboardEvent } from 'react';

const HelpSupport: FC = () => {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);

  const toggleDropdown1 = (): void => {
    setIsOpen1(!isOpen1);
  };

  const toggleDropdown2 = (): void => {
    setIsOpen2(!isOpen2);
  };

  const handleDropdownKeyDown = (event: KeyboardEvent<HTMLDivElement>, toggleFunction: () => void): void => {
    if (event.key === 'Enter' || event.key === ' ') {
      toggleFunction();
    }
  };

  const handleChatClick = (): void => {
    // 处理在线聊天的点击事件
    // 可以使用弹出对话框或者跳转到另一个页面等方式实现
  };

  return (
    <div className="support-page">
      <h1>HELP &amp; Support</h1>
      <div className="rectangle-layout">
        <div className="faq-section">
          <h2>Frequently Asked Questions</h2>
          <div
            className="question"
            onClick={toggleDropdown1}
            onKeyDown={(e) => handleDropdownKeyDown(e, toggleDropdown1)}
            role="button"
            tabIndex={0}
          >
            <span>1 + 1 equals?</span>
            <span className={`arrow ${isOpen1 ? 'open' : ''}`}>&#9660;</span>
            {isOpen1 && <div className="answer">2</div>}
          </div>
          <div
            className="question"
            onClick={toggleDropdown2}
            onKeyDown={(e) => handleDropdownKeyDown(e, toggleDropdown2)}
            role="button"
            tabIndex={0}
          >
            <span>3 + 3 equals?</span>
            <span className={`arrow ${isOpen2 ? 'open' : ''}`}>&#9660;</span>
            {isOpen2 && <div className="answer">6</div>}
          </div>
        </div>
        <div className="contact-section">
          <div className="title">Get in touch with us</div>
          <div className="contact-info">
            <div>
              <span className="icon" role="img" aria-label="phone">&#9742;</span>
              <span>13000000</span>
            </div>
            <div>
              <span className="icon" role="img" aria-label="phone">&#9742;</span>
              <span>1456789</span>
            </div>
            <div className="email">ju3333@gmail.com</div>
          </div>
        </div>
        <div className="chat-section">
          <div className="title">Chat with our experts</div>
          <div className="chat-box">
            <div className="icon" role="img" aria-label="chat">&#128172;</div>
            <div>Chat with us</div>
            <button className="chat-btn" onClick={handleChatClick} type="button">
              Start a chat now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpSupport;
