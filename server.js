const express = require("express");
const path = require("path");

const PORT = process.env.PORT || 3000;

const app = express();

const publicPath = path.join(__dirname, '..', 'public');

app.use(express.static(publicPath));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

app.get('*', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'));
 });

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
