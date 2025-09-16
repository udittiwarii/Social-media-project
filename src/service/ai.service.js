const { GoogleGenAI } = require("@google/genai");

const ai = new GoogleGenAI({});

async function captiongenrator(base64ImageFile) {
    const contents = [
        {
            inlineData: {
                mimeType: "image/jpeg",
                data: base64ImageFile,
            },
        },
        { text: "Caption this image." },
    ];

    const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: contents,
        config: {
            systemInstruction: `
            You are an expert gerntating a caption for image.
            You genrate single caption for the image.
            Your caption should be short and concise.
            You use hashtage and emoji in the caption.
            Genrate caption in bundelkhandi
            `,
        },
    });
    return response.text;
}

module.exports = captiongenrator