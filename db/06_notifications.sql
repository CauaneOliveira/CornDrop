CREATE TABLE notifications (
    id BIGSERIAL PRIMARY KEY,
    user_id BIGSERIAL NOT NULL,
    device_id BIGINT,

    type VARCHAR(50),
    title VARCHAR(255),
    message TEXT,

    read BOOLEAN DEFAULT FALSE,

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT fk_notification_user
        FOREIGN KEY (user_id)
        REFERENCES users(id),

    CONSTRAINT fk_notification_device
        FOREIGN KEY (device_id)
        REFERENCES devices(id)
);

CREATE TABLE notification_preferences (
    id BIGSERIAL PRIMARY KEY,

    user_id BIGSERIAL NOT NULL UNIQUE,

    low_stock_enabled BOOLEAN DEFAULT TRUE,
    offline_enabled BOOLEAN DEFAULT TRUE,

    email_enabled BOOLEAN DEFAULT TRUE,
    push_enabled BOOLEAN DEFAULT TRUE,

    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT fk_preference_user
        FOREIGN KEY (user_id)
        REFERENCES users(id)
);