'use client'

import { useEffect, useState } from 'react'

export function PerformanceMonitor() {
  const [metrics, setMetrics] = useState({})

  useEffect(() => {
    // Only run in production or when specifically needed for debugging
    if (process.env.NODE_ENV !== 'development') return

    const observer = new PerformanceObserver((list) => {
      list.getEntries().forEach((entry) => {
        switch (entry.entryType) {
          case 'paint':
            if (entry.name === 'first-contentful-paint') {
              setMetrics(prev => ({ ...prev, fcp: entry.startTime }))
            }
            break
          case 'largest-contentful-paint':
            setMetrics(prev => ({ ...prev, lcp: entry.startTime }))
            break
          case 'layout-shift':
            const layoutEntry = entry
            if (!layoutEntry.hadRecentInput) {
              setMetrics(prev => ({ 
                ...prev, 
                cls: (prev.cls || 0) + layoutEntry.value 
              }))
            }
            break
          case 'first-input':
            const inputEntry = entry
            setMetrics(prev => ({ ...prev, fid: inputEntry.processingStart - entry.startTime }))
            break
        }
      })
    })

    try {
      observer.observe({ entryTypes: ['paint', 'largest-contentful-paint', 'layout-shift', 'first-input'] })
    } catch {
      console.log('Performance observer not supported')
    }

    return () => observer.disconnect()
  }, [])

  // Don't render in production
  if (process.env.NODE_ENV !== 'development') return null

  return (
    <div className="fixed bottom-4 right-4 bg-black/80 text-white p-2 rounded text-xs font-mono z-50 backdrop-blur">
      <div>FCP: {metrics.fcp ? `${Math.round(metrics.fcp)}ms` : '...'}</div>
      <div>LCP: {metrics.lcp ? `${Math.round(metrics.lcp)}ms` : '...'}</div>
      <div>CLS: {metrics.cls ? metrics.cls.toFixed(3) : '...'}</div>
      <div>FID: {metrics.fid ? `${Math.round(metrics.fid)}ms` : '...'}</div>
    </div>
  )
}

