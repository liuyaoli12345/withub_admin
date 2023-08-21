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
  return false
}

export default withAuth