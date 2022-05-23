import { Mail, Home, Copy, Circle } from 'react-feather'

export default [
  {
    id: 'home',
    title: 'Home',
    icon: <Home size={20} />,
    navLink: '/home'
  },
  {
    id: 'secondPage',
    title: 'Second Page',
    icon: <Mail size={20} />,
    navLink: '/second-page'
  },
  {
    id: 'formElements',
    title: 'Form Elements',
    icon: <Copy size={20} />,
    children: [
      {
        id: 'input',
        title: 'Input',
        icon: <Circle size={12} />
      }
    ]
  }
]
