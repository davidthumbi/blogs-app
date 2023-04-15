import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { TopBar, NavBar, Footer } from "./components";
import {
  Blogs,
  BlogDetails,
  About,
  Contact,
  CreateBlog,
  Login,
  Register,
  NotFound,
} from "./pages";

const AppLayout = () => (
  <>
    <TopBar />
    <NavBar />
    <hr className="border-1 border-gray-600" />
        <Outlet />
    <Footer />
  </>
);

function App() {
  return (
    <BrowserRouter>
      <div className="">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route element={<AppLayout />}>
            <Route path="/" element={<Blogs />} />
            <Route path="/:id" element={<BlogDetails />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/create_blog" element={<CreateBlog />} />
            <Route path="/*" element={<NotFound />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
