import { useState } from 'react';
import { Group, Code } from '@mantine/core';
import {
  IconBellRinging,
  Icon2fa,
  IconDatabaseImport,
  IconReceipt2,
  IconSwitchHorizontal,
  IconLogout,
  IconUser
} from '@tabler/icons-react';
import { MantineLogo } from '@mantinex/mantine-logo';
import classes from './Navc.module.css'
import { Link } from 'react-router-dom';
const data = [
  { link: '/admin', label: 'admin', icon: IconUser },
  { link: '/notification', label: 'Notifications', icon: IconBellRinging },
  { link: '/billing', label: 'Billing', icon: IconReceipt2 },
  { link: '/database', label: 'Databases', icon: IconDatabaseImport },
  { link: '/auth', label: 'Authentication', icon: Icon2fa },
];

export function Navbar() {
  const [active, setActive] = useState('Billing');

  const links = data.map((item) => (
    <a
      className={classes.link}
      data-active={item.label === active || undefined}
      href={item.link}
      key={item.label}
      onClick={(event) => {
        event.preventDefault();
        setActive(item.label);
      }}
    >   <Link to={item.link} >
        <item.icon className={classes.linkIcon} stroke={1.5} />
        <span>{item.label}</span>
      </Link>
    </a>
  ));

  return (
    <nav className={classes.navbar}>
      <div className={classes.navbarMain}>
        <Group className={classes.header} justify="space-between">
          <MantineLogo size={28} inverted style={{ color: 'white' }} />
          <Code fw={700} className={classes.version}>
            Finance App
          </Code>
        </Group>
        {links}
      </div>

      <div className={classes.footer}>
        <a href="#" className={classes.link} onClick={(event) => event.preventDefault()}>
          <IconSwitchHorizontal className={classes.linkIcon} stroke={1.5} />
          <span>Change account</span>
        </a>

        <a href="#" className={classes.link} onClick={(event) => event.preventDefault()}>
          <IconLogout className={classes.linkIcon} stroke={1.5} />
          <span>Logout</span>
        </a>
      </div>
    </nav>
  );
}