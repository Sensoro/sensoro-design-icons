// This icon file is generated automatically.
import * as React from 'react';
import IntelligentAccessOutlinedSvg from '@sensoro-design/icons-svg/es/asn/IntelligentAccessOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const IntelligentAccessOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={IntelligentAccessOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(IntelligentAccessOutlined);

RefIcon.displayName = 'IntelligentAccessOutlined';

export default RefIcon;
