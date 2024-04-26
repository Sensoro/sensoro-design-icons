// This icon file is generated automatically.
import * as React from 'react';
import WomanOutlinedSvg from '@sensoro-design/icons-svg/es/asn/WomanOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const WomanOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={WomanOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(WomanOutlined);

RefIcon.displayName = 'WomanOutlined';

export default RefIcon;
