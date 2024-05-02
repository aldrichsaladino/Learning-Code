WITH Market_Data AS (
    SELECT * FROM market_data
    UNION
    SELECT * FROM market_data_2
    UNION
    SELECT * FROM market_data_3
)

SELECT * FROM Market_Data
WHERE Market_Data.date_created <= '2022-02-01'
ORDER BY Market_Data.new_type