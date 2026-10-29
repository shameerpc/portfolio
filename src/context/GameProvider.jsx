import { useState, useEffect, useCallback, useMemo } from 'react';
import { GameContext, ACHIEVEMENTS_LIST } from './context';
import { cyberAudio } from '../utils/cyberAudio';
import { trackEvent } from '../utils/analytics';

export function GameProvider({ children }) {
  // 1. Player Class
  const [playerClass, setPlayerClassState] = useState(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('player_class');
      if (stored === 'developer' || stored === 'creative' || stored === 'full_package') {
        return stored;
      }
    }
    return 'full_package';
  });

  const setPlayerClass = useCallback((cls) => {
    if (cls === 'developer' || cls === 'creative' || cls === 'full_package') {
      setPlayerClassState(cls);
      if (typeof window !== 'undefined') {
        localStorage.setItem('player_class', cls);
        trackEvent('player_class_changed', { class: cls });
      }
      cyberAudio.playSoftClick?.();
    }
  }, []);

  // 2. Achievements
  const [unlockedAchievements, setUnlockedAchievements] = useState(() => {
    if (typeof window !== 'undefined') {
      try {
        const stored = localStorage.getItem('spc_achievements');
        return stored ? JSON.parse(stored) : [];
      } catch {
        return [];
      }
    }
    return [];
  });

  const [achievementsEnabled, setAchievementsEnabled] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('spc_achievements_enabled') !== 'false';
    }
    return true;
  });

  const [toasts, setToasts] = useState([]); // [{ id, icon, title, desc, timestamp }]

  const toggleAchievementsEnabled = useCallback(() => {
    setAchievementsEnabled((prev) => {
      const next = !prev;
      if (typeof window !== 'undefined') {
        localStorage.setItem('spc_achievements_enabled', String(next));
      }
      return next;
    });
  }, []);

  const unlockAchievement = useCallback(
    (achievementId) => {
      const found = ACHIEVEMENTS_LIST.find((a) => a.id === achievementId);
      if (!found) return;

      setUnlockedAchievements((prev) => {
        if (prev.includes(achievementId)) return prev;
        const next = [...prev, achievementId];
        if (typeof window !== 'undefined') {
          localStorage.setItem('spc_achievements', JSON.stringify(next));
          trackEvent('achievement_unlocked', { id: achievementId });
        }

        cyberAudio.playLevelUp?.();

        if (achievementsEnabled) {
          const toastId = `${achievementId}-${Date.now()}`;
          setToasts((t) => [
            ...t,
            { id: toastId, icon: found.icon, title: found.title, desc: found.desc },
          ]);

          // Auto dismiss after 3.5s
          setTimeout(() => {
            setToasts((curr) => curr.filter((item) => item.id !== toastId));
          }, 3500);
        }

        return next;
      });
    },
    [achievementsEnabled]
  );

  const dismissToast = useCallback((toastId) => {
    setToasts((curr) => curr.filter((item) => item.id !== toastId));
  }, []);

  // 3. Hidden Coins
  const [collectedCoins, setCollectedCoins] = useState(() => {
    if (typeof window !== 'undefined') {
      try {
        const stored = localStorage.getItem('spc_coins');
        return stored ? JSON.parse(stored) : [];
      } catch {
        return [];
      }
    }
    return [];
  });

  const [secretModalOpen, setSecretModalOpen] = useState(false);
  const [confettiActive, setConfettiActive] = useState(false);

  const collectCoin = useCallback(
    (coinId) => {
      setCollectedCoins((prev) => {
        if (prev.includes(coinId)) return prev;
        const next = [...prev, coinId];
        if (typeof window !== 'undefined') {
          localStorage.setItem('spc_coins', JSON.stringify(next));
        }

        cyberAudio.playCoin?.();

        if (next.length === 3) {
          unlockAchievement('secret_agent');
          setSecretModalOpen(true);
          setConfettiActive(true);
          setTimeout(() => setConfettiActive(false), 5000);
        } else if (achievementsEnabled) {
          const toastId = `coin-${Date.now()}`;
          setToasts((t) => [
            ...t,
            {
              id: toastId,
              icon: '🪙',
              title: 'Gold Coin Collected!',
              desc: `Found ${next.length} of 3 hidden coins.`,
            },
          ]);
          setTimeout(() => {
            setToasts((curr) => curr.filter((item) => item.id !== toastId));
          }, 3000);
        }

        return next;
      });
    },
    [achievementsEnabled, unlockAchievement]
  );

  // 4. Retro CRT Mode
  const [retroMode, setRetroModeState] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('spc_retro_mode') === 'true';
    }
    return false;
  });

  const toggleRetroMode = useCallback(() => {
    setRetroModeState((prev) => {
      const next = !prev;
      if (typeof window !== 'undefined') {
        localStorage.setItem('spc_retro_mode', String(next));
      }
      cyberAudio.playSoftClick?.();
      return next;
    });
  }, []);

  // Global custom event listeners
  useEffect(() => {
    const handleAchievementEvent = (e) => {
      if (e.detail?.id) {
        unlockAchievement(e.detail.id);
      }
    };

    const handleCoinEvent = (e) => {
      if (e.detail?.id) {
        collectCoin(e.detail.id);
      }
    };

    window.addEventListener('spc_achievement_trigger', handleAchievementEvent);
    window.addEventListener('spc_coin_collect', handleCoinEvent);

    return () => {
      window.removeEventListener('spc_achievement_trigger', handleAchievementEvent);
      window.removeEventListener('spc_coin_collect', handleCoinEvent);
    };
  }, [unlockAchievement, collectCoin]);

  const value = useMemo(
    () => ({
      playerClass,
      setPlayerClass,
      unlockedAchievements,
      unlockAchievement,
      achievementsEnabled,
      toggleAchievementsEnabled,
      toasts,
      dismissToast,
      collectedCoins,
      collectCoin,
      secretModalOpen,
      setSecretModalOpen,
      confettiActive,
      setConfettiActive,
      retroMode,
      toggleRetroMode,
    }),
    [
      playerClass,
      setPlayerClass,
      unlockedAchievements,
      unlockAchievement,
      achievementsEnabled,
      toggleAchievementsEnabled,
      toasts,
      dismissToast,
      collectedCoins,
      collectCoin,
      secretModalOpen,
      confettiActive,
      retroMode,
      toggleRetroMode,
    ]
  );

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
}

export default GameProvider;
