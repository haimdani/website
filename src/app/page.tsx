import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero-bg.jpg"
            alt="Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="container relative z-10 text-center text-white">
          <h1 className="text-5xl font-bold mb-6">חיים דנינו זיו</h1>
          <p className="text-2xl mb-8">סוכנות ביטוח מקצועית המתמחה בביטוח פנסיוני ופיננסי</p>
          <div className="flex gap-4 justify-center">
            <Link href="/contact" className="btn-primary">
              צור קשר
            </Link>
            <Link href="/appointment" className="btn-secondary">
              קבע פגישה
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <h2 className="text-4xl font-bold text-center mb-12">השירותים שלנו</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service Card 1 */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4">ביטוח פנסיוני</h3>
              <p className="text-gray-600">
                פתרונות פנסיה מותאמים אישית למטרות הפיננסיות שלך
              </p>
            </div>
            {/* Service Card 2 */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4">ייעוץ פיננסי</h3>
              <p className="text-gray-600">
                תכנון פיננסי מקיף למטרות קצרות וארוכות טווח
              </p>
            </div>
            {/* Service Card 3 */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4">ביטוח חיים</h3>
              <p className="text-gray-600">
                הגנה פיננסית למשפחתך במקרה של אירוע בלתי צפוי
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">מי אנחנו</h2>
              <p className="text-gray-600 mb-4">
                חיים דנינו זיו סוכנות לביטוח מספקת שירותי ביטוח וייעוץ פיננסי מקצועיים
                למעלה מ-20 שנה. אנו מתמחים בביטוח פנסיוני, ייעוץ פיננסי וביטוח חיים.
              </p>
              <Link href="/about" className="btn-primary inline-block">
                קרא עוד
              </Link>
            </div>
            <div className="relative h-96">
              <Image
                src="/about-image.jpg"
                alt="About Us"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
} 