import { NavLink } from "react-router-dom";
export default function NavBar() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/orders">Orders History</NavLink>
        </li>
        <li>
          <NavLink to="/orders/new">New Order</NavLink>
        </li>
      </ul>
    </nav>
  );
}
