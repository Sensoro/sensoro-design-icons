// This icon file is generated automatically.
import * as React from 'react';
import FileWarningOutlinedSvg from '@sensoro-design/icons-svg/es/asn/FileWarningOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const FileWarningOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={FileWarningOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(FileWarningOutlined);

RefIcon.displayName = 'FileWarningOutlined';

export default RefIcon;
