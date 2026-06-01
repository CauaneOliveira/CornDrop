-- =====================================
-- USERS
-- =====================================

INSERT INTO users (
    name,
    email,
    password_hash
)
VALUES
(
    'Administrador',
    'admin@corndrop.com',
    '$2a$10$admin'
),
(
    'João Produtor',
    'joao@corndrop.com',
    '$2a$10$joao'
);

-- =====================================
-- DEVICES
-- =====================================

INSERT INTO devices (
    user_id,
    device_code,
    name,
    status,
    firmware_version,
    paired_at
)
VALUES
(
    1,
    'ESP32-001',
    'Galpão Principal',
    'ONLINE',
    '1.0.0',
    CURRENT_TIMESTAMP
),
(
    2,
    'ESP32-002',
    'Galpão Secundário',
    'OFFLINE',
    '1.0.0',
    CURRENT_TIMESTAMP
);

-- =====================================
-- FEEDING SCHEDULES
-- =====================================

INSERT INTO feeding_schedules (
    device_id,
    name,
    feeding_time,
    quantity_grams,
    enabled
)
VALUES
(
    1,
    'Alimentação Manhã',
    '08:00:00',
    500,
    TRUE
),
(
    1,
    'Alimentação Tarde',
    '16:00:00',
    700,
    TRUE
),
(
    2,
    'Alimentação Matinal',
    '09:00:00',
    400,
    TRUE
);

-- =====================================
-- FEEDING EVENTS
-- =====================================

INSERT INTO feeding_events (
    device_id,
    schedule_id,
    trigger_type,
    quantity_grams,
    executed_at,
    success
)
VALUES
(
    1,
    1,
    'AUTOMATIC',
    500,
    CURRENT_TIMESTAMP,
    TRUE
),
(
    1,
    2,
    'AUTOMATIC',
    700,
    CURRENT_TIMESTAMP,
    TRUE
),
(
    1,
    NULL,
    'MANUAL',
    300,
    CURRENT_TIMESTAMP,
    TRUE
);

-- =====================================
-- STOCK READINGS
-- =====================================

INSERT INTO stock_readings (
    device_id,
    level_percentage,
    sensor_distance,
    recorded_at
)
VALUES
(
    1,
    82.5,
    14.3,
    CURRENT_TIMESTAMP
),
(
    1,
    65.0,
    25.1,
    CURRENT_TIMESTAMP
),
(
    2,
    18.0,
    46.8,
    CURRENT_TIMESTAMP
);

-- =====================================
-- NOTIFICATIONS
-- =====================================

INSERT INTO notifications (
    user_id,
    device_id,
    type,
    title,
    message
)
VALUES
(
    1,
    1,
    'INFO',
    'Dispositivo conectado',
    'O dispositivo ESP32-001 foi conectado com sucesso.'
),
(
    2,
    2,
    'LOW_STOCK',
    'Estoque Baixo',
    'O reservatório está abaixo de 20%.'
),
(
    2,
    2,
    'DEVICE_OFFLINE',
    'Dispositivo Offline',
    'O dispositivo está offline há mais de uma hora.'
);

-- =====================================
-- NOTIFICATION PREFERENCES
-- =====================================

INSERT INTO notification_preferences (
    user_id,
    low_stock_enabled,
    offline_enabled,
    email_enabled,
    push_enabled
)
VALUES
(
    1,
    TRUE,
    TRUE,
    TRUE,
    TRUE
),
(
    2,
    TRUE,
    TRUE,
    FALSE,
    TRUE
);