import About from "../pages/About";
import Login from "../pages/Login";
import PostIdPage from "../pages/PostIdPage";
import Posts from "../pages/Posts";

export const privateRoutes = [
    {path: '*', element: <Posts/>, exact: true},
    {path: '/posts', element: <Posts/>, exact: true},
    {path: '/posts/:id', element: <PostIdPage/>, exact: true},
    {path: '/about', element: <About />, exact: true}
]

export const publicRoutes = [
    {path: '*', element: <Login/>, exact: true},
    {path: '/login', element: <Login/>, exact: true}
]