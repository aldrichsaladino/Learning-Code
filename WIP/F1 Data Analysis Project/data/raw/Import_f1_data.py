import sqlite3
import csv
import os

# Set working directory
os.chdir('/Users/aldrichsaladino/Desktop/Learning-Code/WIP/F1 Data Analysis Project/data/raw')

# Connect to the SQLite database (or create it if it doesn't exist)
conn = sqlite3.connect('f1_data.db')
cursor = conn.cursor()

# SQL commands to create all tables
create_tables_sql = '''
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
'''

# Execute the SQL to create tables
cursor.executescript(create_tables_sql)

# Function to import CSV data into the corresponding table
def import_csv_to_table(csv_file, table_name, columns):
    with open(csv_file, 'r') as file:
        csv_reader = csv.reader(file)
        headers = next(csv_reader)  # Read the header row
        expected_columns = len(columns.split(", "))
        
        for row in csv_reader:
            if len(row) != expected_columns:
                print(f"Skipping row in {csv_file}: expected {expected_columns} values, got {len(row)}. Row: {row}")
                continue  # Skip the row if there is a column mismatch
            try:
                cursor.execute(f'INSERT INTO {table_name} ({columns}) VALUES ({",".join(["?" for _ in row])})', row)
            except sqlite3.Error as e:
                print(f"Error inserting row into {table_name} from {csv_file}: {e}")
                print(f"Row content: {row}")

# Map each CSV file to its corresponding table and columns
csv_table_map = [
    {'csv': 'circuits.csv', 'table': 'circuits', 'columns': 'circuitId, circuitRef, name, location, country, lat, lng, alt, url'},
    {'csv': 'constructor_results.csv', 'table': 'constructor_results', 'columns': 'constructorResultsId, raceId, constructorId, points, status'},
    {'csv': 'constructor_standings.csv', 'table': 'constructor_standings', 'columns': 'constructorStandingsId, raceId, constructorId, points, position, positionText, wins'},
    {'csv': 'constructors.csv', 'table': 'constructors', 'columns': 'constructorId, constructorRef, name, nationality, url'},
    {'csv': 'driver_standings.csv', 'table': 'driver_standings', 'columns': 'driverStandingsId, raceId, driverId, points, position, positionText, wins'},
    {'csv': 'drivers.csv', 'table': 'drivers', 'columns': 'driverId, driverRef, number, code, forename, surname, dob, nationality, url'},
    {'csv': 'lap_times.csv', 'table': 'lap_times', 'columns': 'raceId, driverId, lap, position, time, milliseconds'},
    {'csv': 'pit_stops.csv', 'table': 'pit_stops', 'columns': 'raceId, driverId, stop, lap, time, duration, milliseconds'},
    {'csv': 'qualifying.csv', 'table': 'qualifying', 'columns': 'qualifyId, raceId, driverId, constructorId, number, position, q1, q2, q3'},
    {'csv': 'races.csv', 'table': 'races', 'columns': 'raceId, year, round, circuitId, name, date, time, url'},
    {'csv': 'results.csv', 'table': 'results', 'columns': 'resultId, raceId, driverId, constructorId, number, grid, position, positionText, positionOrder, points, laps, time, milliseconds, fastestLap, rank, fastestLapTime, fastestLapSpeed, statusId'},
    {'csv': 'seasons.csv', 'table': 'seasons', 'columns': 'year, url'},
    {'csv': 'sprint_results.csv', 'table': 'sprint_results', 'columns': 'resultId, raceId, driverId, constructorId, number, grid, position, positionText, positionOrder, points, laps, time, milliseconds, fastestLap, fastestLapTime, statusId'},
    {'csv': 'status.csv', 'table': 'status', 'columns': 'statusId, status'}
]

# Import data from each CSV file into the corresponding table
for entry in csv_table_map:
    csv_file = entry['csv']
    table_name = entry['table']
    columns = entry['columns']
    if os.path.exists(csv_file):
        print(f"Importing {csv_file} into {table_name}...")
        import_csv_to_table(csv_file, table_name, columns)
    else:
        print(f'CSV file {csv_file} not found.')

# Commit the transaction and close the connection
conn.commit()
conn.close()
