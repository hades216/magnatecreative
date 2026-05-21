import React from 'react';

export const Banner = () => {
  return (
    <div className="w-full bg-transparent py-14 text-on-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="bg-surface/40 backdrop-blur-md rounded-sm py-8 px-6 md:px-12 flex flex-col lg:flex-row items-center justify-between gap-10 shadow-lg border border-outline-variant hover:border-primary-fixed/30 transition-all group">
          
          <div className="flex flex-col md:flex-row items-center gap-10">
            {/* Google Partner */}
            <div className="flex items-center gap-4">
              <svg viewBox="0 0 24 24" className="w-10 h-10">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              <div className="flex flex-col tracking-tight">
                <span className="text-[18px] md:text-[20px] font-bold font-sans text-on-background leading-none">Google</span>
                <span className="text-[18px] md:text-[20px] font-light font-sans text-on-background/70 leading-tight">Partner</span>
              </div>
            </div>

            <div className="hidden md:block w-px h-10 bg-outline-variant"></div>

            {/* Meta Partner */}
            <div className="flex items-center gap-4">
              <svg viewBox="0 0 24 24" className="w-10 h-10" fill="#0668E1">
                <path d="M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96C18.34 21.21 22 17.06 22 12.06C22 6.53 17.5 2.04 12 2.04Z"/>
              </svg>
              <div className="flex flex-col tracking-tight">
                <span className="text-[18px] md:text-[20px] font-bold font-sans text-on-background leading-none">Meta</span>
                <span className="text-[18px] md:text-[20px] font-light font-sans text-on-background/70 leading-tight">Business Partner</span>
              </div>
            </div>
          </div>

          <div className="text-center lg:text-right flex flex-col gap-1 max-w-sm">
            <h3 className="font-bold text-base text-on-background uppercase tracking-widest group-hover:text-primary-fixed transition-colors">Official Deployment Hub</h3>
            <p className="text-on-surface-variant text-xs font-light leading-relaxed">Certified in Google Ads Management and Meta Business Suite optimizations for maximum conversion ROI.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
