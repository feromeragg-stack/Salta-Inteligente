-- Insertar puntos de interés de Salta, Argentina
-- Datos reales de lugares emblemáticos de la ciudad

-- Museos
INSERT INTO PuntoInteres (nombre, descripcion, latitud, longitud, categoria) VALUES
('Museo de Arqueología de Alta Montaña', 'MAAM - El primer museo del mundo dedicado a la arqueología de alta montaña y las momias incas', -24.7944, -65.4109, 'MUSEO'),
('Museo de la Ciudad Casa de Hernández', 'Museo dedicado a la historia de Salta ubicado en una casa colonial del siglo XVIII', -24.7915, -65.4098, 'MUSEO'),
('Museo Provincial de Bellas Artes', 'Importante colección de arte argentino y salteño en el Palacio Usandivaras', -24.7889, -65.4125, 'MUSEO'),
('Museo Güemes', 'Museo dedicado al Gral. Martín Miguel de Güemes, héroe de la independencia argentina', -24.7933, -65.4087, 'MUSEO');

-- Edificios de Gobierno
INSERT INTO PuntoInteres (nombre, descripcion, latitud, longitud, categoria) VALUES
('Casa de Gobierno', 'Sede del Poder Ejecutivo de la Provincia de Salta, edificio histórico colonial', -24.7897, -65.4103, 'GOBIERNO'),
('Palacio de Justicia', 'Sede del Poder Judicial de la Provincia de Salta', -24.7856, -65.4078, 'GOBIERNO'),
('Municipalidad de Salta', 'Palacio Municipal - Sede del gobierno de la ciudad de Salta', -24.7922, -65.4112, 'GOBIERNO'),
('Legislatura Provincial', 'Sede del Poder Legislativo de la Provincia de Salta', -24.7834, -65.4089, 'GOBIERNO');

-- Estadios y Centros Deportivos
INSERT INTO PuntoInteres (nombre, descripcion, latitud, longitud, categoria) VALUES
('Estadio Padre Ernesto Martearena', 'Estadio principal de Salta, casa de Gimnasia y Tiro y Central Norte', -24.8012, -65.4234, 'ESTADIO'),
('Complejo Deportivo Delmi', 'Centro deportivo municipal con múltiples disciplinas', -24.7723, -65.4156, 'ESTADIO'),
('Club Gimnasia y Tiro', 'Histórico club deportivo salteño fundado en 1902', -24.8023, -65.4245, 'ESTADIO'),
('Polideportivo Municipal', 'Centro deportivo público con canchas múltiples', -24.7654, -65.4089, 'ESTADIO');

-- Monumentos Históricos
INSERT INTO PuntoInteres (nombre, descripcion, latitud, longitud, categoria) VALUES
('Monumento al General Güemes', 'Monumento ecuestre dedicado al héroe gaucho de la independencia argentina', -24.7845, -65.4234, 'MONUMENTO'),
('Catedral Basílica de Salta', 'Importante templo católico del siglo XIX, sede del Arzobispado de Salta', -24.7912, -65.4106, 'MONUMENTO'),
('Iglesia San Francisco', 'Histórica iglesia colonial con torre campanario de 53 metros de altura', -24.7934, -65.4087, 'MONUMENTO'),
('Cabildo de Salta', 'Histórico edificio colonial del siglo XVIII, hoy Centro Cultural', -24.7911, -65.4103, 'MONUMENTO'),
('Convento San Bernardo', 'El edificio más antiguo de Salta, convento de clausura del siglo XVI', -24.7889, -65.4076, 'MONUMENTO');