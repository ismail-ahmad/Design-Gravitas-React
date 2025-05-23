import { Link, Outlet } from 'react-router-dom';
function Blog({children}) {
    return(
        <>
          <div style={{
            textAlign: 'center'
          }}>
          <h1>Blog</h1>
          <p>Blogs will go down here</p>
          </div>
          {children}
        </>
    );
}

export default function BlogsPage() {
    return(
        <>
          <Blog>
            <div style={{
              display: 'flex',
              flexFlow: 'nowrap row'
            }}>
             <div style={{
              flex: 1
             }}>
               <ul>
                 {['blog-one', 'blog-two', 'blog-three'].map((item, index) => {
                    return <li key={index}><Link to={`/blog/${item}`}>{item}</Link></li>
                 })}
               </ul>
             </div>
             <div style={{
              flex: 5
             }}>
               <Outlet />
             </div>
            </div>
          </Blog>
        </>
    );
}