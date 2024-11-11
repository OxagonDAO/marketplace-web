"use client"
import Link from 'next/link';
import { Button, Input, Logo } from '@/shared/ui';
import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from '@nextui-org/navbar';
import { useTranslation } from 'react-i18next';
import { NavLinks } from './nav-links';
import { TbSearch } from "react-icons/tb";
import { useWeb3React } from '@web3-react/core';
import { WalletInfo } from '@/web3/ui';
import { ConnectWalletButton } from './connect-wallet-button';

export const Header: React.FC = () => {
  const { t } = useTranslation("common", { keyPrefix: "header"})
  const { isActivating, isActive } = useWeb3React()

  return (
    <Navbar classNames={{
      base: "w-full h-[107px]",
      wrapper: "!container !w-full px-4"
    }}>
      <NavbarBrand>
        <Logo />
      </NavbarBrand>

      <NavLinks />
      <NavbarContent>
        <Input 
          placeholder={t("search")}
          endContent={<TbSearch />} 
        />
      </NavbarContent>

      <NavbarContent justify="end">
        {/* <NavbarItem className="hidden lg:flex">
          <Link href="/auth/sign-in">
            {t("signIn")}
          </Link>
        </NavbarItem> */}
        <NavbarItem>
          {isActive ? (
            <div className='flex gap-4'>
              <Link href="/nft/create">
                <Button size='lg' as={Link} color="primary" href="#" /* variant="flat" */>
                  {t("create")}
                </Button>
              </Link>
              <WalletInfo />
            </div>
          ) : (
          <ConnectWalletButton />
          )}
        </NavbarItem>
      </NavbarContent>

      {/* <div className="flex items-center space-x-4">
        <Logo />
        <NavLinks />
      </div> */}
      {/* <div className="flex items-center space-x-4">
        <SearchBar />
        <ThemeToggle />
        <ActionButtons />
      </div> */}
    </Navbar>
  );
};