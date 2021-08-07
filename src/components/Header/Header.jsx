import { useEffect, useState } from 'react'
import useScroll from '../../hooks/useScroll'
import {
  HeaderContainer,
  Container,
  LoginSignUp,
  Logo,
  NavLinks,
  MenuIcon,
  Menu,
} from './HeaderStyles'
import { HiMenu } from 'react-icons/hi'
import { MdClose } from 'react-icons/md'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { scrollY } = useScroll()
  useEffect(() => {
    if (scrollY > 10) {
      setScrolled(true)
    } else {
      setScrolled(false)
    }
    // console.log({ scrolled, scrollY })
  }, [scrollY])
  return (
    <HeaderContainer scrolled={scrolled}>
      <nav>
        <Container scrolled={scrolled}>
          <Logo src='./images/logo.svg' alt='Logo' />
          <Menu scrolled={scrolled} isMenuOpen={isMenuOpen}>
            <NavLinks>
              <li>
                <a href='#'>Features</a>
              </li>
              <li>
                <a href='#'>Pricing</a>
              </li>
              <li>
                <a href='#'>Resources</a>
              </li>
            </NavLinks>
            <LoginSignUp>
              <a href='#'>Login</a>
              <button>Sign Up</button>
            </LoginSignUp>
          </Menu>
          <MenuIcon onClick={() => setIsMenuOpen(isMenuOpen => !isMenuOpen)}>
            {isMenuOpen ? <MdClose /> : <HiMenu />}
          </MenuIcon>
        </Container>
      </nav>
    </HeaderContainer>
  )
}

export default Header
