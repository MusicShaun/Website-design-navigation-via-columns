import HomePage from './home';
import { useGlobalContext } from '../globalContexts/index';
import { useWindowSize } from 'usehooks-ts';
import { useAppDispatch } from '../app/hooks';



export default function Home() {

  const { width, height } = useWindowSize()
  const { columnWidth, contentPosition } = useGlobalContext()
  
  const dispatch = useAppDispatch();


  return (<>



      <main style={{
        position: 'relative',
        width: `${100 - columnWidth * 3}%`,
        minHeight: `${height}px`,
        height: '300%',
        marginLeft: `${contentPosition}%`,
        backgroundColor: `transparent`,     
      }}>
        <HomePage />
    

  </main>


  </>)
}
