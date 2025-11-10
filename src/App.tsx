import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './styles/GlobalStyles';
import { theme } from './styles/theme';
import Layout from './components/Layout';
import Home from './pages/Home';
import HistoricalContext from './pages/HistoricalContext';
import Journey from './pages/Journey';
import Activities from './pages/Activities';
import About from './pages/About';
import ChatBox from './components/ChatBox';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/historical-context" element={<HistoricalContext />} />
            <Route path="/journey" element={<Journey />} />
            <Route path="/activities" element={<Activities />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Layout>
        
        {/* AI ChatBot - Always available across all pages */}
        <ChatBox
          title="Trợ lý Lịch sử Đại tướng Nguyễn Chí Thanh"
          subtitle="Chuyên gia AI về cuộc đời và sự nghiệp"
          primaryColor="#1976d2"
          initialMessage="Xin chào! Tôi là trợ lý AI chuyên về cuộc đời và sự nghiệp của Đại tướng Nguyễn Chí Thanh (1914-1967). 

Tôi có thể giúp bạn tìm hiểu về:
• Cuộc đời và con đường cách mạng
• Sự nghiệp quân sự và đóng góp lịch sử
• Tư tưởng toàn dân đánh giặc
• Phong cách lãnh đạo và di sản
• Ý nghĩa lịch sử của Đại tướng

Bạn muốn tìm hiểu về khía cạnh nào?"
        />
      </Router>
    </ThemeProvider>
  );
}

export default App;