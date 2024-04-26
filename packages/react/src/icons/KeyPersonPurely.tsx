// This icon file is generated automatically.
import * as React from 'react';
import KeyPersonPurelySvg from '@sensoro-design/icons-svg/es/asn/KeyPersonPurely';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const KeyPersonPurely = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={KeyPersonPurelySvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(KeyPersonPurely);

RefIcon.displayName = 'KeyPersonPurely';

export default RefIcon;
