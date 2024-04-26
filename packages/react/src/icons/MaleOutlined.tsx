// This icon file is generated automatically.
import * as React from 'react';
import MaleOutlinedSvg from '@sensoro-design/icons-svg/es/asn/MaleOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const MaleOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={MaleOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(MaleOutlined);

RefIcon.displayName = 'MaleOutlined';

export default RefIcon;
