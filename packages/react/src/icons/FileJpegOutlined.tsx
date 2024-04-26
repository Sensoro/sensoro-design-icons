// This icon file is generated automatically.
import * as React from 'react';
import FileJpegOutlinedSvg from '@sensoro-design/icons-svg/es/asn/FileJpegOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const FileJpegOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={FileJpegOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(FileJpegOutlined);

RefIcon.displayName = 'FileJpegOutlined';

export default RefIcon;
