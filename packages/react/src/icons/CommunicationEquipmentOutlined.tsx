// This icon file is generated automatically.
import * as React from 'react';
import CommunicationEquipmentOutlinedSvg from '@sensoro-design/icons-svg/es/asn/CommunicationEquipmentOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const CommunicationEquipmentOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={CommunicationEquipmentOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(CommunicationEquipmentOutlined);

RefIcon.displayName = 'CommunicationEquipmentOutlined';

export default RefIcon;
