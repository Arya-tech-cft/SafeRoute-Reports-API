# SafeRoute Reports API

A REST API built using Node.js, Express.js, and MongoDB to create, view, update, and delete safety reports.

## Features

- Create a new safety report
- Retrieve all reports
- Update an existing report
- Delete a report
- Store report data in MongoDB Atlas
- Track report creation and update timestamps

## Tech Stack

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- Postman

## Getting Started

### Prerequisites

- Node.js and npm
- A MongoDB Atlas account
- Git

### Installation

Clone the repository:

```bash
git clone https://github.com/Arya-tech-cft/SafeRoute-Reports-API.git
cd SafeRoute-Reports-API
```

Install dependencies:

```bash
npm install
```

### Environment Variables

Create a `.env` file in the project root:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

Replace the placeholder with your MongoDB Atlas connection string. Never commit your actual `.env` file or database credentials.

### Run the Project

Start in development mode:

```bash
npm run dev
```

The API runs at `http://localhost:5000` when startup succeeds.

## API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | `/` | Check whether the API is running |
| POST | `/api/reports` | Create a report |
| GET | `/api/reports` | Retrieve all reports |
| PUT | `/api/reports/:id` | Update a report by ID |
| DELETE | `/api/reports/:id` | Delete a report by ID |

## Report Fields

- `title`: Report title
- `description`: Details of the report
- `location`: Report location
- `category`: `Road`, `Lighting`, `Safety`, or `Other`
- `status`: `Pending`, `In Progress`, or `Resolved`

New reports default to `Pending`.

## Testing

Use Postman to test the API endpoints. For POST and PUT requests, select **Body → raw → JSON** where appropriate.

## Author

Arya-tech-cft
