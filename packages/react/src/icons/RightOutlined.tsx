// This icon file is generated automatically.
import * as React from 'react';
import RightOutlinedSvg from '@sensoro-design/icons-svg/es/asn/RightOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const RightOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={RightOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(RightOutlined);

RefIcon.displayName = 'RightOutlined';

export default RefIcon;
