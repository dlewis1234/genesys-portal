// assets
import { FilePdfOutlined } from '@ant-design/icons';

// icons
const icons = {
  FilePdfOutlined
};

// ==============================|| MENU ITEMS - DASHBOARD ||============================== //

const rulebooks = {
  id: 'group-rule-books',
  title: 'Rule Books',
  type: 'group',
  children: [
    {
      id: 'genesyscore',
      title: 'Core Rulebook',
      type: 'item',
      url: '/core',
      icon: icons.FilePdfOutlined,
      breadcrumbs: false
    },
    {
      id: 'playersguide',
      title: 'Players Guide',
      type: 'item',
      url: '/guide',
      icon: icons.FilePdfOutlined,
      breadcrumbs: false
    }
  ]
};

export default rulebooks;
