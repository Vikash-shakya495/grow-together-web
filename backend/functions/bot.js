const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI("AIzaSyC3q59FpE6m_zJ6Qs-JlUD5PIfjznxKh0Y");
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash-8b" });

async function botResponse(prompt) {
    const llm='gemini';

    if (llm ==='gemini'){
        const result = await model.generateContent(prompt);
        const response = result.response.text()
        return response;
    }
    else if(llm === 'llama'){
        return 'llama under progress'
    }
    
}


module.exports = { botResponse };