import { useState, useMemo } from 'react'
import { useNavigate } from 'react-router'
import confetti from 'canvas-confetti'
import { toast } from 'sonner'
import { Zap, Gift, ArrowLeft, X, ShieldAlert, AlertTriangle, ChevronDown, Info, Check } from 'lucide-react'
import { cn } from '@/lib/utils'
import { PageTransition } from '@/components/shared/PageTransition'
import { Skeleton } from '@/components/shared/Skeleton'
import { useTranslation } from '@/hooks/useTranslation'
import { useModalA11y } from '@/hooks/useModalA11y'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { usePageState } from '@/hooks/usePageState'
import {
  useChallanStore,
  ONLINE_CONVENIENCE_FEE,
  COURT_CONVENIENCE_FEE,
  PLEDGE_REWARD,
} from '@/stores/challanStore'

const formatINR = (n: number) => n.toLocaleString('en-IN')

export function PaymentPage() {
  const { t } = useTranslation()
  const navigate = useNavigate()

  const challans = useChallanStore((s) => s.challans)
  const selectedChallanIds = useChallanStore((s) => s.selectedChallanIds)
  const tatkalChallanIds = useChallanStore((s) => s.tatkalChallanIds)
  const toggleTatkalChallan = useChallanStore((s) => s.toggleTatkalChallan)
  const setTatkalChallanIds = useChallanStore((s) => s.setTatkalChallanIds)
  const recordTransaction = useChallanStore((s) => s.recordTransaction)
  const markSubmitted = useChallanStore((s) => s.markSubmitted)
  const { state: pageState } = usePageState()

  const selectedChallans = useMemo(() => {
    const idSet = new Set(selectedChallanIds)
    const typeOrder = { online: 0, court: 1 }
    return challans
      .filter((c) => idSet.has(c.id))
      .slice()
      .sort((a, b) => typeOrder[a.type] - typeOrder[b.type])
  }, [challans, selectedChallanIds])

  const activeTatkalIds = useMemo(() => {
    const selSet = new Set(selectedChallanIds)
    const tatkalSet = new Set(tatkalChallanIds)
    return new Set(
      selectedChallans
        .filter((c) => tatkalSet.has(c.id) && selSet.has(c.id))
        .map((c) => c.id)
    )
  }, [selectedChallans, selectedChallanIds, tatkalChallanIds])

  const eligibleIds = useMemo(
    () => selectedChallans.map((c) => c.id),
    [selectedChallans]
  )

  const summary = useMemo(() => {
    const online = selectedChallans.filter((c) => c.type === 'online')
    const court = selectedChallans.filter((c) => c.type === 'court')
    const onlineAmount = online.reduce((sum, c) => sum + c.amount, 0)
    const courtAmount = court.reduce((sum, c) => sum + c.amount, 0)
    const onlineFee = online.length * ONLINE_CONVENIENCE_FEE
    const courtFee = court.length * COURT_CONVENIENCE_FEE
    const subtotal = onlineAmount + courtAmount + onlineFee + courtFee

    const tatkalDeferredAmount = selectedChallans
      .filter((c) => activeTatkalIds.has(c.id))
      .reduce((sum, c) => sum + c.amount, 0)

    return {
      onlineCount: online.length,
      courtCount: court.length,
      onlineAmount,
      courtAmount,
      onlineFee,
      courtFee,
      subtotal,
      tatkalEligibleCount: eligibleIds.length,
      tatkalDeferredAmount,
    }
  }, [selectedChallans, activeTatkalIds, eligibleIds])

  const hasTatkalEligible = eligibleIds.length > 0
  const isTatkal = activeTatkalIds.size > 0
  const allEligibleSelected = hasTatkalEligible && eligibleIds.every((id) => activeTatkalIds.has(id))
  const someEligibleSelected = activeTatkalIds.size > 0 && !allEligibleSelected

  const [pledgeChecked, setPledgeChecked] = useState(false)
  const [showBackConfirm, setShowBackConfirm] = useState(false)
  const [legalChargesInfo, setLegalChargesInfo] = useState<'online' | 'court' | null>(null)
  const [resolutionInfo, setResolutionInfo] = useState<'regular' | 'tatkal' | null>(null)

  const pledgeActive = pledgeChecked && !isTatkal
  const payNowSubtotal = isTatkal ? summary.subtotal - summary.tatkalDeferredAmount : summary.subtotal
  const payNowTotal = pledgeActive ? Math.max(0, payNowSubtotal - PLEDGE_REWARD) : payNowSubtotal
  const payLaterTotal = isTatkal ? summary.tatkalDeferredAmount : 0
  const selectedCount = selectedChallanIds.length

  useModalA11y(resolutionInfo !== null, () => setResolutionInfo(null))
  useModalA11y(legalChargesInfo !== null, () => setLegalChargesInfo(null))
  useModalA11y(showBackConfirm, () => setShowBackConfirm(false))

  const prefersReducedMotion = useReducedMotion()

  const handlePledge = () => {
    const next = !pledgeChecked
    setPledgeChecked(next)
    if (next) {
      if (!prefersReducedMotion) {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
        })
      }
      toast.success('Congratulations! Reward applied 🎉')
    }
  }

  const handlePayment = () => {
    const txnId = `TXN${Date.now()}`
    recordTransaction(txnId, payNowTotal, selectedChallanIds.length)
    markSubmitted(selectedChallanIds)
    navigate('/payment/completed')
  }

  const handleBack = () => {
    setShowBackConfirm(true)
  }

  const confirmBack = () => {
    setShowBackConfirm(false)
    navigate(-1)
  }

  const handleTatkalToggleAll = () => {
    if (!hasTatkalEligible) return
    setTatkalChallanIds(allEligibleSelected ? [] : eligibleIds)
  }

  return (
    <PageTransition>
      {/* Resolution Info Modal */}
      {resolutionInfo && (
        <div
          className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/60 backdrop-blur-sm p-4"
          onClick={() => setResolutionInfo(null)}
        >
          <div
            className="relative w-full max-w-md bg-white rounded-2xl shadow-xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setResolutionInfo(null)}
              className="absolute top-2 right-2 z-10 w-11 h-11 rounded-full bg-white/80 flex items-center justify-center text-gray-500 hover:bg-white transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            <div className={cn(
              'pt-8 pb-4 px-6 text-left',
              resolutionInfo === 'regular'
                ? 'bg-gradient-to-b from-emerald-50 via-emerald-50/40 to-white'
                : 'bg-gradient-to-b from-amber-50 via-amber-50/40 to-white'
            )}>
              <div className="w-14 h-14 flex items-center justify-center mb-3">
                <img
                  src={resolutionInfo === 'regular' ? '/images/resolution-regular.png' : '/images/resolution-tatkal.png'}
                  alt=""
                  aria-hidden
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="font-display text-xl font-bold text-text-primary">
                {resolutionInfo === 'regular' ? t.payment.regularInfoTitle : t.payment.tatkalInfoTitle}
              </h3>
              <p className="text-sm text-text-secondary mt-1.5">
                {resolutionInfo === 'regular' ? t.payment.regularInfoDesc : t.payment.tatkalInfoDesc}
              </p>
            </div>

            <div className="px-6 pt-4 pb-6">
              <div className="space-y-2.5 mb-5">
                {(resolutionInfo === 'regular'
                  ? [t.payment.regularBenefit1, t.payment.regularBenefit2, t.payment.regularBenefit3, t.payment.regularBenefit4]
                  : [t.payment.tatkalBenefit1, t.payment.tatkalBenefit2, t.payment.tatkalBenefit3, t.payment.tatkalBenefit4]
                ).map((item) => (
                  <div
                    key={item}
                    className={cn(
                      'flex items-center gap-3 p-3 rounded-xl',
                      resolutionInfo === 'regular' ? 'bg-emerald-50/70' : 'bg-amber-50/70'
                    )}
                  >
                    <div className={cn(
                      'w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0',
                      resolutionInfo === 'regular' ? 'bg-emerald-100' : 'bg-amber-100'
                    )}>
                      <Check
                        className={cn('w-4 h-4', resolutionInfo === 'regular' ? 'text-emerald-600' : 'text-amber-600')}
                        strokeWidth={3}
                      />
                    </div>
                    <span className="text-sm font-medium text-text-primary">{item}</span>
                  </div>
                ))}
              </div>

              <button
                onClick={() => setResolutionInfo(null)}
                className="w-full py-3.5 bg-primary text-white font-semibold rounded-xl hover:bg-primary-dark transition-colors text-sm shadow-sm"
              >
                {t.payment.gotIt}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Legal Charges Info Modal */}
      {legalChargesInfo && (
        <div
          className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/60 backdrop-blur-sm p-4"
          onClick={() => setLegalChargesInfo(null)}
        >
          <div
            className="relative w-full max-w-md bg-white rounded-2xl shadow-xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setLegalChargesInfo(null)}
              className="absolute top-2 right-2 z-10 w-11 h-11 rounded-full bg-white/80 flex items-center justify-center text-gray-500 hover:bg-white transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="bg-gradient-to-b from-cyan-50 via-cyan-50/40 to-white pt-8 pb-4 px-6 text-left">
              <h3 className="font-display text-xl font-bold text-text-primary mb-2">
                {t.payment.legalCharges}
              </h3>
              <p className="text-base leading-relaxed text-text-primary">
                {legalChargesInfo === 'online' ? t.payment.onlineLegalFeeDesc : t.payment.courtLegalFeeDesc}
              </p>
            </div>

            <div className="px-6 pt-4 pb-6">
              <button
                onClick={() => setLegalChargesInfo(null)}
                className="w-full py-3.5 bg-primary text-white font-semibold rounded-xl hover:bg-primary-dark transition-colors text-sm shadow-sm"
              >
                {t.payment.gotIt}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Back Confirmation Modal */}
      {showBackConfirm && (
        <div
          className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/60 backdrop-blur-sm p-4"
          onClick={() => setShowBackConfirm(false)}
        >
          <div
            className="relative w-full max-w-md bg-white rounded-2xl shadow-xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setShowBackConfirm(false)}
              className="absolute top-2 right-2 z-10 w-11 h-11 rounded-full bg-white/80 flex items-center justify-center text-gray-500 hover:bg-white transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header */}
            <div className="bg-gradient-to-b from-amber-50 via-amber-50/40 to-white pt-8 pb-3 px-6 text-center">
              <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center mx-auto mb-3">
                <AlertTriangle className="w-6 h-6 text-amber-600" strokeWidth={2.5} />
              </div>
              <h3 className="font-display text-xl font-bold text-text-primary mb-1">
                {t.payment.leaveBackTitle}
              </h3>
              <p className="text-sm text-text-secondary">
                {t.payment.leaveBackSubtitle}
              </p>
            </div>

            {/* Reassurance + soft nudges */}
            <div className="px-6 pt-2 pb-6">
              <div className="space-y-2.5 mb-6">
                <div className="flex items-center gap-3 p-3 rounded-xl bg-emerald-50/70">
                  <div className="w-9 h-9 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-emerald-600" strokeWidth={3} />
                  </div>
                  <span className="text-sm font-medium text-text-primary">{t.payment.selectionSaved}</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-xl bg-amber-50/70">
                  <div className="w-9 h-9 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0">
                    <ShieldAlert className="w-4 h-4 text-amber-600" />
                  </div>
                  <span className="text-sm font-medium text-text-primary">{t.payment.avoidLateFees}</span>
                </div>
              </div>

              {/* Pay Now button */}
              <button
                onClick={() => setShowBackConfirm(false)}
                className="w-full py-3.5 min-h-11 bg-primary text-white font-semibold rounded-xl hover:bg-primary-dark transition-colors text-sm shadow-sm"
              >
                {t.payment.continueToPay}
              </button>

              {/* Go Back link */}
              <button
                onClick={confirmBack}
                className="w-full py-3 min-h-11 text-text-secondary font-medium text-sm hover:text-text-primary transition-colors mt-1"
              >
                {t.payment.goBack}
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 py-4 sm:py-6">
        {/* Mobile: Header outside grid */}
        <div className="mb-5">
          <div className="flex items-center gap-3">
            <button
              onClick={handleBack}
              aria-label="Back"
              className="w-11 h-11 rounded-full flex items-center justify-center text-text-secondary hover:bg-gray-100 hover:text-text-primary transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <h1 className="font-display text-xl sm:text-2xl font-bold text-text-primary">{t.payment.chooseResolution}</h1>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-6 lg:gap-10">
          {/* Left: Selected Challans + Pledge */}
          <div className="space-y-4">
            {/* Mobile-only: Resolution info buttons */}
            {pageState !== 'loading' && (
              <div className="lg:hidden grid grid-cols-2 gap-2">
                {(['regular', 'tatkal'] as const).map((id) => (
                  <button
                    key={id}
                    type="button"
                    onClick={() => setResolutionInfo(id)}
                    className={cn(
                      'flex items-center justify-between gap-2 px-3 py-2.5 rounded-xl border bg-white shadow-sm text-left active:scale-[0.98] transition-transform',
                      id === 'regular' ? 'border-emerald-200' : 'border-amber-200'
                    )}
                  >
                    <span className="inline-flex items-center gap-2 min-w-0">
                      <img
                        src={id === 'regular' ? '/images/resolution-regular.png' : '/images/resolution-tatkal.png'}
                        alt=""
                        aria-hidden
                        className="w-7 h-7 object-contain flex-shrink-0"
                      />
                      <span className="font-display font-semibold text-sm text-text-primary truncate">
                        {id === 'regular' ? t.payment.regular : t.payment.tatkal}
                      </span>
                    </span>
                    <Info className="w-4 h-4 text-text-light flex-shrink-0" />
                  </button>
                ))}
              </div>
            )}

            {/* Selected Challans */}
            {pageState === 'loading' ? (
              <div className="bg-white rounded-xl p-4 sm:p-5 space-y-3">
                <Skeleton className="h-4 w-40" />
                {[0, 1, 2].map((i) => (
                  <div key={i} className="flex items-center gap-3">
                    <Skeleton className="h-3 w-32" />
                    <Skeleton className="h-3 w-16 rounded-full" />
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-xl border border-border shadow-sm p-4 sm:p-5">
                <p className="font-display font-semibold text-sm text-text-primary mb-3">
                  {`${selectedCount} ${t.payment.selectedChallansTitle}`}
                </p>
                <div className="flex items-center justify-end gap-2 pb-3 mb-1 border-b border-border/60">
                  <label className={cn(
                    'inline-flex items-center gap-2 select-none',
                    hasTatkalEligible ? 'cursor-pointer' : 'cursor-not-allowed opacity-60'
                  )}>
                    <span className="inline-flex items-center gap-1.5 text-sm font-bold text-text-primary">
                      <Zap className="w-4 h-4 text-amber-600" aria-hidden />
                      {t.payment.payInTatkal}
                    </span>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.preventDefault()
                        e.stopPropagation()
                        setResolutionInfo('tatkal')
                      }}
                      aria-label={t.payment.tatkalInfoTitle}
                      className="text-text-light hover:text-primary transition-colors flex items-center justify-center p-2.5 -m-2.5"
                    >
                      <Info className="w-4 h-4" />
                    </button>
                    <input
                      type="checkbox"
                      checked={allEligibleSelected}
                      ref={(el) => {
                        if (el) el.indeterminate = someEligibleSelected
                      }}
                      disabled={!hasTatkalEligible}
                      onChange={handleTatkalToggleAll}
                      className="w-6 h-6 rounded border-2 border-gray-300 text-primary accent-primary focus:ring-primary ml-1"
                    />
                  </label>
                </div>
                <ul className="divide-y divide-border/60">
                  {selectedChallans.map((c, index) => {
                    const isRowTatkal = activeTatkalIds.has(c.id)
                    return (
                      <li key={c.id} className="py-4 first:pt-2 last:pb-2">
                        <div className="flex items-start justify-between gap-3">
                          <div className="min-w-0 flex-1">
                            <div className="flex items-center gap-2 flex-wrap">
                              <span className="font-display text-xs font-semibold text-text-light w-5 flex-shrink-0">
                                {index + 1}.
                              </span>
                              <span className="font-mono text-xs text-text-light">
                                {c.challanNumber.length > 14 ? `${c.challanNumber.slice(0, 14)}…` : c.challanNumber}
                              </span>
                              <span className="font-display font-semibold text-sm text-text-primary whitespace-nowrap">
                                ₹{formatINR(c.amount)}
                              </span>
                              <span
                                className={cn(
                                  'text-[10px] font-semibold uppercase tracking-wide px-1.5 py-0.5 rounded-full',
                                  c.type === 'online'
                                    ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                                    : 'bg-gray-100 text-gray-700 border border-gray-200'
                                )}
                              >
                                {c.type === 'online' ? t.payment.onlineTag : t.payment.courtTag}
                              </span>
                            </div>
                            <p className="text-xs text-text-secondary mt-1.5 ml-7 line-clamp-2">{c.violation}</p>
                          </div>
                          <label
                            className="inline-flex items-center cursor-pointer select-none flex-shrink-0 mt-0.5 p-1 -m-1"
                            title={t.payment.payInTatkal}
                          >
                            <input
                              type="checkbox"
                              checked={isRowTatkal}
                              onChange={() => toggleTatkalChallan(c.id)}
                              className="w-6 h-6 rounded border-2 border-gray-300 text-primary accent-primary focus:ring-primary"
                              aria-label={`${t.payment.payInTatkal} — ${c.challanNumber}`}
                            />
                          </label>
                        </div>
                      </li>
                    )
                  })}
                </ul>
              </div>
            )}

            {/* Pledge Section — Regular only */}
            {pageState === 'loading' ? (
              <div className="bg-white rounded-xl p-4 sm:p-5 space-y-3">
                <div className="flex items-start gap-3">
                  <Skeleton className="w-6 h-6 rounded" />
                  <div className="flex-1 space-y-2">
                    <Skeleton className="h-4 w-56" />
                    <Skeleton className="h-3 w-72" />
                  </div>
                </div>
                <Skeleton className="h-12 w-full rounded-lg" />
              </div>
            ) : !isTatkal ? (
            <div className="bg-white rounded-xl border border-border shadow-sm p-4 sm:p-5">
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={pledgeChecked}
                  onChange={handlePledge}
                  className="w-6 h-6 rounded border-primary text-primary accent-primary focus:ring-primary mt-0.5 flex-shrink-0"
                />
                <div>
                  <p className="font-display font-semibold text-sm text-text-primary">
                    {t.payment.pledgeTitle}
                  </p>
                  <p className="text-xs text-text-secondary mt-1">
                    {t.payment.pledgeDesc}
                  </p>
                </div>
              </label>

              {/* Reward Info */}
              <div className="mt-4 flex items-center gap-3 bg-gradient-to-r from-amber-100 via-amber-50 to-white rounded-lg p-3">
                <Gift className="w-5 h-5 text-amber-700 flex-shrink-0" />
                <div>
                  <p className="text-sm font-bold text-amber-700">{t.payment.rewardAmount}</p>
                  <p className="text-xs text-text-light">{t.payment.rewardApplied}</p>
                </div>
              </div>
            </div>
            ) : null}
          </div>

          {/* Right: Payment Summary (desktop only) */}
          <div className="hidden lg:block lg:sticky lg:top-20 lg:self-start">
            {pageState === 'loading' ? (
              <div className="bg-white rounded-2xl p-6 space-y-4">
                <Skeleton className="h-5 w-56" />
                <Skeleton className="h-9 w-full rounded-lg" />
                <hr className="border-border" />
                <div className="space-y-3">
                  {[0, 1, 2, 3].map((i) => (
                    <div key={i} className="flex justify-between">
                      <Skeleton className="h-4 w-32" />
                      <Skeleton className="h-4 w-16" />
                    </div>
                  ))}
                </div>
                <hr className="border-border" />
                <div className="flex justify-between items-baseline">
                  <Skeleton className="h-5 w-24" />
                  <Skeleton className="h-6 w-24" />
                </div>
                <Skeleton className="h-12 w-full rounded-xl" />
              </div>
            ) : (
            <div className="bg-white rounded-2xl border border-border shadow-sm p-6">
              <h3 className="font-display font-bold text-base text-text-primary mb-4">
                {`${selectedCount} ${selectedCount === 1 ? 'Challan' : 'Challans'} selected for settlement`}
              </h3>

              <hr className="border-border mb-4" />

              <SummaryBreakdown
                summary={summary}
                selectedChallans={selectedChallans}
                isTatkal={isTatkal}
                activeTatkalIds={activeTatkalIds}
                t={t}
                onOnlineFeeInfo={() => setLegalChargesInfo('online')}
                onCourtFeeInfo={() => setLegalChargesInfo('court')}
              />

              {/* Pledge Reward */}
              {pledgeActive && (
                <div className="flex justify-between text-sm mt-3.5 bg-emerald-50 -mx-6 px-6 py-2.5">
                  <span className="font-display font-semibold text-success">{t.payment.pledgeReward}</span>
                  <span className="font-display font-semibold text-success">-₹{formatINR(PLEDGE_REWARD)}</span>
                </div>
              )}

              {/* Pay Now / Pay Later totals */}
              <hr className="border-border my-3.5" />
              <div className="flex justify-between items-baseline">
                <span className="font-display text-[15px] font-bold text-text-primary">
                  {isTatkal ? t.payment.payNow : t.payment.grandTotal}
                </span>
                <span className="font-display text-lg font-bold text-text-primary">
                  ₹{formatINR(payNowTotal)}
                </span>
              </div>
              {isTatkal && (
                <div className="mt-2 rounded-lg bg-amber-50/70 border border-amber-100 px-3 py-2.5">
                  <div className="flex justify-between items-baseline">
                    <span className="font-display text-sm font-semibold text-amber-800">{t.payment.payLater}</span>
                    <span className="font-display text-sm font-bold text-amber-800">₹{formatINR(payLaterTotal)}</span>
                  </div>
                  <p className="text-[11px] text-amber-700/80 mt-0.5">{t.payment.payLaterHelp}</p>
                </div>
              )}

              <button
                onClick={handlePayment}
                className="w-full mt-4 py-3.5 bg-primary text-white font-semibold rounded-xl hover:bg-primary-dark transition-colors shadow-md relative overflow-hidden group"
              >
                <span className="relative z-10 flex items-center justify-center gap-2 text-sm">
                  {t.payment.proceedToPay}
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
              </button>
            </div>
            )}
          </div>
        </div>

        {/* Mobile: Sticky bottom payment bar */}
        {pageState === 'loading' ? (
          <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-white border-t border-border shadow-[0_-4px_20px_rgba(0,0,0,0.08)] px-4 py-3 safe-bottom">
            <div className="flex items-center justify-between gap-4">
              <div className="space-y-2 flex-1 min-w-0">
                <Skeleton className="h-3 w-20" />
                <Skeleton className="h-5 w-28" />
              </div>
              <Skeleton className="h-12 w-36 rounded-xl" />
            </div>
          </div>
        ) : (
        <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-white border-t border-border shadow-[0_-4px_20px_rgba(0,0,0,0.08)] px-4 py-3 safe-bottom">
          <div className="flex items-center justify-between gap-4">
            <div className="min-w-0">
              <p className="text-xs text-text-light">{isTatkal ? t.payment.payNow : t.payment.grandTotal}</p>
              <p className="font-display text-lg font-bold text-text-primary">
                ₹{formatINR(payNowTotal)}
              </p>
              {isTatkal && (
                <p className="text-[10px] text-amber-700 font-medium">{`+ ₹${formatINR(payLaterTotal)} ${t.payment.payLater}`}</p>
              )}
              {pledgeActive && (
                <p className="text-[10px] text-success font-medium">{t.payment.savedAmount}</p>
              )}
            </div>
            <button
              onClick={handlePayment}
              className="relative flex-shrink-0 overflow-hidden px-7 sm:px-9 py-4 bg-primary text-white font-semibold rounded-xl hover:bg-primary-dark transition-colors shadow-md text-base"
            >
              <span aria-hidden className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shine" />
              <span className="relative">{t.payment.proceedToPay}</span>
            </button>
          </div>
        </div>
        )}

        {/* Mobile: Expandable summary drawer */}
        {pageState === 'loading' ? (
          <div className="lg:hidden mt-4 mb-20 bg-white rounded-xl p-4 space-y-3">
            <Skeleton className="h-5 w-40" />
            <Skeleton className="h-9 w-full rounded-lg" />
            <hr className="border-border" />
            {[0, 1, 2, 3].map((i) => (
              <div key={i} className="flex justify-between">
                <Skeleton className="h-4 w-32" />
                <Skeleton className="h-4 w-16" />
              </div>
            ))}
            <hr className="border-border" />
            <div className="flex justify-between items-baseline">
              <Skeleton className="h-5 w-24" />
              <Skeleton className="h-6 w-24" />
            </div>
          </div>
        ) : (
        <details open className="lg:hidden mt-4 mb-20 bg-white rounded-xl border border-border shadow-sm overflow-hidden">
          <summary className="flex items-center justify-between p-4 cursor-pointer select-none list-none [&::-webkit-details-marker]:hidden">
            <span className="font-display font-semibold text-sm text-text-primary">{t.payment.paymentSummary}</span>
            <ChevronDown className="w-5 h-5 text-text-light transition-transform [[open]>&]:rotate-180" />
          </summary>
          <div className="px-4 pb-4 space-y-3">
            <hr className="border-border" />

            <SummaryBreakdown
              summary={summary}
              selectedChallans={selectedChallans}
              isTatkal={isTatkal}
              activeTatkalIds={activeTatkalIds}
              t={t}
              onOnlineFeeInfo={() => setLegalChargesInfo('online')}
              onCourtFeeInfo={() => setLegalChargesInfo('court')}
            />

            {pledgeActive && (
              <div className="flex justify-between text-sm bg-emerald-50 -mx-4 px-4 py-2.5">
                <span className="font-display font-semibold text-success">{t.payment.pledgeReward}</span>
                <span className="font-display font-semibold text-success">-₹{formatINR(PLEDGE_REWARD)}</span>
              </div>
            )}

            <hr className="border-border" />
            <div className="flex justify-between items-baseline">
              <span className="font-display text-sm font-bold text-text-primary">
                {isTatkal ? t.payment.payNow : t.payment.grandTotal}
              </span>
              <span className="font-display text-base font-bold text-text-primary">
                ₹{formatINR(payNowTotal)}
              </span>
            </div>
            {isTatkal && (
              <div className="rounded-lg bg-amber-50/70 border border-amber-100 px-3 py-2.5">
                <div className="flex justify-between items-baseline">
                  <span className="font-display text-sm font-semibold text-amber-800">{t.payment.payLater}</span>
                  <span className="font-display text-sm font-bold text-amber-800">₹{formatINR(payLaterTotal)}</span>
                </div>
                <p className="text-[11px] text-amber-700/80 mt-0.5">{t.payment.payLaterHelp}</p>
              </div>
            )}
          </div>
        </details>
        )}
      </div>
    </PageTransition>
  )
}

type SummaryBreakdownProps = {
  summary: {
    onlineCount: number
    courtCount: number
    onlineAmount: number
    courtAmount: number
    onlineFee: number
    courtFee: number
    tatkalDeferredAmount: number
  }
  selectedChallans: Array<{
    id: string
    amount: number
    type: 'online' | 'court'
  }>
  isTatkal: boolean
  activeTatkalIds: Set<string>
  t: ReturnType<typeof useTranslation>['t']
  onOnlineFeeInfo: () => void
  onCourtFeeInfo: () => void
}

function SummaryBreakdown({ summary, selectedChallans, isTatkal, activeTatkalIds, t, onOnlineFeeInfo, onCourtFeeInfo }: SummaryBreakdownProps) {
  const onlineEligibleAmount = selectedChallans
    .filter((c) => c.type === 'online' && activeTatkalIds.has(c.id))
    .reduce((s, c) => s + c.amount, 0)
  const courtEligibleAmount = selectedChallans
    .filter((c) => c.type === 'court' && activeTatkalIds.has(c.id))
    .reduce((s, c) => s + c.amount, 0)
  const onlineNowAmount = summary.onlineAmount - onlineEligibleAmount
  const courtNowAmount = summary.courtAmount - courtEligibleAmount

  return (
    <div className="space-y-3.5">
      {/* Online Challan */}
      {summary.onlineCount > 0 && (
        <div className="space-y-0.5">
          <div className="flex justify-between text-[13px]">
            <span className="font-display font-semibold text-text-primary">{`${t.payment.onlineChallan} (${summary.onlineCount})`}</span>
            <span className="font-display font-semibold text-text-primary">₹{formatINR(onlineNowAmount)}</span>
          </div>
          {isTatkal && onlineEligibleAmount > 0 && (
            <div className="flex justify-between text-[12px]">
              <span className="text-amber-700/90">{`${t.payment.payLater}: ${t.payment.onlineChallan}`}</span>
              <span className="font-medium text-amber-700/90">₹{formatINR(onlineEligibleAmount)}</span>
            </div>
          )}
          <div className="flex justify-between text-[13px]">
            <span className="text-text-light inline-flex items-center gap-1">
              {t.payment.convenienceFee} <span className="text-text-light/70">{`(${summary.onlineCount} x ${ONLINE_CONVENIENCE_FEE})`}</span>
              <button
                type="button"
                onClick={onOnlineFeeInfo}
                aria-label={t.payment.onlineLegalFeeTitle}
                className="inline-flex items-center justify-center w-9 h-9 -m-2.5 rounded-full text-text-light/80 hover:text-primary transition-colors"
              >
                <Info className="w-3.5 h-3.5" />
              </button>
            </span>
            <span className="font-medium text-text-light">₹{formatINR(summary.onlineFee)}</span>
          </div>
        </div>
      )}

      {/* Court Challan */}
      {summary.courtCount > 0 && (
        <div className="space-y-0.5">
          <div className="flex justify-between text-[13px]">
            <span className="font-display font-semibold text-text-primary">{`${t.payment.courtChallan} (${summary.courtCount})`}</span>
            <span className="font-display font-semibold text-text-primary">₹{formatINR(courtNowAmount)}</span>
          </div>
          {isTatkal && courtEligibleAmount > 0 && (
            <div className="flex justify-between text-[12px]">
              <span className="text-amber-700/90">{`${t.payment.payLater}: ${t.payment.courtChallan}`}</span>
              <span className="font-medium text-amber-700/90">₹{formatINR(courtEligibleAmount)}</span>
            </div>
          )}
          <div className="flex justify-between text-[13px]">
            <span className="text-text-light inline-flex items-center gap-1">
              {t.payment.convenienceFee} <span className="text-text-light/70">{`(${summary.courtCount} x ${COURT_CONVENIENCE_FEE})`}</span>
              <button
                type="button"
                onClick={onCourtFeeInfo}
                aria-label={t.payment.courtLegalFeeTitle}
                className="inline-flex items-center justify-center w-9 h-9 -m-2.5 rounded-full text-text-light/80 hover:text-primary transition-colors"
              >
                <Info className="w-3.5 h-3.5" />
              </button>
            </span>
            <span className="font-medium text-text-light">₹{formatINR(summary.courtFee)}</span>
          </div>
        </div>
      )}
    </div>
  )
}
