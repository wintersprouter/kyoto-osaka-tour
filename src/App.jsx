import { Navbar } from "flowbite-react";
import "./App.css";
function App() {
  return (
    <Navbar fluid rounded>
      <Navbar.Brand>
        <span className='self-center whitespace-nowrap text-xl font-semibold dark:text-white'>
          關西自由行
        </span>
      </Navbar.Brand>
    </Navbar>
  );
}

export default App;
