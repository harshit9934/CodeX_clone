# 🤖 Codex

> A modern AI-powered conversational chatbot inspired by ChatGPT, built with **Next.js** and powered by the **Google Gemini API**.

## 🚀 Live Demo

🔗 **Live Demo:https://code-x-clone-git-main-apex-e99e.vercel.app/

## 📌 About The Project

**Codex** is a ChatGPT-inspired AI chatbot application built using **Next.js** and the **Google Gemini API**.

The application provides a clean conversational interface where users can interact with an AI assistant, ask questions, generate responses, and explore AI-powered conversations.

This project was built to practice **Next.js, API integration, React components, asynchronous JavaScript, and modern AI application development**.

> ⚠️ **Note:** Codex is an independent project inspired by modern AI chat applications and is not affiliated with or endorsed by OpenAI.

## ✨ Features

* 🤖 AI-powered conversations
* 💬 ChatGPT-style chat interface
* ⚡ Fast AI responses
* 🧠 Powered by Google Gemini API
* 🔄 Real-time response generation
* 📱 Responsive design
* 🎨 Modern and clean UI
* 🧩 Reusable React components
* 🔐 API key stored using environment variables
* 🚀 Built with Next.js

## 🛠️ Tech Stack

| Technology            | Usage              |
| --------------------- | ------------------ |
| ▲ Next.js             | React framework    |
| ⚛️ React.js           | UI development     |
| 🟨 JavaScript         | Application logic  |
| 🤖 Google Gemini API  | AI responses       |
| 🎨 CSS / Tailwind CSS | Styling            |
| 📦 npm                | Package management |
| 🐙 Git & GitHub       | Version control    |

## 🏗️ Architecture

```text
User
  │
  ▼
Codex UI
  │
  ▼
Next.js Application
  │
  ▼
API Request
  │
  ▼
Google Gemini API
  │
  ▼
AI Generated Response
  │
  ▼
Codex Chat Interface
```

## 📂 Project Structure

```text
Codex/
│
├── app/
│   ├── api/
│   │   └── chat/
│   │       └── route.js
│   │
│   ├── components/
│   │   ├── Chat.jsx
│   │   ├── ChatInput.jsx
│   │   └── Message.jsx
│   │
│   ├── layout.js
│   └── page.js
│
├── public/
│   └── ...
│
├── .env.local
├── .gitignore
├── package.json
├── package-lock.json
└── README.md
```

> The exact folder structure may vary depending on your implementation.

## ⚙️ Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/harshit9934/Codex.git
```

### 2. Navigate to the Project

```bash
cd Codex
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Configure Google Gemini API

Create a `.env.local` file in the root directory:

```env
GOOGLE_API_KEY=your_google_gemini_api_key
```

Replace `your_google_gemini_api_key` with your own API key.

### 🔐 Important

**Never commit your API key to GitHub.**

Make sure `.env.local` is included in `.gitignore`:

```text
.env.local
.env
```

### 5. Start Development Server

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

## 🔑 API Integration

Codex uses the **Google Gemini API** to generate AI responses.

The API key should be kept on the server side and accessed through environment variables rather than exposing it directly in frontend code.

```text
Frontend
   ↓
Next.js API Route
   ↓
Google Gemini API
   ↓
AI Response
   ↓
Frontend
```

## 🎯 Learning Objectives

This project helped me practice:

* Next.js development
* React components
* API integration
* Google Gemini API
* Environment variables
* Server-side API handling
* Async / Await
* State management
* Chat UI development
* Responsive web design
* Git & GitHub

## 🔮 Future Improvements

Planned improvements include:

* 💾 Chat history
* 👤 User authentication
* 🗂️ Multiple conversations
* 🗑️ Delete conversations
* 🌙 Dark / Light mode
* 📋 Copy AI responses
* 🔄 Regenerate responses
* 🎤 Voice input
* 📎 File upload
* 🧠 Multiple Gemini models
* ⚙️ User settings
* ☁️ Database integration

## 📸 Screenshots

Add screenshots of Codex here:

```text
screenshots/
├── codex-home.png
├── codex-chat.png
└── codex-mobile.png
```

## 🚀 Deployment

Codex can be deployed using platforms such as Vercel.

When deploying, remember to add your API key to the deployment platform's **Environment Variables** instead of committing it to the repository.

## 🤝 Contributing

Contributions are welcome!

1. Fork the repository
2. Create a new branch

```bash
git checkout -b feature/new-feature
```

3. Make your changes
4. Commit your changes

```bash
git commit -m "Add new feature"
```

5. Push your branch

```bash
git push origin feature/new-feature
```

6. Open a Pull Request

## 👨‍💻 Author

**Harshit Maurya**

💻 Full Stack Developer | React.js | Next.js | Node.js | MongoDB

🐙 GitHub: [@harshit9934](https://github.com/harshit9934)

## ⭐ Support

If you like this project, consider giving the repository a ⭐ on GitHub!

---

### 🤖 Codex

**Ask. Create. Explore.**
