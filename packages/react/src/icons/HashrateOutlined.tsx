// This icon file is generated automatically.
import * as React from 'react';
import HashrateOutlinedSvg from '@sensoro-design/icons-svg/es/asn/HashrateOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const HashrateOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={HashrateOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(HashrateOutlined);

RefIcon.displayName = 'HashrateOutlined';

export default RefIcon;
