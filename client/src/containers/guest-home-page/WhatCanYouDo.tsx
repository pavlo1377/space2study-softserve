import Box from '@mui/material/Box'

import { useTranslation } from 'react-i18next'
import { useState } from 'react'

import { guestRoutes } from '~/router/constants/guestRoutes'

import { useModalContext } from '~/context/modal-context'

import { UserRoleEnum } from '~/types'

import TitleWithDescription from '~/components/title-with-description/TitleWithDescription'
import InfoCard from '~/components/info-card/InfoCard'
import RegistrationDialog from './registration-dialog/RegistrationDialog'

import learnImg from '~/assets/img/guest-home-page/learnImg.png'
import teachImg from '~/assets/img/guest-home-page/teachImg.png'

import { styles } from '~/containers/guest-home-page/styles/WhatCanYouDo.styles'

const cardData = [
  {
    img: learnImg,
    title: 'guestHomePage.whatCanYouDo.learn.title',
    description: 'guestHomePage.whatCanYouDo.learn.description',
    actionLabel: 'guestHomePage.whatCanYouDo.learn.actionLabel',
    actionType: UserRoleEnum.Student
  },
  {
    img: teachImg,
    title: 'guestHomePage.whatCanYouDo.teach.title',
    description: 'guestHomePage.whatCanYouDo.teach.description',
    actionLabel: 'guestHomePage.whatCanYouDo.teach.actionLabel',
    actionType: UserRoleEnum.Tutor
  }
]

const WhatCanYouDo = () => {
  const { t } = useTranslation()
  const { openModal } = useModalContext()

  const [selectedRole, setSelectedRole] = useState<UserRoleEnum>(
    UserRoleEnum.Student
  )
  console.log(selectedRole)

  const openDialogWithRole = (role: UserRoleEnum) => {
    setSelectedRole(role)
    openModal({
      component: <RegistrationDialog defaultRole={role} />,
      paperProps: { sx: { maxWidth: 960 } }
    })
  }

  const cards = cardData.map((item) => (
    <InfoCard
      action={() => openDialogWithRole(item.actionType)}
      actionLabel={t(item.actionLabel)}
      cardWidth={460}
      description={t(item.description)}
      img={item.img}
      key={item.title}
      title={t(item.title)}
    />
  ))

  return (
    <Box id={guestRoutes.navBar.whatCanYouDo.route}>
      <TitleWithDescription
        description={t('guestHomePage.whatCanYouDo.description')}
        style={styles.titleWithDescription}
        title={t('guestHomePage.whatCanYouDo.title')}
      />
      <Box sx={styles.cards}>{cards}</Box>
    </Box>
  )
}

export default WhatCanYouDo
