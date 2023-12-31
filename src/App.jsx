
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NoPortalExample from './component/NoPortalExample';
import PortalExample from './component/PortalExample';

export default function App() {
  return (
    <>
      <div className="clipping-container">
        <NoPortalExample  />
      </div>
      <div className="clipping-container">
        <PortalExample />
      </div>
    </>
  );
}



