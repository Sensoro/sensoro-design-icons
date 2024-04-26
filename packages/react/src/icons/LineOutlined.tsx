// This icon file is generated automatically.
import * as React from 'react';
import LineOutlinedSvg from '@sensoro-design/icons-svg/es/asn/LineOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const LineOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={LineOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(LineOutlined);

RefIcon.displayName = 'LineOutlined';

export default RefIcon;
