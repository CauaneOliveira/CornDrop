CREATE TABLE feeding_schedules (
    id BIGSERIAL PRIMARY KEY,
    device_id BIGINT NOT NULL,
    name VARCHAR(255),
    feeding_time TIME NOT NULL,
    quantity_grams INTEGER NOT NULL,
    enabled BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT fk_schedule_device
        FOREIGN KEY (device_id)
        REFERENCES devices(id)
);