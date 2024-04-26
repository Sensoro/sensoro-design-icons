// This icon file is generated automatically.
import * as React from 'react';
import NoodleOutlinedSvg from '@sensoro-design/icons-svg/es/asn/NoodleOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const NoodleOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={NoodleOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(NoodleOutlined);

RefIcon.displayName = 'NoodleOutlined';

export default RefIcon;
