import { createRoot } from 'react-dom/client'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router'
import { FrameSidebar } from './frame/FrameSidebar'
import { PagePipeline } from './pages/pipeline/PagePipeline'
import { PageProject } from './pages/project/PageProject'
import { PageMeeting } from './pages/meeting/PageMeeting'
import { PageScript } from './pages/script/PageScript'
import { PageStoryboard } from './pages/storyboard/PageStoryboard'
import { PageNotFound } from './pages/util/PageNotFound'
import './main.css';
import { ConfigProvider } from 'antd'
import { globalTheme } from './themes/theme'
import { PagePipelineDetail } from './pages/pipeline/PagePipelineDetail'

createRoot(document.getElementById('root')!).render(
  <ConfigProvider theme={globalTheme}>
    <BrowserRouter>
      <Routes>
        <Route element={<FrameSidebar />} >
          <Route path='/' element={<Navigate to='/pipelines' replace/>}/>
          <Route path='/pipelines' element={<PagePipeline />} />
          <Route path='/pipelines/:id' element={<PagePipelineDetail />} />
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
