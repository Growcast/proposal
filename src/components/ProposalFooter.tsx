import growcastLogo from '@/assets/growcast-logo.png'

const ProposalFooter = () => {
  return (
    <footer className='py-12 bg-primary'>
      <div className='max-w-4xl mx-auto px-6 text-center'>
        <div className='mb-8'>
          <img
            src={growcastLogo}
            alt='Growcast'
            className='h-12 object-contain mx-auto mb-4'
          />

          <h3 className='text-2xl font-semibold text-primary-foreground mb-4'>
            Transformando el Futuro del Almacenamiento de Grano
          </h3>

          <p className='text-primary-foreground/80 max-w-2xl mx-auto leading-relaxed'>
            Tecnología IoT de vanguardia para la optimización integral de
            procesos de almacenamiento en la industria agroalimentaria global.
          </p>
        </div>

        <div className='border-t border-primary-foreground/20 pt-8'>
          <div className='grid md:grid-cols-3 gap-8 text-primary-foreground/70'>
            <div>
              <h4 className='font-semibold text-primary-foreground mb-2'>
                Growcast
              </h4>
              <p className='text-sm'>Rosario, Argentina</p>
              <p className='text-sm'>fyuvone@growcast.io</p>
            </div>

            <div>
              <h4 className='font-semibold text-primary-foreground mb-2'>
                Documento
              </h4>
              <p className='text-sm'>Propuesta Técnica Confidencial</p>
              <p className='text-sm'>
                Versión 1.0 - {new Date().toLocaleDateString('es-ES')}
              </p>
            </div>

            <div>
              <h4 className='font-semibold text-primary-foreground mb-2'>
                Validez
              </h4>
              <p className='text-sm'>Oferta válida por 30 días</p>
              <p className='text-sm'>Sujeta a evaluación técnica</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default ProposalFooter
