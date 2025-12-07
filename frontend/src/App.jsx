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
      background: '#f9fafb',
      display: 'flex',
      flexDirection: 'column'
    }}>
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main style={{ flex: 1 }}>
        {/* Dashboard Section */}
        <section id="dashboard" style={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          padding: '60px 32px',
          position: 'relative',
          overflow: 'hidden'
        }}>
          {/* Decorative Elements */}
          <div style={{
            position: 'absolute',
            top: '-50px',
            right: '-50px',
            width: '300px',
            height: '300px',
            background: 'rgba(255,255,255,0.1)',
            borderRadius: '50%',
            filter: 'blur(60px)'
          }} />
          <div style={{
            position: 'absolute',
            bottom: '-100px',
            left: '-100px',
            width: '400px',
            height: '400px',
            background: 'rgba(255,255,255,0.05)',
            borderRadius: '50%',
            filter: 'blur(80px)'
          }} />

          <div style={{
            maxWidth: '1400px',
            margin: '0 auto',
            position: 'relative',
            zIndex: 1
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
              marginBottom: '16px'
            }}>
              <div style={{
                width: '60px',
                height: '60px',
                background: 'white',
                borderRadius: '16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '32px',
                boxShadow: '0 8px 24px rgba(0,0,0,0.2)'
              }}>
                📊
              </div>
              <div>
                <h2 style={{
                  margin: 0,
                  color: 'white',
                  fontSize: '36px',
                  fontWeight: '800',
                  letterSpacing: '-1px'
                }}>
                  Sales Dashboard
                </h2>
                <p style={{
                  margin: 0,
                  color: 'rgba(255,255,255,0.9)',
                  fontSize: '16px',
                  fontWeight: '400'
                }}>
                  Real-time insights and performance metrics
                </p>
              </div>
            </div>

            {/* Quick Stats Preview */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '16px',
              marginTop: '32px'
            }}>
              {[
                { icon: '📈', label: 'Live Data', value: 'Updating' },
                { icon: '🔄', label: 'Auto-Refresh', value: 'Active' },
                { icon: '⚡', label: 'Performance', value: 'Optimal' },
                { icon: '🎯', label: 'Accuracy', value: '99.9%' }
              ].map((stat, idx) => (
                <div key={idx} style={{
                  background: 'rgba(255,255,255,0.15)',
                  backdropFilter: 'blur(10px)',
                  padding: '20px',
                  borderRadius: '12px',
                  border: '1px solid rgba(255,255,255,0.2)'
                }}>
                  <div style={{ fontSize: '28px', marginBottom: '8px' }}>{stat.icon}</div>
                  <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.8)', marginBottom: '4px' }}>
                    {stat.label}
                  </div>
                  <div style={{ fontSize: '18px', color: 'white', fontWeight: '700' }}>
                    {stat.value}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Analytics Section */}
        <section id="analytics" style={{
          background: 'white',
          padding: '60px 32px',
          borderBottom: '1px solid #e5e7eb'
        }}>
          <div style={{
            maxWidth: '1400px',
            margin: '0 auto'
          }}>
            {/* Section Header */}
            <div style={{
              marginBottom: '40px',
              textAlign: 'center'
            }}>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '12px',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                padding: '12px 24px',
                borderRadius: '12px',
                marginBottom: '16px'
              }}>
                <span style={{ fontSize: '28px' }}>📊</span>
                <h2 style={{
                  margin: 0,
                  color: 'white',
                  fontSize: '28px',
                  fontWeight: '700',
                  letterSpacing: '-0.5px'
                }}>
                  Analytics Overview
                </h2>
              </div>
              <p style={{
                margin: 0,
                fontSize: '16px',
                color: '#6b7280',
                maxWidth: '600px',
                marginLeft: 'auto',
                marginRight: 'auto'
              }}>
                Monitor your key performance indicators and track business growth in real-time
              </p>
            </div>

            {/* Stats Cards with Enhanced Layout */}
            <StatsCards />

            {/* Additional Analytics Info */}
            <div style={{
              marginTop: '48px',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '24px'
            }}>
              <div style={{
                background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
                padding: '32px',
                borderRadius: '16px',
                color: 'white',
                position: 'relative',
                overflow: 'hidden'
              }}>
                <div style={{ fontSize: '40px', marginBottom: '16px' }}>🎯</div>
                <h3 style={{ margin: '0 0 8px 0', fontSize: '20px', fontWeight: '700' }}>
                  Goal Tracking
                </h3>
                <p style={{ margin: 0, fontSize: '14px', opacity: 0.9 }}>
                  Set and monitor sales targets with visual progress indicators
                </p>
              </div>

              <div style={{
                background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
                padding: '32px',
                borderRadius: '16px',
                color: 'white',
                position: 'relative',
                overflow: 'hidden'
              }}>
                <div style={{ fontSize: '40px', marginBottom: '16px' }}>📈</div>
                <h3 style={{ margin: '0 0 8px 0', fontSize: '20px', fontWeight: '700' }}>
                  Trend Analysis
                </h3>
                <p style={{ margin: 0, fontSize: '14px', opacity: 0.9 }}>
                  Identify patterns and forecast future sales performance
                </p>
              </div>

              <div style={{
                background: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
                padding: '32px',
                borderRadius: '16px',
                color: 'white',
                position: 'relative',
                overflow: 'hidden'
              }}>
                <div style={{ fontSize: '40px', marginBottom: '16px' }}>💡</div>
                <h3 style={{ margin: '0 0 8px 0', fontSize: '20px', fontWeight: '700' }}>
                  Smart Insights
                </h3>
                <p style={{ margin: 0, fontSize: '14px', opacity: 0.9 }}>
                  AI-powered recommendations for business optimization
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Reports Section */}
        <section id="reports" style={{
          background: '#f9fafb',
          padding: '60px 32px'
        }}>
          <div style={{
            maxWidth: '1400px',
            margin: '0 auto'
          }}>
            {/* Section Header */}
            <div style={{
              marginBottom: '40px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '20px'
            }}>
              <div>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  marginBottom: '8px'
                }}>
                  <span style={{ fontSize: '32px' }}>📄</span>
                  <h2 style={{
                    margin: 0,
                    fontSize: '32px',
                    fontWeight: '700',
                    color: '#111827',
                    letterSpacing: '-0.5px'
                  }}>
                    Sales Reports
                  </h2>
                </div>
                <p style={{
                  margin: 0,
                  fontSize: '16px',
                  color: '#6b7280'
                }}>
                  Filter, search, and analyze your complete sales data
                </p>
              </div>
              
              <div style={{
                background: 'white',
                padding: '12px 20px',
                borderRadius: '12px',
                border: '2px solid #e5e7eb',
                display: 'flex',
                alignItems: 'center',
                gap: '12px'
              }}>
                <span style={{ fontSize: '20px' }}>📊</span>
                <div>
                  <div style={{ fontSize: '12px', color: '#6b7280', fontWeight: '500' }}>
                    Total Records
                  </div>
                  <div style={{ fontSize: '18px', color: '#111827', fontWeight: '700' }}>
                    Loading...
                  </div>
                </div>
              </div>
            </div>

            {/* Search Bar */}
            <div style={{
              background: 'white',
              borderRadius: '16px',
              padding: '24px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
              border: '1px solid #f3f4f6',
              marginBottom: '24px'
            }}>
              <SearchBar />
            </div>

            {/* Main Content Grid */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: '320px 1fr',
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
                  padding: '24px',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
                  border: '1px solid #f3f4f6'
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
    </div>
  )
}