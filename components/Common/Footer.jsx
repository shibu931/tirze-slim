import { footerLinks } from '@/lib/constants/links'
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import React from 'react'
import Image from 'next/image';
import NewsletterForm from './NewsletterForm';

const Footer = () => {
  const t = useTranslations('Footer')
  const l = useTranslations('Links')
  return (
    <footer className="bg-gradient-to-t from-neutral-900 to-neutral-800 border-t border-neutral-700">
      <div className="container mx-auto px-4 pt-8 pb-6">
        <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-5 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <Link href="/" className="inline-block mb-2 transition-transform hover:scale-105">
              <Image
                src="/assets/logo.png"
                width={240}
                height={160}
                className=""
                alt="Tirze-slim"
              />
            </Link>
            <p className="text-neutral-300 text-base leading-relaxed mb-6">
              {t('footer_text')}
            </p>
          </div>

          {/* Products Links */}
          <div className="md:col-span-1">
            <h3 className="text-white font-semibold mb-4 text-lg tracking-wider border-b border-rose-600 pb-2">
              {t('top_products')}
            </h3>
            <ul className="space-y-3">
              {footerLinks.productLink.map((link) => (
                <li key={link.label}>
                  <Link 
                    href={link.slug}
                    className="text-neutral-300 hover:text-rose-500 transition-colors text-sm flex items-center"
                  >
                    <span className="w-1 h-1 bg-rose-600 rounded-full mr-2" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-1">
            <h3 className="text-white font-semibold mb-4 text-lg tracking-wider border-b border-rose-600 pb-2">
              {t('imp_link')}
            </h3>
            <ul className="space-y-3">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.slug}
                    className="text-neutral-300 hover:text-rose-500 transition-colors text-sm flex items-center"
                  >
                    <span className="w-1 h-1 bg-rose-600 rounded-full mr-2" />
                    {l(link.label)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="md:col-span-1">
            <h3 className="text-white font-semibold mb-4 text-lg tracking-wider border-b border-rose-600 pb-2">
              {t('newsletter')}
            </h3>
            <NewsletterForm />
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-neutral-700 mt-6 pt-6">
            <p className="text-neutral-400 text-sm text-center">
              Tirze-Slim © 2025 | {t('all_rights_reserved')}
            </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer