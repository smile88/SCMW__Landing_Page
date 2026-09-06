import React from 'react';
import { X, Shield, FileCheck, CheckCircle2 } from 'lucide-react';
import { BUSINESS_INFO } from '../data/content';

interface LegalModalProps {
  type: 'privacy' | 'terms' | null;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white rounded-xl max-w-3xl w-full p-6 sm:p-10 shadow-2xl relative max-h-[90vh] overflow-y-auto border border-[#0E4B3C]/20 font-sans">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full hover:bg-black/5 text-[#5B645F] hover:text-[#0B0F0D] transition-colors"
          aria-label="Close legal modal"
        >
          <X className="w-6 h-6" />
        </button>

        {type === 'privacy' ? (
          <div className="space-y-6 text-[#0B0F0D]">
            <div className="flex items-center gap-2 pb-3 border-b border-black/10">
              <Shield className="w-5 h-5 text-[#0E4B3C]" />
              <div>
                <h2 className="text-2xl font-editorial font-semibold text-[#0B0F0D]">
                  Privacy Policy
                </h2>
                <p className="text-xs text-[#5B645F] font-mono">
                  {BUSINESS_INFO.legalEntity} • Compliance with the Privacy Act 1988 (Cth)
                </p>
              </div>
            </div>

            <div className="space-y-4 text-sm text-[#0B0F0D]/90 leading-relaxed">
              <p>
                <strong>1. Commitment to Privacy</strong><br />
                S. C. Milenwall Pty Ltd (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;) is committed to protecting the privacy of individuals who interact with our website ({BUSINESS_INFO.domain}) and engage our advisory services. This policy outlines our obligations under the Australian Privacy Principles (APPs) contained in the <em>Privacy Act 1988 (Cth)</em>.
              </p>

              <p>
                <strong>2. Information We Collect</strong><br />
                We collect personal and commercial information that you voluntarily provide to us when submitting an enquiry or booking a consultation, including:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-xs text-[#5B645F]">
                <li>Contact details: full name, business email address, and phone number.</li>
                <li>Commercial context: trading entity name, current website domain, and stated operational bottlenecks.</li>
                <li>Technical analytics: aggregated, anonymised usage metrics via Google Analytics 4 (GA4) to assess page performance and conversion flow.</li>
              </ul>

              <p>
                <strong>3. Purpose of Collection &amp; Use</strong><br />
                We collect your information strictly for the purposes of evaluating your commercial requirement, conducting our 20-minute strategic review, delivering fixed-price proposals, and managing contracted projects. We never sell, lease, or distribute your personal or commercial data to third-party brokers or advertisers.
              </p>

              <p>
                <strong>4. Data Security &amp; Storage</strong><br />
                All electronic client data is stored in secure, encrypted environments adhering to modern enterprise security practices — reflecting our founder&apos;s background in cybersecurity infrastructure.
              </p>

              <p>
                <strong>5. Contacting Us Regarding Your Data</strong><br />
                To request access to or deletion of your information, email us directly at <a href={`mailto:${BUSINESS_INFO.email}`} className="text-[#0E4B3C] font-semibold underline">{BUSINESS_INFO.email}</a>.
              </p>
            </div>

            <div className="pt-4 border-t border-black/10 flex justify-end">
              <button
                onClick={onClose}
                className="px-5 py-2.5 rounded bg-[#0E4B3C] text-white hover:bg-[#082E24] text-xs font-semibold"
              >
                I Understand
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-6 text-[#0B0F0D]">
            <div className="flex items-center gap-2 pb-3 border-b border-black/10">
              <FileCheck className="w-5 h-5 text-[#0E4B3C]" />
              <div>
                <h2 className="text-2xl font-editorial font-semibold text-[#0B0F0D]">
                  Terms of Engagement &amp; Website Terms
                </h2>
                <p className="text-xs text-[#5B645F] font-mono">
                  {BUSINESS_INFO.legalEntity} • Sydney, New South Wales, Australia
                </p>
              </div>
            </div>

            <div className="space-y-4 text-sm text-[#0B0F0D]/90 leading-relaxed">
              <p>
                <strong>1. Fixed-Price Honesty Guarantee</strong><br />
                Every engagement conducted by S. C. Milenwall Pty Ltd is scoped and agreed upon with a binding, written fixed price before work begins. Unlike traditional agency hourly billing models, S. C. Milenwall assumes the delivery risk. If a deliverable requires additional iterations or technical adjustments within the agreed scope to meet enterprise standards, no additional fees will be charged.
              </p>

              <p>
                <strong>2. Single Point of Accountability</strong><br />
                All advisory, design, SEO architecture, and sales enablement services are led and delivered directly by Sinisa Milenkovic. We do not subcontract client accounts to third-party junior agencies or offshore brokerages.
              </p>

              <p>
                <strong>3. Intellectual Property Ownership</strong><br />
                Upon full settlement of project milestone invoices, all custom website source code, design collateral, strategic roadmap documents, and sales playbooks produced specifically for the client become the exclusive intellectual property of the client.
              </p>

              <p>
                <strong>4. 48-Hour Proposal Commitment</strong><br />
                Following an initial 20-minute operational discussion, S. C. Milenwall commits to issuing a structured, fixed-price proposal within 48 hours if both parties determine an engagement is commercially viable.
              </p>

              <p>
                <strong>5. Governing Jurisdiction</strong><br />
                These terms are governed by and construed in accordance with the laws of New South Wales, Australia.
              </p>
            </div>

            <div className="pt-4 border-t border-black/10 flex justify-end">
              <button
                onClick={onClose}
                className="px-5 py-2.5 rounded bg-[#0E4B3C] text-white hover:bg-[#082E24] text-xs font-semibold"
              >
                Accept &amp; Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
