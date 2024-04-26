// This icon file is generated automatically.
import * as React from 'react';
import FileOutlinedSvg from '@sensoro-design/icons-svg/es/asn/FileOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const FileOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={FileOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(FileOutlined);

RefIcon.displayName = 'FileOutlined';

export default RefIcon;
