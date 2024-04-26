// This icon file is generated automatically.
import * as React from 'react';
import AppletsOutlinedSvg from '@sensoro-design/icons-svg/es/asn/AppletsOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const AppletsOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={AppletsOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(AppletsOutlined);

RefIcon.displayName = 'AppletsOutlined';

export default RefIcon;
