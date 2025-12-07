import React from 'react'
import Navbar from './components/Navbar.jsx'
import StatsCards from './components/StatsCards.jsx'
import SearchBar from './components/SearchBar.jsx'
import Filters from './components/Filters.jsx'
import Sorting from './components/Sorting.jsx'
import SalesTable from './components/SalesTable.jsx'
import Pagination from './components/Pagination.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  const [isMobile, setIsMobile] = React.useState(window.innerWidth <= 768)
  const [showFilters, setShowFilters] = React.useState(false)

  React.useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 768
      setIsMobile(mobile)
      if (!mobile) setShowFilters(false)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Close filters when clicking outside
  React.useEffect(() => {
    if (!showFilters) return
    
    const handleClickOutside = (e) => {
      if (e.target.closest('.filters-sidebar')) return
      if (e.target.closest('.filter-toggle-btn')) return
      setShowFilters(false)
    }
    
    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [showFilters])

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(to bottom, #0f172a 0%, #1e293b 50%, #0f172a 100%)',
      display: 'flex',
      flexDirection: 'column'
    }}>
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main style={{ flex: 1 }}>
        {/* Hero Dashboard Section - Updated Colors */}
        <section id="dashboard" style={{
          background: 'linear-gradient(135deg, #1e293b 0%, #334155 100%)',
          padding: isMobile ? '60px 20px' : '100px 40px',
          position: 'relative',
          overflow: 'hidden'
        }}>
          {/* Animated Background Pattern */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            opacity: 0.03,
            backgroundImage: `
              radial-gradient(circle at 25% 25%, #3b82f6 2px, transparent 2px),
              radial-gradient(circle at 75% 75%, #8b5cf6 2px, transparent 2px)
            `,
            backgroundSize: '50px 50px'
          }} />

          {/* Gradient Orbs */}
          <div style={{
            position: 'absolute',
            top: '-10%',
            right: '-5%',
            width: isMobile ? '400px' : '800px',
            height: isMobile ? '400px' : '800px',
            background: 'radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, transparent 70%)',
            borderRadius: '50%',
            filter: 'blur(60px)',
            pointerEvents: 'none'
          }} />

          <div style={{
            position: 'absolute',
            bottom: '-10%',
            left: '-5%',
            width: isMobile ? '400px' : '800px',
            height: isMobile ? '400px' : '800px',
            background: 'radial-gradient(circle, rgba(139, 92, 246, 0.1) 0%, transparent 70%)',
            borderRadius: '50%',
            filter: 'blur(60px)',
            pointerEvents: 'none'
          }} />

          <div style={{
            maxWidth: '1400px',
            margin: '0 auto',
            position: 'relative',
            zIndex: 1
          }}>
            {/* Hero Content */}
            <div style={{
              textAlign: 'center',
              marginBottom: isMobile ? '32px' : '60px'
            }}>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: isMobile ? '8px' : '12px',
                background: 'rgba(16, 185, 129, 0.15)',
                backdropFilter: 'blur(10px)',
                padding: isMobile ? '6px 12px' : '10px 24px',
                borderRadius: '30px',
                border: '1px solid rgba(16, 185, 129, 0.3)',
                marginBottom: isMobile ? '12px' : '24px'
              }}>
                <div style={{
                  width: isMobile ? '6px' : '8px',
                  height: isMobile ? '6px' : '8px',
                  background: '#10b981',
                  borderRadius: '50%',
                  boxShadow: '0 0 12px #10b981',
                  animation: 'pulse 2s infinite'
                }} />
                <span style={{
                  fontSize: isMobile ? '9px' : '12px',
                  color: '#10b981',
                  fontWeight: '700',
                  letterSpacing: '1.5px',
                  textTransform: 'uppercase'
                }}>
                  Real-time Data Analytics
                </span>
              </div>

              <h1 style={{
                margin: '0 0 16px 0',
                color: 'white',
                fontSize: isMobile ? '28px' : '56px',
                fontWeight: '800',
                letterSpacing: '-1px',
                lineHeight: '1.1'
              }}>
                Sales Performance
                <br />
                <span style={{
                  background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}>
                  Dashboard
                </span>
              </h1>

              <p style={{
                margin: '0 auto',
                maxWidth: '600px',
                color: 'rgba(255,255,255,0.6)',
                fontSize: isMobile ? '13px' : '18px',
                lineHeight: '1.6'
              }}>
                Monitor your business metrics, analyze trends, and make data-driven decisions
              </p>
            </div>

            {/* Enhanced Stats Grid */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)',
              gap: isMobile ? '10px' : '20px'
            }}>
              {[
                { icon: '📈', label: 'Live Tracking', value: 'Active', borderColor: '#3b82f6' },
                { icon: '🔄', label: 'Auto-Sync', value: 'Enabled', borderColor: '#8b5cf6' },
                { icon: '⚡', label: 'Response', value: '<200ms', borderColor: '#f59e0b' },
                { icon: '🎯', label: 'Uptime', value: '99.9%', borderColor: '#10b981' }
              ].map((stat, idx) => (
                <div key={idx} style={{
                  background: 'rgba(255, 255, 255, 0.04)',
                  backdropFilter: 'blur(20px)',
                  padding: isMobile ? '14px 10px' : '28px',
                  borderRadius: isMobile ? '10px' : '16px',
                  borderTop: `3px solid ${stat.borderColor}`,
                  border: '1px solid rgba(255,255,255,0.08)',
                  transition: 'all 0.3s',
                  cursor: 'pointer',
                  textAlign: 'center'
                }}>
                  <div style={{ 
                    fontSize: isMobile ? '20px' : '36px', 
                    marginBottom: isMobile ? '6px' : '12px',
                    filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))'
                  }}>
                    {stat.icon}
                  </div>
                  <div style={{ 
                    fontSize: isMobile ? '8px' : '11px', 
                    color: 'rgba(255,255,255,0.5)', 
                    marginBottom: isMobile ? '3px' : '8px',
                    fontWeight: '600',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px'
                  }}>
                    {stat.label}
                  </div>
                  <div style={{ 
                    fontSize: isMobile ? '15px' : '24px', 
                    color: 'white', 
                    fontWeight: '700',
                    letterSpacing: '-0.5px'
                  }}>
                    {stat.value}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Analytics Section - Updated */}
        <section id="analytics" style={{
          background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
          padding: isMobile ? '60px 20px' : '100px 40px',
          borderTop: '1px solid rgba(148, 163, 184, 0.1)'
        }}>
          <div style={{
            maxWidth: '1400px',
            margin: '0 auto'
          }}>
            {/* Section Header */}
            <div style={{
              marginBottom: isMobile ? '28px' : '60px',
              textAlign: 'center'
            }}>
              <div style={{
                display: 'inline-block',
                background: 'rgba(139, 92, 246, 0.15)',
                padding: isMobile ? '5px 12px' : '8px 20px',
                borderRadius: '20px',
                marginBottom: isMobile ? '10px' : '16px',
                border: '1px solid rgba(139, 92, 246, 0.3)'
              }}>
                <span style={{
                  fontSize: isMobile ? '9px' : '12px',
                  fontWeight: '700',
                  color: '#a78bfa',
                  letterSpacing: '1.5px',
                  textTransform: 'uppercase'
                }}>
                  📊 Analytics Overview
                </span>
              </div>
              
              <h2 style={{
                margin: '0 0 12px 0',
                fontSize: isMobile ? '24px' : '42px',
                fontWeight: '800',
                color: 'white',
                letterSpacing: '-1px'
              }}>
                Key Performance Metrics
              </h2>
              
              <p style={{
                margin: '0 auto',
                fontSize: isMobile ? '13px' : '16px',
                color: 'rgba(255,255,255,0.5)',
                maxWidth: '600px',
                lineHeight: '1.7'
              }}>
                Track your most important business indicators
              </p>
            </div>

            {/* Main Stats Cards */}
            <StatsCards />

            {/* Feature Cards Grid */}
            <div style={{
              marginTop: isMobile ? '32px' : '60px',
              display: 'grid',
              gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: isMobile ? '14px' : '24px'
            }}>
              {[
                {
                  gradient: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
                  icon: '🎯',
                  title: 'Smart Targeting',
                  desc: 'AI-powered customer segmentation',
                  metric: '+45%',
                  metricLabel: 'Conversion'
                },
                {
                  gradient: 'linear-gradient(135deg, #ec4899 0%, #f43f5e 100%)',
                  icon: '📈',
                  title: 'Growth Analytics',
                  desc: 'Real-time revenue tracking',
                  metric: '+82%',
                  metricLabel: 'YoY Growth'
                },
                {
                  gradient: 'linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)',
                  icon: '💡',
                  title: 'Intelligence',
                  desc: 'Advanced reporting & insights',
                  metric: '2.5hrs',
                  metricLabel: 'Saved'
                }
              ].map((feature, idx) => (
                <div key={idx} style={{
                  background: feature.gradient,
                  padding: isMobile ? '20px 16px' : '40px',
                  borderRadius: isMobile ? '14px' : '20px',
                  color: 'white',
                  position: 'relative',
                  overflow: 'hidden',
                  boxShadow: '0 10px 40px rgba(0,0,0,0.3)'
                }}>
                  <div style={{ position: 'relative', zIndex: 1 }}>
                    <div style={{ 
                      fontSize: isMobile ? '32px' : '48px', 
                      marginBottom: isMobile ? '12px' : '20px'
                    }}>
                      {feature.icon}
                    </div>
                    
                    <h3 style={{ 
                      margin: '0 0 10px 0', 
                      fontSize: isMobile ? '18px' : '24px', 
                      fontWeight: '700'
                    }}>
                      {feature.title}
                    </h3>
                    
                    <p style={{ 
                      margin: '0 0 16px 0', 
                      fontSize: isMobile ? '12px' : '15px', 
                      opacity: 0.95,
                      lineHeight: '1.5'
                    }}>
                      {feature.desc}
                    </p>

                    <div style={{
                      display: 'inline-flex',
                      flexDirection: 'column',
                      background: 'rgba(255,255,255,0.2)',
                      backdropFilter: 'blur(10px)',
                      padding: isMobile ? '8px 14px' : '12px 20px',
                      borderRadius: '10px',
                      border: '1px solid rgba(255,255,255,0.3)'
                    }}>
                      <span style={{ 
                        fontSize: isMobile ? '18px' : '24px', 
                        fontWeight: '800'
                      }}>
                        {feature.metric}
                      </span>
                      <span style={{ 
                        fontSize: isMobile ? '9px' : '12px', 
                        opacity: 0.9,
                        fontWeight: '600'
                      }}>
                        {feature.metricLabel}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Reports Section - Updated */}
        <section id="reports" style={{
          background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)',
          padding: isMobile ? '60px 20px' : '100px 40px',
          borderTop: '1px solid rgba(148, 163, 184, 0.1)'
        }}>
          <div style={{
            maxWidth: '1400px',
            margin: '0 auto'
          }}>
            {/* Section Header */}
            <div style={{
              marginBottom: isMobile ? '24px' : '48px'
            }}>
              <div style={{
                display: 'inline-block',
                background: 'rgba(59, 130, 246, 0.15)',
                padding: isMobile ? '5px 12px' : '8px 20px',
                borderRadius: '20px',
                marginBottom: isMobile ? '10px' : '16px',
                border: '1px solid rgba(59, 130, 246, 0.3)'
              }}>
                <span style={{
                  fontSize: isMobile ? '9px' : '12px',
                  fontWeight: '700',
                  color: '#60a5fa',
                  letterSpacing: '1.5px',
                  textTransform: 'uppercase'
                }}>
                  📄 Detailed Reports
                </span>
              </div>

              <h2 style={{
                margin: '0 0 10px 0',
                fontSize: isMobile ? '24px' : '42px',
                fontWeight: '800',
                color: 'white',
                letterSpacing: '-1px'
              }}>
                Sales Data
              </h2>
              
              <p style={{
                margin: 0,
                fontSize: isMobile ? '13px' : '16px',
                color: 'rgba(255,255,255,0.5)',
                lineHeight: '1.6'
              }}>
                Filter, search, and export transaction history
              </p>
            </div>

            {/* Search Bar */}
            <div style={{
              background: 'rgba(255, 255, 255, 0.04)',
              borderRadius: isMobile ? '12px' : '16px',
              padding: isMobile ? '16px' : '32px',
              border: '1px solid rgba(255,255,255,0.1)',
              backdropFilter: 'blur(10px)',
              marginBottom: isMobile ? '16px' : '24px'
            }}>
              <SearchBar />
            </div>

            {/* Main Content Grid */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: isMobile ? '1fr' : '320px 1fr',
              gap: isMobile ? '16px' : '24px'
            }}>
              {/* Mobile Filter Toggle Button */}
              {isMobile && (
                <button
                  className="filter-toggle-btn"
                  onClick={() => setShowFilters(!showFilters)}
                  style={{
                    width: '100%',
                    padding: '14px',
                    background: showFilters 
                      ? 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)'
                      : 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
                    color: 'white',
                    border: 'none',
                    borderRadius: '12px',
                    fontSize: '14px',
                    fontWeight: '600',
                    cursor: 'pointer',
                    boxShadow: '0 4px 12px rgba(59, 130, 246, 0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '10px',
                    transition: 'all 0.3s'
                  }}
                >
                  <span style={{ fontSize: '18px' }}>
                    {showFilters ? '✕' : '🎛️'}
                  </span>
                  <span>
                    {showFilters ? 'Close Filters' : 'Show Filters'}
                  </span>
                </button>
              )}

              {/* Sidebar Filters */}
              {(!isMobile || showFilters) && (
                <aside 
                  className="filters-sidebar"
                  style={{
                    position: isMobile ? 'fixed' : 'static',
                    top: isMobile ? '0' : 'auto',
                    left: isMobile ? '0' : 'auto',
                    right: isMobile ? '0' : 'auto',
                    bottom: isMobile ? '0' : 'auto',
                    zIndex: isMobile ? '999' : 'auto',
                    background: isMobile ? 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)' : 'transparent',
                    overflowY: isMobile ? 'auto' : 'visible',
                    padding: isMobile ? '24px 20px' : '0',
                    boxShadow: isMobile ? '0 0 50px rgba(0,0,0,0.7)' : 'none'
                  }}>
                  {isMobile && (
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      marginBottom: '20px',
                      paddingBottom: '16px',
                      borderBottom: '1px solid rgba(255,255,255,0.1)'
                    }}>
                      <h3 style={{
                        margin: 0,
                        fontSize: '18px',
                        fontWeight: '700',
                        color: 'white'
                      }}>
                        🎛️ Filters
                      </h3>
                      <button
                        onClick={() => setShowFilters(false)}
                        style={{
                          background: 'rgba(255,255,255,0.1)',
                          border: 'none',
                          color: 'white',
                          fontSize: '24px',
                          width: '36px',
                          height: '36px',
                          borderRadius: '50%',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}
                      >
                        ×
                      </button>
                    </div>
                  )}
                  <Filters />
                </aside>
              )}

              {/* Table Area */}
              <section>
                <div style={{
                  background: 'rgba(255, 255, 255, 0.04)',
                  borderRadius: isMobile ? '12px' : '16px',
                  padding: isMobile ? '14px' : '32px',
                  border: '1px solid rgba(255,255,255,0.1)',
                  backdropFilter: 'blur(10px)',
                  overflowX: 'auto'
                }}>
                  <Sorting />
                  <SalesTable />
                  <Pagination />
                </div>
              </section>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />

      {/* Add keyframe animation */}
      <style>{`
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.7;
            transform: scale(1.1);
          }
        }
        
        /* Mobile Table Styles */
        @media (max-width: 768px) {
          table {
            font-size: 11px;
            display: block;
            overflow-x: auto;
            white-space: nowrap;
          }
          
          table th,
          table td {
            padding: 8px 6px !important;
            min-width: 80px;
          }
          
          table th:first-child,
          table td:first-child {
            position: sticky;
            left: 0;
            background: inherit;
            z-index: 1;
          }
        }
        
        /* Smooth scrolling for mobile */
        html {
          scroll-behavior: smooth;
          -webkit-overflow-scrolling: touch;
        }
        
        /* Prevent mobile zoom on input focus */
        input, select, textarea {
          font-size: 16px !important;
        }
      `}</style>
    </div>
  )
}