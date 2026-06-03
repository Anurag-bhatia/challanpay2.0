import { PageTransition } from '@/components/shared/PageTransition'

export function RefundPolicyPage() {
  return (
    <PageTransition>
      <div className="max-w-[860px] mx-auto px-4 sm:px-6 pt-6 md:pt-8 pb-12 md:pb-16">
        <h1 className="font-display text-3xl md:text-4xl font-bold text-text-primary">
          Payment, Cancellation and Refund Policy
        </h1>

        <div className="mt-10 space-y-10 font-body text-base text-text-secondary leading-relaxed">
          {/* Payment Policy */}
          <section>
            <h2 className="font-display text-xl md:text-2xl font-bold text-text-primary mb-4">
              Payment Policy:
            </h2>
            <p>
              All fees (Service fee and challan penalty fee) for challan services on ChallanPay shall be payable upfront and in full, prior to availing of any such service by the User. A Service fee is charged for the use of our services, in addition to the challan amount payable to the concerned Government authority. The quantum, structure, and applicability of such fee are determined solely at our discretion and may vary depending on service type, payment channel, or other commercial factors. The User acknowledges and agrees that the Service fee is non-refundable except where explicitly stated otherwise in these Terms. We reserve the right to revise, increase, reduce, waive, or restructure the Service fee at any time, with or without prior notice to the User.
            </p>
          </section>

          {/* Convenience Fee */}
          <section>
            <h2 className="font-display text-xl md:text-2xl font-bold text-text-primary mb-4">
              Convenience Fee:
            </h2>
            <p>
              The User expressly understands and agrees that the convenience fee paid to ChallanPay at the time of initiating the contest is non-refundable, irrespective of the outcome of the proceedings.
            </p>
          </section>

          {/* Cancellation Policy */}
          <section>
            <h2 className="font-display text-xl md:text-2xl font-bold text-text-primary mb-4">
              Cancellation Policy:
            </h2>
            <div className="space-y-4">
              <p>
                In the event of cancellation of any paid challan for which payment has been successfully made and a ticket ID generated, and the challan proceedings have not been concluded due to any reason(s), users must notify us by mailing{' '}
                <a href="mailto:challan.support@lawyered.in" className="text-primary hover:underline">
                  challan.support@lawyered.in
                </a>{' '}
                or by adding a cancellation request over the generated ticket ID.
              </p>
              <p>
                Cancellations may only be requested within forty-eight (48) hours of making the payment for the challan service. As we commence processing immediately thereafter, no cancellation requests or refunds shall be entertained beyond this period.
              </p>
            </div>
          </section>

          {/* Refund Policy */}
          <section>
            <h2 className="font-display text-xl md:text-2xl font-bold text-text-primary mb-4">
              Refund Policy:
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                The User shall be eligible for a full refund of the challan penalty amount and applicable service fee, only if:
                <ul className="list-[circle] pl-6 mt-2 space-y-1">
                  <li>A valid refund request is submitted within forty-eight (48) hours of making the payment.</li>
                  <li>We are unable to settle the challan within ninety (90) days from the date of receipt of the Users request.</li>
                </ul>
              </li>
              <li>No refunds shall be granted after the submission of the challan resolution application to the Tribunal, Court, or relevant Authority, except in the case specified above.</li>
              <li>The User must retain and provide the unique Transaction ID number generated at the time of placing the request. Failure to provide the Transaction ID may result in the Company being unable to process the refund. The maximum refund amount claimable shall not exceed the amount actually paid by the User.</li>
              <li>We shall not be liable for errors or delays caused by third-party payment gateways or government systems.</li>
              <li>If a challan cannot be settled due to rejection by the court, requirement of physical presence, or a higher penalty, we may, at our discretion, process a refund.</li>
              <li>The User agrees that any refund processed is final and binding and cannot be disputed.</li>
              <li>In the event of a partial refund, the refund amount shall be processed on a proportionate basis.</li>
            </ul>
          </section>

          {/* Refund of Penalty Differential */}
          <section>
            <h2 className="font-display text-xl md:text-2xl font-bold text-text-primary mb-4">
              Refund of Penalty Differential:
            </h2>
            <ol className="list-decimal pl-6 space-y-2">
              <li>In cases where the penalty amount imposed by the court is lesser than the amount initially paid by the User, the difference shall be refunded to the Users original source account.</li>
            </ol>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>Refunds shall be processed within ninety (90) working days from the date of receipt of the final order of the court.</li>
              <li>A copy of the challan receipt/order evidencing the reduced penalty shall be shared by ChallanPay with the User.</li>
              <li>No interest shall accrue or be payable on such refunded amount.</li>
            </ul>
          </section>

          {/* Refund Process */}
          <section>
            <h2 className="font-display text-xl md:text-2xl font-bold text-text-primary mb-4">
              Refund Process:
            </h2>
            <div className="space-y-4">
              <p>
                We shall acknowledge receipt of a refund request within twenty-four (24) hours from submission. Refunds shall be available only in the circumstances expressly provided under this Refund Policy. Once approved, the refund shall be initiated within seven (7) to ten (10) business days and credited to the original payment mode unless otherwise communicated. No other refunds shall be entertained.
              </p>
              <p>
                The maximum refund amount claimable from ChallanPay cannot exceed the amount paid by the user for availing the challan service(s).
              </p>
            </div>
          </section>
        </div>
      </div>
    </PageTransition>
  )
}
