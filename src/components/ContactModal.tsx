'use client';

import React, { useState } from 'react';
import Image from 'next/image';

interface ContactOption {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  link: string;
  color: string;
}

interface ContactModalProps {
  contactOptions: ContactOption[];
}

export default function ContactModal({ contactOptions }: ContactModalProps) {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleOptionClick = (option: ContactOption) => {
    if (option.link.startsWith('mailto:') || option.link.startsWith('https://')) {
      window.open(option.link, '_blank');
    } else {
      // For Calendly or other embedded options
      setSelectedOption(option.id);
    }
  };

  return (
    <div className="contact-modal">
      <h2 className="contact-modal-title">Get In Touch</h2>
      <p className="contact-modal-subtitle">Choose your preferred way to connect</p>
      
      <div className="contact-options">
        {contactOptions.map((option) => (
          <div
            key={option.id}
            className="contact-card"
            onClick={() => handleOptionClick(option)}
            style={{ '--accent-color': option.color } as React.CSSProperties}
          >
            <div className="contact-card-icon">
              <Image
                src={option.icon}
                alt={`${option.title} icon`}
                width={48}
                height={48}
                className="icon"
              />
            </div>
            <div className="contact-card-content">
              <h3 className="contact-card-title">{option.title}</h3>
              <p className="contact-card-subtitle">{option.subtitle}</p>
              <p className="contact-card-description">{option.description}</p>
            </div>
            <div className="contact-card-arrow">→</div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .contact-modal {
          background: linear-gradient(135deg, #141414 0%, #1f1f1f 100%);
          border-radius: 16px;
          padding: 2.5rem;
          margin: 2rem 0;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.4);
        }

        .contact-modal-title {
          color: white;
          font-size: 2.5rem;
          font-weight: bold;
          text-align: center;
          margin-bottom: 0.5rem;
        }

        .contact-modal-subtitle {
          color: #b3b3b3;
          font-size: 1.1rem;
          text-align: center;
          margin-bottom: 2.5rem;
        }

        .contact-options {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 1.5rem;
          max-width: 900px;
          margin: 0 auto;
        }

        .contact-card {
          background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
          border: 2px solid transparent;
          border-radius: 12px;
          padding: 1.5rem;
          display: flex;
          align-items: center;
          gap: 1.5rem;
          cursor: pointer;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .contact-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, var(--accent-color, #e50914) 0%, transparent 100%);
          opacity: 0;
          transition: opacity 0.3s ease;
          z-index: 0;
        }

        .contact-card:hover {
          transform: translateY(-4px);
          border-color: var(--accent-color, #e50914);
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.3);
        }

        .contact-card:hover::before {
          opacity: 0.1;
        }

        .contact-card-icon {
          background: var(--accent-color, #e50914);
          border-radius: 12px;
          padding: 1rem;
          display: flex;
          align-items: center;
          justify-content: center;
          min-width: 70px;
          height: 70px;
          position: relative;
          z-index: 1;
        }

        .icon {
          filter: brightness(0) invert(1);
        }

        .contact-card-content {
          flex: 1;
          position: relative;
          z-index: 1;
        }

        .contact-card-title {
          color: white;
          font-size: 1.3rem;
          font-weight: bold;
          margin-bottom: 0.3rem;
        }

        .contact-card-subtitle {
          color: var(--accent-color, #e50914);
          font-size: 0.9rem;
          font-weight: 500;
          margin-bottom: 0.5rem;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .contact-card-description {
          color: #b3b3b3;
          font-size: 0.95rem;
          line-height: 1.4;
        }

        .contact-card-arrow {
          color: var(--accent-color, #e50914);
          font-size: 1.5rem;
          font-weight: bold;
          transition: transform 0.3s ease;
          position: relative;
          z-index: 1;
        }

        .contact-card:hover .contact-card-arrow {
          transform: translateX(5px);
        }

        @media (max-width: 768px) {
          .contact-modal {
            padding: 2rem;
          }
          
          .contact-modal-title {
            font-size: 2rem;
          }
          
          .contact-options {
            grid-template-columns: 1fr;
            gap: 1rem;
          }
          
          .contact-card {
            padding: 1.2rem;
            gap: 1rem;
          }
          
          .contact-card-icon {
            min-width: 60px;
            height: 60px;
            padding: 0.8rem;
          }
          
          .contact-card-title {
            font-size: 1.1rem;
          }
        }
      `}</style>
    </div>
  );
}
