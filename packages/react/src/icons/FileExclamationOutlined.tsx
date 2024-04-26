// This icon file is generated automatically.
import * as React from 'react';
import FileExclamationOutlinedSvg from '@sensoro-design/icons-svg/es/asn/FileExclamationOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const FileExclamationOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={FileExclamationOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(FileExclamationOutlined);

RefIcon.displayName = 'FileExclamationOutlined';

export default RefIcon;
