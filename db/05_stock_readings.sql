CREATE TABLE stock_readings (
    id BIGSERIAL PRIMARY KEY,
    device_id BIGINT NOT NULL,
    level_percentage DECIMAL(5,2),
    sensor_distance DECIMAL(10,2),
    recorded_at TIMESTAMP NOT NULL,

    CONSTRAINT fk_stock_device
        FOREIGN KEY (device_id)
        REFERENCES devices(id)
);