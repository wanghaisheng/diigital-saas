import { ArrowDownCircle } from "lucide-react";
import Link from "next/link";
import React from "react";

export default async function ChatPage() {
  return (
    <div className="isolate overflow-hidden bg-gray-900">
      <div className="mx-auto max-w-7xl px-6 pb-96 pt-24 text-center sm:pt-32 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-base font-semibold leading-7 text-indigo-400">
            Download Page
          </h2>
        </div>
        <div className="relative mt-6">
          <p className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl">
            Enjoy your software!
          </p>
          <div className="mx-auto max-w-7xl px-6 pb-6 pt-10 text-white text-center lg:px-8">
            <p className="mx-auto max-w-2xl text-lg leading-8 text-white/60">
              Let us know if you need any support during your usage period.{" "}
              <div className="mx-auto my-5 flex flex-row justify-center text-white">
                <Link
                  href={"/"}
                  className="mt-8 block bg-indigo-600 leading-6 px-3.5 py-2.5 text-sm font-semibold text-center text-white dark:text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 rounded-md"
                >
                  <ArrowDownCircle />
                </Link>
              </div>
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
    </div>
  );
}
