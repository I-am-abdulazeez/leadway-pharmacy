import { useEffect, useRef, useState, useCallback } from "react";

interface UseInactivityModalProps {
  warningTimeout: number;
  logoutTimeout: number;
  onLogout: () => void;
}

export const useInactivityModal = ({
  warningTimeout,
  logoutTimeout,
  onLogout,
}: UseInactivityModalProps) => {
  const [showWarning, setShowWarning] = useState(false);
  const [countdown, setCountdown] = useState(0);

  const warningTimerRef = useRef<NodeJS.Timeout | null>(null);
  const logoutTimerRef = useRef<NodeJS.Timeout | null>(null);
  const countdownTimerRef = useRef<NodeJS.Timeout | null>(null);

  const onLogoutRef = useRef(onLogout);
  onLogoutRef.current = onLogout;

  const clearAllTimers = useCallback(() => {
    if (warningTimerRef.current) {
      clearTimeout(warningTimerRef.current);
      warningTimerRef.current = null;
    }
    if (logoutTimerRef.current) {
      clearTimeout(logoutTimerRef.current);
      logoutTimerRef.current = null;
    }
    if (countdownTimerRef.current) {
      clearInterval(countdownTimerRef.current);
      countdownTimerRef.current = null;
    }
  }, []);

  const resetTimers = useCallback(() => {
    clearAllTimers();
    setShowWarning(false);

    warningTimerRef.current = setTimeout(() => {
      setShowWarning(true);

      const countdownSeconds = Math.ceil(logoutTimeout / 1000);
      setCountdown(countdownSeconds);

      // Start countdown
      countdownTimerRef.current = setInterval(() => {
        setCountdown((prev) => {
          if (prev <= 1) {
            clearInterval(countdownTimerRef.current!);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);

      // Set logout timer
      logoutTimerRef.current = setTimeout(() => {
        onLogoutRef.current();
      }, logoutTimeout);
    }, warningTimeout);
  }, [warningTimeout, logoutTimeout, clearAllTimers]);

  const handleStayActive = useCallback(() => {
    console.log("✅ Stay active clicked");
    resetTimers();
  }, [resetTimers]);

  const handleActivity = useCallback(() => {
    resetTimers();
  }, [resetTimers]);

  useEffect(() => {
    const events = [
      "mousedown",
      "mousemove",
      "keypress",
      "scroll",
      "touchstart",
      "click",
    ];

    events.forEach((event) => {
      document.addEventListener(event, handleActivity, { passive: true });
    });

    resetTimers();

    return () => {
      console.log("🧹 Cleanup");
      events.forEach((event) => {
        document.removeEventListener(event, handleActivity);
      });
      clearAllTimers();
    };
  }, []);

  useEffect(() => {
    onLogoutRef.current = onLogout;
  }, [onLogout]);

  return {
    showWarning,
    countdown,
    handleStayActive,
  };
};
