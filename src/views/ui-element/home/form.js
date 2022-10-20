// ** Third Party Components
import toast from 'react-hot-toast'
import { Check } from 'react-feather'
import { useForm, Controller } from 'react-hook-form'

// ** Custom Components
import Avatar from '@components/avatar'

// ** Reactstrap Imports
import { Card, CardHeader, CardTitle, CardBody, Button, Label, Input, Form } from 'reactstrap'

const BasicHookForm = ({items, recupFome}) => {
  // ** Hooks
  const {
    reset,
    control,
    setError,
    handleSubmit,
    formState: { errors }
  } = useForm()

  const onSubmit = data => {
    if (Object.values(data).every(field => field.length > 0)) {
      toast(
        <div className='d-flex'>
          <div className='me-1'>
            <Avatar size='sm' color='success' icon={<Check size={12} />} />
          </div>
          <div className='d-flex flex-column'>
            <h6>Form Submitted!</h6>
            <ul className='list-unstyled mb-0'>
              <li>
                <strong>code</strong>: {data.code}
              </li>
              <li>
                <strong>libelle</strong>: {data.libelle}
              </li>
              <li>
                <strong>value</strong>: {data.value}
              </li>
              <li>
                <strong>produit</strong>: {data.produit}
              </li>
            </ul>
          </div>
        </div>
      )
    } else {
      for (const key in data) {
        if (data[key].length === 0) {
          setError(key, {
            type: 'manual'
          })
        }
      }
    }
  }

  const handleReset = () => {
    reset({
      code: '',
      libelle: '',
      value: '',
      produit: ''
    })
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle tag='h4'>Opétation form</CardTitle>
      </CardHeader>
      <CardBody>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <div className='mb-1'>
            <Label className='form-label' for='code'>
             Code
            </Label>
            <Controller
              defaultValue=''
              control={control}
              id='code'
              name='code'
              render={({ field }) => <Input placeholder='code' invalid={errors.code && true} {...field} value={items.code} name='code' onChange={recupFome}/>}
            />
          </div>
          <div className='mb-1'>
            <Label className='form-label' for='libelle'>
              Libellé
            </Label>
            <Controller
              defaultValue=''
              control={control}
              id='libelle'
              name='libelle'
              render={({ field }) => <Input placeholder='libellé' invalid={errors.libelle && true} {...field} value={items.libelle} name='libelle' onChange={recupFome}/>}
            />
          </div>
          <div className='mb-1'>
            <Label className='form-label' for='value'>
              Montant
            </Label>
            <Controller
              defaultValue=''
              control={control}
              id='value'
              name='value'
              render={({ field }) => (
                <Input
                  type='text'
                  placeholder='Montant'
                  invalid={errors.value && true}
                  {...field}
                  value={items.value}
                  name='value' onChange={recupFome}
                />
              )}
            />
          </div>

          <div className='mb-1'>
            <Label className='form-label' for='produit'>
              Produit
            </Label>
            <Controller
              defaultValue=''
              control={control}
              id='produit'
              name='produit'
              render={({ field }) => (
                <Input
                  type='text'
                  placeholder='Montant'
                  invalid={errors.produit && true}
                  {...field}
                  value={items.produit}
                  name='produit' onChange={recupFome}
                />
              )}
            />
          </div>
          
          <div className='d-flex'>
            <Button className='me-1' color='primary' type='submit'>
              Volider
            </Button>
            <Button outline color='secondary' type='reset' onClick={handleReset}>
              Vider
            </Button>
          </div>
        </Form>
      </CardBody>
    </Card>
  )
}

export default BasicHookForm
