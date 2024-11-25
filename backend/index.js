const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const join = require('path');
const dotenv = require('dotenv');
const userRoutes = ('./routes/routes.js');
const forgotPasswordRoutes = require('./routes/forgotPassword.js');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors());
dotenv.config();

app.use('/api', userRoutes);
app.use('/api/forgot-password', forgotPasswordRoutes);

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.log('Failed to connect to MongoDB:', err));

///////////////////////////////////////////////////////////////////////////////////////


if (process.env.NODE_ENV === 'production') {
    app.use((join(__dirname, '../client/build')));
    
    app.get('*', (req, res) => {
        res.sendFile(join(__dirname, '../client/build', 'index.html'));
    });
}
///////////////////////////////////////////////////////////////////////////////////////

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
