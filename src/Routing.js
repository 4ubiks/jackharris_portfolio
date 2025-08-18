import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {Home} from './pages/home.js';
import {Skills} from './pages/skills.js';
import {Resume} from './pages/resume.js';
import {Portfolio} from './pages/portfolio.js';
import {Blog} from './pages/blog.js';
import {ETCBlog} from './pages/blogs/etcInternship.js'

export const Path = () => {
    return(
        <Router>
            <Routes>
                <Route path="/" element={<Home/>}>
                    </Route>
                <Route path="/resume/skills" element={<Skills/>}>
                    </Route>
                <Route path="/resume" element={<Resume/>}>                    
                    </Route>
                <Route path="/portfolio" element={<Portfolio/>}>
                    </Route>
                <Route path="/blog" element={<Blog/>}>
                    </Route>
                
                <Route path="/blog/etcDevOps" element={<ETCBlog/>}>
                    </Route>
            </Routes>
        </Router>
    )
}