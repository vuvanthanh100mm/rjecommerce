import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { routes } from './routes';
import DefaultComponent from './components/DefaultComponent/DefaultComponent';

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          {
            routes.map((r) => {
              //const Layout = r.isShowHeader ? DefaultComponent : null
              const Layout = r.isShowHeader ? DefaultComponent : React.Fragment;
              return (
                <Route path={r.path} element=
                  {
                    <Layout>
                      <r.page />
                    </Layout>
                  } />
              )
            })
          }
        </Routes>
      </Router>
    </div>
  );
};

export default App;