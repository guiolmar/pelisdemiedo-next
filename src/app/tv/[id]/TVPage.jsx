"use client";

import { useState, useEffect } from 'react';
import ClientTVPage from './ClientTVPage';
import SkeletonTVPage from '@/components/SkeletonTVPage'; // Componente Skeleton

export default function TVPage({ tvShow, cast }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadTVShowData = async () => {
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simular tiempo de carga
      setLoading(false);
    };
    
    loadTVShowData();
  }, []);

  if (loading) {
    return <SkeletonTVPage />;
  }

  return <ClientTVPage tvShow={tvShow} cast={cast} />;
}
