import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router";

export default function Layout() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <div className="flex-grow-1 p-4">
        <div className="mx-auto" style={{ maxWidth: "56rem" }}>
          <Outlet />
        </div>
      </div>
      <Toaster />
    </div>
  )
}