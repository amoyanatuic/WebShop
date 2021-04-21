const pool = require('./db');

const sql = 'INSERT INTO "PrelimExam"."AS_purchaseorder" (supp_id, cust_id, po_date, po_status) VALUES ($1,$2,$3,$4) RETURNING*';
const data = [1, 1,'2021-04-10','OK'];

pool.query(sql, data, (err, res) => {
    if (err) {
        console.log(err.stack);
    } else {
        console.log(res.rows[0]);
    }
});

pool.end();