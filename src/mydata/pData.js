import mech from '../assets/contact/pngtree-photo-of-a-mechanical-engine-on-a-black-background-picture-image_2751507.jpg';
import elec from '../assets/contact/distribution-panel.jpg';
import civil from '../assets/contact/civil.png';
import rob from '../assets/contact/service-03.jpg';
import heavy from '../assets/contact/service-04.jpg';
import design from '../assets/contact/service-05.jpg';

// MUI Icons
import EngineeringIcon from '@mui/icons-material/Engineering';
import BoltIcon from '@mui/icons-material/Bolt';
import FoundationIcon from '@mui/icons-material/Foundation';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import ConstructionIcon from '@mui/icons-material/Construction';
import DesignServicesIcon from '@mui/icons-material/DesignServices';

const cards = [
  {
    title: 'Mechanical Engineering',
    desc: '...',
    img: mech,
    icon: EngineeringIcon,
  },
  {
    title: 'Electrical Engineering',
    desc: '...',
    img: elec,
    icon: BoltIcon,
  },
  {
    title: 'Civil Engineering',
    desc: '...',
    img: civil,
    icon: FoundationIcon,
  },
  {
    title: 'Automation and Robotics',
    desc: '...',
    img: rob,
    icon: SmartToyIcon,
  },
  {
    title: 'Heavy Equipment',
    desc: '...',
    img: heavy,
    icon: ConstructionIcon,
  },
  {
    title: 'Design',
    desc: '...',
    img: design,
    icon: DesignServicesIcon,
  },
];

export default cards;

