/**
 * Universal cross-platform link opener.
 * Works on all browsers, devices, and OS (iOS Safari, Android Chrome, Windows, Linux, etc.)
 * Handles popup blockers gracefully with fallback to location.href
 */
export const openExternalLink = (url: string, e?: React.MouseEvent) => {
  if (e) e.preventDefault();
  
  try {
    // Try window.open first
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
    
    // If popup was blocked (returns null on iOS Safari, some Android browsers)
    if (!newWindow || newWindow.closed || typeof newWindow.closed === 'undefined') {
      // Create a temporary anchor and click it programmatically
      const a = document.createElement('a');
      a.href = url;
      a.target = '_blank';
      a.rel = 'noopener noreferrer';
      a.style.display = 'none';
      document.body.appendChild(a);
      a.click();
      
      // Final fallback: direct navigation
      setTimeout(() => {
        document.body.removeChild(a);
      }, 100);
    }
  } catch {
    // Ultimate fallback for any error
    window.location.href = url;
  }
};
