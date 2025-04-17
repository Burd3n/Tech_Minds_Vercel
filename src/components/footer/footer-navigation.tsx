import React, { FC } from 'react'
import Link from 'next/link'
import Grid from '@mui/material/Grid'
import MuiLink from '@mui/material/Link'
import type { Navigation } from '@/interfaces/navigation'
import { navigations as headerNavigations } from '@/components/navigation/navigation.data'
import { FooterSectionTitle } from '@/components/footer'
import { FooterSocialLinks } from '@/components/footer'
import Typography from '@mui/material/Typography'


const courseMenu: Array<Navigation> = [
  {
    label: '',
    path: '#',
  },
  {
    label: '',
    path: '#',
  },
  {
    label: '',
    path: '#',
  },
  {
    label: '',
    path: '#',
  },
]

const pageMenu = headerNavigations

//const companyMenu: Array<Navigation> = [
//  { label: 'Contact us', path: '#' },
//]

interface NavigationItemProps {
  label: string
  path: string
}

const NavigationItem: FC<NavigationItemProps> = ({ label, path }) => {
  return (
    <Link href={path} passHref>
      <MuiLink
        underline="hover"
        sx={{
          display: 'block',
          mb: 1,
          color: 'primary.contrastText',
        }}
      >
        {label}
      </MuiLink>
    </Link>
  )
}

const FooterNavigation: FC = () => {
  return (
    <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
        <FooterSectionTitle title="" />
        {courseMenu.map(({ label, path }, index) => (
          <NavigationItem key={index + path} label={label} path={/* path */ '#'} />
        ))}
      </Grid>
      <Grid item xs={12} md={4}>
        <FooterSectionTitle title="" />
        {pageMenu.map(({ label, path }, index) => (
          <NavigationItem key={index + path} label={label} path={path} />
        ))}
      </Grid>
      <Grid item xs={12} md={4}>
        <FooterSectionTitle title="About" />
          <Typography component="h4" variant="h5" sx={{mb: 2}}>
            Contact us
          </Typography>
        <FooterSocialLinks />
      </Grid>
    </Grid>
  )
}

export default FooterNavigation
