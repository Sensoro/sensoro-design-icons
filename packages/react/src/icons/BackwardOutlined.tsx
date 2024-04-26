// This icon file is generated automatically.
import * as React from 'react';
import BackwardOutlinedSvg from '@sensoro-design/icons-svg/es/asn/BackwardOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const BackwardOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={BackwardOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(BackwardOutlined);

RefIcon.displayName = 'BackwardOutlined';

export default RefIcon;
