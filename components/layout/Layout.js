import { useEffect, useState } from 'react';
import BackToTop from '../elements/BackToTop';
import Breadcrumb from './Breadcrumb';
import Header from './Header/Header';
import PageHead from './PageHead';
import Footer from './Footer/Footer';
import BlogFooter from './Footer/Blog-footer';

const Layout = ({
  footerStyle,
  children,
  breadcrumbCategory,
  breadcrumbPostTitle,
  footerClass,
  headTitle,
  logoWhite,
}) => {
  const handleMobileMenuOpen = () => {
    document.body.classList.add('mobile-menu-visible');
  };

  const handleMobileMenuClose = () => {
    document.body.classList.remove('mobile-menu-visible');
  };

  const handleSidebarOpen = () => {
    document.body.classList.add('offCanvas__menu-visible');
  };

  const handleSidebarClose = () => {
    document.body.classList.remove('offCanvas__menu-visible');
  };

  //Language Toggle
  const [langToggle, setLangToggle] = useState(false);
  const handleLangToggle = () => setLangToggle(!langToggle);

  const [scroll, setScroll] = useState(0);
  useEffect(() => {
    document.addEventListener('scroll', () => {
      const scrollCheck = window.scrollY > 100;
      if (scrollCheck !== scroll) {
        setScroll(scrollCheck);
      }
    });
  });

  return (
    <>
      <PageHead headTitle={headTitle} />
      <Header
        handleMobileMenuOpen={handleMobileMenuOpen}
        handleMobileMenuClose={handleMobileMenuClose}
        scroll={scroll}
        langToggle={langToggle}
        handleLangToggle={handleLangToggle}
        handleSidebarOpen={handleSidebarOpen}
        handleSidebarClose={handleSidebarClose}
      />
      <main className="main">
        {breadcrumbCategory && (
          <Breadcrumb
            breadcrumbCategory={breadcrumbCategory}
            breadcrumbPostTitle={breadcrumbPostTitle}
          />
        )}

        {children}
      </main>
      {footerStyle == 'blogFooter' ? (
        <BlogFooter footerClass={footerClass} logoWhite={logoWhite} />
      ) : (
        <Footer footerClass={footerClass} logoWhite={logoWhite} />
      )}
      <BackToTop />
    </>
  );
};

export default Layout;
