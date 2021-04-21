const pool = require('./db');

const sql = 'UPDATE "PrelimExam"."AS_purchaseorder" SET po_status = $1 WHERE po_id =4 RETURNING*';
const data = ['PENDING'];

pool.query(sql, data, (err, res) => {
    if (err) {
        console.log(err.stack);
    } else {
        console.log(res.rows[0]); 
    }
});

pool.end();