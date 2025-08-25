const Benefits = () => {
  const benefits = [
    {
      title: "Preservación de Calidad",
      description: "Control preciso de condiciones ambientales para mantener estándares de calidad del grano",
      icon: "🛡️",
      color: "bg-accent"
    },
    {
      title: "Trazabilidad Completa",
      description: "Registro histórico detallado para auditorías y certificaciones de calidad",
      icon: "📊",
      color: "bg-accent-blue"
    },
    {
      title: "Reducción de Pérdidas",
      description: "Reducción de pérdidas por deterioro en condiciones subóptimas",
      icon: "📉",
      color: "bg-accent"
    },
    {
      title: "Eficiencia Operacional",
      description: "Automatización de monitoreo reduce inspecciones manuales en 80%",
      icon: "⚡",
      color: "bg-accent-blue"
    },
    {
      title: "Escalabilidad",
      description: "Sistema modular adaptable a crecimiento de instalaciones y nuevos silos",
      icon: "📈",
      color: "bg-accent"
    },
    {
      title: "Alertas Proactivas",
      description: "Notificaciones inmediatas previenen problemas antes de que afecten el producto",
      icon: "🚨",
      color: "bg-accent-blue"
    }
  ];

  return (
    <section className="py-20 bg-secondary">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold text-primary mb-4">Beneficios para BoortMalt</h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Implementación de tecnología IoT que transforma la gestión de silos en una ventaja competitiva
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
              <div className={`w-16 h-16 ${benefit.color} rounded-full flex items-center justify-center mb-4`}>
                <span className="text-2xl">{benefit.icon}</span>
              </div>
              
              <h3 className="text-xl font-semibold text-card-foreground mb-3">
                {benefit.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;