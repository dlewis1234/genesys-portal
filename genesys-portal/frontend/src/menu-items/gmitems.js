// assets
import { CrownOutlined } from '@ant-design/icons';

// icons
const icons = {
  CrownOutlined
};

// ==============================|| MENU ITEMS - DASHBOARD ||============================== //

const gmitems = {
  id: 'group-gm-items',
  title: 'GM Tools',
  type: 'group',
  children: [
    {
      id: 'gmscreen',
      title: 'GM Screen',
      type: 'item',
      url: '/gmscreen',
      icon: icons.CrownOutlined,
      breadcrumbs: false
    }
  ]
};

export default gmitems;
