import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router'
import { FrameSidebar } from './frame/FrameSidebar'
import { PagePipeline } from './pages/PagePipeline'
import { PageProject } from './pages/PageProject'
import { PageMeeting } from './pages/PageMeeting'
import { PageScript } from './pages/PageScript'
import { PageStoryboard } from './pages/PageStoryboard'
import { PageNotFound } from './pages/PageNotFound'
import './main.css';
import { ConfigProvider } from 'antd'
import { globalTheme } from './themes/theme'

createRoot(document.getElementById('root')!).render(
  <ConfigProvider theme={globalTheme}>
    <BrowserRouter>
      <Routes>
        <Route element={<FrameSidebar />} >
          <Route path='/' element={<PagePipeline />} />
          <Route path='/projects' element={<PageProject />} />
          <Route path='/meetings' element={<PageMeeting />} />
          <Route path='/scripts' element={<PageScript />} />
          <Route path='/storyboards' element={<PageStoryboard />} />
          <Route path='*' element={<PageNotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </ConfigProvider>
)
