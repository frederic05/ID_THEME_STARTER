// ** React Imports
import { Link, useNavigate } from 'react-router-dom'

import jwt_decode from "jwt-decode"

// ** Custom Components
import InputPasswordToggle from '@components/input-password-toggle'

// ** Reactstrap Imports
import { Card, CardBody, CardTitle, CardText, Form, Label, Input, Button, Spinner } from 'reactstrap'

// ** Styles
import '@styles/react/pages/page-authentication.scss'
import {useDispatch } from 'react-redux'
import {authUser} from '../redux/authentification'
import { useState } from 'react'


const LoginBasic = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [isloading, setIsloading] = useState(false)
  const [items, setItems] = useState({
    login: "",
    password: ""
  })

  const handleChange = e => {
    const { name, value } = e.target
    setItems(prevState => ({
        ...prevState,
        [name]: value
    }))
}

  const handLerForm = (e) => {

    e.preventDefault()
    setIsloading(true)
    setTimeout(() => {

      dispatch(authUser(items)).then(result => {
              if (result.status === 200) {               
                  localStorage.setItem('token', result.data)
                  const docoded = jwt_decode(result.data.data)
                  localStorage.setItem('userData', JSON.stringify(docoded))
                  navigate('/home')
              } else {
                   console.log('RETOUR SERVEUR', result.data.message)
              }
          })
    }, 2000)

    
  }

  return (
    <div className='auth-wrapper auth-basic px-2' style={{backgroundColor: '#CACACA'}}>
      <div className='auth-inner my-2'>
        <Card className='mb-0'>
          <CardBody>
            <Link className='brand-logo' to='/'>
              <svg viewBox='0 0 139 95' version='1.1' height='28'>
                <defs>
                  <linearGradient x1='100%' y1='10.5120544%' x2='50%' y2='89.4879456%' id='linearGradient-1'>
                    <stop stopColor='#000000' offset='0%'></stop>
                    <stop stopColor='#FFFFFF' offset='100%'></stop>
                  </linearGradient>
                  <linearGradient x1='64.0437835%' y1='46.3276743%' x2='37.373316%' y2='100%' id='linearGradient-2'>
                    <stop stopColor='#EEEEEE' stopOpacity='0' offset='0%'></stop>
                    <stop stopColor='#FFFFFF' offset='100%'></stop>
                  </linearGradient>
                </defs>
                <g id='Page-1' stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
                  <g id='Artboard' transform='translate(-400.000000, -178.000000)'>
                    <g id='Group' transform='translate(400.000000, 178.000000)'>
                      <path
                        d='M-5.68434189e-14,2.84217094e-14 L39.1816085,2.84217094e-14 L69.3453773,32.2519224 L101.428699,2.84217094e-14 L138.784583,2.84217094e-14 L138.784199,29.8015838 C137.958931,37.3510206 135.784352,42.5567762 132.260463,45.4188507 C128.736573,48.2809251 112.33867,64.5239941 83.0667527,94.1480575 L56.2750821,94.1480575 L6.71554594,44.4188507 C2.46876683,39.9813776 0.345377275,35.1089553 0.345377275,29.8015838 C0.345377275,24.4942122 0.230251516,14.560351 -5.68434189e-14,2.84217094e-14 Z'
                        id='Path'
                        className='text-primary'
                        style={{ fill: 'currentColor' }}
                      ></path>
                      <path
                        d='M69.3453773,32.2519224 L101.428699,1.42108547e-14 L138.784583,1.42108547e-14 L138.784199,29.8015838 C137.958931,37.3510206 135.784352,42.5567762 132.260463,45.4188507 C128.736573,48.2809251 112.33867,64.5239941 83.0667527,94.1480575 L56.2750821,94.1480575 L32.8435758,70.5039241 L69.3453773,32.2519224 Z'
                        id='Path'
                        fill='url(#linearGradient-1)'
                        opacity='0.2'
                      ></path>
                      <polygon
                        id='Path-2'
                        fill='#000000'
                        opacity='0.049999997'
                        points='69.3922914 32.4202615 32.8435758 70.5039241 54.0490008 16.1851325'
                      ></polygon>
                      <polygon
                        id='Path-2'
                        fill='#000000'
                        opacity='0.099999994'
                        points='69.3922914 32.4202615 32.8435758 70.5039241 58.3683556 20.7402338'
                      ></polygon>
                      <polygon
                        id='Path-3'
                        fill='url(#linearGradient-2)'
                        opacity='0.099999994'
                        points='101.428699 0 83.0667527 94.1480575 130.378721 47.0740288'
                      ></polygon>
                    </g>
                  </g>
                </g>
              </svg>
              <h2 className='brand-text text-primary ms-1'>Vuexy</h2>
            </Link>
            <CardTitle tag='h4' className='mb-1'>
              Bienvenue sur votre platforme 👋
            </CardTitle>
            <CardText className='mb-2'>Veuillez vous connecter à votre compte et commencer l'aventure</CardText>
            <Form className='auth-login-form mt-2' onSubmit={e => handLerForm(e)}>
              <div className='mb-1'>
                <Label className='form-label' for='login-email'>
                  Login
                </Label>
                <Input type='text' id='login-email' name='login' value={items.login} onChange={handleChange}  placeholder='john005@' autoFocus />
              </div>
              <div className='mb-1'>
                <div className='d-flex justify-content-between'>
                  <Label className='form-label' for='login-password'>
                    Mot de passe
                  </Label>
                  <Link to='/'>
                    <small>Mot de passe oublié</small>
                  </Link>
                </div>
                <InputPasswordToggle className='input-group-merge' name='password' id='login-password' value={items.password} onChange={handleChange} />
              </div>
              <div className='form-check mb-1'>
                <Input type='checkbox' id='remember-me' />
                <Label className='form-check-label' for='remember-me'>
                  Se souvenir de moi
                </Label>
              </div>
              <Button color='primary' block>
                Connexion 
                {isloading && <Spinner className='me-25' size='sm' />}
                
              </Button>
            </Form>
            <p className='text-center mt-2'>
              <span className='me-25'>Vous êtes nouveau?</span>
              <Link to='/'>
                <span>Créer un compte</span>
              </Link>
            </p>
            <div className='divider my-2'>
              <div className='divider-text'>ou</div>
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  )
}

export default LoginBasic
