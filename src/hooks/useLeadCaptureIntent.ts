import { useEffect, useState } from "react";

interface UseLeadCaptureIntentOptions {
  timeoutMs?: number;
  enableExitIntent?: boolean;
  enableTimeoutIntent?: boolean;
}

export const useLeadCaptureIntent = (options: UseLeadCaptureIntentOptions = {}) => {
  const {
    timeoutMs = 30000, // 30 segundos
    enableExitIntent = true,
    enableTimeoutIntent = true,
  } = options;

  const [showModal, setShowModal] = useState(false);
  const [hasShownPopup, setHasShownPopup] = useState(false);

  useEffect(() => {
    // Verificar se já mostrou o popup nas últimas 24 horas
    const lastShown = localStorage.getItem('leadCaptureLastShown');
    if (lastShown) {
      const hoursSince = (Date.now() - parseInt(lastShown)) / 1000 / 60 / 60;
      if (hoursSince < 24) {
        setHasShownPopup(true);
        return;
      }
    }

    // Exit-intent: detecta quando o mouse sai pela parte superior da página
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasShownPopup && !showModal) {
        setShowModal(true);
        setHasShownPopup(true);
        localStorage.setItem('leadCaptureLastShown', Date.now().toString());
      }
    };

    if (enableExitIntent) {
      document.addEventListener('mouseleave', handleMouseLeave);
    }

    // Timeout intent: mostra após X segundos na página
    let timer: NodeJS.Timeout;
    if (enableTimeoutIntent && timeoutMs) {
      timer = setTimeout(() => {
        if (!hasShownPopup && !showModal) {
          setShowModal(true);
          setHasShownPopup(true);
          localStorage.setItem('leadCaptureLastShown', Date.now().toString());
        }
      }, timeoutMs);
    }

    return () => {
      if (enableExitIntent) {
        document.removeEventListener('mouseleave', handleMouseLeave);
      }
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, [timeoutMs, enableExitIntent, enableTimeoutIntent, hasShownPopup, showModal]);

  return { showModal, setShowModal };
};