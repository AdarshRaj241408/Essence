# Essence

**Essence** is an AI-powered text summarization tool designed to transform lengthy text into concise and coherent summaries. Built for quick content review, Essence uses advanced machine learning models provided by the Hugging Face API, delivering high-quality, efficient summarizations that make reviewing information easier and faster.

## 🔗 Live Demo

Check out the live site here: [Essence on Vercel](https://essence-bay.vercel.app/)

## Features

- **Summarize Long Texts**: Efficiently distills large bodies of text.
- **Responsive UI**: Designed with a user-friendly interface.
- **Real-time Summarization**: Instant results powered by the Hugging Face BART model.
- **File Summarization**: Upload and summarize text from PDF files directly within the app.
- **User Authentication**: Secure login and registration functionality with Firebase, offering personalized access and usage.

### Icon Breakdown for Markdown:

- **Live Demo**: `🔗`
- **Features**: `✨`
- **Tech Stack**: `🛠️`
- **Installation**: `🚀`
- **Usage**: `🧑‍💻`
- **License**: `📜`

## 🛠️ Tech Stack

- React: Handles the dynamic front-end UI.
- TypeScript: Ensures type safety across the application.
- Axios: Manages API requests and data handling.
- Hugging Face API: Uses the BART model to deliver efficient and accurate summarization.
- Firebase: Manages user authentication and database requirements.
- Vite: Provides a fast development environment and optimized build performance.

## 🚀 Installation & Setup

To run this project locally, follow these steps:

1. Clone the repository:

`git clone https://github.com/AdarshRaj241408/Essence.git
cd Essence`

2. Install dependencies:

`npm install`

3. Configure Environment Variables:

- Create a .env file in the root directory.
- Add your API keys for Hugging Face and Firebase configuration as follows:
  ``

4. Start the development server:

`npm run dev`

5. Open http://localhost:3000 in your browser to view the application.

## 🧑‍💻 Usage

- Enter or paste text into the input box.
- Click **Start Summarizing** to generate a concise summary.
- Upload a PDF file to convert text and summarize it.
- View your summary instantly in an organized, easy-to-read format.

## Future Enhancements

- **Enhanced Text Formatting**: Include bullet points, headers, and styles for better readability.
- **Advanced Summarization Options**: Allow users to select summary length and detail level.
- **Multi-language Support**: Extend summarization capabilities to various languages.

## 🛡️ License

This project is licensed under the MIT License. See the LICENSE file for more information.

## 🤝 Acknowledgments

Essence leverages the BART model from Hugging Face, and we acknowledge their API for enabling high-quality summarizations.
