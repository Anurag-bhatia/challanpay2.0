import { ScrollReveal } from '@/components/shared/ScrollReveal'

const VIDEO_ID = '1rBzlCXDSeM'

export function DefiningMilestoneSection() {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center border border-border rounded-3xl p-6 md:p-10 lg:p-12">
          {/* Left - Heading + Text */}
          <ScrollReveal>
            <div>
              <h2 className="font-display text-xl md:text-2xl lg:text-3xl font-bold text-text-primary tracking-tight mb-4">
                A Defining Milestone
              </h2>
              <div className="space-y-4 font-body text-sm md:text-base text-text-primary leading-snug">
                <p>
                  Lawyered's journey reached a defining moment on Ideabaaz S1, marking one of the most significant milestones in our evolution as a legal-tech platform.
                </p>
                <p>
                  On national television, Lawyered secured an All-Titan deal, a powerful validation of both our vision and the scale at which we are building. The unanimous backing reflected strong belief in the problem we are solving and the long-term impact Lawyered aims to create.
                </p>
                <p>
                  We are proud to be backed by an exceptional group of investors who bring deep entrepreneurial experience and strategic insight. This milestone represents more than funding.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Right - YouTube Video */}
          <ScrollReveal direction="right">
            <div className="relative w-full max-w-md lg:max-w-lg mx-auto aspect-video rounded-2xl overflow-hidden shadow-lg border border-border">
              <iframe
                src={`https://www.youtube.com/embed/${VIDEO_ID}`}
                title="Lawyered on Ideabaaz S1"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
