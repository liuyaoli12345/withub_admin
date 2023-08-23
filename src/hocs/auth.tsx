import { Navigate } from 'umi'

const withAuth = (Component: any) => ()=>{
  const isLogin  = useAuth();
  if (isLogin) {
    return <Component />;
  } else{
    return <Navigate to="/login" />;
  }
}

const useAuth = function(): boolean{
  const localStorage = window.localStorage;
  const isLogin = localStorage.getItem("isLogin");
  // console.log("进行判断")
  if(isLogin==="true"){
    return true
  } else {
    return false
  }
}

export default withAuth