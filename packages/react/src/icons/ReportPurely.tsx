// This icon file is generated automatically.
import * as React from 'react';
import ReportPurelySvg from '@sensoro-design/icons-svg/es/asn/ReportPurely';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const ReportPurely = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={ReportPurelySvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(ReportPurely);

RefIcon.displayName = 'ReportPurely';

export default RefIcon;
