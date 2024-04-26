// This icon file is generated automatically.
import * as React from 'react';
import LakeOutlinedSvg from '@sensoro-design/icons-svg/es/asn/LakeOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const LakeOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={LakeOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(LakeOutlined);

RefIcon.displayName = 'LakeOutlined';

export default RefIcon;
