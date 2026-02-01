'use client';

import React, { useEffect, useState } from 'react';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Loading animation timer
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Loading Screen */}
      <div className={`loading-screen ${!isLoading ? 'hidden' : ''}`} id="loadingScreen">
        <div id="container">
          <div className="netflixintro" data-letter="G">
            <div className="helper-1">
              <div className="effect-brush">
                {Array.from({ length: 31 }, (_, i) => (
                  <span key={i} className={`fur-${31 - i}`}></span>
                ))}
              </div>
              <div className="effect-lumieres">
                {Array.from({ length: 28 }, (_, i) => (
                  <span key={i} className={`lamp-${i + 1}`}></span>
                ))}
              </div>
            </div>
            <div className="helper-2">
              <div className="effect-brush">
                {Array.from({ length: 31 }, (_, i) => (
                  <span key={i} className={`fur-${31 - i}`}></span>
                ))}
                {/* Additional Colored Fur Effects */}
                {Array.from({ length: 31 }, (_, i) => (
                  <span key={`blue-${i}`} className={`fur-blue-${31 - i}`}></span>
                ))}
                {Array.from({ length: 31 }, (_, i) => (
                  <span key={`yellow-${i}`} className={`fur-yellow-${31 - i}`}></span>
                ))}
                {Array.from({ length: 31 }, (_, i) => (
                  <span key={`purple-${i}`} className={`fur-purple-${31 - i}`}></span>
                ))}
                {Array.from({ length: 31 }, (_, i) => (
                  <span key={`green-${i}`} className={`fur-green-${31 - i}`}></span>
                ))}
              </div>
            </div>
            <div className="helper-3">
              <div className="effect-brush">
                {Array.from({ length: 31 }, (_, i) => (
                  <span key={i} className={`fur-${31 - i}`}></span>
                ))}
              </div>
            </div>
            <div className="helper-4">
              <div className="effect-brush">
                {Array.from({ length: 31 }, (_, i) => (
                  <span key={i} className={`fur-${31 - i}`}></span>
                ))}
              </div>
            </div>
            <div className="helper-5">
              <div className="effect-brush">
                {Array.from({ length: 31 }, (_, i) => (
                  <span key={i} className={`fur-${31 - i}`}></span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Who's Watching Page */}
      <div className={`whos-watching ${!isLoading ? 'active' : ''}`}>
        <h1>Who&apos;s watching?</h1>
        <div className="profiles-container">
          <div className="profile" onClick={() => window.location.href = '/employers'}>
            <div className="profile-avatar">
              <img src="/images/profiles/employers.png" alt="Employers" onError={() => {}} />
              <div className="emoji-fallback">💼</div>
            </div>
            <div className="profile-name">Employers</div>
          </div>
          <div className="profile" onClick={() => window.location.href = '/fans'}>
            <div className="profile-avatar">
              <img src="/images/profiles/fans.png" alt="Fans" onError={() => {}} />
              <div className="emoji-fallback">🎭</div>
            </div>
            <div className="profile-name">Fans</div>
          </div>
          <div className="profile" onClick={() => window.location.href = '/suitors'}>
            <div className="profile-avatar">
              <img src="/images/profiles/suitors.png" alt="Suitors" onError={() => {}} />
              <div className="emoji-fallback">💕</div>
            </div>
            <div className="profile-name">Suitors</div>
          </div>
          <div className="profile" onClick={() => window.location.href = '/curious'}>
            <div className="profile-avatar">
              <img src="/images/profiles/curious.png" alt="Curious" onError={() => {}} />
              <div className="emoji-fallback">🕵️</div>
            </div>
            <div className="profile-name">Stalkers</div>
          </div>
          <div className="profile" onClick={() => window.location.href = '/techies'}>
            <div className="profile-avatar">
              <img src="/images/profiles/engineers.png" alt="Techies" onError={() => {}} />
              <div className="emoji-fallback">⚡</div>
          </div>
            <div className="profile-name">Techies</div>
          </div>
        </div>
    </div>
    </>
  );
}
