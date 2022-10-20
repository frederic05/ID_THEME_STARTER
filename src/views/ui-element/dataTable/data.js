// ** Custom Components
import Avatar from '@components/avatar'

import { MoreVertical, Edit, FileText, Archive, Trash } from 'react-feather'

// ** Reactstrap Imports
import { Badge, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'

// ** Table Intl Column
export const multiLingColumns = [
  {
    name: 'Code',
    sortable: true,
    minWidth: '200px',
    selector: row => row.code
  },
  {
    name: 'Libellé',
    sortable: true,
    minWidth: '250px',
    selector: row => row.libelle
  },
  {
    name: 'Montant',
    sortable: true,
    minWidth: '250px',
    selector: row => row.value
  },
  {
    name: 'Date',
    sortable: true,
    minWidth: '150px',
    selector: row => row.createdAt
  },

  {
    name: 'Produit',
    sortable: true,
    minWidth: '150px',
    selector: row => row.produit
  },
  {
    name: 'Actions',
    allowOverflow: true,
    cell: () => {
      return (
        <div className='d-flex'>
          <UncontrolledDropdown>
            <DropdownToggle className='pe-1' tag='span'>
              <MoreVertical size={15} />
            </DropdownToggle>
            <DropdownMenu end>
              <DropdownItem>
                <FileText size={15} />
                <span className='align-middle ms-50'>Details</span>
              </DropdownItem>
              <DropdownItem>
                <Archive size={15} />
                <span className='align-middle ms-50'>Modification</span>
              </DropdownItem>
              <DropdownItem>
                <Trash size={15} />
                <span className='align-middle ms-50'>Supprimer</span>
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
          <Edit size={15} />
        </div>
      )
    }
  }
]
