// This icon file is generated automatically.
import * as React from 'react';
import SinglePlayOutlinedSvg from '@sensoro-design/icons-svg/es/asn/SinglePlayOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const SinglePlayOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={SinglePlayOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(SinglePlayOutlined);

RefIcon.displayName = 'SinglePlayOutlined';

export default RefIcon;
