
import Labs from './Labs';
import Kambaz from "./Kambaz";
import { HashRouter, Route, Routes, Navigate } from 'react-router-dom'
import './App.css'
import Landing from './Landing/index';

function App() {
  return (
    // BrowserRouter 这里Netlify 识别不了BrowseRouter, 所以得用更广泛的HashRouter, 被更多的hosting services 认可
    <HashRouter>
      {/* import Labs folder, so all index file in Labs can be displayed */}
      <div>
        {/* <Routes> 包裹多个 <Route>，会根据当前的 URL 自动匹配并渲染正确的组件 */}
        <Routes>
          {/* path="/Labs/*" 是路由路径的规则 */}
          {/* 当 URL 匹配 /Labs/* 时，React Router 会渲染 Labs 组件,浏览器会显示 Labs 组件返回的内容 */}
          <Route path="/" element={<Navigate to="Kambaz" />} />
          <Route path="/Labs/*" element={<Labs />} />
          <Route path="/Kambaz/*" element={<Kambaz />} />
          <Route path="/Landing" element={<Landing />} />
        </Routes>
        {/* <Labs /> 这里之前放的Labs要被删除， 因为上面已经有一个Route来tie Labs URL */}
      </div>
    </HashRouter>
  )
}

export default App
