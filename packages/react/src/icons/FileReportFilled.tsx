// This icon file is generated automatically.
import * as React from 'react';
import FileReportFilledSvg from '@sensoro-design/icons-svg/es/asn/FileReportFilled';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const FileReportFilled = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={FileReportFilledSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(FileReportFilled);

RefIcon.displayName = 'FileReportFilled';

export default RefIcon;
