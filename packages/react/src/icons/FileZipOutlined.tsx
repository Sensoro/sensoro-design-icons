// This icon file is generated automatically.
import * as React from 'react';
import FileZipOutlinedSvg from '@sensoro-design/icons-svg/es/asn/FileZipOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const FileZipOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={FileZipOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(FileZipOutlined);

RefIcon.displayName = 'FileZipOutlined';

export default RefIcon;
