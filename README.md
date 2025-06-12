# 📬 Posts Board

A simple and modern posts viewer built with **Next.js 15 App Router** and **TailwindCSS**, using server components and server actions. It supports searching post titles and paginated browsing.

## 🚀 Features

- ✅ Fetches posts from [JSONPlaceholder](https://jsonplaceholder.typicode.com/posts)
- 🔍 Title search via filter form
- 📄 Paginated list of posts (10 per page)
- ⚙️ Built with server components and server actions
- 🎨 Styled with TailwindCSS

---

## 📦 Tech Stack

- **Next.js 15 (App Router)**
- **TypeScript**
- **TailwindCSS**

---

## 🧑‍💻 Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/meshack-mbuvi/posts-board.git
cd posts-board
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
```

### 3. Run the Development Server

```bash
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🧰 Project Structure

```
app/
  ├── page.tsx            // Main UI page with server-side fetching
  ├── loading.tsx         // Loading indicator (suspense fallback)
components/
  ├── FilterForm.tsx      // Form for searching post titles
  ├── PostTable.tsx       // Table displaying paginated posts
  ├── Pagination.tsx      // Navigation for pagination
lib/
  └── getFilteredPosts.ts          // Server action for fetching and filtering posts
types/
  └── post.ts             // Post interface/type definition
```

## 📝 Notes

- Filtering is case-insensitive and done server-side
- Pagination and filters use the URL search params (`?page=2&query=test`)
- Server actions are used for fetching posts initially, while filtering and pagination are handled client-side.
- The app supports basic filtering by keyword (e.g., filtering post titles or bodies).
- The codebase uses TypeScript and includes types for posts and components.

## 📌 Assumptions
- Filtering is done entirely client-side since the API doesn’t support query parameters.
- The project is intended for demonstration purposes and does not persist user state or support user authentication.

## 📜 License

MIT — feel free to use and modify.

---

## 🤝 Acknowledgements

Powered by [Next.js](https://nextjs.org/), [TailwindCSS](https://tailwindcss.com/), and [JSONPlaceholder](https://jsonplaceholder.typicode.com/).
