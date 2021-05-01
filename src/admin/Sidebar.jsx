const { NavLink } = require("react-router-dom");

function Sidebar() {
  return (
    <div className="w-96 relative min-h-screen bg-btn text-btn">
      <div className="w-full sticky top-0 ">
        <NavLink
          className="bg-btnsec block p-10 text-center text-2xl"
          to="/admin/dashboard/manage-categories"
        >
          Manage categorirs
        </NavLink>
      </div>
    </div>
  );
}

export default Sidebar;
