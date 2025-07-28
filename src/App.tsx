import './styles/global.css'
import './styles/theme.css'

import { Heading } from './components/Heading'
import { TimerIcon } from 'lucide-react'

function App() {
  return (
    <>
      {/* <Heading>
        Chronos Pomodoro
        <button>
          <TimerIcon color='#0a0f1a' />
        </button>
      </Heading> */}

      <div className='container'>
        <div className='content'>
          <section>logo</section>
        </div>
      </div>

      <div className='container'>
        <div className='content'>
          <section>menu</section>
        </div>
      </div>

      <div className='container'>
        <div className='content'>
          <section>form</section>
        </div>
      </div>

      <div className='container'>
        <div className='content'>
          <section>footer</section>
        </div>
      </div>
    </>
  )
}

export { App }
