'use client'

import { ArrowRight } from 'lucide-react'
import LinkWithLang from '@/components/common/LinkWithLang'
import FinalCTA from '@/components/sections/FinalCTA'

type Props = {
  title: string
  subtitle: string
  body: React.ReactNode
}

export default function SeoLandingContent({ title, subtitle, body }: Props) {
  return (
    <div className="min-h-screen">
      <section className="py-20 lg:py-28 bg-gradient-to-br from-primary-50 via-white to-accent-50/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl lg:text-4xl font-bold text-primary-800 mb-4">
            {title}
          </h1>
          <p className="text-xl text-primary-600 mb-8">
            {subtitle}
          </p>
          <div className="prose prose-lg text-primary-700 max-w-none mb-12">
            {body}
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <LinkWithLang href="/demo-trial">
              <span className="inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-gradient-to-r from-accent-500 to-accent-600 text-white font-medium rounded-lg hover:from-accent-600 hover:to-accent-700 transition-all shadow-md hover:shadow-lg cursor-pointer">
                View demo
                <ArrowRight className="w-4 h-4" />
              </span>
            </LinkWithLang>
            <LinkWithLang href="/signup">
              <span className="inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-white border border-primary-200 text-primary-700 font-medium rounded-lg hover:border-accent-300 hover:text-accent-700 transition-all cursor-pointer">
                Try demo now
              </span>
            </LinkWithLang>
          </div>
        </div>
      </section>
      <FinalCTA />
    </div>
  )
}
