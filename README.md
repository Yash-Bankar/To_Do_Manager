# ✅ To-Do Manager

A sleek and minimal **task management app** built with **TailwindCSS** to organize your daily activities, boost productivity, and stay on track.  
Designed for **simplicity, speed, and usability**.

🔗 **Live Demo:** [to-do-manager-two.vercel.app](https://to-do-manager-two.vercel.app)

---

## 📌 Table of Contents
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Configuration](#configuration)
- [Examples](#examples)
- [Troubleshooting](#troubleshooting)
- [Contributing](#contributing)
- [License](#license)

---

## ✨ Features
- ➕ Add, ✏️ Edit, and 🗑️ Delete tasks effortlessly  
- ✅ Mark tasks as **completed**  
- 📊 Organized task categories for better workflow  
- 🌙 Light/Dark mode support with Tailwind utilities  
- 📱 Fully responsive design (desktop & mobile)  
- ⚡ Blazing fast build and smooth performance  

---

## 🛠 Tech Stack
- **Frontend:** HTML, JavaScript, TailwindCSS  
- **Styling:** TailwindCSS utility classes + custom config  
- **Build Tool:** Vite (or your setup)  
- **Deployment:** Vercel  

---

## ⚙️ Installation

Clone the repo and install dependencies:

```bash
git clone https://github.com/Yash-Bankar/To_Do_Manager.git
cd To_Do_Manager
npm install
```

Run the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

---

## 🚀 Usage
1. Open the app in your browser.  
2. Add new tasks.  
3. Mark tasks as completed when done.  
4. Organize and track your productivity.  

---

## 🎨 Tailwind Configuration
You can customize the design in **`tailwind.config.js`**:
- **Theme:** Extend colors, fonts, and spacing  
- **Dark Mode:** Enable `class` strategy for manual toggle  
- **Plugins:** Add extra Tailwind plugins if needed  

---

## 📚 Examples

```html
<!-- Example: Task Card -->
<div class="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md flex items-center justify-between">
  <span class="text-gray-900 dark:text-gray-100">Finish project report</span>
  <button class="px-2 py-1 text-sm text-white bg-green-500 rounded hover:bg-green-600">
    Complete
  </button>
</div>
```

---

## 🛠 Troubleshooting
- ❌ **App not starting?** → Ensure Node.js (>=16) is installed.  
- ❌ **Tailwind styles not applying?** → Run `npm run dev` and check your `tailwind.config.js` paths.  
- ❌ **Build errors?** → Delete `node_modules` and reinstall with `npm install`.  

---

## 🤝 Contributing
Contributions, issues, and feature requests are welcome!  
Feel free to open an issue or submit a pull request.  

1. Fork the project  
2. Create your feature branch (`git checkout -b feature/awesome-feature`)  
3. Commit your changes (`git commit -m 'Add awesome feature'`)  
4. Push to the branch (`git push origin feature/awesome-feature`)  
5. Open a Pull Request  

---

## 📜 License
This project is licensed under the **MIT License** – see the [LICENSE](LICENSE) file for details.  

---

## 👨‍💻 Author
Made with ❤️ by **[Yash Bankar](https://github.com/Yash-Bankar)**  
