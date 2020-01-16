const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3000;
const publicPath = path.join(__dirname, '..', 'public');
const app = express();

app.use(express.static(publicPath));

app.get('*', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'));
 });

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
