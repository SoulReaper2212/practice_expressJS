const express = require('express');
const app = express();
const morgan = require('morgan'); // for logs

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('combined')) //for logs

const userRoutes = require('./routes/user_routes');
const PORT = 3000; 





app.use('/users',userRoutes)

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
