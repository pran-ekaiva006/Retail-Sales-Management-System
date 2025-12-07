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
      background: '#f1f5f9',
      display: 'flex',
      flexDirection: 'column'
    }}>
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main style={{ flex: 1 }}>
        {/* Hero Dashboard Section */}
        <section id="dashboard" style={{
          background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)',
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
            backgroundImage: 'radial-gradient(circle at 20% 50%, white 1px, transparent 1px), radial-gradient(circle at 80% 80%, white 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }} />

          {/* Decorative Gradient Orbs */}
          <div style={{
            position: 'absolute',
            top: '-20%',
            right: '-10%',
            width: '600px',
            height: '600px',
            background: 'radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, transparent 70%)',
            borderRadius: '50%',
            filter: 'blur(80px)'
          }} />
          <div style={{
            position: 'absolute',
            bottom: '-20%',
            left: '-10%',
            width: '500px',
            height: '500px',
            background: 'radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, transparent 70%)',
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
                background: 'rgba(59, 130, 246, 0.15)',
                backdropFilter: 'blur(10px)',
                padding: '10px 24px',
                borderRadius: '30px',
                border: '1px solid rgba(59, 130, 246, 0.3)',
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
                  color: 'rgba(255,255,255,0.95)',
                  fontWeight: '600',
                  letterSpacing: '0.5px'
                }}>
                  REAL-TIME DATA ANALYTICS
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
                color: 'rgba(255,255,255,0.7)',
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
                  color: '#3b82f6',
                  bgGradient: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)'
                },
                { 
                  icon: '🔄', 
                  label: 'Auto-Sync', 
                  value: 'Enabled',
                  color: '#8b5cf6',
                  bgGradient: 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)'
                },
                { 
                  icon: '⚡', 
                  label: 'Response Time', 
                  value: '<200ms',
                  color: '#f59e0b',
                  bgGradient: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)'
                },
                { 
                  icon: '🎯', 
                  label: 'Uptime', 
                  value: '99.9%',
                  color: '#10b981',
                  bgGradient: 'linear-gradient(135deg, #10b981 0%, #059669 100%)'
                }
              ].map((stat, idx) => (
                <div key={idx} style={{
                  background: 'rgba(255,255,255,0.05)',
                  backdropFilter: 'blur(20px)',
                  padding: '28px',
                  borderRadius: '16px',
                  border: '1px solid rgba(255,255,255,0.1)',
                  transition: 'all 0.3s',
                  cursor: 'pointer',
                  position: 'relative',
                  overflow: 'hidden'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)'
                  e.currentTarget.style.background = 'rgba(255,255,255,0.08)'
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.background = 'rgba(255,255,255,0.05)'
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'
                }}>
                  {/* Gradient Accent */}
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '3px',
                    background: stat.bgGradient
                  }} />

                  <div style={{ 
                    fontSize: '36px', 
                    marginBottom: '12px',
                    filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.2))'
                  }}>
                    {stat.icon}
                  </div>
                  <div style={{ 
                    fontSize: '13px', 
                    color: 'rgba(255,255,255,0.6)', 
                    marginBottom: '8px',
                    fontWeight: '600',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px'
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

        {/* Analytics Section with Modern Design */}
        <section id="analytics" style={{
          background: '#ffffff',
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
                background: '#ede9fe',
                padding: '8px 20px',
                borderRadius: '20px',
                marginBottom: '16px'
              }}>
                <span style={{
                  fontSize: '13px',
                  fontWeight: '700',
                  color: '#7c3aed',
                  letterSpacing: '0.5px'
                }}>
                  📊 ANALYTICS OVERVIEW
                </span>
              </div>
              
              <h2 style={{
                margin: '0 0 16px 0',
                fontSize: '42px',
                fontWeight: '800',
                color: '#0f172a',
                letterSpacing: '-1px'
              }}>
                Key Performance Metrics
              </h2>
              
              <p style={{
                margin: '0 auto',
                fontSize: '16px',
                color: '#64748b',
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
                  boxShadow: '0 10px 30px -10px rgba(0,0,0,0.2)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)'
                  e.currentTarget.style.boxShadow = '0 20px 40px -10px rgba(0,0,0,0.3)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = '0 10px 30px -10px rgba(0,0,0,0.2)'
                }}>
                  {/* Background Pattern */}
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
                      filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.1))'
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

                    {/* Metric Badge */}
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

        {/* Reports Section with Enhanced Design */}
        <section id="reports" style={{
          background: '#f8fafc',
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
                  background: '#dbeafe',
                  padding: '8px 20px',
                  borderRadius: '20px',
                  marginBottom: '16px'
                }}>
                  <span style={{
                    fontSize: '13px',
                    fontWeight: '700',
                    color: '#1e40af',
                    letterSpacing: '0.5px'
                  }}>
                    📄 DETAILED REPORTS
                  </span>
                </div>

                <h2 style={{
                  margin: '0 0 12px 0',
                  fontSize: '42px',
                  fontWeight: '800',
                  color: '#0f172a',
                  letterSpacing: '-1px'
                }}>
                  Sales Data
                </h2>
                
                <p style={{
                  margin: 0,
                  fontSize: '16px',
                  color: '#64748b',
                  lineHeight: '1.6'
                }}>
                  Filter, search, and export your complete transaction history
                </p>
              </div>
              
              {/* Quick Stats Badge */}
              <div style={{
                background: 'white',
                padding: '24px 28px',
                borderRadius: '16px',
                border: '1px solid #e2e8f0',
                boxShadow: '0 4px 12px rgba(15, 23, 42, 0.08)'
              }}>
                <div style={{ 
                  fontSize: '32px', 
                  marginBottom: '8px',
                  textAlign: 'center'
                }}>
                  📊
                </div>
                <div style={{ 
                  fontSize: '12px', 
                  color: '#64748b', 
                  fontWeight: '600',
                  marginBottom: '4px',
                  textAlign: 'center',
                  letterSpacing: '0.5px'
                }}>
                  TOTAL RECORDS
                </div>
                <div style={{ 
                  fontSize: '28px', 
                  color: '#0f172a', 
                  fontWeight: '800',
                  textAlign: 'center'
                }}>
                  Loading...
                </div>
              </div>
            </div>

            {/* Search Bar */}
            <div style={{
              background: 'white',
              borderRadius: '16px',
              padding: '32px',
              boxShadow: '0 1px 3px rgba(15, 23, 42, 0.08)',
              border: '1px solid #e2e8f0',
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
                  background: 'white',
                  borderRadius: '16px',
                  padding: '32px',
                  boxShadow: '0 1px 3px rgba(15, 23, 42, 0.08)',
                  border: '1px solid #e2e8f0'
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