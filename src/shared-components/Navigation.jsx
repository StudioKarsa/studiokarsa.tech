import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'gatsby'
import { motion, AnimatePresence } from 'framer-motion'

import IconLogo from '../assets/icons/logo.svg'
import IconLogoK from '../assets/icons/logoK.svg'
import IconMenu from '../assets/icons/burger.svg'
import IconX from '../assets/icons/x.svg'
import IconMapPin from '../assets/icons/map-pin.svg'

import IconMediumLogo from '../assets/icons/medium-logo.svg'
import IconTwitterLogo from '../assets/icons/twitter-logo.svg'
import IconInstagramLogo from '../assets/icons/instagram-logo.svg'
import IconDribbbleLogo from '../assets/icons/dribbble-logo.svg'
import IconBehanceLogo from '../assets/icons/behance-logo.svg'
import IconLinkedInLogo from '../assets/icons/linkedin-logo.svg'

const Navbar = ({ isOverlayVisible, setIsOverlayVisible, translate }) => (
  <nav className="flex flex-col px-6 md:px-20 py-8 space-y-2 z-30">
    <div className="relative flex justify-between items-center">
      <Link to="/">
        <IconLogo className="w-24 md:w-32 h-auto" />
      </Link>
      <div className="hidden lg:flex">
        <Link
          to="/#section-services"
          className="text-xl mx-5 font-semibold hover:text-primary duration-150"
        >
          {translate('navigation.services')}
        </Link>
        <Link
          to="/#section-whyus"
          className="text-xl mx-5 font-semibold hover:text-primary duration-150"
        >
          {translate('navigation.whyUs')}
        </Link>
        <Link
          to="/#section-works"
          className="text-xl mx-5 font-semibold hover:text-primary duration-150"
        >
          {translate('navigation.works')}
        </Link>
        <Link
          to="/#section-about"
          className="text-xl mx-5 font-semibold hover:text-primary duration-150"
        >
          {translate('navigation.about')}
        </Link>
        <Link
          to="/"
          className="text-xl mx-5 font-semibold hover:text-primary duration-150"
        >
          {translate('navigation.blog')}
        </Link>
        <Link
          to="/#section-footer"
          className="text-xl mx-5 font-semibold hover:text-primary duration-150"
        >
          {translate('navigation.contactUs')}
        </Link>
      </div>
      <div className="p-4"></div>
      <div className="absolute top-0 right-0">
        <button
          onClick={() => setIsOverlayVisible(!isOverlayVisible)}
          className="fixed transform -translate-x-full z-50 p-3 md:p-4 bg-white rounded-lg shadow hover:shadow-md focus:outline-none duration-150"
        >
          {!isOverlayVisible && <IconMenu className="w-4 md:w-6 h-4 md:h-6" />}
          {isOverlayVisible && <IconX className="w-4 md:w-6 h-4 md:h-6" />}
        </button>
      </div>
    </div>
  </nav>
)

const NavLink = ({ children, to, hideOverlay }) => (
  <Link to={to} onClick={hideOverlay}>
    <h1 className="text-2xl sm:text-4xl lg:text-6xl font-semibold tracking-tighter hover:text-primary duration-150">
      {children}
    </h1>
  </Link>
)

const NavLinks = ({ hideOverlay, translate }) => (
  <nav className="z-40 flex flex-col flex-wrap space-y-4 md:space-y-8">
    <NavLink to="/#section-services" hideOverlay={hideOverlay}>
      {translate('navigation.services')}
    </NavLink>
    <NavLink to="/#section-whyus" hideOverlay={hideOverlay}>
      {translate('navigation.whyUs')}
    </NavLink>
    <NavLink to="/#section-works" hideOverlay={hideOverlay}>
      {translate('navigation.works')}
    </NavLink>
    <NavLink to="/#section-about" hideOverlay={hideOverlay}>
      {translate('navigation.about')}
    </NavLink>
    <NavLink to="/" hideOverlay={hideOverlay}>
      {translate('navigation.blog')}
    </NavLink>
    <NavLink to="/#section-footer" hideOverlay={hideOverlay}>
      {translate('navigation.contactUs')}
    </NavLink>
  </nav>
)

const NavSocialLink = ({ children, to = '#' }) => (
  <a
    href={to}
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-primary hover:fill-current duration-150"
  >
    {children}
  </a>
)

const NavFooter = () => {
  const socials = [
    { key: '__socials_medium', href: '#', icon: <IconMediumLogo /> },
    { key: '__socials_twitter', href: '#', icon: <IconTwitterLogo /> },
    { key: '__socials_instagram', href: '#', icon: <IconInstagramLogo /> },
    { key: '__socials_dribbble', href: '#', icon: <IconDribbbleLogo /> },
    { key: '__socials_behance', href: '#', icon: <IconBehanceLogo /> },
    { key: '__socials_linkedin', href: '#', icon: <IconLinkedInLogo /> },
  ]

  return (
    <footer className="self-end mt-12 md:mt-0 z-40">
      <div className="flex justify-between md:justify-end md:space-x-14">
        {socials.map(social => (
          <NavSocialLink key={social.key}>{social.icon}</NavSocialLink>
        ))}
      </div>
      <div className="flex justify-end space-x-4 md:space-x-12 mt-12">
        <p className="font-semibold text-base md:text-xl">
          © 2021 Studio Karsa
        </p>
        <div className="flex space-x-4">
          <IconMapPin />
          <p className="font-semibold text-base md:text-xl">
            Jakarta, Indonesia
          </p>
        </div>
      </div>
    </footer>
  )
}

const NavOverlay = ({ hideOverlay, translate }) => (
  <motion.div
    initial={{ height: 0 }}
    animate={{ height: '100vh' }}
    exit={{ height: 0 }}
    transition={{
      duration: 1,
      ease: [0.19, 1.0, 0.22, 1.0],
    }}
    className="fixed top-0 left-0 w-screen z-40 px-6 md:px-20 overflow-hidden bg-white shadow-lg"
  >
    <div className="mt-8">
      <Link to="/" onClick={hideOverlay}>
        <IconLogo className="w-24 md:w-32 h-auto" />
      </Link>
    </div>
    <div className="mt-10 2xl:mt-28 flex flex-wrap justify-between">
      <NavLinks hideOverlay={hideOverlay} translate={translate} />
      <NavFooter />
      <div className="absolute right-0 bottom-0">
        <IconLogoK />
      </div>
    </div>
  </motion.div>
)

const Navigation = () => {
  const { t } = useTranslation()
  const [isOverlayVisible, setIsOverlayVisible] = useState(false)

  const hideOverlay = () => setIsOverlayVisible(false)

  return (
    <>
      <Navbar
        isOverlayVisible={isOverlayVisible}
        setIsOverlayVisible={setIsOverlayVisible}
        translate={t}
      />

      <AnimatePresence>
        {isOverlayVisible && <NavOverlay hideOverlay={hideOverlay} translate={t} />}
      </AnimatePresence>
    </>
  )
}

export default Navigation
