# What Should I Watch? - A Movie Finder App

This project is a sleek and modern movie discovery application built with React, Vite and Tailwindcss. It allows users to browse, search, and explore movies seamlessly, leveraging the power of The Movie Database (TMDB) API. The application is designed to be fast, responsive, and user-friendly, featuring smooth animations and a clean, dark-mode interface.

## Features

- **Dynamic Movie Browsing:** Users can browse movies by three main categories: **Popular**, **Top Rated**, and **Upcoming**.
- **Live Search:** Instantly search for any movie by title. The search functionality is integrated directly with the TMDB API.
- **Detailed Movie Modal:** Clicking on any movie poster opens a beautifully animated modal window displaying detailed information, including:
  - Movie Title and Poster
  - Synopsis/Overview
  - User Rating (Vote Average)
  - Release Date
- **Smooth Transitions:** The application features fluid animations for opening and closing the modal, as well as fading the background content for a polished user experience.
- **Responsive Design:** The UI is fully responsive and works well on various screen sizes, from mobile phones to desktop monitors.
- **Secure API Key Handling:** The TMDB API key is securely managed using environment variables to prevent exposure on the client-side.

## Core Technologies Used

- **React:** A JavaScript library for building user interfaces.
- **Vite:** A next-generation front-end tooling system that provides a faster and leaner development experience.
- **Tailwind CSS:** A utility-first CSS framework for rapid UI development.
- **The Movie Database (TMDB) API:** Used to fetch all movie data, including posters, ratings, and descriptions.
- **clsx:** A tiny utility for constructing `className` strings conditionally.

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

- Node.js and npm (or yarn) installed on your machine.
- An API key from [The Movie Database (TMDB)](https://www.themoviedb.org/signup).

### Installation

1.  Clone the repository:
    ```sh
    git clone https://github.com/your-username/movie-finder.git
    ```
2.  Navigate to the project directory:
    ```sh
    cd movie-finder
    ```
3.  Install NPM packages:
    ```sh
    npm install
    ```
4.  Create a `.env` file in the root of the project and add your TMDB API key:
    ```
    VITE_API_ACCESS_KEY=your_tmdb_api_key_here
    ```
5.  Start the development server:
    ```sh
    npm run dev
    ```

The application should now be running on `http://localhost:5173` (or another port if 5173 is in use).
