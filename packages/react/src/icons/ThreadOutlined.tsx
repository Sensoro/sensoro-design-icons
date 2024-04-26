// This icon file is generated automatically.
import * as React from 'react';
import ThreadOutlinedSvg from '@sensoro-design/icons-svg/es/asn/ThreadOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const ThreadOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={ThreadOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(ThreadOutlined);

RefIcon.displayName = 'ThreadOutlined';

export default RefIcon;
