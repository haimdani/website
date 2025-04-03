import Image from 'next/image'

export default function About() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-64 flex items-center justify-center bg-primary">
        <div className="container relative z-10 text-center text-white">
          <h1 className="text-4xl font-bold">אודותינו</h1>
        </div>
      </section>

      {/* About Content */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">חיים דנינו זיו</h2>
              <p className="text-gray-600 mb-4">
                חיים דנינו זיו הוא סוכן ביטוח מקצועי עם ניסיון של למעלה מ-20 שנה בתחום הביטוח הפנסיוני והפיננסי.
                במהלך השנים צבר ניסיון רב בייעוץ פיננסי, תכנון פנסיוני וניהול תיקי לקוחות.
              </p>
              <p className="text-gray-600 mb-4">
                החזון שלנו הוא לספק ללקוחותינו את השירות המקצועי והאישי ביותר, תוך התאמת פתרונות ביטוח
                ופיננסיים לצרכים הייחודיים של כל לקוח.
              </p>
              <p className="text-gray-600">
                אנו מאמינים בשקיפות מלאה מול הלקוח, במתן שירות אישי וחם, ובמחויבות למצוינות מקצועית.
              </p>
            </div>
            <div className="relative h-96">
              <Image
                src="/about-image.jpg"
                alt="חיים דנינו זיו"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">הערכים שלנו</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">מקצועיות</h3>
              <p className="text-gray-600">
                אנו מתחייבים לרמת מקצועיות גבוהה ולעדכון מתמיד של הידע בתחום הביטוח והפיננסים.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">שקיפות</h3>
              <p className="text-gray-600">
                אנו מאמינים בשקיפות מלאה מול הלקוח ובמתן מידע מקיף ומדויק על כל מוצר ושירות.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">מחויבות</h3>
              <p className="text-gray-600">
                אנו מחויבים לרווחת הלקוח ולמציאת הפתרונות הטובים ביותר עבורו.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
} 