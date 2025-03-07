import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'gatsby'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

import RoundedLogo from '../assets/images/rounded-logo.svg'

import IconLogo from '../assets/icons/logo.svg'
import IconMapPin from '../assets/icons/map-pin.svg'

import IconMediumLogo from '../assets/icons/medium-logo.svg'
import IconTwitterLogo from '../assets/icons/twitter-logo.svg'
import IconInstagramLogo from '../assets/icons/instagram-logo.svg'
import IconDribbbleLogo from '../assets/icons/dribbble-logo.svg'
import IconBehanceLogo from '../assets/icons/behance-logo.svg'
import IconLinkedInLogo from '../assets/icons/linkedin-logo.svg'

const ContactSection = () => {
  const { t } = useTranslation()

  const fadeUp = {
    hidden: { opacity: 0, y: 150 },
    visible: {
      opacity: 1,
      y: 0,
    },
  }

  const ImgContact = () => {
    const controls = useAnimation()
    const { ref, inView } = useInView()

    useEffect(() => {
      if (inView) {
        controls.start('visible')
      }
    }, [controls, inView])

    return (
      <motion.section
        ref={ref}
        variants={fadeUp}
        initial="hidden"
        animate={controls}
        transition={{ duration: 3.2, ease: [0.19, 1.0, 0.22, 1.0] }}
        className="relative w-full mt-64 mb-32"
      >
        <div className="flex flex-col justify-center items-center ">
          <RoundedLogo className="absolute w-60 md:w-72 lg:w-96 z-0" />
          <div className="text-center z-10">
            <h3 className="font-medium text-2xl md:text-4xl">
              {t('footer.sub')}
            </h3>
            <h1 className="font-semibold text-5xl md:text-6xl lg:text-8xl bg-white">
              {t('footer.main')}
            </h1>
          </div>
        </div>
      </motion.section>
    )
  }

  const BtnContact = () => {
    const controls = useAnimation()
    const { ref, inView } = useInView()

    useEffect(() => {
      if (inView) {
        controls.start('visible')
      }
    }, [controls, inView])

    return (
      <motion.section
        ref={ref}
        variants={fadeUp}
        initial="hidden"
        animate={controls}
        transition={{ duration: 3.2, ease: [0.19, 1.0, 0.22, 1.0] }}
        className="flex flex-col md:flex-row justify-center md:space-x-12 mb-32"
      >
        <button className="z-10 capitalize inline-block font-semibold text-white bg-primary shadow-xl rounded-md mt-4 py-2 px-10 text-base xl:py-3 xl:px-12 xl:text-xl hover:transform hover:-translate-y-1 duration-300">
          E-Mail
        </button>
        <button className="z-10 capitalize inline-block font-semibold text-white bg-primary shadow-xl rounded-md mt-4 py-2 px-10 text-base xl:py-3 xl:px-12 xl:text-xl hover:transform hover:-translate-y-1 duration-300">
          WhatsApp
        </button>
      </motion.section>
    )
  }

  return (
    <div>
      <ImgContact />
      <BtnContact />
    </div>
  )
}

const SocialLink = ({ children, to = '#' }) => (
  <a
    href={to}
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-primary hover:fill-current duration-150"
  >
    {children}
  </a>
)

const Footer = () => {
  const socials = [
    { key: '__socials_medium', href: '#', icon: <IconMediumLogo /> },
    { key: '__socials_twitter', href: '#', icon: <IconTwitterLogo /> },
    { key: '__socials_instagram', href: '#', icon: <IconInstagramLogo /> },
    { key: '__socials_dribbble', href: '#', icon: <IconDribbbleLogo /> },
    { key: '__socials_behance', href: '#', icon: <IconBehanceLogo /> },
    { key: '__socials_linkedin', href: '#', icon: <IconLinkedInLogo /> },
  ]

  return (
    <footer id="section-footer" className="px-6 md:px-20">
      <ContactSection />

      <div className="w-full pb-12">
        <div className="flex justify-between items-baseline">
          <IconLogo className="w-32 md:w-auto" />

          <div className="hidden xl:flex flex-wrap space-x-14">
            {socials.map(social => (
              <SocialLink key={social.key}>{social.icon}</SocialLink>
            ))}
          </div>
        </div>
      </div>

      <div className="w-full pb-12">
        <div className="flex flex-col justify-center xl:flex-row xl:justify-between items-baseline">
          <div className="w-full xl:w-1/2">
            <div className="grid grid-flow-row grid-cols-2 gap-6 place-content-between md:flex md:flex-row md:space-x-2 2xl:space-x-8">
              <Link to="/#section-services">
                <h1 className="font-semibold text-base md:text-lg hover:text-primary duration-150">
                  Services
                </h1>
              </Link>
              <Link to="/#section-whyus">
                <h1 className="font-semibold text-base md:text-lg hover:text-primary duration-150">
                  Why Us
                </h1>
              </Link>
              <Link to="/#section-works">
                <h1 className="font-semibold text-base md:text-lg hover:text-primary duration-150">
                  Works
                </h1>
              </Link>
              <Link to="/#section-about">
                <h1 className="font-semibold text-base md:text-lg hover:text-primary duration-150">
                  About
                </h1>
              </Link>
              <Link to="/">
                <h1 className="font-semibold text-base md:text-lg hover:text-primary duration-150">
                  Blog
                </h1>
              </Link>
              <Link to="/#section-footer">
                <h1 className="font-semibold text-base md:text-lg hover:text-primary duration-150">
                  Contact us
                </h1>
              </Link>
            </div>
          </div>

          <div className="w-full py-12 block xl:hidden">
            <div className="flex flex-wrap justify-between sm:justify-start space-x-7 md:space-x-14">
              {socials.map(social => (
                <SocialLink key={social.key}>{social.icon}</SocialLink>
              ))}
            </div>
          </div>

          <div className="w-full xl:w-1/2">
            <div className="flex flex-col xl:flex-row justify-center items-center xl:justify-end xl:items-end space-y-2 xl:space-y-0 xl:space-x-14 pt-4 md:pt-0">
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
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
