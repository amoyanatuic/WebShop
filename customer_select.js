const pool = require('./db');

pool.query('SELECT * FROM "PrelimExam"."AS_customer"', (err, res) => {
    try {
        console.log(res.rows);
    } catch (error) {
        console.log(err.message);
    }
});

pool.end();