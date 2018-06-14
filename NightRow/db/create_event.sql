SELECT *
FROM categories JOIN events ON cat_id = event_cat
WHERE cat_name = $1;
;
INSERT INTO events
    ( cat_name, event_title, event_date, event_time, event_address, event_about, event_contact, event_price )
VALUES
    ($1, $2, $3, $4, $5, $6, $7, $8);
SELECT *
FROM events;
