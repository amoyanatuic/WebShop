const pool = require('./db');

(async () => {
    const client = await pool.connect();

    try {
        // BEGIN
        await client.query('BEGIN');

        // customer order 3 product
        const a1 = 'INSERT INTO "PrelimExam"."AS_lineitem"(po_id, prod_id, li_qty, li_price) VALUES ($1,$2,$3,$4) RETURNING *';
        const b1 = [2, 5, 6, 1500];
        const res1 = await client.query(a1, b1);

        const q2 ='INSERT INTO "PrelimExam"."AS_lineitem"(po_id, prod_id, li_qty, li_price) VALUES ($1,$2,$3,$4) RETURNING *';
        const d2 = [2, 6, 4, 900];
        const res2 = await client.query(a2, b2);

        const q3 ='INSERT INTO "PrelimExam"."AS_lineitem"(po_id, prod_id, li_qty, li_price) VALUES ($1,$2,$3,$4) RETURNING *';
        const d3 = [2, 7, 1, 350];
        const res3 = await client.query(a3, b3);

        // COMMIT
        await client.query('COMMIT');
    } catch (e) {
        // failure state
        await client.query('ROLLBACK');
        throw e;
    } finally {
        // success state
        client.release();
    }
})().catch(e => console.error(e.stack));