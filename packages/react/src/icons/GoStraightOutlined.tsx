// This icon file is generated automatically.
import * as React from 'react';
import GoStraightOutlinedSvg from '@sensoro-design/icons-svg/es/asn/GoStraightOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const GoStraightOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={GoStraightOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(GoStraightOutlined);

RefIcon.displayName = 'GoStraightOutlined';

export default RefIcon;
