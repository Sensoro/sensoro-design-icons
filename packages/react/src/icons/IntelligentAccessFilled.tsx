// This icon file is generated automatically.
import * as React from 'react';
import IntelligentAccessFilledSvg from '@sensoro-design/icons-svg/es/asn/IntelligentAccessFilled';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const IntelligentAccessFilled = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={IntelligentAccessFilledSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(IntelligentAccessFilled);

RefIcon.displayName = 'IntelligentAccessFilled';

export default RefIcon;
