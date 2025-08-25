import siloProblems from '@/assets/silo-problems.jpg'

const ProblemContext = () => {
  return (
    <section className='py-20 bg-secondary'>
      <div className='max-w-6xl mx-auto px-6'>
        <div className='mb-12'>
          <h2 className='text-4xl font-bold text-primary mb-4'>
            Contexto de la problemática
          </h2>
          <div className='w-24 h-1 bg-accent'></div>
        </div>

        <div className='grid lg:grid-cols-2 gap-12 items-center'>
          <div className='space-y-6'>
            <p className='text-lg text-foreground leading-relaxed'>
              La gestión tradicional de silos presenta desafíos críticos que
              impactan directamente en la calidad del producto final y la
              eficiencia operacional.
            </p>

            <div className='space-y-4'>
              <div className='flex items-start gap-4'>
                <div className='w-8 h-8 bg-destructive rounded-full flex items-center justify-center flex-shrink-0 mt-1'>
                  <span className='text-destructive-foreground font-bold text-sm'>
                    1
                  </span>
                </div>
                <div>
                  <h3 className='font-semibold text-foreground mb-1'>
                    Falta de monitoreo y control de variables ambientales
                  </h3>
                  <p className='text-muted-foreground'>
                    Variaciones no detectadas causan desarrollo de hongos y
                    deterioro del grano
                  </p>
                </div>
              </div>

              <div className='flex items-start gap-4'>
                <div className='w-8 h-8 bg-destructive rounded-full flex items-center justify-center flex-shrink-0 mt-1'>
                  <span className='text-destructive-foreground font-bold text-sm'>
                    2
                  </span>
                </div>
                <div>
                  <h3 className='font-semibold text-foreground mb-1'>
                    Gestión térmica deficiente
                  </h3>
                  <p className='text-muted-foreground'>
                    Hotspots y gradientes térmicos comprometen la calidad
                    uniforme
                  </p>
                </div>
              </div>

              <div className='flex items-start gap-4'>
                <div className='w-8 h-8 bg-destructive rounded-full flex items-center justify-center flex-shrink-0 mt-1'>
                  <span className='text-destructive-foreground font-bold text-sm'>
                    3
                  </span>
                </div>
                <div>
                  <h3 className='font-semibold text-foreground mb-1'>
                    Trazabilidad limitada
                  </h3>
                  <p className='text-muted-foreground'>
                    Falta de datos históricos para análisis de tendencias y
                    optimización
                  </p>
                </div>
              </div>

              <div className='flex items-start gap-4'>
                <div className='w-8 h-8 bg-destructive rounded-full flex items-center justify-center flex-shrink-0 mt-1'>
                  <span className='text-destructive-foreground font-bold text-sm'>
                    4
                  </span>
                </div>
                <div>
                  <h3 className='font-semibold text-foreground mb-1'>
                    Pérdidas económicas
                  </h3>
                  <p className='text-muted-foreground'>
                    Posibles pérdidas económicas por condiciones subóptimas de
                    almacenamiento
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className='relative'>
            <img
              src={siloProblems}
              alt='Problemas en silos: humedad y temperatura'
              className='w-full h-96 object-cover rounded-lg shadow-lg'
            />
            <div className='absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-lg'></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProblemContext
