import React, { useState } from 'react';
import { TESTIMONIALS, BUSINESS_INFO } from '../data/content';
import { TestimonialItem } from '../types';
import { 
  Quote, 
  Play, 
  Pause, 
  Volume2, 
  VolumeX, 
  X, 
  ArrowRight, 
  CheckCircle2, 
  TrendingUp, 
  Building2, 
  MapPin, 
  Award,
  Clock,
  Sparkles
} from 'lucide-react';

interface TestimonialsSectionProps {
  onSelectService?: (serviceId: string) => void;
  onBookCall?: () => void;
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({
  onSelectService,
  onBookCall,
}) => {
  const [selectedIndustry, setSelectedIndustry] = useState<string>('all');
  const [activeVideoItem, setActiveVideoItem] = useState<TestimonialItem | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [videoProgress, setVideoProgress] = useState<number>(35);

  const industries = [
    { id: 'all', label: 'All Sectors' },
    { id: 'Construction & Trades', label: 'Construction & Trades' },
    { id: 'B2B Tech & Cyber', label: 'B2B Tech & Cyber' },
    { id: 'Professional Services', label: 'Professional Services' },
    { id: 'Commercial Operations', label: 'Commercial Operations' },
  ];

  const filteredTestimonials = selectedIndustry === 'all' 
    ? TESTIMONIALS 
    : TESTIMONIALS.filter(t => t.industry === selectedIndustry);

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-white border-y border-[#0B0F0D]/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-10 bg-[#C9A961]" />
              <span className="text-[#C9A961] text-xs font-bold tracking-[0.25em] uppercase">
                Verified Client Outcomes
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-editorial font-medium text-[#0E4B3C] leading-tight">
              Enterprise calibre proof. <br />
              <span className="italic text-[#0B0F0D]">Measured on small business balance sheets.</span>
            </h2>
            <p className="text-base sm:text-lg text-[#5B645F] mt-3">
              Read how Sydney owner-operators and B2B leaders replaced vague agency retainers with fixed-price execution, predictable pipelines, and verifiable organic search rankings.
            </p>
          </div>

          {/* High-Level Impact Metric Pill */}
          <div className="bg-[#F6F7F5] border border-[#0B0F0D]/10 p-4 rounded-lg flex items-center gap-4 self-start md:self-auto shrink-0">
            <div className="w-10 h-10 rounded-full bg-[#0E4B3C] text-[#C9A961] flex items-center justify-center font-bold">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-[#0B0F0D]">100% Fixed-Price Adherence</div>
              <div className="text-xs text-[#5B645F]">Zero surprise invoices across all delivered scopes</div>
            </div>
          </div>
        </div>

        {/* Industry Filter Pills */}
        <div className="flex flex-wrap gap-2 mb-10">
          {industries.map(ind => (
            <button
              key={ind.id}
              onClick={() => setSelectedIndustry(ind.id)}
              className={`px-4 py-2 rounded text-xs font-semibold uppercase tracking-wider transition-all border ${
                selectedIndustry === ind.id
                  ? 'bg-[#0E4B3C] text-white border-[#0E4B3C] shadow-xs'
                  : 'bg-[#F6F7F5] text-[#5B645F] border-[#0B0F0D]/10 hover:border-[#C9A961] hover:text-[#0B0F0D]'
              }`}
            >
              {ind.label}
            </button>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredTestimonials.map((item) => (
            <div
              key={item.id}
              className="bg-[#F6F7F5] rounded-xl border border-[#0B0F0D]/10 p-6 sm:p-8 flex flex-col justify-between hover:border-[#0E4B3C]/30 transition-all hover:shadow-xs group"
            >
              <div>
                {/* Card Top: Industry & Service Tags + Video Indicator */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#0E4B3C] bg-[#0E4B3C]/10 px-2.5 py-1 rounded">
                      {item.industry}
                    </span>
                    <span className="text-[11px] font-mono text-[#5B645F] bg-white px-2.5 py-1 rounded border border-[#0B0F0D]/5">
                      {item.location}
                    </span>
                  </div>

                  {item.hasVideo && (
                    <button
                      onClick={() => setActiveVideoItem(item)}
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#C9A961]/20 hover:bg-[#C9A961]/30 text-[#0B0F0D] text-xs font-bold transition-colors border border-[#C9A961]/40"
                    >
                      <Play className="w-3 h-3 fill-[#0B0F0D]" />
                      <span>Video Review ({item.videoDuration})</span>
                    </button>
                  )}
                </div>

                {/* Primary Quote */}
                <div className="relative mb-6">
                  <Quote className="w-8 h-8 text-[#C9A961]/30 absolute -top-2 -left-2 pointer-events-none" />
                  <p className="text-base sm:text-lg text-[#0B0F0D] font-serif italic leading-relaxed pl-4 border-l-2 border-[#C9A961]">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                </div>

                {/* Challenge & Solution Architecture */}
                <div className="space-y-2.5 bg-white p-4 rounded-lg border border-[#0B0F0D]/5 text-xs mb-6">
                  <div>
                    <span className="font-mono font-bold text-[#9C7A3D] uppercase tracking-wider block">
                      The Bottleneck:
                    </span>
                    <p className="text-[#5B645F] mt-0.5">{item.challenge}</p>
                  </div>
                  <div className="pt-2 border-t border-[#0B0F0D]/5">
                    <span className="font-mono font-bold text-[#0E4B3C] uppercase tracking-wider block">
                      The Delivered System:
                    </span>
                    <p className="text-[#0B0F0D] font-medium mt-0.5">{item.solution}</p>
                  </div>
                </div>

                {/* 4 Metric Badges */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-6">
                  {item.metrics.map((m, idx) => (
                    <div key={idx} className="bg-white p-3 rounded border border-[#0B0F0D]/5 text-center">
                      <div className="text-sm sm:text-base font-bold text-[#0E4B3C] font-mono">
                        {m.value}
                      </div>
                      <div className="text-[10px] text-[#5B645F] uppercase font-sans tracking-tight mt-0.5 line-clamp-1">
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Client Profile Footer */}
              <div className="pt-4 border-t border-[#0B0F0D]/10 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#0E4B3C] text-white flex items-center justify-center font-bold text-sm">
                    {item.clientName.split(' ')[0][0]}
                  </div>
                  <div>
                    <div className="text-sm font-bold text-[#0B0F0D] flex items-center gap-1.5">
                      <span>{item.clientName}</span>
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#0E4B3C]" />
                    </div>
                    <div className="text-xs text-[#5B645F]">
                      {item.role}, <strong className="text-[#0B0F0D] font-normal">{item.company}</strong>
                    </div>
                  </div>
                </div>

                <div className="text-right">
                  <button
                    onClick={() => {
                      if (onBookCall) onBookCall();
                      else if (onSelectService) onSelectService('web-design');
                    }}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-[#0E4B3C] hover:text-[#C9A961] transition-colors"
                  >
                    <span>Discuss Similar Scope</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Assurance Bar */}
        <div className="mt-12 p-6 rounded-xl bg-[#0E4B3C] text-white flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#C9A961] text-[#0B0F0D] flex items-center justify-center font-bold shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-base font-editorial font-medium">
                Want to see the exact deliverables built for your sector?
              </h4>
              <p className="text-xs text-[#F6F7F5]/80 mt-0.5">
                During your 20-minute review with Sinisa, we walk through live Sydney client examples and concrete pricing scopes.
              </p>
            </div>
          </div>

          <button
            onClick={() => {
              if (onBookCall) onBookCall();
            }}
            className="shrink-0 px-6 py-3 rounded bg-[#C9A961] text-[#0B0F0D] hover:bg-[#9C7A3D] font-bold text-xs uppercase tracking-widest transition-colors shadow-xs"
          >
            Book 20-Min Review
          </button>
        </div>
      </div>

      {/* Video / Audio Case Review Modal */}
      {activeVideoItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs animate-in fade-in-50">
          <div className="bg-[#0B0F0D] text-white rounded-xl max-w-2xl w-full border border-white/10 overflow-hidden shadow-2xl relative">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-white/10 bg-[#0E4B3C]/50">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#C9A961]">
                  Verified Client Case Recording • {activeVideoItem.company}
                </span>
              </div>
              <button
                onClick={() => setActiveVideoItem(null)}
                className="p-1 rounded text-white/70 hover:text-white hover:bg-white/10 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Video Player Canvas Simulation */}
            <div className="relative aspect-video bg-gradient-to-br from-[#082E24] via-[#0B0F0D] to-[#121915] flex flex-col justify-between p-6">
              {/* Top Details */}
              <div className="flex items-center justify-between text-xs text-white/70 font-mono">
                <div className="flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-[#C9A961]" />
                  <span>{activeVideoItem.clientName} ({activeVideoItem.role})</span>
                </div>
                <span>{activeVideoItem.videoDuration} HD</span>
              </div>

              {/* Center Play Graphic */}
              <div className="text-center my-auto">
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="w-16 h-16 rounded-full bg-[#C9A961] text-[#0B0F0D] flex items-center justify-center mx-auto hover:scale-105 transition-transform shadow-lg"
                >
                  {isPlaying ? <Pause className="w-7 h-7 fill-[#0B0F0D]" /> : <Play className="w-7 h-7 fill-[#0B0F0D] ml-1" />}
                </button>
                <p className="text-xs text-white/60 font-mono mt-3">
                  {isPlaying ? 'Case walkthrough playing...' : 'Playback paused'}
                </p>

                {/* Animated Audio Waveform */}
                <div className="flex items-center justify-center gap-1 mt-3 h-6">
                  {[40, 70, 95, 60, 30, 85, 100, 45, 65, 80, 50, 90, 75, 35].map((h, i) => (
                    <div
                      key={i}
                      className={`w-1 bg-[#C9A961] rounded-full transition-all duration-300 ${
                        isPlaying ? 'opacity-90' : 'opacity-30'
                      }`}
                      style={{ height: isPlaying ? `${Math.min(100, h * (0.6 + (i % 3) * 0.2))}%` : '20%' }}
                    />
                  ))}
                </div>
              </div>

              {/* Bottom Video Progress Bar & Controls */}
              <div className="space-y-2">
                <div className="w-full bg-white/20 h-1.5 rounded-full overflow-hidden cursor-pointer">
                  <div
                    className="bg-[#C9A961] h-full transition-all"
                    style={{ width: `${videoProgress}%` }}
                  />
                </div>
                <div className="flex items-center justify-between text-xs text-white/70 font-mono">
                  <div className="flex items-center gap-3">
                    <button onClick={() => setIsPlaying(!isPlaying)} className="hover:text-white">
                      {isPlaying ? 'Pause' : 'Play'}
                    </button>
                    <button onClick={() => setIsMuted(!isMuted)} className="hover:text-white flex items-center gap-1">
                      {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
                      <span>{isMuted ? 'Unmute' : 'Mute'}</span>
                    </button>
                  </div>
                  <span>{activeVideoItem.videoDuration}</span>
                </div>
              </div>
            </div>

            {/* Transcript Area */}
            <div className="p-6 bg-[#0E1512] border-t border-white/10 space-y-4">
              <div>
                <span className="text-[11px] font-mono uppercase tracking-widest text-[#C9A961] font-bold block">
                  Verified Audio Transcript
                </span>
                <p className="text-sm text-[#F6F7F5]/90 mt-1.5 italic leading-relaxed font-serif">
                  {activeVideoItem.videoTranscript}
                </p>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
                <div className="text-xs text-[#5B645F] font-mono">
                  Service Scoped: {activeVideoItem.serviceUsed}
                </div>

                <button
                  onClick={() => {
                    setActiveVideoItem(null);
                    if (onBookCall) onBookCall();
                  }}
                  className="w-full sm:w-auto px-5 py-2.5 rounded bg-[#C9A961] text-[#0B0F0D] hover:bg-[#9C7A3D] font-bold text-xs uppercase tracking-widest transition-colors"
                >
                  Book 20-Min Call With Sinisa
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
