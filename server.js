const express = require('express');

const app = express();

app.use(express.static('./dist/car-frontend'));
app.get('/*', function(req, res) {
    res.sendFile('index.html', {root: 'dist/car-frontend/'}
  );
});
app.listen(process.env.PORT || 8080);
