import React from 'react';
import userUploadedLogo from '../assets/images/GoVizen-Logo.jpg';

interface GoVizenLogoProps {
  className?: string;
  variant?: 'horizontal' | 'emblem' | 'full' | 'image' | 'wordmark';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showTagline?: boolean;
}

export const GoVizenLogo: React.FC<GoVizenLogoProps> = ({
  className = '',
  variant = 'horizontal',
  size = 'md',
  showTagline = true,
}) => {
  // Sizing config
  const sizes = {
    sm: {
      imgH: 'h-8 w-8',
      text: 'text-base sm:text-lg',
      tagline: 'text-[7px]',
      gap: 'gap-2.5',
    },
    md: {
      imgH: 'h-10 w-10 sm:h-11 sm:w-11',
      text: 'text-lg sm:text-xl',
      tagline: 'text-[8px] sm:text-[9px]',
      gap: 'gap-3',
    },
    lg: {
      imgH: 'h-14 w-14 sm:h-16 sm:w-16',
      text: 'text-2xl sm:text-3xl',
      tagline: 'text-[10px] sm:text-[11px]',
      gap: 'gap-3.5',
    },
    xl: {
      imgH: 'h-20 w-20 sm:h-24 sm:w-24',
      text: 'text-4xl sm:text-5xl',
      tagline: 'text-xs sm:text-sm',
      gap: 'gap-4',
    },
  }[size];

  // Stylized GoVizen Wordmark Typography
  const Wordmark = ({ textClass = '' }: { textClass?: string }) => (
    <div className={`flex items-baseline tracking-normal select-none font-display font-bold leading-none ${textClass}`}>
      <span className="text-white tracking-tight font-black inline-block transform skew-x-[-3deg]">
        Go
      </span>
      <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#FFD038] via-[#E5A712] to-[#B87A04] font-black inline-block px-[1px] transform skew-x-[-3deg] drop-shadow-[0_1px_3px_rgba(229,167,18,0.35)]">
        V
      </span>
      <span className="text-white tracking-tight font-black inline-block transform skew-x-[-3deg]">
        izen
      </span>
    </div>
  );

  // Tagline: WE BUILD • WE DESIGN • WE GROW
  const Tagline = ({ tagClass = '' }: { tagClass?: string }) => (
    <div
      className={`font-mono uppercase tracking-[0.22em] font-semibold whitespace-nowrap select-none flex items-center justify-start gap-1 text-[#888888] ${tagClass}`}
    >
      <span>WE BUILD</span>
      <span className="text-[#E5A712] text-[1.1em] font-black leading-none">•</span>
      <span>WE DESIGN</span>
      <span className="text-[#E5A712] text-[1.1em] font-black leading-none">•</span>
      <span>WE GROW</span>
    </div>
  );

  // Emblem from the uploaded JPG file
  const Emblem = ({ wrapperClass = '' }: { wrapperClass?: string }) => (
    <div
      className={`relative overflow-hidden rounded-md bg-white p-0.5 border border-neutral-300 shadow-md flex items-center justify-center shrink-0 ${sizes.imgH} ${wrapperClass}`}
    >
      <img
        src={userUploadedLogo}
        alt="GoVizen"
        referrerPolicy="no-referrer"
        className="w-full h-full object-contain"
      />
    </div>
  );

  // Variant: Emblem Only
  if (variant === 'emblem') {
    return <Emblem wrapperClass={className} />;
  }

  // Variant: Wordmark Only
  if (variant === 'wordmark') {
    return (
      <div className={`flex flex-col justify-center text-left ${className}`}>
        <Wordmark textClass={sizes.text} />
        {showTagline && <Tagline tagClass={`${sizes.tagline} mt-1`} />}
      </div>
    );
  }

  // Variant: Full badge card (e.g. for About section showcase)
  if (variant === 'full' || variant === 'image') {
    return (
      <div className={`flex flex-col items-center justify-center p-4 rounded-lg bg-white border border-neutral-300 shadow-2xl text-center ${className}`}>
        <img
          src={userUploadedLogo}
          alt="GoVizen Official Logo"
          referrerPolicy="no-referrer"
          className="w-full max-w-[260px] h-auto object-contain rounded mb-3"
        />
        <Wordmark textClass="text-2xl sm:text-3xl text-neutral-900" />
        {showTagline && <Tagline tagClass="text-[9px] sm:text-[10px] mt-2 text-neutral-600 justify-center" />}
      </div>
    );
  }

  // Default: Horizontal lockup (Emblem + Name + Tagline) for Navbar & Footer
  return (
    <div className={`inline-flex items-center ${sizes.gap} ${className}`}>
      {/* Exact uploaded JPG logo thumbnail */}
      <Emblem />

      {/* Brand Name & Motto right next to it */}
      <div className="flex flex-col justify-center text-left">
        <Wordmark textClass={sizes.text} />
        {showTagline && <Tagline tagClass={`${sizes.tagline} mt-1`} />}
      </div>
    </div>
  );
};

export default GoVizenLogo;
