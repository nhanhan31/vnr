// Helper function to get environment variables
const getEnvVariable = (key: string): string => {
  if (typeof import.meta !== 'undefined' && (import.meta as any).env) {
    return (import.meta as any).env[key] || '';
  }
  if (typeof process !== 'undefined' && process.env) {
    return process.env[key] || '';
  }
  return '';
};

export const AI_CONFIG = {
  provider: (getEnvVariable('VITE_AI_PROVIDER') || 'groq') as AIProvider,
  apiKey: getEnvVariable('VITE_GROQ_API_KEY') || getEnvVariable('VITE_OPENAI_API_KEY') || getEnvVariable('VITE_GEMINI_API_KEY'),
  
  // System prompt tùy chỉnh cho chủ đề Đại tướng Nguyễn Chí Thanh
  systemPrompt: `Bạn là trợ lý AI chuyên về lịch sử Đại tướng Nguyễn Chí Thanh (1914-1967) - Người chiến sĩ của nhân dân.

CHỦ ĐỀ CHÍNH:
- Tiểu sử và sự nghiệp của Đại tướng Nguyễn Chí Thanh
- Thời niên thiếu và quá trình tham gia cách mạng (1914-1937)
- Hoạt động trong kháng chiến chống Pháp (1945-1954)
- Vai trò trong xây dựng Quân đội và chỉ đạo miền Nam (1954-1967)
- Tư tưởng "toàn dân đánh giặc" và phong cách lãnh đạo
- Tư tưởng "vừa hồng vừa chuyên"
- Di sản và ảnh hưởng đối với lịch sử Việt Nam
- Phong trào "Thi đua Quyết thắng"

HƯỚNG DẪN TRẢ LỜI:
- Chỉ trả lời các câu hỏi liên quan đến Đại tướng Nguyễn Chí Thanh và lịch sử cách mạng Việt Nam
- Cung cấp thông tin chính xác, có căn cứ lịch sử
- Sử dụng giọng điệu tôn kính khi nhắc đến Đại tướng
- Nếu câu hỏi ngoài phạm vi, từ chối lịch sự và hướng dẫn về chủ đề phù hợp
- Nhấn mạnh tinh thần yêu nước, gần gũi nhân dân của Đại tướng
- Khuyến khích tìm hiểu sâu hơn về lịch sử và di sản của Đại tướng

Luôn trả lời bằng tiếng Việt một cách thân thiện và giáo dục.`,
};

export const PROVIDER_CONFIGS = {
  groq: {
    baseUrl: 'https://api.groq.com/openai/v1/chat/completions',
    defaultModel: 'llama-3.1-8b-instant',
    temperature: 0.3, // Thấp hơn để có câu trả lời chính xác hơn cho nội dung lịch sử
  },
  openai: {
    baseUrl: 'https://api.openai.com/v1/chat/completions',
    defaultModel: 'gpt-3.5-turbo',
    temperature: 0.5,
  },
  gemini: {
    baseUrl: 'https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent',
    defaultModel: 'gemini-pro',
    temperature: 0.4,
  }
};

export type AIProvider = keyof typeof PROVIDER_CONFIGS;

export interface ChatMessage {
  role: 'user' | 'assistant' | 'system';
  content: string;
  timestamp?: number;
}