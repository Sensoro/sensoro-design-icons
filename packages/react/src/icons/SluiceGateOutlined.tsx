// This icon file is generated automatically.
import * as React from 'react';
import SluiceGateOutlinedSvg from '@sensoro-design/icons-svg/es/asn/SluiceGateOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const SluiceGateOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={SluiceGateOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(SluiceGateOutlined);

RefIcon.displayName = 'SluiceGateOutlined';

export default RefIcon;
