import { Branch } from './branch';
import { Community } from './community';
import { Copyright } from './copyright';
import { Links } from './links';

export const Footer: React.FC = () => {

  return (
    <footer className="bg-black-out w-full pt-24 pb-8 ">
      <div className='container mx-auto'>
        <Community />
        <div className='flex justify-between mt-12'>
          <Branch />
          <Links />
        </div>
        <Copyright />
      </div>
    </footer>
  );
};