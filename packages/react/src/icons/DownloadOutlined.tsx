// This icon file is generated automatically.
import * as React from 'react';
import DownloadOutlinedSvg from '@sensoro-design/icons-svg/es/asn/DownloadOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const DownloadOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={DownloadOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(DownloadOutlined);

RefIcon.displayName = 'DownloadOutlined';

export default RefIcon;
