import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Contexts
import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext';

// Layout Components
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';

// Pages
import HomePage from './pages/HomePage';
import DashboardPage from './pages/DashboardPage';
import InvoicesListPage from './pages/InvoicesListPage';
import InvoiceDetailsPage from './pages/InvoiceDetailsPage';
import NotFoundPage from './pages/NotFoundPage';

// Styles
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <Router>
          <div className="app">
            <Header />
            <main className="main-content">
              <div className="container">
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/dashboard" element={<DashboardPage />} />
                  <Route path="/invoices" element={<InvoicesListPage />} />
                  <Route path="/invoices/:id" element={<InvoiceDetailsPage />} />
                  <Route path="*" element={<NotFoundPage />} />
                </Routes>
              </div>
            </main>
            <Footer />
            <ToastContainer 
              position="bottom-right"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
            />
          </div>
        </Router>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;