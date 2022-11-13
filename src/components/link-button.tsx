import React, { useCallback } from 'react'
import * as Linking from 'expo-linking'
import { Button, IButtonProps } from 'native-base'
interface Props extends IButtonProps {
  href: string
}

const LinkButton = ({ href, ...props }: Props) => {
  const hanldePrss = useCallback(() => {
    Linking.openURL(href)
  }, [href])
  return <Button {...props} onPress={hanldePrss} />
}

export default LinkButton
