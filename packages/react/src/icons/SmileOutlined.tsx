// This icon file is generated automatically.
import * as React from 'react';
import SmileOutlinedSvg from '@sensoro-design/icons-svg/es/asn/SmileOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const SmileOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={SmileOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(SmileOutlined);

RefIcon.displayName = 'SmileOutlined';

export default RefIcon;
