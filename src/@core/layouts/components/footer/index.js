// ** Icons Import
import { Heart } from 'react-feather'

const Footer = () => {
  return (
    <p className='clearfix mb-0'>
      <span className='float-md-start d-block d-md-inline-block mt-25'>
        copyright © {new Date().getFullYear()}{' '}
        <a href='#' target='_blank' rel='noopener noreferrer'>
          ID-THEME
        </a>
        <span className='d-none d-sm-inline-block'>, Tout droit reservé</span>
      </span>
      <span className='float-md-end d-none d-md-block'>
        Ignace & Didier
        <Heart size={10} />
      </span>
    </p>
  )
}

export default Footer
