// This icon file is generated automatically.
import * as React from 'react';
import LinkFilledSvg from '@sensoro-design/icons-svg/es/asn/LinkFilled';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const LinkFilled = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={LinkFilledSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(LinkFilled);

RefIcon.displayName = 'LinkFilled';

export default RefIcon;
