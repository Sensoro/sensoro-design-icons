// This icon file is generated automatically.
import * as React from 'react';
import FileSyncOutlinedSvg from '@sensoro-design/icons-svg/es/asn/FileSyncOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const FileSyncOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={FileSyncOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(FileSyncOutlined);

RefIcon.displayName = 'FileSyncOutlined';

export default RefIcon;
