// This icon file is generated automatically.
import * as React from 'react';
import ScanCodeOutlinedSvg from '@sensoro-design/icons-svg/es/asn/ScanCodeOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const ScanCodeOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={ScanCodeOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(ScanCodeOutlined);

RefIcon.displayName = 'ScanCodeOutlined';

export default RefIcon;
