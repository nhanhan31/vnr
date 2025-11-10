import { AI_CONFIG, PROVIDER_CONFIGS, ChatMessage } from '../config/aiConfig';

export const sendMessageToAI = async (
  message: string, 
  previousMessages: ChatMessage[] = []
): Promise<string> => {
  try {
    const { provider, apiKey, systemPrompt } = AI_CONFIG;

    // Format messages for API
    const formattedMessages = previousMessages
      .filter(msg => msg.role === 'user' || msg.role === 'assistant')
      .map(msg => ({
        role: msg.role,
        content: msg.content
      }));

    const messages = [
      { role: 'system' as const, content: systemPrompt },
      ...formattedMessages,
      { role: 'user' as const, content: message }
    ];

    // Call API based on provider
    if (provider === 'groq' && apiKey) {
      return await sendToGroq(messages, apiKey);
    } else if (provider === 'openai' && apiKey) {
      return await sendToOpenAI(messages, apiKey);
    } else {
      // Fallback to mock response for development/testing
      return getNguyenChiThanhMockResponse(message);
    }
  } catch (error) {
    console.error("Error in sendMessageToAI:", error);
    return "Xin lỗi, đã có lỗi xảy ra khi kết nối với AI. Vui lòng thử lại sau.";
  }
};

// Function to call Groq API
const sendToGroq = async (messages: any[], apiKey: string): Promise<string> => {
  const { baseUrl, defaultModel, temperature } = PROVIDER_CONFIGS.groq;
  
  const response = await fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`
    },
    body: JSON.stringify({
      model: defaultModel,
      temperature: temperature,
      messages: messages,
      stream: false
    })
  });

  if (!response.ok) {
    throw new Error(`Groq API error: ${response.status} - ${response.statusText}`);
  }

  const data = await response.json();
  return data.choices?.[0]?.message?.content || 'Không có nội dung trả về từ AI.';
};

// Function to call OpenAI API
const sendToOpenAI = async (messages: any[], apiKey: string): Promise<string> => {
  const { baseUrl, defaultModel, temperature } = PROVIDER_CONFIGS.openai;
  
  const response = await fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`
    },
    body: JSON.stringify({
      model: defaultModel,
      temperature: temperature,
      messages: messages
    })
  });

  if (!response.ok) {
    throw new Error(`OpenAI API error: ${response.status} - ${response.statusText}`);
  }

  const data = await response.json();
  return data.choices?.[0]?.message?.content || 'Không có nội dung trả về từ AI.';
};

// Mock responses for testing offline - specific to General Nguyen Chi Thanh historical content
const getNguyenChiThanhMockResponse = (message: string): string => {
  const lowerMsg = message.toLowerCase();
  
  // Greetings
  if (lowerMsg.includes('xin chào') || lowerMsg.includes('hello') || lowerMsg.includes('chào')) {
    return 'Xin chào! Tôi là trợ lý AI chuyên về lịch sử Đại tướng Nguyễn Chí Thanh. Tôi có thể giúp bạn tìm hiểu về cuộc đời và sự nghiệp của Đại tướng (1914-1967). Bạn muốn biết điều gì?';
  }
  
  // Questions about early life/biography
  if (lowerMsg.includes('sinh') || lowerMsg.includes('tuổi thơ') || lowerMsg.includes('1914')) {
    return 'Đại tướng Nguyễn Chí Thanh sinh ngày 20/2/1914 tại làng An Hóa, xã Tam Hiệp, huyện Phong Điền, tỉnh Thừa Thiên (nay là Thừa Thiên Huế). Bản danh là Nguyễn Vịnh, sinh trong gia đình nông dân nghèo nhưng giàu truyền thống yêu nước.';
  }
  
  // Questions about military career
  if (lowerMsg.includes('quân sự') || lowerMsg.includes('chiến công') || lowerMsg.includes('chiến trường')) {
    return 'Đại tướng Nguyễn Chí Thanh có những đóng góp to lớn trong cả hai cuộc kháng chiến. Ông là Chủ nhiệm Tổng cục Chính trị Quân đội, tham gia chỉ đạo chiến dịch Điện Biên Phủ, và sau đó là Bí thư Trung ương Cục miền Nam, chỉ đạo chiến trường chống Mỹ.';
  }
  
  // Questions about ideology/thought
  if (lowerMsg.includes('tư tưởng') || lowerMsg.includes('toàn dân') || lowerMsg.includes('chiến tranh nhân dân')) {
    return 'Tư tưởng "toàn dân đánh giặc" là di sản quan trọng của Đại tướng. Ông khẳng định sức mạnh chiến tranh nhân dân, kết hợp toàn bộ lực lượng vũ trang với lực lượng chính trị, xây dựng thế trận lòng dân vững chắc.';
  }
  
  // Questions about leadership style
  if (lowerMsg.includes('lãnh đạo') || lowerMsg.includes('phong cách') || lowerMsg.includes('gần gũi')) {
    return 'Đại tướng Nguyễn Chí Thanh nổi tiếng với phong cách lãnh đạo gần gũi, sâu sát cơ sở. Ông luôn sống và chiến đấu cùng bộ đội, thấu hiểu tâm tư nguyện vọng của chiến sĩ và nhân dân.';
  }
  
  // Questions about impact/legacy
  if (lowerMsg.includes('di sản') || lowerMsg.includes('ý nghĩa') || lowerMsg.includes('ảnh hưởng')) {
    return 'Di sản của Đại tướng Nguyễn Chí Thanh vẫn còn nguyên giá trị: tư tưởng chiến tranh nhân dân, phong cách lãnh đạo gần gũi quần chúng, và tinh thần "vừa hồng vừa chuyên" trong xây dựng quân đội. Ông là tấm gương sáng về lòng trung thành với Đảng, với Tổ quốc và nhân dân.';
  }
  
  // Default response for off-topic or unclear questions
  if (lowerMsg.includes('thời tiết') || lowerMsg.includes('thể thao') || lowerMsg.includes('giải trí')) {
    return 'Tôi chuyên về lịch sử Đại tướng Nguyễn Chí Thanh (1914-1967). Bạn có muốn tìm hiểu về cuộc đời, sự nghiệp quân sự, tư tưởng lãnh đạo hay di sản của Đại tướng không?';
  }
  
  return `Cảm ơn bạn đã hỏi về "${message}". Tôi có thể giúp bạn tìm hiểu về:
  
• Hành trình ra đi năm 1911
• Cuộc sống và công việc tại Pháp  
• Hoạt động chính trị và báo chí
• Quá trình gia nhập Đảng Cộng sản Pháp
• Ý nghĩa lịch sử của giai đoạn này

Bạn muốn tìm hiểu về khía cạnh nào?`;
};

// Utility function to validate message content
export const isValidMessage = (message: string): boolean => {
  return message.trim().length > 0 && message.trim().length <= 1000;
};

// Utility function to clean message content
export const cleanMessage = (message: string): string => {
  return message.trim().replace(/\s+/g, ' ');
};