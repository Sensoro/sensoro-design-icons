// This icon file is generated automatically.
import * as React from 'react';
import TrophyOutlinedSvg from '@sensoro-design/icons-svg/es/asn/TrophyOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const TrophyOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={TrophyOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(TrophyOutlined);

RefIcon.displayName = 'TrophyOutlined';

export default RefIcon;
