import ColumnContainer from '../../components/ColumnContainer';
import { COLORS } from '../../constants/colors';

export default function Navigation() {

  return (
    <nav style={{
      position: 'absolute',
      top: '0',
      left: '0',
      width: '100%',
      height: '100%',
      backgroundColor: `${COLORS.PAGE}`
    }}>
      <ColumnContainer />

    </nav>
  )
}

