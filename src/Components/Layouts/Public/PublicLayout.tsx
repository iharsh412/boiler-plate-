import { AppLayoutProps } from '../AppLayout.d';
import Navbar from './Navbar';
import NavCategory from './NavCategory/NavCategory';

function PublicLayout({ children }: AppLayoutProps): JSX.Element {
  return (
    <>
      <Navbar />
      NavCategory
      {children}
      {/* <Footer /> */}
    </>
  );
}

export default PublicLayout;
