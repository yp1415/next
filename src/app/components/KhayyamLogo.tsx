import { motion } from 'framer-motion';

interface KhayyamLogoProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  animated?: boolean;
}

export function KhayyamLogo({ size = 'md', className = '', animated = true }: KhayyamLogoProps) {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16'
  };

  const textSizes = {
    sm: 'text-lg',
    md: 'text-2xl',
    lg: 'text-3xl'
  };

  const LogoComponent = animated ? motion.div : 'div';
  const animationProps = animated ? {
    initial: { scale: 0.8, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    transition: { duration: 0.5 }
  } : {};

  return (
    <LogoComponent 
      className={`flex items-center space-x-3 ${className}`}
      {...animationProps}
    >
      {/* Custom Khayyam Logo Icon */}
      <div className="relative">
        <div className={`${sizeClasses[size]} bg-gradient-to-br from-emerald-500 via-teal-600 to-cyan-600 rounded-xl shadow-lg flex items-center justify-center relative overflow-hidden`}>
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
          
          {/* Main Logo - Stylized K */}
          <svg 
            className="w-2/3 h-2/3 text-white relative z-10" 
            viewBox="0 0 24 24" 
            fill="currentColor"
          >
            <path d="M3 3h3v8.5l6-6.5h4l-6 6.5 6.5 8.5h-4L6 12v8H3V3z"/>
            {/* Decorative dots */}
            <circle cx="18" cy="6" r="1.5" opacity="0.8"/>
            <circle cx="20" cy="8" r="1" opacity="0.6"/>
            <circle cx="16" cy="4" r="0.8" opacity="0.7"/>
          </svg>
          
          {/* Glow effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/30 to-cyan-400/30 rounded-xl"></div>
        </div>
        
        {/* Animated accent dot */}
        {animated && (
          <motion.div 
            className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full"
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.8, 1, 0.8]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        )}
      </div>
      
      {/* Brand Text */}
      <div>
        <span className={`${textSizes[size]} font-bold bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent`}>
          Khayyam
        </span>
        <div className="text-xs text-gray-500 -mt-1 font-medium">
          آموزشگاه فنی‌و‌حرفه‌ای
        </div>
      </div>
    </LogoComponent>
  );
}