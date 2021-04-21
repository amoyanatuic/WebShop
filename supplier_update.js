const pool = require('./db');

const sql = 'UPDATE "PrelimExam"."AS_supplier" SET supp_name = $1, supp_address = $2 WHERE supp_id =3 RETURNING*';
const data = ['SACOPAYO, SETH SAMUEL E.', 'CATITIPAN, DAVAO CITY'];

pool.query(sql, data, (err, res) => {
    if (err) {
        console.log(err.stack);
    } else {
        console.log(res.rows[0]);
    }
});

pool.end();