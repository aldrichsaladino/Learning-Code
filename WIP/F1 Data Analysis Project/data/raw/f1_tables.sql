-- create_tables.sql

CREATE TABLE IF NOT EXISTS circuits (
    circuitId INTEGER PRIMARY KEY,
    circuitRef TEXT,
    name TEXT,
    location TEXT,
    country TEXT,
    lat REAL,
    lng REAL,
    alt INTEGER,
    url TEXT
);

CREATE TABLE IF NOT EXISTS constructor_results (
    constructorResultsId INTEGER PRIMARY KEY,
    raceId INTEGER,
    constructorId INTEGER,
    points REAL,
    status TEXT
);

CREATE TABLE IF NOT EXISTS constructor_standings (
    constructorStandingsId INTEGER PRIMARY KEY,
    raceId INTEGER,
    constructorId INTEGER,
    points REAL,
    position INTEGER,
    positionText TEXT,
    wins INTEGER
);

CREATE TABLE IF NOT EXISTS constructors (
    constructorId INTEGER PRIMARY KEY,
    constructorRef TEXT,
    name TEXT,
    nationality TEXT,
    url TEXT
);

CREATE TABLE IF NOT EXISTS driver_standings (
    driverStandingsId INTEGER PRIMARY KEY,
    raceId INTEGER,
    driverId INTEGER,
    points REAL,
    position INTEGER,
    positionText TEXT,
    wins INTEGER
);

CREATE TABLE IF NOT EXISTS drivers (
    driverId INTEGER PRIMARY KEY,
    driverRef TEXT,
    number INTEGER,
    code TEXT,
    forename TEXT,
    surname TEXT,
    dob TEXT,
    nationality TEXT,
    url TEXT
);

CREATE TABLE IF NOT EXISTS lap_times (
    raceId INTEGER,
    driverId INTEGER,
    lap INTEGER,
    position INTEGER,
    time TEXT,
    milliseconds INTEGER
);

CREATE TABLE IF NOT EXISTS pit_stops (
    raceId INTEGER,
    driverId INTEGER,
    stop INTEGER,
    lap INTEGER,
    time TEXT,
    duration TEXT,
    milliseconds INTEGER
);

CREATE TABLE IF NOT EXISTS qualifying (
    qualifyId INTEGER PRIMARY KEY,
    raceId INTEGER,
    driverId INTEGER,
    constructorId INTEGER,
    number INTEGER,
    position INTEGER,
    q1 TEXT,
    q2 TEXT,
    q3 TEXT
);

CREATE TABLE IF NOT EXISTS races (
    raceId INTEGER PRIMARY KEY,
    year INTEGER,
    round INTEGER,
    circuitId INTEGER,
    name TEXT,
    date TEXT,
    time TEXT,
    url TEXT
);

CREATE TABLE IF NOT EXISTS results (
    resultId INTEGER PRIMARY KEY,
    raceId INTEGER,
    driverId INTEGER,
    constructorId INTEGER,
    number INTEGER,
    grid INTEGER,
    position INTEGER,
    positionText TEXT,
    positionOrder INTEGER,
    points REAL,
    laps INTEGER,
    time TEXT,
    milliseconds INTEGER,
    fastestLap INTEGER,
    rank INTEGER,
    fastestLapTime TEXT,
    fastestLapSpeed REAL,
    statusId INTEGER
);

CREATE TABLE IF NOT EXISTS seasons (
    year INTEGER PRIMARY KEY,
    url TEXT
);

CREATE TABLE IF NOT EXISTS sprint_results (
    resultId INTEGER PRIMARY KEY,
    raceId INTEGER,
    driverId INTEGER,
    constructorId INTEGER,
    number INTEGER,
    grid INTEGER,
    position INTEGER,
    positionText TEXT,
    positionOrder INTEGER,
    points REAL,
    laps INTEGER,
    time TEXT,
    milliseconds INTEGER,
    fastestLap INTEGER,
    fastestLapTime TEXT,
    statusId INTEGER
);

CREATE TABLE IF NOT EXISTS status (
    statusId INTEGER PRIMARY KEY,
    status TEXT
);
