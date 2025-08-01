# 🤖 AI Career Coach

A full-stack web application built with Next.js that acts as a personal, AI-powered career coach. This tool leverages the Google Gemini API to provide users with tailored advice for their career development, from resume building to interview preparation.


---

## ✨ Features

* **AI-Powered Feedback:** Get instant feedback and suggestions on your resume.
* **Mock Interviews:** Practice common interview questions with an AI interviewer.
* **Personalized Career Advice:** Receive guidance tailored to your career goals and profile.
* **Secure Authentication:** User accounts and secure sign-in handled by Clerk.
* **Modern Tech Stack:** Built with the latest technologies for a fast, reliable, and scalable experience.

## 💻 Tech Stack

* **Framework:** [Next.js](https://nextjs.org/)
* **Styling:** [Tailwind CSS](https://tailwindcss.com/)
* **UI Components:** [Shadcn UI](https://ui.shadcn.com/)
* **Database:** [Neon](https://neon.tech/) (Serverless Postgres)
* **ORM:** [Prisma](https://www.prisma.io/)
* **Authentication:** [Clerk](https://clerk.com/)
* **Background Jobs:** [Inngest](https://www.inngest.com/)
* **AI:** [Google Gemini API](https://ai.google.dev/)

## 🚀 Getting Started

Follow these instructions to set up the project locally.

### Prerequisites

* [Node.js](https://nodejs.org/en/) (v18 or later)
* [Git](https://git-scm.com/)
* A [Neon](https://neon.tech/) account for the database.
* A [Clerk](https://clerk.com/) account for authentication.
* A [Google Gemini API Key](https://ai.google.dev/).

### Installation & Setup

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/ayushchand18/EnhanceAI.git](https://github.com/ayushchand18/EnhanceAI.git)
    cd EnhanceAI
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    ```

3.  **Set up environment variables:**
    Create a new file named `.env` in the root of your project and add the following variables. Get the values from your Neon, Clerk, and Google AI dashboards.

    ```env
    # Neon Database Connection String
    DATABASE_URL="your_database_connection_string"

    # Clerk Authentication Keys
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY="your_clerk_publishable_key"
    CLERK_SECRET_KEY="your_clerk_secret_key"

    # Clerk Redirect URLs
    NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
    NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
    NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/onboarding
    NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/onboarding

    # Google Gemini API Key
    GEMINI_API_KEY="your_gemini_api_key"
    ```

4.  **Push the database schema:**
    This command will sync your Prisma schema with your Neon database.
    ```bash
    npx prisma db push
    ```

5.  **Run the development server:**
    ```bash
    npm run dev
    ```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

---

## 📄 License

This project is licensed under the MIT License. See the `LICENSE` file for more details.
