import { PageTransition } from '@/components/shared/PageTransition'

export function TermsPage() {
  return (
    <PageTransition>
      <div className="max-w-[860px] mx-auto px-4 sm:px-6 pt-6 md:pt-8 pb-12 md:pb-16">
        <h1 className="font-display text-3xl md:text-4xl font-bold text-text-primary">
          Terms &amp; Conditions
        </h1>

        <div className="mt-10 space-y-10 font-body text-base text-text-secondary leading-relaxed">
          {/* I. Welcome */}
          <section>
            <h2 className="font-display text-xl md:text-2xl font-bold text-text-primary mb-4">
              I. Welcome to ChallanPay
            </h2>
            <div className="space-y-4">
              <p>
                Since we will not be meeting face to face, it is important to set out the terms of the agreement clearly in advance.
              </p>
              <p>
                Welcome to ChallanPay (We, Us, Company or Our). These Terms and Conditions (Terms) govern your access to and use of our website and services related to Challan Resolution, including verification of challan details and assisting with payment or contestation before appropriate authorities, tribunals, or courts (Service). By accessing or using our Service, you agree to be bound by these Terms.
              </p>
              <p>
                If you wish to use our Common Needs feature, you affirm that you are more than 18 years of age and are fully able and competent to enter into the terms, conditions, obligations, affirmations, representations, and warranties consequent to the creation of the documents, and are aware of the same. Kindly call us for further assistance.
              </p>
            </div>
          </section>

          {/* II. Terms and Conditions for Using ChallanPay */}
          <section>
            <h2 className="font-display text-xl md:text-2xl font-bold text-text-primary mb-4">
              II. Terms and Conditions for Using ChallanPay
            </h2>
            <div className="space-y-4">
              <p>
                The following terms and conditions constitute an agreement between you and SPROUTECH SOLUTIONS PRIVATE LIMITED(ChallanPay, we, Company or us), the operator of ChallanPay (the Website). User, You, or Your shall mean any individual or legal entity who accesses, registers with, or uses the Website or the services offered thereon, including but not limited to vehicle owners, drivers, fleet operators, or their authorized representatives.
              </p>
              <p>
                BY USING THE WEBSITE, AND/OR BY REGISTERING WITH US, YOU SIGNIFY THAT YOU AGREE TO THESE TERMS AND CONDITIONS, including that you consent to the information practices disclosed in our Privacy Policy, which is incorporated herein by reference, and that you agree to comply with applicable laws governed and interpreted by the country (India).
              </p>
              <p>
                Please note that we offer the Website AS IS and without warranties. If you are registering an account or using the Website on behalf of another individual or entity, you represent that you are authorized to accept these Terms &amp; Conditions on their behalf.
              </p>
              <p>
                You understand that the specific method, features and services offered on ChallanPay may be altered, improved, removed, or adapted at any time by ChallanPay in its sole discretion and without any notice. If you do not agree with any of these terms, refrain from using this Website.
              </p>
              <p>
                The User takes full responsibility for ensuring that the information submitted is accurate. ChallanPay shall make no effort to validate any information provided by the User with respect to content, correctness, or usability. We may ask for more information to provide better services.
              </p>
            </div>
          </section>

          {/* III. General Terms */}
          <section>
            <h2 className="font-display text-xl md:text-2xl font-bold text-text-primary mb-4">
              III. General Terms
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>The User expressly understands and agrees that We are not a law firm, nor are we engaged in the practice of law in any jurisdiction.</li>
              <li>We do not, under any circumstances, provide legal advice, legal representation, drafting of pleadings, filing of cases, legal consultancy, or advocacy services before any court of law, tribunal, quasi-judicial authority, or government office.</li>
              <li>
                Any assistance provided through our platform is strictly limited to:
                <ul className="list-[circle] pl-6 mt-2 space-y-1">
                  <li>Technical facilitation of fetching challan details from Government websites and APIs</li>
                  <li>Payment processing support for challans where permissible</li>
                  <li>Administrative assistance such as notifications, reminders, and updates regarding challan status</li>
                  <li>Customer support services limited to operational queries regarding the use of Our platform</li>
                </ul>
              </li>
              <li>Nothing on Our platform shall be construed as legal advice or a substitute for professional legal consultation. Users are strongly advised to seek independent legal counsel.</li>
              <li>No attorney-client relationship shall arise between the User and Us at any point of using our platform.</li>
              <li>All legal advice and services are rendered solely by third-party professionals, who are not Our employees. Our role is limited to facilitating connections and supporting the challan resolution process through technology.</li>
              <li>All materials and information on the Website are provided for informational purposes only and are not guaranteed to be correct, complete, or up to date.</li>
            </ul>

            <h3 className="font-display text-base md:text-lg font-semibold text-text-primary mt-6 mb-2">
              Acknowledgement
            </h3>
            <p>
              By choosing to contest a challan through ChallanPay, the User acknowledges that ChallanPay is merely a facilitation platform and does not assume responsibility for the conduct of legal proceedings, outcomes, delays, or compliance obligations imposed by the court.
            </p>
          </section>

          {/* IV. What do we do? */}
          <section>
            <h2 className="font-display text-xl md:text-2xl font-bold text-text-primary mb-4">
              IV. What do we do?
            </h2>
            <div className="space-y-4">
              <p>
                Sproutech Solutions Private Limited is on a mission to make law accessible and affordable to every individual, entity, and business by minimizing the trust barriers through knowledge and awareness. Our main objective is to legally empower and cater to the needs of individuals, entities, and businesses. We are constantly evolving and developing various products to fulfill this purpose.
              </p>
              <p>
                One of the Companys online service offerings is a product designed to facilitate the resolution of challans on a Pan India basis in real time for the Indian Mobility Market (commercial and private vehicles, including cabs) through its proprietary platform known as CAAS CHALLAN AS A SERVICE.
              </p>
              <p>
                Our product CAAS &ldquo;Challan as a Service&rdquo; facilitates clearance, resolution, or contestation of challans on behalf of end users.
              </p>
            </div>
          </section>

          {/* V. Challan Information and Accuracy */}
          <section>
            <h2 className="font-display text-xl md:text-2xl font-bold text-text-primary mb-4">
              V. Challan Information and Accuracy
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Challan details, including amount and status, are fetched directly from designated Government websites or Government-provided APIs. We do not create, alter, or verify challan details. The accuracy, completeness, and correctness of challan data rest entirely with the concerned Government authority.</li>
              <li>Segregation of challans (online vs. court challans) is also performed through Government system APIs. We disclaim any responsibility for discrepancies, errors, or inaccuracies in challan information displayed to the User during the use of the Website.</li>
            </ul>
            <h3 className="font-display text-base md:text-lg font-semibold text-text-primary mt-6 mb-2">
              User Responsibility:
            </h3>
            <p>
              You are solely responsible for providing accurate, current, and complete information related to your challan and personal details. Failure to provide accurate details may result in refusal or discontinuation of service.
            </p>
          </section>

          {/* VI. Payment, Cancellation and Refund Policy */}
          <section>
            <h2 className="font-display text-xl md:text-2xl font-bold text-text-primary mb-4">
              VI. Payment, Cancellation and Refund Policy
            </h2>

            <h3 className="font-display text-base md:text-lg font-semibold text-text-primary mb-2">
              Payment Policy:
            </h3>
            <div className="space-y-4">
              <p>
                All fees (Service fee and challan penalty fee) for challan services on ChallanPay shall be payable upfront and in full, prior to availing of any such service by the User. A Service fee is charged for the use of our services, in addition to the challan amount payable to the concerned Government authority. The quantum, structure, and applicability of such fee are determined solely at our discretion and may vary depending on service type, payment channel, or other commercial factors.
              </p>
              <p>
                The User acknowledges and agrees that the Service fee is non-refundable except where explicitly stated otherwise in these Terms. We reserve the right to revise, increase, reduce, waive, or restructure the Service fee at any time, with or without prior notice to the User.
              </p>
            </div>

            <h3 className="font-display text-base md:text-lg font-semibold text-text-primary mt-6 mb-2">
              Convenience Fee:
            </h3>
            <p>
              The User expressly understands and agrees that the convenience fee paid to ChallanPay at the time of initiating the contest is non-refundable, irrespective of the outcome of the proceedings.
            </p>

            <h3 className="font-display text-base md:text-lg font-semibold text-text-primary mt-6 mb-2">
              Cancellation Policy:
            </h3>
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

            <h3 className="font-display text-base md:text-lg font-semibold text-text-primary mt-6 mb-2">
              Refund Policy:
            </h3>
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
            </ul>

            <h3 className="font-display text-base md:text-lg font-semibold text-text-primary mt-6 mb-2">
              Refund of Penalty Differential:
            </h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>In cases where the penalty amount imposed by the court is lesser than the amount initially paid by the User, the difference shall be refunded to the Users original source account.</li>
              <li>Refunds shall be processed within ninety (90) working days from the date of receipt of the final order of the court.</li>
              <li>A copy of the challan receipt/order evidencing the reduced penalty shall be shared by ChallanPay with the User.</li>
              <li>No interest shall accrue or be payable on such refunded amount.</li>
            </ul>

            <h3 className="font-display text-base md:text-lg font-semibold text-text-primary mt-6 mb-2">
              Refund Process:
            </h3>
            <div className="space-y-4">
              <p>
                We shall acknowledge receipt of a refund request within twenty-four (24) hours from submission. Refunds shall be available only in the circumstances expressly provided under this Refund Policy. Once approved, the refund shall be initiated within seven (7) to ten (10) business days and credited to the original payment mode unless otherwise communicated. No other refunds shall be entertained.
              </p>
              <p>
                The maximum refund amount claimable from ChallanPay cannot exceed the amount paid by the user for availing the challan service(s).
              </p>
            </div>
          </section>

          {/* VII. Third Party Services */}
          <section>
            <h2 className="font-display text-xl md:text-2xl font-bold text-text-primary mb-4">
              VII. Third Party Services
            </h2>
            <p>
              The Company may engage third-party service providers, including legal professionals, payment gateways, and other vendors, in providing its Services. The Company shall not be liable for any acts, omissions, errors, representations, warranties, breaches, or negligence of such third parties, or for any loss or damage arising directly or indirectly from their services.
            </p>

            <h3 className="font-display text-base md:text-lg font-semibold text-text-primary mt-6 mb-2">
              Offers, Discounts &amp; Reward Programs:
            </h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>From time to time, we may, at our sole discretion, introduce promotional offers, discounts, credits, reward points, or loyalty schemes (Promotions).</li>
              <li>All Promotions are purely discretionary, conditional, and voluntary. We retain the right to modify, extend, withdraw, or terminate any Promotion at any time, without prior notice.</li>
              <li>The User acknowledges that Promotions are not contractual entitlements and shall not be construed as creating any vested right.</li>
            </ul>
          </section>

          {/* VIII. Timeline for Disposal of Challan */}
          <section>
            <h2 className="font-display text-xl md:text-2xl font-bold text-text-primary mb-4">
              VIII. Timeline for Disposal of Challan
            </h2>
            <div className="space-y-4">
              <p>
                In the event that an Eligible User elects to contest a challan through the ChallanPay platform, such challan shall be transferred to the competent court of law for adjudication. The User hereby acknowledges and agrees that upon exercising this option, the matter shall fall under the exclusive jurisdiction and procedural directions of the concerned court.
              </p>
              <p>
                Challan disposal TAT (Turn Around Time): The User acknowledges and agrees that the indicative turnaround time (TAT) for the resolution of challans shall ordinarily range between thirty (30) to ninety (90) working days for court challans commencing from the date payment is acknowledged and confirmed by Us and receipt of all requisite documentation in satisfactory form. The indicative turnaround time (TAT) for the resolution of online challans is fifteen (15) working days from the date payment is acknowledged and confirmed by Us.
              </p>
              <p>
                Such timelines are purely indicative in nature and may vary depending upon the nature and particulars of the challan, the processing times of the relevant governmental or judicial authorities, legal complexities involved, and any other circumstances beyond Our reasonable control.
              </p>
              <p>
                We expressly disclaim, and shall have no liability whatsoever, for any delay, loss, or consequence arising out of or in connection with procedural requirements, actions or inactions of governmental or judicial authorities, third-party dependencies, or any other external factors impacting the disposal of challans.
              </p>
              <p>
                The User acknowledges that completion of certain transactions and challan resolutions may require authentication steps, including but not limited to One-Time Passwords (OTPs), mobile number verification, or other verifications mandated by authorities. Failure, refusal, or delay by the User in providing such authentication shall automatically result in an extension of the resolution timeline.
              </p>
            </div>
          </section>

          {/* IX. OTP */}
          <section>
            <h2 className="font-display text-xl md:text-2xl font-bold text-text-primary mb-4">
              IX. OTP (One Time Password)
            </h2>
            <div className="space-y-4">
              <p>
                The User acknowledges and agrees that the provision of a valid One-Time Password (OTP), or such other authentication code as may be generated by the relevant authority, shall be mandatory for the processing and settlement of all online challans and &ldquo;Pay Now&rdquo; challans. This ensures secure processing, compliance, and authentication.
              </p>
              <p>
                The User shall furnish the OTP or authentication code to Us promptly upon request to enable timely settlement of challans. Any delay, omission, or failure by the User in providing such OTP may result in late payment, penalties, or other adverse consequences, for which We shall bear no responsibility or liability.
              </p>
              <p>
                We undertake to use the OTP or authentication credentials provided by the User solely for the purpose of completing the specific transaction for which such credentials were shared. We shall not retain, store, disclose, or misuse such credentials, except as required by law.
              </p>
              <p>
                With respect to challans pertaining to judicial proceedings, including court challans and challans requiring court appearances, the User acknowledges that OTP authentication is not applicable and shall not be required.
              </p>
            </div>
          </section>

          {/* X. Document Requirement */}
          <section>
            <h2 className="font-display text-xl md:text-2xl font-bold text-text-primary mb-4">
              X. Document Requirement
            </h2>
            <div className="space-y-4">
              <p>
                The User acknowledges and agrees that We may collect, request, and retain such documents and information as are necessary for challan resolution, including but not limited to vehicle-related details, KYC documents, authorization letters, and other supporting materials as required by law or relevant authorities.
              </p>
              <p>
                The User undertakes to furnish such documents promptly and warrants that all information and documents provided are true, complete, and accurate. Where a court or Government authority requires submission of documents in a specific format, the User shall be solely responsible for furnishing such documents correctly and within the stipulated timeframe.
              </p>
              <p>
                Failure or delay by the User in providing documents in the prescribed format shall result in an automatic extension of the resolution timeline.
              </p>
            </div>

            <h3 className="font-display text-base md:text-lg font-semibold text-text-primary mt-6 mb-2">
              Users Obligations:
            </h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Furnishing all requisite documents, evidence, and submissions as required by law or directed by the court.</li>
              <li>Complying with all directions, notices, and orders issued by the court, including but not limited to physical appearance or representation through legal counsel.</li>
            </ul>

            <h3 className="font-display text-base md:text-lg font-semibold text-text-primary mt-6 mb-2">
              Authorization to Modify Challan Details:
            </h3>
            <div className="space-y-4">
              <p>
                The User expressly, irrevocably, and unconditionally authorizes us to access, modify, amend, or update challan-linked details (e.g., mobile numbers, e-mail addresses, contact info) as may be necessary for processing, updating, or resolving challans through authorized Government systems.
              </p>
              <p>
                The User acknowledges that such modifications are purely technical facilitation measures and do not constitute alteration or manipulation of Government records.
              </p>
              <p>The User further agrees that:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Any modification or update is deemed to have been carried out with the Users full consent and authorization.</li>
                <li>We shall not be liable for any loss, penalty, fine, rejection, or dispute arising from or in connection with such modification or update.</li>
                <li>No claim, demand, or legal action shall lie against Us in respect of any modification or update undertaken under this authorization.</li>
              </ul>
              <p>
                The User waives any right to dispute or challenge such modification and agrees to indemnify and hold Us harmless against any third-party claims or governmental notices arising therefrom.
              </p>
            </div>
          </section>

          {/* XI. Confidentiality */}
          <section>
            <h2 className="font-display text-xl md:text-2xl font-bold text-text-primary mb-4">
              XI. Confidentiality
            </h2>
            <div className="space-y-4">
              <p>
                We shall make reasonable efforts to maintain the confidentiality of information submitted by Users through the platform. However, the User acknowledges that transmission of information over the internet or e-mail carries inherent risks of unauthorized access, interception, or disclosure beyond Our control.
              </p>
              <p>
                Further, We cannot regulate or control the conduct of third parties. Users are therefore advised to exercise discretion and avoid including confessions or highly sensitive details.
              </p>
              <p>We shall not be responsible or liable for any unauthorized disclosure, misuse, or loss of information arising from:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Actions or omissions of Users or third parties,</li>
                <li>Any system errors or vulnerabilities, or</li>
                <li>Risks inherent in the use of the internet or electronic communication.</li>
              </ul>
              <p>
                All information submitted by Users shall be collected, processed, stored, and used in accordance with the CompanysPrivacy Policy, which forms an integral part of these Terms and Conditions.
              </p>
            </div>
          </section>

          {/* XII. Remarketing and Retargeting Activities */}
          <section>
            <h2 className="font-display text-xl md:text-2xl font-bold text-text-primary mb-4">
              XII. Remarketing and Retargeting Activities
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>The User expressly consents to receive communications from us, including but not limited to SMS, WhatsApp, RCS, e-mails, or in-app notifications, related to the use of our platform and services.</li>
              <li>
                Such communications may include:
                <ul className="list-[circle] pl-6 mt-2 space-y-1">
                  <li>
                    <span className="font-semibold text-text-primary">Transactional communications:</span> acknowledgements, challan updates, payment confirmations, alerts, and service notifications.
                  </li>
                  <li>
                    <span className="font-semibold text-text-primary">Promotional communications:</span> offers, discounts, loyalty schemes, marketing campaigns, and service updates.
                  </li>
                </ul>
              </li>
              <li>
                The User acknowledges that:
                <ul className="list-[circle] pl-6 mt-2 space-y-1">
                  <li>Communications may be sent directly or through third-party service providers.</li>
                  <li>Delivery may depend on third-party systems or regulations; We do not guarantee timeliness or error-free transmission.</li>
                  <li>No claim or liability shall arise for non-receipt or delayed receipt of communications.</li>
                </ul>
              </li>
              <li>Promotional communications are discretionary, and Users may opt out using the unsubscribe mechanism provided. Transactional communications cannot be opted out of.</li>
              <li>We do not sell, rent, or share personal User information for unsolicited marketing.</li>
              <li>The User waives any claim or objection under consumer protection, telecommunication, spam control, or privacy laws regarding such communications, to the maximum extent permitted by law.</li>
            </ul>
            <p className="mt-4">
              You may opt out of receiving promotional communications at any time by following unsubscribe instructions in such messages or contacting the Company through designated channels.
            </p>
          </section>

          {/* XIII. Data Liability */}
          <section>
            <h2 className="font-display text-xl md:text-2xl font-bold text-text-primary mb-4">
              XIII. Data Liability
            </h2>
            <p>
              The User acknowledges and agrees that all challan details, documents, and related data submitted for processing originate directly from the User. The User shall bear sole responsibility for the accuracy, completeness, and authenticity of such information. We shall not be liable for any errors, delays, penalties, losses, or consequences arising from the submission of incorrect, incomplete, misleading, or fraudulent information by the User. The User is solely responsible for verifying the correctness of all details prior to submission.
            </p>
          </section>

          {/* XIV. Cookie Policy */}
          <section>
            <h2 className="font-display text-xl md:text-2xl font-bold text-text-primary mb-4">
              XIV. Cookie Policy
            </h2>
            <h3 className="font-display text-base md:text-lg font-semibold text-text-primary mb-2">
              Cookie usage
            </h3>
            <p>
              Our website uses cookies and similar tracking technologies to enhance user experience, remember preferences, analyze traffic, and enable remarketing. By using our services, you consent to cookie usage per this policy. You may control cookies through browser settings, but disabling cookies may affect some website features.
            </p>
          </section>

          {/* XV. Data Retention */}
          <section>
            <h2 className="font-display text-xl md:text-2xl font-bold text-text-primary mb-4">
              XV. Data Retention
            </h2>
            <h3 className="font-display text-base md:text-lg font-semibold text-text-primary mb-2">
              Retention Period:
            </h3>
            <p>
              We retain your personal data and documentation for as long as necessary to fulfill the purposes for which it was collected, including service provision, compliance with legal obligations, and resolution of disputes. Upon completion of your service request, data is archived securely and will be retained for a maximum of 3 years, unless a longer retention period is mandated by law.
            </p>
          </section>

          {/* XVI. Data Deletion */}
          <section>
            <h2 className="font-display text-xl md:text-2xl font-bold text-text-primary mb-4">
              XVI. Data Deletion
            </h2>
            <p>
              You may request the deletion of your personal data and documentation stored with us, subject to legal and regulatory retention requirements. To exercise this right, contact us at{' '}
              <a href="mailto:deeksha.varshney@lawyered.in" className="text-primary hover:underline">
                deeksha.varshney@lawyered.in
              </a>{' '}
              . Upon receipt of a valid deletion request, we will erase your data within 30 days except where retention is required for compliance with applicable legal, regulatory, or contractual obligations, or for the establishment, exercise, or defense of legal claims.
            </p>
          </section>

          {/* XVII. Limitation of Liability */}
          <section>
            <h2 className="font-display text-xl md:text-2xl font-bold text-text-primary mb-4">
              XVII. Limitation of Liability
            </h2>
            <p>
              YOU EXPRESSLY UNDERSTAND AND AGREE THAT WE SHALL NOT BE LIABLE FOR ANY, INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL OR EXEMPLARY DAMAGES, INCLUDING BUT NOT LIMITED TO, DAMAGES FOR LOSS OF REVENUES, PROFITS, GOODWILL, USE, DATA, FAILURE TO REALIZE EXPECTED SAVINGS, OR OTHER INTANGIBLE LOSSES (EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES), RESULTING FROM: (i) THE USE OR THE INABILITY TO USE THE WEBSITE; (ii) THE COST OF PROCUREMENT OF SUBSTITUTE GOODS AND SERVICES RESULTING FROM ANY GOODS, DATA, INFORMATION OR SERVICES PURCHASED OR OBTAINED OR MESSAGES RECEIVED OR TRANSACTIONS ENTERED INTO THROUGH OR FROM THE WEBSITE; (iii) INVALID DESTINATIONS, TRANSMISSION ERRORS, OR UNAUTHORIZED ACCESS TO OR ALTERATION OF YOUR TRANSMISSIONS OR DATA; (iv) STATEMENTS OR CONDUCT OF ANY THIRD PARTY ON THE WEBSITE; (v) YOUR FAILURE TO RECEIVE ANY THIRD PARTY SERVICES OR PRODUCTS REQUESTED THROUGH THE WEBSITE OR (vi) ANY OTHER MATTER RELATING TO THE WEBSITE. IN NO EVENT ARE WE LIABLE TO YOU FOR AN AMOUNT IN EXCESS OF THE AMOUNT PAID BY YOU TO US FOR THE SERVICES IN QUESTION, IF ANY.
            </p>
          </section>

          {/* XVIII. Disclaimers */}
          <section>
            <h2 className="font-display text-xl md:text-2xl font-bold text-text-primary mb-4">
              XVIII. Disclaimers
            </h2>
            <div className="space-y-4">
              <p>
                You acknowledge that your use of the ChallanPay Services is solely at your own risk, and that you assume full responsibility for all risks associated therewith. To the extent that any of the Content included on ChallanPay is provided by third party content providers or other users, we have no editorial control or responsibility of such content appearing on ChallanPay. All information, products or services contained on or provided through this Website are provided as is, without any warranty of any kind, express or implied, to the fullest extent permissible under applicable law. ChallanPay and its affiliates hereby disclaim all representations and warranties, express or implied, statutory or otherwise, including but not limited to warranties of merchantability, appropriateness, title, non-infringement and freedom from virus strains.
              </p>
              <p>
                The Website may contain hyperlinks to Websites neither owned nor controlled by Us and we are not responsible for, and, unless otherwise noted specifically, make no representations or endorsements with respect to these Websites or with respect to any service or product associated with these Websites. By including these hyperlinks, we do not mean to state or imply that we sponsor, are affiliated with, or are legally authorized to use any trade name, registered trademark, service mark, logo, legal or official seal, or copyrighted symbol that may be reflected in the hyperlinks.
              </p>
              <p>
                ChallanPay will take all necessary precautions to protect itself against failure of our hardware and our software. The Consumer acknowledges and agrees that temporary interruptions in service may occur, and that ChallanPay shall have no liability for any claim, cost, charge, loss or expense arising from or relating to use of the Services. ChallanPay makes no guarantee that the Services will meet your requirements, or that the Service(s) will be uninterrupted, timely, secure, or error free. The Consumer acknowledges and agrees that in the event of failure, restoration of service may take several days.
              </p>
              <p>
                We reserve the right at any time and from time to time to modify or discontinue, temporarily or permanently, the Website (or any part of it) with or without notice. In the event of a modification or discontinuance, all information submitted by you and others may be lost. You agree to keep a permanent record of all information provided to Us, and You agree that all information submitted to us is at Your sole risk. You agree that We have no responsibility or liability for the deletion or failure to store any Content maintained or transmitted by the Website including without limitation messages and other communications. You agree that We shall not be liable to you or to any third party for any modification, suspension or discontinuance of the Service.
              </p>
              <p>
                We do not represent or warrant that the Website will be error-free, free of viruses or other harmful components, or that defects will be corrected. We do not warrant or represent that the information available on or through the Website will be correct, accurate, timely, or otherwise reliable. We may (but are not obligated to) make improvements and/or changes to its features, functionality or content of the Website at any time. In no event shall we be liable for any such errors or defects.
              </p>
            </div>
          </section>

          {/* XIX. Indemnification */}
          <section>
            <h2 className="font-display text-xl md:text-2xl font-bold text-text-primary mb-4">
              XIX. Indemnification
            </h2>
            <div className="space-y-4">
              <p>
                The User agrees to defend, indemnify, and hold harmless ChallanPay, its affiliates, directors, officers, employees, agents, service providers, and partners (collectively, the Indemnified Parties) from and against any and all claims, actions, demands, proceedings, liabilities, losses, damages, penalties, fines, costs, or expenses (including reasonable attorneys fees and litigation costs) arising out of or in connection with:
              </p>
              <ul className="list-none pl-0 space-y-2">
                <li>(a) The Users breach of these Terms of Use, Privacy Policy, or any other policy incorporated herein by reference;</li>
                <li>(b) Any inaccurate, incomplete, false, or misleading information, documents, or data submitted by the User on the Platform, including challan-linked details;</li>
                <li>(c) Unauthorized or illegal use of the Platform or misuse of services offered by ChallanPay;</li>
                <li>(d) Any third-party claim, penalty, or proceeding initiated by a Government authority, court, or law enforcement body in relation to the Users challan, vehicle, or personal details;</li>
                <li>(e) The Users violation of any applicable law, rule, or regulation;</li>
              </ul>
              <p>
                The indemnity obligations herein shall survive the termination or expiration of these Terms and shall remain enforceable against the User notwithstanding discontinuation of services. ChallanPay reserves the right, at its sole discretion and expense, to assume the exclusive defense and control of any matter subject to indemnification by the User. In such cases, the User agrees to cooperate fully in the defense of such claims, including providing all necessary documents, records, and evidence as reasonably requested.
              </p>
              <p>
                Notwithstanding the above, the Consumers exclusive remedies for all damages, losses and causes of actions whether in contract, including negligence or otherwise, shall not exceed the aggregate amount, which the Consumer paid directly to ChallanPay for the service in question.
              </p>
            </div>
          </section>

          {/* XX. Jurisdiction */}
          <section>
            <h2 className="font-display text-xl md:text-2xl font-bold text-text-primary mb-4">
              XX. Jurisdiction
            </h2>
            <div className="space-y-4">
              <p>
                This Agreement constitutes the entire understanding of the parties, and is agreed to being entered into within the jurisdiction of Gurugram, Haryana India and shall be governed by and shall be construed in accordance with the laws of the Republic of India, without giving effect to any choice of law rules or principles. Any dispute with ChallanPay shall exclusively be subject to the jurisdiction of the appropriate Courts situated at Gurugram, Haryana, India. No party shall object to removal or prosecution of any litigation to a court within the jurisdiction of Gurugram, Haryana, India.
              </p>
              <p>
                Any cause of action or claim you may have with respect to Challan Pay must be commenced within one (1) year after it arises, except to the extent such litigation is not enforceable. To the fullest extent permitted by law, each party to this Terms &amp; Conditions waives its or his or her right to a jury trial with respect to any dispute or other controversy arising from hereunder or your use of or access to the ChallanPay Services or Website.
              </p>
              <p>
                Failure to exercise or delay in exercising any right hereunder, or failure to insist upon or enforce strict performance of any provision of this Terms &amp; Conditions, shall not be considered waiver thereof, which can only be made by signed writing. No single waiver shall be considered a continuing or permanent waiver.
              </p>
            </div>
          </section>

          {/* XXI. Right to Modify Terms of Use */}
          <section>
            <h2 className="font-display text-xl md:text-2xl font-bold text-text-primary mb-4">
              XXI. Right to Modify Terms of Use
            </h2>
            <div className="space-y-4">
              <p>
                You agree and confirm that the Terms of Service may be amended from time to time without notice and take responsibility to update yourself periodically with the latest version available on Challan Pay Website. Any such revision or change will be binding and effective immediately on release of the revised Agreement or change to the Service(s) on our Website. Unless we notify otherwise, these terms incorporate and supersede any other terms associated with the Services.
              </p>
              <p>
                ChallanPay has the right to discontinue service, or deny access to anyone who violates our policies or the terms and conditions stated herein, without prior notice or warning.
              </p>
              <p>
                ChallanPay may freely transfer, assign or delegate all or any part of these Terms &amp; Conditions, and any rights and duties hereunder. These Terms &amp; Conditions will be binding upon and inure to the benefit of the heirs, successors and permitted assignees.
              </p>
            </div>
          </section>

          {/* XXII. Waiver and Severability of Terms */}
          <section>
            <h2 className="font-display text-xl md:text-2xl font-bold text-text-primary mb-4">
              XXII. Waiver and Severability of Terms
            </h2>
            <p>
              Our failure to exercise or enforce any right or provision of this agreement shall not constitute a waiver of such right or provision. If any provision of the agreement is found by a court of competent jurisdiction to be invalid, the parties nevertheless agree that the court should endeavor to give effect to the parties intentions as reflected in the provision, and the other provisions of the agreement shall remain in full force and effect.
            </p>
          </section>

          {/* XXIII. Entire Agreement */}
          <section>
            <h2 className="font-display text-xl md:text-2xl font-bold text-text-primary mb-4">
              XXIII. Entire Agreement
            </h2>
            <div className="space-y-4">
              <p>
                This agreement constitutes the entire and whole agreement between user and ChallanPay, and is intended as a complete and exclusive statement of the terms of the agreement. This agreement shall supersede all other communications between ChallanPay and its users with respect to the subject matter hereof and supersedes and replaces all prior or contemporaneous understandings or agreements, written or oral, regarding such subject matter. If at any time you find these Terms and Conditions unacceptable or if you do not agree to these Terms and Conditions, please do not use this Site. We may revise these Terms and Conditions at any time without notice to you. It is your responsibility to review these Terms and Conditions periodically.
              </p>
              <p>
                By using ChallanPay services or accessing the ChallanPay site, you acknowledge that you have read these terms and conditions and agree to be bound by them.
              </p>
            </div>
          </section>
        </div>
      </div>
    </PageTransition>
  )
}
