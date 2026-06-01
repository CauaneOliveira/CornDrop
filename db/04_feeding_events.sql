CREATE TABLE feeding_events (
    id BIGSERIAL PRIMARY KEY,
    device_id BIGINT NOT NULL,
    schedule_id BIGINT,
    trigger_type VARCHAR(20) NOT NULL,
    quantity_grams INTEGER,
    executed_at TIMESTAMP NOT NULL,
    success BOOLEAN DEFAULT TRUE,

    CONSTRAINT fk_event_device
        FOREIGN KEY (device_id)
        REFERENCES devices(id),

    CONSTRAINT fk_event_schedule
        FOREIGN KEY (schedule_id)
        REFERENCES feeding_schedules(id)
);