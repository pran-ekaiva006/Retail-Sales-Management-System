import React from 'react'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer style={{
      background: '#0f1729',
      color: 'white',
      marginTop: '60px',
      padding: '60px 32px 32px',
      borderTop: '1px solid rgba(255,255,255,0.1)',
      position: 'relative'
    }}>
      {/* Decorative top gradient line */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '3px',
        background: 'linear-gradient(90deg, #3b82f6 0%, #8b5cf6 50%, #ec4899 100%)'
      }} />

      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
      }}>
        {/* Main Content */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '48px',
          marginBottom: '48px'
        }}>
          {/* Brand Section */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
              <div style={{
                background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
                padding: '12px 16px',
                borderRadius: '12px',
                fontSize: '28px',
                boxShadow: '0 8px 24px rgba(59, 130, 246, 0.3)'
              }}>
                📊
              </div>
              <h3 style={{
                margin: 0,
                fontSize: '22px',
                fontWeight: '800',
                letterSpacing: '-0.5px',
                color: 'white'
              }}>
                Retail Sales Dashboard
              </h3>
            </div>
            <p style={{
              margin: 0,
              fontSize: '14px',
              color: 'rgba(255,255,255,0.6)',
              lineHeight: '1.8'
            }}>
              Advanced analytics platform for retail businesses. Real-time insights, powerful filtering, and beautiful data visualization.
            </p>
          </div>

          {/* Tech Stack */}
          <div>
            <h4 style={{
              margin: '0 0 20px 0',
              fontSize: '14px',
              fontWeight: '700',
              color: 'white',
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
              gap: '8px'
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
                  fontSize: '12px',
                  fontWeight: '600',
                  backdropFilter: 'blur(10px)',
                  border: `1px solid ${tech.color}30`,
                  color: 'rgba(255,255,255,0.8)',
                  transition: 'all 0.2s',
                  cursor: 'pointer'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.background = `${tech.color}20`
                  e.currentTarget.style.borderColor = tech.color
                  e.currentTarget.style.transform = 'translateY(-2px)'
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.05)'
                  e.currentTarget.style.borderColor = `${tech.color}30`
                  e.currentTarget.style.transform = 'translateY(0)'
                }}>
                  {tech.name}
                </span>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{
              margin: '0 0 20px 0',
              fontSize: '14px',
              fontWeight: '700',
              color: 'white',
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
              gap: '12px'
            }}>
              {[
                { icon: '📈', label: 'Dashboard', href: '#dashboard' },
                { icon: '📊', label: 'Analytics', href: '#analytics' },
                { icon: '📄', label: 'Reports', href: '#reports' },
                { icon: '⚙️', label: 'Settings', href: '#settings' }
              ].map((link) => (
                <a key={link.label} href={link.href} style={{
                  color: 'rgba(255,255,255,0.6)',
                  textDecoration: 'none',
                  fontSize: '14px',
                  transition: 'all 0.2s',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  padding: '6px 0'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.color = 'white'
                  e.currentTarget.style.transform = 'translateX(4px)'
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.color = 'rgba(255,255,255,0.6)'
                  e.currentTarget.style.transform = 'translateX(0)'
                }}>
                  <span style={{ fontSize: '18px' }}>{link.icon}</span>
                  <span style={{ fontWeight: '500' }}>{link.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div style={{
          height: '1px',
          background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.1) 50%, transparent 100%)',
          margin: '40px 0'
        }} />

        {/* Bottom Section */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '24px'
        }}>
          {/* Developer Info */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '16px'
          }}>
            <div style={{
              background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
              padding: '14px',
              borderRadius: '12px',
              fontSize: '24px',
              boxShadow: '0 8px 24px rgba(59, 130, 246, 0.3)',
              border: '2px solid rgba(255,255,255,0.1)'
            }}>
              👨‍💻
            </div>
            <div>
              <p style={{
                margin: '0 0 4px 0',
                fontSize: '12px',
                color: 'rgba(255,255,255,0.5)',
                fontWeight: '600',
                textTransform: 'uppercase',
                letterSpacing: '0.5px'
              }}>
                Designed & Developed by
              </p>
              <p style={{
                margin: 0,
                fontSize: '18px',
                fontWeight: '700',
                color: 'white',
                letterSpacing: '0.5px'
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
            <p style={{
              margin: 0,
              fontSize: '14px',
              color: 'rgba(255,255,255,0.5)',
              fontWeight: '500'
            }}>
              © {currentYear} All rights reserved
            </p>
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
                    width: '40px',
                    height: '40px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'rgba(255,255,255,0.05)',
                    borderRadius: '10px',
                    fontSize: '20px',
                    transition: 'all 0.3s',
                    border: '1px solid rgba(255,255,255,0.1)',
                    textDecoration: 'none'
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.background = 'rgba(59, 130, 246, 0.2)'
                    e.currentTarget.style.borderColor = '#3b82f6'
                    e.currentTarget.style.transform = 'translateY(-4px) scale(1.1)'
                    e.currentTarget.style.boxShadow = '0 8px 16px rgba(59, 130, 246, 0.3)'
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
          </div>
        </div>

        {/* Signature Badge */}
        <div style={{
          marginTop: '32px',
          textAlign: 'center'
        }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '10px',
            background: 'rgba(255,255,255,0.03)',
            padding: '12px 24px',
            borderRadius: '30px',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255,255,255,0.1)'
          }}>
            <span style={{ fontSize: '18px', animation: 'pulse 2s infinite' }}>❤️</span>
            <span style={{
              fontSize: '13px',
              color: 'rgba(255,255,255,0.7)',
              fontWeight: '600',
              letterSpacing: '0.5px'
            }}>
              Made with passion by Pranjal Kumar Verma
            </span>
            <span style={{ fontSize: '18px' }}>✨</span>
          </div>
        </div>
      </div>
    </footer>
  )
}