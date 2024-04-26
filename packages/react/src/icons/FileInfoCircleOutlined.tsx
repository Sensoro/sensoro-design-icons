// This icon file is generated automatically.
import * as React from 'react';
import FileInfoCircleOutlinedSvg from '@sensoro-design/icons-svg/es/asn/FileInfoCircleOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const FileInfoCircleOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={FileInfoCircleOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(FileInfoCircleOutlined);

RefIcon.displayName = 'FileInfoCircleOutlined';

export default RefIcon;
