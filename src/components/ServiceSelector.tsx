import React, { useState } from 'react';
import { SELECTOR_QUESTIONS, SERVICES } from '../data/content';
import { ServiceItem } from '../types';
import { 
  CheckCircle2, 
  ArrowRight, 
  ArrowLeft, 
  RotateCcw, 
  Sparkles, 
  Clock, 
  DollarSign, 
  ShieldCheck, 
  Calendar,
  Layers,
  Check
} from 'lucide-react';

interface ServiceSelectorProps {
  onSelectServiceWithScope?: (details: { service: string; notes: string }) => void;
  standalone?: boolean;
}

export const ServiceSelector: React.FC<ServiceSelectorProps> = ({
  onSelectServiceWithScope,
  standalone = false,
}) => {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, string>>({});
  const [showResult, setShowResult] = useState<boolean>(false);

  const activeQuestion = SELECTOR_QUESTIONS[currentStep];

  const handleSelectOption = (questionId: string, optionId: string) => {
    const updated = { ...selectedAnswers, [questionId]: optionId };
    setSelectedAnswers(updated);

    // Auto-advance to next question or show results
    if (currentStep < SELECTOR_QUESTIONS.length - 1) {
      setCurrentStep(prev => prev + 1);
    } else {
      setShowResult(true);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const handleReset = () => {
    setSelectedAnswers({});
    setCurrentStep(0);
    setShowResult(false);
  };

  // Calculate scores for each service
  const calculateRecommendation = () => {
    const scores: Record<string, number> = {
      'web-design': 0,
      'seo-ai-search': 0,
      'marketing-strategy': 0,
      'sales-enablement': 0,
    };

    SELECTOR_QUESTIONS.forEach((q) => {
      const chosenOptionId = selectedAnswers[q.id];
      if (!chosenOptionId) return;

      const option = q.options.find((opt) => opt.id === chosenOptionId);
      if (option && option.serviceWeights) {
        Object.entries(option.serviceWeights).forEach(([serviceId, weight]) => {
          if (weight) {
            scores[serviceId] = (scores[serviceId] || 0) + weight;
          }
        });
      }
    });

    // Sort services by score descending
    const sortedServices = Object.entries(scores).sort((a, b) => b[1] - a[1]);
    const topServiceId = sortedServices[0][0];
    const secondaryServiceId = sortedServices[1][0];

    const primaryService = SERVICES.find(s => s.id === topServiceId) || SERVICES[0];
    const secondaryService = SERVICES.find(s => s.id === secondaryServiceId);

    // Calculate match percentage
    const maxPossibleScore = 12;
    const topScore = sortedServices[0][1];
    const matchPercentage = Math.min(98, Math.max(82, Math.round((topScore / maxPossibleScore) * 100)));

    return {
      primaryService,
      secondaryService,
      matchPercentage,
      scores,
    };
  };

  const recommendation = showResult ? calculateRecommendation() : null;

  const handleProceedToContact = (service: ServiceItem, secondary?: ServiceItem) => {
    const answerSummary = SELECTOR_QUESTIONS.map(q => {
      const optId = selectedAnswers[q.id];
      const opt = q.options.find(o => o.id === optId);
      return `${q.title}: ${opt ? opt.label : 'N/A'}`;
    }).join('\n');

    const notes = `Selected via Interactive Service Selector (Match: ${recommendation?.matchPercentage}%)\nPrimary Recommendation: ${service.name} (${service.startingPrice})\n${secondary ? `Complementary Offering: ${secondary.name}\n` : ''}\nDiagnostic Responses:\n${answerSummary}`;

    if (onSelectServiceWithScope) {
      onSelectServiceWithScope({
        service: service.id,
        notes,
      });
    }
  };

  return (
    <div id="service-selector-tool" className={`w-full ${standalone ? 'py-6' : ''}`}>
      <div className="bg-white rounded-xl border border-[#0B0F0D]/10 shadow-sm overflow-hidden">
        {/* Top Progress and Header Bar */}
        <div className="bg-[#0E4B3C] text-white p-6 sm:p-8 relative overflow-hidden">
          {/* Subtle geometric ring watermark */}
          <div className="absolute right-0 top-0 w-80 h-80 rounded-full border border-white/5 -mr-20 -mt-20 pointer-events-none" />
          
          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#C9A961]" />
                <span className="text-[#C9A961] text-xs font-bold tracking-[0.25em] uppercase">
                  Service Recommendation Engine
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-editorial font-medium text-white">
                Find Your Exact Fixed-Fee Match
              </h3>
              <p className="text-xs sm:text-sm text-[#F6F7F5]/80 mt-1 max-w-xl">
                Answer 4 operational questions to instantly identify which S. C. Milenwall system eliminates your specific commercial bottleneck.
              </p>
            </div>

            {!showResult && (
              <div className="flex items-center gap-3 self-start md:self-auto bg-white/10 px-4 py-2 rounded-lg backdrop-blur-xs border border-white/10">
                <div className="text-right">
                  <span className="text-xs font-mono text-[#C9A961] block font-bold">
                    STEP {currentStep + 1} OF {SELECTOR_QUESTIONS.length}
                  </span>
                  <span className="text-xs text-white/70">
                    {Math.round(((currentStep + 1) / SELECTOR_QUESTIONS.length) * 100)}% Complete
                  </span>
                </div>
                <div className="w-16 h-2 bg-white/20 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-[#C9A961] transition-all duration-300"
                    style={{ width: `${((currentStep + 1) / SELECTOR_QUESTIONS.length) * 100}%` }}
                  />
                </div>
              </div>
            )}

            {showResult && (
              <button
                onClick={handleReset}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-white/10 hover:bg-white/20 text-xs font-semibold uppercase tracking-wider text-[#C9A961] transition-colors border border-white/10"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Restart Selector</span>
              </button>
            )}
          </div>
        </div>

        {/* Questionnaire Stage */}
        {!showResult && activeQuestion && (
          <div className="p-6 sm:p-10">
            {/* Question Title & Subtitle */}
            <div className="mb-8">
              <span className="text-xs font-mono font-bold text-[#C9A961] uppercase tracking-wider block mb-1">
                Question {currentStep + 1}
              </span>
              <h4 className="text-xl sm:text-2xl font-editorial font-semibold text-[#0B0F0D]">
                {activeQuestion.title}
              </h4>
              <p className="text-sm text-[#5B645F] mt-1.5">
                {activeQuestion.subtitle}
              </p>
            </div>

            {/* Options List */}
            <div className="space-y-3 mb-8">
              {activeQuestion.options.map((option) => {
                const isSelected = selectedAnswers[activeQuestion.id] === option.id;
                return (
                  <button
                    key={option.id}
                    id={`selector-opt-${option.id}`}
                    onClick={() => handleSelectOption(activeQuestion.id, option.id)}
                    className={`w-full text-left p-4 sm:p-5 rounded-lg border transition-all flex items-start justify-between gap-4 group ${
                      isSelected
                        ? 'border-[#0E4B3C] bg-[#0E4B3C]/5 ring-1 ring-[#0E4B3C]'
                        : 'border-[#0B0F0D]/10 hover:border-[#C9A961] hover:bg-[#F6F7F5]'
                    }`}
                  >
                    <div className="flex-1">
                      <div className="font-semibold text-sm sm:text-base text-[#0B0F0D] group-hover:text-[#0E4B3C] transition-colors flex items-center gap-2">
                        <span>{option.label}</span>
                      </div>
                      <p className="text-xs sm:text-sm text-[#5B645F] mt-1 leading-relaxed">
                        {option.description}
                      </p>
                    </div>
                    <div className={`mt-0.5 shrink-0 w-5 h-5 rounded-full border flex items-center justify-center transition-colors ${
                      isSelected 
                        ? 'border-[#0E4B3C] bg-[#0E4B3C] text-white' 
                        : 'border-[#0B0F0D]/20 group-hover:border-[#C9A961]'
                    }`}>
                      {isSelected ? <Check className="w-3 h-3 stroke-[3]" /> : null}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Navigation Footer */}
            <div className="flex items-center justify-between pt-6 border-t border-[#0B0F0D]/10">
              <button
                onClick={handleBack}
                disabled={currentStep === 0}
                className={`inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider transition-colors ${
                  currentStep === 0
                    ? 'text-[#5B645F]/40 cursor-not-allowed'
                    : 'text-[#5B645F] hover:text-[#0B0F0D]'
                }`}
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Previous</span>
              </button>

              <div className="flex items-center gap-2">
                <span className="text-xs text-[#5B645F] hidden sm:inline">
                  Select an option to advance
                </span>
                {selectedAnswers[activeQuestion.id] && currentStep < SELECTOR_QUESTIONS.length - 1 && (
                  <button
                    onClick={() => setCurrentStep(prev => prev + 1)}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded bg-[#0E4B3C] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#082E24] transition-colors"
                  >
                    <span>Next</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#C9A961]" />
                  </button>
                )}
                {selectedAnswers[activeQuestion.id] && currentStep === SELECTOR_QUESTIONS.length - 1 && (
                  <button
                    onClick={() => setShowResult(true)}
                    className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded bg-[#C9A961] text-[#0B0F0D] text-xs font-bold uppercase tracking-widest hover:bg-[#9C7A3D] transition-colors shadow-xs"
                  >
                    <span>See Recommendation</span>
                    <Sparkles className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Results Screen */}
        {showResult && recommendation && (
          <div className="p-6 sm:p-10 animate-in fade-in-50">
            {/* Match Badge Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-5 rounded-lg bg-[#0E4B3C]/5 border border-[#0E4B3C]/15 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-[#0E4B3C] text-[#C9A961] flex items-center justify-center font-editorial font-bold text-lg">
                  {recommendation.matchPercentage}%
                </div>
                <div>
                  <div className="text-xs font-mono uppercase tracking-widest text-[#0E4B3C] font-bold">
                    Algorithmic Match Score
                  </div>
                  <h4 className="text-base sm:text-lg font-semibold text-[#0B0F0D]">
                    Primary Solution: {recommendation.primaryService.name}
                  </h4>
                </div>
              </div>

              <div className="flex items-center gap-3 self-start sm:self-auto text-xs font-mono text-[#5B645F]">
                <span className="flex items-center gap-1 bg-white px-3 py-1.5 rounded border border-[#0B0F0D]/10">
                  <DollarSign className="w-3.5 h-3.5 text-[#0E4B3C]" />
                  <strong className="text-[#0E4B3C]">{recommendation.primaryService.startingPrice}</strong>
                  <span>{recommendation.primaryService.billingType === 'monthly' ? 'rolling' : 'fixed'}</span>
                </span>
                <span className="flex items-center gap-1 bg-white px-3 py-1.5 rounded border border-[#0B0F0D]/10">
                  <Clock className="w-3.5 h-3.5 text-[#C9A961]" />
                  <span>{recommendation.primaryService.typicalTimeline}</span>
                </span>
              </div>
            </div>

            {/* Main Recommendation Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-8">
              {/* Primary Service Breakdown (Left 7 Cols) */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <span className="text-xs font-mono text-[#C9A961] uppercase tracking-wider font-bold">
                    Discipline {recommendation.primaryService.number}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-editorial font-semibold text-[#0B0F0D] mt-1">
                    {recommendation.primaryService.name}
                  </h3>
                  <p className="text-base text-[#0E4B3C] font-medium mt-1">
                    {recommendation.primaryService.tagline}
                  </p>
                  <p className="text-sm text-[#5B645F] mt-2 leading-relaxed">
                    {recommendation.primaryService.pitch}
                  </p>
                </div>

                {/* Why This Fits Your Answers */}
                <div className="bg-[#F6F7F5] rounded-lg p-5 border border-[#0B0F0D]/5">
                  <h5 className="text-xs font-mono uppercase tracking-wider font-bold text-[#0B0F0D] mb-3 flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-[#0E4B3C]" />
                    <span>Why This System Eliminates Your Bottleneck</span>
                  </h5>
                  <p className="text-xs sm:text-sm text-[#5B645F] leading-relaxed mb-3">
                    {recommendation.primaryService.forWhom}
                  </p>
                  <div className="text-xs font-mono text-[#0E4B3C] font-semibold bg-white p-3 rounded border border-[#0E4B3C]/10">
                    Format: {recommendation.primaryService.format}
                  </div>
                </div>

                {/* What's Included Preview */}
                <div>
                  <h5 className="text-xs font-mono uppercase tracking-wider font-bold text-[#5B645F] mb-3">
                    Guaranteed Deliverables Included:
                  </h5>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {recommendation.primaryService.deliverables.map((deliv, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-[#0B0F0D] bg-white p-2.5 rounded border border-[#0B0F0D]/5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#0E4B3C] shrink-0 mt-0.5" />
                        <span>{deliv}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Secondary Complementary & Action Card (Right 5 Cols) */}
              <div className="lg:col-span-5 space-y-4">
                {/* Complementary Discipline Card */}
                {recommendation.secondaryService && (
                  <div className="bg-white rounded-lg border border-[#0B0F0D]/10 p-5 shadow-xs">
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="text-[11px] font-mono uppercase tracking-wider text-[#C9A961] font-bold flex items-center gap-1">
                        <Layers className="w-3.5 h-3.5" />
                        Recommended Add-On Pair
                      </span>
                      <span className="text-xs font-mono font-bold text-[#0E4B3C]">
                        {recommendation.secondaryService.startingPrice}
                      </span>
                    </div>
                    <h5 className="text-base font-semibold text-[#0B0F0D]">
                      {recommendation.secondaryService.name}
                    </h5>
                    <p className="text-xs text-[#5B645F] mt-1 leading-relaxed">
                      {recommendation.secondaryService.pitch}
                    </p>
                    <p className="text-[11px] text-[#0E4B3C] font-medium mt-2">
                      Combining {recommendation.primaryService.name} with {recommendation.secondaryService.name} creates an integrated inbound &amp; sales engine.
                    </p>
                  </div>
                )}

                {/* Operator Commitment & Action Box */}
                <div className="bg-[#0E4B3C] text-white rounded-lg p-6 space-y-4 shadow-sm">
                  <div>
                    <span className="text-[#C9A961] text-[11px] font-mono uppercase tracking-widest block font-bold">
                      Direct Accountability Guarantee
                    </span>
                    <h4 className="text-lg font-editorial font-medium text-white mt-1">
                      Ready to Discuss This Scope?
                    </h4>
                    <p className="text-xs text-[#F6F7F5]/80 mt-1 leading-relaxed">
                      Book a focused 20-minute discussion directly with Sinisa. You will receive a written fixed-price scope proposal within 48 hours.
                    </p>
                  </div>

                  <div className="pt-2">
                    <button
                      id="selector-book-call-btn"
                      onClick={() => handleProceedToContact(recommendation.primaryService, recommendation.secondaryService)}
                      className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded bg-[#C9A961] text-[#0B0F0D] hover:bg-[#9C7A3D] font-bold text-xs uppercase tracking-widest shadow-xs transition-colors"
                    >
                      <span>Book 20-Min Review With This Scope</span>
                      <ArrowRight className="w-4 h-4 text-[#0B0F0D]" />
                    </button>
                  </div>

                  <div className="text-[11px] text-[#F6F7F5]/60 text-center font-mono pt-1">
                    No open meters • No junior account managers • No obligation
                  </div>
                </div>

                <div className="text-center pt-2">
                  <button
                    onClick={handleReset}
                    className="inline-flex items-center gap-1.5 text-xs text-[#5B645F] hover:text-[#0B0F0D] transition-colors"
                  >
                    <RotateCcw className="w-3 h-3" />
                    <span>Change your answers &amp; recalculate</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
