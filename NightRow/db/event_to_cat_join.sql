SELECT cat_id, event_cat 
FROM categories
JOIN events 
ON cat_id = event_cat ;
SELECT event_cat, event_title, event_date, event_hour, event_price
from events
WHERE event_cat = $1;