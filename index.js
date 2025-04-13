const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());

app.get('/api/status', (req, res) => {
  const today = new Date().toLocaleDateString();
  const completedDate = req.query.completedDate;

  if (!completedDate) {
    return res.status(400).json({ error: 'Missing completedDate parameter' });
  }

  const status = completedDate === today;
  res.json({ status });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`API is running on port ${port}`);
});