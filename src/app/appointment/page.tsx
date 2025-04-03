'use client'

import { InlineWidget } from '@calendly/embed-components'

export default function Appointment() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-64 flex items-center justify-center bg-primary">
        <div className="container relative z-10 text-center text-white">
          <h1 className="text-4xl font-bold">קבע פגישה</h1>
        </div>
      </section>

      {/* Calendly Widget Section */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-bold mb-6 text-center">בחרו את הזמן המתאים לכם</h2>
              <p className="text-gray-600 mb-8 text-center">
                אנא בחרו את סוג הפגישה ואת הזמן המתאים לכם. הפגישה תתקיים באופן וירטואלי או במשרד.
              </p>
              <InlineWidget
                url="https://calendly.com/your-calendly-url"
                styles={{
                  height: '630px',
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-6">צריכים עזרה?</h2>
            <p className="text-gray-600 mb-8">
              אם אתם מתקשים בקביעת הפגישה או שיש לכם שאלות נוספות,
              אנא צרו איתנו קשר בטלפון או במייל.
            </p>
            <div className="space-y-4">
              <p className="text-gray-600">
                טלפון: 03-1234567
              </p>
              <p className="text-gray-600">
                נייד: 050-1234567
              </p>
              <p className="text-gray-600">
                מייל: info@danino-insurance.co.il
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
} 