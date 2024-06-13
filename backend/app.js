import cors from 'cors'; // CORS middleware to enable cross-origin requests.
import express from 'express'; // Express framework
import mongoose from 'mongoose'; // Mongoose library for MongoDB
import registerRouter from './routes/index.js'; // Importing the router

// Function to initialize application settings
const initialize = (app) => {
    // Applying CORS middleware to allow cross-origin requests
    app.use(cors());

    // Middleware to parse JSON bodies in requests.
    app.use(express.json());

    // Middleware to parse URL-encoded bodies (form data)
    app.use(express.urlencoded({ extended: true }));

    // Connecting to MongoDB using mongoose
    mongoose.connect('mongodb+srv://admin:admin@cluster0.y87gij4.mongodb.net/EYLDB', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

    // Registering the application routes
    registerRouter(app);
}

// Create the Express app
const app = express();

// Initialize the app with middleware and routes
initialize(app);

// Start the server
const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
