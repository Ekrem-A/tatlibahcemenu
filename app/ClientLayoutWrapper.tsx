'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import Topbar from '@/app/components/Topbar';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';
import Slider from '@/app/components/Slider';
import LoadingScreen from '@/app/components/LoadingScreen';

export default function ClientLayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [appLoading, setAppLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setAppLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (appLoading) return <LoadingScreen />;

  return (
    <>
      <Topbar />
      <Navbar />
      <Slider />

      {/* Animation for page transitions */}

      <AnimatePresence mode="wait">
        <motion.div
          key={pathname}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          {children}
        </motion.div>
      </AnimatePresence>

      <Footer />
    </>
  );
}
