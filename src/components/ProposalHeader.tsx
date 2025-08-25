import heroSilos from '@/assets/hero-silos.jpg'
import growcastLogo from '@/assets/growcast-logo.png'
import boortmaltLogo from '@/assets/boortmalt-logo.png'

const ProposalHeader = () => {
  return (
    <section className='relative h-screen flex items-center justify-center overflow-hidden'>
      <div
        className='absolute inset-0 bg-cover bg-center bg-no-repeat'
        style={{ backgroundImage: `url(${heroSilos})` }}
      >
        <div className='absolute inset-0 bg-primary/80'></div>
      </div>

      <div className='relative z-10 max-w-4xl mx-auto text-center px-6'>
        <div className='flex justify-between items-start mb-12'>
          <img
            src={growcastLogo}
            alt='Growcast'
            className='h-16 object-contain'
          />
          <img
            src={boortmaltLogo}
            alt='BoortMalt'
            className='h-16 object-contain'
          />
        </div>

        <div className='space-y-8'>
          <h1 className='text-5xl md:text-6xl font-bold text-primary-foreground leading-tight'>
            Propuesta Técnica: Solución de Monitoreo y Control de Silos
          </h1>

          <h2 className='text-xl md:text-2xl text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed'>
            Aplicación de tecnología Growcast en plantas de almacenamiento de
            cereal
          </h2>

          <div className='pt-8'>
            <div className='inline-block px-8 py-3 '>
              <p className='text-primary-foreground font-medium'>
                Documento Técnico Confidencial
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProposalHeader
