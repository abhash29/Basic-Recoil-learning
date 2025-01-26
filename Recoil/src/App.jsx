import './App.css'

import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue
} from 'recoil';

import Todos from './Store/components/Todos'

function App() {
  return (
    <RecoilRoot>
      Hey
      <Todos />
    </RecoilRoot>
  )
}

export default App
