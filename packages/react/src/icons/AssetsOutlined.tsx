// This icon file is generated automatically.
import * as React from 'react';
import AssetsOutlinedSvg from '@sensoro-design/icons-svg/es/asn/AssetsOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const AssetsOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={AssetsOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(AssetsOutlined);

RefIcon.displayName = 'AssetsOutlined';

export default RefIcon;
