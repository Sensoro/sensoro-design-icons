// This icon file is generated automatically.
import * as React from 'react';
import UnorderedListOutlinedSvg from '@sensoro-design/icons-svg/es/asn/UnorderedListOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const UnorderedListOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={UnorderedListOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(UnorderedListOutlined);

RefIcon.displayName = 'UnorderedListOutlined';

export default RefIcon;
