## Skillify (Periyar-Variable-032)

## Introduction

Skillify is a web application inspired by taskrabbit, designed to connect people who need services with skilled individuals who can provide them. It functions as a two-sided marketplace where users can:

- **Post Requests:** Describe tasks or projects they need help with, specifying details like budget, location, and desired skills.
  
- **Browse Requests:** Search and discover requests across various categories, filtering by location, skill, and other relevant criteria.
  
- **Respond to Requests:** Skilled individuals can showcase their profiles and qualifications, then express interest in fulfilling requests that match their expertise.

## Project Type

- **Fullstack**

## Deplolyed App

- **Frontend:** https://periyar-variable-032-vs37.vercel.app/
- **Backend:** https://periyar-variable-032-nfcl.onrender.com/

# Directory Structure

```
Periyar-Variable-032/
├─ backend/
|  |-- controllers/
│  ├─ db/
│  ├─ middlewares/
│  ├─ models/
│  └─ routes/
└─ frontend/
|   |_skillify/
|     └─ src/
|        ├─ assets/
|        ├─ components/
|        |─ pages/
|        |_ styles/
|_ Readme.md
```

## Video Walkthrough of the project

https://drive.google.com/file/d/1LHWyARNFBOYV0VMTWuuaI7ce2-6tX-xq/view?usp=sharing

## Features

- **User Management:** Enables user registration, login, and profile management for both service seekers and service providers.

- **Skill Categorization:** Organizes requests and profiles into relevant skill categories for easier browsing and matching.

- **Communication Channels:** Provides a platform for users to communicate and discuss project details before finalizing agreements. (Specific implementation details might depend on your chosen approach)

- Search & Filtering: Allows users to search for requests based on keywords, location, skills, and other criteria.

- **Overall Goal:**

    Skillify aims to facilitate a seamless and efficient way for people to find the skills they need and connect with qualified professionals to get their jobs done.

## design decisions or assumptions

- **Focus on data presentation:** This component prioritizes displaying a clear and concise list of requests retrieved from a backend API.

- **Modular design:** The component is designed to be integrated into a larger Skillify application, allowing for customization and extension based on specific needs.

- **TailwindCSS for styling:** Leverages TailwindCSS for rapid and responsive UI development.

- **Assumed API structure:** The component assumes the backend API provides request data with specific attributes like title, description, and requester name.

- **Basic user interaction:** This initial implementation focuses on displaying requests. Future development could include features like sorting, filtering, or pagination 
  for a large number of requests.
  
- **Authentication & Authorization:** The backend will need a mechanism for user authentication and authorization to control access to requests. This could involve JWT (JSON 
  Web Token) or session-based authentication. Users should only be able to access, update, or delete requests they created.
  
- **Database:** The backend can utilize a mongodb database to store request data and user information.

## Installation & Getting started
To run the project locally, follow these steps:

```bash
`git clone https://github.com/Deepak9657568826/Periyar-Variable-032.git`
`cd Periyar-Variable-032`
`npm install`
`cd backend`
`npm run server`
`cd ../frontend/skillify`
`npm run dev`
```

## Technology Stack
List and provide a brief overview of the technologies used in the project.

- Node.js
- Express.js
- MongoDB
- Vite (React JS)
- TailwindCSS
- ChakraUI

