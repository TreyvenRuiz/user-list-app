# User List App

## Overview
This is a modern **Single Page Application (SPA)** built using **React and TypeScript**, designed to fetch and display a list of users from the [JSONPlaceholder API](https://jsonplaceholder.typicode.com/users). The app includes a **search feature, a favorites system, and responsive UI styling using Tailwind CSS**.

---

## Features
✅ **Fetch Users**: Retrieves user data from an API and displays it in a card format.  
✅ **Search Functionality**: Allows filtering users by name (case-insensitive).  
✅ **Favorites System**: Users can be marked as favorites, stored persistently in localStorage.  
✅ **Favorites Page**: A separate section displays favorited users.  
✅ **Error Handling**: Displays messages for API errors or loading states.  
✅ **Responsive UI**: Built using Tailwind CSS for a clean and adaptive layout.  

---

## Installation & Setup

### **1️⃣ Clone the Repository**
```bash
git clone https://github.com/TreyvonRuiz/user-list-app.git
cd user-list-app
```

### **2️⃣ Install Dependencies**
```bash
npm install
```

### **3️⃣ Run the Development Server**
```bash
npm start  # For Create React App
```

For Vite-based projects, use:
```bash
npm run dev
```

---

## API Endpoint
The app fetches data from the following endpoint:
```plaintext
https://jsonplaceholder.typicode.com/users
```
### Example Response:
```json
[
  {
    "id": 1,
    "name": "Leanne Graham",
    "email": "Sincere@april.biz",
    "phone": "1-770-736-8031 x56442",
    "company": { "name": "Romaguera-Crona" }
  }
]
```

---

## Project Structure
```
user-list-app/
│── public/
│── src/
│   │── components/
│   │   │── UserCard.tsx
│   │   │── SearchBar.tsx
│   │   │── FavoritesPage.tsx
│   │── types/
│   │   │── User.ts
│   │── styles/
│   │   │── global.css
│   │── App.tsx
│   │── main.tsx
│── package.json
│── tsconfig.json
│── README.md
```

---

## Usage Guide
- **Searching Users:** Use the search bar to filter the list of users by name.
- **Adding/Removing Favorites:** Click the heart icon on a user card to toggle favorite status.
- **Viewing Favorites:** Click the "Show Favorites" button to view only favorited users.

---

## Technologies Used
- **React** (with TypeScript)
- **Tailwind CSS** (for styling)
- **Axios** (for API requests)
- **LocalStorage** (for persisting favorites)

---

## Troubleshooting
If you face any issues, try the following:
1. **Ensure you are in the correct directory:**
   ```bash
   cd user-list-app
   ```
2. **Reinstall dependencies:**
   ```bash
   rm -rf node_modules package-lock.json  # macOS/Linux
   rd /s /q node_modules package-lock.json  # Windows
   npm install
   ```
3. **Check Tailwind setup:** If styling isn't applied, run:
   ```bash
   npx tailwindcss init -p
   ```

---

## Contributing
Feel free to fork this repository and submit a pull request with improvements or bug fixes.

---

## License
This project is open-source under the [MIT License](LICENSE).

---

## Contact
For any questions or issues, reach out via [GitHub Issues](https://github.com/yourusername/user-list-app/issues).

🚀 **Happy Coding!** 🎉

