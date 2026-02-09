# SLO - API Documentos

## SLI
Porcentaje de respuestas HTTP 2xx.

## SLO
99.5% mensual.

## Error Budget
0.5% mensual (permite fallos hasta 0.5% del tiempo).

### Política de uso del Error Budget
- Si se supera 50% del presupuesto (0.25% mensual), se priorizan tareas de estabilidad sobre nuevas funcionalidades.
- Se monitorea automáticamente mediante logs y reportes de smoke test.
- Las acciones correctivas se documentan en postmortem en caso de incidentes.
