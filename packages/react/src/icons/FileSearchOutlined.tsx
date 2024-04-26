// This icon file is generated automatically.
import * as React from 'react';
import FileSearchOutlinedSvg from '@sensoro-design/icons-svg/es/asn/FileSearchOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const FileSearchOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={FileSearchOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(FileSearchOutlined);

RefIcon.displayName = 'FileSearchOutlined';

export default RefIcon;
