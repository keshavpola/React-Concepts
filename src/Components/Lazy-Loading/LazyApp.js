import React, {Suspense} from 'react'
import {BrowserRouter,Switch,Route} from 'react-router-dom'
// import Home from './Components/Lazy-Loading/Home';
// import Login from './Components/Lazy-Loading/Login';
// import Register from './Components/Lazy-Loading/Register';
const Home=React.lazy(()=>import('./Components/Lazy-Loading/Home'))
const Login=React.lazy(()=>import('./Components/Lazy-Loading/Login'))
const Register = React.lazy(()=>import('./Components/Lazy-Loading/Register'))
function LazyApp() {
  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/login' element={<Suspense><Login/></Suspense>}></Route>
        
      </Switch>
      </BrowserRouter>
      <Suspense fallback="Loading...">
        <Register/>
      </Suspense>
    </div>
  );
}

export default LazyApp;
