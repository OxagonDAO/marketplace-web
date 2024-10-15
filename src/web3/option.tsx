import React, { FC } from 'react'
import { ConnectionType } from "./types";
import { getConnection, tryActivateConnector, tryDeactivateConnector } from './connectors';
import Image from 'next/image';
import { Heading, Paragraph } from '@/shared/ui';
import { TbChevronRight } from 'react-icons/tb';

type Props = {
  logo: string,
  color: string
  name: string,
  width: number,
  height: number,
  description: string,
  isEnabled: boolean
  isConnected: boolean
  connectionType: ConnectionType
  onActivate: (connectionType: ConnectionType) => void
  onDeactivate: (connectionType: null) => void
}

export const Option: FC<Props> = (props) => {
  const {
    isEnabled,
    isConnected,
    connectionType,
    onActivate,
    onDeactivate,
    color, 
    description, 
    logo, 
    name, 
    width, 
    height
  } = props

  const onClick = async () => {
    if (isConnected) {
      const deactivation = await tryDeactivateConnector(getConnection(connectionType).connector)
      // undefined means the deactivation failed
      if (deactivation === undefined) {
        return
      }
      onDeactivate(deactivation)
      return
    }

    const activation = await tryActivateConnector(getConnection(connectionType).connector)
    console.log(activation, "activation")
    if (!activation) {
      return
    }
    onActivate(activation)
    return
  }

  return (
    <article
      className="flex select-none items-center justify-between px-6 py-4 rounded-2xl border border-black-out-20 hover:border-blue max-w-5xl focus:bg-black-out-10/20"
      role="button"
      tabIndex={1}
      onClick={onClick}
      aria-label={`Connect with ${name}`}
    >
      <div className="flex items-center">
        <div className='flex items-center justify-center rounded-2xl w-20 h-20' style={{ backgroundColor: color }}>
          <Image src={logo} alt={`${name} logo`} width={width} height={height} />
        </div>
        <div className='ml-6'>
          <Heading as='h4' level='4'>{name}</Heading>
          <Paragraph size='lg' className="mt-2 text-black-out-40">{description}</Paragraph>
        </div>
      </div>
      <TbChevronRight  className='text-black w-6 h-6' />
    </article>
  )

  return (
    <div>
      <button onClick={onClick} disabled={!isEnabled}>{`${
        isConnected ? 'Disconnect' : 'Connect'
      } ${connectionType}`}</button>
    </div>
  )
}