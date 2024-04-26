// This icon file is generated automatically.
import * as React from 'react';
import BugOutlinedSvg from '@sensoro-design/icons-svg/es/asn/BugOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const BugOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={BugOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(BugOutlined);

RefIcon.displayName = 'BugOutlined';

export default RefIcon;
