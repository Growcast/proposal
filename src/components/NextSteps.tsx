import engineersWorking from "@/assets/engineers-working.jpg";

const NextSteps = () => {
  const steps = [
    {
      number: "01",
      title: "Evaluación Técnica",
      description: "Reunión en sitio para análisis de infraestructura y requerimientos específicos",
      duration: "1-2 semanas",
      deliverable: "Documento de especificaciones técnicas"
    },
    {
      number: "02", 
      title: "Instalación Piloto",
      description: "Implementación controlada en 10 silos seleccionados para validación",
      duration: "2-3 semanas",
      deliverable: "Sistema piloto operativo con dashboard"
    },
    {
      number: "03",
      title: "Evaluación de KPIs",
      description: "Medición de resultados y análisis de beneficios operacionales",
      duration: "3-6 meses",
      deliverable: "Reporte de ROI y recomendaciones"
    },
    {
      number: "04",
      title: "Escalamiento",
      description: "Expansión a toda la planta basada en resultados del piloto",
      duration: "3-4 meses",
      deliverable: "Sistema completo de monitoreo IoT"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-primary mb-4">Próximos Pasos Sugeridos</h2>
          <div className="w-24 h-1 bg-accent"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {index < steps.length - 1 && (
                  <div className="absolute left-8 top-20 w-0.5 h-16 bg-border"></div>
                )}
                
                <div className="flex gap-6">
                  <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-accent-foreground font-bold text-lg">{step.number}</span>
                  </div>
                  
                  <div className="flex-1">
                    <div className="bg-card border border-border rounded-lg p-6">
                      <h3 className="text-xl font-semibold text-card-foreground mb-2">
                        {step.title}
                      </h3>
                      
                      <p className="text-muted-foreground mb-4">
                        {step.description}
                      </p>
                      
                      <div className="flex justify-between items-center text-sm">
                        <div>
                          <span className="text-accent font-medium">Duración: </span>
                          <span className="text-foreground">{step.duration}</span>
                        </div>
                        <div className="text-right">
                          <div className="text-muted-foreground">Entregable:</div>
                          <div className="text-foreground font-medium">{step.deliverable}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="relative">
            <img 
              src={engineersWorking} 
              alt="Ingenieros trabajando con tecnología IoT en silos" 
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-lg"></div>
            
            <div className="mt-8 bg-card border border-border rounded-lg p-6">
              <h3 className="text-xl font-semibold text-card-foreground mb-4">Contacto del Proyecto</h3>
              
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                    <span className="text-accent-foreground text-sm">📧</span>
                  </div>
                  <div>
                    <div className="text-foreground font-medium">Email</div>
                    <div className="text-muted-foreground">fyuvone@growcast.io</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-accent-blue rounded-full flex items-center justify-center">
                    <span className="text-accent-blue-foreground text-sm">📞</span>
                  </div>
                  <div>
                    <div className="text-foreground font-medium">Teléfono</div>
                    <div className="text-muted-foreground">+5493415703835</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                    <span className="text-accent-foreground text-sm">👤</span>
                  </div>
                  <div>
                    <div className="text-foreground font-medium">COO</div>
                    <div className="text-muted-foreground">Growcast</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NextSteps;