import React from 'react'

export default function Footer() {
  return (
    <footer style={{
      background: 'linear-gradient(135deg, #1f2937 0%, #111827 100%)',
      color: 'white',
      marginTop: '60px'
    }}>
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        padding: '48px 32px 32px'
      }}>
        {/* Main Footer Content */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '40px',
          marginBottom: '40px'
        }}>
          {/* Company Info */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
              <div style={{
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                padding: '8px 12px',
                borderRadius: '8px',
                fontSize: '24px'
              }}>
                📊
              </div>
              <h3 style={{
                margin: 0,
                fontSize: '20px',
                fontWeight: '700'
              }}>
                Retail Sales
              </h3>
            </div>
            <p style={{
              margin: 0,
              fontSize: '14px',
              color: '#9ca3af',
              lineHeight: '1.6'
            }}>
              Advanced analytics and insights for retail businesses. Track your sales performance with real-time data visualization.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{
              margin: '0 0 16px 0',
              fontSize: '16px',
              fontWeight: '600',
              color: 'white'
            }}>
              Quick Links
            </h4>
            <ul style={{
              listStyle: 'none',
              padding: 0,
              margin: 0
            }}>
              {['Dashboard', 'Analytics', 'Reports', 'Settings'].map((link) => (
                <li key={link} style={{ marginBottom: '12px' }}>
                  <a href={`#${link.toLowerCase()}`} style={{
                    color: '#9ca3af',
                    textDecoration: 'none',
                    fontSize: '14px',
                    transition: 'color 0.2s'
                  }}
                  onMouseOver={(e) => e.target.style.color = '#667eea'}
                  onMouseOut={(e) => e.target.style.color = '#9ca3af'}>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 style={{
              margin: '0 0 16px 0',
              fontSize: '16px',
              fontWeight: '600',
              color: 'white'
            }}>
              Resources
            </h4>
            <ul style={{
              listStyle: 'none',
              padding: 0,
              margin: 0
            }}>
              {['Documentation', 'API Reference', 'Support', 'FAQ'].map((link) => (
                <li key={link} style={{ marginBottom: '12px' }}>
                  <a href={`#${link.toLowerCase().replace(' ', '-')}`} style={{
                    color: '#9ca3af',
                    textDecoration: 'none',
                    fontSize: '14px',
                    transition: 'color 0.2s'
                  }}
                  onMouseOver={(e) => e.target.style.color = '#667eea'}
                  onMouseOut={(e) => e.target.style.color = '#9ca3af'}>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 style={{
              margin: '0 0 16px 0',
              fontSize: '16px',
              fontWeight: '600',
              color: 'white'
            }}>
              Contact Us
            </h4>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '12px'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{ fontSize: '18px' }}>📧</span>
                <span style={{ fontSize: '14px', color: '#9ca3af' }}>support@retailsales.com</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{ fontSize: '18px' }}>📞</span>
                <span style={{ fontSize: '14px', color: '#9ca3af' }}>+91 1800-123-4567</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{ fontSize: '18px' }}>📍</span>
                <span style={{ fontSize: '14px', color: '#9ca3af' }}>Mumbai, India</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{
          borderTop: '1px solid #374151',
          paddingTop: '24px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '16px'
        }}>
          <p style={{
            margin: 0,
            fontSize: '14px',
            color: '#9ca3af'
          }}>
            © 2024 Retail Sales Dashboard. All rights reserved.
          </p>
          <div style={{ display: 'flex', gap: '24px' }}>
            <a href="#privacy" style={{
              color: '#9ca3af',
              textDecoration: 'none',
              fontSize: '14px',
              transition: 'color 0.2s'
            }}
            onMouseOver={(e) => e.target.style.color = '#667eea'}
            onMouseOut={(e) => e.target.style.color = '#9ca3af'}>
              Privacy Policy
            </a>
            <a href="#terms" style={{
              color: '#9ca3af',
              textDecoration: 'none',
              fontSize: '14px',
              transition: 'color 0.2s'
            }}
            onMouseOver={(e) => e.target.style.color = '#667eea'}
            onMouseOut={(e) => e.target.style.color = '#9ca3af'}>
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}