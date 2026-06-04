const express = require('express');
const path = require('path');

const app = express();

// FIXED PORT LINE
const PORT = process.env.PORT || 3000;

// View engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Static files
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', (req, res) => {
  res.render('home');
});

app.get('/immersion', (req, res) => {
  res.render('immersion');
});

app.get('/empowerment', (req, res) => {
  res.render('empowerment');
});

app.get('/contact', (req, res) => {
  res.render('contact');
});

app.get('/ngo', (req, res) => {
  res.render('ngo');
});

app.get('/gallery', (req, res) => {
  res.render('gallery');
});

app.get('/about', (req, res) => {
  res.render('about');
});

// IMPORTANT: Render needs this
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});