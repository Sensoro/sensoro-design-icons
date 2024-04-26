// This icon file is generated automatically.
import * as React from 'react';
import FileCheckOutlinedSvg from '@sensoro-design/icons-svg/es/asn/FileCheckOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const FileCheckOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={FileCheckOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(FileCheckOutlined);

RefIcon.displayName = 'FileCheckOutlined';

export default RefIcon;
