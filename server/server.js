const mongoose = require('mongoose');

const app = require('./app');

mongoose
  .connect(process.env.DATABASE_URI)
  .then(() => console.log('Database is connected'));

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
