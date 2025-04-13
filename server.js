const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const weekdays = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];

app.get('/get-task-status', (req, res) => {
    const today = new Date().getDay();
    const todayString = weekdays[today];

    const completedDate = req.query.completedDate; // クエリで受け取る
    const isCompleted = completedDate === todayString;

    res.json({ status: isCompleted });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
