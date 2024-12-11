// This icon file is generated automatically.
import * as React from 'react';
import ClosureOutlinedSvg from '@sensoro-design/icons-svg/es/asn/ClosureOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const ClosureOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={ClosureOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(ClosureOutlined);

RefIcon.displayName = 'ClosureOutlined';

export default RefIcon;
