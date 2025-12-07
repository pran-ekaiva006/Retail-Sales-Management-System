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
  return (
    <div style={{
      minHeight: '100vh',
      background: '#0f1729',
      display: 'flex',
      flexDirection: 'column'
    }}>
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main style={{ flex: 1 }}>
        {/* Hero Dashboard Section */}
        <section id="dashboard" style={{
          background: 'linear-gradient(135deg, #0f1729 0%, #1a2332 100%)',
          padding: '80px 32px',
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
            backgroundImage: 'radial-gradient(circle at 20% 50%, #3b82f6 1px, transparent 1px), radial-gradient(circle at 80% 80%, #8b5cf6 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }} />

          {/* Decorative Gradient Orbs */}
          <div style={{
            position: 'absolute',
            top: '-20%',
            right: '-10%',
            width: '600px',
            height: '600px',
            background: 'radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, transparent 70%)',
            borderRadius: '50%',
            filter: 'blur(80px)'
          }} />
          <div style={{
            position: 'absolute',
            bottom: '-20%',
            left: '-10%',
            width: '500px',
            height: '500px',
            background: 'radial-gradient(circle, rgba(139, 92, 246, 0.1) 0%, transparent 70%)',
            borderRadius: '50%',
            filter: 'blur(80px)'
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
              marginBottom: '60px'
            }}>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '12px',
                background: 'rgba(16, 185, 129, 0.1)',
                backdropFilter: 'blur(10px)',
                padding: '10px 24px',
                borderRadius: '30px',
                border: '1px solid rgba(16, 185, 129, 0.3)',
                marginBottom: '24px'
              }}>
                <div style={{
                  width: '8px',
                  height: '8px',
                  background: '#10b981',
                  borderRadius: '50%',
                  boxShadow: '0 0 10px #10b981',
                  animation: 'pulse 2s infinite'
                }} />
                <span style={{
                  fontSize: '13px',
                  color: '#10b981',
                  fontWeight: '600',
                  letterSpacing: '1px',
                  textTransform: 'uppercase'
                }}>
                  Real-time Data Analytics
                </span>
              </div>

              <h1 style={{
                margin: '0 0 20px 0',
                color: 'white',
                fontSize: '56px',
                fontWeight: '800',
                letterSpacing: '-2px',
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
                fontSize: '18px',
                lineHeight: '1.6'
              }}>
                Monitor your business metrics, analyze trends, and make data-driven decisions with our comprehensive analytics platform
              </p>
            </div>

            {/* Enhanced Stats Grid */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '20px'
            }}>
              {[
                { 
                  icon: '📈', 
                  label: 'Live Tracking', 
                  value: 'Active',
                  borderColor: '#3b82f6'
                },
                { 
                  icon: '🔄', 
                  label: 'Auto-Sync', 
                  value: 'Enabled',
                  borderColor: '#8b5cf6'
                },
                { 
                  icon: '⚡', 
                  label: 'Response Time', 
                  value: '<200ms',
                  borderColor: '#f59e0b'
                },
                { 
                  icon: '🎯', 
                  label: 'Uptime', 
                  value: '99.9%',
                  borderColor: '#10b981'
                }
              ].map((stat, idx) => (
                <div key={idx} style={{
                  background: 'rgba(255, 255, 255, 0.03)',
                  backdropFilter: 'blur(20px)',
                  padding: '28px',
                  borderRadius: '16px',
                  borderTop: `3px solid ${stat.borderColor}`,
                  border: '1px solid rgba(255,255,255,0.05)',
                  transition: 'all 0.3s',
                  cursor: 'pointer',
                  position: 'relative',
                  overflow: 'hidden'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)'
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)'
                  e.currentTarget.style.borderColor = stat.borderColor
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.03)'
                }}>
                  <div style={{ 
                    fontSize: '36px', 
                    marginBottom: '12px',
                    filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))'
                  }}>
                    {stat.icon}
                  </div>
                  <div style={{ 
                    fontSize: '12px', 
                    color: 'rgba(255,255,255,0.5)', 
                    marginBottom: '8px',
                    fontWeight: '600',
                    textTransform: 'uppercase',
                    letterSpacing: '1px'
                  }}>
                    {stat.label}
                  </div>
                  <div style={{ 
                    fontSize: '24px', 
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

        {/* Analytics Section */}
        <section id="analytics" style={{
          background: '#1a2332',
          padding: '80px 32px',
          position: 'relative'
        }}>
          <div style={{
            maxWidth: '1400px',
            margin: '0 auto'
          }}>
            {/* Section Header */}
            <div style={{
              marginBottom: '60px',
              textAlign: 'center'
            }}>
              <div style={{
                display: 'inline-block',
                background: 'rgba(139, 92, 246, 0.1)',
                padding: '8px 20px',
                borderRadius: '20px',
                marginBottom: '16px',
                border: '1px solid rgba(139, 92, 246, 0.3)'
              }}>
                <span style={{
                  fontSize: '13px',
                  fontWeight: '700',
                  color: '#8b5cf6',
                  letterSpacing: '1px',
                  textTransform: 'uppercase'
                }}>
                  📊 Analytics Overview
                </span>
              </div>
              
              <h2 style={{
                margin: '0 0 16px 0',
                fontSize: '42px',
                fontWeight: '800',
                color: 'white',
                letterSpacing: '-1px'
              }}>
                Key Performance Metrics
              </h2>
              
              <p style={{
                margin: '0 auto',
                fontSize: '16px',
                color: 'rgba(255,255,255,0.5)',
                maxWidth: '600px',
                lineHeight: '1.7'
              }}>
                Track your most important business indicators and gain actionable insights to drive growth
              </p>
            </div>

            {/* Main Stats Cards */}
            <StatsCards />

            {/* Feature Cards Grid */}
            <div style={{
              marginTop: '60px',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '24px'
            }}>
              {[
                {
                  gradient: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
                  icon: '🎯',
                  title: 'Smart Targeting',
                  desc: 'AI-powered customer segmentation and personalized marketing campaigns',
                  metric: '+45%',
                  metricLabel: 'Conversion Rate'
                },
                {
                  gradient: 'linear-gradient(135deg, #ec4899 0%, #f43f5e 100%)',
                  icon: '📈',
                  title: 'Growth Analytics',
                  desc: 'Real-time revenue tracking and predictive sales forecasting',
                  metric: '+82%',
                  metricLabel: 'YoY Growth'
                },
                {
                  gradient: 'linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)',
                  icon: '💡',
                  title: 'Business Intelligence',
                  desc: 'Advanced reporting with custom dashboards and automated insights',
                  metric: '2.5hrs',
                  metricLabel: 'Time Saved'
                }
              ].map((feature, idx) => (
                <div key={idx} style={{
                  background: feature.gradient,
                  padding: '40px',
                  borderRadius: '20px',
                  color: 'white',
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'all 0.3s',
                  cursor: 'pointer',
                  boxShadow: '0 10px 40px rgba(0,0,0,0.3)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)'
                  e.currentTarget.style.boxShadow = '0 20px 50px rgba(0,0,0,0.4)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = '0 10px 40px rgba(0,0,0,0.3)'
                }}>
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    width: '200px',
                    height: '200px',
                    background: 'rgba(255,255,255,0.08)',
                    borderRadius: '50%',
                    transform: 'translate(50%, -50%)'
                  }} />

                  <div style={{ position: 'relative', zIndex: 1 }}>
                    <div style={{ 
                      fontSize: '48px', 
                      marginBottom: '20px',
                      filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.2))'
                    }}>
                      {feature.icon}
                    </div>
                    
                    <h3 style={{ 
                      margin: '0 0 12px 0', 
                      fontSize: '24px', 
                      fontWeight: '700',
                      letterSpacing: '-0.5px'
                    }}>
                      {feature.title}
                    </h3>
                    
                    <p style={{ 
                      margin: '0 0 24px 0', 
                      fontSize: '15px', 
                      opacity: 0.95,
                      lineHeight: '1.6'
                    }}>
                      {feature.desc}
                    </p>

                    <div style={{
                      display: 'inline-flex',
                      flexDirection: 'column',
                      background: 'rgba(255,255,255,0.2)',
                      backdropFilter: 'blur(10px)',
                      padding: '12px 20px',
                      borderRadius: '12px',
                      border: '1px solid rgba(255,255,255,0.3)'
                    }}>
                      <span style={{ 
                        fontSize: '24px', 
                        fontWeight: '800',
                        marginBottom: '4px'
                      }}>
                        {feature.metric}
                      </span>
                      <span style={{ 
                        fontSize: '12px', 
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

        {/* Reports Section */}
        <section id="reports" style={{
          background: '#0f1729',
          padding: '80px 32px'
        }}>
          <div style={{
            maxWidth: '1400px',
            margin: '0 auto'
          }}>
            {/* Section Header */}
            <div style={{
              marginBottom: '48px',
              display: 'flex',
              alignItems: 'flex-start',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '24px'
            }}>
              <div style={{ flex: 1, minWidth: '300px' }}>
                <div style={{
                  display: 'inline-block',
                  background: 'rgba(59, 130, 246, 0.1)',
                  padding: '8px 20px',
                  borderRadius: '20px',
                  marginBottom: '16px',
                  border: '1px solid rgba(59, 130, 246, 0.3)'
                }}>
                  <span style={{
                    fontSize: '13px',
                    fontWeight: '700',
                    color: '#3b82f6',
                    letterSpacing: '1px',
                    textTransform: 'uppercase'
                  }}>
                    📄 Detailed Reports
                  </span>
                </div>

                <h2 style={{
                  margin: '0 0 12px 0',
                  fontSize: '42px',
                  fontWeight: '800',
                  color: 'white',
                  letterSpacing: '-1px'
                }}>
                  Sales Data
                </h2>
                
                <p style={{
                  margin: 0,
                  fontSize: '16px',
                  color: 'rgba(255,255,255,0.5)',
                  lineHeight: '1.6'
                }}>
                  Filter, search, and export your complete transaction history
                </p>
              </div>
              
              {/* Quick Stats Badge */}
              <div style={{
                background: 'rgba(255, 255, 255, 0.03)',
                padding: '24px 28px',
                borderRadius: '16px',
                border: '1px solid rgba(255,255,255,0.1)',
                backdropFilter: 'blur(10px)'
              }}>
                <div style={{ 
                  fontSize: '32px', 
                  marginBottom: '8px',
                  textAlign: 'center'
                }}>
                  📊
                </div>
                <div style={{ 
                  fontSize: '11px', 
                  color: 'rgba(255,255,255,0.5)', 
                  fontWeight: '600',
                  marginBottom: '4px',
                  textAlign: 'center',
                  letterSpacing: '1px',
                  textTransform: 'uppercase'
                }}>
                  Total Records
                </div>
                <div style={{ 
                  fontSize: '28px', 
                  color: 'white', 
                  fontWeight: '800',
                  textAlign: 'center'
                }}>
                  Loading...
                </div>
              </div>
            </div>

            {/* Search Bar */}
            <div style={{
              background: 'rgba(255, 255, 255, 0.03)',
              borderRadius: '16px',
              padding: '32px',
              border: '1px solid rgba(255,255,255,0.1)',
              backdropFilter: 'blur(10px)',
              marginBottom: '24px'
            }}>
              <SearchBar />
            </div>

            {/* Main Content Grid */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: '340px 1fr',
              gap: '24px'
            }}>
              {/* Sidebar Filters */}
              <aside>
                <Filters />
              </aside>

              {/* Table Area */}
              <section>
                <div style={{
                  background: 'rgba(255, 255, 255, 0.03)',
                  borderRadius: '16px',
                  padding: '32px',
                  border: '1px solid rgba(255,255,255,0.1)',
                  backdropFilter: 'blur(10px)'
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
      `}</style>
    </div>
  )
}