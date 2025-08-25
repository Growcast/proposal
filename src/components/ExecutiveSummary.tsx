const ExecutiveSummary = () => {
  return (
    <section className='py-20 bg-background'>
      <div className='max-w-4xl mx-auto px-6'>
        <div className='mb-12'>
          <h2 className='text-4xl font-bold text-primary mb-4'>
            Resumen Ejecutivo
          </h2>
          <div className='w-24 h-1 bg-accent'></div>
        </div>

        <div className='space-y-6 text-lg leading-relaxed text-foreground'>
          <p>
            Growcast presenta una solución integral de monitoreo IoT para la
            gestión avanzada de silos de almacenamiento de cereal, diseñada
            específicamente para optimizar las operaciones de BoortMalt en sus
            instalaciones de procesamiento.
          </p>

          <p>
            Nuestra tecnología de sensores industriales y plataforma de análisis
            en tiempo real proporciona{' '}
            <strong>control continuo de parámetros críticos</strong> como
            humedad, temperatura, presión, CO₂ y condiciones ambientales,
            garantizando la preservación de la calidad del grano y la
            optimización de procesos.
          </p>

          <div className='grid md:grid-cols-3 gap-8 mt-12'>
            <div className='text-center p-6 bg-card border border-border rounded-lg'>
              <div className='w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4'>
                <span className='text-2xl font-bold text-accent-foreground'>
                  24/7
                </span>
              </div>
              <h3 className='font-semibold text-card-foreground mb-2'>
                Monitoreo Continuo
              </h3>
              <p className='text-sm text-muted-foreground'>
                Control ininterrumpido de condiciones críticas
              </p>
            </div>

            <div className='text-center p-6 bg-card border border-border rounded-lg'>
              <div className='w-16 h-16 bg-accent-blue rounded-full flex items-center justify-center mx-auto mb-4'>
                <span className='text-2xl font-bold text-accent-blue-foreground'>
                  API
                </span>
              </div>
              <h3 className='font-semibold text-card-foreground mb-2'>
                Consulta de Datos
              </h3>
              <p className='text-sm text-muted-foreground'>
                Acceso a información en tiempo real
              </p>
            </div>

            <div className='text-center p-6 bg-card border border-border rounded-lg'>
              <div className='w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4'>
                <span className='text-xl font-bold text-accent-foreground'>
                  AUTO
                </span>
              </div>
              <h3 className='font-semibold text-card-foreground mb-2'>
                Automatizaciones Avanzadas
              </h3>
              <p className='text-sm text-muted-foreground'>
                Procesos inteligentes y optimización
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ExecutiveSummary
