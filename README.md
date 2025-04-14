# 📝 Mega Blog App

A full-featured **Blog Posting App** built with **React.js**, **Redux**, **Tailwind CSS**, and **Appwrite** for backend services.

> ✅ Create, Edit, View, and Delete blog posts  
> 🔐 Includes user authentication with Appwrite  
> 🖋️ Rich Text Editor (TinyMCE) for writing posts  
> 🗂️ Image uploads and post previews  
> 🚀 Built for learning full-stack development!

---

## 🔧 Tech Stack

| Frontend | Backend | Styling | Editor | State Management |
|----------|---------|---------|--------|------------------|
| React.js | Appwrite | Tailwind CSS | TinyMCE | Redux Toolkit |

---

## 📸 Demo Preview

![Screenshot 2025-04-15 003053](https://github.com/user-attachments/assets/28849bac-26de-41a8-a27a-c4ce12a4b427)

![Screenshot 2025-04-15 003141](https://github.com/user-attachments/assets/44d49672-de8b-4dac-98ea-7d394ada7ef2)

![Screenshot 2025-04-15 002943](https://github.com/user-attachments/assets/9096ada8-833b-45be-a6ff-ad6b551b77db)

![Screenshot 2025-04-15 002718](https://github.com/user-attachments/assets/5e097505-f9e4-4a5b-9c5c-68e83c7dc927)

![Screenshot 2025-04-15 003308](https://github.com/user-attachments/assets/0a661eff-15b8-4ad6-a9e7-8bdec197ca71)

---

## 🚀 Features

- 👤 User Signup / Login / Logout
- 📝 Create and Edit Posts
- 🖼️ Upload Featured Images (Appwrite Storage)
- 🧠 Auto-generate Slug from Title
- 🔐 Protected Routes using Redux Auth State
- 💬 Rich Text Editor (TinyMCE Integration)
- 📦 Fully Responsive UI using Tailwind CSS

---

## 🔐 Environment Variables

Create a `.env` file in the root and add:

```env
VITE_APPWRITE_URL=your-appwrite-url
VITE_APPWRITE_PROJECT_ID=your-project-id
VITE_APPWRITE_DATABASE_ID=your-db-id
VITE_APPWRITE_COLLECTION_ID=your-posts-collection-id
VITE_APPWRITE_BUCKET_ID=your-bucket-id
VITE_TINYMCE_API_KEY=your-tinymce-api-key
```

---

## 🛠️ Setup Instructions
```
git clone https://github.com/yourusername/Mega_Blog_App.git
cd Mega_Blog_App
npm install
npm run dev
```

---

## 📁 Project Structure

```bash
Mega_Blog_App/
│
├── src/
│   ├── app/                     # Redux store setup
│   ├── components/              # Reusable UI components
│   ├── layouts/                 # Auth/Protected layouts
│   ├── pages/                   # Page-level components
│   ├── service/                 # Appwrite service integration
│   ├── utils/                   # Utility helpers and config
│   ├── main.jsx                 # Entry point
│   └── App.jsx                  # App routes and layout
│
├── public/                     # Static assets
├── .env                        # Environment variables
├── tailwind.config.js         # Tailwind CSS config
├── vite.config.js             # Vite config
└── package.json
```

---

## 🧑‍💻 Author

- **Name:** Dev Sharma  
- **GitHub:** [@dev-sharma16](https://github.com/dev-sharma16)

---
