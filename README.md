## Blog Website using React and Tailwind

A clean, modern, and fully responsive blog website built with **React**, **Vite**, and **Tailwind CSS**. 

### Features

- **Blog Listing Page**
  - Displays multiple blog cards with title, excerpt, author, published date, and a **“Read More”** button.
  - Hover effects, soft shadows, rounded corners, and professional spacing.
- **Blog Detail Page**
  - Full blog content with title, author, and formatted published date.
  - Includes a **“Back to Blogs”** button to navigate to the listing.
- **Create Blog Page (Frontend Only)**
  - Form to add a new blog with fields: **Title**, **Author Name**, and **Blog Content**.
  - Published date is automatically set on submit.
  - Blogs are stored in React state (no backend).
- **Global Layout**
  - Reusable `Navbar`, `BlogCard`, and `Footer` components.
  - Modern, responsive layout suitable for mobile, tablet, and desktop.

### Tech Stack

- **React** (Vite)
- **React Router**
- **Tailwind CSS**
- **Vite** for dev server and build tooling

### Project Structure

```text
src/
 ├── components/
 │    ├── Navbar.jsx
 │    ├── BlogCard.jsx
 │    └── Footer.jsx
 │
 ├── pages/
 │    ├── Home.jsx
 │    ├── BlogDetail.jsx
 │    └── CreateBlog.jsx
 │
 ├── data/
 │    └── blogs.js
 │
 ├── App.jsx
 ├── main.jsx
 └── index.css
```

### Getting Started

#### 1. Install Dependencies

Make sure you have **Node.js** (LTS) installed, then run:

```bash
npm install
```

#### 2. Run the Development Server

```bash
npm run dev
```

Open the URL shown in the terminal (usually `http://localhost:5173`) in your browser.

#### 3. Build for Production

```bash
npm run build
```

You can then preview the production build with:

```bash
npm run preview
```

### How It Works

- Initial sample blog data lives in `src/data/blogs.js`.
- The main application state (blog list) is managed in `App.jsx` using React hooks.
- **React Router** handles navigation between:
  - `/` – Home (blog listing)
  - `/blogs/:id` – Blog detail page
  - `/create` – Create blog page
- Styling is implemented using **Tailwind CSS utility classes** only, with a clean white background, slate/indigo palette, soft shadows, and rounded corners.
  
  ## 👩‍💻 Author

*Varshitha I P*  
BE in Data Science | Aspiring Software Developer  

Focused on building clean, scalable, and responsive web applications.  
This project is part of my internship-focused portfolio to demonstrate front-end development skills.

- GitHub: https://github.com/varshitha12315
- LinkedIn: www.linkedin.com/in/varshitha-i-p
