import './App.css'

import Profile from './components/Profile'
import Image from './components/Image'
function App() {
  return (
    <div className="App">
      <Profile
        fullName={{name:"adam"}}
        bio="Imagination is more important than knowledge – Albert Einstein"
        profession="Profession"
      >
        <Image />
      </Profile>
    </div>
  )
}

export default App
