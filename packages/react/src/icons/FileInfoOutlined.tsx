// This icon file is generated automatically.
import * as React from 'react';
import FileInfoOutlinedSvg from '@sensoro-design/icons-svg/es/asn/FileInfoOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const FileInfoOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={FileInfoOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(FileInfoOutlined);

RefIcon.displayName = 'FileInfoOutlined';

export default RefIcon;
