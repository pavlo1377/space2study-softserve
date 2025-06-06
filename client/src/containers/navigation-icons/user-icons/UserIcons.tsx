import { useState, useRef, FC } from 'react'
import { useTranslation } from 'react-i18next'
import { useAppSelector } from '~/hooks/use-redux'
import languageService from '~/services/language-service'
import Box from '@mui/material/Box'

import NavigationIcon from '~/components/navigation-icon/NavigationIcon'
import { userIcons } from '~/containers/navigation-icons/NavigationIcons.constants'

import { styles } from '~/containers/navigation-icons/NavigationIcons.styles'
import AccountMenu from '~/containers/layout/account-menu/AccountMenu'

interface UserIconsProps {
  setSidebarOpen: () => void
}

const UserIcons: FC<UserIconsProps> = ({ setSidebarOpen }) => {
  const [menuAnchorEl, setMenuAnchorEl] = useState<HTMLElement | null>(null)

  const anchorRef = useRef<HTMLDivElement | null>(null)
  const { t } = useTranslation()
  const { userId, userRole } = useAppSelector((state) => state.appMain)

  const openMenu = () => setMenuAnchorEl(anchorRef.current)
  const closeMenu = () => setMenuAnchorEl(null)
  const openNotifications = () => anchorRef.current
  const changeLanguage = () => {
    if (userId && userRole) {
      languageService.toggleLanguage(userId, userRole)
    }
  }

  const icons = userIcons.map(
    (item) =>
      !item.disabled && (
        <NavigationIcon
          badgeContent={item.badgeContent?.({
            notifications: 1
          })}
          buttonProps={item.buttonProps({
            openMenu,
            openNotifications,
            setSidebarOpen,
            changeLanguage
          })}
          icon={item.icon}
          key={item.tooltip}
          tooltip={t(item.tooltip)}
        />
      )
  )

  return (
    <Box ref={anchorRef} sx={styles.iconBox}>
      {icons}
      <AccountMenu anchorEl={menuAnchorEl} onClose={closeMenu} />
    </Box>
  )
}

export default UserIcons
