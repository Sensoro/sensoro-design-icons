// This icon file is generated automatically.
import * as React from 'react';
import FileTempOutlinedSvg from '@sensoro-design/icons-svg/es/asn/FileTempOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const FileTempOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={FileTempOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(FileTempOutlined);

RefIcon.displayName = 'FileTempOutlined';

export default RefIcon;
