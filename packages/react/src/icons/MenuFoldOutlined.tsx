// This icon file is generated automatically.
import * as React from 'react';
import MenuFoldOutlinedSvg from '@sensoro-design/icons-svg/es/asn/MenuFoldOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const MenuFoldOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={MenuFoldOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(MenuFoldOutlined);

RefIcon.displayName = 'MenuFoldOutlined';

export default RefIcon;
