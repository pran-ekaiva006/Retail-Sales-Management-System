import React from 'react'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer style={{
      background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)',
      color: 'white',
      marginTop: '0',
      padding: '48px 32px 32px',
      borderTop: '1px solid rgba(148, 163, 184, 0.1)',
      position: 'relative'
    }}>
      {/* Decorative top gradient line */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '2px',
        background: 'linear-gradient(90deg, transparent 0%, #3b82f6 25%, #8b5cf6 50%, #ec4899 75%, transparent 100%)',
        opacity: 0.6
      }} />

      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
      }}>
        {/* Main Content - Simplified Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '48px',
          marginBottom: '40px'
        }}>
          {/* Brand Section */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '20px' }}>
              <div style={{
                background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
                padding: '12px 14px',
                borderRadius: '14px',
                fontSize: '32px',
                boxShadow: '0 8px 24px rgba(59, 130, 246, 0.35)',
                border: '2px solid rgba(255, 255, 255, 0.15)'
              }}>
                📊
              </div>
              <div>
                <h3 style={{
                  margin: 0,
                  fontSize: '22px',
                  fontWeight: '800',
                  letterSpacing: '-0.5px',
                  color: '#f1f5f9',
                  lineHeight: '1.2'
                }}>
                  Retail Sales Dashboard
                </h3>
                <p style={{
                  margin: '4px 0 0 0',
                  fontSize: '13px',
                  color: '#94a3b8',
                  fontWeight: '500'
                }}>
                  Advanced Analytics Platform
                </p>
              </div>
            </div>
            <p style={{
              margin: 0,
              fontSize: '14px',
              color: 'rgba(255,255,255,0.6)',
              lineHeight: '1.8',
              maxWidth: '400px'
            }}>
              Real-time insights, powerful filtering, and beautiful data visualization for retail businesses.
            </p>
          </div>

          {/* Tech Stack - Condensed */}
          <div>
            <h4 style={{
              margin: '0 0 20px 0',
              fontSize: '15px',
              fontWeight: '700',
              color: '#f1f5f9',
              letterSpacing: '0.5px',
              textTransform: 'uppercase',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}>
              🛠️ Built With
            </h4>
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '10px'
            }}>
              {[
                { name: 'React', color: '#3b82f6' },
                { name: 'Node.js', color: '#10b981' },
                { name: 'SQLite', color: '#8b5cf6' },
                { name: 'Express', color: '#f59e0b' },
                { name: 'Vite', color: '#ec4899' },
                { name: 'Zustand', color: '#06b6d4' }
              ].map((tech) => (
                <span key={tech.name} style={{
                  background: 'rgba(255,255,255,0.05)',
                  padding: '8px 16px',
                  borderRadius: '8px',
                  fontSize: '13px',
                  fontWeight: '600',
                  backdropFilter: 'blur(10px)',
                  border: `1.5px solid ${tech.color}40`,
                  color: 'rgba(255,255,255,0.85)',
                  transition: 'all 0.2s',
                  cursor: 'pointer'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.background = `${tech.color}20`
                  e.currentTarget.style.borderColor = tech.color
                  e.currentTarget.style.color = 'white'
                  e.currentTarget.style.transform = 'translateY(-2px)'
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.05)'
                  e.currentTarget.style.borderColor = `${tech.color}40`
                  e.currentTarget.style.color = 'rgba(255,255,255,0.85)'
                  e.currentTarget.style.transform = 'translateY(0)'
                }}>
                  {tech.name}
                </span>
              ))}
            </div>
          </div>

          {/* Quick Links - Simplified */}
          <div>
            <h4 style={{
              margin: '0 0 20px 0',
              fontSize: '15px',
              fontWeight: '700',
              color: '#f1f5f9',
              letterSpacing: '0.5px',
              textTransform: 'uppercase',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}>
              🔗 Quick Links
            </h4>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '14px'
            }}>
              {[
                { icon: '📈', label: 'Dashboard', href: '#dashboard' },
                { icon: '📊', label: 'Analytics', href: '#analytics' },
                { icon: '📄', label: 'Reports', href: '#reports' }
              ].map((link) => (
                <a key={link.label} href={link.href} style={{
                  color: 'rgba(255,255,255,0.6)',
                  textDecoration: 'none',
                  fontSize: '15px',
                  transition: 'all 0.2s',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  fontWeight: '500'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.color = '#3b82f6'
                  e.currentTarget.style.transform = 'translateX(4px)'
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.color = 'rgba(255,255,255,0.6)'
                  e.currentTarget.style.transform = 'translateX(0)'
                }}>
                  <span style={{ fontSize: '20px' }}>{link.icon}</span>
                  <span>{link.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div style={{
          height: '1px',
          background: 'linear-gradient(90deg, transparent 0%, rgba(148, 163, 184, 0.2) 50%, transparent 100%)',
          margin: '40px 0 32px 0'
        }} />

        {/* Bottom Section - Redesigned */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '24px'
        }}>
          {/* Developer Info - Compact */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '16px'
          }}>
            <div style={{
              background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
              padding: '12px',
              borderRadius: '12px',
              fontSize: '28px',
              boxShadow: '0 6px 20px rgba(59, 130, 246, 0.3)',
              border: '2px solid rgba(255,255,255,0.15)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              👨‍💻
            </div>
            <div>
              <p style={{
                margin: '0 0 4px 0',
                fontSize: '11px',
                color: 'rgba(255,255,255,0.5)',
                fontWeight: '600',
                textTransform: 'uppercase',
                letterSpacing: '0.8px'
              }}>
                Designed & Developed by
              </p>
              <p style={{
                margin: 0,
                fontSize: '18px',
                fontWeight: '700',
                color: '#f1f5f9',
                letterSpacing: '0.3px'
              }}>
                Pranjal Kumar Verma
              </p>
            </div>
          </div>

          {/* Social Links & Copyright */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '24px',
            flexWrap: 'wrap'
          }}>
            {/* Social Icons */}
            <div style={{
              display: 'flex',
              gap: '12px'
            }}>
              {[
                { icon: '💻', href: 'https://github.com/pran-ekaiva006', label: 'GitHub' },
                { icon: '💼', href: 'https://www.linkedin.com/in/pranjal-verma-74954325a/', label: 'LinkedIn' },
                { icon: '📧', href: 'mailto:pranjalverma975@gmail.com', label: 'Email' }
              ].map((social) => (
                <a key={social.label}
                  href={social.href} 
                  target={social.label !== 'Email' ? '_blank' : undefined}
                  rel={social.label !== 'Email' ? 'noopener noreferrer' : undefined}
                  title={social.label}
                  style={{
                    width: '44px',
                    height: '44px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'rgba(255,255,255,0.05)',
                    borderRadius: '12px',
                    fontSize: '22px',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    border: '1.5px solid rgba(255,255,255,0.1)',
                    textDecoration: 'none'
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.background = 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)'
                    e.currentTarget.style.borderColor = 'transparent'
                    e.currentTarget.style.transform = 'translateY(-4px) scale(1.05)'
                    e.currentTarget.style.boxShadow = '0 8px 20px rgba(59, 130, 246, 0.4)'
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.05)'
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'
                    e.currentTarget.style.transform = 'translateY(0) scale(1)'
                    e.currentTarget.style.boxShadow = 'none'
                  }}>
                  {social.icon}
                </a>
              ))}
            </div>

            {/* Copyright */}
            <p style={{
              margin: 0,
              fontSize: '14px',
              color: 'rgba(255,255,255,0.5)',
              fontWeight: '500'
            }}>
              © {currentYear} All rights reserved
            </p>
          </div>
        </div>

        {/* Love Badge - Centered */}
        <div style={{
          marginTop: '32px',
          textAlign: 'center'
        }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '10px',
            background: 'rgba(255,255,255,0.04)',
            padding: '10px 24px',
            borderRadius: '30px',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255,255,255,0.1)'
          }}>
            <span style={{ 
              fontSize: '18px', 
              animation: 'heartbeat 1.5s infinite'
            }}>
              ❤️
            </span>
            <span style={{
              fontSize: '13px',
              color: 'rgba(255,255,255,0.7)',
              fontWeight: '600',
              letterSpacing: '0.3px'
            }}>
              Made with passion by Pranjal Kumar Verma
            </span>
            <span style={{ fontSize: '18px' }}>✨</span>
          </div>
        </div>
      </div>

      {/* Add animations */}
      <style>{`
        @keyframes heartbeat {
          0%, 100% {
            transform: scale(1);
          }
          15% {
            transform: scale(1.2);
          }
          30% {
            transform: scale(1);
          }
        }
      `}</style>
    </footer>
  )
}