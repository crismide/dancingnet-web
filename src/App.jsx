import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom'

export default function App() {
  return (
    <div className="md:px-[208px] px-[18px] py-[36px] md:pt-[48px]">
      {/* Shared header/navigation */}
      {/* <div className="flex justify-end mb-10">
        <Link 
          to="/politicas" 
          className="hover:text-[#C286F1] transition-colors"
        >
          Políticas
        </Link>
      </div> */}
      
      {/* Page content will be injected here */}
      <Outlet />
    </div>
  );
}