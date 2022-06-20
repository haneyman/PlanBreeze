CREATE TABLE events (
    id integer GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "when" timestamp with time zone,
    description text,
    notes text,
    date_added timestamp with time zone
);

-- Indices -------------------------------------------------------

CREATE UNIQUE INDEX events_pkey ON events(id int4_ops);
