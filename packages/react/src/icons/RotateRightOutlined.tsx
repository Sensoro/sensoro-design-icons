// This icon file is generated automatically.
import * as React from 'react';
import RotateRightOutlinedSvg from '@sensoro-design/icons-svg/es/asn/RotateRightOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const RotateRightOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={RotateRightOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(RotateRightOutlined);

RefIcon.displayName = 'RotateRightOutlined';

export default RefIcon;
