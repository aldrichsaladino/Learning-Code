-- command to bring it in

CREATE TABLE IF NOT EXISTS circuits (
    circuitId INT,
    circuitRef TEXT,
    name TEXT,
    location TEXT,
    country TEXT,
    lat FLOAT,
    lng FLOAT,
    alt INT,
    url TEXT
);
-- create multiple tables corresponding to all the different CSV files for the database
 -- need to then use python and py file to import all the csvs