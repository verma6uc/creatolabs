'use client';

import Image from 'next/image';

type MockLayoutsProps = {
  step: 'input' | 'analysis' | 'blueprint' | 'design' | 'evolution';
};

export function MockLayouts({ step }: MockLayoutsProps) {
  const layouts = {
    input: (
      <div className="flex flex-col items-center justify-center h-[300px] bg-dark-bg/50 rounded-lg p-4">
        <Image
          src="/icons/content-bot.svg"
          alt="Content Bot"
          width={48}
          height={48}
          className="mb-4 animate-float"
        />
        <div className="space-y-4 w-full max-w-sm">
          <div className="h-8 bg-white/10 rounded animate-pulse" />
          <div className="h-4 bg-white/10 rounded animate-pulse" />
          <div className="h-4 bg-white/10 rounded animate-pulse" />
        </div>
      </div>
    ),
    analysis: (
      <div className="flex flex-col items-center justify-center h-[300px] bg-dark-bg/50 rounded-lg p-4">
        <Image
          src="/icons/analytics.svg"
          alt="Analytics Bot"
          width={48}
          height={48}
          className="mb-4 animate-float"
        />
        <div className="grid grid-cols-2 gap-4 w-full max-w-sm">
          <div className="h-24 bg-white/10 rounded animate-pulse" />
          <div className="h-24 bg-white/10 rounded animate-pulse" />
          <div className="h-24 bg-white/10 rounded animate-pulse" />
          <div className="h-24 bg-white/10 rounded animate-pulse" />
        </div>
      </div>
    ),
    blueprint: (
      <div className="flex flex-col items-center justify-center h-[300px] bg-dark-bg/50 rounded-lg p-4">
        <Image
          src="/icons/design-bot.svg"
          alt="Design Bot"
          width={48}
          height={48}
          className="mb-4 animate-float"
        />
        <div className="space-y-4 w-full max-w-sm">
          <div className="h-16 bg-white/10 rounded animate-pulse" />
          <div className="grid grid-cols-3 gap-4">
            <div className="h-12 bg-white/10 rounded animate-pulse" />
            <div className="h-12 bg-white/10 rounded animate-pulse" />
            <div className="h-12 bg-white/10 rounded animate-pulse" />
          </div>
          <div className="h-24 bg-white/10 rounded animate-pulse" />
        </div>
      </div>
    ),
    design: (
      <div className="flex flex-col items-center justify-center h-[300px] bg-dark-bg/50 rounded-lg p-4">
        <Image
          src="/icons/design-bot.svg"
          alt="Design Bot"
          width={48}
          height={48}
          className="mb-4 animate-float"
        />
        <div className="space-y-4 w-full max-w-sm">
          <div className="h-12 bg-sage-green/20 rounded animate-pulse" />
          <div className="grid grid-cols-2 gap-4">
            <div className="h-32 bg-sage-green/20 rounded animate-pulse" />
            <div className="h-32 bg-sage-green/20 rounded animate-pulse" />
          </div>
        </div>
      </div>
    ),
    evolution: (
      <div className="flex flex-col items-center justify-center h-[300px] bg-dark-bg/50 rounded-lg p-4">
        <Image
          src="/icons/evolution.svg"
          alt="Evolution Bot"
          width={48}
          height={48}
          className="mb-4 animate-float"
        />
        <div className="space-y-4 w-full max-w-sm">
          <div className="h-12 bg-sage-green/30 rounded animate-pulse" />
          <div className="grid grid-cols-3 gap-4">
            <div className="h-24 bg-sage-green/30 rounded animate-pulse" />
            <div className="h-24 bg-sage-green/30 rounded animate-pulse" />
            <div className="h-24 bg-sage-green/30 rounded animate-pulse" />
          </div>
          <div className="h-16 bg-sage-green/30 rounded animate-pulse" />
        </div>
      </div>
    )
  };

  return layouts[step];
}
