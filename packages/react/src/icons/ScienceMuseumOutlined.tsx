// This icon file is generated automatically.
import * as React from 'react';
import ScienceMuseumOutlinedSvg from '@sensoro-design/icons-svg/es/asn/ScienceMuseumOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const ScienceMuseumOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={ScienceMuseumOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(ScienceMuseumOutlined);

RefIcon.displayName = 'ScienceMuseumOutlined';

export default RefIcon;
