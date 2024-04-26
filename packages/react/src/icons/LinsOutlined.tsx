// This icon file is generated automatically.
import * as React from 'react';
import LinsOutlinedSvg from '@sensoro-design/icons-svg/es/asn/LinsOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const LinsOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={LinsOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(LinsOutlined);

RefIcon.displayName = 'LinsOutlined';

export default RefIcon;
