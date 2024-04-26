// This icon file is generated automatically.
import * as React from 'react';
import RightCircleOutlinedSvg from '@sensoro-design/icons-svg/es/asn/RightCircleOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const RightCircleOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={RightCircleOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(RightCircleOutlined);

RefIcon.displayName = 'RightCircleOutlined';

export default RefIcon;
