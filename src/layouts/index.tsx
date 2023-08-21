import { Link, Outlet } from 'umi';
import styles from './index.less';
import Dashboard from '@/components/dashboard';

export default function Layout() {
  return (
    <div className={styles.navs}>
      {/* < Dashboard/> */}
      <Outlet/>
    </div>
  );
}
