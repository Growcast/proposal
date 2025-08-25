const CompatibilitySupport = () => {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-primary mb-4">Compatibilidad y Soporte</h2>
          <div className="w-24 h-1 bg-accent"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Integración */}
          <div>
            <h3 className="text-2xl font-semibold text-foreground mb-6">Integración con Sistemas Existentes</h3>
            
            <div className="space-y-4">
              <div className="bg-card border border-border rounded-lg p-6">
                <h4 className="font-semibold text-card-foreground mb-3 flex items-center gap-3">
                  <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                    <span className="text-accent-foreground font-bold text-sm">ERP</span>
                  </div>
                  Sistemas ERP Empresariales
                </h4>
                <ul className="space-y-2 text-muted-foreground ml-11">
                  <li>• SAP, Oracle, Microsoft Dynamics</li>
                  <li>• APIs REST estándar de la industria</li>
                  <li>• Sincronización bidireccional de datos</li>
                  <li>• Mapeo de campos personalizable</li>
                </ul>
              </div>
              
              <div className="bg-card border border-border rounded-lg p-6">
                <h4 className="font-semibold text-card-foreground mb-3 flex items-center gap-3">
                  <div className="w-8 h-8 bg-accent-blue rounded-full flex items-center justify-center">
                    <span className="text-accent-blue-foreground font-bold text-xs">SCADA</span>
                  </div>
                  Sistemas SCADA/MES
                </h4>
                <ul className="space-y-2 text-muted-foreground ml-11">
                  <li>• Wonderware, iFIX, WinCC</li>
                  <li>• Protocolos Modbus, OPC-UA</li>
                  <li>• Integración en tiempo real</li>
                  <li>• Alarmas centralizadas</li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Soporte */}
          <div>
            <h3 className="text-2xl font-semibold text-foreground mb-6">Soporte y Mantenimiento</h3>
            
            <div className="space-y-4">
              <div className="bg-card border border-border rounded-lg p-6">
                <h4 className="font-semibold text-card-foreground mb-3 flex items-center gap-3">
                  <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                    <span className="text-accent-foreground font-bold text-sm">OTA</span>
                  </div>
                  Actualizaciones Remotas
                </h4>
                <ul className="space-y-2 text-muted-foreground ml-11">
                  <li>• Firmware OTA automático</li>
                  <li>• Nuevas funcionalidades sin interrupción</li>
                  <li>• Parches de seguridad programados</li>
                  <li>• Rollback automático en caso de falla</li>
                </ul>
              </div>
              
              <div className="bg-card border border-border rounded-lg p-6">
                <h4 className="font-semibold text-card-foreground mb-3 flex items-center gap-3">
                  <div className="w-8 h-8 bg-accent-blue rounded-full flex items-center justify-center">
                    <span className="text-accent-blue-foreground font-bold text-sm">24/7</span>
                  </div>
                  Soporte Técnico Multilingüe
                </h4>
                <ul className="space-y-2 text-muted-foreground ml-11">
                  <li>• Soporte en español e inglés</li>
                  <li>• Equipo técnico especializado IoT</li>
                  <li>• SLA de respuesta garantizado</li>
                  <li>• Acceso remoto para diagnóstico</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        {/* Training Section */}
        <div className="mt-16 bg-secondary rounded-lg p-8">
          <h3 className="text-2xl font-semibold text-foreground mb-6 text-center">Programa de Capacitación</h3>
          
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-accent-foreground font-bold">👥</span>
              </div>
              <h4 className="font-semibold text-foreground mb-2">Capacitación On-site</h4>
              <p className="text-muted-foreground text-sm">Entrenamiento presencial del equipo técnico</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-accent-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-accent-blue-foreground font-bold">📚</span>
              </div>
              <h4 className="font-semibold text-foreground mb-2">Documentación</h4>
              <p className="text-muted-foreground text-sm">Manuales técnicos y procedimientos operativos</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-accent-foreground font-bold">🎥</span>
              </div>
              <h4 className="font-semibold text-foreground mb-2">Webinars</h4>
              <p className="text-muted-foreground text-sm">Sesiones virtuales de formación continua</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-accent-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-accent-blue-foreground font-bold">🏆</span>
              </div>
              <h4 className="font-semibold text-foreground mb-2">Certificación</h4>
              <p className="text-muted-foreground text-sm">Programa de certificación técnica oficial</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompatibilitySupport;