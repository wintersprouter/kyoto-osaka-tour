import { Navbar } from "flowbite-react";
import "./App.css";
function App() {
  return (
    <Navbar fluid rounded>
      <Navbar.Brand>
        <h1 className='self-center whitespace-nowrap text-xl font-semibold dark:text-white'>
          關西自由行
        </h1>
      </Navbar.Brand>
    </Navbar>
  );
}

export default App;
