import React from 'react'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer style={{
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      color: 'white',
      marginTop: '60px',
      padding: '40px 32px',
      borderTop: '4px solid rgba(255,255,255,0.1)'
    }}>
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
      }}>
        {/* Main Content */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '40px',
          marginBottom: '40px'
        }}>
          {/* Brand Section */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
              <div style={{
                background: 'white',
                padding: '10px 14px',
                borderRadius: '10px',
                fontSize: '28px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
              }}>
                📊
              </div>
              <h3 style={{
                margin: 0,
                fontSize: '22px',
                fontWeight: '700',
                letterSpacing: '-0.5px'
              }}>
                Retail Sales Dashboard
              </h3>
            </div>
            <p style={{
              margin: 0,
              fontSize: '15px',
              color: 'rgba(255,255,255,0.9)',
              lineHeight: '1.7'
            }}>
              Advanced analytics platform for retail businesses. Real-time insights, powerful filtering, and beautiful data visualization.
            </p>
          </div>

          {/* Tech Stack */}
          <div>
            <h4 style={{
              margin: '0 0 16px 0',
              fontSize: '16px',
              fontWeight: '600',
              color: 'white',
              letterSpacing: '0.5px'
            }}>
              🛠️ Built With
            </h4>
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '8px'
            }}>
              {['React', 'Node.js', 'SQLite', 'Express', 'Vite', 'Zustand'].map((tech) => (
                <span key={tech} style={{
                  background: 'rgba(255,255,255,0.15)',
                  padding: '6px 14px',
                  borderRadius: '20px',
                  fontSize: '13px',
                  fontWeight: '500',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255,255,255,0.2)'
                }}>
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{
              margin: '0 0 16px 0',
              fontSize: '16px',
              fontWeight: '600',
              color: 'white',
              letterSpacing: '0.5px'
            }}>
              🔗 Quick Links
            </h4>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '10px'
            }}>
              {[
                { icon: '📈', label: 'Dashboard', href: '#dashboard' },
                { icon: '📊', label: 'Analytics', href: '#analytics' },
                { icon: '📄', label: 'Reports', href: '#reports' },
                { icon: '⚙️', label: 'Settings', href: '#settings' }
              ].map((link) => (
                <a key={link.label} href={link.href} style={{
                  color: 'rgba(255,255,255,0.9)',
                  textDecoration: 'none',
                  fontSize: '14px',
                  transition: 'all 0.2s',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}
                onMouseOver={(e) => {
                  e.target.style.color = 'white'
                  e.target.style.transform = 'translateX(4px)'
                }}
                onMouseOut={(e) => {
                  e.target.style.color = 'rgba(255,255,255,0.9)'
                  e.target.style.transform = 'translateX(0)'
                }}>
                  <span>{link.icon}</span>
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div style={{
          height: '1px',
          background: 'rgba(255,255,255,0.2)',
          margin: '32px 0'
        }} />

        {/* Bottom Section - Made By */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '20px'
        }}>
          {/* Made By Section */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '16px'
          }}>
            <div style={{
              background: 'rgba(255,255,255,0.15)',
              padding: '12px',
              borderRadius: '12px',
              backdropFilter: 'blur(10px)',
              border: '2px solid rgba(255,255,255,0.2)'
            }}>
              <span style={{ fontSize: '24px' }}>👨‍💻</span>
            </div>
            <div>
              <p style={{
                margin: '0 0 4px 0',
                fontSize: '13px',
                color: 'rgba(255,255,255,0.8)',
                fontWeight: '500'
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

          {/* Copyright & Links */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '24px',
            flexWrap: 'wrap'
          }}>
            <p style={{
              margin: 0,
              fontSize: '14px',
              color: 'rgba(255,255,255,0.8)'
            }}>
              © {currentYear} All rights reserved
            </p>
            <div style={{
              display: 'flex',
              gap: '16px'
            }}>
              <a href="https://github.com/pran-ekaiva006" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{
                  color: 'rgba(255,255,255,0.9)',
                  textDecoration: 'none',
                  fontSize: '24px',
                  transition: 'all 0.2s',
                  display: 'flex',
                  alignItems: 'center'
                }}
                onMouseOver={(e) => {
                  e.target.style.transform = 'scale(1.2)'
                  e.target.style.filter = 'brightness(1.2)'
                }}
                onMouseOut={(e) => {
                  e.target.style.transform = 'scale(1)'
                  e.target.style.filter = 'brightness(1)'
                }}>
                💻
              </a>
              <a href="https://www.linkedin.com/in/pranjal-verma-74954325a/" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{
                  color: 'rgba(255,255,255,0.9)',
                  textDecoration: 'none',
                  fontSize: '24px',
                  transition: 'all 0.2s',
                  display: 'flex',
                  alignItems: 'center'
                }}
                onMouseOver={(e) => {
                  e.target.style.transform = 'scale(1.2)'
                  e.target.style.filter = 'brightness(1.2)'
                }}
                onMouseOut={(e) => {
                  e.target.style.transform = 'scale(1)'
                  e.target.style.filter = 'brightness(1)'
                }}>
                💼
              </a>
              <a href="mailto:pranjalverma975@gmail.com"
                style={{
                  color: 'rgba(255,255,255,0.9)',
                  textDecoration: 'none',
                  fontSize: '24px',
                  transition: 'all 0.2s',
                  display: 'flex',
                  alignItems: 'center'
                }}
                onMouseOver={(e) => {
                  e.target.style.transform = 'scale(1.2)'
                  e.target.style.filter = 'brightness(1.2)'
                }}
                onMouseOut={(e) => {
                  e.target.style.transform = 'scale(1)'
                  e.target.style.filter = 'brightness(1)'
                }}>
                📧
              </a>
            </div>
          </div>
        </div>

        {/* Signature Badge */}
        <div style={{
          marginTop: '24px',
          textAlign: 'center'
        }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            background: 'rgba(255,255,255,0.1)',
            padding: '10px 20px',
            borderRadius: '30px',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255,255,255,0.2)'
          }}>
            <span style={{ fontSize: '16px' }}>❤️</span>
            <span style={{
              fontSize: '13px',
              color: 'rgba(255,255,255,0.95)',
              fontWeight: '500'
            }}>
              Made with passion by Pranjal Kumar Verma
            </span>
            <span style={{ fontSize: '16px' }}>✨</span>
          </div>
        </div>
      </div>
    </footer>
  )
}