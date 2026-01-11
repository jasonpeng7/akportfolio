"use client";

interface MobileHeaderProps {
  onMenuOpen: () => void;
}

export default function MobileHeader({ onMenuOpen }: MobileHeaderProps) {
  return (
    <header className="lg:hidden fixed top-0 left-0 right-0 h-16 bg-white border-b border-divider z-40 flex items-center justify-between px-6">
      {/* Left: Role/Brand */}
      <div>
        <span className="text-xs font-semibold tracking-widest uppercase text-primary-navy">
          ATHARVA KHARWADKAR
        </span>
      </div>

      {/* Right: Status + Menu */}
      <div className="flex items-center space-x-4">
        <div className="hidden sm:flex items-center space-x-2">
          <span className="inline-block w-2 h-2 bg-green"></span>
          <span className="text-xs text-text-secondary uppercase">
            Open to New Opportunities
          </span>
        </div>

        <button
          onClick={onMenuOpen}
          className="text-sm font-medium text-primary-navy uppercase px-4 py-2 border border-primary-grey min-h-[44px] min-w-[44px]"
          aria-label="Open menu"
          aria-expanded="false"
        >
          Menu
        </button>
      </div>
    </header>
  );
}
