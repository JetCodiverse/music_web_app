import Brand from "./Brand";
import Search from "./Search";
import "../css/header.css";

function Header() {
  return (
    <div>
      <header>
        <Brand />
        <Search />
      </header>
    </div>
  );
}

export default Header;
