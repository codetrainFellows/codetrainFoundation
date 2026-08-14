import React from 'react';
import { HandHeart, ShieldCheck } from 'lucide-react';

export const DONATE_URL = 'https://www.every.org/maecenata-stiftung/f/empower-african-youth';

const DonateSection: React.FC = () => {
  return (
    <section id="donate" className="bg-white py-16 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <div className="bg-gradient-to-r from-[#00838f] to-[#006064] text-white rounded-2xl p-8 sm:p-12 text-center shadow-xl">
          <div className="bg-white/10 w-12 h-12 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
            <HandHeart className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-4 px-2">
            Support the Next Generation of African Tech Talent
          </h2>

          <p className="text-base sm:text-lg text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed px-2">
            Your support helps talented young Africans access world-class education in
            Software Engineering, Artificial Intelligence and Digital Product Design
            through scholarships, training and career support.
          </p>

          <a
            href={DONATE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 sm:gap-3 bg-white text-[#00838f] px-8 sm:px-10 py-3 sm:py-4 rounded-xl font-bold text-base sm:text-lg hover:bg-slate-50 transition-all shadow-lg hover:shadow-xl hover:scale-105 active:scale-95"
          >
            <HandHeart className="w-5 h-5 sm:w-6 sm:h-6" />
            Donate Now
          </a>

          <p className="text-white/70 text-xs sm:text-sm mt-6 max-w-2xl mx-auto leading-relaxed flex items-start justify-center gap-2 px-2">
            <ShieldCheck className="w-4 h-4 flex-shrink-0 mt-0.5" />
            <span>
              Donations made through this page are tax-deductible for eligible donors in the
              United States and are securely processed through{' '}
              <a
                href="https://www.every.org"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-white transition-colors"
              >
                Every.org
              </a>{' '}
              in partnership with Maecenata Foundation.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default DonateSection;
