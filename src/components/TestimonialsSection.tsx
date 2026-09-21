import React, { useState, useEffect } from 'react';
import { TESTIMONIALS } from '../data/content';
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
  Building2, 
  Award,
  Clock,
  Sparkles,
  ListOrdered,
  FileText
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
  const [videoProgress, setVideoProgress] = useState<number>(30);
  const [activeChapterIndex, setActiveChapterIndex] = useState<number>(0);
  const [modalTab, setModalTab] = useState<'transcript' | 'chapters'>('transcript');

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

  // Parse time "MM:SS" into seconds
  const parseTimeToSeconds = (timeStr: string): number => {
    const parts = timeStr.split(':').map(Number);
    if (parts.length === 2) return parts[0] * 60 + parts[1];
    return 0;
  };

  // Convert seconds back to "M:SS"
  const formatSecondsToTime = (totalSec: number): string => {
    const mins = Math.floor(totalSec / 60);
    const secs = Math.floor(totalSec % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  const getDurationSec = (durationStr?: string): number => {
    if (!durationStr) return 200;
    if (durationStr.includes(':')) {
      return parseTimeToSeconds(durationStr);
    }
    return 200;
  };

  const durationSec = getDurationSec(activeVideoItem?.videoDuration);
  const currentSec = Math.floor((videoProgress / 100) * durationSec);

  // Simulate progress when playing
  useEffect(() => {
    if (!isPlaying || !activeVideoItem) return;
    const interval = setInterval(() => {
      setVideoProgress(prev => {
        if (prev >= 100) return 0;
        return prev + 0.5;
      });
    }, 500);
    return () => clearInterval(interval);
  }, [isPlaying, activeVideoItem]);

  // Jump to chapter
  const handleJumpToChapter = (chapterTime: string, index: number) => {
    const chapSec = parseTimeToSeconds(chapterTime);
    const newProgress = Math.min(100, Math.max(0, (chapSec / durationSec) * 100));
    setVideoProgress(newProgress);
    setActiveChapterIndex(index);
    setIsPlaying(true);
  };

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-white border-y-2 border-[#0B0F0D] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-0.5 w-10 bg-[#C9A961]" />
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
          <div className="bg-[#F6F7F5] border-2 border-[#0B0F0D] p-4 rounded-lg flex items-center gap-4 self-start md:self-auto shrink-0 shadow-2xs">
            <div className="w-10 h-10 rounded-full bg-[#0E4B3C] text-[#C9A961] flex items-center justify-center font-bold border-2 border-[#0B0F0D]">
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
              className={`px-4 py-2 rounded text-xs font-semibold uppercase tracking-wider transition-all border-2 ${
                selectedIndustry === ind.id
                  ? 'bg-[#0E4B3C] text-white border-[#0B0F0D] shadow-xs'
                  : 'bg-[#F6F7F5] text-[#5B645F] border-[#0B0F0D] hover:border-[#C9A961] hover:text-[#0B0F0D]'
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
              className="bg-[#F6F7F5] rounded-xl border-2 border-[#0B0F0D] p-6 sm:p-8 flex flex-col justify-between hover:shadow-md transition-all group"
            >
              <div>
                {/* Card Top: Industry & Service Tags + Video Indicator */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#0E4B3C] bg-[#0E4B3C]/10 px-2.5 py-1 rounded border border-[#0B0F0D]">
                      {item.industry}
                    </span>
                    <span className="text-[11px] font-mono text-[#5B645F] bg-white px-2.5 py-1 rounded border border-[#0B0F0D]">
                      {item.location}
                    </span>
                  </div>

                  {item.hasVideo && (
                    <button
                      onClick={() => setActiveVideoItem(item)}
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#C9A961]/20 hover:bg-[#C9A961]/30 text-[#0B0F0D] text-xs font-bold transition-colors border-2 border-[#0B0F0D]"
                    >
                      <Play className="w-3 h-3 fill-[#0B0F0D]" />
                      <span>Video Review ({item.videoDuration})</span>
                    </button>
                  )}
                </div>

                {/* Primary Quote */}
                <div className="relative mb-6">
                  <Quote className="w-8 h-8 text-[#C9A961]/30 absolute -top-2 -left-2 pointer-events-none" />
                  <p className="text-base sm:text-lg text-[#0B0F0D] font-serif italic leading-relaxed pl-4 border-l-4 border-[#C9A961]">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                </div>

                {/* Challenge & Solution Architecture */}
                <div className="space-y-2.5 bg-white p-4 rounded-lg border-2 border-[#0B0F0D] text-xs mb-6">
                  <div>
                    <span className="font-mono font-bold text-[#9C7A3D] uppercase tracking-wider block">
                      The Bottleneck:
                    </span>
                    <p className="text-[#5B645F] mt-0.5">{item.challenge}</p>
                  </div>
                  <div className="pt-2 border-t-2 border-[#0B0F0D]/15">
                    <span className="font-mono font-bold text-[#0E4B3C] uppercase tracking-wider block">
                      The Delivered System:
                    </span>
                    <p className="text-[#0B0F0D] font-medium mt-0.5">{item.solution}</p>
                  </div>
                </div>

                {/* 4 Metric Badges with details */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-6">
                  {item.metrics.map((m, idx) => (
                    <div key={idx} className="bg-white p-3 rounded border-2 border-[#0B0F0D] text-center flex flex-col justify-between">
                      <div className="text-sm sm:text-base font-bold text-[#0E4B3C] font-mono">
                        {m.value}
                      </div>
                      <div>
                        <div className="text-[10px] text-[#0B0F0D] font-semibold uppercase font-sans tracking-tight mt-0.5">
                          {m.label}
                        </div>
                        {m.detail && (
                          <div className="text-[9px] text-[#5B645F] font-mono mt-0.5 truncate" title={m.detail}>
                            {m.detail}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Client Profile Footer */}
              <div className="pt-4 border-t-2 border-[#0B0F0D] flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#0E4B3C] text-[#C9A961] flex items-center justify-center font-bold text-sm border-2 border-[#0B0F0D]">
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
        <div className="mt-12 p-6 rounded-xl bg-[#0E4B3C] text-white flex flex-col sm:flex-row items-center justify-between gap-4 border-2 border-[#0B0F0D]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#C9A961] text-[#0B0F0D] flex items-center justify-center font-bold shrink-0 border-2 border-[#0B0F0D]">
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
            className="shrink-0 px-6 py-3 rounded bg-[#C9A961] text-[#0B0F0D] hover:bg-[#9C7A3D] font-bold text-xs uppercase tracking-widest transition-colors shadow-xs border-2 border-[#0B0F0D]"
          >
            Book 20-Min Review
          </button>
        </div>
      </div>

      {/* Video / Audio Case Review Modal */}
      {activeVideoItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xs animate-in fade-in-50">
          <div className="bg-[#0B0F0D] text-white rounded-xl max-w-3xl w-full border-2 border-[#0B0F0D] overflow-hidden shadow-2xl relative max-h-[92vh] flex flex-col">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b-2 border-white/10 bg-[#082E24] shrink-0">
              <div className="flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse" />
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#C9A961]">
                  Verified Client Case Recording • {activeVideoItem.company}
                </span>
              </div>
              <button
                onClick={() => setActiveVideoItem(null)}
                className="p-1.5 rounded text-white/70 hover:text-white hover:bg-white/10 transition-colors border border-white/20"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Video Player Canvas Simulation */}
            <div className="relative aspect-video bg-gradient-to-br from-[#082E24] via-[#0B0F0D] to-[#121915] flex flex-col justify-between p-6 shrink-0">
              {/* Top Details */}
              <div className="flex items-center justify-between text-xs text-white/80 font-mono">
                <div className="flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-[#C9A961]" />
                  <span>{activeVideoItem.clientName} ({activeVideoItem.role})</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-[#C9A961]" />
                  <span>{formatSecondsToTime(currentSec)} / {formatSecondsToTime(durationSec)}</span>
                </div>
              </div>

              {/* Center Play Graphic & Waveform */}
              <div className="text-center my-auto">
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="w-16 h-16 rounded-full bg-[#C9A961] text-[#0B0F0D] flex items-center justify-center mx-auto hover:scale-105 transition-transform shadow-lg border-2 border-[#0B0F0D]"
                  aria-label={isPlaying ? 'Pause walkthrough' : 'Play walkthrough'}
                >
                  {isPlaying ? <Pause className="w-7 h-7 fill-[#0B0F0D]" /> : <Play className="w-7 h-7 fill-[#0B0F0D] ml-1" />}
                </button>
                <p className="text-xs text-white/70 font-mono mt-3">
                  {isPlaying ? 'Case walkthrough playing...' : 'Playback paused'}
                </p>

                {/* Animated Audio Waveform */}
                <div className="flex items-center justify-center gap-1 mt-3 h-6">
                  {[35, 65, 95, 60, 30, 85, 100, 45, 75, 90, 50, 85, 70, 40].map((h, i) => (
                    <div
                      key={i}
                      className={`w-1.5 bg-[#C9A961] rounded-full transition-all duration-300 ${
                        isPlaying ? 'opacity-90' : 'opacity-30'
                      }`}
                      style={{ height: isPlaying ? `${Math.min(100, h * (0.6 + (i % 3) * 0.2))}%` : '25%' }}
                    />
                  ))}
                </div>
              </div>

              {/* Bottom Video Progress Bar & Controls */}
              <div className="space-y-2">
                <div 
                  className="w-full bg-white/20 h-2 rounded-full overflow-hidden cursor-pointer border border-black/30"
                  onClick={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    const clickX = e.clientX - rect.left;
                    const newProgress = Math.min(100, Math.max(0, (clickX / rect.width) * 100));
                    setVideoProgress(newProgress);
                  }}
                >
                  <div
                    className="bg-[#C9A961] h-full transition-all"
                    style={{ width: `${videoProgress}%` }}
                  />
                </div>
                <div className="flex items-center justify-between text-xs text-white/70 font-mono">
                  <div className="flex items-center gap-4">
                    <button 
                      onClick={() => setIsPlaying(!isPlaying)} 
                      className="hover:text-white font-semibold flex items-center gap-1"
                    >
                      {isPlaying ? 'Pause' : 'Play'}
                    </button>
                    <button 
                      onClick={() => setIsMuted(!isMuted)} 
                      className="hover:text-white flex items-center gap-1"
                    >
                      {isMuted ? <VolumeX className="w-3.5 h-3.5 text-red-400" /> : <Volume2 className="w-3.5 h-3.5 text-[#C9A961]" />}
                      <span>{isMuted ? 'Unmute' : 'Mute'}</span>
                    </button>
                  </div>
                  <span>{activeVideoItem.videoDuration} HD</span>
                </div>
              </div>
            </div>

            {/* Chapters & Transcript Tabs */}
            <div className="border-t-2 border-white/10 bg-[#0E1512] px-6 pt-3 flex items-center gap-4 text-xs font-mono shrink-0">
              <button
                onClick={() => setModalTab('transcript')}
                className={`pb-2.5 font-bold uppercase tracking-wider flex items-center gap-1.5 border-b-2 transition-colors ${
                  modalTab === 'transcript'
                    ? 'border-[#C9A961] text-[#C9A961]'
                    : 'border-transparent text-white/60 hover:text-white'
                }`}
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Transcript</span>
              </button>

              {activeVideoItem.chapters && activeVideoItem.chapters.length > 0 && (
                <button
                  onClick={() => setModalTab('chapters')}
                  className={`pb-2.5 font-bold uppercase tracking-wider flex items-center gap-1.5 border-b-2 transition-colors ${
                    modalTab === 'chapters'
                      ? 'border-[#C9A961] text-[#C9A961]'
                      : 'border-transparent text-white/60 hover:text-white'
                  }`}
                >
                  <ListOrdered className="w-3.5 h-3.5" />
                  <span>Chapters ({activeVideoItem.chapters.length})</span>
                </button>
              )}
            </div>

            {/* Modal Body: Transcript or Chapters */}
            <div className="p-6 bg-[#090E0C] overflow-y-auto flex-1 space-y-4">
              {modalTab === 'transcript' && (
                <div className="space-y-3">
                  {activeVideoItem.transcript && activeVideoItem.transcript.length > 0 ? (
                    activeVideoItem.transcript.map((line, idx) => (
                      <div 
                        key={idx} 
                        className="p-3 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors flex gap-3 text-sm"
                      >
                        <span className="text-[11px] font-mono text-[#C9A961] font-semibold shrink-0 pt-0.5">
                          {line.time}
                        </span>
                        <div>
                          <strong className="text-xs font-mono text-white/90 block mb-0.5">
                            {line.speaker}:
                          </strong>
                          <p className="text-white/80 font-serif italic text-sm leading-relaxed">
                            {line.text}
                          </p>
                        </div>
                      </div>
                    ))
                  ) : (
                    <p className="text-sm text-[#F6F7F5]/90 italic leading-relaxed font-serif">
                      {activeVideoItem.videoTranscript}
                    </p>
                  )}
                </div>
              )}

              {modalTab === 'chapters' && activeVideoItem.chapters && (
                <div className="space-y-2">
                  {activeVideoItem.chapters.map((chap, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleJumpToChapter(chap.time, idx)}
                      className={`w-full text-left p-3 rounded-lg border transition-colors flex items-center justify-between text-sm ${
                        activeChapterIndex === idx
                          ? 'bg-[#0E4B3C]/50 border-[#C9A961] text-white'
                          : 'bg-white/5 border-white/10 text-white/80 hover:bg-white/10'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="w-6 h-6 rounded-full bg-[#C9A961] text-[#0B0F0D] font-mono font-bold text-xs flex items-center justify-center shrink-0">
                          {idx + 1}
                        </span>
                        <span className="font-sans font-medium">{chap.title}</span>
                      </div>
                      <span className="text-xs font-mono text-[#C9A961] shrink-0 pl-2">
                        {chap.time}
                      </span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Modal Footer CTA */}
            <div className="p-4 bg-[#082E24] border-t-2 border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
              <div className="text-xs text-white/70 font-mono">
                Service Scoped: <strong className="text-white font-medium">{activeVideoItem.serviceUsed}</strong>
              </div>

              <button
                onClick={() => {
                  setActiveVideoItem(null);
                  if (onBookCall) onBookCall();
                }}
                className="w-full sm:w-auto px-5 py-2.5 rounded bg-[#C9A961] text-[#0B0F0D] hover:bg-[#9C7A3D] font-bold text-xs uppercase tracking-widest transition-colors border-2 border-[#0B0F0D]"
              >
                Book 20-Min Call With Sinisa
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
