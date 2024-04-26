// This icon file is generated automatically.
import * as React from 'react';
import FileExcelOutlinedSvg from '@sensoro-design/icons-svg/es/asn/FileExcelOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const FileExcelOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={FileExcelOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(FileExcelOutlined);

RefIcon.displayName = 'FileExcelOutlined';

export default RefIcon;
