// This icon file is generated automatically.
import * as React from 'react';
import FootTrafficOutlinedSvg from '@sensoro-design/icons-svg/es/asn/FootTrafficOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const FootTrafficOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={FootTrafficOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(FootTrafficOutlined);

RefIcon.displayName = 'FootTrafficOutlined';

export default RefIcon;
