import iotArchitecture from '@/assets/iot-architecture.jpg'

const TechnicalProposal = () => {
  return (
    <section className='py-20 bg-background'>
      <div className='max-w-6xl mx-auto px-6'>
        <div className='mb-12'>
          <h2 className='text-4xl font-bold text-primary mb-4'>
            Propuesta Técnica
          </h2>
          <div className='w-24 h-1 bg-accent'></div>
        </div>

        {/* Arquitectura del Sistema */}
        <div className='mb-16'>
          <h3 className='text-2xl font-semibold text-foreground mb-8'>
            a) Arquitectura del Sistema
          </h3>

          <div className='bg-card border border-border rounded-lg p-8 mb-8'>
            <img
              src={iotArchitecture}
              alt='Arquitectura del sistema IoT'
              className='w-full h-64 object-cover rounded-lg mb-6'
            />

            <div className='grid md:grid-cols-4 gap-6'>
              <div className='text-center'>
                <div className='w-12 h-12 bg-accent rounded-full flex items-center justify-center mx-auto mb-3'>
                  <span className='text-accent-foreground font-bold'>1</span>
                </div>
                <h4 className='font-semibold text-card-foreground mb-2'>
                  Sensores en Silos
                </h4>
                <p className='text-sm text-muted-foreground'>
                  Humedad, temperatura, CO₂, presión
                </p>
              </div>

              <div className='text-center'>
                <div className='w-12 h-12 bg-accent-blue rounded-full flex items-center justify-center mx-auto mb-3'>
                  <span className='text-accent-blue-foreground font-bold'>
                    2
                  </span>
                </div>
                <h4 className='font-semibold text-card-foreground mb-2'>
                  Controlador IoT
                </h4>
                <p className='text-sm text-muted-foreground'>
                  Gateway industrial ruggedized
                </p>
              </div>

              <div className='text-center'>
                <div className='w-12 h-12 bg-accent rounded-full flex items-center justify-center mx-auto mb-3'>
                  <span className='text-accent-foreground font-bold'>3</span>
                </div>
                <h4 className='font-semibold text-card-foreground mb-2'>
                  Plataforma Cloud
                </h4>
                <p className='text-sm text-muted-foreground'>
                  Procesamiento y almacenamiento seguro
                </p>
              </div>

              <div className='text-center'>
                <div className='w-12 h-12 bg-accent-blue rounded-full flex items-center justify-center mx-auto mb-3'>
                  <span className='text-accent-blue-foreground font-bold'>
                    4
                  </span>
                </div>
                <h4 className='font-semibold text-card-foreground mb-2'>
                  Dashboard Web
                </h4>
                <p className='text-sm text-muted-foreground'>
                  Visualización y control centralizado
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Hardware y Software */}
        <div className='grid lg:grid-cols-2 gap-12 mb-16'>
          <div>
            <h3 className='text-2xl font-semibold text-foreground mb-6'>
              b) Especificaciones Hardware
            </h3>
            <div className='bg-card border border-border rounded-lg p-6'>
              <h4 className='font-semibold text-card-foreground mb-3'>
                Dispositivos IoT y Conectividad
              </h4>
              <ul className='space-y-2 text-muted-foreground'>
                <li>• Hardware y Firmware propio</li>
                <li>• Conectividad Wi-Fi/Ethernet</li>
                <li>• Protocolo MQTT seguro</li>
              </ul>
            </div>
          </div>

          <div>
            <h3 className='text-2xl font-semibold text-foreground mb-6'>
              c) Plataforma Software
            </h3>
            <div className='bg-card border border-border rounded-lg p-6'>
              <h4 className='font-semibold text-card-foreground mb-3'>
                Dashboard y APIs
              </h4>
              <ul className='space-y-2 text-muted-foreground'>
                <li>• Visualización multi-silo simultánea</li>
                <li>• Alertas configurables por umbral</li>
                <li>• Reportes históricos y tendencias</li>
                <li>• Acceso móvil responsive</li>
                <li>• API para integración de sistemas</li>
                <li>• Exportación de datos CSV/JSON</li>
                <li>• Generación de informes en función a requerimientos</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Ejemplo Piloto */}
        <div className='bg-secondary rounded-lg p-8'>
          <h3 className='text-2xl font-semibold text-foreground mb-6'>
            d) Ejemplo de Implementación Piloto
          </h3>

          <div className='grid md:grid-cols-3 gap-8'>
            <div className='text-center'>
              <div className='w-20 h-20 bg-accent rounded-full flex items-center justify-center mx-auto mb-4'>
                <span className='text-3xl font-bold text-accent-foreground'>
                  10
                </span>
              </div>
              <h4 className='font-semibold text-foreground mb-2'>
                Silos Monitoreados y aireación controlada
              </h4>
              <p className='text-muted-foreground'>
                Cobertura inicial completa de una sección de planta
              </p>
            </div>

            <div className='text-center'>
              <div className='w-20 h-20 bg-accent-blue rounded-full flex items-center justify-center mx-auto mb-4'>
                <span className='text-3xl font-bold text-accent-blue-foreground'>
                  40
                </span>
              </div>
              <h4 className='font-semibold text-foreground mb-2'>
                Sensores Desplegados
              </h4>
              <p className='text-muted-foreground'>
                4 sensores por silo: humedad, temperatura, CO₂, presión
              </p>
            </div>

            <div className='text-center'>
              <div className='w-20 h-20 bg-accent rounded-full flex items-center justify-center mx-auto mb-4'>
                <span className='text-3xl font-bold text-accent-foreground'>
                  1
                </span>
              </div>
              <h4 className='font-semibold text-foreground mb-2'>
                Dashboard Centralizado
              </h4>
              <p className='text-muted-foreground'>
                Control unificado con acceso multi-usuario
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TechnicalProposal
