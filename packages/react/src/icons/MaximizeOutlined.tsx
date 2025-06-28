// This icon file is generated automatically.
import * as React from 'react';
import MaximizeOutlinedSvg from '@sensoro-design/icons-svg/es/asn/MaximizeOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const MaximizeOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={MaximizeOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(MaximizeOutlined);

RefIcon.displayName = 'MaximizeOutlined';

export default RefIcon;
