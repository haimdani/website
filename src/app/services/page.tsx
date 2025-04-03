import Image from 'next/image'

export default function Services() {
  const services = [
    {
      title: 'ביטוח פנסיוני',
      description: 'תכנון פנסיוני מקיף הכולל קרנות פנסיה, ביטוח מנהלים, קופות גמל וקרנות השתלמות.',
      image: '/services/pension.jpg',
    },
    {
      title: 'ייעוץ פיננסי',
      description: 'ייעוץ פיננסי מקיף הכולל תכנון פיננסי, ניהול תיק השקעות והתאמת מוצרים פיננסיים.',
      image: '/services/financial.jpg',
    },
    {
      title: 'ביטוח חיים',
      description: 'פתרונות ביטוח חיים מותאמים אישית להגנה על המשפחה במקרה של אירוע בלתי צפוי.',
      image: '/services/life.jpg',
    },
    {
      title: 'ביטוח בריאות',
      description: 'ביטוחי בריאות משלימים וביטוחי מחלות קשות להגנה על הבריאות והכיס.',
      image: '/services/health.jpg',
    },
    {
      title: 'ביטוח סיעודי',
      description: 'פתרונות ביטוח סיעודי מותאמים אישית למקרה של אובדן כושר עבודה או תלות בזולת.',
      image: '/services/nursing.jpg',
    },
    {
      title: 'ביטוח עסקי',
      description: 'ביטוחים לעסקים קטנים ובינוניים כולל ביטוח אחריות מקצועית וביטוח רכוש.',
      image: '/services/business.jpg',
    },
  ]

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-64 flex items-center justify-center bg-primary">
        <div className="container relative z-10 text-center text-white">
          <h1 className="text-4xl font-bold">השירותים שלנו</h1>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-6">מוכנים להתחיל?</h2>
          <p className="text-gray-600 mb-8">
            צרו איתנו קשר לקבלת ייעוץ מקצועי והתאמת פתרונות ביטוח ופיננסיים לצרכים שלכם.
          </p>
          <div className="flex justify-center gap-4">
            <a href="/contact" className="btn-primary">
              צור קשר
            </a>
            <a href="/appointment" className="btn-secondary">
              קבע פגישה
            </a>
          </div>
        </div>
      </section>
    </main>
  )
} 