// This icon file is generated automatically.
import * as React from 'react';
import FileReportOutlinedSvg from '@sensoro-design/icons-svg/es/asn/FileReportOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const FileReportOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={FileReportOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(FileReportOutlined);

RefIcon.displayName = 'FileReportOutlined';

export default RefIcon;
