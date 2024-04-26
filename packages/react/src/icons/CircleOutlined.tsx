// This icon file is generated automatically.
import * as React from 'react';
import CircleOutlinedSvg from '@sensoro-design/icons-svg/es/asn/CircleOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const CircleOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={CircleOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(CircleOutlined);

RefIcon.displayName = 'CircleOutlined';

export default RefIcon;
