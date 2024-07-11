import React from "react";
import PricingCards from "@/components/ui/PricingCards";

export default async function PricingPage() {
  return (
    <div className="isolate overflow-hidden bg-gray-900">
      <div className="mx-auto max-w-7xl px-6 pb-96 pt-24 text-center sm:pt-32 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-base font-semibold leading-7 text-indigo-400">
            Pricing
          </h2>
        </div>
        <div className="relative mt-6">
          <p className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl">
            Let's get your plan settled today.
          </p>
          <div className="mx-auto max-w-7xl px-6 pb-12 pt-16 text-white text-center lg:px-8">
            <p className="mx-auto max-w-2xl text-lg leading-8 text-white/60">
              We make a commitment to using safe technologies, and provide safe
              endpoints via Stripe for checkout.
            </p>
          </div>
          <svg>
            <ellipse
              cx={604}
              cy={512}
              fill="url(#radial-gradient-pricing)"
              rx={604}
              ry={512}
            />
            <defs>
              <radialGradient id="radial-graident-pricing">
                <stop stopColor="#7775D6" />
                <stop offset={1} stopColor="#E935C1" />
              </radialGradient>
            </defs>
          </svg>
        </div>
      </div>

      <div className="flow-root bg-white pb-24 sm:pb-32">
        <div className="-mt-80">
          <PricingCards redirect={true} />
        </div>
      </div>
    </div>
  );
}
