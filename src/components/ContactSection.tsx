import React, { useState, useEffect } from 'react';
import { Mail, Clock, ShieldCheck, CheckCircle2, Phone, Send, ArrowRight, Building, User } from 'lucide-react';
import { SERVICES, BUSINESS_INFO } from '../data/content';

interface ContactSectionProps {
  initialService?: string;
  initialNotes?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  initialService = '',
  initialNotes = '',
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    serviceInterest: initialService || 'Website Design & Development',
    preferredTime: 'Morning (9am - 12pm)',
    message: initialNotes || '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (initialService) {
      // Find matching service name if id was passed
      const match = SERVICES.find((s) => s.id === initialService || s.name.toLowerCase().includes(initialService.toLowerCase()));
      if (match) {
        setFormData((prev) => ({ ...prev, serviceInterest: match.name }));
      } else {
        setFormData((prev) => ({ ...prev, serviceInterest: initialService }));
      }
    }
    if (initialNotes) {
      setFormData((prev) => ({
        ...prev,
        message: prev.message ? `${prev.message}\n${initialNotes}` : initialNotes,
      }));
    }
  }, [initialService, initialNotes]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    // Simulate frictionless booking submission with immediate confirmation
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-white border-b border-[#0E4B3C]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Call Commitment & Founder Context */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-3 mb-2">
              <div className="h-px w-10 bg-[#C9A961]" />
              <span className="text-[#C9A961] text-xs font-bold tracking-[0.25em] uppercase">
                Direct Engagement
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-editorial font-medium text-[#0E4B3C] leading-tight">
              Start with an honest <br />
              <span className="italic text-[#0B0F0D]">20-minute conversation.</span>
            </h2>

            {/* Approved Contact CTA Block */}
            <blockquote className="border-l-2 border-[#C9A961] pl-4 py-2 italic text-[#0B0F0D] text-base leading-relaxed bg-[#F6F7F5] rounded-r-md">
              &ldquo;Tell me what&apos;s not working, and I&apos;ll tell you honestly if it&apos;s worth fixing. No obligation, no generic pitch deck — a real 20-minute conversation about your business, followed by a fixed-price proposal within 48 hours if it makes sense to move ahead.&rdquo;
            </blockquote>

            {/* Specific Commitments */}
            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3 text-sm text-[#0B0F0D]">
                <div className="p-2 rounded bg-[#0E4B3C]/10 text-[#0E4B3C] shrink-0 mt-0.5">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <strong className="font-semibold block">48-Hour Proposal Guarantee:</strong>
                  You receive a detailed, fixed-price document within two business days. No open meters or ambiguous quotes.
                </div>
              </div>

              <div className="flex items-start gap-3 text-sm text-[#0B0F0D]">
                <div className="p-2 rounded bg-[#0E4B3C]/10 text-[#0E4B3C] shrink-0 mt-0.5">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <strong className="font-semibold block">Single Point of Accountability:</strong>
                  You talk directly with Sinisa Milenkovic. The person who evaluates your business builds and leads the project.
                </div>
              </div>

              <div className="flex items-start gap-3 text-sm text-[#0B0F0D]">
                <div className="p-2 rounded bg-[#0E4B3C]/10 text-[#0E4B3C] shrink-0 mt-0.5">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <strong className="font-semibold block">Direct Inbox:</strong>
                  Prefer email? Write to <a href={`mailto:${BUSINESS_INFO.email}`} className="text-[#0E4B3C] font-semibold underline">{BUSINESS_INFO.email}</a>.
                </div>
              </div>
            </div>

            <div className="p-4 rounded-lg bg-[#082E24] text-white border border-[#C9A961]/30 text-xs font-mono space-y-1">
              <div className="text-[#C9A961] uppercase tracking-wider">Business Snapshot</div>
              <div>Entity: {BUSINESS_INFO.legalEntity}</div>
              <div>Location: {BUSINESS_INFO.location}</div>
              <div>Response Time: &lt; 24 hours guaranteed</div>
            </div>
          </div>

          {/* Right Column: Contact & Scope Enquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#F6F7F5] rounded-xl border border-[#0E4B3C]/20 p-6 sm:p-10 shadow-sm relative">
              {submitted ? (
                <div className="text-center py-10 space-y-4 animate-in fade-in-50">
                  <div className="w-14 h-14 rounded-full bg-[#0E4B3C] text-[#C9A961] flex items-center justify-center mx-auto shadow-md">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-editorial font-semibold text-[#0B0F0D]">
                    Enquiry Received, {formData.name}.
                  </h3>
                  <p className="text-sm text-[#5B645F] max-w-md mx-auto leading-relaxed">
                    Sinisa Milenkovic has received your notes regarding <strong>{formData.serviceInterest}</strong> for <strong>{formData.company || 'your business'}</strong>.
                  </p>
                  <div className="p-4 rounded bg-white border border-[#0E4B3C]/15 text-xs text-[#0B0F0D] max-w-md mx-auto text-left font-mono">
                    <div className="text-[#0E4B3C] font-semibold mb-1">What Happens Next:</div>
                    1. Direct review by Sinisa within 1 business day.<br />
                    2. Calendar invitation sent for your 20-minute discussion.<br />
                    3. Formal fixed-price proposal delivered within 48 hours.
                  </div>
                  <div className="pt-4">
                    <button
                      onClick={() => setSubmitted(false)}
                      className="text-xs text-[#0E4B3C] underline hover:text-[#082E24]"
                    >
                      Submit additional notes or another enquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="pb-2 border-b border-black/10">
                    <h3 className="text-xl font-editorial font-semibold text-[#0B0F0D]">
                      Schedule Your 20-Minute Operational Review
                    </h3>
                    <p className="text-xs text-[#5B645F] mt-0.5">
                      No generic sales reps. Tell us what is not working and receive an honest assessment.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-mono uppercase text-[#5B645F] block mb-1">
                        Your Name *
                      </label>
                      <div className="relative">
                        <User className="w-4 h-4 text-gray-400 absolute left-3 top-2.5" />
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Sinisa Milenkovic"
                          className="w-full pl-9 pr-3 py-2 text-sm bg-white border border-black/15 rounded-md text-[#0B0F0D] focus:outline-hidden focus:border-[#0E4B3C]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-xs font-mono uppercase text-[#5B645F] block mb-1">
                        Work Email *
                      </label>
                      <div className="relative">
                        <Mail className="w-4 h-4 text-gray-400 absolute left-3 top-2.5" />
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="you@company.com.au"
                          className="w-full pl-9 pr-3 py-2 text-sm bg-white border border-black/15 rounded-md text-[#0B0F0D] focus:outline-hidden focus:border-[#0E4B3C]"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-mono uppercase text-[#5B645F] block mb-1">
                        Phone (Mobile)
                      </label>
                      <div className="relative">
                        <Phone className="w-4 h-4 text-gray-400 absolute left-3 top-2.5" />
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="0400 000 000"
                          className="w-full pl-9 pr-3 py-2 text-sm bg-white border border-black/15 rounded-md text-[#0B0F0D] focus:outline-hidden focus:border-[#0E4B3C]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-xs font-mono uppercase text-[#5B645F] block mb-1">
                        Company Name / Trading Name
                      </label>
                      <div className="relative">
                        <Building className="w-4 h-4 text-gray-400 absolute left-3 top-2.5" />
                        <input
                          type="text"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          placeholder="e.g. Sydney Glass Co."
                          className="w-full pl-9 pr-3 py-2 text-sm bg-white border border-black/15 rounded-md text-[#0B0F0D] focus:outline-hidden focus:border-[#0E4B3C]"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-mono uppercase text-[#5B645F] block mb-1">
                        Service of Primary Interest
                      </label>
                      <select
                        value={formData.serviceInterest}
                        onChange={(e) => setFormData({ ...formData, serviceInterest: e.target.value })}
                        className="w-full px-3 py-2 text-sm bg-white border border-black/15 rounded-md text-[#0B0F0D] focus:outline-hidden focus:border-[#0E4B3C]"
                      >
                        <option value="Website Design & Development">Website Design &amp; Dev (From $2,500)</option>
                        <option value="SEO & AI Search Visibility">SEO &amp; AI Search (From $1,500/mo)</option>
                        <option value="Marketing Strategy & Positioning">Marketing Strategy &amp; Roadmap (From $4,000)</option>
                        <option value="Sales Enablement & Marketing Systems">Sales Playbooks &amp; CRM (From $1,500)</option>
                        <option value="Comprehensive Growth Infrastructure">Complete System Architecture</option>
                        <option value="Unsure — General 20-Min Review">Unsure — Need 20-Min Diagnostic</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-xs font-mono uppercase text-[#5B645F] block mb-1">
                        Preferred 20-Min Time Slot
                      </label>
                      <select
                        value={formData.preferredTime}
                        onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                        className="w-full px-3 py-2 text-sm bg-white border border-black/15 rounded-md text-[#0B0F0D] focus:outline-hidden focus:border-[#0E4B3C]"
                      >
                        <option value="Morning (9am - 12pm)">Morning (9am – 12pm)</option>
                        <option value="Midday (12pm - 2pm)">Midday (12pm – 2pm)</option>
                        <option value="Afternoon (2pm - 5pm)">Afternoon (2pm – 5pm)</option>
                        <option value="After Hours / 8:30pm (Owner-Operator Slot)">
                          Evening 8:30pm (Owner-Operator Slot)
                        </option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-mono uppercase text-[#5B645F] block mb-1">
                      Tell me what&apos;s not working in your current setup:
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="e.g. Website hasn't changed in 3 years, pipeline is erratic, or we just hired two salespeople and they have no scripts or playbook..."
                      className="w-full p-3 text-sm bg-white border border-black/15 rounded-md text-[#0B0F0D] focus:outline-hidden focus:border-[#0E4B3C]"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full flex items-center justify-center gap-2 py-4 px-6 rounded bg-[#C9A961] text-[#0B0F0D] hover:bg-[#9C7A3D] font-bold text-xs sm:text-sm uppercase tracking-widest shadow-sm transition-colors min-h-[48px]"
                  >
                    {submitting ? (
                      <span>Transmitting Enquiry...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4 text-[#0B0F0D]" />
                        <span>Book 20-Min Review &amp; Lock In 48-Hr Proposal</span>
                        <ArrowRight className="w-4 h-4 text-[#0B0F0D]" />
                      </>
                    )}
                  </button>

                  <div className="flex items-center justify-center gap-2 text-[11px] text-[#5B645F] font-mono text-center pt-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#0E4B3C]" />
                    <span>No obligation. No junior account handoff. Honest assessment.</span>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
