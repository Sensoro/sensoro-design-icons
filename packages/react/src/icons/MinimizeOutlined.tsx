// This icon file is generated automatically.
import * as React from 'react';
import MinimizeOutlinedSvg from '@sensoro-design/icons-svg/es/asn/MinimizeOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const MinimizeOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={MinimizeOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(MinimizeOutlined);

RefIcon.displayName = 'MinimizeOutlined';

export default RefIcon;
