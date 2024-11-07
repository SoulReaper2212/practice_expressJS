const express = require('express');
const app = express();
const userRoutes = require('./routes/user_routes');
const PORT = 3000; // You can choose any available port


app.use('/users',userRoutes)

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
