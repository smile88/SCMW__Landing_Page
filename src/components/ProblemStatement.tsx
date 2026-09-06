import React from 'react';
import { AlertCircle, CheckCircle, Clock, ShieldCheck, UserX, UserCheck, DollarSign, Target } from 'lucide-react';

export const ProblemStatement: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-white border-b border-[#0E4B3C]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Core Statement Box */}
        <div className="max-w-4xl mx-auto text-center space-y-6 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#0E4B3C]/5 border border-[#0E4B3C]/15">
            <span className="text-xs font-mono uppercase tracking-widest text-[#0E4B3C] font-semibold">
              The Fundamental Gap
            </span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-editorial font-semibold text-[#0B0F0D] leading-tight">
            &ldquo;You&apos;re not short of effort. You&apos;re short of a system.&rdquo;
          </h2>

          <p className="text-lg sm:text-xl text-[#5B645F] font-normal leading-relaxed">
            A website that hasn&apos;t changed in years. A pipeline that lives in someone&apos;s head. Marketing that happens when there&apos;s time, which is rarely. None of that is a personal failing — it&apos;s what happens when nobody&apos;s ever built the business a proper growth system.
          </p>
        </div>

        {/* Structural Contrast Grid: The Typical Agency Trap vs The S. C. Milenwall System */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          {/* Column 1: The Status Quo (Freelancer / Traditional Agency) */}
          <div className="bg-[#F6F7F5] rounded-xl p-6 sm:p-8 border border-red-200/60 relative">
            <div className="flex items-center gap-3 pb-4 mb-6 border-b border-black/10">
              <div className="p-2 rounded bg-red-100 text-red-700">
                <AlertCircle className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-editorial font-semibold text-[#0B0F0D]">
                  The Typical Small Business Trap
                </h3>
                <p className="text-xs text-[#5B645F]">
                  Generalist freelancers &amp; hour-billing digital agencies
                </p>
              </div>
            </div>

            <ul className="space-y-4 text-sm text-[#0B0F0D]">
              <li className="flex items-start gap-3">
                <UserX className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                <div>
                  <strong className="font-semibold block text-[#0B0F0D]">The Junior Handoff:</strong>
                  Pitched by an experienced agency director, then quietly reassigned to a 22-year-old account coordinator learning on your dime.
                </div>
              </li>

              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                <div>
                  <strong className="font-semibold block text-[#0B0F0D]">Hourly Billing &amp; Scope Creep:</strong>
                  Open-ended meter where the slower and more disorganised the agency is, the larger your month-end invoice becomes.
                </div>
              </li>

              <li className="flex items-start gap-3">
                <Target className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                <div>
                  <strong className="font-semibold block text-[#0B0F0D]">Vanity Metrics Over Pipeline:</strong>
                  Reports celebrating "impressions", "reach", and "social engagement" while your actual bank balance and pipeline stay flat.
                </div>
              </li>

              <li className="flex items-start gap-3">
                <DollarSign className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                <div>
                  <strong className="font-semibold block text-[#0B0F0D]">No Commercial Sales Acumen:</strong>
                  Built by designers who have never had to carry quota, cold call a prospect, or negotiate a commercial contract.
                </div>
              </li>
            </ul>
          </div>

          {/* Column 2: The S. C. Milenwall Standard */}
          <div className="bg-[#082E24] text-[#F6F7F5] rounded-xl p-6 sm:p-8 border border-[#C9A961]/40 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#C9A961]/10 rounded-full blur-2xl pointer-events-none" />

            <div className="flex items-center gap-3 pb-4 mb-6 border-b border-[#C9A961]/25 relative z-10">
              <div className="p-2 rounded bg-[#0E4B3C] border border-[#C9A961]/30 text-[#C9A961]">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-editorial font-semibold text-white">
                  The S. C. Milenwall Method
                </h3>
                <p className="text-xs text-[#C9A961] font-mono">
                  Enterprise rigor, applied at small business scale
                </p>
              </div>
            </div>

            <ul className="space-y-4 text-sm text-[#F6F7F5]/90 relative z-10">
              <li className="flex items-start gap-3">
                <UserCheck className="w-5 h-5 text-[#C9A961] shrink-0 mt-0.5" />
                <div>
                  <strong className="font-semibold block text-white">Single Point of Accountability:</strong>
                  The person who scopes your project is the person who designs and implements it. No account managers, no game of telephone.
                </div>
              </li>

              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-[#C9A961] shrink-0 mt-0.5" />
                <div>
                  <strong className="font-semibold block text-white">Fixed-Price Honesty:</strong>
                  Every project has an agreed fixed fee before work begins. We shoulder the delivery risk. No surprise invoices ever.
                </div>
              </li>

              <li className="flex items-start gap-3">
                <Target className="w-5 h-5 text-[#C9A961] shrink-0 mt-0.5" />
                <div>
                  <strong className="font-semibold block text-white">Direct Commercial Enquiries:</strong>
                  Every page, keyword, and playbook is designed for one explicit outcome: generating qualified enquiries that convert into revenue.
                </div>
              </li>

              <li className="flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-[#C9A961] shrink-0 mt-0.5" />
                <div>
                  <strong className="font-semibold block text-white">Enterprise Quota Heritage:</strong>
                  Built by Sinisa Milenkovic with quota-carrying discipline inside Mandiant and Fortinet — the most process-driven tech sales firms in the world.
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
