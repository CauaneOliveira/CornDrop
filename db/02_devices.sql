CREATE TABLE devices (
    id BIGSERIAL PRIMARY KEY,
    user_id BIGINT NOT NULL,
    device_code VARCHAR(100) UNIQUE NOT NULL,
    name VARCHAR(255),
    status VARCHAR(50),
    firmware_version VARCHAR(50),
    last_seen TIMESTAMP,
    paired_at TIMESTAMP,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT fk_device_user
        FOREIGN KEY (user_id)
        REFERENCES users(id)
);