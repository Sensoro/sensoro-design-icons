// This icon file is generated automatically.
import * as React from 'react';
import MehOutlinedSvg from '@sensoro-design/icons-svg/es/asn/MehOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const MehOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={MehOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(MehOutlined);

RefIcon.displayName = 'MehOutlined';

export default RefIcon;
