# Plantillas de Certificados

Ubicación de archivos de plantilla para la generación de certificados.

- Ruta: `backend/uploads/certificados/plantillas/`
- Tipos admitidos: `PNG`, `JPG` (alta resolución) y opcionalmente `PDF`.
- Tamaño recomendado (A4 horizontal, 300 DPI): `3508 x 2480` px.
- Convenciones de nombre sugeridas: `infouna_certificado_v1.png`, `infouna_certificado_v2.jpg`, etc.
- Estos archivos NO se sirven públicamente; el backend los utiliza para renderizar los certificados.

Sugerencias de calidad:
- Usa fuentes incrustadas o contornos nítidos en la imagen.
- Evita compresión agresiva (artefactos JPEG) para mantener legibilidad.
- Mantén zonas de texto en color oscuro sobre fondos claros para contraste.

Próximos pasos (implementación):
1. Endpoint admin para subir plantilla y registrar posiciones de campos.
2. Generador de PDFs que tomará estas plantillas como fondo.
3. Verificación pública por `dni` + `codigo` (6 caracteres) con QR impreso.

