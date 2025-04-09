# Decentralized Voting Application

A modern web application that enables secure and transparent voting using blockchain technology. This project uses token as a metric for the voting right.
User who owns a token only that user can vote in the system.

## 🚀 Features

- Secure user authentication
- Create and manage voting polls
- Real-time voting results
- Blockchain integration for transparency
- User-friendly interface

## 🛠️ Tech Stack

### Frontend
- React.js
- Ethers.js for blockchain interaction
- react hot toast for notifications
- Axios for API calls

### Backend
- Node.js (v20.11.1)
- Express.js
- MongoDB Atlas
- Mongoose ODM
- JWT for authentication

## 📁 Project Structure
```
voting dapp/
├── votingServerLive/         # Backend directory
│   ├── models/              # Database schemas
│   ├── routes/              # API endpoints
│   ├── controllers/         # Business logic
│   ├── index.js            # Server entry point
│   └── .env                # Environment variables
└── votingLive/           # Frontend directory
    ├── contracts/       # Smart contracts
    ├── src/
    │   ├── components/       # Reusable components
    |   |-- constants/         # contract ABI
    │   ├── pages/           # Page components
    │   ├── routes           # API endpoints
    │   ├── utils/           # Helper functions
    │   
    │   └── App.js
    ├── public/
    └── package.json
```

## 🚦 Getting Started

### Prerequisites
- Node.js (v20.11.1 or higher)
- npm (Node Package Manager)
- MongoDB Atlas account
- MetaMask wallet (for blockchain interaction)

### Backend Setup

1. Navigate to the backend directory:
```bash
cd votingServerLive
```

2. Install dependencies:
```bash
npm install
```

3. Create `.env` file:
```env
MONGO_URI=your_mongodb_connection_string
PORT=3000
JWT_SECRET=your_secret_key
```

4. Start the server:
```bash
npm start
```

The server will run on http://localhost:3000

### Frontend Setup

1. Navigate to the frontend directory:
```bash
cd votingLive
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will open in your default browser at http://localhost:3001



## 📝 Common Commands

### Backend
```bash
npm install          # Install dependencies
npm start           # Start the server
npm run dev         # Start with nodemon (development)
```

### Frontend
```bash
npm install          # Install dependencies
npm start           # Start development server
npm run build       # Create production build
```

## 🔧 Troubleshooting

1. **MongoDB Connection Issues**
   - Verify MongoDB Atlas credentials
   - Check network connectivity
   - Ensure IP whitelist includes your address

2. **Server Start Issues**
   - Verify all dependencies are installed
   - Check if ports are available
   - Ensure environment variables are set correctly

## 📫 Support

For issues and feature requests, please open an issue in the repository or contact:
[Your Contact Information]

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details
